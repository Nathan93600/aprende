// ¡Aprende! — js/stats.js : Écran Statistiques
// ═══════════════════════════════════════════════
// STATISTIQUES (inspiré de l'écran Statistiques d'Anki)
// Une seule série par graphique · teinte unique · info-bulle au survol / focus
// ═══════════════════════════════════════════════
let statsLang = 'es';
const STATS_HEAT = ['rgba(255,255,255,.06)', '#4a3c0c', '#7d6410', '#b8920f', '#ffd60a']; // séquentiel : une teinte, du sombre au clair
const STATS_BAR = '#ffd60a';

function openStats(lang) {
  statsLang = lang || currentLang || 'es';
  showScreen('screen-stats');
  renderStats();
}
function statsSetLang(lang) { statsLang = lang; renderStats(); }

function statsTip(e, el) {
  const tip = document.getElementById('stats-tip');
  if(!tip || !el) return;
  tip.textContent = '';
  const v = document.createElement('strong'); v.textContent = el.dataset.v || '';
  const l = document.createElement('div'); l.textContent = el.dataset.l || ''; l.style.cssText = 'opacity:.7;font-size:.7rem;margin-top:.15rem';
  tip.append(v, l);
  tip.style.display = 'block';
  const r = el.getBoundingClientRect();
  const x = Math.min(window.innerWidth - tip.offsetWidth - 8, Math.max(8, r.left + r.width / 2 - tip.offsetWidth / 2));
  tip.style.left = x + 'px';
  tip.style.top = Math.max(8, r.top - tip.offsetHeight - 8) + 'px';
}
function statsTipHide() { const t = document.getElementById('stats-tip'); if(t) t.style.display = 'none'; }
function statsBindTips(root) {
  root.querySelectorAll('[data-v]').forEach(el => {
    el.addEventListener('pointerenter', e => statsTip(e, el));
    el.addEventListener('pointerleave', statsTipHide);
    el.addEventListener('focus', e => statsTip(e, el));
    el.addEventListener('blur', statsTipHide);
  });
}

