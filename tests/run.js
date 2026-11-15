#!/usr/bin/env node
/*
 * ¡Aprende! — tests automatiques (navigateur sans interface).
 *
 *   npm install playwright        (une fois ; puis : npx playwright install chromium)
 *   node tests/run.js             tous les tests
 *   node tests/run.js srs fiches  seulement certains groupes
 *   APRENDE_BACKUP=chemin/aprende-progres-AAAA-MM-JJ.json node tests/run.js
 *                                 vérifie en plus qu'une vraie sauvegarde se charge sans rien perdre
 *   node tests/run.js --globals   affiche la liste des fonctions et constantes globales (pour comparer deux versions)
 *
 * Groupes : boot, srs, donnees, fiches, audio, progression, ecrans, lecons, histoires, sauvegarde
 * À lancer avant chaque mise en ligne. Code de sortie 1 si un test échoue.
 */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.mp3': 'audio/mpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };
const args = process.argv.slice(2), only = args.filter(a => !a.startsWith('--'));
const want = g => !only.length || only.includes(g);

let passed = 0, failed = 0; const warnings = [];
function ok(name, cond, detail) {
  if(cond) { passed++; console.log('  ✓ ' + name); }
  else { failed++; console.log('  ✗ ' + name + (detail ? '\n      ' + String(detail).slice(0, 600) : '')); }
}
const warn = m => { warnings.push(m); console.log('  ⚠ ' + m); };

