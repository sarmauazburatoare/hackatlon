import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {writeFileSync} from 'node:fs';
const ids=['adventure','kids','nature','relax','night','cafes','food','culture','history'];
test('production catalog retains every appearance and serves all photos locally',async({page})=>{
 const failed:string[]=[];page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
 let count=0;
 for(const [index,id] of ids.entries()){await page.goto(`/#/catalog/${id}`);await expect(page.locator('.gallery-heading .eyebrow')).toHaveText(`Colecția ${String(index+1).padStart(2,'0')} / 09`);count+=await page.locator('.activity').count();for(const image of await page.locator('.activity img').all()){await image.scrollIntoViewIfNeeded();await image.evaluate(async(img:HTMLImageElement)=>{await img.decode();if(!img.naturalWidth)throw new Error('Photo did not decode: '+img.src);});}}
 expect(count).toBe(85);expect(failed).toEqual([]);
});
test('all six languages fit 320, 390, 768, 1024 and 1440 pixels',async({page})=>{
 test.setTimeout(90000);
 for(const width of [320,390,768,1024,1440]){await page.setViewportSize({width,height:900});
  for(const lang of ['ro','en','it','fr','es','zh-Hans']){await page.goto('/');await page.locator('select').selectOption(lang);await page.getByRole('link').last().click();await expect(page.locator('.category-link')).toHaveCount(9);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} ${lang}`).toBe(true);await expect(page.locator('.site-header select')).toHaveValue(lang);await page.locator('.site-header select').focus();await page.locator('.site-header select').selectOption(lang==='en'?'ro':'en');await expect(page.locator('.site-header select')).toBeFocused();}
 }
});
test('reduced-motion wheel results match the final segment and preserve filters',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/wheel/2d');
 await page.locator('.spin-button').click();await expect(page.locator('.result-card')).toBeVisible();
 const first=await page.locator('.result-card').getAttribute('data-activity');await page.locator('.spin-button').click();await expect(page.locator('.result-card')).toBeVisible();expect(await page.locator('.result-card').getAttribute('data-activity')).not.toBe(first);
 await page.locator('#minors').uncheck();await expect(page.locator('#minors')).not.toBeChecked();await expect(page.locator('.result-card')).toHaveCount(0);
 await page.goto('/#/wheel/3d');await expect(page.locator('#minors')).not.toBeChecked();await expect(page.locator('.museum-stage canvas')).toBeVisible();await expect(page.locator('.spin-button')).toBeEnabled();await page.locator('.spin-button').click();await expect(page.locator('.result-card')).toBeVisible();
});
test('museum visits nine rooms, restores plan and opens localized story',async({page})=>{
 test.setTimeout(120000);await page.goto('/#/museum');await expect(page.locator('.museum-stage canvas')).toBeVisible();await expect(page.locator('.room-selector .category-link')).toHaveCount(9);
 for(const id of ids){await page.goto(`/#/museum/${id}`);await expect(page.locator('.museum-stage canvas')).toBeVisible();await expect(page.locator('.museum-stage canvas')).toHaveCount(1);await expect(page.locator('.accessible-exhibits .activity')).not.toHaveCount(0);}
 await page.locator('[data-story="fountain"]').click();await expect(page.locator('dialog[open] .story-text')).toBeVisible();await page.locator('dialog select').selectOption('fr');await expect(page.locator('dialog[open] select')).toHaveValue('fr');await page.locator('dialog .close-button').click();await page.keyboard.press('Escape');await expect(page).toHaveURL(/#\/museum$/);await expect(page.locator('.room-selector .category-link')).toHaveCount(9);
});
test('WebGL unavailable falls back to corresponding category',async({page})=>{
 await page.addInitScript(()=>{const getContext=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(this:HTMLCanvasElement,type:string,...args:unknown[]){if(type==='webgl'||type==='webgl2')return null;return (getContext as Function).apply(this,[type,...args]);} as typeof getContext;});
 await page.goto('/#/museum/culture');await expect(page).toHaveURL(/catalog\/culture/);await expect(page.locator('.activity')).toHaveCount(7);await expect(page.locator('.fallback-banner')).toBeVisible();
});
test('main production screens have no serious or critical axe violations',async({page})=>{
 const results=[];
 for(const route of ['/','/#/catalog','/#/catalog/history','/#/wheel/2d','/#/museum']){await page.goto(route);await page.waitForTimeout(route.includes('museum')?1000:250);const scan=await new AxeBuilder({page}).analyze();results.push({route,violations:scan.violations});}
 writeFileSync('docs/accessibility-results.json',JSON.stringify(results,null,2));
 expect(results.flatMap(r=>r.violations.filter(v=>['serious','critical'].includes(v.impact??''))).map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
});
