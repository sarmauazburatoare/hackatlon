import type { Activity, Candidate, Category, Preferences, Recommendation, Venue } from './types';

const compareId = (a:string,b:string) => a < b ? -1 : a > b ? 1 : 0;
const radians = (degrees:number) => degrees * Math.PI / 180;
const geocoded = (venue:Venue):venue is Venue & {lat:number;lon:number} =>
  Number.isFinite(venue.lat) && Number.isFinite(venue.lon) &&
  Math.abs(venue.lat!) <= 90 && Math.abs(venue.lon!) <= 180;

/** Great-circle distance in kilometres; it is not a route or travel time. */
function distanceKm(a:{lat:number;lon:number},b:{lat:number;lon:number}):number {
  const dLat=radians(b.lat-a.lat), dLon=radians(b.lon-a.lon);
  const h=Math.sin(dLat/2)**2 + Math.cos(radians(a.lat))*Math.cos(radians(b.lat))*Math.sin(dLon/2)**2;
  return 6371.0088 * 2 * Math.asin(Math.sqrt(Math.min(1,h)));
}

/** One eligible branch per entity. The distance cap is global, never per category. */
function timisoaraDate():string{const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Bucharest',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());return ['year','month','day'].map(type=>parts.find(p=>p.type===type)!.value).join('-');}
export function eligibleActivities(activities:Activity[],preferences:Preferences,asOf=timisoaraDate()):Candidate[] {
  const entities=new Map<string,Activity>();
  for (const activity of activities) {
    const existing=entities.get(activity.id);
    if (existing) {
      existing.categories=[...new Set([...existing.categories,...activity.categories])];
      existing.venues=[...existing.venues,...activity.venues];
    } else entities.set(activity.id,{...activity,categories:[...activity.categories],venues:[...activity.venues]});
  }
  const pool:Candidate[]=[];
  for (const activity of entities.values()) {
    const eligible=activity.venues.filter(v=>v.verified && v.status==='open' && (!v.reviewAfter||asOf<=v.reviewAfter) && (!preferences.minors || v.minors==='yes'));
    if (preferences.origin) {
      const branches=eligible.filter(geocoded).map(venue=>({activity,venue,distance:distanceKm(preferences.origin!,venue)}));
      branches.sort((a,b)=>a.distance-b.distance || compareId(a.venue.id,b.venue.id));
      if (branches[0]) pool.push(branches[0]);
    } else {
      eligible.sort((a,b)=>compareId(a.id,b.id));
      if (eligible[0]) pool.push({activity,venue:eligible[0]});
    }
  }
  pool.sort((a,b)=>(a.distance??0)-(b.distance??0) || compareId(a.activity.id,b.activity.id));
  return preferences.origin ? pool.slice(0,preferences.limit) : pool;
}

function randomIndex(length:number,random:()=>number):number {
  return Math.floor(Math.max(0,Math.min(1-Number.EPSILON,random())) * length);
}

/** Draw a segment first, then one entity. An empty segment gets at most one reroll. */
export function chooseRecommendation(pool:Candidate[],categories:Category[],random:()=>number=Math.random,previousId?:string):Recommendation|null {
  const known=new Set(categories.map(c=>c.id));
  let available=pool.filter(c=>c.activity.categories.some(id=>known.has(id)));
  if (!available.length || !categories.length) return null;
  if (available.some(c=>c.activity.id!==previousId)) available=available.filter(c=>c.activity.id!==previousId);
  const groups=categories.map(c=>available.filter(item=>item.activity.categories.includes(c.id)));
  let categoryIndex=randomIndex(categories.length,random);
  const rerolled=groups[categoryIndex].length===0;
  if (rerolled) {
    const nonempty=groups.flatMap((group,index)=>group.length ? [index] : []);
    categoryIndex=nonempty[randomIndex(nonempty.length,random)];
  }
  const group=groups[categoryIndex];
  return {candidate:group[randomIndex(group.length,random)],categoryId:categories[categoryIndex].id,categoryIndex,rerolled};
}

/** Absolute clockwise degrees shared by the CSS and Three.js wheel renderers.
 * Segment 0 starts centred at 12 o'clock; subsequent centres are 40° clockwise.
 */
export function wheelRotation(categoryIndex:number,currentRotation=0):number {
  const target=(((-categoryIndex*40)%360)+360)%360;
  const current=((currentRotation%360)+360)%360;
  return currentRotation + 4*360 + ((target-current+360)%360);
}
