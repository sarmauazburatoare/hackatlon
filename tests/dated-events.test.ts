import {it,expect} from 'vitest';
import {eligibleActivities} from '../src/recommend';
import type {Activity,Localized} from '../src/types';
it('stops recommending a dated session after its last confirmed day',()=>{
 const text:Localized={ro:'Eveniment',en:'Event',it:'Evento',fr:'Événement',es:'Evento','zh-Hans':'活动'};
 const event:Activity={id:'event',name:text,description:text,categories:['relax'],venues:[{id:'event-v',name:'Event',address:'Timișoara',verified:true,status:'open',minors:'yes',sources:['https://example.org'],reviewAfter:'2026-11-22'}]};
 expect(eligibleActivities([event],{minors:true,limit:5},'2026-11-22')).toHaveLength(1);
 expect(eligibleActivities([event],{minors:true,limit:5},'2026-11-23')).toHaveLength(0);
});
