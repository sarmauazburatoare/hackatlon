import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-ext-400.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/libre-baskerville/latin-400-italic.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-ext-400.css';
import './styles.css';
import {homeMarkup,orderHomeControls} from './home';
import {state,persist} from './state';
import type {Lang} from './types';
const app=document.querySelector<HTMLElement>('#app')!;
let loading=false;
const isHome=()=>!location.hash||/^#\/?$/.test(location.hash);
function showHome(){app.innerHTML=homeMarkup();orderHomeControls(app);document.documentElement.lang=state.lang;app.querySelector<HTMLSelectElement>('select')!.onchange=e=>{state.lang=(e.target as HTMLSelectElement).value as Lang;persist();showHome();app.querySelector<HTMLSelectElement>('select')!.focus();};}
function onRoute(){if(loading)return;if(isHome())showHome();else{loading=true;removeEventListener('hashchange',onRoute);media.removeEventListener('change',onResize);import('./main').catch(()=>{loading=false;location.reload();});}}
const media=matchMedia('(max-width:480px)');const onResize=()=>orderHomeControls(app);media.addEventListener('change',onResize);
if(isHome())showHome();else onRoute();addEventListener('hashchange',onRoute);
