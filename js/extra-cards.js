// ¡Aprende! — js/extra-cards.js : Cartes en plus dans Réviser : production (français → mot) et écoute (voix → phrase)
// ═══════════════════════════════════════════════
// CARTES EN PLUS : PRODUCTION ET ÉCOUTE
// ═══════════════════════════════════════════════
// Elles s'ajoutent aux cartes de base sans les remplacer, comme la conjugaison : paquet à part (« extra_srs »),
// clés « prod:en:mot » et « ecoute:en:mot », même algorithme FSRS, même historique (srs_revlog).
// Une carte en plus n'existe que pour un mot déjà bien connu (intervalle de la carte de base ≥ minIv jours)
// et ne tombe jamais le même jour que sa carte de base, ni que l'autre carte en plus du même mot.
const XC = {
  ecoute: { icon: '🎧', name: 'Écoute', def: 8, minIv: 4, langs: ['es', 'en'] },
  prod: { icon: '🗣️', name: 'Production', def: 8, minIv: 7, langs: ['es', 'en', 'ln'] },
};
const XC_NEW_MAX = 4;   // nouvelles cartes par jour et par type, au plus

let _xcCache = null;
function xcLoad() { if(_xcCache) return _xcCache; try { _xcCache = JSON.parse(localStorage.getItem('extra_srs') || '{}'); } catch(e) { _xcCache = {}; } return _xcCache; }
function xcSave(d) { _xcCache = d; try { localStorage.setItem('extra_srs', JSON.stringify(d)); } catch(e) { console.warn('[Aprende] cartes en plus non sauvegardées', e); } }
function xcInvalidateCache() { _xcCache = null; }
function xcIsKey(k) { return typeof k === 'string' && /^(prod|ecoute):/.test(k); }
function xcKey(kind, lang, word) { return kind + ':' + lang + ':' + word; }
function xcParse(key) { const a = key.indexOf(':'), b = key.indexOf(':', a + 1); return { kind: key.slice(0, a), lang: key.slice(a + 1, b), word: key.slice(b + 1) }; }
function xcNewRec(key) { return { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang: xcParse(key).lang, st: 'new' }; }
function xcPerDay(kind, lang) { lang = lang || (typeof srsState !== 'undefined' && srsState.lang) || currentLang; let v = parseInt(localStorage.getItem('xc_' + kind + '_per_day_' + lang), 10); if(isNaN(v)) v = parseInt(localStorage.getItem('xc_' + kind + '_per_day'), 10); return isNaN(v) ? XC[kind].def : v; }
function xcSetPerDay(kind, delta) {
  const lang = srsState.lang || currentLang, v = Math.min(40, Math.max(0, xcPerDay(kind, lang) + delta));
  try { localStorage.setItem('xc_' + kind + '_per_day_' + lang, String(v)); } catch(e) {}
  srsRefresh();
}

// Ce qu'on fait écouter : la phrase d'exemple si elle a une voix enregistrée, sinon le mot seul
const _xcNoAudio = new Set();
function xcListen(lang, data) {
  if(!data) return null;
  const m = (typeof AUDIO_MAP !== 'undefined' && AUDIO_MAP[lang]) || null; if(!m) return null;
  const has = t => typeof t === 'string' && t && !!m[t.replace(/\(.*?\)/g, '').trim()];
  let ex = '', fr = '';
  if(lang === 'es') { const e = (typeof ES_EXAMPLES !== 'undefined' && ES_EXAMPLES[data.es]) || null; if(e) { ex = e[0]; fr = e[1] || ''; } }
  else if(lang === 'en') ex = data.say || (typeof PRON_DATA !== 'undefined' && PRON_DATA[data.en] ? PRON_DATA[data.en][0] : '');
  if(has(ex)) return { text: ex, fr };
  if(has(data[lang])) return { text: data[lang], fr: data.fr || '' };
  return null;
}
function xcEntry(key, rec, now) {
  const p = xcParse(key);
  return { ...srsEnsureFsrs({ ...(rec || xcNewRec(key)) }, now), key, lang: p.lang, xc: p.kind, word: p.word };
}
function xcEntryByKey(key) { if(!xcIsKey(key)) return null; const p = xcParse(key); if(!XC[p.kind]) return null; return xcEntry(key, xcLoad()[key], Date.now()); }