function renderStats() {
  const lang = statsLang, day = 86400000, today = srsStartOfToday(), now = Date.now();
  document.querySelectorAll('.stx-tab').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const log = srsRevlogLoad().filter(r => r[0].startsWith(lang + ':'));
  const cards = Object.entries(srsLoad()).filter(([k, c]) => c.lang === lang).map(([k, c]) => c);

  // ── Chiffres clés
  const todayLog = log.filter(r => r[1] >= today);
  const todayMin = Math.round(todayLog.reduce((a, r) => a + (r[5] || 0), 0) / 60000);
  const last30 = log.filter(r => r[1] >= today - 29 * day && r[3] === 2);
  const retention = last30.length ? Math.round(100 * last30.filter(r => r[2] > 0).length / last30.length) : null;
  const daysWith = new Set(log.map(r => Math.floor((r[1] - new Date(r[1]).getTimezoneOffset() * 60000) / day)));
  let streak = 0;
  for(let d = 0; ; d++) {
    const t = today - d * day;
    const k = Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / day);
    if(daysWith.has(k)) streak++; else if(d > 0) break; else continue;
  }
  const cnt = { new: 0, learn: 0, young: 0, mature: 0, leech: 0 };
  cards.forEach(c => {
    if(!c.reps) cnt.new++;
    else if(c.st === 'learning' || c.st === 'relearning') cnt.learn++;
    else if((c.interval || 0) >= 21) cnt.mature++;
    else cnt.young++;
    if(c.leech) cnt.leech++;
  });

  const tile = (big, label, sub) => `<div class="stx-tile"><div class="stx-big">${big}</div><div class="stx-lbl">${label}</div>${sub ? `<div class="stx-sub">${sub}</div>` : ''}</div>`;
  let html = `<div class="stx-tiles">
    ${tile(todayLog.length, 'révisions aujourd\'hui', todayMin ? `${todayMin} min` : '')}
    ${tile(retention === null ? '—' : retention + ' %', 'rétention réelle (30 j)', retention === null ? 'pas encore de données' : 'objectif FSRS : 90 %')}
    ${tile(streak, streak > 1 ? 'jours d\'affilée' : 'jour d\'affilée', '')}
  </div>
  <div class="stx-tiles stx-tiles-5">
    ${tile(cnt.new, 'nouvelles', '')}${tile(cnt.learn, 'en apprentissage', '')}${tile(cnt.young, 'jeunes', '< 21 j')}${tile(cnt.mature, 'matures', '≥ 21 j')}${tile(cnt.leech, 'sangsues', '🩸')}
  </div>`;

  // ── Calendrier d'activité (26 semaines)
  const perDay = {};
  log.forEach(r => { const d = new Date(r[1]); const k = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); perDay[k] = (perDay[k] || 0) + 1; });
  const weeks = 26, startDow = (new Date(today).getDay() + 6) % 7; // lundi = 0
  const first = today - (weeks * 7 - 7 + startDow) * day;
  const maxDay = Math.max(1, ...Object.values(perDay));
  let cells = '';
  for(let w = 0; w < weeks; w++) {
    cells += '<div class="stx-heat-col">';
    for(let d = 0; d < 7; d++) {
      const t = first + (w * 7 + d) * day;
      const dt = new Date(t); const k = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
      if(k > today) { cells += '<div class="stx-heat-cell" style="visibility:hidden"></div>'; continue; }
      const n = perDay[k] || 0;
      const lvl = n === 0 ? 0 : Math.min(4, 1 + Math.floor(3 * n / maxDay));
      const dateTxt = dt.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
      cells += `<div class="stx-heat-cell" style="background:${STATS_HEAT[lvl]}${k === today ? ';outline:1.5px solid #fff5e1' : ''}" data-v="${n} révision${n > 1 ? 's' : ''}" data-l="${dateTxt}"></div>`;
    }
    cells += '</div>';
  }
  html += `<div class="stx-card"><div class="stx-h">Activité</div>
    <div class="stx-heat">${cells}</div>
    <div class="stx-legend"><span>Moins</span>${STATS_HEAT.map(c => `<i style="background:${c}"></i>`).join('')}<span>Plus</span></div>
    ${log.length ? '' : '<div class="stx-empty">L\'historique démarre avec cette version : chaque réponse est désormais enregistrée.</div>'}
  </div>`;

  // ── Prévisions : cartes à réviser sur les 30 prochains jours
  const fut = Array(30).fill(0);
  cards.forEach(c => {
    if(!c.reps) return;
    const d = new Date(c.due); const k = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const i = Math.max(0, Math.round((k - today) / day));
    if(i < 30) fut[i]++;
  });
  const maxF = Math.max(1, ...fut);
  const futBars = fut.map((n, i) => {
    const label = i === 0 ? 'aujourd\'hui (+ retard)' : i === 1 ? 'demain' : `dans ${i} j`;
    return `<div class="stx-bar-hit" tabindex="0" data-v="${n} carte${n > 1 ? 's' : ''}" data-l="${label}"><div class="stx-bar" style="height:${n ? Math.max(4, 100 * n / maxF) : 0}%"></div></div>`;
  }).join('');
  const totalWeek = fut.slice(0, 7).reduce((a, b) => a + b, 0);
  html += `<div class="stx-card"><div class="stx-h">Prévisions · 30 jours <span class="stx-hsub">${totalWeek} révisions cette semaine · pic ${maxF}/jour</span></div>
    <div class="stx-bars">${futBars}</div>
    <div class="stx-axis"><span>Auj.</span><span>+7 j</span><span>+14 j</span><span>+21 j</span><span>+29 j</span></div>
    <details class="stx-table"><summary>Voir les données</summary><table>${fut.map((n, i) => n ? `<tr><td>${i === 0 ? 'Aujourd\'hui' : i === 1 ? 'Demain' : 'J+' + i}</td><td>${n}</td></tr>` : '').join('') || '<tr><td>Aucune révision prévue</td></tr>'}</table></details>
  </div>`;

  // ── Réponses (30 derniers jours, cartes en révision)
  const btn = [0, 0, 0, 0];
  last30.forEach(r => btn[r[2]]++);
  const totB = btn.reduce((a, b) => a + b, 0), maxB = Math.max(1, ...btn);
  const names = ['Encore', 'Difficile', 'Bien', 'Facile'];
  html += `<div class="stx-card"><div class="stx-h">Tes réponses · 30 jours <span class="stx-hsub">cartes en révision</span></div>
    <div class="stx-bars stx-bars-4">${btn.map((n, i) => `<div class="stx-bar-hit" tabindex="0" data-v="${n} (${totB ? Math.round(100 * n / totB) : 0} %)" data-l="${names[i]}"><div class="stx-bar-val">${totB ? Math.round(100 * n / totB) + ' %' : ''}</div><div class="stx-bar" style="height:${n ? Math.max(4, 100 * n / maxB) : 0}%"></div></div>`).join('')}</div>
    <div class="stx-axis stx-axis-4">${names.map(n => `<span>${n}</span>`).join('')}</div>
    ${totB ? '' : '<div class="stx-empty">Rien pour l\'instant : réponds à quelques cartes déjà apprises.</div>'}
  </div>`;

  const box = document.getElementById('stats-content');
  box.innerHTML = html;
  statsBindTips(box);
}

