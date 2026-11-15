#!/usr/bin/env python3
"""Apply the reviewed v0.2 source patches without changing inventory IDs."""
import json,re,copy
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def read(name):return json.loads((ROOT/name).read_text())
def main():
 source=(ROOT/'src/data.ts').read_text()
 categories=json.loads(re.search(r'export const categories:Category\[\]\s*=\s*(\[.*?\]);',source,re.S).group(1))
 activities=json.loads(re.search(r'export const activities:Activity\[\]\s*=\s*(\[.*?\]);',source,re.S).group(1))
 editorial=read('docs/editorial.json');patch=read('docs/v02-destination-patch.json')
 for activity in activities:
  aid=activity['id'];record=patch['records'].get(aid)
  if not record:continue
  registry=editorial['records'].setdefault(aid,{})
  registry.setdefault('originalInventoryName',activity['name']['ro'])
  if record.get('name'):activity['name']=record['name']
  if record.get('description'):activity['description']=record['description']
  updated=record.get('venue',{})
  venue=activity['venues'][0]
  previous_address=venue.get('address')
  # A corrected branch must not inherit the coordinates of a different address.
  if updated.get('address') and updated['address']!=previous_address and not {'lat','lon'}<=updated.keys():
   venue.pop('lat',None);venue.pop('lon',None)
  venue.update(updated)
  if record.get('eventDates'):venue['eventDates']=record['eventDates']
  if record.get('reviewAfter'):venue['reviewAfter']=record['reviewAfter']
  if not venue.get('verified'):venue.pop('url',None)
  elif activity.get('note')=='Operator, intrare și condiții de acces încă neconfirmate; exclus din recomandări.':activity.pop('note')
  registry.update({'name':activity['name']['ro'],'checkedAt':patch['checkedAt'],'sources':record.get('sources',[]),'identity':'confirmed' if record['identityResolved'] else 'unresolved','limits':record.get('limits',''),'v02Evidence':record})
 outdoors=read('docs/v02-photos-outdoors.json')['selected']
 city=read('docs/v02-photos-city.json')
 selected={**outdoors,**{aid:entry for aid,entry in city.items() if entry.get('status')=='licensed' and entry.get('photo')}}
 for activity in activities:
  aid=activity['id']
  if aid not in selected:continue
  entry=selected[aid];activity['photo']=copy.deepcopy(entry['photo'])
  if aid=='fratelli':
   activity['photo']['caption']={
    'ro':'Arhivă, 2013. Sediul fotografiat nu este confirmat ca sediul actual.',
    'en':'Archive, 2013. The pictured premises are not confirmed as the current venue.',
    'it':'Archivio, 2013. Non è confermato che i locali fotografati siano la sede attuale.',
    'fr':'Archive, 2013. Les locaux photographiés ne sont pas confirmés comme étant le lieu actuel.',
    'es':'Archivo, 2013. No se ha confirmado que el local fotografiado sea la sede actual.',
    'zh-Hans':'2013 年资料照片，尚未确认图中场所是否为现址。',
   }
  if aid=='beraria':
   activity['photo']['caption']={'ro':'Berăria 700, exterior, 2019 (decupaj din fotografia originală).','en':'Berăria 700 exterior, 2019 (cropped from the original photograph).','it':'Esterno di Berăria 700, 2019 (ritaglio della fotografia originale).','fr':'Extérieur de Berăria 700, 2019 (recadrage de la photographie originale).','es':'Exterior de Berăria 700, 2019 (recorte de la fotografía original).','zh-Hans':'Berăria 700 外景，摄于 2019 年（原始照片的裁剪部分）。'}
  editorial['records'][aid].update({'photo':activity['photo'],'photoGap':None,'v02PhotoEvidence':entry})
 coverage={'entities':len(activities),'appearances':sum(len(a['categories']) for a in activities),'checkedDestinationEntities':sum(any(v['verified'] for v in a['venues']) for a in activities),'openEntities':sum(any(v['verified'] and v['status']=='open' for v in a['venues']) for a in activities),'minorsEligibleEntities':sum(any(v['verified'] and v['status']=='open' and v['minors']=='yes' for v in a['venues']) for a in activities),'licensedPhotos':sum('photo'in a for a in activities),'missingPhotoEntities':[a['id'] for a in activities if 'photo'not in a],'unconfirmedDestinationEntities':[a['id'] for a in activities if not any(v['verified'] for v in a['venues'])],'localAudioClips':42}
 assert len(activities)==84 and coverage['appearances']==85
 assert [sum(c['id'] in a['categories'] for a in activities) for c in categories]==[14,7,10,4,7,11,19,7,6]
 (ROOT/'src/data.ts').write_text("import type {Activity,Category} from './types';\n// Shared curated catalog, including reviewed v0.2 corrections; see docs/editorial.json.\nexport const categories:Category[]="+json.dumps(categories,ensure_ascii=False,indent=2)+";\nexport const activities:Activity[]="+json.dumps(activities,ensure_ascii=False,indent=2)+";\n")
 editorial['coverage']=coverage;editorial['release']='0.2.0';editorial['audioGap']=None;editorial['v02DestinationPolicy']=patch['policy'];editorial['v02PhotoPolicy']='Only documented compatible licenses; archival images visibly dated; operator copyright grants not assumed.'
 editorial['v02ResearchFiles']=['v02-destination-patch.json','v02-photos-outdoors.json','v02-photos-city.json','v02-audio-provenance.json','v02-audio-qa.json']
 (ROOT/'docs/editorial.json').write_text(json.dumps(editorial,ensure_ascii=False,indent=2))
 (ROOT/'docs/v02-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2));print(json.dumps(coverage,ensure_ascii=False,indent=2))
if __name__=='__main__':main()