// Cartes en plus à mêler à la file de Réviser
function xcQueue(lang, now) {
  const out = { learnNow: [], learnLater: [], reviews: [], news: [], waiting: 0 };
  const kinds = Object.keys(XC).filter(k => XC[k].langs.includes(lang)); if(!kinds.length) return out;
  const store = xcLoad(), data = srsLoad(), start = srsStartOfToday(), end = start + 864e5;
  const seen = {}, intro = {}, used = new Set();
  srsRevlogLoad().forEach(r => {
    if(r[1] < start || !xcIsKey(r[0])) return;
    const p = xcParse(r[0]); if(p.lang !== lang) return;
    if(r[3] === 0) { (intro[p.kind] = intro[p.kind] || new Set()).add(r[0]); (seen[p.kind] = seen[p.kind] || new Set()).add(r[0]); }
    else if(r[3] === 2) (seen[p.kind] = seen[p.kind] || new Set()).add(r[0]);
    used.add(p.word);
  });
  // la carte de base est-elle « occupée » aujourd'hui (pas encore sue, à revoir ou déjà revue) ?
  const busy = word => { const c = data[srsKey(lang, word)]; return !c || !c.reps || srsIsIntraday(c) || c.due < end || (c.lr || 0) >= start; };
  for(const kind of kinds) {
    const cap = xcPerDay(kind, lang), due = [];
    for(const k in store) {
      const p = xcParse(k); if(p.kind !== kind || p.lang !== lang) continue;
      const e = xcEntry(k, store[k], now); if(!e.reps) continue;
      if(srsIsIntraday(e)) { (e.due <= now ? out.learnNow : out.learnLater).push(e); used.add(p.word); }
      else if(srsIsDue(e)) due.push(e);
    }
    if(cap <= 0) continue;
    let room = Math.max(0, cap - (seen[kind] ? seen[kind].size : 0));
    due.sort((a, b) => a.due - b.due);
    for(const e of due) { if(room <= 0 || used.has(e.word) || busy(e.word)) { out.waiting++; continue; } out.reviews.push(e); used.add(e.word); room--; }
    let nNew = Math.min(room, Math.max(0, XC_NEW_MAX - (intro[kind] ? intro[kind].size : 0)));
    if(nNew <= 0) continue;
    // nouveaux : les mots les mieux connus d'abord
    const cands = [];
    for(const k in data) {
      if(!k.startsWith(lang + ':')) continue;
      const c = data[k]; if(!c.reps || (c.interval || 0) < XC[kind].minIv) continue;
      const word = k.slice(lang.length + 1); if(store[xcKey(kind, lang, word)] || used.has(word) || busy(word)) continue;
      cands.push([c.interval || 0, word]);
    }
    cands.sort((a, b) => b[0] - a[0] || (a[1] < b[1] ? -1 : 1));
    for(const [, word] of cands) {
      if(nNew <= 0) break;
      const key = xcKey(kind, lang, word); if(_xcNoAudio.has(key)) continue;
      const d = srsGetCardData(lang, word);
      if(!d || !d.fr || (kind === 'ecoute' && !xcListen(lang, d))) { _xcNoAudio.add(key); continue; }
      out.news.push(xcEntry(key, null, now)); used.add(word); nNew--;
    }
  }
  return out;
}

