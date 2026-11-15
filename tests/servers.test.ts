import {it,expect} from 'vitest';
import {spawn} from 'node:child_process';
import {createServer} from 'node:net';
import {readFile} from 'node:fs/promises';

async function availablePort(){const server=createServer();await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));const port=(server.address() as {port:number}).port;await new Promise<void>(resolve=>server.close(()=>resolve()));return port;}
async function start(command:string,args:string[]){
 const port=await availablePort();const child=spawn(command,[...args,'--port',String(port),'--no-open'],{stdio:['ignore','pipe','pipe']});
 await new Promise<void>((resolve,reject)=>{let output='';const timer=setTimeout(()=>{child.kill();reject(new Error(`Server did not start: ${output}`));},8000);child.once('error',reject);child.stdout.on('data',chunk=>{output+=chunk;if(output.includes(`http://localhost:${port}/`)){clearTimeout(timer);resolve();}});child.stderr.on('data',chunk=>output+=chunk);});
 return {url:`http://127.0.0.1:${port}/media/audio/wolf-en.mp3`,stop:()=>child.kill()};
}
for(const [label,command,args] of [['Node','node',['serve.mjs']],['Python','python3',['serve.py']]] as const){
 it(`${label} bundled server supports exact audio byte ranges and HEAD`,async()=>{
  const server=await start(command,[...args]);try{
   const full=await readFile('dist/media/audio/wolf-en.mp3');
   for(const [range,start,end] of [['bytes=0-9',0,9],['bytes=10-',10,full.length-1],['bytes=-10',full.length-10,full.length-1]] as const){
    const response=await fetch(server.url,{headers:{Range:range}});expect(response.status).toBe(206);expect(response.headers.get('accept-ranges')).toBe('bytes');expect(response.headers.get('content-range')).toBe(`bytes ${start}-${end}/${full.length}`);expect(response.headers.get('content-length')).toBe(String(end-start+1));expect(Buffer.from(await response.arrayBuffer())).toEqual(full.subarray(start,end+1));
   }
   const invalid=await fetch(server.url,{headers:{Range:`bytes=${full.length}-`}});expect(invalid.status).toBe(416);expect(invalid.headers.get('content-range')).toBe(`bytes */${full.length}`);
   const head=await fetch(server.url,{method:'HEAD'});expect(head.status).toBe(200);expect(head.headers.get('content-length')).toBe(String(full.length));expect((await head.arrayBuffer()).byteLength).toBe(0);
  }finally{server.stop();}
 },15000);
}
