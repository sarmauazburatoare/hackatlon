import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFile} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'dist');
const flag=process.argv.indexOf('--port');let port=flag>=0?Number(process.argv[flag+1]):8000;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.woff':'font/woff','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg','.txt':'text/plain; charset=utf-8'};
if(!fs.existsSync(path.join(root,'index.html'))){console.error('Folderul dist lipsește. Rulează npm ci și npm run build sau folosește arhiva de prezentare.');process.exit(1);}
const server=http.createServer((req,res)=>{
 let decoded;try{decoded=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
 const file=path.resolve(root,'.'+decoded+(decoded.endsWith('/')?'index.html':''));
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404);res.end('Not found');return;}
  const headers={'Content-Type':types[path.extname(file)]??'application/octet-stream','Content-Length':stat.size,'Accept-Ranges':'bytes','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'};
  // Media seeks use a single byte range. Ignore unsupported range syntax.
  const range=req.method==='GET'&&/^bytes=(\d*)-(\d*)$/.exec(req.headers.range??'');
  let start=0,end=stat.size-1,status=200;
  if(range){
   const first=range[1],last=range[2];
   if(first){start=Number(first);end=last?Number(last):end;}
   else if(last){const suffix=Number(last);start=Math.max(0,stat.size-suffix);}
   if((!first&&!last)||(!first&&Number(last)===0)||!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>=stat.size||end<start){res.writeHead(416,{'Accept-Ranges':'bytes','Content-Range':`bytes */${stat.size}`,'Content-Length':0});res.end();return;}
   end=Math.min(end,stat.size-1);status=206;headers['Content-Length']=end-start+1;headers['Content-Range']=`bytes ${start}-${end}/${stat.size}`;
  }
  res.writeHead(status,headers);
  if(req.method==='HEAD')res.end();else{const stream=fs.createReadStream(file,status===206?{start,end}:undefined);stream.on('error',error=>res.destroy(error));res.once('close',()=>stream.destroy());stream.pipe(res);}
 });
});
let attempts=0;server.on('error',error=>{if(error.code==='EADDRINUSE'&&attempts++<10){port++;server.listen(port,'127.0.0.1');}else{console.error(error.message);process.exit(1);}});
server.on('listening',()=>{const url=`http://localhost:${port}/`;console.log(`Timișoara, cameră cu cameră\n${url}\nLasă această fereastră deschisă. Ctrl+C pentru oprire.`);if(!process.argv.includes('--no-open')){const command=process.platform==='darwin'?'open':process.platform==='win32'?'cmd':'xdg-open';const args=process.platform==='win32'?['/c','start','',url]:[url];execFile(command,args,()=>{});}});
server.listen(port,'127.0.0.1');
