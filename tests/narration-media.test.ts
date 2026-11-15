import {describe,it,expect} from 'vitest';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {stories} from '../src/stories';
import {LANGS} from '../src/types';
describe('shipped local narration',()=>{
 it('provides all42 files, caption sequences and matching transcript words',()=>{
  let count=0;
  for(const story of stories)for(const lang of LANGS){
   const file=story.audio?.[lang];expect(file,`${story.id}/${lang}`).toBeTruthy();
   const full=resolve('public',file!.replace(/^\//,''));expect(existsSync(full)).toBe(true);expect(readFileSync(full).length).toBeGreaterThan(12000);
   const cues=story.captions?.[lang];expect(cues?.length).toBeGreaterThan(0);
   for(const [index,cue]of cues!.entries()){expect(cue.end).toBeGreaterThan(cue.start);if(index)expect(cue.start).toBeGreaterThanOrEqual(cues![index-1].end);}
   const normalize=(s:string)=>s.replace(/\s/g,'');expect(normalize(cues!.map(c=>c.text).join(''))).toBe(normalize(story.text[lang]));count++;
  }
  expect(count).toBe(42);
 });
});
