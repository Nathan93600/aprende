// ¡Aprende! — js/srs.js : Révision espacée FSRS-6 : cartes, file d'attente, écran Réviser, planning, annuaire, fiches
// ═══════════════════════════════════════════════
// SRS — FSRS-6 (Free Spaced Repetition Scheduler) + étapes d'apprentissage
// Inspiré du fonctionnement d'Anki 26.9 (analyse du 12/10/2026).
// Algorithme FSRS publié en open source (open-spaced-repetition) — implémentation propre à ¡Aprende!.
// ═══════════════════════════════════════════════
// Carte SRS (rétro-compatible) :
// { lang, reps, interval (jours), due (ms), ef (héritage SM-2, inutilisé),
//   st: 'new'|'learning'|'review'|'relearning', step, s (stabilité, jours), d (difficulté 1-10),
//   lr (dernière révision, ms), lapses, leech }
// reps === 0  ⇔  carte jamais vue (convention utilisée partout dans l'app)

const SRS_GRADES = {
  0: { name: 'Encore',    factor: 0,   efDelta: -0.20 },
  1: { name: 'Difficile', factor: 1.2, efDelta: -0.15 },
  2: { name: 'Bien',      factor: 2.5, efDelta:  0    },
  3: { name: 'Facile',    factor: 4,   efDelta:  0.15 },
};
const SRS_SECOND_REV_MULT = { 1: 1.5, 2: 2.5, 3: 4 }; // héritage (plus utilisé par le moteur)

// Paramètres FSRS-6 par défaut (21 poids)
const FSRS_W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796,
                1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
const FSRS_DECAY = -FSRS_W[20];
const FSRS_FACTOR = Math.pow(0.9, 1 / FSRS_DECAY) - 1;
const SRS_CFG = {
  desiredRetention: 0.9,       // 90 % de chances de se souvenir à l'échéance (défaut Anki)
  learnSteps: [1, 10],         // minutes (défaut Anki)
  relearnSteps: [10],          // minutes (défaut Anki)
  maxInterval: 36500,          // jours
  learnAheadMin: 20,           // une carte en apprentissage peut être montrée 20 min en avance si plus rien d'autre
  leechThreshold: 8,           // nb d'oublis avant de marquer la carte comme « sangsue »
  defaultNewPerDay: 20,        // défaut Anki
};

function srsDayMs() { return (typeof srsState !== 'undefined' && srsState.simMode) ? 3 * 1000 : 24 * 60 * 60 * 1000; }
function srsMinMs(min) { return min * 60 * 1000 * srsDayMs() / 86400000; } // minutes, mises à l'échelle en simulation

const fsrsClampD = d => Math.min(10, Math.max(1, d));
function fsrsR(t, s) { return Math.pow(1 + FSRS_FACTOR * t / s, FSRS_DECAY); }
function fsrsIvl(s) {
  const ivl = s / FSRS_FACTOR * (Math.pow(SRS_CFG.desiredRetention, 1 / FSRS_DECAY) - 1);
  return Math.min(SRS_CFG.maxInterval, Math.max(1, Math.round(ivl)));
}
function fsrsD0(G) { return fsrsClampD(FSRS_W[4] - Math.exp(FSRS_W[5] * (G - 1)) + 1); }
function fsrsNextD(d, G) {
  const dd = -FSRS_W[6] * (G - 3);
  const d1 = d + dd * (10 - d) / 9;                          // amortissement linéaire
  return fsrsClampD(FSRS_W[7] * fsrsD0(4) + (1 - FSRS_W[7]) * d1); // retour vers la moyenne
}
function fsrsRecallS(d, s, r, G) {
  const hard = G === 2 ? FSRS_W[15] : 1, easy = G === 4 ? FSRS_W[16] : 1;
  return s * (1 + Math.exp(FSRS_W[8]) * (11 - d) * Math.pow(s, -FSRS_W[9]) * (Math.exp(FSRS_W[10] * (1 - r)) - 1) * hard * easy);
}
function fsrsForgetS(d, s, r) {
  const sf = FSRS_W[11] * Math.pow(d, -FSRS_W[12]) * (Math.pow(s + 1, FSRS_W[13]) - 1) * Math.exp(FSRS_W[14] * (1 - r));
  return Math.min(sf, s / Math.exp(FSRS_W[17] * FSRS_W[18]));
}
function fsrsShortS(s, G) { // révision le même jour (étapes)
  let inc = Math.exp(FSRS_W[17] * (G - 3 + FSRS_W[18])) * Math.pow(s, -FSRS_W[19]);
  if(G >= 3) inc = Math.max(inc, 1);
  return s * inc;
}

