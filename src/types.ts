export const LANGS = ['ro','en','it','fr','es','zh-Hans'] as const;
export type Lang = typeof LANGS[number];
export type Localized = Record<Lang,string>;
export interface Category {id:string;number:number;color:string;symbol:string;name:Localized;intro:Localized;}
export interface Photo {path:string;author:string;source:string;license:string;alt:Localized;caption?:Localized;rightsStatus?:'licensed'|'operator-homepage-unconfirmed';illustrative?:boolean;}
export interface Venue {id:string;name:string;address:string;lat?:number;lon?:number;verified:boolean;status:'open'|'unknown'|'closed';minors:'yes'|'no'|'unknown';minimumAge?:number;adultRequired?:boolean;url?:string;linkType?:'official'|'map';sources:string[];verifiedAt?:string;eventDates?:string[];reviewAfter?:string;}
export interface Activity {id:string;name:Localized;description:Localized;categories:string[];venues:Venue[];photo?:Photo;note?:string;}
export interface Story {id:string;name:Localized;text:Localized;voice:string;sources:string[];audio?:Partial<Record<Lang,string>>;captions?:Partial<Record<Lang,import('./narration').CaptionCue[]>>;}
export interface Origin {lat:number;lon:number;label:string;}
export interface Preferences {minors:boolean;origin?:Origin;limit:5|10;}
export interface Candidate {activity:Activity;venue:Venue;distance?:number;}
export interface Recommendation {candidate:Candidate;categoryId:string;categoryIndex:number;rerolled:boolean;}
export interface MuseumOptions {
 mode:'lobby'|'room'|'wheel';categoryId?:string;categories:Category[];activities:Activity[];lang:Lang;
 onCategory:(id:string)=>void;onStory:(id:string)=>void;onWheel:()=>void;onMap:()=>void;
 onProximity:(activity:Activity|null)=>void;onFallback:()=>void;
}
export interface MuseumController {dispose:()=>void;startStory?:(id:string)=>void;endStory?:()=>void;spinTo?:(angle:number,duration:number)=>void;setLanguage?:(lang:Lang)=>void;capture?:()=>string;}
