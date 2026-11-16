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

// Contraste : dans la page, liste les textes trop peu lisibles sur leur fond (rapport < min).
const AUDIT = (min) => {
  const parse = c => { const m = String(c).match(/rgba?\(([^)]+)\)/); if(!m) return null; const v = m[1].split(/[,\s\/]+/).filter(Boolean).map(parseFloat); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
  const lum = c => { const f = x => { x /= 255; return x <= .03928 ? x / 12.92 : Math.pow((x + .055) / 1.055, 2.4); }; return .2126 * f(c.r) + .7152 * f(c.g) + .0722 * f(c.b); };
  const over = (top, under) => ({ r: top.r * top.a + under.r * (1 - top.a), g: top.g * top.a + under.g * (1 - top.a), b: top.b * top.a + under.b * (1 - top.a), a: 1 });
  const probe = document.createElement('i'); probe.style.cssText = 'position:fixed;left:-99px;background:var(--fx-paper)'; document.body.appendChild(probe);
  const paper = parse(getComputedStyle(probe).backgroundColor) || { r: 255, g: 255, b: 255, a: 1 }; probe.remove();
  const bgOf = el => {
    const layers = [];
    for(let e = el; e && e.nodeType === 1; e = e.parentElement) {
      const cs = getComputedStyle(e); let c = parse(cs.backgroundColor);
      if(cs.backgroundImage && cs.backgroundImage.includes('gradient')) { const g = parse(cs.backgroundImage.slice(cs.backgroundImage.indexOf('gradient'))); if(g && g.a > .5) c = g; }
      if(c && c.a > 0) { layers.push(c); if(c.a >= .98) break; }
    }
    let base = paper; for(let i = layers.length - 1; i >= 0; i--) base = over(layers[i], base); return base;
  };
  const roots = [document.querySelector('.screen.active'), ...document.querySelectorAll('.modal-overlay.show, .modal-overlay.active, .modal.show, #tabbar, .tabbar')].filter(Boolean);
  const out = [], seen = new Set();
  for(const root of roots) for(const el of root.querySelectorAll('*')) {
    const txt = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
    if(!txt || !/[A-Za-zÀ-ÿ0-9]/.test(txt)) continue;
    const r = el.getBoundingClientRect(); if(r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el); if(cs.visibility === 'hidden' || cs.display === 'none') continue;
    if(el.closest('.hub-card, .unit-ban') || parseFloat(cs.webkitTextStrokeWidth) > 0) continue;
    if(document.body.classList.contains('noveil') && cs.textShadow && cs.textShadow.split('rgb').length > 3) continue;   // texte cerné sur l'image : lisible par son contour   // blanc sur couleur vive, texte à contour : voulus
    let op = 1; for(let e = el; e && e.nodeType === 1; e = e.parentElement) op *= parseFloat(getComputedStyle(e).opacity); if(op < .3) continue;
    if(cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)' || cs.backgroundClip === 'text' || cs.webkitBackgroundClip === 'text') continue;
    const bg = bgOf(el), fg0 = parse(cs.color); if(!fg0) continue; const fg = over(fg0, bg);
    const a = lum(fg), b = lum(bg), ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
    if(ratio < min) {
      const sel = (el.id ? '#' + el.id : el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''));
      const par = el.parentElement, psel = par ? (par.id ? '#' + par.id : par.tagName.toLowerCase() + (typeof par.className === 'string' && par.className ? '.' + par.className.trim().split(/\s+/)[0] : '')) : '';
      const key = psel + ' > ' + sel; if(seen.has(key)) continue; seen.add(key);
      out.push(key + ' « ' + txt.slice(0, 28) + ' » ' + ratio.toFixed(1) + ' fg ' + cs.color + ' bg rgb(' + [bg.r, bg.g, bg.b].map(Math.round) + ')');
    }
  }
  return out;
};

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
      console.log('\nFichiers');
      const jsFiles = fs.readdirSync(path.join(ROOT, 'js')).filter(f => f.endsWith('.js')).map(f => 'js/' + f);
      const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), swTxt = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
      const noHtml = jsFiles.filter(f => !html.includes('<script src="' + f + '"></script>')), noSw = jsFiles.filter(f => !swTxt.includes("'" + f + "'"));
      ok('chaque fichier de js/ est chargé par index.html', !noHtml.length, noHtml.join(', '));
      ok('chaque fichier de js/ est dans le cache hors connexion (sw.js)', !noSw.length, noSw.join(', '));
      const cached = [...swTxt.matchAll(/'([^'\s]+\.(?:js|css|html|json|jpg|png))'/g)].map(m => m[1]).filter(f => !fs.existsSync(path.join(ROOT, f)));
      ok('chaque fichier du cache existe', !cached.length, cached.join(', '));
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

    if(want('conjugaison')) {
      console.log('\nConjugaison (cartes et leçons)');
      const p = await open(browser, base);
      const r = await p.evaluate(async () => {
        const wait = ms => new Promise(r => setTimeout(r, ms)), o = {};
        o.judge = [conjJudge('tuve', 'tuve'), conjJudge(' Tuve. ', 'tuve'), conjJudge('hablo', 'habló'), conjJudge('tuvé', 'tuve'), conjJudge('tengo', 'tuve'), conjJudge('me acuerdo', 'me acuerdo')];
        o.badSent = CONJ_SENT.filter(s => !CONJ_DB[s[0]] || !CONJ_DB[s[0]][s[1]] || !CONJ_DB[s[0]][s[1]][s[2]] || s[3].split('___').length !== 2 || !s[3].includes(s[5]) || !s[4]).map(s => s[3]);
        o.badDb = Object.keys(CONJ_DB).filter(v => CONJ_TENSES.some(t => !CONJ_DB[v][t] || CONJ_DB[v][t].length !== 6 || CONJ_DB[v][t].some(f => !f)));
        localStorage.setItem('conj_srs', '{}'); conjInvalidateCache(); localStorage.setItem('conj_per_day', '10');
        const vocab = Object.keys(srsLoad()).length;
        srsState.sessionFilter = null;
        o.es = srsBuildQueue('es').filter(c => c.conj).length; o.en = srsBuildQueue('en').filter(c => c.conj).length;
        localStorage.setItem('conj_per_day', '0'); o.off = srsBuildQueue('es').filter(c => c.conj).length; localStorage.setItem('conj_per_day', '10');
        // une carte : réponse fausse, puis juste
        openSRS('es'); srsState.forceKey = 'conj:tener|preterito'; srsRefresh(); await wait(80);
        o.shown = !!document.getElementById('conj-inp') && srsState.currentCard.key === 'conj:tener|preterito';
        const expect = srsState.conjPrompt.answer;
        document.getElementById('conj-inp').value = conjStrip(expect) === expect ? expect + 'x' : conjStrip(expect); conjCheck();
        o.wrongBlocks = document.querySelector('#srs-grade-area .srs-grade-good').disabled && !document.querySelector('#srs-grade-area .srs-grade-again').disabled;
        const logLen = srsRevlogLoad().length;
        srsGrade(2); o.refused = srsRevlogLoad().length === logLen;
        srsGrade(0); await wait(450);
        const rec = conjLoad()['conj:tener|preterito'];
        o.stored = !!rec && rec.reps > 0 && !('conj:tener|preterito' in srsLoad()) && Object.keys(srsLoad()).length === vocab;
        o.logged = srsRevlogLoad().slice(-1)[0][0] === 'conj:tener|preterito';
        o.samePerson = (rec.p || 0) === 0;
        srsUndo(); await wait(80);
        o.undone = !conjLoad()['conj:tener|preterito'] && srsRevlogLoad().length === logLen;
        srsState.forceKey = 'conj:tener|preterito'; srsRefresh(); await wait(80);
        document.getElementById('conj-inp').value = srsState.conjPrompt.answer; conjCheck();
        o.rightAllows = !document.querySelector('#srs-grade-area .srs-grade-good').disabled;
        srsGrade(2); await wait(450);
        o.rotates = conjLoad()['conj:tener|preterito'].p === 1;
        // sauvegarde
        const b = buildProgressExport ? buildProgressExport() : null;
        o.exported = !!(b && b.conj_srs && b.conj_srs['conj:tener|preterito']);
        // une erreur en leçon rapproche la carte
        const data = srsLoad(), k = Object.keys(data).find(x => x.startsWith('es:'));
        if(k) {
          Object.assign(data[k], srsNextState(srsNextState({ ...data[k], reps: 0, st: 'new' }, 3, k, Date.now() - 40 * 86400000), 2, k, Date.now() - 30 * 86400000));
          data[k].due = Date.now() + 20 * 86400000; srsSave(data);
          const mem = JSON.stringify([data[k].s, data[k].d, data[k].reps, data[k].interval]);
          const word = k.slice(3);
          const msg = crsMissToSrs('es', { t: 'ft', w: [word, 'x'] });
          const c2 = srsLoad()[k]; o.bumped = (!!msg && c2.due <= srsStartOfToday() + 86400000 && JSON.stringify([c2.s, c2.d, c2.reps, c2.interval]) === mem) || ('état ' + data[k].st + ' ' + msg);
        } else o.bumped = 'aucune carte étudiée';
        o.lessonBump = conjBump('ser', 'subjuntivo') && conjLoad()['conj:ser|subjuntivo'].pri === 1;
        o.picks = [0, 8, 14, 20].map(u => conjLessonPicks(u, 3).map(x => CONJ_SENT[x.c][1]));
        // Atelier conjugaison : une partie par mode, réponses justes sauf la première
        o.atelier = {};
        for(const mode of ['mix', 'fill', 'qcm', 'table']) {
          selectLang('es'); initCT(mode); ctChooseTense(mode === 'mix' ? 'mix' : 'preterito'); ctSetDiff(0); ctStart();
          let n = 0, first = true;
          while(ct.phase === 'play' && n++ < 80) {
            const ex = ct.exercises[ct.idx];
            if(ex.type === 'qcm' || ex.type === 'identify') { const i = first ? ct.opts.findIndex(x => x !== ct.correctAnswer) : ct.opts.indexOf(ct.correctAnswer); document.querySelector(`#ct-body .opt[data-i="${i}"]`).click(); }
            else if(ex.type === 'fill') document.getElementById('ct-input').value = first ? conjStrip(ct.correctAnswer) + 'x' : ct.correctAnswer;
            else document.querySelectorAll('#ct-body .cw-cell:not([readonly])').forEach(c => { c.value = first ? 'x' : ex.forms[+c.dataset.idx]; });
            first = false;
            ctAction(); ctAction(); await wait(5);
          }
          o.atelier[mode] = ct.phase === 'done' && ct.errors === 1 && ct.correct >= 8 && !!document.querySelector('.cw-done') && ct.missed.length === 1;
        }
        o.atelierStars = (ctGetStars().preterito || 0) >= 2;
        return o;
      });
      ok('accents exigés : hablo ≠ habló', JSON.stringify(r.judge) === JSON.stringify(['ok', 'ok', 'accent', 'accent', 'ko', 'ok']), JSON.stringify(r.judge));
      ok('chaque phrase a un blanc, un déclencheur et une forme connue', r.badSent.length === 0, r.badSent.slice(0, 4).join(' | '));
      ok('chaque verbe a ses 6 temps complets', r.badDb.length === 0, r.badDb.join(', '));
      ok('les cartes de conjugaison entrent dans Réviser en espagnol seulement, dans la limite du jour', r.es > 0 && r.es <= 10 && r.en === 0 && r.off === 0, `es ${r.es}, en ${r.en}, à 0 : ${r.off}`);
      ok('la carte s\'affiche avec son champ de saisie', r.shown);
      ok('réponse fausse : « Bien » et « Facile » sont bloqués', r.wrongBlocks && r.refused);
      ok('la carte est rangée à part, sans toucher au vocabulaire', r.stored && r.logged && r.samePerson);
      ok('annuler retire la carte et sa ligne d\'historique', r.undone);
      ok('réponse juste : la personne demandée change au passage suivant', r.rightAllows && r.rotates);
      ok('la sauvegarde contient les cartes de conjugaison', r.exported);
      ok('une erreur en leçon fait revenir la carte demain, sans changer sa mémoire', r.bumped === true, String(r.bumped));
      ok('un verbe raté en leçon passe en tête des nouvelles cartes', r.lessonBump);
      ok('les leçons ne demandent que des temps déjà vus', r.picks[0].every(t => t === 'presente') && r.picks[1].every(t => ['presente', 'preterito'].includes(t)) && r.picks[1].includes('preterito') && r.picks.every(x => x.length === 3), JSON.stringify(r.picks));
      ok('atelier conjugaison : une partie se joue jusqu\'au bout dans les 4 modes', Object.values(r.atelier).every(Boolean) && r.atelierStars && p.errs.length === 0, JSON.stringify(r.atelier) + ' ' + p.errs.join(' | '));
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
      const noTip = await p.evaluate(() => { const o = []; for(const l in CRS_FB) for(const w in CRS_FB[l]) if(!CRS_FB[l][w].tip) o.push(l + ':' + w); return o; });
      ok('chaque fiche a son astuce « Pour retenir »', noTip.length === 0, noTip.slice(0, 12).join(', '));
      const shown = () => p.evaluate(() => document.getElementById('crs-modal').classList.contains('show') && document.getElementById('crs-modal-box').textContent.length > 20);
      await p.evaluate(() => { currentLang = 'en'; selectLang('en'); showScreen('screen-journal'); renderJournal('en'); const c = document.querySelector('#journal-content .journal-word-chip.has-fiche'); if(c) c.click(); });
      ok('un mot du journal ouvre sa fiche', await shown());
      await p.evaluate(() => { crsCloseModal(); openSRS('en'); showDirectory(); const r = document.querySelector('#dir-content .dir-row.has-fiche'); if(r) r.click(); });
      ok("un mot de l'annuaire ouvre sa fiche, au-dessus de l'annuaire", await shown() && await p.evaluate(() => { const b = document.getElementById('crs-modal-box').getBoundingClientRect(); return document.elementFromPoint(b.left + b.width / 2, b.top + 30).closest('#crs-modal') !== null; }));
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
        const broken = [], faint = [];
        for(const [name, code] of SCREENS) {
          const n = p.errs.length;
          try { await p.evaluate(code); } catch(e) { broken.push(name + ' : ' + e.message.split('\n')[0]); }
          await p.waitForTimeout(120);
          if(p.errs.length > n) broken.push(name + ' : ' + p.errs.slice(n).join(' | '));
          { await p.waitForTimeout(200); for(const m of await p.evaluate(AUDIT, 2.1)) faint.push(name + ' : ' + m); }
        }
        ok(`${SCREENS.length} écrans s'ouvrent sans erreur`, broken.length === 0, broken.slice(0, 6).join('\n      '));
        if(args.includes('--contraste')) console.log(faint.join('\n'));
        else ok('tous les textes sont lisibles sur leur fond', faint.length === 0, faint.slice(0, 8).join('\n      '));
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
          let i = 0, wrongDone = false, wrongConj = false, sawConj = false;
          for(; i < 400 && crs && !crs.finished; i++) {
            const ex = crs.q[crs.i];
            if(!crs.checked && ['tf', 'ft', 'listen', 'fill', 'gq', 'readctx'].includes(ex.t)) {
              let k = ex.opts.indexOf(ex.ans);
              if(!wrongDone && ex.opts.length > 1) { k = (k + 1) % ex.opts.length; wrongDone = true; }   // une erreur volontaire, pour tester ce chemin
              crsPick(k);
            } else if(!crs.checked && ex.t === 'dictee') { const el = document.getElementById('ls-dict-inp'); el.value = ex.w[0]; el.dispatchEvent(new Event('input', { bubbles: true })); }
            else if(!crs.checked && ex.t === 'conj') { sawConj = true; const c = CONJ_SENT[ex.c], el = document.getElementById('ls-conj-inp'); el.value = wrongConj ? CONJ_DB[c[0]][c[1]][c[2]] : 'zzz'; wrongConj = true; }
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
          return { steps: i, finished: !!(crs && crs.finished), sawConj, screen: scr(), done: (JSON.parse(localStorage.getItem('crs_prog') || '{}')[l] || {})[u] || 0 };
        }, l);
        ok(`${l} : une leçon se joue jusqu'au bout sans erreur`, p.errs.length === 0 && res.finished, JSON.stringify(res) + ' ' + p.errs.join(' | '));
        if(l === 'es') ok('es : la leçon contient de la conjugaison en contexte', res.sawConj === true);
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
