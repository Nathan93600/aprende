// ¡Aprende! — js/rpg.js : Héros, quêtes, boutique
// ═══════════════════════════════════════════════
// HÉROS RPG
// Formule de niveau = celle d'Habitica (open source) · 50 PV max · or, classes, quêtes
// ═══════════════════════════════════════════════
const RPG_MAXHP = 50;
const RPG_CLASSES = {
  warrior: { e: '⚔️', n: 'Guerrier', d: '+50 % de dégâts contre les boss' },
  mage:    { e: '🧙', n: 'Mage',     d: '+20 % d\'XP sur tout' },
  rogue:   { e: '🗡️', n: 'Voleur',   d: '+30 % d\'or gagné' },
  healer:  { e: '💚', n: 'Soigneur', d: '−40 % de dégâts reçus, potions plus fortes' },
};
const RPG_BOSSES = [['🐉', 'le Dragon de l\'Oubli'], ['👻', 'le Spectre du Subjonctif'], ['🦂', 'le Scorpion des Faux-Amis'], ['🐍', 'l\'Hydre des Tons'], ['🦁', 'le Lion de la Procrastination'], ['🧟', 'le Zombie des Mots Latins']];
const RPG_DAILIES = [
  { id: 'rev_es', e: '🇪🇸', n: 'Réviser 7 cartes espagnol', max: 7, lang: 'es', cat: 'rev' },
  { id: 'rev_ln', e: '🇨🇩', n: 'Réviser 7 cartes lingala', max: 7, lang: 'ln', cat: 'rev' },
  { id: 'rev_en', e: '🇬🇧', n: 'Réviser 7 cartes anglais', max: 7, lang: 'en', cat: 'rev' },
  { id: 'lesson_es', e: '🇪🇸', n: '1 leçon espagnol', max: 1, lang: 'es', cat: 'lesson' },
  { id: 'lesson_ln', e: '🇨🇩', n: '1 leçon lingala', max: 1, lang: 'ln', cat: 'lesson' },
  { id: 'lesson_en', e: '🇬🇧', n: '1 leçon anglais', max: 1, lang: 'en', cat: 'lesson' },
  { id: 'trilingue', e: '🌍', n: 'Étudier les 3 langues', max: 3, cat: 'tri' },
];
const RPG_SHOP = [
  { id: 'potion', e: '🧪', n: 'Potion de soin', d: '+15 PV (Soigneur : +25)', cost: 25 },
  { id: 'freeze', e: '🧊', n: 'Gel de série', d: 'Protège ta série un jour sans activité (2 max)', cost: 50 },
  { id: 'respec', e: '🔄', n: 'Changer de classe', d: 'Réinitialise ta classe (niveau 10+)', cost: 40 },
];
let rpg = null;
function rpgToNext(l) { if(l < 5) return 25 * l; if(l === 5) return 150; return Math.round(((l * l) * 0.25 + 10 * l + 139.75) / 10) * 10; }
function rpgDayKey(t) { const d = new Date(t || Date.now()); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function rpgLangXP() { const g = k => parseInt(localStorage.getItem(k) || '0') || 0; return { es: g('es_xp'), ln: g('ln_xp'), en: g('en_xp') }; }
function rpgSave() { if(rpg && !rpg._noSave) crsSetJ('rpg', rpg); }
function rpgLog(t) { if(!rpg) return; rpg.log.unshift(rpgDayKey() + ' · ' + t); rpg.log = rpg.log.slice(0, 40); }
function rpgInit() {
  const _prevRpg = (typeof rpg !== 'undefined' && rpg && rpg.lvl && !rpg._noSave) ? rpg : null;
  rpg = crsJ('rpg', null);
  const lx = rpgLangXP(), revlog = srsRevlogLoad();
  if(!rpg || typeof rpg !== 'object') {
    // Guard: keep existing in-memory rpg if cache returned null but we had valid data
    if(_prevRpg) {
      console.warn('[RPG] ⚠️ Cache returned null but valid rpg was in memory (lvl:', _prevRpg.lvl, '). Keeping it.');
      rpg = _prevRpg;
      rpgBossEnsure();
      rpgSync(true);
      return;
    }
    // ── Guard Firestore : si le cache SYNC contient des données mais rpg est null,
    // c'est un problème de parsing, PAS un vrai nouveau joueur → on ne crée pas de héros
    if(typeof SYNC !== 'undefined' && SYNC.cache && Object.keys(SYNC.cache).length > 5) {
      console.error('[RPG] ⚠️ rpg null/invalide malgré', Object.keys(SYNC.cache).length, 'clés en cache SYNC.');
      console.error('[RPG] Raw rpg value:', typeof SYNC.cache['rpg'], SYNC.cache['rpg'] ? String(SYNC.cache['rpg']).substring(0, 200) : SYNC.cache['rpg']);
      // Héros temporaire en mémoire — on ne sauvegarde PAS pour ne pas écraser Firestore
      const tot = lx.es + lx.ln + lx.en;
      rpg = { lvl: 1, xp: 0, hp: RPG_MAXHP, gold: 0, cls: null, streak: 0, best: 0, streakDay: null, freezes: 0,
              day: rpgDayKey(), dayXP: 0, dayLessons: 0, dayLessonsLang: { es: 0, ln: 0, en: 0 }, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
              rewards: [{ e: '📺', n: 'Un épisode de série', c: 30 }, { e: '🍫', n: 'Une pause gourmande', c: 20 }, { e: '🎮', n: '30 min de jeu vidéo', c: 40 }],
              log: [], trophies: [], rest: false, goldFrac: 0, deaths: 0, _noSave: true };
      console.warn('[RPG] 🛡️ Héros temporaire créé (non sauvegardé). Recharge la page pour récupérer les vraies données.');
      rpgBossEnsure();
      return; // ← on sort SANS appeler rpgSync pour ne rien écraser
    }
    const tot = lx.es + lx.ln + lx.en;
    // série de départ = jours consécutifs avec des révisions
    const days = new Set(revlog.map(r => rpgDayKey(r[1])));
    let streak = 0, last = null;
    for(let i = 0; i < 400; i++) { const k = rpgDayKey(Date.now() - i * 86400000); if(days.has(k)) { streak++; if(!last) last = k; } else if(i > 0) break; }
    rpg = { lvl: 1, xp: 0, hp: RPG_MAXHP, gold: Math.floor(tot / 40), cls: null, streak, best: streak, streakDay: last, freezes: 1,
            day: rpgDayKey(), dayXP: 0, dayLessons: 0, dayLessonsLang: { es: 0, ln: 0, en: 0 }, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
            rewards: [{ e: '📺', n: 'Un épisode de série', c: 30 }, { e: '🍫', n: 'Une pause gourmande', c: 20 }, { e: '🎮', n: '30 min de jeu vidéo', c: 40 }],
            log: [], trophies: [], rest: false, goldFrac: 0, deaths: 0 };
    rpgGainRaw(tot, true);
    rpgLog(`🎉 Héros créé : tes ${tot} XP déjà gagnés → niveau ${rpg.lvl}, ${rpg.gold} pièces d'or de départ`);
    rpg.isNew = true;
  }
  rpgBossEnsure();
  rpgSync(true);
}
function rpgGainRaw(n, silent) {
  rpg.xp += n; let up = 0;
  while(rpg.xp >= rpgToNext(rpg.lvl)) { rpg.xp -= rpgToNext(rpg.lvl); rpg.lvl++; up++; }
  if(up) {
    rpg.hp = RPG_MAXHP;
    if(!silent) { rpgLog(`⭐ Niveau ${rpg.lvl} atteint (PV restaurés)`); showToast(`⭐ Niveau ${rpg.lvl} ! PV restaurés`, 'correct-toast'); try { confetti('big'); } catch(e) {} }
  }
}
function rpgGainXP(n, silent) { if(rpg.cls === 'mage') n = Math.round(n * 1.2); rpg.dayXP += n; rpgGainRaw(n, silent); }
function rpgAddGold(n) { if(n <= 0) return; if(rpg.cls === 'rogue') n *= 1.3; rpg.gold = Math.round((rpg.gold + n) * 10) / 10; }
function rpgHeal(n) { rpg.hp = Math.min(RPG_MAXHP, rpg.hp + n); }
function rpgDamage(n, why) {
  if(rpg.cls === 'healer') n *= 0.6;
  rpg.hp = Math.max(0, Math.round((rpg.hp - n) * 10) / 10);
  if(rpg.hp <= 0) { rpgDie(why); rpgSave(); return true; }
  rpgSave(); return false;
}
function rpgDie(why) {
  rpg.deaths = (rpg.deaths || 0) + 1;
  rpg.lvl = Math.max(1, rpg.lvl - 1); rpg.xp = 0; rpg.gold = Math.floor(rpg.gold / 2); rpg.hp = RPG_MAXHP;
  rpgLog(`💀 K.O. (${why}) : −1 niveau, −50 % d'or`);
  setTimeout(() => crsModal(`<div style="text-align:center"><div style="font-size:4rem">💀</div><div class="cm-t">K.O. !</div>
    <div class="cm-s">Tes PV sont tombés à zéro (${crsEsc(why)}). Comme dans Habitica, tu perds un niveau et la moitié de ton or, puis tu repars avec tous tes PV.<br>Astuce : les potions de la boutique te soignent, et le mode Auberge suspend les dégâts quand tu fais une pause.</div>
    <button class="gbtn" onclick="crsCloseModal()">Je me relève</button></div>`), 300);
}
function rpgBossEnsure() {
  if(!rpg.boss) { const i = rpg.bossN % RPG_BOSSES.length, max = 300 + 100 * rpg.bossN; rpg.boss = { i, hp: max, max }; }
}
function rpgBossHit(n, noSave) {
  rpgBossEnsure();
  if(rpg.cls === 'warrior') n *= 1.5;
  rpg.boss.hp = Math.max(0, Math.round((rpg.boss.hp - n) * 10) / 10);
  if(rpg.boss.hp <= 0) {
    const b = RPG_BOSSES[rpg.boss.i], g = 60 + 20 * rpg.bossN;
    rpgAddGold(g); rpgGainRaw(100);
    rpg.trophies.push(b[0] + ' ' + b[1]);
    rpgLog(`🏆 Quête : ${b[1]} vaincu ! +${g} or, +100 XP`);
    showToast(`🏆 ${b[0]} ${b[1]} est vaincu ! +${g} 🪙`, 'correct-toast');
    try { confetti('big'); } catch(e) {}
    rpg.bossN++; rpg.boss = null; rpgBossEnsure();
  }
  if(!noSave) rpgSave();
}
function rpgDailyState() {
  const today = srsStartOfToday();
  const todayRevs = srsRevlogLoad().filter(r => r[1] >= today);
  const rev_es = todayRevs.filter(r => r[0].startsWith('es:')).length;
  const rev_ln = todayRevs.filter(r => r[0].startsWith('ln:')).length;
  const rev_en = todayRevs.filter(r => r[0].startsWith('en:')).length;
  const dl = rpg.dayLessonsLang || { es: 0, ln: 0, en: 0 };
  // Trilingue: count how many languages have activity today (rev or lesson)
  const triActive = ['es', 'ln', 'en'].filter(l =>
    todayRevs.some(r => r[0].startsWith(l + ':')) || dl[l] > 0
  ).length;
  return {
    rev_es, rev_ln, rev_en,
    lesson_es: dl.es || 0, lesson_ln: dl.ln || 0, lesson_en: dl.en || 0,
    trilingue: triActive,
    // Legacy compat
    rev: rev_es + rev_ln + rev_en, lesson: (dl.es||0) + (dl.ln||0) + (dl.en||0), xp: rpg.dayXP
  };
}
function rpgCron() {
  const today = rpgDayKey();
  if(rpg.day === today) return;
  rpg.cronMsg = '';
  // Quotidiennes manquées : comptées une seule fois même après plusieurs jours (comme Habitica)
  const missed = RPG_DAILIES.filter(d => !rpg.claimed.includes(d.id));
  if(missed.length && !rpg.rest) {
    const dmg = missed.length * 5;
    rpgLog(`🌙 ${missed.length} quotidienne${missed.length > 1 ? 's' : ''} manquée${missed.length > 1 ? 's' : ''} (${rpg.day}) : −${dmg} PV`);
    rpg.cronMsg = `Hier, ${missed.length} quotidienne${missed.length > 1 ? 's' : ''} non faite${missed.length > 1 ? 's' : ''} : −${dmg} PV`;
    rpgDamage(dmg, 'quotidiennes manquées');
  }
  // Série (avec gel)
  const y = rpgDayKey(Date.now() - 86400000);
  if(rpg.streakDay && rpg.streakDay !== y && rpg.streakDay !== today) {
    const gap = Math.max(1, Math.round((new Date(y) - new Date(rpg.streakDay)) / 86400000));
    if(rpg.rest) { rpg.streakDay = y; }
    else if(rpg.freezes >= gap && rpg.streak > 0) { rpg.freezes -= gap; rpg.streakDay = y; rpgLog(`🧊 Gel de série utilisé (${gap})`); rpg.cronMsg = (rpg.cronMsg ? rpg.cronMsg + ' · ' : '') + '🧊 Ton gel a protégé ta série'; }
    else { if(rpg.streak) rpgLog(`💔 Série perdue (${rpg.streak} j)`); rpg.streak = 0; }
  }
  rpg.day = today; rpg.dayXP = 0; rpg.dayLessons = 0; rpg.dayLessonsLang = { es: 0, ln: 0, en: 0 }; rpg.claimed = [];
}
// ── Throttle: rpgSync is heavy (srsRevlogLoad, rpgDailyState, rpgSave, crsRefreshBars).
// Called on every showScreen, so throttle to max once per 2 seconds.
let _rpgSyncLast = 0;
function rpgSyncThrottled(silent) {
  const now = Date.now();
  if (now - _rpgSyncLast < 2000) return;
  _rpgSyncLast = now;
  rpgSync(silent);
}
function rpgSync(silent) {
  if(!rpg) return;
  rpgCron();
  const lx = rpgLangXP(); let gained = 0;
  ['es', 'ln', 'en'].forEach(l => { const d = lx[l] - (rpg.seen[l] || 0); if(d > 0) gained += d; });
  rpg.seen = lx;
  if(gained > 0) {
    rpgGainXP(gained, silent);
    rpg.goldFrac = (rpg.goldFrac || 0) + gained / 10;
    const g = Math.floor(rpg.goldFrac); if(g) { rpg.goldFrac -= g; rpgAddGold(g); }
  }
  const log = srsRevlogLoad();
  if(log.length > rpg.revSeen) { const hits = log.slice(rpg.revSeen).filter(r => r[2] > 0).length; if(hits) rpgBossHit(hits, true); }
  rpg.revSeen = log.length;
  const ds = rpgDailyState();
  RPG_DAILIES.forEach(d => {
    if(ds[d.id] >= d.max && !rpg.claimed.includes(d.id)) {
      rpg.claimed.push(d.id);
      // Trilingue bonus gets extra reward
      const isTriBonus = d.id === 'trilingue';
      const goldReward = isTriBonus ? 20 : 10;
      const xpReward = isTriBonus ? 25 : 15;
      rpgAddGold(goldReward); rpgGainRaw(xpReward, silent); rpgBossHit(isTriBonus ? 10 : 5, true);
      // Track daily goal completions for badge
      const dgDone = dgGet(); if(dgDone['done_' + dgToday()]) { crsSetJ('badge_dg_count', (crsJ('badge_dg_count', 0)) + 1); }
      // Track trilingue streak for badges
      if(isTriBonus) {
        crsSetJ('tri_days_count', (crsJ('tri_days_count', 0)) + 1);
        const triLastDay = crsJ('tri_last_day', '');
        const yesterday = rpgDayKey(Date.now() - 86400000);
        const triStreak = triLastDay === yesterday ? (crsJ('tri_streak', 0)) + 1 : 1;
        crsSetJ('tri_streak', triStreak);
        crsSetJ('tri_last_day', rpgDayKey());
        crsSetJ('tri_streak_best', Math.max(crsJ('tri_streak_best', 0), triStreak));
      }
      rpgLog(`✅ Quotidienne : ${d.n} (+${goldReward} or, +${xpReward} XP)`);
      if(!silent) showToast(`✅ ${d.n} : +${goldReward} 🪙`, 'correct-toast');
    }
  });
  const today = rpgDayKey();
  const active = rpg.dayXP >= 10 || rpg.dayLessons > 0 || ds.rev > 0;
  if(active && rpg.streakDay !== today) {
    const y = rpgDayKey(Date.now() - 86400000);
    const prevStreak = rpg.streak;
    rpg.streak = rpg.streakDay === y ? rpg.streak + 1 : 1;
    rpg.streakDay = today; rpg.best = Math.max(rpg.best || 0, rpg.streak);
    if(!silent) {
      const milestones = [7, 14, 30, 50, 100, 150, 200, 365];
      const hit = milestones.find(m => rpg.streak >= m && prevStreak < m);
      if(hit) {
        streakCelebrate(rpg.streak, hit);
      } else {
        showToast(`🔥 Série : ${rpg.streak} jour${rpg.streak > 1 ? 's' : ''} !`, 'correct-toast');
      }
    }
  }
  rpgSave();
  crsRefreshBars();
}

// ── Streak celebration + danger warning ──
const STREAK_MILESTONES = {
  7:   { e: '🔥', t: 'Flamme !',         d: '7 jours sans interruption — tu prends de bonnes habitudes !', gold: 15 },
  14:  { e: '🔥🔥', t: 'Brasier !',      d: '14 jours ! Deux semaines de régularité — impressionnant.', gold: 25 },
  30:  { e: '🌋', t: 'Volcan !',          d: '30 jours ! Un mois complet de travail quotidien !', gold: 50 },
  50:  { e: '☄️', t: 'Météore !',         d: '50 jours de série — ta discipline est en feu !', gold: 75 },
  100: { e: '💯', t: 'Centurion !',       d: '100 JOURS ! Un exploit rare — tu es imparable !', gold: 150 },
  150: { e: '⭐', t: 'Étoile !',          d: '150 jours — tu fais partie de l\'élite !', gold: 200 },
  200: { e: '🏆', t: 'Légende !',         d: '200 jours de série — légende vivante !', gold: 300 },
  365: { e: '👑', t: 'Un an !',           d: '365 JOURS ! Une année entière — chapeau !', gold: 500 },
};
function _streakSpawnSparks(container, count) {
  for(let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    spark.className = 'streak-spark';
    const angle = (Math.PI * 2 * i) / count;
    const dist = 50 + Math.random() * 60;
    const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
    spark.style.cssText = `left:50%;top:50%;--dx:${dx}px;--dy:${dy}px;animation-delay:${Math.random()*.3}s;background:${['#ffd700','#ff6b35','#ff4444','#ffaa00'][i%4]}`;
    container.appendChild(spark);
  }
}
function streakCelebrate(streak, milestone) {
  const m = STREAK_MILESTONES[milestone] || { e: '🔥', t: `${milestone} jours !`, d: 'Bravo !', gold: milestone };
  rpgAddGold(m.gold); rpgLog(`🔥 Milestone : ${m.t} (${streak} j, +${m.gold} or)`);
  try { confetti('big'); } catch(e) {}
  setTimeout(() => {
    crsModal(`<div style="text-align:center">
      <div class="streak-modal-bg">
        <div class="streak-sparks" id="streak-sparks-box"></div>
        <div class="streak-celebrate-anim">${m.e}</div>
      </div>
      <div class="cm-t" style="font-size:1.6rem;margin-top:.3rem">${m.t}</div>
      <div class="streak-flames" style="font-size:3rem;font-weight:900;color:var(--fire);margin:.3rem 0">
        <span class="streak-counter-anim">🔥 ${streak} jours</span>
      </div>
      <div class="cm-s">${m.d}</div>
      <div style="margin-top:.5rem;font-weight:800;color:var(--gold)">+${m.gold} 🪙</div>
      <button class="gbtn" onclick="crsCloseModal()">Continue !</button>
    </div>`);
    const box = document.getElementById('streak-sparks-box');
    if(box) _streakSpawnSparks(box, 16);
  }, 200);
}

function streakDangerHTML() {
  if(!rpg || rpg.rest || rpg.streak < 1) return '';
  const today = rpgDayKey();
  if(rpg.streakDay === today) return ''; // already active today
  const now = new Date();
  const h = now.getHours();
  const urgency = h >= 20 ? 'critical' : h >= 17 ? 'warning' : 'info';
  const msgs = {
    critical: `⚠️ Ta série de <b>${rpg.streak} j</b> se brise à minuit ! Révise vite !`,
    warning:  `🔥 N'oublie pas de réviser — ta série de <b>${rpg.streak} j</b> t'attend !`,
    info:     `💡 Ta série de <b>${rpg.streak} j</b> n'est pas encore sécurisée aujourd'hui.`
  };
  const colors = { critical: '#ff4444', warning: '#ff9800', info: 'var(--accent2)' };
  const freezeNote = rpg.freezes > 0 ? ` <span style="font-size:.75rem;opacity:.7">(🧊 ${rpg.freezes} gel${rpg.freezes > 1 ? 's' : ''} en réserve)</span>` : '';
  // Per-language status
  const todayStart = srsStartOfToday();
  const todayRevs = srsRevlogLoad().filter(r => r[1] >= todayStart);
  const dl = rpg.dayLessonsLang || { es: 0, ln: 0, en: 0 };
  const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
  const langNames = { es: 'ES', ln: 'LN', en: 'EN' };
  const langStatus = ['es', 'ln', 'en'].map(l => {
    const active = todayRevs.some(r => r[0].startsWith(l + ':')) || (dl[l] || 0) > 0;
    return `<span class="sd-lang${active ? ' done' : ''}">${langFlags[l]} ${langNames[l]}</span>`;
  }).join('');
  return `<div class="streak-danger ${urgency}" style="border-color:${colors[urgency]}">
    <span>${msgs[urgency]}${freezeNote}</span>
    <div class="sd-langs">${langStatus}</div>
  </div>`;
}

// ── Hub (choix de la langue) ──
function rpgAvatar() { return rpg && rpg.cls ? RPG_CLASSES[rpg.cls].e : '🧑🏾'; }
function rpgBars() {
  const need = rpgToNext(rpg.lvl);
  return `<div class="rlbl"><span>❤️ ${Math.ceil(rpg.hp)} / ${RPG_MAXHP} PV</span><span>${Math.floor(rpg.xp)} / ${need} XP</span></div>
    <div class="rbar hp"><i style="width:${100 * rpg.hp / RPG_MAXHP}%"></i></div>
    <div class="rbar xp"><i style="width:${100 * rpg.xp / need}%"></i></div>`;
}
function rpgDailiesHTML() {
  const ds = rpgDailyState();
  const LANG_NAMES = { es: 'Espagnol', ln: 'Lingala', en: 'Anglais' };
  let html = '';
  // Group: SRS reviews by language
  html += '<div class="dl-group"><span class="dl-group-label">🧠 Révisions SRS</span>';
  ['es', 'ln', 'en'].forEach(l => {
    const d = RPG_DAILIES.find(x => x.id === 'rev_' + l);
    const v = Math.min(d.max, Math.floor(ds[d.id])), ok = rpg.claimed.includes(d.id);
    html += `<div class="dl${ok ? ' ok' : ''}"><span class="ck">${ok ? '✓' : d.e}</span><span class="dlt">${d.n}</span><span class="dlp">${v} / ${d.max}</span></div>`;
  });
  html += '</div>';
  // Group: Lessons by language
  html += '<div class="dl-group"><span class="dl-group-label">🗺️ Leçons</span>';
  ['es', 'ln', 'en'].forEach(l => {
    const d = RPG_DAILIES.find(x => x.id === 'lesson_' + l);
    const v = Math.min(d.max, Math.floor(ds[d.id])), ok = rpg.claimed.includes(d.id);
    html += `<div class="dl${ok ? ' ok' : ''}"><span class="ck">${ok ? '✓' : d.e}</span><span class="dlt">${d.n}</span><span class="dlp">${v} / ${d.max}</span></div>`;
  });
  html += '</div>';
  // Trilingue bonus
  const tri = RPG_DAILIES.find(x => x.id === 'trilingue');
  const triV = Math.min(tri.max, ds.trilingue), triOk = rpg.claimed.includes('trilingue');
  html += `<div class="dl tri-daily${triOk ? ' ok' : ''}"><span class="ck">${triOk ? '✓' : tri.e}</span><span class="dlt">${tri.n}</span><span class="dlp">${triV} / ${tri.max}</span></div>`;
  return html;
}
function renderHub() {
  try { genereRenderBanner(); bilanRenderCard(); } catch(e) {}
  if(!rpg) return;
  const b = RPG_BOSSES[rpg.boss.i];
  document.getElementById('hub-hero').innerHTML = `<div class="hub-ava">${rpgAvatar()}<b>${rpg.lvl}</b></div><div class="hub-bars"><div class="hub-name"><span>Niveau ${rpg.lvl}${rpg.cls ? ' · ' + RPG_CLASSES[rpg.cls].n : ''}</span><small>Héros ›</small></div>${rpgBars()}</div>`;
  const streakActive = rpg.streakDay === rpgDayKey();
  document.getElementById('hub-chips').innerHTML = `<span class="chip${rpg.streak >= 7 ? ' streak-flames' : ''}">${streakActive ? '🔥' : '💤'} <span class="${streakActive ? 'streak-counter-anim' : ''}">${rpg.streak} j</span></span><span class="chip">🪙 ${Math.floor(rpg.gold)}</span><span class="chip">🧊 ${rpg.freezes}</span><span class="chip">${b[0]} ${Math.ceil(rpg.boss.hp)} PV</span>`;
  // Streak danger warning
  const dangerSlot = document.getElementById('hub-streak-danger');
  if(dangerSlot) dangerSlot.innerHTML = streakDangerHTML();
  ['es', 'ln', 'en'].forEach(l => {
    const st = crsStats(l), cur = crsCurrent(l), C = COURSES[l];
    const unit = C.units[Math.min(cur.u, C.units.length - 1)];
    const sec = C.sections[unit.s];
    const bar = document.getElementById('hc-bar-' + l); if(bar) bar.style.width = (100 * st.nodes / st.total) + '%';
    const sub = document.getElementById('hc-sub-' + l); if(sub) sub.textContent = cur.u >= C.units.length ? 'Parcours terminé 🏆' : `Section ${unit.s + 1} · ${sec[0]} · ${sec[1]}`;
    const un = document.getElementById('hc-unit-' + l); if(un) un.textContent = cur.u >= C.units.length ? `${st.totalUnits} / ${st.totalUnits} unités` : `Unité ${cur.u + 1}/${C.units.length} : ${unit.t}`;
  });
  // Render daily goal widget in hub
  const dgSlot = document.getElementById('dg-widget');
  if(dgSlot) dgRenderWidget();
  document.getElementById('hub-dailies').innerHTML = `<div class="hub-h"><span>📋 Quotidiennes</span><span style="font-size:.75rem;color:var(--muted)">+10 🪙 chacune · −5 PV par oubli</span></div>${rpgDailiesHTML()}${rpg.cronMsg ? `<div class="tipbox" style="margin-top:.5rem;font-size:.8rem">${crsEsc(rpg.cronMsg)}</div>` : ''}`;
  if(rpg.isNew) {
    rpg.isNew = false; rpgSave();
    setTimeout(() => crsModal(`<div style="text-align:center"><div style="font-size:3.5rem">🧑🏾⚔️</div><div class="cm-t">Ton héros est né !</div>
      <div class="cm-s">Tes ${rpg.seen.es + rpg.seen.ln + rpg.seen.en} XP déjà gagnés te placent directement au <b>niveau ${rpg.lvl}</b>, avec ${Math.floor(rpg.gold)} pièces d'or.<br><br>
      🗺️ Chaque langue a maintenant un <b>parcours</b> par unités jusqu'à ton objectif.<br>📋 7 <b>quotidiennes</b> par langue te rapportent de l'or ; les oublier coûte des PV.<br>🌍 Le bonus <b>trilingue</b> récompense l'étude des 3 langues chaque jour.<br>👹 Chaque bonne réponse (leçons et SRS) frappe le <b>boss de quête</b>.<br>🏪 Dépense ton or en potions, gels de série ou <b>tes propres récompenses</b>.</div>
      <button class="gbtn" onclick="crsCloseModal();${rpg.lvl >= 10 ? 'openHero()' : ''}">${rpg.lvl >= 10 ? 'Choisir ma classe' : 'C\'est parti'}</button></div>`), 400);
  }
}

// ── Écran Héros ──
function openHero() { showScreen('screen-hero'); renderHero(); }
function rpgPickClass(c) {
  if(rpg.cls && rpg.cls !== c) return;
  rpg.cls = c; rpgLog(`🎓 Classe choisie : ${RPG_CLASSES[c].n}`); rpgSave(); showToast(`${RPG_CLASSES[c].e} Tu es ${RPG_CLASSES[c].n} !`, 'correct-toast'); renderHero();
}
function rpgToggleRest() { rpg.rest = !rpg.rest; rpgLog(rpg.rest ? '🛌 Entrée à l\'auberge (dégâts suspendus)' : '🚪 Sortie de l\'auberge'); rpgSave(); renderHero(); }
function renderHero() {
  rpgSync(true);
  const b = RPG_BOSSES[rpg.boss.i];
  let cls = '';
  if(rpg.lvl >= 10 && !rpg.cls) cls = `<div class="hero-card"><div class="hub-h">🎓 Choisis ta classe</div><div class="cls-grid">${Object.entries(RPG_CLASSES).map(([k, c]) => `<button class="cls" onclick="rpgPickClass('${k}')"><b>${c.e}</b>${c.n}<div style="font-weight:700;color:var(--muted);margin-top:.2rem">${c.d}</div></button>`).join('')}</div></div>`;
  else if(rpg.lvl < 10) cls = `<div class="hero-card"><div class="hub-h">🎓 Classe</div><div class="cm-s" style="margin:0">Débloquée au niveau 10 (encore ${10 - rpg.lvl} niveau${10 - rpg.lvl > 1 ? 'x' : ''}).</div></div>`;
  const prog = ['es', 'ln', 'en'].map(l => { const s = crsStats(l); return `<div class="dl"><span class="ck">${CRS_META[l].flag}</span><span>${CRS_META[l].name} → ${CRS_META[l].target}</span><span class="dlp">${s.units} / ${s.totalUnits} unités</span></div><div class="rbar xp" style="margin-bottom:.3rem"><i style="width:${100 * s.nodes / s.total}%"></i></div>`; }).join('');
  document.getElementById('hero-body').innerHTML = `<div class="pg-title">⚔️ Ton héros</div>
    <div class="hero-card"><div class="hero-top"><div class="hero-ava">${rpgAvatar()}</div><div style="flex:1;min-width:0"><div class="hero-nm">Niveau ${rpg.lvl}</div><div class="hero-cl">${rpg.cls ? RPG_CLASSES[rpg.cls].n + ' · ' + RPG_CLASSES[rpg.cls].d : 'Aventurier'}</div></div></div>
      ${rpgBars()}
      <div class="hub-chips" style="justify-content:flex-start;margin-top:.8rem"><span class="chip">🪙 ${Math.floor(rpg.gold)}</span><span class="chip">🔥 ${rpg.streak} j (record ${rpg.best || 0})</span><span class="chip">🧊 ${rpg.freezes}</span><span class="chip">💀 ${rpg.deaths || 0}</span></div></div>
    ${cls}
    <div class="hero-card"><div class="hub-h"><span>📋 Quotidiennes</span><span style="font-size:.72rem;color:var(--muted)">remises à zéro à minuit</span></div>${rpgDailiesHTML()}</div>
    <div class="hero-card"><div class="hub-h"><span>${b[0]} Quête : ${b[1]}</span><span style="font-size:.75rem;color:var(--muted)">${Math.ceil(rpg.boss.hp)} / ${rpg.boss.max}</span></div>
      <div class="rbar boss" style="height:14px"><i style="width:${100 * rpg.boss.hp / rpg.boss.max}%"></i></div>
      <div class="cm-s" style="margin:.6rem 0 0;font-size:.78rem">Chaque bonne réponse en leçon ou carte SRS réussie = 1 dégât${rpg.cls === 'warrior' ? ' (×1,5 Guerrier)' : ''} · chaque quotidienne = 5 dégâts. Récompense : ${60 + 20 * rpg.bossN} or + 100 XP.</div></div>
    <div class="hero-card"><div class="hub-h">🗺️ Parcours</div>${prog}</div>
    <div class="hero-card"><div class="toggle-row"><span>🛌 Auberge : suspend les dégâts des quotidiennes et protège ta série (vacances, maladie)</span><button class="gbtn ${rpg.rest ? 'green' : 'ghost'}" style="width:auto;margin:0;padding:.5rem .8rem;font-size:.8rem" onclick="rpgToggleRest()">${rpg.rest ? 'Activé' : 'Activer'}</button></div></div>
    <div class="hero-card"><div class="hub-h"><span>🏅 Badges</span><span style="font-size:.72rem;color:var(--muted)">${crsJ('badges_earned',[]).length} / ${BADGES_DEF.length}</span></div>
      <button class="gbtn ghost" onclick="openBadges()" style="width:auto;padding:.5rem 1rem;font-size:.85rem;margin:0">Voir tous les badges</button></div>
    ${rpg.trophies.length ? `<div class="hero-card"><div class="hub-h">🏆 Trophées</div>${rpg.trophies.map(t => `<div class="logl">${crsEsc(t)}</div>`).join('')}</div>` : ''}
    <div class="hero-card"><div class="hub-h">📜 Journal</div>${rpg.log.slice(0, 12).map(t => `<div class="logl">${crsEsc(t)}</div>`).join('') || '<div class="logl">Rien pour l\'instant.</div>'}</div>`;
}

// ── Boutique ──
function openShop() { showScreen('screen-shop'); renderShop(); }
function rpgBuy(id) {
  const it = RPG_SHOP.find(x => x.id === id); if(!it || rpg.gold < it.cost) return;
  if(id === 'potion' && rpg.hp >= RPG_MAXHP) { showToast('❤️ Tu as déjà tous tes PV'); return; }
  if(id === 'freeze' && rpg.freezes >= 2) { showToast('🧊 Tu as déjà 2 gels'); return; }
  if(id === 'respec' && !rpg.cls) { showToast('Pas encore de classe à changer'); return; }
  rpg.gold = Math.round((rpg.gold - it.cost) * 10) / 10;
  if(id === 'potion') rpgHeal(rpg.cls === 'healer' ? 25 : 15);
  if(id === 'freeze') rpg.freezes++;
  if(id === 'respec') rpg.cls = null;
  rpgLog(`🏪 Achat : ${it.n}`); rpgSave();
  showToast(`${it.e} ${it.n} !`, 'correct-toast');
  if(id === 'respec') return openHero();
  renderShop();
}
function rpgBuyReward(i) {
  const r = rpg.rewards[i]; if(!r || rpg.gold < r.c) return;
  rpg.gold = Math.round((rpg.gold - r.c) * 10) / 10;
  rpgLog(`🎁 Récompense : ${r.n} (−${r.c} or)`); rpgSave();
  try { confetti(); } catch(e) {}
  showToast(`🎁 Profite bien : ${r.n} !`, 'correct-toast'); renderShop();
}
function rpgAddReward() {
  const n = document.getElementById('rw-n').value.trim(), c = parseInt(document.getElementById('rw-c').value);
  if(!n || !(c > 0)) { showToast('Donne un nom et un prix', 'wrong-toast'); return; }
  rpg.rewards.push({ e: '🎁', n, c }); rpgSave(); renderShop();
}
function rpgDelReward(i) { rpg.rewards.splice(i, 1); rpgSave(); renderShop(); }
function renderShop() {
  rpgSync(true);
  const g = Math.floor(rpg.gold);
  document.getElementById('shop-body').innerHTML = `<div class="pg-title">🏪 Boutique <span class="chip" style="float:right;font-size:.95rem">🪙 ${g}</span></div>
    <div class="hero-card"><div class="hub-h">⚗️ Objets</div>${RPG_SHOP.map(it => `<div class="shop-it"><span class="si">${it.e}</span><div><div class="sn">${it.n}</div><div class="sd">${it.d}</div></div><button class="buy" ${rpg.gold < it.cost ? 'disabled' : ''} onclick="rpgBuy('${it.id}')">${it.cost} 🪙</button></div>`).join('')}</div>
    <div class="hero-card"><div class="hub-h">🎁 Mes récompenses</div><div class="cm-s" style="margin:0 0 .3rem;font-size:.78rem">Comme dans Habitica : crée tes propres récompenses de la vraie vie et achète-les avec l'or gagné en apprenant.</div>
      ${rpg.rewards.map((r, i) => `<div class="shop-it"><span class="si">${r.e}</span><div><div class="sn">${crsEsc(r.n)}</div></div><button class="buy" ${rpg.gold < r.c ? 'disabled' : ''} onclick="rpgBuyReward(${i})">${r.c} 🪙</button><button class="del" onclick="rpgDelReward(${i})" title="Supprimer">✕</button></div>`).join('')}
      <div class="rw-form"><input id="rw-n" placeholder="Ex : Soirée ciné" maxlength="40"><input id="rw-c" type="number" min="1" placeholder="Prix" value="30"><button class="gbtn" style="width:auto;padding:.55rem .9rem;font-size:.85rem" onclick="rpgAddReward()">Ajouter</button></div></div>`;
}

// ── Branchement sur la navigation existante ──
const FX_DARK_SCREENS = [];   // le thème pop couvre toute l'appli
const crsOrigShowScreen = showScreen;
const crsOrigSelectLang = selectLang;
const crsOrigGoHome = goHome;
const CRS_TAB_SCREENS = { 'screen-path': 'path', 'screen-srs': 'srs', 'home': 'games', 'home-ln': 'games', 'home-en': 'games', 'screen-hero': 'hero', 'screen-shop': 'shop' };
showScreen = function(id) {
  crsOrigShowScreen(id);
  const tb = document.getElementById('crs-tabbar');
  if(tb) {
    tb.classList.toggle('show', id in CRS_TAB_SCREENS);
    tb.querySelectorAll('.tb-btn').forEach(b => b.classList.toggle('on', b.dataset.tab === CRS_TAB_SCREENS[id]));
  }
  crsTheme(id === 'lang-select' ? 'hub' : currentLang);
  // thème « pop » (crème teinté par langue, contours épais) : Réviser, Jeux et tous les jeux
  document.body.classList.toggle('pop', !FX_DARK_SCREENS.includes(id));
  { const el = document.getElementById(id); if(el) { el.classList.remove('fx-enter'); void el.offsetWidth; el.classList.add('fx-enter'); } }
  if(id === 'screen-path' || id === 'home-en') setTimeout(() => { try { c1Render(); } catch(e) { console.warn('[C1]', e); } }, 0);
  document.body.classList.toggle('t-sky', ['screen-path', 'screen-lesson', 'home-ln', 'screen-hero', 'screen-shop'].includes(id));
  if(rpg) rpgSyncThrottled(id === 'screen-lesson');
  if(id === 'lang-select') renderHub();
};
selectLang = function(lang) { openPath(lang); };
goHome = function() {
  crsOrigGoHome();
  if(crsLastTab !== 'games') openPath(currentLang);
};
function crsBoot() {
  ['home', 'home-ln', 'home-en'].forEach(h => { const e = document.getElementById(h); if(e) e.classList.add('with-tabbar'); });
  try { rpgInit(); } catch(e) { console.error('[Aprende] RPG init', e); }
  crsTheme('hub');
  renderHub();
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) return;
    if(rpg) { rpgSync(); const ls = document.getElementById('lang-select'); if(ls && ls.classList.contains('active')) renderHub(); }
    try { updateSRSDueBadges(); } catch(e) {}
  });
}
