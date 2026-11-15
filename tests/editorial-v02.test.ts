import {it,expect} from 'vitest';
import {activities} from '../src/data';
import {eligibleActivities} from '../src/recommend';
it('uses confirmed operator corrections and preserves the shared inventory IDs',()=>{
 for(const [id,name]of [['grumi','Gruni'],['vineri-13','Vineri 15'],['rio','Riyo'],['white-pizza','Why Pizza'],['beraria','Berăria 700'],['pinocchio','Piața Unirii']]){
  const a=activities.find(a=>a.id===id)!;expect(a.name.ro).toContain(name);expect(a.venues.some(v=>v.verified&&v.url)).toBe(true);
 }
});
it('excludes seasonally suspended boats and past puppy-yoga dates from recommendations',()=>{
 const boat=activities.find(a=>a.id==='bega-boat')!;expect(boat.venues.every(v=>v.status==='closed')).toBe(true);
 const pool=eligibleActivities(activities,{minors:false,limit:10},'2026-11-23');expect(pool.some(c=>['bega-boat','pet-yoga'].includes(c.activity.id))).toBe(false);
});
