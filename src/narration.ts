export interface CaptionCue {start:number;end:number;text:string;}
export interface NarrationSnapshot {time:number;cues:CaptionCue[];playing:boolean;muted:boolean;volume:number;}
export function activeCaption(cues:CaptionCue[],time:number):CaptionCue|null{return cues.find(c=>time>=c.start&&time<c.end)??null;}
export function mapNarrativeTime(time:number,from:CaptionCue[],to:CaptionCue[]):number{
 if(!Number.isFinite(time)||time<=0||!from.length||!to.length)return 0;
 if(time>=from[from.length-1].end)return to[to.length-1].end;
 const index=from.findIndex(c=>time<c.end);
 const source=from[Math.max(index,0)];
 const fraction=Math.max(0,Math.min(1,(time-source.start)/(source.end-source.start)));
 const progress=(Math.max(index,0)+fraction)/from.length;
 const mapped=Math.min(to.length-1,Math.floor(progress*to.length));
 const target=to[mapped];
 return target.start+(progress*to.length-mapped)*(target.end-target.start);
}

// Metadata alone does not guarantee a seekable resource. Some simple static
// hosts return 200 for Range requests, leaving even buffered MP3s seekable only
// at zero. Use a local blob for that case, and release it with the dialog.
export function restoreNarrationPosition(audio:HTMLAudioElement,time:number,onReady:()=>void,onError:()=>void):()=>void{
 let disposed=false,restored=false,loadingBlob=false,objectUrl:string|undefined,seekingTo:number|undefined;
 const controller=new AbortController(),source=audio.currentSrc||audio.src;
 const events=['loadedmetadata','loadeddata','progress','canplay','seeked'];
 function detach(){events.forEach(event=>audio.removeEventListener(event,restore));audio.removeEventListener('error',fail);}
 function finish(){if(disposed||restored)return;restored=true;detach();onReady();}
 function fail(){if(disposed||restored)return;restored=true;detach();onError();}
 function restore(){
  if(disposed||restored||loadingBlob||audio.readyState<1||!Number.isFinite(audio.duration))return;
  const target=Math.min(Math.max(0,Number.isFinite(time)?time:0),audio.duration);
  if(!target){finish();return;}
  if(seekingTo!==undefined){if(!audio.seeking&&Math.abs(audio.currentTime-seekingTo)<.05)finish();return;}
  const seekable=Array.from({length:audio.seekable.length},(_,i)=>i).some(i=>target>=audio.seekable.start(i)&&target<=audio.seekable.end(i));
  if(seekable){seekingTo=target;audio.currentTime=target;if(!audio.seeking&&Math.abs(audio.currentTime-target)<.05)finish();return;}
  if(audio.readyState<2)return;
  if(objectUrl){fail();return;}
  loadingBlob=true;
  void fetch(source,{signal:controller.signal}).then(response=>{if(!response.ok)throw new Error('Audio unavailable');return response.blob();}).then(blob=>{
   if(disposed)return;objectUrl=URL.createObjectURL(blob);loadingBlob=false;audio.src=objectUrl;audio.load();
  }).catch(()=>{if(!disposed)fail();});
 }
 events.forEach(event=>audio.addEventListener(event,restore));audio.addEventListener('error',fail);restore();
 return ()=>{disposed=true;controller.abort();detach();if(objectUrl)URL.revokeObjectURL(objectUrl);};
}
