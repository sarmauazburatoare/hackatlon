import localIndex from './location-index.generated.json';

export interface Location {
  id:string;label:string;detail:string;lat:number;lon:number;
  precision:'landmark'|'area'|'street';
  sources:string[];dataDate:string;license:string;aliases?:string[];
}

/** WGS84 coverage of the offline locator, including the nearby catalog settlements. */
export const MAP_BOUNDS={west:21.10,east:21.56,south:45.66,north:45.89};
export const locations:Location[]=localIndex as Location[];

function normalize(value:string):string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu,' ').trim();
}

const indexed=locations.map(location=>({
  location,
  name:normalize(location.label),
  aliases:normalize((location.aliases??[]).join(' ')),
  all:normalize([location.label,location.detail,...location.aliases??[]].join(' ')),
}));

/** Local, accent-insensitive lookup. Numeric tokens never fabricate a house number. */
export function searchLocations(query:string):Location[] {
  const normalized=normalize(query);
  if (!normalized) return [];
  const terms=normalized.split(' ');
  const matches=(text:string) => terms.every(term=>/^\d+[a-z]?$/i.test(term)
    ? text.split(' ').includes(term) : text.includes(term));
  return indexed.filter(item=>matches(item.all)).map(item=>({
    ...item,
    score:item.name===normalized ? 0 : item.aliases===normalized ? 1
      : matches(item.name) ? 2 : matches(item.aliases) ? 3 : 4,
  })).sort((a,b)=>a.score-b.score || a.name.length-b.name.length ||
    (a.location.id < b.location.id ? -1 : a.location.id > b.location.id ? 1 : 0))
    .slice(0,12).map(item=>item.location);
}