// Fuzz (comme Anki) : décale légèrement les intervalles ≥ 3 j pour éviter que des cartes
// apprises le même jour reviennent toutes ensemble. Déterministe par carte → l'aperçu = le résultat.
function srsHash(str) { let h = 2166136261; for(let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; }
function srsFuzz(ivl, seed) {
  if(ivl < 2.5) return ivl;
  const ranges = [[2.5, 7, 0.15], [7, 20, 0.1], [20, Infinity, 0.05]];
  let delta = 1;
  for(const [a, b, f] of ranges) delta += f * Math.max(0, Math.min(ivl, b) - a);
  const lo = Math.max(2, Math.round(ivl - delta)), hi = Math.min(SRS_CFG.maxInterval, Math.round(ivl + delta));
  return lo + Math.floor(srsHash(seed) * (hi - lo + 1));
}

// Migration d'une carte SM-2 (ancien moteur) vers FSRS — sans changer son échéance actuelle
function srsEnsureFsrs(c, now) {
  if(!c || c.st) return c;
  now = now || Date.now();
  if(!c.reps) { c.st = 'new'; c.reps = 0; c.interval = 0; return c; }
  const ivl = Math.max(1, c.interval || 1);
  c.st = 'review';
  c.s = ivl;                                                     // à l'échéance, R ≈ 90 %
  c.d = fsrsClampD(5 + (2.5 - (c.ef || 2.5)) * (10 / 3));        // facilité SM-2 → difficulté
  c.lr = Math.min(now, (c.due || now) - ivl * 24 * 60 * 60 * 1000);
  c.lapses = c.lapses || 0;
  c.step = null;
  return c;
}

// Calcule l'état suivant d'une carte, SANS la modifier (sert aussi aux aperçus des boutons)
// grade : 0 Encore · 1 Difficile · 2 Bien · 3 Facile
function srsNextState(card, grade, seed, now) {
  now = now || Date.now();
  const c = srsEnsureFsrs({ ...card }, now);
  const G = grade + 1, day = srsDayMs();
  const graduate = (ivlDays) => {
    const ivl = Math.min(SRS_CFG.maxInterval, Math.max(1, Math.round(srsFuzz(ivlDays, (seed || '') + ':' + c.reps))));
    c.st = 'review'; c.step = null; c.interval = ivl; c.due = now + ivl * day;
  };
  const elapsedDays = c.lr ? Math.max(0, (now - c.lr) / day) : 0;

  if(c.st === 'new') {
    c.s = FSRS_W[G - 1]; c.d = fsrsD0(G);
    const steps = SRS_CFG.learnSteps;
    if(G === 4) { graduate(fsrsIvl(c.s)); }
    else {
      c.st = 'learning'; c.interval = 0;
      if(G === 1) { c.step = 0; c.due = now + srsMinMs(steps[0]); }
      else if(G === 2) { c.step = 0; c.due = now + srsMinMs(steps.length > 1 ? (steps[0] + steps[1]) / 2 : steps[0] * 1.5); }
      else if(steps.length > 1) { c.step = 1; c.due = now + srsMinMs(steps[1]); }
      else graduate(fsrsIvl(c.s));
    }
  } else if(c.st === 'learning' || c.st === 'relearning') {
    if(elapsedDays >= 1) { const r = fsrsR(elapsedDays, c.s); c.s = G === 1 ? fsrsForgetS(c.d, c.s, r) : fsrsRecallS(c.d, c.s, r, G); }
    else c.s = fsrsShortS(c.s, G);
    c.d = fsrsNextD(c.d, G);
    const steps = c.st === 'learning' ? SRS_CFG.learnSteps : SRS_CFG.relearnSteps;
    const step = Math.min(c.step || 0, steps.length - 1);
    if(G === 1) { c.step = 0; c.due = now + srsMinMs(steps[0]); c.interval = 0; }
    else if(G === 2) {
      c.step = step;
      const m = (step === 0 && steps.length > 1) ? (steps[0] + steps[1]) / 2 : Math.min(steps[step] * 1.5, steps[step] + 1440);
      c.due = now + srsMinMs(m); c.interval = 0;
    }
    else if(G === 3 && step + 1 < steps.length) { c.step = step + 1; c.due = now + srsMinMs(steps[step + 1]); c.interval = 0; }
    else graduate(fsrsIvl(c.s));
  } else { // review
    const r = fsrsR(elapsedDays, c.s);
    if(G === 1) {
      c.lapses = (c.lapses || 0) + 1;
      c.s = fsrsForgetS(c.d, c.s, r); c.d = fsrsNextD(c.d, 1);
      c.st = 'relearning'; c.step = 0; c.interval = 0; c.due = now + srsMinMs(SRS_CFG.relearnSteps[0]);
      if(c.lapses >= SRS_CFG.leechThreshold) c.leech = true;
    } else {
      // Ordre garanti comme dans Anki : Difficile ≤ Bien < Facile
      const sH = fsrsRecallS(c.d, c.s, r, 2), sG = fsrsRecallS(c.d, c.s, r, 3), sE = fsrsRecallS(c.d, c.s, r, 4);
      let iH = fsrsIvl(sH), iG = fsrsIvl(sG), iE = fsrsIvl(sE);
      iH = Math.min(iH, iG); iG = Math.max(iG, iH + 1); iE = Math.max(iE, iG + 1);
      c.s = G === 2 ? sH : G === 3 ? sG : sE;
      c.d = fsrsNextD(c.d, G);
      graduate(G === 2 ? iH : G === 3 ? iG : iE);
    }
  }
  c.reps = (c.reps || 0) + 1;
  c.lr = now;
  return c;
}

// Applique la note à la carte (modifie l'objet, comme l'ancien srsUpdate)
function srsUpdate(card, grade, seed) {
  const next = srsNextState(card, grade, seed);
  Object.keys(card).forEach(k => delete card[k]);
  Object.assign(card, next);
  return card;
}

function srsFormatDelay(ms) {
  const day = srsDayMs();
  if(srsState.simMode) { const s = Math.max(1, Math.round(ms / 1000)); return s < 60 ? `${s}s` : `${Math.round(s / 60)}min`; }
  const min = ms / 60000;
  if(min < 60) return `${Math.max(1, Math.round(min))} min`;
  if(min < 1440) return `${Math.round(min / 60)} h`;
  const d = Math.round(ms / day);
  if(d < 60) return `${d} j`;
  if(d < 365) { const mo = d / 30; return `${mo < 10 ? mo.toFixed(1).replace('.', ',').replace(',0', '') : Math.round(mo)} mois`; }
  return `${(d / 365).toFixed(1)} an${d >= 730 ? 's' : ''}`;
}
// Aperçu affiché sous chaque bouton (même calcul que la vraie notation)
function srsFormatInterval(card, grade, seed) {
  const now = Date.now();
  const n = srsNextState(card || { reps: 0 }, grade, seed, now);
  return srsFormatDelay(n.due - now);
}


// ── In-memory cache: avoids JSON.parse on every srsLoad call (20+ call sites)
let _srsDataCache = null;
function srsLoad() {
  if (_srsDataCache) return _srsDataCache;
  _srsDataCache = JSON.parse(localStorage.getItem('srs_data') || '{}');
  return _srsDataCache;
}
function srsSave(data) {
  _srsDataCache = data;
  localStorage.setItem('srs_data', JSON.stringify(data));
}
function srsInvalidateCache() { _srsDataCache = null; }

function srsKey(lang, word) {
  return `${lang}:${word}`;
}

// Add a card to SRS pile if not already there
function srsAddCard(lang, word) {
  const data = srsLoad();
  const k = srsKey(lang, word);
  if(!data[k]) {
    // Store translation + example so card is self-contained even if removed from deck later
    const cardData = srsGetCardData(lang, word);
    const fr = cardData ? cardData.fr : '';
    data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr };
    srsSave(data);
  }
}