// ── Correction ──
function xcClean(s) { return conjClean(String(s).replace(/[’‘`´]/g, "'").replace(/\(.*?\)|\[.*?\]/g, ' ').replace(/…|\.{3}/g, ' ').replace(/[«»"“”:]/g, ' ').replace(/-/g, ' ')); }
function xcDist(a, b) { try { return levenshtein(a, b); } catch(e) { return a === b ? 0 : 99; } }
// Production : le mot attendu (ou une de ses variantes « a / b »), article ou « to » facultatif
function xcJudgeWord(typed, word, lang) {
  const art = s => s.replace(/^(to|the|a|an|el|la|los|las|un|una)\s+/, '');
  const vars = new Set(); String(word).split(/\s+\/\s+/).concat([word]).forEach(v => { const c = xcClean(v); if(c) { vars.add(c); vars.add(art(c)); } });
  const t = xcClean(typed), ts = art(t); let best = 'ko';
  for(const v of vars) {
    if(v === t || v === ts) return 'ok';
    if(conjStrip(v) === conjStrip(t) || conjStrip(v) === conjStrip(ts)) { best = lang === 'es' ? 'accent' : 'ok'; if(best === 'ok') return 'ok'; continue; }
    const tol = v.length >= 12 ? 2 : v.length >= 5 ? 1 : 0;
    if(best === 'ko' && tol && Math.min(xcDist(conjStrip(v), conjStrip(t)), xcDist(conjStrip(v), conjStrip(ts))) <= tol) best = 'near';
  }
  return best;
}
// Écoute : la phrase entendue, sans tenir compte de la ponctuation ni des accents
function xcJudgeText(typed, text) {
  const a = conjStrip(xcClean(typed)), b = conjStrip(xcClean(text));
  if(a === b) return 'ok';
  return xcDist(a, b) <= Math.max(1, Math.floor(b.length / 15)) ? 'near' : 'ko';
}

// ── Affichage ──
function xcCardHTML(card, progHTML) {
  const kind = card.xc, lang = card.lang, d = srsGetCardData(lang, card.word) || { fr: (srsLoad()[srsKey(lang, card.word)] || {}).fr || '?' };
  const flag = (typeof SHUF_FLAGS !== 'undefined' && SHUF_FLAGS[lang]) || '';
  const listen = kind === 'ecoute' ? (xcListen(lang, d) || { text: card.word, fr: d.fr || '' }) : null;
  srsState.xcPrompt = { kind, lang, word: card.word, fr: d.fr || '?', text: listen ? listen.text : '', tfr: listen ? listen.fr : '' };
  let badges = `<span class="fx-tag">${XC[kind].icon} ${XC[kind].name}</span>`;
  if(srsIsIntraday(card)) badges += '<span class="fx-tag">⏳ Apprentissage</span>';
  const keys = lang === 'es' ? `<div class="conj-keys">${['á', 'é', 'í', 'ó', 'ú', 'ñ'].map(ch => `<button type="button" onclick="conjType('${ch}')">${ch}</button>`).join('')}</div>` : '';
  const n = xcClean(card.word.split(/\s+\/\s+/)[0]).split(' ').filter(Boolean).length;
  const top = kind === 'prod'
    ? `<div class="xc-label">Comment dit-on…</div><div class="xc-fr">${crsEsc(d.fr || '?')}</div><div class="conj-fr">${n} mot${n > 1 ? 's' : ''}</div>`
    : `<div class="xc-label">Écoute, puis retrouve ce qui est dit</div>
       <div class="xc-play"><button type="button" onclick="xcPlay()" aria-label="Écouter">▶︎ Écouter</button><button type="button" onclick="xcPlay(0.75)" aria-label="Écouter lentement">🐢 Lent</button></div>`;
  return `
    <div class="fx-chip">${flag}${badges}</div>
    <div class="fx-body conj-body">
      ${top}
      <div class="conj-entry" id="conj-entry">
        <input type="text" id="conj-inp" class="conj-inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${kind === 'prod' ? 'Tape-le, ou dis-le à voix haute' : 'Tape ce que tu entends'}" aria-label="Ta réponse">
        ${keys}
        <div class="xc-btns"><button type="button" class="fx-fiche conj-check" onclick="xcCheck()">Vérifier</button><button type="button" class="fx-fiche xc-reveal" onclick="xcCheck(true)">Révéler</button></div>
      </div>
      <div class="conj-result" id="conj-result" style="display:none"></div>
    </div>
    ${progHTML}`;
}
function xcPlay(rate) {
  const p = srsState.xcPrompt; if(!p || !p.text) return;
  try { if(!playRecorded(p.lang, p.text, rate || 0, () => crsSpeak(p.lang, p.text, true))) crsSpeak(p.lang, p.text, true); } catch(e) {}
}
// Vérifie ce qui est tapé ; reveal = true : on montre la réponse sans rien taper et on se note soi-même
function xcCheck(reveal) {
  const p = srsState.xcPrompt, inp = document.getElementById('conj-inp');
  if(!p || !inp || srsState.revealed) return;
  const typed = inp.value.trim();
  if(!typed && !reveal) { inp.focus(); return; }
  const verdict = typed ? (p.kind === 'prod' ? xcJudgeWord(typed, p.word, p.lang) : xcJudgeText(typed, p.text)) : null;
  const good = verdict === null ? null : (verdict === 'ok' || verdict === 'near');
  srsState.revealed = true; srsState.conjGood = good;
  document.getElementById('conj-entry').style.display = 'none';
  const wrote = `<span>Tu as écrit « ${crsEsc(typed)} ».</span>`;
  const head = verdict === null ? '<b>À toi de juger</b><span>Tu l\'avais ? Note-toi honnêtement.</span>'
    : verdict === 'ok' ? '<b class="ok">✅ Juste</b>'
    : verdict === 'near' ? `<b class="ok">✅ À une lettre près</b>${wrote}`
    : verdict === 'accent' ? `<b class="ko">Presque : l'accent compte</b>${wrote}`
    : `<b class="ko">❌ Pas tout à fait</b>${wrote}`;
  let body;
  if(p.kind === 'prod') {
    const d = srsGetCardData(p.lang, p.word), l = d ? xcListen(p.lang, d) : null, ex = l && l.text !== p.word ? l : null;
    body = `<div class="xc-ans">${crsEsc(p.word)}</div>${ex ? `<div class="conj-why">« ${crsEsc(ex.text)} »${ex.fr ? '<br>' + crsEsc(ex.fr) : ''}</div>` : ''}`;
  } else {
    body = `<div class="xc-ans small">« ${crsEsc(p.text)} »</div><div class="conj-why">${p.tfr && p.text !== p.word ? crsEsc(p.tfr) + '<br>' : ''}<b>${crsEsc(p.word)}</b> = ${crsEsc(p.fr)}</div>`;
  }
  const fiche = typeof ficheHas === 'function' && ficheHas(p.lang, p.word) ? `<button type="button" class="fx-fiche" onclick="openFiche(srsState.xcPrompt.lang, srsState.xcPrompt.word)">＋ Fiche</button>` : '';
  const res = document.getElementById('conj-result');
  res.innerHTML = head + body + fiche;
  res.style.display = 'block';
  inp.blur();
  const top = document.querySelector('.srs-card.top'); if(top) top.classList.add('revealed');
  document.querySelectorAll('#srs-grade-area .srs-grade-good, #srs-grade-area .srs-grade-easy').forEach(b => { b.disabled = good === false; });
  const ga = document.getElementById('srs-grade-area'); ga.style.display = 'block';
  try { ga.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch(e) {}
  try { if(verdict !== null) { haptic(good ? 'light' : 'error'); if(typeof SFX !== 'undefined' && SFX.sfxEnabled()) (good ? SFX.playCorrect : SFX.playWrong)(); } } catch(e) {}
  try { if(p.kind === 'prod') crsSpeak(p.lang, p.word); } catch(e) {}
}
// Réglages « Cartes en plus » de l'écran Réviser
function xcUpdateRows() {
  const box = document.getElementById('srs-more'); if(!box) return;
  const lang = srsState.lang, on = !srsState.sessionFilter;
  box.style.display = on ? '' : 'none'; if(!on) return;
  const sum = [];
  if(lang === 'es' && typeof conjPerDay === 'function') sum.push('conjugaison ' + conjPerDay());
  for(const kind of Object.keys(XC)) {
    const row = document.getElementById('srs-' + kind + '-row'), ok = XC[kind].langs.includes(lang);
    if(row) row.style.display = ok ? '' : 'none';
    if(!ok) continue;
    const v = document.getElementById('srs-' + kind + '-value'); if(v) v.textContent = xcPerDay(kind, lang);
    sum.push(XC[kind].name.toLowerCase() + ' ' + xcPerDay(kind, lang));
  }
  const s = document.getElementById('srs-more-sum'); if(s) s.textContent = sum.join(' · ');
}
