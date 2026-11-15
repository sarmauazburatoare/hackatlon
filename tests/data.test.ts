import {describe,expect,it} from 'vitest';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {activities,categories} from '../src/data';
import {stories} from '../src/stories';
import {LANGS} from '../src/types';

describe('editorial catalog contract',()=>{
 it('preserves every required appearance without duplicating the shared restaurant',()=>{
  expect(categories.map(c=>c.id)).toEqual(['adventure','kids','nature','relax','night','cafes','food','culture','history']);
  expect(categories.map(c=>activities.filter(a=>a.categories.includes(c.id)).length)).toEqual([14,7,10,4,7,11,19,7,6]);
  expect(activities).toHaveLength(84);
  expect(new Set(activities.map(a=>a.id)).size).toBe(84);
  expect(activities.filter(a=>a.id==='paradisul-piratilor').map(a=>a.categories)).toEqual([['kids','food']]);
  expect(activities.filter(a=>a.id==='muzeul-satului')).toHaveLength(1);
 });
 it('offers complete text and resolvable category and media references',()=>{
  for(const item of [...categories,...activities,...stories]) for(const lang of LANGS){
   expect(item.name[lang]?.trim(),`${item.id} ${lang} name`).toBeTruthy();
   if('description' in item) expect(item.description[lang]?.trim(),`${item.id} ${lang} description`).toBeTruthy();
   if('text' in item) expect(item.text[lang]?.trim(),`${item.id} ${lang} story`).toBeTruthy();
  }
  for(const a of activities){
   expect(a.categories.every(id=>categories.some(c=>c.id===id))).toBe(true);
   if(a.photo){expect(existsSync(resolve('public',a.photo.path.slice(1)))).toBe(true);if(a.photo.rightsStatus==='operator-homepage-unconfirmed'){expect(a.photo.source).toMatch(/^https:\/\//);expect(a.photo.license).not.toMatch(/CC BY|CC0|Public domain/);expect(a.photo.license.trim()).toBeTruthy();}else expect(a.photo.license).toMatch(/CC|Public domain/);for(const lang of LANGS) expect(a.photo.alt[lang]).toBeTruthy();}
   for(const v of a.venues) if(v.verified){expect(v.sources.length).toBeGreaterThan(0);expect(v.verifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);expect(v.url).toMatch(/^https:\/\//);}
  }
 });
 it('keeps seven documented heritage stories and uncertain child absent',()=>{
  expect(stories.map(s=>s.id).sort()).toEqual(['beer','clock','fountain','lantern','roses','umbrellas','wolf']);
  for(const s of stories){expect(s.sources.length).toBeGreaterThan(0);if(s.audio) for(const path of Object.values(s.audio)) expect(existsSync(resolve('public',path!.slice(1)))).toBe(true);}
 });
});
