import {test,expect} from '@playwright/test';
test('an already-open wheel refreshes dated eligibility before each spin',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.clock.setFixedTime('2026-11-22T10:00:00Z');await page.goto('/#/wheel/2d');
 await expect(page.locator('.eligible-summary')).toContainText('Puppy Yoga');
 await page.clock.setFixedTime('2026-11-23T10:00:00Z');await page.locator('.spin-button').click();await expect(page.locator('.eligible-summary')).not.toContainText('Puppy Yoga');
});
test('a spin crossing the final event day does not publish an expired result',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.clock.setFixedTime('2026-11-22T21:59:59Z');await page.addInitScript(()=>{let calls=0;Math.random=()=>calls++%2===0?.39:.99;});await page.goto('/#/wheel/2d');await page.locator('.spin-button').click();await page.clock.setFixedTime('2026-11-22T22:00:01Z');await expect(page.locator('.spin-button')).toBeEnabled();await expect(page.locator('.result-card')).toHaveCount(0);await expect(page.locator('.spin-status')).not.toBeEmpty();
});
