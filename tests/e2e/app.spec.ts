import {test,expect} from '@playwright/test';
test('homepage opens catalog and preserves category through language/history',async({page})=>{
 await page.goto('/');
 await expect(page.getByRole('heading',{name:'Welcome to Timișoara'})).toBeVisible();
 await page.getByRole('link',{name:'Descoperă opțiunile',exact:true}).click();
 await expect(page.locator('.category-link')).toHaveCount(9);
 await page.locator('a[href="#/catalog/culture"]').first().click();
 await expect(page.locator('.activity')).toHaveCount(7);
 await expect(page.getByText('Muzeul Apei',{exact:true}).first()).toBeVisible();
 await page.locator('select[aria-label]').first().selectOption('en');
 await expect(page).toHaveURL(/catalog\/culture/);
 await expect(page.getByText('Water Museum',{exact:true}).first()).toBeVisible();
 await page.goBack();
 await expect(page.locator('.category-link')).toHaveCount(9);
});
test('mobile homepage order and six language layouts',async({page})=>{
 await page.setViewportSize({width:320,height:740});await page.goto('/');
 for(const lang of ['ro','en','it','fr','es','zh-Hans']){
  await page.locator('select').selectOption(lang);
  const museum=await page.locator('.home-museum').boundingBox();const catalog=await page.locator('.home-catalog').boundingBox();const language=await page.locator('.home-language').boundingBox();
  expect(language!.y).toBeGreaterThan(Math.max(museum!.y,catalog!.y));
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});
test('wheel defaults to minors and location is explicitly confirmed',async({page})=>{
 await page.goto('/#/wheel/2d');
 await expect(page.getByRole('checkbox')).toBeChecked();
 await page.getByRole('button',{name:'Preferință de locație',exact:true}).click();
 await page.getByRole('searchbox').fill('Unirii');
 await page.locator('.location-result').first().click();
 await expect(page.getByRole('button',{name:'Confirmă punctul',exact:true})).toBeEnabled();
 await page.getByRole('button',{name:'Confirmă punctul',exact:true}).click();
 await expect(page.locator('.origin-summary')).toContainText('Unirii');
});
test('entrypoint has no 3D or external requests and offline catalog works',async({page,context})=>{
 const requests:string[]=[];page.on('request',r=>requests.push(r.url()));
 await page.goto('/');await page.waitForTimeout(500);
 expect(requests.some(u=>/museum-|three/.test(u))).toBe(false);
 expect(requests.filter(u=>!u.startsWith('http://127.0.0.1:4174')&&!u.startsWith('data:'))).toEqual([]);
 await page.getByRole('link',{name:'Descoperă opțiunile',exact:true}).click();
 await context.route('https://**',route=>route.abort());
 await page.locator('a[href="#/catalog/history"]').first().click();
 await expect(page.locator('.activity')).toHaveCount(6);
});