// Get all cards due now for a language
// A card is "due" if its due date falls on today or before (by calendar day)
// In simulation mode, fall back to strict timestamp comparison
function srsIsDue(card) {
  if(srsState.simMode) return card.due <= Date.now();
  // Standard SM-2 / Anki behavior: card is due all day on its due date
  const now = new Date();
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
  return card.due <= endOfToday;
}





// Format interval for display

let srsState = { lang: 'es', queue: [], currentCard: null, revealed: false, simMode: false, simTimer: null, sessionFilter: null, sessionFilterLabel: null,
  learnLater: [], counts: {}, undo: [], forceKey: null, justGraded: false, shownAt: 0, wakeTimer: null };

function toggleSRSSim() {
  const on = document.getElementById('srs-sim-toggle').checked;
  srsState.simMode = on;
  // Clear existing timer
  if(srsState.simTimer) { clearInterval(srsState.simTimer); srsState.simTimer = null; }
  if(on) {
    // Auto-refresh queue every second so cards reappear when their sim-interval expires
    srsState.simTimer = setInterval(() => {
      if(document.getElementById('screen-srs').classList.contains('active')) {
        // Only refresh if we're not in the middle of grading (revealed state)
        if(!srsState.revealed) srsRefresh();
      }
    }, 1000);
    showToast('⏩ Mode simulation activé', 'correct-toast');
  } else {
    // Reschedule cards whose due dates were set during simulation
    // (their due timestamp is way too close relative to their declared interval)
    const data = srsLoad();
    const realDay = 86400000;
    let fixed = 0;
    for (const [k, c] of Object.entries(data)) {
      if (!c.interval || c.interval < 1 || !c.lr) continue;
      const expectedMs = c.interval * realDay;
      const actualMs = c.due - c.lr;
      // If actual gap is less than half what the interval should be in real time, it was set during sim
      if (actualMs < expectedMs * 0.5) {
        c.due = c.lr + expectedMs;
        fixed++;
      }
    }
    if (fixed) {
      srsSave(data);
      console.log(`[Aprende] 🔄 Rescaled ${fixed} cards from simulation to real time`);
    }
    showToast('⏸️ Mode simulation désactivé', 'correct-toast');
  }
  srsRefresh();
}

function openSRS(lang) {
  srsState.lang = lang;
  currentLang = lang;
  srsState.sessionDone = 0; srsState.fxPrevPct = null; srsState.fxRise = false;
  srsState.sessionFilter = null; // reset — global SRS mode
  srsState.sessionFilterLabel = null;
  const titles = { es: 'Révision 🇪🇸', ln: 'Révision 🇨🇩', en: 'Révision 🇬🇧' };
  document.getElementById('srs-title').textContent = titles[lang];
  // Sync UI checkbox with state
  const toggle = document.getElementById('srs-sim-toggle');
  if(toggle) toggle.checked = srsState.simMode;
  showScreen('screen-srs');
  srsRefresh();
}