function srsAddNew() {
  const lang = srsState.lang;
  const data = srsLoad();
  const deck = getDeckForLang(lang);
  let added = 0;
  const addedKeys = [];
  shuffle([...deck]).forEach(card => {
    if(added >= 10) return;
    if(!card) return;
    const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
    if(!word) return;
    const k = srsKey(lang, word);
    if(!data[k]) {
      const fr = lang === 'es' ? card.fr : lang === 'ln' ? card.fr : card.fr;
      data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr };
      addedKeys.push(k);
      added++;
    }
  });
  if(added > 0) {
    srsSave(data);
    srsState._extraNew = (srsState._extraNew || 0) + added;
    showToast(`✨ +${added} cartes ajoutées`, 'correct-toast');
  } else {
    showToast('📚 Tous les mots sont déjà dans le SRS !', 'info-toast');
  }
  srsRefresh();
}

function srsUnlockMore(n) {
  srsState._extraNew = (srsState._extraNew || 0) + n;
  showToast(`🔓 +${n} nouvelles cartes débloquées`, 'correct-toast');
  srsRefresh();
}

// ── Annuaire de tous les mots ──
let _dirData = null;
function buildDirectoryData(lang) {
  const srsData = srsLoad();
  const sources = { vocab: [], journal: [], courses: [] };
  // 1. Vocabulaire de base (DATA / ENGLISH / LINGALA)
  const deck = getDeckForLang(lang);
  deck.forEach(c => {
    if(!c) return;
    const w = lang === 'es' ? c.es : lang === 'ln' ? c.ln : c.en;
    if(!w) return;
    const k = srsKey(lang, w);
    const srs = srsData[k];
    sources.vocab.push({ word: w, fr: c.fr || '', srs });
  });
  // 2. Journal (from JOURNAL_SESSIONS array, not localStorage)
  const seenJ = new Set();
  if(typeof JOURNAL_SESSIONS !== 'undefined') {
    JOURNAL_SESSIONS.forEach(s => {
      const words = s[lang] || [];
      words.forEach(pair => {
        if(!Array.isArray(pair)) return;
        const w = pair[0], fr = pair[1] || '';
        if(!w || seenJ.has(w.toLowerCase())) return;
        seenJ.add(w.toLowerCase());
        const k = srsKey(lang, w);
        sources.journal.push({ word: w, fr, srs: srsData[k] });
      });
    });
  }
  // 3. Cours (leçons débloquées)
  const crs = COURSES[lang];
  if(crs && crs.units) {
    crs.units.forEach(u => {
      (u.w || []).forEach(w => {
        const word = w[0], fr = w[1] || '';
        const k = srsKey(lang, word);
        sources.courses.push({ word, fr, unit: u.t || '', srs: srsData[k] });
      });
    });
  }
  return sources;
}

function srsStatusLabel(srs) {
  if(!srs) return '<span style="color:var(--muted);font-size:.7rem">pas dans SRS</span>';
  if(!srs.reps) return '<span style="color:#e91e63;font-size:.7rem">nouveau</span>';
  if(srs.interval >= 21) return '<span style="color:#4caf50;font-size:.7rem">acquis</span>';
  return '<span style="color:#fb923c;font-size:.7rem">en cours</span>';
}

