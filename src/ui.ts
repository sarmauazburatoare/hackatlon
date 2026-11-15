import {t,languageNames} from './i18n';
import {state} from './state';
import {LANGS,type Activity,type Candidate} from './types';
export const esc=(s:unknown)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export const asset=(path:string)=>`${import.meta.env.BASE_URL}${path.replace(/^\//,'')}`;
export const tr=(key:Parameters<typeof t>[0])=>t(key,state.lang);
export const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7"/></svg>';
export const diamond='<span class="diamond" aria-hidden="true">✧</span>';
export function languageSelect(home=false){return `<label class="language-control ${home?'home-language':''}"><span class="sr-only">${tr('language')}</span><select aria-label="${tr('language')}">${LANGS.map(l=>`<option value="${l}" lang="${l}" ${l===state.lang?'selected':''}>${languageNames[l]}</option>`).join('')}</select>${home?`<span class="language-short" aria-hidden="true">${({ro:'RO',en:'ENG',it:'IT',fr:'FR',es:'ES','zh-Hans':'中文'}[state.lang])}</span>`:''}<span aria-hidden="true">⌄</span></label>`;}
export function photo(activity:Activity,loading:'lazy'|'eager'='lazy'){
 return activity.photo?`<img src="${esc(asset(activity.photo.path))}" alt="${esc(activity.photo.alt[state.lang])}" loading="${loading}" decoding="async">`:`<div class="empty-art" aria-label="${tr('photoMissing')}"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 22v56M22 50h56M30 30l40 40M30 70l40-40"/><circle cx="50" cy="50" r="22"/><circle cx="50" cy="50" r="32"/></svg></div>`;
}
export function activityCard(activity:Activity){const venue=activity.venues.find(v=>v.verified&&v.url);const link=venue?.url;return `<article class="activity" id="${esc(activity.id)}">
 <div class="picture-frame">${link?`<a href="${esc(link)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(activity.name[state.lang])} — ${venue.linkType==='map'?tr('map'):tr('visit')} (${tr('newTab')})">${photo(activity)}</a>`:photo(activity)}</div>
 <div class="activity-copy">${activity.photo?.caption?`<p class="photo-caption">${esc(activity.photo.caption[state.lang])}</p>`:''}<h2>${esc(activity.name[state.lang])}</h2><p>${esc(activity.description[state.lang])}</p>${!activity.photo?`<small class="photo-note">${tr('photoMissing')}</small>`:''}
 ${link?`<a class="text-link" href="${esc(link)}" target="_blank" rel="noopener noreferrer">${venue.linkType==='map'?tr('map'):tr('visit')} ${arrow}<span class="sr-only">${tr('newTab')}</span></a>`:`<small>${tr('linkMissing')}</small>`}</div></article>`;}
export function accessText(candidate:Candidate){const v=candidate.venue;return `${v.minors==='yes'?tr('family'):v.minors==='no'?tr('adults'):tr('accessUnknown')}${v.minimumAge?` · ${tr('minimum')}: ${v.minimumAge}`:''}${v.adultRequired?` · ${tr('accompanying')}`:''}`;}
export function distanceText(distance:number){return `${new Intl.NumberFormat(state.lang,{maximumFractionDigits:1}).format(distance)} km · ${tr('straight')}`;}