// Clear the session filter — go back to global SRS
function srsClearFilter() {
  srsState.sessionFilter = null;
  srsState.sessionFilterLabel = null;
  const titles = { es: 'Révision 🇪🇸', ln: 'Révision 🇨🇩', en: 'Révision 🇬🇧' };
  document.getElementById('srs-title').textContent = titles[srsState.lang];
  srsRefresh();
}

// ── Calendar / upcoming reviews ──
// Compute "calendar day" diff: 0 = today, 1 = tomorrow, etc.
// In simulation mode we fall back to raw diff/dayMs
function srsCalendarDaysDiff(due) {
  if(srsState.simMode) {
    const dayMs = 3 * 1000;
    return Math.floor((due - Date.now()) / dayMs);
  }
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dueDate = new Date(due);
  const dueDayStart = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()).getTime();
  return Math.round((dueDayStart - todayStart) / (24 * 60 * 60 * 1000));
}

// Group all cards (not yet due) by time bucket, using calendar days
function srsGetUpcoming(lang) {
  const data = srsLoad();
  const now = Date.now();
  const filter = srsState.sessionFilter;
  const buckets = {
    'Aujourd\'hui': [],
    'Demain': [],
    'Cette semaine (2-7j)': [],
    'Ce mois-ci (8-30j)': [],
    'Plus tard (>30j)': [],
  };
  Object.entries(data)
    .filter(([k, c]) => c.lang === lang && (!filter || filter.has(k)))
    .forEach(([k, c]) => {
      if(c.reps === 0) return; // skip new cards (handled separately)
      const entry = { key: k, word: k.split(':').slice(1).join(':'), due: c.due, interval: c.interval, reps: c.reps };
      const days = srsCalendarDaysDiff(c.due);
      if(days <= 0) buckets['Aujourd\'hui'].push(entry);
      else if(days === 1) buckets['Demain'].push(entry);
      else if(days <= 7) buckets['Cette semaine (2-7j)'].push(entry);
      else if(days <= 30) buckets['Ce mois-ci (8-30j)'].push(entry);
      else buckets['Plus tard (>30j)'].push(entry);
    });
  // Sort each bucket by due date
  Object.values(buckets).forEach(list => list.sort((a,b) => a.due - b.due));
  return buckets;
}

function srsFormatDueDate(due) {
  if(due === undefined || due === null || isNaN(due)) return '—';
  const now = Date.now();
  if(due <= now) return 'maintenant';
  if(srsState.simMode) {
    const diff = due - now;
    const secs = Math.round(diff / 1000);
    if(secs < 60) return `dans ${secs}s`;
    return `dans ${Math.round(secs/60)}min`;
  }
  const days = srsCalendarDaysDiff(due);
  if(days <= 0) return 'aujourd\'hui';
  if(days === 1) return 'demain';
  if(days < 30) return `dans ${days}j`;
  if(days < 365) return `dans ${Math.round(days/30)}mo`;
  return `dans ${(days/365).toFixed(1)}an`;
}