function showDirectory() {
  const lang = srsState.lang || currentLang || 'es';
  _dirData = buildDirectoryData(lang);
  const modal = document.getElementById('srs-directory-modal');
  modal.style.display = '';
  // Tabs
  const tabs = document.getElementById('dir-tabs');
  const counts = { vocab: _dirData.vocab.length, journal: _dirData.journal.length, courses: _dirData.courses.length };
  const total = counts.vocab + counts.journal + counts.courses;
  const labels = { all: `Tous (${total})`, vocab: `📚 Vocabulaire (${counts.vocab})`, journal: `📅 Journal (${counts.journal})`, courses: `🎓 Cours (${counts.courses})` };
  tabs.innerHTML = Object.entries(labels).map(([k, v]) =>
    `<button class="dir-tab${k === 'all' ? ' active' : ''}" data-dir-tab="${k}" onclick="setDirTab('${k}')" style="padding:.35rem .7rem;border-radius:8px;border:1px solid var(--border);background:${k === 'all' ? 'var(--accent)' : 'var(--surface)'};color:var(--text);font-size:.72rem;cursor:pointer">${v}</button>`
  ).join('');
  document.getElementById('dir-search').value = '';
  setDirTab('all');
}

function setDirTab(tab) {
  document.querySelectorAll('.dir-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.dirTab === tab);
    b.style.background = b.dataset.dirTab === tab ? 'var(--accent)' : 'var(--surface)';
  });
  window._dirTab = tab;
  filterDirectory();
}

function filterDirectory() {
  if(!_dirData) return;
  const q = (document.getElementById('dir-search').value || '').toLowerCase().trim();
  const tab = window._dirTab || 'all';
  let items = [];
  if(tab === 'all' || tab === 'vocab') _dirData.vocab.forEach(w => items.push({ ...w, src: '📚' }));
  if(tab === 'all' || tab === 'journal') _dirData.journal.forEach(w => items.push({ ...w, src: '📅' }));
  if(tab === 'all' || tab === 'courses') _dirData.courses.forEach(w => items.push({ ...w, src: '🎓' }));
  if(q) items = items.filter(w => w.word.toLowerCase().includes(q) || w.fr.toLowerCase().includes(q));
  // Sort alphabetically
  items.sort((a, b) => a.word.localeCompare(b.word, undefined, { sensitivity: 'base' }));
  const box = document.getElementById('dir-content');
  if(!items.length) {
    box.innerHTML = '<div style="text-align:center;color:var(--muted);padding:2rem;font-size:.85rem">Aucun mot trouvé</div>';
    return;
  }
  let html = `<div style="font-size:.72rem;color:var(--muted);margin-bottom:.6rem">${items.length} mot${items.length > 1 ? 's' : ''}</div>`;
  items.forEach(w => {
    html += `<div style="display:flex;justify-content:space-between;align-items:center;padding:.55rem .7rem;border-bottom:1px solid rgba(255,255,255,.05);gap:.5rem">`;
    html += `<div style="flex:1;min-width:0"><div style="font-size:.85rem;color:var(--accent2);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${w.word}</div><div style="font-size:.75rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${w.fr}</div></div>`;
    html += `<div style="display:flex;align-items:center;gap:.5rem;flex-shrink:0"><span style="font-size:.75rem">${w.src}</span>${srsStatusLabel(w.srs)}</div>`;
    html += `</div>`;
  });
  box.innerHTML = html;
}

function closeDirectory() {
  document.getElementById('srs-directory-modal').style.display = 'none';
  _dirData = null;
}

// ── Historique des révisions (comme le « revlog » d'Anki) ──
// entrée : [clé, horodatage ms, note 0-3, type (0 nouvelle · 1 apprentissage · 2 révision · 3 réapprentissage), intervalle j, durée ms]
// ── In-memory cache for revlog (11+ call sites)
let _srsRevlogCache = null;
function srsRevlogLoad() { try { if (_srsRevlogCache) return _srsRevlogCache; _srsRevlogCache = JSON.parse(localStorage.getItem('srs_revlog') || '[]'); return _srsRevlogCache; } catch(e) { return []; } }
function srsRevlogSave(log) { try { _srsRevlogCache = log; localStorage.setItem('srs_revlog', JSON.stringify(log)); } catch(e) { console.warn('[Aprende] revlog non sauvegardé', e); } }
function srsRevlogInvalidateCache() { _srsRevlogCache = null; }
function srsStartOfToday() { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime(); }

