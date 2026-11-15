import {LANGS,type Lang,type Preferences} from './types';
function stored(key:string){try{return localStorage.getItem(key);}catch{return null;}}
export const state:{lang:Lang;prefs:Preferences;previousId?:string;sound:boolean;soundChosen:boolean}={
 lang:LANGS.includes(stored('timisoara-language') as Lang)?stored('timisoara-language') as Lang:'ro',
 prefs:{minors:stored('timisoara-minors')!=='false',limit:5},sound:false,soundChosen:false
};
export function persist(){try{localStorage.setItem('timisoara-language',state.lang);localStorage.setItem('timisoara-minors',String(state.prefs.minors));}catch{/* Private mode still works. */}}
export const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
