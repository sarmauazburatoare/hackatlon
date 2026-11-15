import {test,expect} from '@playwright/test';
test('local narration is user controlled, captioned and resumes in another language',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/museum');await page.locator('[data-story="wolf"]').click();
 await expect(page.locator('dialog audio')).toHaveCount(1);
 const audio=page.locator('dialog audio');await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>a.readyState)).toBeGreaterThanOrEqual(2);
 expect(await audio.evaluate((a:HTMLAudioElement)=>a.paused&&a.muted)).toBe(true);
 await page.locator('.narration-play').click();await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.4);
 expect(await audio.evaluate((a:HTMLAudioElement)=>a.muted)).toBe(false);
 await expect(page.locator('.story-caption .caption-active')).toHaveCount(1);await page.locator('.narration-play').click();const time=await audio.evaluate((a:HTMLAudioElement)=>a.currentTime);await page.waitForTimeout(180);expect(await audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeCloseTo(time,1);
 await page.locator('dialog select').selectOption('en');await expect(page.locator('dialog[open] select')).toHaveValue('en');await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.readyState)).toBeGreaterThanOrEqual(2);expect(await page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(0);
 await page.locator('.narration-restart').click();expect(await page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeLessThan(.1);
 await page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>{(window as unknown as {lastAudio:HTMLAudioElement}).lastAudio=a;});await page.locator('dialog .close-button').click();expect(await page.evaluate(()=>(window as unknown as {lastAudio:HTMLAudioElement}).lastAudio.paused)).toBe(true);
});
test('all six local language tracks decode without external services',async({page,context})=>{
 await context.route('https://**',r=>r.abort());await page.goto('/#/museum');await page.locator('[data-story="fountain"]').click();
 for(const lang of ['ro','en','it','fr','es','zh-Hans']){await page.locator('dialog select').selectOption(lang);await expect(page.locator('dialog[open] select')).toHaveValue(lang);await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>Number.isFinite(a.duration)&&a.duration>3)).toBe(true);expect(await page.locator('dialog audio').getAttribute('src')).toContain(`-${lang}.mp3`);}
});
test('paused language changes retain progress on hosts without byte ranges',async({page,context})=>{
 await context.route('**/media/audio/*.mp3',async route=>{
  const requestHeaders={...route.request().headers()};delete requestHeaders.range;
  const response=await route.fetch({headers:requestHeaders});const headers={...response.headers()};delete headers['accept-ranges'];delete headers['content-range'];
  await route.fulfill({status:200,headers,body:await response.body()});
 });
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/museum');await page.locator('[data-story="wolf"]').click();
 await page.locator('.narration-play').click();await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.5);await page.locator('.narration-play').click();
 await page.locator('dialog select').selectOption('en');await expect(page.locator('dialog[open] select')).toHaveValue('en');
 const audio=page.locator('dialog[open] audio');await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.2);
 expect(await audio.evaluate((a:HTMLAudioElement)=>a.paused)).toBe(true);const resumed=await audio.evaluate((a:HTMLAudioElement)=>a.currentTime);await page.waitForTimeout(250);expect(await audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeCloseTo(resumed,1);
 await expect(page.locator('dialog audio')).toHaveCount(1);await page.locator('.narration-play').click();await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(resumed+.2);
 await page.locator('dialog .close-button').click();await expect(page.locator('audio')).toHaveCount(0);
});
test('a playing narration continues after a language change with its sound settings',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/museum');await page.locator('[data-story="wolf"]').click();await page.locator('.narration-play').click();
 await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.5);
 await page.locator('.narration-mute').click();await page.locator('.narration-volume input').evaluate((input:HTMLInputElement)=>{input.value='.35';input.dispatchEvent(new Event('input'));});
 await page.locator('dialog select').selectOption('fr');await expect(page.locator('dialog[open] select')).toHaveValue('fr');
 const audio=page.locator('dialog[open] audio');await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>!a.paused&&a.currentTime>.2)).toBe(true);
 expect(await audio.evaluate((a:HTMLAudioElement)=>a.muted&&Math.abs(a.volume-.35)<.001)).toBe(true);
 const position=await audio.evaluate((a:HTMLAudioElement)=>a.currentTime);await expect.poll(()=>audio.evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(position+.2);
});
test('closing a narration aborts a pending local fallback without late playback',async({page,context})=>{
 await context.route('**/media/audio/*.mp3',async route=>{try{
  const headers={...route.request().headers()};delete headers.range;const response=await route.fetch({headers});const responseHeaders={...response.headers()};delete responseHeaders['accept-ranges'];delete responseHeaders['content-range'];
  if(route.request().resourceType()==='fetch')await new Promise(resolve=>setTimeout(resolve,1200));
  await route.fulfill({status:200,headers:responseHeaders,body:await response.body()});
 }catch{/* The dialog deliberately aborts its pending asset request. */}});
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/museum');await page.locator('[data-story="wolf"]').click();await page.locator('.narration-play').click();await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.5);
 const fallback=page.waitForRequest(request=>request.url().endsWith('wolf-en.mp3')&&request.resourceType()==='fetch');await page.locator('dialog select').selectOption('en');await fallback;
 await page.locator('dialog[open] audio').evaluate((audio:HTMLAudioElement)=>{(window as unknown as {closedAudio:HTMLAudioElement}).closedAudio=audio;});await page.locator('dialog .close-button').click();await page.waitForTimeout(1500);
 await expect(page.locator('audio')).toHaveCount(0);expect(await page.evaluate(()=>{const a=(window as unknown as {closedAudio:HTMLAudioElement}).closedAudio;return a.paused&&!a.getAttribute('src');})).toBe(true);
});
test('an explicit mute before first Play is respected in this and the next story',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/#/museum');await page.locator('[data-story="wolf"]').click();
 await page.locator('.narration-mute').click();await page.locator('.narration-mute').click();
 expect(await page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.muted)).toBe(true);
 for(const story of ['wolf','fountain']){
  if(story==='fountain'){await page.locator('dialog .close-button').click();await page.locator('[data-story="fountain"]').click();}
  await page.locator('.narration-play').click();await expect.poll(()=>page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(.2);
  expect(await page.locator('dialog audio').evaluate((a:HTMLAudioElement)=>a.muted)).toBe(true);
 }
});