// ── Limite de nouvelles cartes par jour (par langue) ──
function srsNewPerDay() { const v = parseInt(localStorage.getItem('srs_new_per_day'), 10); return isNaN(v) ? SRS_CFG.defaultNewPerDay : v; }
function srsSetNewPerDay(delta) {
  const v = Math.min(100, Math.max(0, srsNewPerDay() + delta));
  localStorage.setItem('srs_new_per_day', String(v));
  srsRefresh();
}
function srsIntroducedToday(lang) {
  const start = srsStartOfToday();
  return srsRevlogLoad().filter(r => r[1] >= start && r[3] === 0 && r[0].startsWith(lang + ':')).length;
}

// ── Familles de mots (équivalent des « siblings » d'Anki) ──
// Deux nouvelles cartes d'une même famille (maleta / maletero / maletín) ne sont pas montrées le même jour.
function srsFamilyKey(word) {
  let w = String(word).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[¡!¿?.,()\[\]\/'’-]/g, ' ').trim();
  w = w.replace(/^(el|la|los|las|un|una|to|a|an|the)\s+/, '');
  let first = (w.split(/\s+/)[0] || w);
  if(/^ko[a-z]{3,}/.test(first)) first = first.slice(2);   // verbes lingala : ko-bosana → bosana
  return first.length < 4 ? first : first.slice(0, 4);
}

function srsIsIntraday(c) { return (c.st === 'learning' || c.st === 'relearning') && c.step != null; }

// ── Construction de la file de la session ──
function srsBuildQueue(lang) {
  const data = srsLoad(), now = Date.now(), filter = srsState.sessionFilter;
  const entries = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && (!filter || filter.has(k)))
    .map(([k, c]) => ({ ...srsEnsureFsrs({ ...c }, now), key: k, word: k.split(':').slice(1).join(':') }));
  const learnNow = [], learnLater = [], reviews = [], news = [];
  entries.forEach(e => {
    if(!e.reps) news.push(e);
    else if(srsIsIntraday(e)) (e.due <= now ? learnNow : learnLater).push(e);
    else if(srsIsDue(e)) reviews.push(e);
  });
  // Familles déjà vues aujourd'hui ou déjà présentes dans la file
  const start = srsStartOfToday();
  const fams = new Set(srsRevlogLoad().filter(r => r[1] >= start && r[0].startsWith(lang + ':')).map(r => srsFamilyKey(r[0].split(':').slice(1).join(':'))));
  [...learnNow, ...learnLater, ...reviews].forEach(e => fams.add(srsFamilyKey(e.word)));
  const baseLimit = filter ? Infinity : Math.max(0, srsNewPerDay() - srsIntroducedToday(lang));
  const limit = baseLimit + (srsState._extraNew || 0);
  const picked = []; let buried = 0;
  for(const e of shuffle(news)) {
    if(picked.length >= limit) break;
    const f = srsFamilyKey(e.word);
    if(fams.has(f)) { buried++; continue; }
    fams.add(f); picked.push(e);
  }
  // Nouvelles cartes réparties régulièrement entre les révisions
  const rev = shuffle(reviews), mixed = [], total = rev.length + picked.length;
  const step = picked.length ? total / picked.length : Infinity;
  let ni = 0, ri = 0;
  for(let i = 0; i < total; i++) {
    const wantNew = ni < picked.length && (ri >= rev.length || i >= Math.floor(ni * step + step / 2));
    mixed.push(wantNew ? picked[ni++] : rev[ri++]);
  }
  learnNow.sort((a, b) => a.due - b.due);
  learnLater.sort((a, b) => a.due - b.due);
  let queue = [...learnNow, ...mixed];
  // Rien d'autre à faire : on peut avancer une carte en apprentissage (≤ 20 min, comme Anki)
  if(!queue.length && learnLater.length && learnLater[0].due <= now + srsMinMs(SRS_CFG.learnAheadMin)) queue = [learnLater.shift()];
  // Carte à garder en tête : après une annulation, ou carte affichée pendant un rafraîchissement
  const keep = srsState.forceKey || (!srsState.justGraded && srsState.currentCard && srsState.currentCard.key);
  if(keep) {
    const i = queue.findIndex(e => e.key === keep);
    if(i > 0) queue.unshift(queue.splice(i, 1)[0]);
    else if(i < 0 && srsState.forceKey) { const e = entries.find(x => x.key === keep); if(e) queue.unshift(e); }
  }
  srsState.forceKey = null; srsState.justGraded = false;
  srsState.learnLater = learnLater;
  srsState.counts = {
    newC: picked.length,
    dueC: learnNow.length + reviews.length + learnLater.length,
    learnC: learnNow.length + learnLater.length,
    buried, newLeft: Math.max(0, news.length - picked.length - buried),
    mastered: entries.filter(e => e.reps >= 5 && e.interval >= 21).length,
    leeches: entries.filter(e => e.leech).length,
  };
  return queue;
}

