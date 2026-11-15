import {activities} from './data';
import {stories} from './stories';
import {locations,searchLocations,MAP_BOUNDS} from './location';
import {state,persist} from './state';
import {esc,tr,asset,languageSelect} from './ui';
import type {Origin,Lang} from './types';
import {activeCaption,mapNarrativeTime,restoreNarrationPosition,type NarrationSnapshot} from './narration';
let current:HTMLDialogElement|null=null;
let narrationAudio:HTMLAudioElement|null=null;
export function closeDialog(){narrationAudio?.pause();current?.close();current=null;}
function dialog(body:string,className=''){
 closeDialog();const opener=document.activeElement as HTMLElement|null;
 const d=document.createElement('dialog');d.className=`modal ${className}`;d.setAttribute('aria-labelledby','dialog-title');
 d.innerHTML=`<button class="close-button" aria-label="${tr('close')}">×</button>${body}`;document.body.append(d);current=d;
 d.querySelector('.close-button')!.addEventListener('click',()=>d.close());
 d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if((e as MouseEvent).clientX<r.left||(e as MouseEvent).clientX>r.right||(e as MouseEvent).clientY<r.top||(e as MouseEvent).clientY>r.bottom)d.close();}});
 d.addEventListener('close',()=>{d.remove();if(current===d)current=null;opener?.focus();});d.showModal();return d;
}
export function showControls(){dialog(`<p class="eyebrow">${tr('museum')}</p><h2 id="dialog-title">${tr('controls')}</h2><p>${tr('controlsText')}</p>`);}
export function showStory(id:string,onLanguage?:(snapshot:NarrationSnapshot)=>void,onClose?:()=>void,previous?:NarrationSnapshot){
 const s=stories.find(s=>s.id===id);if(!s)return;
 const d=dialog(`<p class="eyebrow">${tr('story')}</p><div class="story-top">${languageSelect()}</div><h2 id="dialog-title">${esc(s.name[state.lang])}</h2><div class="story-emblem ${esc(id)}" aria-hidden="true">${({fountain:'♒',wolf:'☾',lantern:'♧',clock:'◷',roses:'❀',umbrellas:'☂',beer:'♧'} as Record<string,string>)[id]||'✧'}</div><p class="story-text">${esc(s.text[state.lang])}</p><div class="story-audio"></div><details class="story-sources"><summary>${tr('sources')}</summary>${s.sources.map(url=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(new URL(url).hostname)} ↗</a>`).join('')}</details>`,'story-modal');
 const audioPath=s.audio?.[state.lang],cues=s.captions?.[state.lang]??[];let audio:HTMLAudioElement|undefined;let frame=0;let started=Boolean(previous?.time);let releaseRestore:(()=>void)|undefined;
 if(audioPath){
  audio=document.createElement('audio');audio.src=asset(audioPath);audio.preload='auto';audio.muted=previous?.muted??!state.sound;audio.volume=previous?.volume??.7;narrationAudio=audio;
  const player=d.querySelector('.story-audio')!;player.innerHTML=`<div class="narration-controls"><button class="button narration-play">${tr('playAudio')}</button><button class="icon-button narration-restart" aria-label="${tr('restartAudio')}"><span aria-hidden="true">↺</span></button><button class="text-button narration-mute"></button></div><label class="narration-volume">${tr('volume')}<input type="range" min="0" max="1" step="0.05" value="${audio.volume}" aria-label="${tr('volume')}"></label><output class="narration-time">0:00</output><p class="narration-error quiet-note" role="status"></p><p class="quiet-note">${tr('syntheticNarration')}</p>`;player.prepend(audio);
  const caption=d.querySelector('.story-text')!;caption.classList.add('story-caption');caption.setAttribute('aria-label',tr('captions'));
  if(cues.length)caption.innerHTML=cues.map((c,i)=>`<span data-caption="${i}">${esc(c.text)}</span>`).join(' ');
  const play=player.querySelector('.narration-play') as HTMLButtonElement,mute=player.querySelector('.narration-mute') as HTMLButtonElement;
  const format=(n:number)=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`;
  function update(){if(!audio)return;play.textContent=audio.paused?tr('playAudio'):tr('pauseAudio');mute.textContent=audio.muted?tr('enableSound'):tr('muteSound');mute.setAttribute('aria-pressed',String(!audio.muted));const currentCue=activeCaption(cues,audio.currentTime);caption.querySelectorAll('[data-caption]').forEach((node,i)=>node.classList.toggle('caption-active',cues[i]===currentCue));player.querySelector('output')!.textContent=`${format(audio.currentTime)} / ${format(Number.isFinite(audio.duration)?audio.duration:0)}`;}
  function tick(){update();if(audio&&!audio.paused&&!audio.ended)frame=requestAnimationFrame(tick);}
  const fail=()=>{play.disabled=false;player.querySelector('.narration-error')!.textContent=tr('audioUnavailable');update();};
  play.onclick=()=>{if(!audio)return;if(audio.paused){if(!started){if(!state.soundChosen){audio.muted=false;state.sound=true;}started=true;}audio.play().catch(fail);}else audio.pause();};
  (player.querySelector('.narration-restart') as HTMLButtonElement).onclick=()=>{if(audio){releaseRestore?.();releaseRestore=undefined;play.disabled=false;audio.currentTime=0;update();}};
  mute.onclick=()=>{if(audio){audio.muted=!audio.muted;state.soundChosen=true;state.sound=!audio.muted;update();}};
  (player.querySelector('input') as HTMLInputElement).oninput=e=>{if(audio)audio.volume=Number((e.target as HTMLInputElement).value);};
  audio.onplay=()=>{cancelAnimationFrame(frame);tick();};audio.onpause=()=>{cancelAnimationFrame(frame);update();};audio.ontimeupdate=update;audio.onended=update;audio.onerror=fail;
  audio.onloadedmetadata=update;
  if(previous){play.disabled=true;releaseRestore=restoreNarrationPosition(audio,mapNarrativeTime(previous.time,previous.cues,cues),()=>{if(!d.open||!audio)return;play.disabled=false;update();if(previous.playing)audio.play().catch(fail);},fail);}update();
 }else d.querySelector('.story-audio')!.innerHTML=`<p class="quiet-note">${tr('audioMissing')}</p>`;
 d.querySelector('select')!.addEventListener('change',e=>{const snapshot:NarrationSnapshot={time:audio?.currentTime??0,cues,playing:audio?!audio.paused:false,muted:audio?.muted??true,volume:audio?.volume??.7};audio?.pause();state.lang=(e.target as HTMLSelectElement).value as Lang;persist();d.close();if(onLanguage)onLanguage(snapshot);else showStory(id,undefined,onClose,snapshot);});
 d.addEventListener('close',()=>{cancelAnimationFrame(frame);if(audio){audio.pause();releaseRestore?.();audio.removeAttribute('src');audio.load();if(narrationAudio===audio)narrationAudio=null;}onClose?.();});
}
export function showLocation(onChange:()=>void){
 let pending:Origin|undefined=state.prefs.origin?{...state.prefs.origin}:undefined;
 let bounds={west:21.211,east:21.246,south:45.741,north:45.766};
 let roads:{id:string;name:string;coordinates:number[][]}[]=[];
 const d=dialog(`<p class="eyebrow">${tr('location')}</p><h2 id="dialog-title">${tr('locationTitle')}</h2><p>${tr('locationHelp')}</p><label class="sr-only" for="location-query">${tr('searchLocation')}</label><div class="location-search"><input type="search" id="location-query" placeholder="${tr('searchLocation')}" autocomplete="off"><button class="button secondary gps">◎ ${tr('gps')}</button></div><p class="quiet-note">${tr('localIndex')}</p><div class="location-results"></div><div class="local-map" tabindex="0" role="application" aria-label="${tr('adjust')}"></div><p class="quiet-note">${tr('adjust')}</p><p class="map-attribution">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a> · Wikidata CC0</p><p class="pin-summary" role="status"></p><div class="dialog-actions"><button class="button secondary clear-origin">${tr('remove')}</button><button class="button confirm-origin" ${!pending?'disabled':''}>${tr('confirm')}</button></div>`,'location-modal');
 const map=d.querySelector('.local-map') as HTMLElement;
 const zoom=document.createElement('div');zoom.className='map-zoom';zoom.innerHTML=`<button aria-label="${tr('zoomOut')}">−</button><button aria-label="${tr('zoomIn')}">+</button>`;map.after(zoom);
 const summary=d.querySelector('.pin-summary')!;
 const confirm=d.querySelector('.confirm-origin') as HTMLButtonElement;
 const project=(lon:number,lat:number)=>({x:(lon-bounds.west)/(bounds.east-bounds.west)*800,y:(bounds.north-lat)/(bounds.north-bounds.south)*420});
 function draw(){
  if(pending){bounds.west=Math.min(bounds.west,pending.lon-.008);bounds.east=Math.max(bounds.east,pending.lon+.008);bounds.south=Math.min(bounds.south,pending.lat-.008);bounds.north=Math.max(bounds.north,pending.lat+.008);}
  const pin=pending?project(pending.lon,pending.lat):null;
  const dots=locations.filter(l=>l.lat>bounds.south&&l.lat<bounds.north&&l.lon>bounds.west&&l.lon<bounds.east).filter((_,i)=>i%3===0).slice(0,90).map(l=>{const p=project(l.lon,l.lat);return `<circle cx="${p.x}" cy="${p.y}" r="2.4" fill="#b2a390"/>`;}).join('');
  const roadPaths=roads.map(road=>`<path d="${road.coordinates.map(([lon,lat],i)=>{const p=project(lon,lat);return `${i?'L':'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;}).join(' ')}" fill="none" stroke="#fffdf5" stroke-width="4" stroke-linecap="round"/>`).join('');
  const unirii=project(21.2287,45.7583),victoriei=project(21.2255,45.7513),bega=project(21.225,45.747);
  map.innerHTML=`<svg viewBox="0 0 800 420" preserveAspectRatio="none" aria-hidden="true"><rect width="800" height="420" fill="#e5e2d7"/>${roadPaths}${dots}<circle cx="${unirii.x}" cy="${unirii.y}" r="7" fill="#c8ba9c"/><text x="${unirii.x+11}" y="${unirii.y-6}" class="map-label">Piața Unirii</text><circle cx="${victoriei.x}" cy="${victoriei.y}" r="7" fill="#c8ba9c"/><text x="${victoriei.x+11}" y="${victoriei.y+15}" class="map-label">Piața Victoriei</text>${pin?`<g transform="translate(${pin.x},${pin.y})"><circle r="18" fill="#71593b" opacity=".15"/><path d="M0 0C-24-22-11-39 0-39S24-22 0 0" fill="#785336" stroke="#fff" stroke-width="2"/><circle cy="-24" r="5" fill="#fff"/></g>`:''}<text x="16" y="401" class="map-caption">Timișoara · ${tr('schematic')}</text></svg>`;
  summary.textContent=pending?`${pending.label} · ${pending.lat.toFixed(5)}, ${pending.lon.toFixed(5)}`:'';confirm.disabled=!pending;
 }
 function updateResults(query:string){const found=query.trim()?searchLocations(query).slice(0,6):locations.filter(x=>/Unirii|Victoriei|Libertății/.test(x.label)).slice(0,3);const list=d.querySelector('.location-results')!;list.innerHTML=found.length?found.map(l=>`<button class="location-result" data-id="${esc(l.id)}"><span>${esc(l.label)}</span><small>${esc(l.detail.split(' · ')[0])} · ${tr(l.precision==='area'?'precisionArea':l.precision==='landmark'?'precisionLandmark':'precisionStreet')}</small></button>`).join(''):`<p class="quiet-note">${tr('noMatches')}</p>`;
  list.querySelectorAll<HTMLButtonElement>('.location-result').forEach(b=>b.onclick=()=>{const l=locations.find(x=>x.id===b.dataset.id)!;pending={lat:l.lat,lon:l.lon,label:l.label};draw();list.querySelectorAll('button').forEach(x=>x.classList.toggle('selected',x===b));});}
 d.querySelector('input')!.addEventListener('input',e=>updateResults((e.target as HTMLInputElement).value));
 zoom.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{const factor=i===1?0.65:1.5;const cx=(bounds.west+bounds.east)/2,cy=(bounds.south+bounds.north)/2;const w=(bounds.east-bounds.west)*factor/2,h=(bounds.north-bounds.south)*factor/2;bounds={west:cx-w,east:cx+w,south:cy-h,north:cy+h};draw();});
 fetch(asset('data/map-lines.json')).then(r=>r.json()).then(data=>{if(d.open){roads=data;draw();}}).catch(()=>{/* Landmark pin remains usable if the local map file is unavailable. */});
 map.onclick=e=>{const r=map.getBoundingClientRect();pending={lat:bounds.north-(e.clientY-r.top)/r.height*(bounds.north-bounds.south),lon:bounds.west+(e.clientX-r.left)/r.width*(bounds.east-bounds.west),label:tr('pin')};draw();};
 map.onkeydown=e=>{const key=e.key;if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(key))return;e.preventDefault();pending??={lat:45.7545,lon:21.2275,label:tr('pin')};if(key==='ArrowUp')pending.lat+=.0004;if(key==='ArrowDown')pending.lat-=.0004;if(key==='ArrowLeft')pending.lon-=.0006;if(key==='ArrowRight')pending.lon+=.0006;pending.label=tr('pin');draw();};
 const gps=d.querySelector('.gps') as HTMLButtonElement;
 gps.onclick=()=>{if(!navigator.geolocation){summary.textContent=tr('gpsDenied');return;}gps.disabled=true;navigator.geolocation.getCurrentPosition(pos=>{if(!d.open)return;gps.disabled=false;pending={lat:pos.coords.latitude,lon:pos.coords.longitude,label:tr('gps')};draw();},()=>{if(!d.open)return;gps.disabled=false;summary.textContent=tr('gpsDenied');},{timeout:10000,maximumAge:0});};
 confirm.onclick=()=>{if(!pending)return;state.prefs.origin={...pending};d.close();onChange();};
 (d.querySelector('.clear-origin') as HTMLButtonElement).onclick=()=>{state.prefs.origin=undefined;d.close();onChange();};
 draw();updateResults('');
}
export function showCredits(){
 const photos=activities.filter(a=>a.photo);const distinct=photos.filter((a,i)=>photos.findIndex(b=>b.photo!.path===a.photo!.path)===i);
 dialog(`<p class="eyebrow">Timișoara</p><h2 id="dialog-title">${tr('credits')}</h2><p>${tr('originalBackground')}</p><p>${tr('imageryNote')}</p><p class="quiet-note">Cormorant Garamond · Libre Baskerville · DM Sans — SIL Open Font License. Three.js — MIT. ${tr('privacy')}</p><p class="quiet-note">${tr('syntheticNarration')} <a href="https://huggingface.co/Supertone/supertonic-3" target="_blank" rel="noopener noreferrer">Supertone · Supertonic3</a> (OpenRAIL-M) · <a href="https://huggingface.co/hexgrad/Kokoro-82M" target="_blank" rel="noopener noreferrer">hexgrad · Kokoro82M</a> (Apache2.0). <a href="${asset('media/audio/README.txt')}" target="_blank" rel="noopener noreferrer">${tr('sources')}</a></p><div class="credits-list">${distinct.map(a=>`<article><h3>${esc(a.name[state.lang])}</h3><p>${esc(a.photo!.author)} · ${esc(a.photo!.rightsStatus==='operator-homepage-unconfirmed'?tr('photoRightsUnknown'):a.photo!.license)}</p><a href="${esc(a.photo!.source)}" target="_blank" rel="noopener noreferrer">${tr('sources')} ↗</a></article>`).join('')}</div><h3>${tr('sources')}</h3><p><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap · ODbL</a> · <a href="https://www.wikidata.org/wiki/Wikidata:Licensing" target="_blank" rel="noopener noreferrer">Wikidata · CC0</a></p>`,'credits-modal');
}
