// Liste tous les textes que l'appli peut lire à voix haute et qui n'ont pas encore d'enregistrement
// (cours, Stories, leçons de prononciation, mots du journal). Lance l'appli dans un navigateur sans interface.
// Prérequis : `python3 -m http.server 8765` à la racine du dépôt, et playwright. Écrit /home/claude/tts/texts3.json.
const { chromium } = require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('http://localhost:8765/index.html?local=1',{waitUntil:'domcontentloaded'});await p.waitForTimeout(2000);
const L0=fs.readFileSync('/home/claude/aprende-repo/app.js','utf8').split('\n')[8];const EP=JSON.parse(L0.slice(L0.indexOf('{'),L0.lastIndexOf('}')+1));
const srsWords={en:[],es:[]};for(const c of Object.values(EP.srs_data))if(srsWords[c.lang])srsWords[c.lang].push(c.word);
const r=await p.evaluate((srsWords)=>{const key=t=>String(t).replace(/\(.*?\)/g,'').trim();const out={en:[],es:[]},chars={};
 for(const l of ['en','es']){const add=(t,v)=>{if(!t)return;const k=key(t);if(!k||AUDIO_MAP[l][k]||out[l].some(x=>x.k===k))return;out[l].push({t,k,v})};
  const arr=Array.isArray(STORIES[l])?STORIES[l]:Object.values(STORIES[l]||{});
  arr.forEach(st=>{const ids=Object.keys(st.chars);chars[l+':'+st.id]=ids.map(i=>st.chars[i].join(' '));const vo=who=>{const ch=st.chars[who]||[];const e=ch[0]||'';return /👩|👧|👵|🧕|👸|💃|♀/u.test(e)?1:/👨|👦|👴|🧔|🤴|🕺|♂/u.test(e)?0:ids.indexOf(who)%2};
   const walk=steps=>(steps||[]).forEach(s=>{if(s.type==='line')add(s.text,vo(s.who));else if(s.type==='choice')s.opts.forEach(o=>{if(o.ok!==false)add(o.text,vo(s.who));walk(o.then)})});walk(st.steps)});
  out[l+'_story']=out[l].length;
  if(l==='en'&&typeof PRON_LESSONS!=='undefined')PRON_LESSONS.forEach(x=>(x.points||[]).forEach(pt=>(pt.ex||[]).forEach(e=>add(e[0]))));
  out[l+'_lessons']=out[l].length;
  getDeckForLang(l).forEach(c=>{add(c[l]);if(l==='es'&&typeof ES_EXAMPLES!=='undefined'&&ES_EXAMPLES[c.es])add(ES_EXAMPLES[c.es][0]);if(l==='en'&&c.say)add(c.say)});
  srsWords[l].forEach(w=>add(w));}
 return {out,chars}},srsWords);
const prev=new Set(JSON.parse(fs.readFileSync('/home/claude/tts/texts2.json')).en.map(x=>x.k));fs.writeFileSync('/home/claude/tts/texts3.json',JSON.stringify({en:r.out.en.filter(x=>!prev.has(x.k)),es:r.out.es}));console.log('texts3 en',r.out.en.filter(x=>!prev.has(x.k)).length,'es',r.out.es.length);
for(const l of ['en','es'])console.log(l,'new',r.out[l].length,'story',r.out[l+'_story'],'lessons(cum)',r.out[l+'_lessons'],'chars',r.out[l].reduce((a,x)=>a+x.t.length,0));
console.log(JSON.stringify(r.chars));console.log(r.out.en.slice(0,3),r.out.es.slice(-3));await b.close()})();