function srsGetDue(lang) { return srsBuildQueue(lang); }
function srsStats(lang) { srsBuildQueue(lang); return srsState.counts; }

function srsRefresh() {
  try {
  if(srsState.wakeTimer) { clearTimeout(srsState.wakeTimer); srsState.wakeTimer = null; }
  srsState.queue = srsBuildQueue(srsState.lang);
  const st = srsState.counts;
  document.getElementById('srs-new-count').textContent = st.newC;
  document.getElementById('srs-due-count').textContent = st.dueC;
  document.getElementById('srs-mastered-count').textContent = st.mastered;
  const npd = document.getElementById('srs-npd-value'); if(npd) npd.textContent = srsNewPerDay();
  const npdHint = document.getElementById('srs-npd-hint');
  if(npdHint) {
    const bits = [];
    if(st.buried) bits.push(`${st.buried} reportée${st.buried > 1 ? 's' : ''} à demain (même famille)`);
    if(st.newLeft && !srsState.sessionFilter) bits.push(`${st.newLeft} en attente`);
    npdHint.textContent = bits.join(' · ');
  }
  srsUpdateUndoBtn();

  const badge = document.getElementById('srs-filter-badge');
  if(srsState.sessionFilter) {
    badge.style.display = 'flex';
    document.getElementById('srs-filter-label').textContent = srsState.sessionFilterLabel || 'session';
  } else badge.style.display = 'none';

  const learnLeft = srsState.learnLater.length;
  document.getElementById('srs-counter').textContent = srsState.queue.length > 0
    ? `${srsState.queue.length + learnLeft} à réviser`
    : (learnLeft ? `⏳ ${learnLeft} en apprentissage` : '✓ À jour');

  if(srsState.queue.length === 0) {
    const emptyTitle = document.getElementById('srs-empty-title'), emptyDesc = document.getElementById('srs-empty-desc');
    const addBtn = document.getElementById('srs-empty-add');
    if(learnLeft) {
      // Des cartes en apprentissage reviennent dans quelques minutes : on attend puis on relance tout seul
      const next = srsState.learnLater[0].due;
      emptyTitle.textContent = '⏳ Petite pause';
      emptyDesc.innerHTML = `<strong style="color:var(--accent2)">${learnLeft}</strong> carte${learnLeft > 1 ? 's' : ''} en apprentissage reviennent dans <strong>${srsFormatDelay(next - Date.now())}</strong>.<br>C'est voulu : revoir un mot quelques minutes plus tard le fixe bien mieux.<br><br><span style="font-size:.8rem;opacity:.8">La session reprend toute seule.</span>`;
      addBtn.textContent = '⏩ Revoir maintenant';
      addBtn.onclick = () => { srsState.forceKey = srsState.learnLater[0].key; srsRefresh(); };
      const wait = Math.max(500, next - srsMinMs(SRS_CFG.learnAheadMin) - Date.now());
      srsState.wakeTimer = setTimeout(() => { if(document.getElementById('screen-srs').classList.contains('active')) srsRefresh(); }, Math.min(wait, 2147483000));
    } else {
      const data = srsLoad(), now = Date.now(), filter = srsState.sessionFilter;
      const upcoming = Object.entries(data)
        .filter(([k, c]) => c.lang === srsState.lang && c.due > now && c.reps > 0 && (!filter || filter.has(k)))
        .map(([k, c]) => c.due).sort((a, b) => a - b);
      const nextHint = upcoming.length > 0
        ? `⏰ Prochaine révision ${srsFormatDueDate(upcoming[0])} · <strong style="color:var(--accent2)">${upcoming.length}</strong> carte${upcoming.length > 1 ? 's' : ''} planifiée${upcoming.length > 1 ? 's' : ''}`
        : '';
      const limitHint = (st.newLeft || st.buried) && !filter
        ? `<br><br><span style="font-size:.8rem;opacity:.85">🆕 Limite du jour atteinte (${srsNewPerDay()} nouvelles cartes). ${st.newLeft + st.buried} nouvelle${st.newLeft + st.buried > 1 ? 's' : ''} t'attendent demain.</span>`
        : '';
      if(filter) {
        emptyTitle.textContent = '✓ Session à jour !';
        emptyDesc.innerHTML = `Tu as révisé tous les mots dus du ${srsState.sessionFilterLabel}.${nextHint ? '<br><br>' + nextHint : ''}`;
        addBtn.textContent = '🌍 Voir tout le SRS';
        addBtn.onclick = () => srsClearFilter();
      } else {
        emptyTitle.textContent = 'Aucune carte à réviser !';
        emptyDesc.innerHTML = `Tu es à jour.${nextHint ? '<br><br>' + nextHint : '<br>Reviens plus tard ou ajoute de nouveaux mots.'}${limitHint}`;
        if(st.newLeft + st.buried > 0) {
          // There are new cards waiting behind the daily limit — show unlock buttons
          addBtn.textContent = '🔓 Réviser +10 nouvelles';
          addBtn.onclick = () => srsUnlockMore(10);
          // Add a second button for +20
          let btn20 = document.getElementById('srs-empty-add20');
          if(!btn20) {
            btn20 = document.createElement('button');
            btn20.id = 'srs-empty-add20';
            btn20.className = addBtn.className;
            btn20.className = 'btn fx-btn';
            addBtn.parentNode.insertBefore(btn20, addBtn.nextSibling);
          }
          btn20.style.display = '';
          btn20.textContent = '🔓 Réviser +20 nouvelles';
          btn20.onclick = () => srsUnlockMore(20);
        } else {
          addBtn.textContent = '+ Ajouter 10 mots';
          addBtn.onclick = () => srsAddNew();
          const btn20 = document.getElementById('srs-empty-add20');
          if(btn20) btn20.style.display = 'none';
        }
      }
    }
    document.getElementById('srs-empty').style.display = 'block';
    document.getElementById('srs-active').style.display = 'none';
    // ── CRITICAL: flush SRS progress when queue is empty (session done) ──
    if(typeof syncCriticalFlush === 'function') syncCriticalFlush();
    return;
  }
  document.getElementById('srs-empty').style.display = 'none';
  document.getElementById('srs-active').style.display = 'block';
  srsRenderStack();
  } catch(e) {
    console.error('[SRS] FATAL srsRefresh error:', e);
    // Show error to user instead of blank screen
    const stack = document.getElementById('srs-stack');
    if(stack) stack.innerHTML = '<div style="padding:2rem;text-align:center;color:#ffa"><div style="font-size:1.5rem">⚠️</div><div style="margin-top:.5rem;font-size:.9rem">Erreur SRS</div><div style="margin-top:.3rem;font-size:.75rem;opacity:.7">' + ((e && e.message) || '') + '</div><div style="margin-top:1rem;font-size:.8rem">Recharge l\'app (↻) pour réessayer</div></div>';
    document.getElementById('srs-empty').style.display = 'none';
    document.getElementById('srs-active').style.display = 'block';
  }
}

