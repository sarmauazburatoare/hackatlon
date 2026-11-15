#!/usr/bin/env python3
"""One-time offline narration build. Models are never shipped with the website."""
import argparse, hashlib, json, re, subprocess, tempfile
from pathlib import Path
import numpy as np
import soundfile as sf

ROOT=Path(__file__).resolve().parents[1]
LANGS=['ro','en','it','fr','es','zh-Hans']
CHARACTERS={
 'fountain':('F3','zf_001',1.03,.24),
 'wolf':('F1','zf_xiaobei',.91,.42),
 'lantern':('M1','zm_yunxi',.98,.30),
 'clock':('M3','zm_yunxia',1.12,.18),
 'roses':('F2','zf_xiaoyi',.97,.30),
 'umbrellas':('F5','zf_xiaoxiao',1.12,.20),
 'beer':('M2','zm_yunjian',.99,.27),
}
NUMERALS={
 'ro':{'1926':'o mie nouă sute douăzeci și șase','1884':'o mie opt sute optzeci și patru','731':'șapte sute treizeci și una','1718':'o mie șapte sute optsprezece','12':'doisprezece'},
 'en':{'1926':'nineteen twenty-six','1884':'eighteen eighty-four','731':'seven hundred and thirty-one','1718':'seventeen eighteen','12':'the twelfth of'},
 'it':{'1926':'millenovecentoventisei','1884':'milleottocentottantaquattro','731':'settecentotrentuno','1718':'millesettecentodiciotto','12':'dodici'},
 'fr':{'1926':'mille neuf cent vingt-six','1884':'mille huit cent quatre-vingt-quatre','731':'sept cent trente et une','1718':'mille sept cent dix-huit','12':'douze'},
 'es':{'1926':'mil novecientos veintiséis','1884':'mil ochocientos ochenta y cuatro','731':'setecientas treinta y una','1718':'mil setecientos dieciocho','12':'doce'},
 'zh-Hans':{'1926':'一九二六','1884':'一八八四','731':'七百三十一','1718':'一七一八'},
}
def spoken(text,lang):
 for number,words in NUMERALS[lang].items():text=re.sub(r'(?<!\d)'+number+r'(?!\d)',words,text)
 if lang=='it':text=text.replace('Lupa Capitolina','lupa capitolina').replace('Guarda in alto! Ci ispiriamo','Guarda in alto, ci ispiriamo')
 return text
