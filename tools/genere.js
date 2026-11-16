#!/usr/bin/env node
// ¡Aprende! — outil du « génère » hebdomadaire.
//
//   node tools/genere.js doublons <sauvegarde.json>      mots en attente déjà présents dans l'appli
//   node tools/genere.js doublons en:"pay off" es:lujo   idem, mots donnés à la main
//   node tools/genere.js verif                           format des données, rien de perdu depuis le dernier commit, cache, secrets
//   node tools/genere.js voix                            met à jour tools/voix_textes.json (textes sans enregistrement, marqués n:1)
//   node tools/genere.js audio <dossier ou .zip>         range les mp3 reçus dans audio/ et met à jour audio/manifest.js
//   node tools/genere.js cache                           incrémente CACHE_NAME dans sw.js
//   node tools/genere.js pret                            verif + tests automatiques : à lancer avant de pousser
//
// Sans dépendance, sauf « voix » et « pret » qui utilisent Playwright (comme tests/run.js).
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto'), cp = require('child_process');
const ROOT = path.join(__dirname, '..');
const LANGS = ['es', 'en', 'ln'];
const C = { r: s => `\x1b[31m${s}\x1b[0m`, g: s => `\x1b[32m${s}\x1b[0m`, y: s => `\x1b[33m${s}\x1b[0m`, b: s => `\x1b[1m${s}\x1b[0m` };