function serve() {
  const srv = http.createServer((req, res) => {
    const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
    if(!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    fs.createReadStream(p).pipe(res);
  });
  return new Promise(r => srv.listen(0, '127.0.0.1', () => r(srv)));
}

async function open(browser, base, setup) {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.errs = [];
  page.on('pageerror', e => page.errs.push(e.message));
  await page.route(/gstatic|googleapis|firebase/, r => r.abort());      // pas de réseau externe pendant les tests
  await page.goto(base + '/index.html?local=1');
  if(setup) { await page.evaluate(setup.fn, setup.arg); await page.reload(); }
  await page.waitForFunction(() => typeof srsState !== 'undefined' && document.querySelector('.screen.active'), null, { timeout: 15000 });
  await page.waitForTimeout(600);
  return page;
}
const closeModals = "try{crsCloseModal()}catch(e){}";

const SCREENS = [
  ['accueil', "showScreen('lang-select')"],
  ...['es', 'en', 'ln'].flatMap(l => [
    [l + ' parcours', `currentLang='${l}'; openPath('${l}')`],
    [l + ' jeux', `currentLang='${l}'; selectLang('${l}'); tabGo('games')`],
    [l + ' réviser', `openSRS('${l}')`],
    [l + ' révéler', `srsState.currentCard && srsReveal()`],
    [l + ' fiche', `srsState.currentCard && openFiche(srsState.currentCard.lang, srsState.currentCard.word)`],
    [l + ' planning', `${closeModals}; showSRSCalendar()`],
    [l + ' annuaire', `closeSRSCalendar(); showDirectory()`],
    [l + ' stats', `closeDirectory(); openStats('${l}')`],
    [l + ' histoires', `openStories('${l}')`],
  ]),
  ...['flashcard', 'qcm', 'typing', 'survival', 'speed', 'wordle', 'anagramme', 'quisuisje', 'blitz', 'chaine', 'conjtrainer', 'conjqcm', 'conjfill',
      'palette', 'mindmap', 'colorletters', 'aura', 'calendrier', 'lecons'].map(g => ['es jeu ' + g, `currentLang='es'; selectLang('es'); try{stopSpeed()}catch(e){}; startGame('${g}')`]),
  ['es par jour', "showScreen('screen-byday')"], ['es mélange', "showScreen('screen-shuffle')"], ['es journal', "showScreen('screen-journal')"],
  ['en flashcard', "currentLang='en'; selectLang('en'); startENGame('flashcard')"], ['en qcm', "startENGame('qcm')"],
  ['en natif', "startNative('c1')"], ['en prononciation', "openPronSRS()"], ['en accent', "openAccentLessons()"], ['en accent leçon', "accentOpen(PRON_LESSONS.length - 1)"],
  ['ln qcm', `${closeModals}; currentLang='ln'; selectLang('ln'); startLNGame('qcm')`],
  ['héros', "openHero()"], ['boutique', "openShop()"], ['badges', "openBadges()"],
  ['réglages', "openSettingsModal()"], ['programme C1', "closeModal('settings-modal'); c1OpenPlan()"],
];

(async () => {
  const srv = await serve(), base = 'http://127.0.0.1:' + srv.address().port;
  const browser = await chromium.launch();
  try {
    if(args.includes('--globals')) {
      const p = await open(browser, base);
      const names = await p.evaluate(() => Object.getOwnPropertyNames(window).filter(k => typeof window[k] === 'function' && !/^(webkit|on)/.test(k) && String(window[k]).indexOf('[native code]') < 0).sort());
      // les const / let globaux ne sont pas sur window : on les lit dans les sources
      const srcs = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').match(/<script src="([^"]+)"/g).map(s => s.slice(13, -1)).filter(s => !/^https?:/.test(s));
      const decl = new Set();
      for(const s of srcs) for(const m of fs.readFileSync(path.join(ROOT, s), 'utf8').matchAll(/^(?:const|let|var) ([A-Za-z_$][\w$]*)/gm)) decl.add(m[1]);
      console.log(JSON.stringify({ functions: names, declarations: [...decl].sort() }));
      return;
    }

    if(want('boot')) {
      console.log('\nDémarrage');
      const p = await open(browser, base);
      ok('l\'appli démarre sans erreur JavaScript', p.errs.length === 0, p.errs.join(' | '));
      const g = await p.evaluate(() => ['COURSES', 'CRS_FB', 'CRS_META', 'AUDIO_MAP', 'JOURNAL_SESSIONS', 'STORIES', 'PRON_DATA', 'APRENDE_CONFIG'].filter(k => { try { return eval('typeof ' + k) === 'undefined'; } catch(e) { return true; } }));
      ok('les données principales sont chargées', g.length === 0, 'manquant : ' + g);
      ok('mode local actif', await p.evaluate(() => SYNC_LOCAL_MODE === true));
      ok('une carte de révision par mot est créée au premier lancement', await p.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('srs_data') || '{}')).length > 500));
      await p.close();
    }

    if(want('srs')) {
      console.log('\nRévision espacée (FSRS)');
      const p = await open(browser, base);
      const r = await p.evaluate(() => {
        const now = Date.UTC(2026, 0, 10, 12), fresh = { lang: 'en', reps: 0, interval: 0, due: 0, st: 'new' }, frozen = JSON.stringify(fresh);
        const g = [0, 1, 2, 3].map(x => srsNextState(fresh, x, 'k', now));
        // carte arrivée en révision : on enchaîne « Bien » jusqu'à l'état review
        let c = fresh, t = now, n = 0;
        while(n < 10 && (c = srsNextState(c, 2, 'k', t)).st !== 'review') { t = c.due; n++; }
        const rev = c, t2 = rev.due;
        const R = [0, 1, 2, 3].map(x => srsNextState(rev, x, 'k', t2));
        const again = srsNextState(rev, 2, 'k', t2), again2 = srsNextState(rev, 2, 'k', t2);
        return { pure: JSON.stringify(fresh) === frozen, reps: g.map(x => x.reps), dues: g.map(x => x.due - now), easyDue: g[3].due, goodDue: g[2].due,
                 graduated: rev.st === 'review' && rev.interval >= 1, steps: n,
                 ivl: R.map(x => x.st === 'review' ? x.interval : 0), lapse: R[0].lapses > (rev.lapses || 0), lapseSt: R[0].st,
                 determ: JSON.stringify(again) === JSON.stringify(again2), dueFuture: R.slice(1).every(x => x.due > t2),
                 isDue: srsIsDue({ ...rev, due: Date.now() - 1000 }), notDue: !srsIsDue({ ...rev, due: Date.now() + 864e5 * 3 }) };
      });
      ok('srsNextState ne modifie pas la carte d\'origine', r.pure);
      ok('chaque note compte une révision', r.reps.every(x => x === 1), r.reps);
      ok('nouvelle carte : Facile repousse plus loin que Bien, et Bien plus loin qu\'Encore', r.dues[3] > r.dues[2] && r.dues[2] > r.dues[0], r.dues);
      ok('une carte notée « Bien » finit par passer en révision (intervalle ≥ 1 jour)', r.graduated, 'étapes : ' + r.steps);
      ok('en révision : Difficile ≤ Bien ≤ Facile', r.ivl[1] <= r.ivl[2] && r.ivl[2] <= r.ivl[3] && r.ivl[1] >= 1, r.ivl);
      ok('« Encore » sur une carte acquise compte un oubli et la remet en réapprentissage', r.lapse && r.lapseSt === 'relearning', r.lapseSt);
      ok('même carte + même note = même résultat (déterministe)', r.determ);
      ok('la prochaine échéance est toujours dans le futur', r.dueFuture);
      ok('srsIsDue : carte échue oui, carte future non', r.isDue && r.notDue);
      await p.close();
    }

    if(want('donnees')) {
      console.log('\nFormat des données');
      const p = await open(browser, base);
      const r = await p.evaluate(() => {
        const bad = [];
        for(const l of ['es', 'en', 'ln']) {
          const C = COURSES[l]; if(!C || !C.sections.length || !C.units.length) { bad.push(l + ' : cours vide'); continue; }
          C.units.forEach((u, i) => {
            if(!u.t || !u.e || !(u.s >= 0 && u.s < C.sections.length)) bad.push(`${l} unité ${i} : titre, emoji ou section`);
            if(!Array.isArray(u.w) || !u.w.length) bad.push(`${l} « ${u.t} » : pas de mots`);
            (u.w || []).forEach(w => { if(!w[0] || !w[1]) bad.push(`${l} « ${u.t} » : mot sans traduction (${w[0]})`); });
            if(u.g) (u.g.q || []).forEach(q => { if(!(q[2] >= 0 && q[2] < q[1].length)) bad.push(`${l} « ${u.t} » : question de grammaire sans bonne réponse`); });
          });
          const seen = new Set(); getDeckForLang(l).forEach(c => { if(!c || !c[l] || !c.fr) bad.push(l + ' paquet : carte incomplète'); });
        }
        JOURNAL_SESSIONS.forEach(s => { if(!s.date) bad.push('journal : session sans date'); });
        for(const l in STORIES) STORIES[l].forEach((s, i) => { if(!s || !s.id || !s.steps || !s.steps.length) bad.push(`histoire ${l} n°${i} invalide`); });
        const ids = Object.values(STORIES).flat().filter(Boolean).map(s => s.id);
        if(new Set(ids).size !== ids.length) bad.push('histoires : identifiant en double');
        return bad;
      });
      ok('cours, paquets, journal et histoires bien formés', r.length === 0, r.slice(0, 8).join(' ; '));
      await p.close();
    }

    if(want('fiches')) {
      console.log('\nFiches de mots');
      const p = await open(browser, base);
      const r = await p.evaluate(() => {
        const out = {};
        for(const l of ['es', 'en', 'ln']) {
          const words = new Set();
          COURSES[l].units.forEach(u => u.w.forEach(w => words.add(w[0])));
          getDeckForLang(l).forEach(c => c && words.add(c[l]));
          JOURNAL_SESSIONS.forEach(s => ((l === 'es' ? (s.es || s.mots) : s[l]) || []).forEach(w => words.add(w[0])));
          out[l] = { n: words.size, missing: [...words].filter(w => !ficheHas(l, w)) };
        }
        return out;
      });
      for(const l of ['es', 'en', 'ln']) ok(`${l} : les ${r[l].n} mots ont une fiche`, r[l].missing.length === 0, 'sans fiche : ' + r[l].missing.slice(0, 12).join(', '));
      await p.close();
    }

    if(want('audio')) {
      console.log('\nVoix');
      const p = await open(browser, base);
      const r = await p.evaluate(() => {
        const out = { ids: {}, missing: {} };
        for(const l of ['en', 'es']) {
          out.ids[l] = Object.values(AUDIO_MAP[l]);
          const texts = new Set(); const add = t => { t = String(t || '').replace(/\(.*?\)/g, '').trim(); if(t) texts.add(t); };
          COURSES[l].units.forEach(u => u.w.forEach(w => { add(w[0]); add(w[2]); }));
          out.missing[l] = [...texts].filter(t => !AUDIO_MAP[l][t]);
        }
        return out;
      });
      for(const l of ['en', 'es']) {
        const lost = r.ids[l].filter(id => !fs.existsSync(path.join(ROOT, 'audio', l, id + '.mp3')));
        ok(`${l} : chaque entrée de l'index pointe vers un fichier MP3 (${r.ids[l].length})`, lost.length === 0, lost.slice(0, 5).join(', '));
        if(r.missing[l].length) warn(`${l} : ${r.missing[l].length} texte(s) des cours sans voix (à générer) : ${r.missing[l].slice(0, 4).join(' · ')}`);
      }
      await p.close();
    }

    if(want('progression')) {
      console.log('\nProgression conservée');
      const p = await open(browser, base);
      const before = await p.evaluate(async () => {
        openSRS('en'); const done = [];
        for(let i = 0; i < 6 && srsState.currentCard; i++) { const c = srsState.currentCard; done.push(c.lang + ':' + c.word); srsReveal(); srsGrade(i === 0 ? 0 : 2); await new Promise(r => setTimeout(r, 450)); }
        const d = JSON.parse(localStorage.getItem('srs_data'));
        return { done, studied: Object.values(d).filter(c => c.reps > 0).length, revlog: JSON.parse(localStorage.getItem('srs_revlog') || '[]').length, total: Object.keys(d).length };
      });
      ok('noter des cartes les enregistre', before.studied >= 2 && before.revlog >= 6, JSON.stringify(before));
      for(let k = 0; k < 2; k++) { await p.reload(); await p.waitForFunction(() => typeof srsState !== 'undefined' && document.querySelector('.screen.active')); await p.waitForTimeout(500); }
      const after = await p.evaluate(() => { const d = JSON.parse(localStorage.getItem('srs_data')); return { studied: Object.values(d).filter(c => c.reps > 0).length, revlog: JSON.parse(localStorage.getItem('srs_revlog') || '[]').length, total: Object.keys(d).length }; });
      ok('après deux rechargements : mêmes cartes étudiées, même historique, aucune carte recréée', after.studied === before.studied && after.revlog === before.revlog && after.total === before.total, JSON.stringify({ before, after }));
      ok('aucune erreur JavaScript', p.errs.length === 0, p.errs.join(' | '));
      await p.close();
    }

    if(want('ecrans')) {
      for(const theme of ['light', 'dark']) {
        console.log(`\nÉcrans (${theme === 'light' ? 'clair' : 'sombre'})`);
        const p = await open(browser, base, { fn: t => localStorage.setItem('aprende_theme', t), arg: theme });
        const broken = [];
        for(const [name, code] of SCREENS) {
          const n = p.errs.length;
          try { await p.evaluate(code); } catch(e) { broken.push(name + ' : ' + e.message.split('\n')[0]); }
          await p.waitForTimeout(120);
          if(p.errs.length > n) broken.push(name + ' : ' + p.errs.slice(n).join(' | '));
        }
        ok(`${SCREENS.length} écrans s'ouvrent sans erreur`, broken.length === 0, broken.slice(0, 6).join('\n      '));
        ok('le thème demandé est appliqué', await p.evaluate(t => document.body.classList.contains('dark') === (t === 'dark'), theme));
        await p.close();
      }
    }

    if(want('lecons')) {
      console.log('\nLeçons');
      for(const l of ['es', 'en', 'ln']) {
        const p = await open(browser, base);
        const res = await p.evaluate(async (l) => {
          try { crsCloseModal(); } catch(e) {}
          const u = COURSES[l].units.findIndex(x => x.free) >= 0 ? COURSES[l].units.findIndex(x => x.free) : 0;
          currentLang = l; crsStart(l, u, 0);
          const wait = ms => new Promise(r => setTimeout(r, ms)), scr = () => document.querySelector('.screen.active').id;
          let i = 0, wrongDone = false;
          for(; i < 400 && crs && !crs.finished; i++) {
            const ex = crs.q[crs.i];
            if(!crs.checked && ['tf', 'ft', 'listen', 'fill', 'gq', 'readctx'].includes(ex.t)) {
              let k = ex.opts.indexOf(ex.ans);
              if(!wrongDone && ex.opts.length > 1) { k = (k + 1) % ex.opts.length; wrongDone = true; }   // une erreur volontaire, pour tester ce chemin
              crsPick(k);
            } else if(!crs.checked && ex.t === 'dictee') { const el = document.getElementById('ls-dict-inp'); el.value = ex.w[0]; el.dispatchEvent(new Event('input', { bubbles: true })); }
            else if(!crs.checked && ex.t === 'freetr') { const el = document.getElementById('ls-freetr-inp'); el.value = ex.w[0]; el.dispatchEvent(new Event('input', { bubbles: true })); }
            else if(!crs.checked && ex.t === 'build') {
              const used = new Set();
              crsTok(ex.w[2]).forEach(tok => { const j = ex.tiles.findIndex((t, j) => !used.has(j) && crsTokN(t) === crsTokN(tok)); if(j >= 0) { used.add(j); crsTile(j); } });
            } else if(!crs.checked && ex.t === 'match') {
              ex.ws.forEach((w, wi) => { crsMatch('l', wi); crsMatch('r', wi); });
              await wait(500);
            }
            crsAction(); await wait(40);
          }
          return { steps: i, finished: !!(crs && crs.finished), screen: scr(), done: (JSON.parse(localStorage.getItem('crs_prog') || '{}')[l] || {})[u] || 0 };
        }, l);
        ok(`${l} : une leçon se joue jusqu'au bout sans erreur`, p.errs.length === 0 && res.finished, JSON.stringify(res) + ' ' + p.errs.join(' | '));
        await p.close();
      }
    }

    if(want('histoires')) {
      console.log('\nHistoires');
      const p = await open(browser, base);
      const list = await p.evaluate(() => Object.entries(STORIES).flatMap(([l, a]) => a.map(s => [l, s.id])));
      const broken = [];
      for(const [l, id] of list) {
        const n = p.errs.length;
        const steps = await p.evaluate(async ([l, id]) => {
          const wait = ms => new Promise(r => setTimeout(r, ms)); try { crsCloseModal(); } catch(e) {} currentLang = l; storyPlay(l, id); await wait(200); const total = () => story.steps.length;
          let i = 0;
          for(; i < 300 && story && story.step < total(); i++) {
            const st = story.steps[story.step], box = document.getElementById('sq-' + story.step), answered = box && box.dataset.answered;
            if(st.type === 'q' && !answered) storyAnswer(story.step, st.ans);
            else if(st.type === 'choice' && !answered) storyChoose(story.step, (i % 2) ? Math.max(0, st.opts.findIndex(o => o.best)) : st.opts.length - 1);
            else storyNext();
            await wait(25);
          }
          return (story && story.step < total()) ? -i : i;
        }, [l, id]);
        if(p.errs.length > n || steps < 3) broken.push(`${l}:${id} (${steps} actions) ${p.errs.slice(n).join(' | ')}`);
      }
      ok(`${list.length} histoires se jouent jusqu'au bout`, broken.length === 0, broken.join('\n      '));
      await p.close();
    }

    if(want('sauvegarde') && process.env.APRENDE_BACKUP) {
      console.log('\nSauvegarde réelle');
      const bk = JSON.parse(fs.readFileSync(process.env.APRENDE_BACKUP, 'utf8')), src = bk.data || bk;
      const parse = v => typeof v === 'string' ? JSON.parse(v) : v;
      const exp = { studied: Object.values(parse(src.srs_data)).filter(c => c.reps > 0).length, revlog: parse(src.srs_revlog).length };
      const p = await open(browser, base, { fn: d => { for(const k in d) { if(['version', 'exported_at', 'app'].includes(k)) continue; localStorage.setItem(k, typeof d[k] === 'string' ? d[k] : JSON.stringify(d[k])); } }, arg: src });
      await p.reload(); await p.waitForFunction(() => typeof srsState !== 'undefined' && document.querySelector('.screen.active')); await p.waitForTimeout(500);
      const got = await p.evaluate(() => ({ studied: Object.values(JSON.parse(localStorage.getItem('srs_data'))).filter(c => c.reps > 0).length, revlog: JSON.parse(localStorage.getItem('srs_revlog')).length }));
      ok(`les ${exp.studied} cartes étudiées et les ${exp.revlog} révisions sont conservées`, got.studied >= exp.studied && got.revlog === exp.revlog, JSON.stringify({ exp, got }));
      ok('aucune erreur JavaScript', p.errs.length === 0, p.errs.join(' | '));
      await p.close();
    }
  } finally { await browser.close(); srv.close(); }
  if(!args.includes('--globals')) {
    console.log(`\n${passed} réussi(s), ${failed} échoué(s)` + (warnings.length ? `, ${warnings.length} avertissement(s)` : ''));
    process.exit(failed ? 1 : 0);
  }
})().catch(e => { console.error(e); process.exit(1); });
