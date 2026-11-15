import {reducedMotion} from './state';
import {tr,languageSelect} from './ui';
let firstHome=true;
export function homeMarkup(){const animate=firstHome&&!reducedMotion();firstHome=false;return `<main class="homepage"><div class="home-content ${animate?'first-visit':''}"><h1 aria-label="Welcome to Timișoara" lang="en"><span class="welcome">Welcome to</span><span class="city"><span class="initial">T</span>imișoara</span></h1><div class="home-actions"><a class="home-choice home-museum" href="#/museum">${tr('museum')}</a><a class="home-choice home-catalog" href="#/catalog">${tr('catalog')}</a>${languageSelect(true)}</div></div></main>`;}
export function orderHomeControls(app:HTMLElement){const row=app.querySelector('.home-actions');if(!row)return;const language=row.querySelector('.home-language')!;const catalog=row.querySelector('.home-catalog')!;if(matchMedia('(max-width:480px)').matches)row.append(language);else row.insertBefore(language,catalog);}