// ── Chargement des données, depuis le dossier de travail ou depuis un commit ──
const DATA_FILES = ['courses/es.js', 'courses/en.js', 'courses/ln.js', 'js/data-es.js', 'js/data-en.js', 'js/data-ln.js', 'js/journal.js', 'js/stories.js', 'js/conjugation.js', 'js/conj-cards.js', 'audio/manifest.js'];
function scriptList(read) {
  const html = read('index.html') || '';
  return [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
}
function loose() {   // faux navigateur : tout appel est accepté, pour charger des fichiers qui touchent au DOM
  const f = function() { return p; };
  const p = new Proxy(f, { get: (t, k) => k === Symbol.toPrimitive ? () => '' : k === 'length' ? 0 : p, apply: () => p, construct: () => p, set: () => true });
  return p;
}
function load(read) {
  const ctx = { console: { log() {}, warn() {}, error() {} }, setTimeout() {}, setInterval() {}, clearTimeout() {}, navigator: loose(), location: { search: '', href: '' }, localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, document: loose(), speechSynthesis: loose(), Audio: loose(), fetch: loose(), Notification: loose(), matchMedia: loose() };
  ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx; ctx.addEventListener = () => {}; ctx.APRENDE_CONFIG = {};
  vm.createContext(ctx);
  const feedback = scriptList(read).filter(f => /^courses\/feedback/.test(f));
  const failed = [];
  for(const f of [...DATA_FILES, ...feedback]) {
    const src = read(f);
    if(src == null) { failed.push(f + ' (absent)'); continue; }
    const code = src.replace(/^(const|let) /gm, 'var ');
    for(let attempt = 0; ; attempt++) {
      try { vm.runInContext(code, ctx, { filename: f, timeout: 20000 }); break; }
      catch(e) {
        // une fonction d'un autre fichier de l'appli (non chargé ici) : on la neutralise et on recharge
        const m = e && e.name === 'ReferenceError' ? String(e.message).match(/^(\w+) is not defined/) : null;
        if(m && attempt < 40) { ctx[m[1]] = loose(); continue; }
        failed.push(`${f} : ${e.message}`); break;
      }
    }
  }
  const arr = x => Array.isArray(x) ? x : (x && typeof x === 'object' ? Object.values(x) : []);
  const D = { failed, feedbackFiles: feedback, course: {}, deck: {}, fiches: {}, journal: arr(ctx.JOURNAL_SESSIONS), stories: {}, audio: ctx.AUDIO_MAP || {}, conjDb: ctx.CONJ_DB || {}, conjSent: arr(ctx.CONJ_SENT) };
  for(const l of LANGS) {
    D.course[l] = ctx['COURSE_' + l.toUpperCase()] || { units: [] };
    D.fiches[l] = (ctx.CRS_FB && ctx.CRS_FB[l]) || {};
    const st = ctx.STORIES && ctx.STORIES[l]; D.stories[l] = arr(st);
  }
  D.deck.es = arr(ctx.DATA && ctx.DATA.length ? ctx.DATA : ctx.VOCAB).filter(c => c && c.es);   // DATA = VOCAB sans les doublons de casse
  D.deck.en = arr(ctx.ENGLISH).filter(c => c && c.en);
  D.deck.ln = arr(ctx.LINGALA).filter(c => c && c.ln);
  return D;
}
const readWork = f => { try { return fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch(e) { return null; } };
const readHead = f => { try { return cp.execSync(`git show HEAD:${JSON.stringify(f).slice(1, -1)}`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore'] }); } catch(e) { return null; } };

// ── Tous les mots connus de l'appli, par langue ──
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')
  .replace(/^(to|the|a|an|el|la|los|las|un|una|ko)\s+/, '').replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
function known(D) {
  const K = {};
  for(const l of LANGS) {
    const m = K[l] = new Map(), add = (w, where) => { if(typeof w !== 'string' || !w.trim()) return; const n = norm(w); if(n && !m.has(n)) m.set(n, { word: w, where }); };
    D.deck[l].forEach(c => add(c[l], 'paquet'));
    (D.course[l].units || []).forEach((u, i) => (u.w || []).forEach(w => add(w[0], `unité ${i + 1} « ${u.t} »`)));
    D.journal.forEach(s => { (s[l] || (l === 'es' ? s.mots : null) || []).forEach(x => add(x[0], `journal du ${s.date}`)); });
    Object.keys(D.fiches[l]).forEach(w => add(w, 'fiche'));
  }
  return K;
}
function cmdDoublons(args) {
  const D = load(readWork), K = known(D), asked = [];
  for(const a of args) {
    if(/\.json$/i.test(a) && fs.existsSync(a)) {
      const j = JSON.parse(fs.readFileSync(a, 'utf8')), src = j.data || j, list = src.pending_words || [];
      list.forEach(x => asked.push([x.l || 'en', x.w]));
      if(!list.length) console.log(C.y(`${a} : aucun mot noté dans l'appli (pending_words vide).`));
    } else if(fs.existsSync(a)) {
      fs.readFileSync(a, 'utf8').split('\n').map(s => s.trim()).filter(s => s && !s.startsWith('#')).forEach(s => { const m = s.match(/^(es|en|ln|fr)\s*[:\t]\s*(.+)$/); if(m) asked.push([m[1], m[2]]); });
    } else { const m = a.match(/^(es|en|ln|fr):(.+)$/); if(m) m[2].split('|').forEach(w => asked.push([m[1], w.trim()])); else console.log(C.y(`ignoré : ${a} (attendu : langue:mot, ou un fichier)`)); }
  }
  if(!asked.length) { console.log('Aucun mot à vérifier. Exemple : node tools/genere.js doublons en:"pay off|hook" es:lujo'); return 1; }
  let dup = 0, near = 0;
  const seen = new Set();
  for(const [l, w] of asked) {
    const n = norm(w), id = l + ':' + n;
    if(seen.has(id)) { console.log(`${C.y('2 fois ')} ${l}  ${w}  (deux fois dans la liste)`); dup++; continue; }
    seen.add(id);
    if(l === 'fr') { console.log(`${C.y('à trad.')} fr  ${w}  (français : à traduire vers l'espagnol et l'anglais)`); continue; }
    const hit = K[l].get(n);
    if(hit) { console.log(`${C.r('DÉJÀ   ')} ${l}  ${w}  → ${hit.word} (${hit.where})`); dup++; continue; }
    const close = [];
    if(n.length > 3) for(const [k, v] of K[l]) { const a = k.split(' '), b = n.split(' '); if((a.length > 1 || b.length > 1) && (` ${k} `.includes(` ${n} `) || ` ${n} `.includes(` ${k} `)) && k.length > 3) close.push(`${v.word} (${v.where})`); }
    if(close.length) { console.log(`${C.y('proche ')} ${l}  ${w}  ~ ${close.slice(0, 3).join(' ; ')}`); near++; }
    else console.log(`${C.g('nouveau')} ${l}  ${w}`);
  }
  const fr = asked.filter(x => x[0] === 'fr').length;
  console.log(`\n${asked.length} mot(s) : ${asked.length - dup - near - fr} nouveau(x), ${dup} déjà là, ${near} proche(s) à regarder${fr ? `, ${fr} à traduire depuis le français` : ''}.`);
  return 0;
}

// ── Vérifications avant mise en ligne ──
function counts(D) {
  const c = {};
  for(const l of LANGS) {
    c[`paquet ${l}`] = new Set(D.deck[l].map(x => String(x[l]).toLowerCase())).size;   // mots distincts : retirer un doublon n'est pas une perte
    c[`unités ${l}`] = (D.course[l].units || []).length;
    c[`mots du cours ${l}`] = (D.course[l].units || []).reduce((a, u) => a + (u.w || []).length, 0);
    c[`fiches ${l}`] = Object.keys(D.fiches[l]).length;
    c[`astuces ${l}`] = Object.values(D.fiches[l]).filter(f => f && f.tip).length;
    c[`histoires ${l}`] = D.stories[l].length;
    c[`voix ${l}`] = Object.keys(D.audio[l] || {}).length;
  }
  c['sessions du journal'] = D.journal.length;
  c['mots du journal'] = D.journal.reduce((a, s) => a + LANGS.reduce((b, l) => b + (s[l] || []).length, 0) + (s.mots || []).length, 0);
  c['verbes conjugués'] = Object.keys(D.conjDb).length;
  c['phrases de conjugaison'] = D.conjSent.length;
  return c;
}
function cmdVerif() {
  const errs = [], warns = [], ok = m => console.log(C.g('  ✓ ') + m), ko = m => { errs.push(m); console.log(C.r('  ✗ ') + m); }, wn = m => { warns.push(m); console.log(C.y('  ! ') + m); };
  const D = load(readWork);
  console.log(C.b('Fichiers de données'));
  D.failed.length ? D.failed.forEach(f => ko('ne se charge pas : ' + f)) : ok('tous les fichiers de données se chargent');

  // 1. Rien de perdu depuis le dernier commit (garde-fou contre un fichier tronqué)
  console.log(C.b('\nRien de perdu depuis le dernier commit'));
  const H = load(readHead), now = counts(D), before = counts(H);
  let lost = 0;
  for(const k in now) {
    if(now[k] < before[k]) { ko(`${k} : ${before[k]} → ${now[k]} (${now[k] - before[k]})`); lost++; }
    else if(now[k] > before[k]) console.log(`  + ${k} : ${before[k]} → ${now[k]} (+${now[k] - before[k]})`);
  }
  for(const l of LANGS) {
    const gone = Object.keys(H.fiches[l]).filter(w => !(w in D.fiches[l]));
    if(gone.length) ko(`fiches ${l} disparues : ${gone.slice(0, 8).join(', ')}${gone.length > 8 ? '…' : ''}`);
    const was = new Set(), is = new Set();
    H.deck[l].forEach(c => was.add(c[l])); (H.course[l].units || []).forEach(u => (u.w || []).forEach(w => was.add(w[0])));
    D.deck[l].forEach(c => is.add(c[l])); (D.course[l].units || []).forEach(u => (u.w || []).forEach(w => is.add(w[0])));
    const renamed = [...was].filter(w => !is.has(w));
    if(renamed.length) ko(`mots ${l} supprimés ou renommés (leur carte repartirait de zéro) : ${renamed.slice(0, 8).join(', ')}${renamed.length > 8 ? '…' : ''}`);
  }
  if(!lost) ok('aucun compteur ne baisse');

  // 2. Format
  console.log(C.b('\nFormat'));
  let bad = 0;
  const isS = x => typeof x === 'string' && x.trim().length > 0;
  for(const l of LANGS) {
    (D.course[l].units || []).forEach((u, i) => {
      if(!isS(u.t)) { ko(`${l} unité ${i + 1} : titre manquant`); bad++; }
      (u.w || []).forEach(w => { if(!Array.isArray(w) || !isS(w[0]) || !isS(w[1])) { ko(`${l} unité ${i + 1} « ${u.t} » : mot mal formé ${JSON.stringify(w).slice(0, 60)}`); bad++; } });
    });
    const seen = new Map();
    D.deck[l].forEach(c => { const n = String(c[l]).toLowerCase(); if(seen.has(n)) { wn(`${l} paquet : « ${c[l]} » en double`); } seen.set(n, 1); if(!isS(c.fr)) { ko(`${l} paquet : « ${c[l]} » sans traduction`); bad++; } });
    for(const [w, f] of Object.entries(D.fiches[l])) {
      const p = [];
      if(!f || typeof f !== 'object') p.push('pas un objet');
      else {
        if(f.reg != null && typeof f.reg !== 'string') p.push('reg'); if(f.tip != null && !isS(f.tip)) p.push('tip');
        if(f.alt != null && !Array.isArray(f.alt)) p.push('alt'); if(f.err != null && !Array.isArray(f.err)) p.push('err');
        if(!f.tip) p.push('astuce manquante');
      }
      if(p.length) { ko(`${l} fiche « ${w} » : ${p.join(', ')}`); bad++; }
    }
    D.stories[l].forEach(s => { if(!s || !isS(s.id) || !Array.isArray(s.steps) || !s.steps.length) { ko(`${l} : histoire mal formée (${s && s.id})`); bad++; } });
  }
  D.journal.forEach(s => { if(!isS(s.date)) { ko('journal : session sans date'); bad++; } });
  D.conjSent.forEach(s => { const f = D.conjDb[s[0]] && D.conjDb[s[0]][s[1]]; if(!f || !f[s[2]] || String(s[3]).split('___').length !== 2 || !isS(s[4]) || !String(s[3]).includes(s[5])) { ko(`phrase de conjugaison invalide : ${s[3]}`); bad++; } });
  if(!bad) ok('unités, paquets, fiches, histoires, journal et conjugaison bien formés');

  // 3. Voix
  console.log(C.b('\nVoix'));
  let missing = 0, total = 0;
  for(const l of Object.keys(D.audio)) for(const [k, id] of Object.entries(D.audio[l])) { total++; if(!fs.existsSync(path.join(ROOT, 'audio', l, id + '.mp3'))) { if(missing < 5) ko(`${l} : fichier absent pour « ${k.slice(0, 40)} » (${id})`); missing++; } }
  if(!missing) ok(`${total} voix de l'index ont leur fichier`); else if(missing > 5) ko(`… ${missing} fichiers absents au total`);

  // 4. Cache hors connexion
  console.log(C.b('\nCache hors connexion (sw.js)'));
  const sw = readWork('sw.js') || '', cached = new Set([...sw.matchAll(/'([^'\s]+\.(?:js|css|html|json|jpg|png|webp|svg))'/g)].map(m => m[1]));
  const need = [...scriptList(readWork).filter(f => !/^https?:/.test(f)), 'style.css'];
  const notCached = need.filter(f => !cached.has(f)), absent = [...cached].filter(f => !fs.existsSync(path.join(ROOT, f)));
  notCached.length ? ko('chargés par index.html mais pas dans le cache : ' + notCached.join(', ')) : ok('tous les scripts de index.html sont dans le cache');
  if(absent.length) ko('dans le cache mais absents du dépôt : ' + absent.join(', '));
  const ver = v => (v.match(/aprende-v(\d+)/) || [])[1], vNow = ver(sw), vHead = ver(readHead('sw.js') || '');
  let changed = '';
  try { changed = cp.execSync('git status --porcelain', { cwd: ROOT, encoding: 'utf8' }); } catch(e) {}
  const appChanged = changed.split('\n').some(x => /\.(js|css|html|jpg|mp3)$/.test(x) && !/ (tests|tools|docs)\//.test(x));
  if(appChanged && vNow === vHead) wn(`des fichiers de l'appli ont changé mais le cache est resté à v${vNow} : lance « node tools/genere.js cache »`);
  else ok(`version du cache : v${vNow}${vNow !== vHead ? ` (était v${vHead})` : ''}`);

  // 5. Secrets
  console.log(C.b('\nSecrets'));
  let tracked = [];
  try { tracked = cp.execSync('git ls-files -co --exclude-standard', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(f => /\.(js|py|json|html|md|txt|css)$/.test(f)); } catch(e) {}
  const leaks = [];
  for(const f of tracked) { let s; try { s = fs.readFileSync(path.join(ROOT, f), 'utf8'); } catch(e) { continue; } if(s.length > 3e6) continue;
    if(/AIza[0-9A-Za-z_\-]{30,}/.test(s) && f !== 'sync.js') leaks.push(f + ' (clé Google)');
    if(/AQ\.Ab[0-9A-Za-z_\-]{20,}/.test(s)) leaks.push(f + ' (clé Gemini)');
    if(/CLE_API\s*=\s*["'][^"']{12,}["']/.test(s)) leaks.push(f + ' (CLE_API renseignée)');
    if(/-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(s)) leaks.push(f + ' (clé privée)'); }
  leaks.length ? leaks.forEach(x => ko('secret possible : ' + x)) : ok('aucune clé dans les fichiers du dépôt');

  console.log('\n' + (errs.length ? C.r(`${errs.length} problème(s) à corriger avant de pousser.`) : C.g('Tout est en ordre.')) + (warns.length ? C.y(` ${warns.length} avertissement(s).`) : ''));
  return errs.length ? 1 : 0;
}

// ── Cache ──
function cmdCache() {
  const p = path.join(ROOT, 'sw.js'), s = fs.readFileSync(p, 'utf8'), m = s.match(/aprende-v(\d+)/);
  if(!m) { console.log(C.r('CACHE_NAME introuvable dans sw.js')); return 1; }
  const head = ((readHead('sw.js') || '').match(/aprende-v(\d+)/) || [])[1];
  if(head && +m[1] > +head) { console.log(`Cache déjà passé de v${head} à v${m[1]} pour cette mise en ligne.`); return 0; }
  fs.writeFileSync(p, s.replace(/aprende-v\d+/, 'aprende-v' + (+m[1] + 1)));
  console.log(C.g(`Cache : v${m[1]} → v${+m[1] + 1}`));
  return 0;
}

// ── Voix ──
const audioId = (l, k) => crypto.createHash('sha1').update(l + ':' + k).digest('hex').slice(0, 10);
const audioKey = t => String(t).replace(/\(.*?\)/g, '').trim();
const spoken = k => k.replace(/\[[^\]]*\]/g, ' ').replace(/\s+/g, ' ').trim();
function serve() {
  const http = require('http'), types = { html: 'text/html', js: 'text/javascript', css: 'text/css', json: 'application/json', mp3: 'audio/mpeg', jpg: 'image/jpeg', png: 'image/png' };
  return new Promise(res => { const s = http.createServer((q, r) => { const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html'));
    fs.readFile(f, (e, b) => { if(e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': types[f.split('.').pop()] || 'application/octet-stream' }); r.end(b); } }); }).listen(0, () => res(s)); });
}
async function cmdVoix() {
  let chromium; try { ({ chromium } = require('playwright')); } catch(e) { console.log(C.r('Playwright introuvable : NODE_PATH=$(npm root -g) node tools/genere.js voix')); return 1; }
  const srv = await serve(), b = await chromium.launch(), p = await b.newPage();
  await p.route(/gstatic|googleapis|firebase/, r => r.abort());
  await p.goto(`http://localhost:${srv.address().port}/index.html?local=1`, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(1500);
  // Tout ce que l'appli peut lire à voix haute en anglais et en espagnol
  const texts = await p.evaluate(() => {
    const out = { en: [], es: [] };
    for(const l of ['en', 'es']) {
      const seen = new Set(), add = (t, v) => { if(typeof t !== 'string') return; const k = t.replace(/\(.*?\)/g, '').trim(); if(!k || seen.has(k)) return; seen.add(k); out[l].push({ k, v }); };
      const st = STORIES[l], arr = Array.isArray(st) ? st : Object.values(st || {});
      arr.forEach(s => { if(!s) return;
        const voice = who => { const e = ((s.chars || {})[who] || [])[0] || ''; return /👩|👧|👵|🧕|👸|🙋‍♀️|💁‍♀️|👩‍/.test(e) ? 1 : 0; };
        const walk = steps => (steps || []).forEach(x => { if(x.type === 'line') add(x.text, voice(x.who)); else if(x.type === 'choice') (x.opts || []).forEach(o => { if(o.ok !== false) add(o.text, voice(x.who)); walk(o.then); }); });
        walk(s.steps); });
      if(l === 'en' && typeof PRON_LESSONS !== 'undefined') PRON_LESSONS.forEach(x => (x.points || []).forEach(pt => (pt.ex || []).forEach(e => add(e[0]))));
      const course = l === 'es' ? COURSE_ES : COURSE_EN;
      (course.units || []).forEach(u => (u.w || []).forEach(w => { add(w[0]); add(w[2]); }));
      getDeckForLang(l).forEach(c => { add(c[l]); if(l === 'es' && typeof ES_EXAMPLES !== 'undefined' && ES_EXAMPLES[c.es]) add(ES_EXAMPLES[c.es][0]); if(l === 'en' && c.say) add(c.say); if(typeof c.ex === 'string') add(c.ex); });
      JOURNAL_SESSIONS.forEach(s => (s[l] || (l === 'es' ? s.mots : null) || []).forEach(m => { add(m[0]); add(m[2]); }));
      if(l === 'es' && typeof CONJ_SENT !== 'undefined') CONJ_SENT.forEach(s => add(s[3].replace('___', CONJ_DB[s[0]][s[1]][s[2]])));
    }
    return out;
  });
  await b.close(); srv.close();
  const map = load(readWork).audio, file = path.join(ROOT, 'tools', 'voix_textes.json');
  let jobs = []; try { jobs = JSON.parse(fs.readFileSync(file, 'utf8')); } catch(e) {}
  const byId = new Map(jobs.map(j => [j.l + j.id, j]));
  jobs.forEach(j => { if(map[j.l] && map[j.l][j.k]) delete j.n; });   // déjà enregistrés : plus « nouveaux »
  let added = 0, chars = 0; const per = { en: 0, es: 0 }, alt = { en: 0, es: 0 };
  for(const l of ['en', 'es']) for(const t of texts[l]) {
    if(map[l] && map[l][t.k]) continue;
    const id = audioId(l, t.k), s = spoken(t.k); if(!s) continue;
    let j = byId.get(l + id);
    if(!j) { j = { l, k: t.k, s, id, v: t.v == null ? (alt[l]++ % 2) : t.v }; jobs.push(j); byId.set(l + id, j); }
    j.n = 1; added++; per[l]++; chars += s.length;
  }
  fs.writeFileSync(file, JSON.stringify(jobs));
  const pending = jobs.filter(j => j.n);
  console.log(`${texts.en.length + texts.es.length} textes lisibles, ${added} sans enregistrement (anglais ${per.en}, espagnol ${per.es}), ${chars} caractères.`);
  console.log(pending.length ? C.y(`tools/voix_textes.json mis à jour : ${pending.length} texte(s) marqués n:1. Pousser, puis lancer voix_google.py sur le PC.`) : C.g('Toutes les voix sont déjà enregistrées.'));
  pending.slice(0, 6).forEach(j => console.log(`   ${j.l}  ${j.s.slice(0, 70)}`));
  return 0;
}
function cmdAudio(args) {
  let src = args[0];
  if(!src || !fs.existsSync(src)) { console.log('Usage : node tools/genere.js audio <dossier ou fichier .zip contenant en/<id>.mp3 et es/<id>.mp3>'); return 1; }
  if(/\.zip$/i.test(src)) { const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'aprende-voix-')); cp.execSync(`python3 -I -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])" ${JSON.stringify(src)} ${JSON.stringify(tmp)}`); src = tmp; }
  const file = path.join(ROOT, 'tools', 'voix_textes.json'), jobs = JSON.parse(fs.readFileSync(file, 'utf8')), byId = new Map(jobs.map(j => [j.l + '/' + j.id, j]));
  const map = load(readWork).audio; let copied = 0, indexed = 0, unknown = 0, tiny = 0;
  for(const l of ['en', 'es']) {
    const dir = [path.join(src, l), path.join(src, 'aprende-voix', l)].find(d => fs.existsSync(d)); if(!dir) continue;
    fs.mkdirSync(path.join(ROOT, 'audio', l), { recursive: true }); map[l] = map[l] || {};
    for(const f of fs.readdirSync(dir)) {
      if(!/^[0-9a-f]{10}\.mp3$/.test(f)) continue;
      const id = f.slice(0, 10), j = byId.get(l + '/' + id);
      if(!j) { unknown++; continue; }
      if(fs.statSync(path.join(dir, f)).size < 800) { tiny++; continue; }   // fichier vide ou tronqué
      const dst = path.join(ROOT, 'audio', l, f);
      if(!fs.existsSync(dst)) { fs.copyFileSync(path.join(dir, f), dst); copied++; }
      if(!map[l][j.k]) { map[l][j.k] = id; indexed++; }
      delete j.n;
    }
  }
  fs.writeFileSync(path.join(ROOT, 'audio', 'manifest.js'), '// Index des voix pré-enregistrées : texte -> fichier audio/<lang>/<id>.mp3\nconst AUDIO_MAP = ' + JSON.stringify(map) + ';\n');
  fs.writeFileSync(file, JSON.stringify(jobs));
  const left = jobs.filter(j => j.n).length;
  console.log(C.g(`${copied} fichier(s) copié(s), ${indexed} voix ajoutée(s) à l'index.`) + (unknown ? C.y(` ${unknown} fichier(s) inconnu(s) ignoré(s).`) : '') + (tiny ? C.y(` ${tiny} fichier(s) vide(s) ignoré(s).`) : '') + (left ? C.y(` Il reste ${left} texte(s) sans voix.`) : ''));
  return 0;
}

function cmdPret() {
  const a = cmdVerif();
  console.log(C.b('\nTests automatiques'));
  const r = cp.spawnSync(process.execPath, [path.join(ROOT, 'tests', 'run.js')], { cwd: ROOT, encoding: 'utf8', env: process.env, maxBuffer: 64 << 20 });
  const out = (r.stdout || '') + (r.stderr || ''), fails = out.split('\n').filter(l => /✗/.test(l)), sum = (out.match(/\d+ réussi\(s\), \d+ échoué\(s\)/) || [])[0];
  fails.forEach(l => console.log(C.r(l)));
  console.log(sum ? (fails.length ? C.r('  ' + sum) : C.g('  ✓ ' + sum)) : C.r('  les tests ne se sont pas lancés (Playwright ? NODE_PATH=$(npm root -g))\n' + out.slice(-400)));
  const bad = a || r.status || !sum;
  console.log('\n' + (bad ? C.r('Pas prêt : corriger avant de pousser.') : C.g('Prêt à pousser.')));
  return bad ? 1 : 0;
}

const [cmd, ...args] = process.argv.slice(2);
const run = { doublons: cmdDoublons, verif: cmdVerif, cache: cmdCache, voix: cmdVoix, audio: cmdAudio, pret: cmdPret }[cmd];
if(!run) { console.log(fs.readFileSync(__filename, 'utf8').split('\n').slice(1, 13).map(l => l.replace(/^\/\/ ?/, '')).join('\n')); process.exit(cmd ? 1 : 0); }
Promise.resolve(run(args)).then(c => process.exit(c || 0)).catch(e => { console.error(C.r(e.stack || e)); process.exit(1); });