function srsGrade(grade) {
  if(!srsState.revealed || !srsState.currentCard) return;
  const key = srsState.currentCard.key;
  const data = srsLoad();
  const card = data[key];
  if(!card) return;
  const prev = JSON.parse(JSON.stringify(card));
  srsEnsureFsrs(card);
  const type = !card.reps ? 0 : card.st === 'learning' ? 1 : card.st === 'relearning' ? 3 : 2;
  const wasLeech = !!card.leech;
  srsUpdate(card, grade, key);
  srsSave(data);
  const log = srsRevlogLoad();
  log.push([key, Date.now(), grade, type, card.interval || 0, srsState.shownAt ? Math.min(60000, Date.now() - srsState.shownAt) : 0]);
  srsRevlogSave(log);
  srsState.undo.push({ key, prev, logLen: log.length - 1 });
  if(srsState.undo.length > 30) srsState.undo.shift();
  if(grade === 0 && card.leech && (!wasLeech || (card.lapses - SRS_CFG.leechThreshold) % 4 === 0)) {
    showToast(`🩸 « ${srsState.currentCard.word} » est une sangsue : invente-toi une image mentale`, 'wrong-toast');
    haptic('error');
  }
  srsState.justGraded = true;
  const top = document.querySelector('.srs-card.top');
  if(top) { top.classList.remove('fx-flip', 'fx-pop', 'fx-rise'); top.classList.add('swipe-out', grade === 0 ? 'swipe-left' : 'swipe-right'); }
  document.getElementById('srs-grade-area').classList.add('fx-leave');
  srsState.sessionDone = (srsState.sessionDone || 0) + 1;
  srsState.fxRise = true;
  addXP(grade === 0 ? 2 : grade * 5);
  setTimeout(() => { document.getElementById('srs-grade-area').classList.remove('fx-leave'); srsRefresh(); }, 320);
}

