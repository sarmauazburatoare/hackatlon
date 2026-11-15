import {describe,it,expect} from 'vitest';
import {activeCaption,mapNarrativeTime} from '../src/narration';
const ro=[{start:0,end:3,text:'Unu.'},{start:3.3,end:7,text:'Doi.'}];
const fr=[{start:0,end:5,text:'Un.'},{start:5.3,end:10,text:'Deux.'}];
describe('local narration timing',()=>{
 it('selects one current caption and does not announce during silence or after completion',()=>{
  expect(activeCaption(ro,1)?.text).toBe('Unu.');expect(activeCaption(ro,3.1)).toBeNull();expect(activeCaption(ro,4)?.text).toBe('Doi.');expect(activeCaption(ro,7)).toBeNull();
 });
 it('preserves sentence and fractional progress when changing language',()=>{
  expect(mapNarrativeTime(1.5,ro,fr)).toBeCloseTo(2.5);expect(mapNarrativeTime(5.15,ro,fr)).toBeCloseTo(7.65);
 });
 it('handles missing cues, seeks beyond the end and invalid numeric input',()=>{
  expect(mapNarrativeTime(0,[],fr)).toBe(0);expect(mapNarrativeTime(99,ro,fr)).toBe(10);expect(mapNarrativeTime(Number.NaN,ro,fr)).toBe(0);expect(activeCaption([],0)).toBeNull();
 });
});
