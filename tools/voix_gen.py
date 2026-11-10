# Génère les voix pré-enregistrées (audio/<lang>/<id>.mp3) avec Piper, puis vérifie chaque phrase par reconnaissance vocale.
# Utilisé à chaque « génère » pour les nouveaux mots. Tel quel, il attend dans /home/claude/tts :
#   - texts4.json : {"en":[{"t":texte,"k":clé,"v":0|1 (voix forcée, optionnel)}], "es":[...]}  (produit par voix_collect.js)
#   - les voix Piper et les modèles Whisper de https://github.com/k2-fsa/sherpa-onnx/releases (tts-models, asr-models) :
#     vits-piper-en_US-ryan-high (voix 0), vits-piper-en_US-lessac-high (voix 1),
#     vits-piper-es_ES-sharvard-medium (locuteurs 0 = homme, 1 = femme), sherpa-onnx-whisper-base.en, sherpa-onnx-whisper-small
#   - pip install piper-tts sherpa-onnx soundfile numpy ; ffmpeg
# Sortie : man4_<lang>.json (clé -> id) à fusionner dans audio/manifest.js, rep4_<lang>.json (texte dit / texte entendu).
# Usage : python3 voix_gen.py en   |   python3 voix_gen.py es
import json,sys,os,re,hashlib,subprocess,numpy as np,sherpa_onnx,soundfile as sf
lang=sys.argv[1]; R='/home/claude/aprende-repo/'; T='/home/claude/tts/'
items=json.load(open(T+'texts4.json'))[lang]; texts=[x['t'] for x in items]; force={x['k']:x.get('v') for x in items}
def key(t): return re.sub(r'\(.*?\)','',t).strip()
def clean(t):
    t=re.sub(r'\(.*?\)|\[.*?\]','',t)
    t=re.sub(r"\b(sb|smb|sbd)'s\b","someone's",t); t=re.sub(r'\b(sb|smb|sbd)\b','someone',t); t=re.sub(r'\b(sth|smth)\b','something',t); t=t.replace('…',', ').replace(' / ',', ').replace('«','').replace('»','')
    return re.sub(r'\s+',' ',t).replace(' ,',',').strip(' ,')
import wave
from piper import PiperVoice, SynthesisConfig
SC=SynthesisConfig(length_scale=1.08)
def mk(d,name): return PiperVoice.load(f'{T}{d}/{name}.onnx')
voices=[mk('vits-piper-en_US-ryan-high','en_US-ryan-high'),mk('vits-piper-en_US-lessac-high','en_US-lessac-high')] if lang=='en' else [mk('vits-piper-es_ES-sharvard-medium','es_ES-sharvard-medium')]*2
wd='sherpa-onnx-whisper-base.en' if lang=='en' else 'sherpa-onnx-whisper-small'; p='base.en' if lang=='en' else 'small'
rec=sherpa_onnx.OfflineRecognizer.from_whisper(encoder=f'{T}{wd}/{p}-encoder.int8.onnx',decoder=f'{T}{wd}/{p}-decoder.int8.onnx',tokens=f'{T}{wd}/{p}-tokens.txt',language=lang,num_threads=2)
out=R+f'audio/{lang}/'; os.makedirs(out,exist_ok=True)
man={}; rep=[]; total=0
seen=set()
for t in texts:
    k=key(t)
    if not k or k in seen: continue
    seen.add(k)
    h=hashlib.sha1((lang+':'+k).encode()).hexdigest()[:10]
    vi=force.get(k) if force.get(k) is not None else int(h,16)%2
    v=voices[vi]
    sc=SC if lang=='en' else SynthesisConfig(length_scale=1.08,speaker_id=vi)
    with wave.open(T+'raw_'+lang+'.wav','wb') as w: v.synthesize_wav(clean(t),w,syn_config=sc)
    s,sr=sf.read(T+'raw_'+lang+'.wav',dtype='float32')
    pk=float(np.abs(s).max()) if len(s) else 0
    if pk>0: s=s/pk*0.89
    sf.write(T+'tmp_'+lang+'.wav',s,sr)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',T+'tmp_'+lang+'.wav','-ac','1','-ar','22050','-b:a','40k',out+h+'.mp3'],check=True)
    heard=''
    if True:
        st=rec.create_stream(); st.accept_waveform(sr,s); rec.decode_stream(st); heard=st.result.text.strip()
    man[k]=h; total+=len(s)/sr
    rep.append({'k':k,'said':clean(t),'heard':heard,'dur':round(len(s)/sr,2),'peak':round(pk,3),'voice':vi})
json.dump(man,open(T+f'man4_{lang}.json','w'),ensure_ascii=False); json.dump(rep,open(T+f'rep4_{lang}.json','w'),ensure_ascii=False)
print(lang,len(man),'files',round(total/60,1),'min')
