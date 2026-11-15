import { describe, expect, it } from 'vitest';
import { chooseRecommendation, eligibleActivities, wheelRotation } from '../src/recommend';
import type { Activity, Candidate, Category, Localized, Venue } from '../src/types';

const text: Localized = { ro:'Test', en:'Test', it:'Test', fr:'Test', es:'Test', 'zh-Hans':'测试' };
const categories: Category[] = Array.from({length:9},(_,i)=>({id:`c${i}`,number:i+1,color:'#000000',symbol:'',name:text,intro:text}));
const venue = (id:string, patch:Partial<Venue>={}):Venue => ({id,name:id,address:'Timișoara',lat:45.75,lon:21.23,verified:true,status:'open',minors:'yes',sources:['https://example.org'],...patch});
const activity = (id:string, venues:Venue[], cats=['c0']):Activity => ({id,name:text,description:text,categories:cats,venues});
const candidate = (id:string, cats=['c0']):Candidate => ({activity:activity(id,[venue(`${id}-v`)],cats),venue:venue(`${id}-v`)});
const sequence = (...values:number[]) => { let i=0; return ()=>values[i++] ?? 0; };
const origin = {lat:0,lon:0,label:'Fixture origin'};

describe('eligibleActivities',()=>{
 it('requires a verified open venue even when the minors filter is off',()=>{
  const pool=eligibleActivities([
   activity('open',[venue('o')]),
   activity('closed',[venue('c',{status:'closed'})]),
   activity('unknown',[venue('u',{status:'unknown'})]),
   activity('unverified',[venue('n',{verified:false})]),
  ],{minors:false,limit:5});
  expect(pool.map(c=>c.activity.id)).toEqual(['open']);
 });
 it('requires confirmed minor access only when minors are included',()=>{
  const data=[activity('yes',[venue('y')]),activity('adult',[venue('a',{minors:'no'})]),activity('unknown',[venue('u',{minors:'unknown'})])];
  expect(eligibleActivities(data,{minors:true,limit:5}).map(c=>c.activity.id)).toEqual(['yes']);
  expect(eligibleActivities(data,{minors:false,limit:5}).map(c=>c.activity.id)).toEqual(['adult','unknown','yes']);
 });
 it('selects the closest eligible branch and excludes ungeocoded venues from distance sorting',()=>{
  const data=[activity('one',[venue('far',{lat:0,lon:2}),venue('near',{lat:0,lon:1}),venue('adult-nearest',{lat:0,lon:0,minors:'no'}),venue('no-coordinates',{lat:undefined,lon:undefined})]),activity('no-location',[venue('no',{lat:undefined,lon:undefined})])];
  const pool=eligibleActivities(data,{minors:true,origin,limit:5});
  expect(pool).toHaveLength(1);
  expect(pool[0].venue.id).toBe('near');
  expect(pool[0].distance).toBeCloseTo(111.195,2);
 });
 it('deduplicates repeated entity records while retaining their categories and eligible branches',()=>{
  const data=[activity('same',[venue('far',{lat:0,lon:3})],['c1']),activity('same',[venue('near',{lat:0,lon:1})],['c2'])];
  const pool=eligibleActivities(data,{minors:true,origin,limit:5});
  expect(pool).toHaveLength(1);
  expect(pool[0].venue.id).toBe('near');
  expect(pool[0].activity.categories).toEqual(['c1','c2']);
 });
 it('applies the global five/ten cap after sorting and uses stable entity and venue ID ties',()=>{
  const data=Array.from({length:12},(_,i)=>activity(`item-${String(i).padStart(2,'0')}`,[venue('z',{lat:0,lon:1}),venue('a',{lat:0,lon:1})], [`c${i%9}`])).reverse();
  const five=eligibleActivities(data,{minors:true,origin,limit:5});
  const ten=eligibleActivities(data,{minors:true,origin,limit:10});
  expect(five.map(c=>c.activity.id)).toEqual(['item-00','item-01','item-02','item-03','item-04']);
  expect(five.every(c=>c.venue.id==='a')).toBe(true);
  expect(ten).toHaveLength(10);
  expect(eligibleActivities(data,{minors:true,limit:5})).toHaveLength(12);
 });
 it('does not mutate source entities while deduplicating',()=>{
  const first=activity('same',[venue('first')],['c1']);
  eligibleActivities([first,activity('same',[venue('second')],['c2'])],{minors:true,limit:5});
  expect(first.categories).toEqual(['c1']);
  expect(first.venues.map(v=>v.id)).toEqual(['first']);
 });
});

describe('chooseRecommendation',()=>{
 it.each(Array.from({length:9},(_,i)=>[i]))('can land in segment %i and returns an entity belonging to it',(index)=>{
  const pool=categories.map(c=>candidate(c.id,[c.id]));
  const selected=chooseRecommendation(pool,categories,sequence((index+0.1)/9,0));
  expect(selected?.categoryIndex).toBe(index);
  expect(selected?.categoryId).toBe(`c${index}`);
  expect(selected?.candidate.activity.id).toBe(`c${index}`);
  expect(selected?.rerolled).toBe(false);
 });
 it('rerolls exactly once toward a nonempty category',()=>{
  let draws=0;
  const random=()=>{draws++; return 0;};
  const selected=chooseRecommendation([candidate('only',['c8'])],categories,random);
  expect(selected?.categoryIndex).toBe(8);
  expect(selected?.candidate.activity.id).toBe('only');
  expect(selected?.rerolled).toBe(true);
  expect(draws).toBe(3);
 });
 it('excludes the previous entity across all categories whenever another entity is available',()=>{
  const previous=candidate('previous',['c0','c8']);
  const next=candidate('next',['c4']);
  const selected=chooseRecommendation([previous,next],categories,sequence(0,0,0),'previous');
  expect(selected?.candidate.activity.id).toBe('next');
  expect(selected?.categoryId).toBe('c4');
  expect(selected?.rerolled).toBe(true);
 });
 it('still returns a single repeated option when it is the only option',()=>{
  expect(chooseRecommendation([candidate('only')],categories,sequence(0,0),'only')?.candidate.activity.id).toBe('only');
 });
 it('returns null without drawing when no category has an option',()=>{
  let draws=0;
  const random=()=>{draws++;return 0;};
  expect(chooseRecommendation([],categories,random)).toBeNull();
  expect(chooseRecommendation([candidate('orphan',['missing'])],categories,random)).toBeNull();
  expect(chooseRecommendation([candidate('a')],[],random)).toBeNull();
  expect(draws).toBe(0);
 });
});

describe('wheelRotation',()=>{
 it.each([[0,0],[1,320],[2,280],[3,240],[4,200],[5,160],[6,120],[7,80],[8,40]])('lands segment %i beneath the top pointer',(index,normalized)=>{
  const rotation=wheelRotation(index);
  expect(rotation).toBeGreaterThanOrEqual(1440);
  expect(rotation%360).toBe(normalized);
 });
 it('continues clockwise for at least four turns from the current absolute rotation',()=>{
  expect(wheelRotation(2,1800)).toBe(3520);
  expect(wheelRotation(0,1440)).toBe(2880);
  expect(wheelRotation(8,3520)).toBe(5080);
 });
});