def stamp(seconds):
 ms=round(seconds*1000);return f'{ms//3600000:02d}:{ms//60000%60:02d}:{ms//1000%60:02d}.{ms%1000:03d}'
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--model-dir',required=True);parser.add_argument('--cache-dir',required=True);parser.add_argument('--languages',nargs='*',default=LANGS);args=parser.parse_args()
 # stories.ts remains the canonical authored transcript.
 text=(ROOT/'src/stories.ts').read_text()
 stories=json.loads(re.search(r'export const stories:Story\[\]\s*=\s*(\[.*?\]);',text,re.S).group(1))
 out=ROOT/'public/media/audio';out.mkdir(parents=True,exist_ok=True)
 cache=Path(args.cache_dir);cache.mkdir(parents=True,exist_ok=True)
 manifest_path=ROOT/'src/narrations.generated.json'
 manifest=json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
 tts=None;pipelines={}
 for lang in args.languages:
  if lang!='zh-Hans' and tts is None:
   from supertonic import TTS
   tts=TTS(model_dir=args.model_dir,auto_download=False,intra_op_num_threads=4)
  for i,story in enumerate(stories):
   sid=story['id'];voice,zhvoice,speed,pause=CHARACTERS[sid];voice=zhvoice if lang=='zh-Hans' else voice
   if lang=='zh-Hans' and sid=='wolf':speed=1.0
   source=story['text'][lang];spoken_input=spoken(source,lang)
   fingerprint=[source,voice,speed,pause] if spoken_input==source else [source,spoken_input,voice,speed,pause]
   digest=hashlib.sha256(json.dumps(fingerprint,ensure_ascii=False).encode()).hexdigest()
   meta=cache/f'{sid}-{lang}.json';mp3=out/f'{sid}-{lang}.mp3';vtt=out/f'{sid}-{lang}.vtt'
   if meta.exists() and mp3.exists() and json.loads(meta.read_text()).get('transcriptHash')==digest:
    entry=json.loads(meta.read_text());manifest.setdefault(sid,{})[lang]=entry;print(f'cached {sid} {lang}',flush=True);continue
   chunks=re.findall(r'.+?(?:[.!?。！？](?=\s|$)|$)',source,re.S) if lang!='zh-Hans' else re.findall(r'[^。！？]+[。！？]?',source)
   chunks=[s.strip() for s in chunks if s.strip()]
   if lang=='it' and sid=='umbrellas' and len(chunks)>1:chunks=[chunks[0]+' '+chunks[1],*chunks[2:]]
   if lang=='zh-Hans':
    import torch
    from kokoro import KPipeline
    repo='hexgrad/Kokoro-82M-v1.1-zh' if sid=='fountain' else 'hexgrad/Kokoro-82M'
    if repo not in pipelines:
     torch.set_num_threads(4);torch.manual_seed(101);pipelines[repo]=KPipeline(lang_code='z',repo_id=repo,device='cpu')
    pipeline=pipelines[repo]
   arrays=[];cues=[];elapsed=0.;sr=24000 if lang=='zh-Hans' else tts.sample_rate
   np.random.seed(410+i)
   for sentence in chunks:
    if lang=='zh-Hans':
     generated=[a.detach().cpu().numpy() for _,_,a in pipeline(spoken(sentence,lang),voice=voice,speed=speed)]
     samples=np.concatenate(generated).reshape(-1)
    else:
     wav,duration=tts.synthesize(spoken(sentence,lang),voice_style=tts.get_voice_style(voice),lang=lang,total_steps=10,speed=speed,silence_duration=0)
     samples=np.asarray(wav).reshape(-1)
    start=elapsed;elapsed+=len(samples)/sr;arrays.append(samples);cues.append({'start':round(start,4),'end':round(elapsed,4),'text':sentence})
    silence=np.zeros(round(pause*sr),dtype=np.float32);arrays.append(silence);elapsed+=len(silence)/sr
   samples=np.concatenate(arrays)
   with tempfile.NamedTemporaryFile(suffix='.wav',delete=False,dir=cache) as f:wavpath=Path(f.name)
   sf.write(wavpath,samples,sr)
   subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(wavpath),'-af','loudnorm=I=-18:TP=-2:LRA=7','-ar','24000','-ac','1','-c:a','libmp3lame','-b:a','64k',str(mp3)],check=True)
   wavpath.unlink()
   vtt.write_text('WEBVTT\n\n'+'\n\n'.join(f'{stamp(c["start"])} --> {stamp(c["end"])}\n{c["text"]}' for c in cues)+'\n')
   entry={'audio':f'/media/audio/{mp3.name}','vtt':f'/media/audio/{vtt.name}','duration':round(elapsed,4),'cues':cues,'voice':voice,'speed':speed,'pause':pause,'model':('Kokoro-82M-v1.1-zh' if sid=='fountain' else 'Kokoro-82M') if lang=='zh-Hans' else 'Supertonic-3','spokenInput':spoken_input,'transcriptHash':digest,'sha256':hashlib.sha256(mp3.read_bytes()).hexdigest()}
   meta.write_text(json.dumps(entry,ensure_ascii=False,indent=2));manifest.setdefault(sid,{})[lang]=entry
   manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2));(out/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
   print(f'generated {sid} {lang}: {elapsed:.1f}s {mp3.stat().st_size} bytes',flush=True)
 manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2));(out/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
if __name__=='__main__':main()
