import {activities,categories} from './data';
import {eligibleActivities,chooseRecommendation,wheelRotation} from './recommend';
import {state,persist,reducedMotion} from './state';
import {showLocation} from './dialogs';
import {esc,tr,photo,accessText,distanceText,arrow} from './ui';
import type {MuseumController,Recommendation} from './types';
export function wheelMarkup(mode:'2d'|'3d'){
 const gradient=categories.map((c,i)=>`${c.color} ${i*40}deg ${(i+1)*40}deg`).join(',');
 return `<section class="wheel-layout"><div class="wheel-experience">${mode==='3d'?`<div class="museum-stage wheel-stage"><p class="loading" role="status">${tr('loading')}</p></div>`:`<div class="wheel-object" aria-hidden="true"><div class="wheel-pointer"></div><div class="wheel-disc" style="background:conic-gradient(from -20deg,${gradient})">${categories.map((c,i)=>`<span style="--angle:${i*40}deg">${c.number.toString().padStart(2,'0')}</span>`).join('')}<div class="wheel-hub">T</div></div><div class="wheel-base"></div></div>`}
 <ol class="wheel-legend">${categories.map(c=>`<li><span style="background:${c.color}">${c.number.toString().padStart(2,'0')}</span>${esc(c.name[state.lang])}</li>`).join('')}</ol></div>
 <div class="wheel-panel"><p class="eyebrow">${tr('choose')}</p><h1>${tr('wheelTitle')}</h1><p class="wheel-intro">${tr('wheelIntro')}</p><div class="preference"><label for="minors">${tr('minors')}</label><div class="switch-wrap"><input type="checkbox" role="checkbox" id="minors" ${state.prefs.minors?'checked':''}><span class="switch-state">${state.prefs.minors?tr('yes'):tr('no')}</span></div></div><button class="button secondary location-button"><span aria-hidden="true">◎</span> ${tr('location')}</button><div class="origin-summary">${state.prefs.origin?esc(state.prefs.origin.label):''}</div><p class="quiet-note">${tr('privacy')}</p><button class="button spin-button">${tr('spin')} ${arrow}</button><div class="spin-status" role="status" aria-live="polite"></div><div class="wheel-result" aria-live="polite"></div><div class="eligible-summary"></div></div></section>`;
}
export function bindWheel(root:HTMLElement,onPreferences:()=>void){
 let active=true,timer:ReturnType<typeof setTimeout>|undefined,rotation=0,controller:MuseumController|undefined;let current:Recommendation|null=null;
 const spin=root.querySelector('.spin-button') as HTMLButtonElement;
 const minors=root.querySelector('#minors') as HTMLInputElement;
 const location=root.querySelector('.location-button') as HTMLButtonElement;
 const status=root.querySelector('.spin-status')!;
 const result=root.querySelector('.wheel-result')!;
 const summary=root.querySelector('.eligible-summary')!;
 let pool=eligibleActivities(activities,state.prefs);
 function drawPool(){const wasOpen=summary.querySelector('details')?.open;
 summary.innerHTML=`<details><summary>${state.prefs.origin?tr('nearest'):tr('eligible')} · ${pool.length}</summary><ol>${pool.map(c=>`<li>${esc(c.activity.name[state.lang])}${c.distance!==undefined?`<small>${distanceText(c.distance)}</small>`:''}</li>`).join('')}</ol></details>${state.prefs.origin&&state.prefs.limit===5?`<button class="text-button expand">${tr('expand')} ${arrow}</button>`:''}`;
 summary.querySelector('.expand')?.addEventListener('click',()=>{state.prefs.limit=10;onPreferences();});
 summary.querySelector('details')!.open=Boolean(wasOpen);}
 drawPool();
 if(!pool.length){status.textContent=tr('empty');spin.disabled=true;}else if(pool.length===1)status.textContent=tr('single');
 if(root.querySelector('.wheel-stage')&&pool.length){spin.disabled=true;status.textContent=tr('loading');}
 minors.onchange=()=>{state.prefs.minors=minors.checked;persist();onPreferences();};location.onclick=()=>showLocation(onPreferences);
 function showResult(selection:Recommendation){const c=selection.candidate,cat=categories.find(c=>c.id===selection.categoryId)!;result.innerHTML=`<article class="result-card" data-activity="${esc(c.activity.id)}"><div class="result-category"><span style="background:${cat.color}"></span>${esc(cat.name[state.lang])}</div><div class="picture-frame">${photo(c.activity)}</div>${c.activity.photo?.caption?`<p class="photo-caption">${esc(c.activity.photo.caption[state.lang])}</p>`:''}<h2>${esc(c.activity.name[state.lang])}</h2><p>${esc(c.activity.description[state.lang])}</p><p class="access-note">${esc(accessText(c))}</p><p>${esc(c.venue.address)}</p>${c.distance!==undefined?`<p class="quiet-note">${distanceText(c.distance)}</p>`:''}${c.venue.url?`<a class="text-link" href="${esc(c.venue.url)}" target="_blank" rel="noopener noreferrer">${c.venue.linkType==='map'?tr('map'):tr('visit')} ${arrow}<span class="sr-only">${tr('newTab')}</span></a>`:''}${state.prefs.origin&&c.venue.lat!==undefined&&c.venue.lon!==undefined?`<a class="text-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;origin=${state.prefs.origin.lat},${state.prefs.origin.lon}&amp;destination=${c.venue.lat},${c.venue.lon}">${tr('route')} ${arrow}<span class="sr-only">${tr('newTab')}</span></a>`:''}</article>`;
  status.textContent=selection.rerolled?tr('rerolled'):'';spin.innerHTML=`${tr('again')} ${arrow}`;
 }
 spin.onclick=()=>{
  if(spin.disabled||!active)return;
  pool=eligibleActivities(activities,state.prefs);drawPool();
  current=chooseRecommendation(pool,categories,Math.random,state.previousId);if(!current){status.textContent=tr('empty');return;}
  spin.disabled=true;minors.disabled=true;location.disabled=true;result.innerHTML='';status.textContent=tr('spinning');
  rotation=wheelRotation(current.categoryIndex,rotation);const duration=reducedMotion()?100:4800;
  const disc=root.querySelector('.wheel-disc') as HTMLElement|null;if(disc){disc.style.transition=`transform ${duration}ms cubic-bezier(.16,.72,.2,1)`;disc.style.transform=`rotate(${rotation}deg)`;}
  controller?.spinTo?.(rotation,duration);
  const selection=current;timer=setTimeout(()=>{if(!active)return;pool=eligibleActivities(activities,state.prefs);drawPool();if(pool.some(c=>c.activity.id===selection.candidate.activity.id&&c.venue.id===selection.candidate.venue.id)){state.previousId=selection.candidate.activity.id;showResult(selection);}else{result.innerHTML='';status.textContent=tr('availabilityChanged');}spin.disabled=!pool.length;minors.disabled=false;location.disabled=false;},duration+50);
 };
 return {dispose(){active=false;clearTimeout(timer);},setController(c:MuseumController){controller=c;if(active&&pool.length){spin.disabled=false;status.textContent=pool.length===1?tr('single'):'';}}};
}