function showSRSCalendar() {
  const lang = srsState.lang;
  const buckets = srsGetUpcoming(lang);
  const data = srsLoad();
  const filter = srsState.sessionFilter;
  const newCards = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && c.reps === 0 && (!filter || filter.has(k)))
    .map(([k, c]) => ({ key: k, word: k.split(':').slice(1).join(':') }));
  const mastered = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && c.reps >= 5 && c.interval >= 21 && (!filter || filter.has(k)));

  const bucketColors = {
    'Aujourd\'hui': { c: 'var(--error)', bg: 'rgba(255,23,68,.12)', bd: 'rgba(255,23,68,.35)' },
    'Demain': { c: '#fb923c', bg: 'rgba(251,146,60,.12)', bd: 'rgba(251,146,60,.35)' },
    'Cette semaine (2-7j)': { c: '#22c55e', bg: 'rgba(34,197,94,.12)', bd: 'rgba(34,197,94,.35)' },
    'Ce mois-ci (8-30j)': { c: '#38bdf8', bg: 'rgba(56,189,248,.12)', bd: 'rgba(56,189,248,.35)' },
    'Plus tard (>30j)': { c: 'var(--neon-purple)', bg: 'rgba(213,0,249,.12)', bd: 'rgba(213,0,249,.35)' },
  };
  const langColor = SHUF_COLORS[lang];

  const wordChip = (entry) => {
    const cardData = srsGetCardData(lang, entry.word);
    const srsEntry = data[entry.key] || {};
    const fr = (cardData && cardData.fr) || srsEntry.fr || '—';
    const isNew = entry.reps === undefined || entry.reps === 0;
    const dueLabel = isNew ? 'jamais vu' : srsFormatDueDate(entry.due);
    const repsLabel = isNew ? 'nouveau' : `${entry.reps}× rev.`;
    return `<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.5rem .75rem;display:flex;justify-content:space-between;align-items:center;gap:.5rem;font-size:.78rem">
      <div style="flex:1;min-width:0;overflow:hidden">
        <div style="color:${langColor};font-weight:700;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">${entry.word}</div>
        <div style="color:var(--muted);font-size:.7rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">${fr}</div>
      </div>
      <div style="font-size:.68rem;color:var(--muted);white-space:nowrap;text-align:right">
        <div>${dueLabel}</div>
        <div style="opacity:.6">${repsLabel}</div>
      </div>
    </div>`;
  };

  let html = '';

  // Show current filter
  if(srsState.sessionFilter) {
    html += `<div style="background:rgba(213,0,249,.1);border:1px solid rgba(213,0,249,.3);border-radius:10px;padding:.6rem .9rem;margin-bottom:1rem;font-size:.78rem;text-align:center;color:var(--neon-purple)">📆 Filtré sur ${srsState.sessionFilterLabel}</div>`;
  }

  // New cards
  if(newCards.length > 0) {
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:var(--accent);margin-bottom:.6rem;display:flex;align-items:center;gap:.4rem">
        <span style="width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 8px var(--accent)"></span>
        🆕 Nouveaux (jamais révisés) — ${newCards.length}
      </div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem">${newCards.slice(0,15).map(wordChip).join('')}${newCards.length>15?`<div style="text-align:center;color:var(--muted);font-size:.7rem;padding:.4rem">+ ${newCards.length-15} autres…</div>`:''}</div>
    </div>`;
  }

  // Leeches
  const leeches = Object.entries(data).filter(([k, c]) => c.lang === lang && c.leech && (!filter || filter.has(k)))
    .map(([k, c]) => ({ key: k, word: k.split(':').slice(1).join(':'), due: c.due, reps: c.reps, lapses: c.lapses }));
  if(leeches.length > 0) {
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:#ff6b81;margin-bottom:.4rem">🩸 Sangsues — ${leeches.length}</div>
      <div style="font-size:.7rem;color:var(--muted);margin-bottom:.6rem;line-height:1.5">Mots oubliés 8 fois ou plus. Plutôt que de les répéter, invente-leur une image mentale ou une phrase personnelle.</div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem;background:rgba(255,23,68,.08);border:1px solid rgba(255,23,68,.3);border-radius:12px;padding:.6rem">${leeches.map(wordChip).join('')}</div>
    </div>`;
  }

  // Buckets
  let totalScheduled = 0;
  Object.entries(buckets).forEach(([name, entries]) => {
    if(entries.length === 0) return;
    totalScheduled += entries.length;
    const col = bucketColors[name] || { c: 'var(--muted)', bg: 'rgba(255,255,255,.04)', bd: 'rgba(255,255,255,.1)' };
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:${col.c};margin-bottom:.6rem;display:flex;align-items:center;gap:.4rem">
        <span style="width:8px;height:8px;background:${col.c};border-radius:50%;box-shadow:0 0 8px ${col.c}"></span>
        ${name} — ${entries.length}
      </div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem;background:${col.bg};border:1px solid ${col.bd};border-radius:12px;padding:.6rem">${entries.slice(0,20).map(wordChip).join('')}${entries.length>20?`<div style="text-align:center;color:var(--muted);font-size:.7rem;padding:.4rem">+ ${entries.length-20} autres…</div>`:''}</div>
    </div>`;
  });

  if(newCards.length === 0 && totalScheduled === 0 && mastered.length === 0) {
    html = `<div style="text-align:center;padding:2rem;color:var(--muted)"><div style="font-size:2.5rem;margin-bottom:.6rem;opacity:.4">📭</div><div>Aucune carte dans le SRS pour cette sélection.</div></div>`;
  } else if(mastered.length > 0) {
    html += `<div style="text-align:center;padding:.6rem;color:var(--success);font-size:.78rem;background:rgba(0,255,157,.08);border:1px solid rgba(0,255,157,.2);border-radius:10px;margin-top:.4rem">✨ ${mastered.length} carte${mastered.length>1?'s':''} acquise${mastered.length>1?'s':''} (>21j entre 2 révisions)</div>`;
  }

  document.getElementById('srs-calendar-content').innerHTML = html;
  document.getElementById('srs-calendar-modal').style.display = 'block';
  haptic('light');
}

function closeSRSCalendar() {
  document.getElementById('srs-calendar-modal').style.display = 'none';
}

// Update the SRS due badges shown on the language selector cards
function updateSRSDueBadges() {
  const data = srsLoad();
  const now = Date.now();
  const counts = { es: 0, ln: 0, en: 0 };
  Object.values(data).forEach(c => {
    if(!counts.hasOwnProperty(c.lang)) return;
    if(c.due <= now && c.reps > 0) counts[c.lang]++;
  });
  ['es','ln','en'].forEach(lang => {
    const badge = document.getElementById('srs-due-' + lang);
    if(!badge) return;
    const n = counts[lang];
    if(n > 0) {
      badge.style.display = 'inline-block';
      const countSpan = badge.querySelector('[data-count]');
      if(countSpan) countSpan.textContent = n;
    } else {
      badge.style.display = 'none';
    }
  });
  // Also update sidebar badges
  if(typeof updateSidebarBadges === 'function') updateSidebarBadges();
}

// Tolerant normalisation: case, accents, "to", articles, sb/sth, brackets, punctuation
function srsNorm(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\[[^\]]*\]/g, ' ').replace(/[()\/.,!?¿¡'’"\-]/g, ' ')
    .replace(/\b(to|a|an|the|sb|sth|someone|something)\b/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function _srsSearchArraySources(lang, word, norm) {
  const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
  // Collect all [word, fr, ...] arrays from JOURNAL_SESSIONS + COURSES
  const sources = [];
  if(typeof JOURNAL_SESSIONS !== 'undefined') {
    for(const sess of JOURNAL_SESSIONS) {
      const arr = lang === 'es' ? (sess.es || sess.mots || []) : lang === 'ln' ? (sess.ln || []) : (sess.en || []);
      if(arr.length) sources.push(arr);
      // Also check alertes (grammar notes stored as [title, desc])
      if(sess.alertes) sources.push(sess.alertes);
    }
  }
  if(typeof COURSES !== 'undefined' && COURSES[lang]) {
    for(const unit of COURSES[lang].units || []) {
      if(unit.w && unit.w.length) sources.push(unit.w);
    }
  }
  // Exact match first
  for(const arr of sources) {
    for(const entry of arr) {
      if(Array.isArray(entry) && entry[0] === word) {
        return { [f]: entry[0], fr: entry[1] || '' };
      }
    }
  }
  // Normalized match
  if(norm) {
    for(const arr of sources) {
      for(const entry of arr) {
        if(Array.isArray(entry) && srsNorm(entry[0]) === norm) {
          return { [f]: entry[0], fr: entry[1] || '' };
        }
      }
    }
  }
  return undefined;
}
function srsGetCardData(lang, word) {
  const deck = getDeckForLang(lang);
  const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
  const exact = deck.find(c => c && c[f] === word);
  if(exact) return exact;
  // Fallback: card saved under an older spelling of the word
  const n = srsNorm(word);
  const matches = deck.filter(c => c && srsNorm(c[f]) === n);
  if(matches.length === 1) return matches[0];
  // Fallback 2: search in JOURNAL_SESSIONS + COURSES
  return _srsSearchArraySources(lang, word, n);
}
// One-time migration: rename SRS keys saved under an old spelling to the current deck spelling
function srsMigrateKeys() {
  const data = srsLoad(); let changed = 0;
  for(const key of Object.keys(data)) {
    const lang = key.split(':')[0]; const word = key.split(':').slice(1).join(':');
    const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
    const deck = getDeckForLang(lang);
    if(deck.find(c => c && c[f] === word)) continue;
    // même mot à la casse près dans le paquet (Kasi / kasi) : une seule carte, celle du paquet
    let card = deck.find(c => c && typeof c[f] === 'string' && c[f].toLowerCase() === word.toLowerCase());
    if(!card) {
      // mot du journal ou d'un cours écrit exactement ainsi : orthographe actuelle, rien à migrer
      const cur = _srsSearchArraySources(lang, word, '\u0000');
      if(cur && cur[f] === word) continue;
      card = srsGetCardData(lang, word);
    }
    if(!card) continue;
    const newKey = `${lang}:${card[f]}`;
    if(newKey === key) continue;
    if(data[newKey]) { if((data[key].reps || 0) > (data[newKey].reps || 0)) data[newKey] = data[key]; }
    else data[newKey] = data[key];
    delete data[key]; changed++;
  }
  if(changed) { srsSave(data); console.log('[Aprende] SRS keys migrated:', changed); }
}
// Réparation : une ancienne version de srsMigrateKeys supprimait à chaque démarrage les cartes des mots
// du journal et des cours, qui revenaient alors comme nouvelles. On rejoue l'historique des révisions
// (srs_revlog) pour retrouver l'état de toute carte « neuve » qui a pourtant déjà été notée.
function srsRepairFromRevlog() {
  const data = srsLoad(), by = {};
  for(const r of srsRevlogLoad()) { if(Array.isArray(r) && data[r[0]] && !data[r[0]].reps) (by[r[0]] = by[r[0]] || []).push(r); }
  let fixed = 0;
  for(const k in by) {
    const rs = by[k].filter(r => r[2] >= 0 && r[2] <= 3 && r[1] > 0).sort((a, b) => a[1] - b[1]);
    if(!rs.length) continue;
    let i = rs.length - 1; while(i > 0 && rs[i][3] !== 0) i--;   // dernière fois où la carte a démarré comme nouvelle
    const c = data[k];
    let st = { ef: c.ef || 2.5, interval: 0, reps: 0, due: rs[i][1], lang: c.lang, word: c.word, fr: c.fr, st: 'new' };
    for(const r of rs.slice(i)) st = srsNextState(st, r[2], k, r[1]);
    data[k] = st; fixed++;
  }
  if(fixed) { srsSave(data); console.log('[Aprende] SRS cards repaired from revlog:', fixed); }
}
// ── Auto-enqueue: at boot, add any VOCAB/JOURNAL/COURSE words not yet in SRS ──
function srsAutoEnqueueNew() {
  const data = srsLoad(); let added = 0; let patched = 0;
  // un mot du journal ou d'un cours déjà présent à la casse près (Kasi / kasi) ne crée pas de deuxième carte
  const lower = new Set(Object.keys(data).map(k => k.toLowerCase()));
  ['es', 'ln', 'en'].forEach(lang => {
    const f = lang;
    // 1) Words from VOCAB decks (DATA / LINGALA / ENGLISH)
    getDeckForLang(lang).forEach(card => {
      if(!card) return;
      const word = card[f]; if(!word) return;
      const k = srsKey(lang, word);
      if(!data[k]) { lower.add(k.toLowerCase()); data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' }; added++; }
      else if(!data[k].fr && card.fr) { data[k].fr = card.fr; data[k].word = data[k].word || word; patched++; }
      else if(!data[k].word) { data[k].word = word; patched++; }
    });
    // 2) Words from JOURNAL_SESSIONS
    if(typeof JOURNAL_SESSIONS !== 'undefined') {
      for(const sess of JOURNAL_SESSIONS) {
        const arr = lang === 'es' ? (sess.es || sess.mots || []) : lang === 'ln' ? (sess.ln || []) : (sess.en || []);
        for(const entry of arr) {
          if(!Array.isArray(entry) || !entry[0]) continue;
          const k = srsKey(lang, entry[0]);
          if(!data[k] && lower.has(k.toLowerCase())) continue;
          if(!data[k]) { lower.add(k.toLowerCase()); data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word: entry[0], fr: entry[1] || '' }; added++; }
          else if(!data[k].fr && entry[1]) { data[k].fr = entry[1]; data[k].word = data[k].word || entry[0]; patched++; }
          else if(!data[k].word) { data[k].word = entry[0]; patched++; }
        }
      }
    }
    // 3) Words from COURSES (parcours)
    if(typeof COURSES !== 'undefined' && COURSES[lang]) {
      for(const unit of COURSES[lang].units || []) {
        for(const w of unit.w || []) {
          if(!Array.isArray(w) || !w[0]) continue;
          const k = srsKey(lang, w[0]);
          if(!data[k] && lower.has(k.toLowerCase())) continue;
          if(!data[k]) { lower.add(k.toLowerCase()); data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word: w[0], fr: w[1] || '' }; added++; }
          else if(!data[k].fr && w[1]) { data[k].fr = w[1]; data[k].word = data[k].word || w[0]; patched++; }
          else if(!data[k].word) { data[k].word = w[0]; patched++; }
        }
      }
    }
  });
  // 4) Reverse pass: patch any SRS card still missing fr by looking it up
  Object.entries(data).forEach(([k, c]) => {
    if(c.fr) return; // already has translation
    const word = c.word || k.split(':').slice(1).join(':');
    const lang = c.lang || k.split(':')[0];
    const found = srsGetCardData(lang, word);
    if(found && found.fr) { data[k].fr = found.fr; if(!data[k].word) data[k].word = word; patched++; }
    else if(!data[k].word) { data[k].word = word; }
  });
  if(added || patched) { srsSave(data); console.log('[Aprende] SRS auto-enqueue:', added, 'new,', patched, 'patched (fr/word backfill)'); }
}

const FX_SPARK = cls => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1c1 6 4 9 11 11-7 2-10 5-11 11-1-6-4-9-11-11 7-2 10-5 11-11z"/></svg>`;
function srsRenderStack() {
  try {
  const stack = document.getElementById('srs-stack');
  stack.innerHTML = '';
  srsState.revealed = false;
  document.getElementById('srs-grade-area').style.display = 'none';

  const visible = srsState.queue.slice(0, 3);
  document.getElementById('srs-counter').textContent = `${srsState.queue.length} à réviser`;

  visible.forEach((card, i) => {
    try {
    let data = srsGetCardData(card.lang, card.word);
    // Fallback: if card no longer in deck, use translation stored in SRS data
    if(!data) {
      const srsData = srsLoad()[card.key] || {};
      data = {
        [card.lang]: card.word,
        es: card.lang === 'es' ? card.word : '',
        ln: card.lang === 'ln' ? card.word : '',
        en: card.lang === 'en' ? card.word : '',
        fr: srsData.fr || '(traduction non disponible)'
      };
    }
    const front = (card.lang === 'es' ? data.es : card.lang === 'ln' ? data.ln : data.en) || card.word || '?';
    const flag = (typeof SHUF_FLAGS !== 'undefined' && SHUF_FLAGS[card.lang]) || '';

    const el = document.createElement('div');
    el.className = 'srs-card ' + (i === 0 ? 'top' : i === 1 ? 'below-1' : 'below-2');

    if(i === 0) {
      // Carte du dessus : contenu complet + clic pour révéler
      el.classList.add(srsState.fxRise ? 'fx-rise' : 'fx-pop');
      let extraBadges = '';
      try { if(card.lang === 'en') extraBadges += enLevelBadge(enLevelOf(data)); } catch(e) { console.warn('[SRS] enLevelBadge error:', e); }
      try { if(card.leech) extraBadges += '<span class="fx-tag" title="Sangsue : oubliée 8 fois ou plus">🩸 Sangsue</span>'; } catch(e) {}
      try { if(srsIsIntraday(card)) extraBadges += '<span class="fx-tag">⏳ Apprentissage</span>'; } catch(e) {}
      let exampleHtml = '';
      try { exampleHtml = cardExampleHTML(card.lang, data); } catch(e) { console.warn('[SRS] cardExampleHTML error:', e); }
      const done = srsState.sessionDone || 0, total = done + srsState.queue.length + srsState.learnLater.length;
      const pct = total ? Math.round(100 * done / total) : 0, prevPct = srsState.fxPrevPct == null ? pct : srsState.fxPrevPct;
      srsState.fxPrevPct = pct;
      el.innerHTML = `
        <div class="fx-chip">${flag}${extraBadges}</div>
        <div class="fx-body">
          <div class="question-word srs-front-text fx-word">${front}</div>
          <div class="srs-back-text fx-back" style="display:none">
            <div class="fx-back-label">🇫🇷 Traduction</div>
            <div class="fx-tr">${data.fr || '?'}</div>
            <div class="fx-extras">${exampleHtml}</div>
            ${ficheHas(card.lang, card.word) ? `<button class="fx-fiche" onclick="event.stopPropagation();openFiche(srsState.currentCard.lang, srsState.currentCard.word)">＋ Fiche : variantes et pièges</button>` : ''}
          </div>
          <div class="srs-tap-text fx-tap">Touche pour révéler</div>
        </div>
        <div class="fx-prog"><span class="fx-prog-bar"><i style="width:${prevPct}%"></i></span><b>${done}/${total}</b></div>
        ${FX_SPARK('fx-spark fx-spark-a')}${FX_SPARK('fx-spark fx-spark-b')}`;
      el.onclick = () => srsReveal();
      if(prevPct !== pct) requestAnimationFrame(() => requestAnimationFrame(() => { const bar = el.querySelector('.fx-prog-bar i'); if(bar) bar.style.width = pct + '%'; }));
    }
    stack.appendChild(el);
    } catch(cardErr) {
      console.error('[SRS] Render error for card', card.key || card.word, ':', cardErr);
      // Render a fallback card so user can still grade and move on
      const el = document.createElement('div');
      el.className = 'srs-card ' + (i === 0 ? 'top' : i === 1 ? 'below-1' : 'below-2');
      if(i === 0) {
        el.innerHTML = `<div class="fx-chip">⚠️ Erreur</div>
          <div class="fx-body">
            <div class="question-word srs-front-text fx-word">${card.word || '?'}</div>
            <div class="srs-back-text fx-back" style="display:none">
              <div class="fx-tr">Erreur de rendu</div>
              <div class="fx-extras">${(cardErr.message || '').substring(0, 80)}</div>
            </div>
            <div class="srs-tap-text fx-tap">Touche pour révéler</div>
          </div>`;
        el.onclick = () => srsReveal();
      }
      stack.appendChild(el);
    }
  });

  srsState.fxRise = false;
  srsState.currentCard = visible[0];
  srsState.shownAt = Date.now();
  // Update interval previews
  try {
  if(srsState.currentCard) {
    const data = srsLoad()[srsState.currentCard.key];
    [0,1,2,3].forEach(g => {
      document.getElementById(`srs-int-${g}`).textContent = srsFormatInterval(data, g, srsState.currentCard.key);
    });
  }
  } catch(e) { console.error('[SRS] Interval preview error:', e); }
  } catch(fatalErr) {
    console.error('[SRS] FATAL srsRenderStack error:', fatalErr);
    const stack = document.getElementById('srs-stack');
    if(stack) stack.innerHTML = '<div style="padding:2rem;text-align:center;color:#ffa"><div style="font-size:1.5rem">⚠️</div><div style="margin-top:.5rem;font-size:.9rem">Erreur de rendu SRS</div><div style="margin-top:.3rem;font-size:.75rem;opacity:.7">' + (fatalErr.message || '') + '</div><div style="margin-top:1rem;font-size:.8rem">Recharge l\'app (↻) pour réessayer</div></div>';
  }
}

function srsReveal() {
  if(srsState.revealed) return;
  srsState.revealed = true;
  const top = document.querySelector('.srs-card.top');
  if(!top) return;
  const show = () => {
    top.classList.add('revealed');
    top.querySelector('.srs-back-text').style.display = 'block';
    top.querySelector('.srs-tap-text').style.display = 'none';
  };
  const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(calm) show();
  else {
    // retournement : le contenu change quand la carte est de profil
    top.classList.remove('fx-pop', 'fx-rise');
    top.classList.add('fx-flip');
    setTimeout(show, 190);
  }
  document.getElementById('srs-grade-area').style.display = 'block';
}


// Add new cards to SRS from current language deck
