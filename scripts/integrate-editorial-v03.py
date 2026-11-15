#!/usr/bin/env python3
"""Integrate reviewed v0.3 photos and public destination evidence."""
import json,re,copy
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def read(name):return json.loads((ROOT/name).read_text())
def main():
 source=(ROOT/'src/data.ts').read_text()
 categories=json.loads(re.search(r'export const categories:Category\[\]\s*=\s*(\[.*?\]);',source,re.S).group(1))
 activities=json.loads(re.search(r'export const activities:Activity\[\]\s*=\s*(\[.*?\]);',source,re.S).group(1))
 editorial=read('docs/editorial.json');selected={}
 for filename in ['v03-photos-outdoors.json','v03-photos-city.json','v03-photo-paradis.json','v03-photos-root.json','v03-photos-blockers.json']:
  path=ROOT/'docs'/filename
  if not path.exists():raise SystemExit('Research not finished: '+filename)
  report=read('docs/'+filename)
  if 'selected'in report:selected.update(report['selected'])
  elif filename=='v03-photo-paradis.json' and report.get('path'):
   selected['paradisul-piratilor']={'photo':{'path':report['path'],'author':report.get('creator') or 'Paradisul Piraților (fotograf neprecizat)','source':report['source']['currentRetainedPageUrl'],'license':'Site-ul operatorului · licență de reutilizare neprecizată','alt':report['alt'],'caption':report['caption']},'rightsStatus':report['rightsStatus'],'evidence':report}
  elif report.get('photo'):selected['paradisul-piratilor']=report
  elif filename!='v03-photo-paradis.json':raise SystemExit('Missing selected map in '+filename)
 for activity in activities:
  aid=activity['id'];record=selected.get(aid)
  if activity.get('photo') and not activity['photo'].get('rightsStatus'):activity['photo']['rightsStatus']='licensed'
  if record:
   photo=copy.deepcopy(record['photo']);status=record.get('rightsStatus',photo.get('rightsStatus','licensed'))
   assert status in ['licensed','operator-homepage-unconfirmed']
   photo['rightsStatus']=status
   assert (ROOT/'public'/photo['path'].lstrip('/')).is_file(),aid
   assert set(photo['alt'])=={'ro','en','it','fr','es','zh-Hans'}
   if status=='operator-homepage-unconfirmed':assert not re.search(r'CC BY|CC0|Public domain',photo['license'])
   activity['photo']=photo
   editorial['records'].setdefault(aid,{}).update({'photo':photo,'photoGap':None,'photoRightsPending':status=='operator-homepage-unconfirmed','v03PhotoEvidence':record})
  if aid=='beat-seven':
   venue=activity['venues'][0];venue['url']='https://beatse7en.ro/';venue['verifiedAt']='2026-11-14';venue['sources']=list(dict.fromkeys(['https://beatse7en.ro/']+venue['sources']))
   editorial['records'][aid]['v03DestinationNote']='Current operator homepage beatse7en.ro confirms Modex/Iancu Huniade3; replaces the timed-out .com visit link.'
  if aid=='paradisul-piratilor':
   evidence=read('docs/v03-paradis.json')
   # Destination fields are intentionally not promoted by website migration alone.
   copytext=evidence.get('proposedDescription') or evidence.get('proposedCopy')
   if copytext and isinstance(copytext,dict) and set(copytext)=={'ro','en','it','fr','es','zh-Hans'}:activity['description']=copytext
   editorial['records'][aid]['v03DestinationEvidence']=evidence
  if activity.get('photo'):editorial['records'][aid]['photo']=activity['photo']
 coverage={'entities':len(activities),'appearances':sum(len(a['categories'])for a in activities),'checkedDestinationEntities':sum(any(v['verified']for v in a['venues'])for a in activities),'openEntities':sum(any(v['verified']and v['status']=='open'for v in a['venues'])for a in activities),'minorsEligibleEntities':sum(any(v['verified']and v['status']=='open'and v['minors']=='yes'for v in a['venues'])for a in activities),'photosAvailable':sum('photo'in a for a in activities),'licensedPhotos':sum(bool(a.get('photo'))and a['photo'].get('rightsStatus','licensed')=='licensed'for a in activities),'illustrativeOperatorImages':[a['id']for a in activities if a.get('photo',{}).get('illustrative')], 'operatorHomepagePhotos':sum(bool(a.get('photo'))and a['photo'].get('rightsStatus')=='operator-homepage-unconfirmed'for a in activities),'missingPhotoEntities':[a['id']for a in activities if 'photo'not in a],'photoRightsPendingEntities':[a['id']for a in activities if a.get('photo',{}).get('rightsStatus')=='operator-homepage-unconfirmed'],'unconfirmedDestinationEntities':[a['id']for a in activities if not any(v['verified']for v in a['venues'])],'localAudioClips':42}
 assert len(activities)==84 and coverage['appearances']==85
 assert [sum(c['id']in a['categories']for a in activities)for c in categories]==[14,7,10,4,7,11,19,7,6]
 (ROOT/'src/data.ts').write_text("import type {Activity,Category} from './types';\n// Shared catalog; v0.3 editorial evidence and image rights are in docs/editorial.json.\nexport const categories:Category[]="+json.dumps(categories,ensure_ascii=False,indent=2)+";\nexport const activities:Activity[]="+json.dumps(activities,ensure_ascii=False,indent=2)+";\n")
 editorial.update({'coverage':coverage,'release':'0.3.0','v03PhotoPolicy':'User requested operator homepage photographs when no licensed exact photo was found. Sources are attributed; unconfirmed reuse terms are recorded separately and are not represented as a license grant.','v03ResearchFiles':['v03-photos-outdoors.json','v03-photos-city.json','v03-paradis.json','v03-photo-paradis.json','v03-street-imagery.json','v03-photos-root.json','v03-photos-blockers.json']})
 (ROOT/'docs/editorial.json').write_text(json.dumps(editorial,ensure_ascii=False,indent=2))
 (ROOT/'docs/v03-coverage.json').write_text(json.dumps(coverage,ensure_ascii=False,indent=2));print(json.dumps(coverage,ensure_ascii=False,indent=2))
if __name__=='__main__':main()