// ── Annuler la dernière réponse (Ctrl+Z / Z, comme Anki) ──
function srsUndo() {
  const u = srsState.undo.pop();
  if(!u) return;
  const data = srsLoad();
  data[u.key] = u.prev;
  srsSave(data);
  const log = srsRevlogLoad();
  if(log.length > u.logLen) { log.length = u.logLen; srsRevlogSave(log); }
  srsState.forceKey = u.key;
  srsState.sessionDone = Math.max(0, (srsState.sessionDone || 0) - 1);
  showToast('↶ Dernière réponse annulée', 'correct-toast');
  haptic('light');
  srsRefresh();
}
function srsUpdateUndoBtn() {
  const b = document.getElementById('srs-undo-btn');
  if(b) b.style.display = srsState.undo.length ? 'inline-flex' : 'none';
}

// ── Raccourcis clavier (ordinateur) : Espace = révéler · 1-4 = noter · Z = annuler ──
document.addEventListener('keydown', e => {
  const scr = document.getElementById('screen-srs');
  if(!scr || !scr.classList.contains('active')) return;
  if(e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if((e.key === 'z' || e.key === 'Z') && !e.altKey) { e.preventDefault(); srsUndo(); return; }
  if(e.ctrlKey || e.metaKey || e.altKey) return;
  if((e.key === ' ' || e.key === 'Enter') && !srsState.revealed) { e.preventDefault(); srsReveal(); return; }
  if(srsState.revealed && ['1', '2', '3', '4'].includes(e.key)) { e.preventDefault(); srsGrade(parseInt(e.key, 10) - 1); }
});

// ── Migration unique SM-2 → FSRS, avec copie de sécurité ──
function srsMigrateAllToFsrs() {
  const now = Date.now();
  [['srs_data', true], ['pron_srs', false], ['grammar_srs', false]].forEach(([name]) => {
    let data;
    try { data = JSON.parse(localStorage.getItem(name) || '{}'); } catch(e) { return; }
    const todo = Object.values(data).filter(c => c && !c.st);
    if(!todo.length) return;
    if(!localStorage.getItem(name + '_backup_sm2')) localStorage.setItem(name + '_backup_sm2', JSON.stringify(data));
    todo.forEach(c => srsEnsureFsrs(c, now));
    localStorage.setItem(name, JSON.stringify(data));
    console.log(`[Aprende] ${name} : ${todo.length} cartes migrées vers FSRS (copie : ${name}_backup_sm2)`);
  });
}
