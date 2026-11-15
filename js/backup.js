// ¡Aprende! — js/backup.js : Sauvegarde et restauration de la progression ; bouton « génère »
// ═══════════════════════════════════════════════
// EXPORT / IMPORT — backup & restore progress
// ═══════════════════════════════════════════════
function exportProgress(forGenere) {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const stamp = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
  const data = {
    version: 2,
    exported_at: now.toISOString(),
    app: 'aprende',
    // SRS (all languages combined)
    srs_data: JSON.parse(localStorage.getItem('srs_data') || '{}'),
    // XP
    es_xp: parseInt(localStorage.getItem('es_xp') || localStorage.getItem('score') || '0'),
    ln_xp: parseInt(localStorage.getItem('ln_xp') || '0'),
    en_xp: parseInt(localStorage.getItem('en_xp') || '0'),
    // Legacy: main app state
    score: parseInt(localStorage.getItem('score') || '0'),
    streak: parseInt(localStorage.getItem('streak') || '0'),
    // Mastered
    mastered: JSON.parse(localStorage.getItem('mastered') || '[]'),
    es_mastered: JSON.parse(localStorage.getItem('es_mastered') || '[]'),
    ln_mastered: JSON.parse(localStorage.getItem('ln_mastered') || '[]'),
    en_mastered: JSON.parse(localStorage.getItem('en_mastered') || '[]'),
    // Aura map (synesthesia)
    aura_map: JSON.parse(localStorage.getItem('aura_map') || '{}'),
    // Historique des révisions, réglages, SRS prononciation et grammaire
    srs_revlog: JSON.parse(localStorage.getItem('srs_revlog') || '[]'),
    srs_new_per_day: srsNewPerDay(),
    pron_srs: JSON.parse(localStorage.getItem('pron_srs') || '{}'),
    grammar_srs: JSON.parse(localStorage.getItem('grammar_srs') || '{}'),
    srs_algo: 'fsrs6',
    crs_prog: JSON.parse(localStorage.getItem('crs_prog') || '{}'),
    crs_added: JSON.parse(localStorage.getItem('crs_added') || '{}'),
    rpg: JSON.parse(localStorage.getItem('rpg') || 'null'),
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const filename = `aprende-progres-${stamp}.json`;

  // Prefer Web Share (mobile — allows sharing to Claude / other apps)
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const file = new File([blob], filename, { type: 'application/json' });

  if(navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({
      files: [file],
      title: forGenere ? 'génère' : 'Mes progrès ¡Aprende!',
      text: forGenere ? 'génère' : 'Sauvegarde ¡Aprende! du ' + stamp
    }).then(() => {
      if(forGenere) genereMarkSent();
      showToast(forGenere ? '✅ Envoyé — à vendredi prochain !' : '✅ Sauvegarde envoyée', 'correct-toast');
      haptic('success');
      confetti('small');
    }).catch(err => {
      // User cancelled or Share failed — fallback to download
      if(err.name !== 'AbortError') downloadJSON(blob, filename);
    });
  } else {
    // Desktop or browsers without Web Share API — direct download
    downloadJSON(blob, filename);
    if(forGenere) {
      genereMarkSent();
      try { navigator.clipboard.writeText('génère'); } catch(e) {}
      setTimeout(() => showToast('📎 Glisse le fichier dans Claude — « génère » est copié', 'correct-toast'), 1200);
    }
  }
}

/* ── Fiche enrichie d'un mot : construite à partir de courses/feedback.js
   (astuce pour retenir, autres façons de le dire avec leur nuance, pièges de francophone). ── */
let _ficheIdx = null, _ficheBack = null;
function ficheFind(lang, word) {
  if(typeof CRS_FB === 'undefined' || !CRS_FB[lang] || !word) return null;
  if(CRS_FB[lang][word]) return { key: word, fb: CRS_FB[lang][word] };
  if(!_ficheIdx) { _ficheIdx = {}; for(const l in CRS_FB) { _ficheIdx[l] = {}; for(const k in CRS_FB[l]) _ficheIdx[l][crsFbNorm(k)] = k; } }
  const idx = _ficheIdx[lang];
  let k = idx[crsFbNorm(word)];
  if(!k) {
    // entrée du journal à plusieurs formes (« pillar / pillado », « fathom [sth] », « to ship sb ») : on essaie chaque forme
    if(!idx.__loose) { idx.__loose = {}; for(const key in CRS_FB[lang]) { const n = ficheLoose(key); if(n && !idx.__loose[n]) idx.__loose[n] = key; }
      for(const key in CRS_FB[lang]) { if(key.indexOf(' / ') > 0) key.split(' / ').forEach(part => { const n = ficheLoose(part); if(n && !idx.__loose[n]) idx.__loose[n] = key; }); } }
    for(const part of [word].concat(String(word).split(/\s+\/\s+|\/(?=\S)/))) { const n = ficheLoose(part); if(n && idx.__loose[n]) { k = idx.__loose[n]; break; } }
  }
  return k ? { key: k, fb: CRS_FB[lang][k] } : null;
}
function ficheLoose(s) {
  return crsFbNorm(String(s).replace(/\(.*?\)|\[.*?\]/g, ' ').replace(/[¡!¿?]/g, ' ').replace(/\b(sb|sth|smb|smth|someone|something)\b/gi, ' ')).replace(/^(a|an|the)\s+(?=\S)/, '');
}
function ficheHas(lang, word) { const f = ficheFind(lang, word); return !!(f && ((f.fb.alt && f.fb.alt.length) || (f.fb.err && f.fb.err.length) || f.fb.tip)); }
function openFiche(lang, word, back) {
  const f = ficheFind(lang, word); if(!f) return;
  _ficheBack = typeof back === 'function' ? back : null;
  let w = null;
  for(const u of ((COURSES[lang] || {}).units || [])) { w = u.w.find(x => x[0] === f.key); if(w) break; }
  if(!w) { // mot du journal (hors cours) : traduction et exemple pris sur la carte du paquet
    const c = getDeckForLang(lang).find(x => x && x[lang] === f.key);
    if(c) {
      const e = lang === 'es' ? (ES_EXAMPLES[f.key] || []) : lang === 'ln' ? [c.ex_ln, c.ex_fr] : [c.say || (typeof PRON_DATA !== 'undefined' && PRON_DATA[c.en] ? PRON_DATA[c.en][0] : ''), ''];
      w = [f.key, c.fr, e[0] || '', e[1] || ''];
    }
  }
  const FL = { es: '🇪🇸', en: '🇬🇧', ln: '🇨🇩' }, spk = !!(CRS_META[lang] && CRS_META[lang].tts), tn = crsFbNorm(f.key);
  const alts = (f.fb.alt || []).filter(a => crsFbNorm(a[0]) !== tn), errs = f.fb.err || [];
  const sec = t => `<div style="font-weight:900;margin:1rem 0 .4rem">${t}</div>`;
  // variété de langue : castellano / Amérique latine pour l'espagnol, Kinshasa / standard pour le lingala
  const REG = { es: { es: '🇪🇸 Espagne (castellano)', latam: '🌎 Amérique latine', gen: '🌐 Espagne et Amérique latine' }, ln: { kin: '🇨🇩 Forme de Kinshasa', std: '🇨🇩 Lingala standard (RDC)', check: '⚠️ À vérifier : non confirmé par le dictionnaire' } };
  const regLabel = (REG[lang] || {})[f.fb.reg] || '';
  const regHtml = regLabel ? `<div style="display:inline-block;margin:0 0 .6rem;padding:.25rem .7rem;border-radius:999px;border:1.5px solid var(--border);font-size:.74rem;font-weight:800;color:var(--muted)">${regLabel}</div>` : '';
  crsModal(`<div class="cm-t">${FL[lang] || ''} ${crsEsc(f.key)} ${spk ? `<button class="spk" onclick="crsSpeak('${lang}', ficheFind('${lang}', decodeURIComponent('${encodeURIComponent(f.key).replace(/'/g, '%27')}')).key)">🔊</button>` : ''}</div>
    ${regHtml}
    ${w ? `<div class="cm-s">${crsEsc(w[1])}</div>${w[2] ? `<div class="gw"><div><div class="gw-e">« ${crsEsc(w[2])} »${w[3] ? '<br>' + crsEsc(w[3]) : ''}</div></div>${spk ? `<button class="spk" onclick="crsSpeak('${lang}', decodeURIComponent('${encodeURIComponent(w[2]).replace(/'/g, '%27')}'))">🔊</button>` : ''}</div>` : ''}` : ''}
    ${f.fb.tip ? `${sec('💡 Pour retenir')}<div class="tipbox">${crsEsc(f.fb.tip)}</div>` : ''}
    ${alts.length ? sec('Se dit aussi') + alts.map(a => `<div class="gw"><div><div class="gw-w">${crsEsc(a[0])}</div>${a[1] ? `<div class="gw-f">${crsEsc(a[1])}</div>` : ''}</div></div>`).join('') : ''}
    ${errs.length ? sec('⚠️ Pièges') + errs.map(e => `<div class="gw"><div><div class="gw-w" style="text-decoration:line-through;opacity:.75">${crsEsc(e[0].replace(/^\*/, ''))}</div><div class="gw-f">${crsEsc(e[1])}</div></div></div>`).join('') : ''}
    <button class="gbtn ghost" onclick="${_ficheBack ? '_ficheBack()' : 'crsCloseModal()'}">${_ficheBack ? '← Retour' : 'Fermer'}</button>`);
  const box = document.getElementById('crs-modal-box'); if(box) box.scrollTop = 0;
}

/* ── Bilan de la semaine : calculé sur l'appareil à partir de l'historique des révisions (srs_revlog).
   Le « mot de Claude » (CRS_WEEK, dans courses/feedback.js) est la seule partie écrite à la main, à chaque « génère ». ── */
function bilanData() {
  const day = 86400000, end = srsStartOfToday() + day, wStart = end - 7 * day, pStart = end - 14 * day;
  const log = srsRevlogLoad(), cards = srsLoad();
  const sum = rows => ({ n: rows.length, ok: rows.filter(r => r[2] > 0).length, ms: rows.reduce((a, r) => a + (r[5] || 0), 0) });
  const wk = log.filter(r => r[1] >= wStart && r[1] < end), pv = log.filter(r => r[1] >= pStart && r[1] < wStart);
  const w = sum(wk), p = sum(pv);
  const days = []; // du plus ancien au plus récent
  for(let i = 6; i >= 0; i--) { const a = end - (i + 1) * day; days.push({ t: a, n: wk.filter(r => r[1] >= a && r[1] < a + day).length }); }
  const langs = ['es', 'en', 'ln'].map(l => Object.assign({ l }, sum(wk.filter(r => r[0].startsWith(l + ':')))));
  const miss = {};
  for(const r of wk) if(r[2] === 0) miss[r[0]] = (miss[r[0]] || 0) + 1;
  const worst = Object.entries(miss).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, n]) => {
    const c = cards[k] || {}, i = k.indexOf(':');
    return { k, n, lang: k.slice(0, i), word: c.word || k.slice(i + 1), fr: c.fr || '' };
  });
  // nouveaux mots = cartes vues pour la toute première fois cette semaine (type 0 dans l'historique)
  const fresh = new Set(wk.filter(r => r[3] === 0).map(r => r[0])).size;
  return { w, p, days, langs, worst, fresh, pct: w.n ? Math.round(100 * w.ok / w.n) : null, ppct: p.n ? Math.round(100 * p.ok / p.n) : null };
}
function bilanVerdict(d) {
  const active = d.days.filter(x => x.n).length;
  if(!d.w.n) return "Aucune révision sur les 7 derniers jours. Une session de 5 minutes suffit pour relancer la machine.";
  const parts = [];
  if(d.p.n) {
    const dv = d.w.n - d.p.n;
    parts.push(Math.abs(dv) < Math.max(5, d.p.n * .1) ? 'Volume stable par rapport à la semaine précédente' : dv > 0 ? `Tu as révisé plus que la semaine précédente (+${dv})` : `Tu as moins révisé que la semaine précédente (${dv})`);
    if(d.ppct !== null) { const dp = d.pct - d.ppct; parts.push(Math.abs(dp) < 2 ? 'réussite stable' : dp > 0 ? `réussite en hausse de ${dp} points` : `réussite en baisse de ${-dp} points`); }
  } else parts.push('Première semaine mesurée');
  let s = parts.join(', ') + '.';
  if(active <= 3) s += ` Seulement ${active} jour${active > 1 ? 's' : ''} sur 7 : la régularité compte plus que le volume.`;
  else if(active === 7) s += ' 7 jours sur 7, rien à dire.';
  return s;
}
function bilanDelta(v, unit) {
  if(v === null || !isFinite(v) || v === 0) return '';
  return `<span style="font-size:.72rem;font-weight:800;color:var(--muted)"> ${v > 0 ? '▲ +' : '▼ −'}${Math.abs(v)}${unit || ''}</span>`;
}
function uxCountUp(root) {
  if(!root || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
  root.querySelectorAll('[data-count]').forEach(el => {
    const to = +el.dataset.count, suf = el.dataset.suf || '', t0 = performance.now(), d = 650;
    const tick = t => { const k = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e) + suf; if(k < 1) requestAnimationFrame(tick); };
    el.textContent = '0' + suf; requestAnimationFrame(tick);
  });
}
function openBilan() {
  const d = bilanData(), FL = { es: '🇪🇸', en: '🇬🇧', ln: '🇨🇩' }, DN = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const tile = (label, val, extra) => `<div style="flex:1 1 42%;background:rgba(255,255,255,.05);border:1.5px solid var(--border);border-radius:14px;padding:.7rem .8rem"><div style="font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)">${label}</div><div style="font-size:1.5rem;font-weight:900;line-height:1.2">${val}${extra || ''}</div></div>`;
  const active = d.days.filter(x => x.n).length;
  const week = (typeof CRS_WEEK !== 'undefined' && CRS_WEEK) || null;
  crsModal(`<div class="cm-t">📈 Bilan de la semaine</div>
    <div class="cm-s">Les 7 derniers jours, comparés aux 7 précédents.</div>
    <div class="tipbox" style="margin-bottom:.8rem">${crsEsc(bilanVerdict(d))}</div>
    <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:.8rem">
      ${tile('Révisions', `<span data-count="${d.w.n}">${d.w.n}</span>`, d.p.n ? bilanDelta(d.w.n - d.p.n) : '')}
      ${tile('Réussite', d.pct === null ? '—' : `<span data-count="${d.pct}" data-suf=" %">${d.pct} %</span>`, d.pct !== null && d.ppct !== null ? bilanDelta(d.pct - d.ppct, ' pts') : '')}
      ${tile('Temps', `<span data-count="${Math.round(d.w.ms / 60000)}" data-suf=" min">${Math.round(d.w.ms / 60000)} min</span>`)}
      ${tile('Nouveaux mots', `<span data-count="${d.fresh}">${d.fresh}</span>`)}
    </div>
    <div style="display:flex;justify-content:space-between;gap:.3rem;margin-bottom:.3rem" aria-label="${active} jours actifs sur 7">
      ${d.days.map(x => `<div style="flex:1;text-align:center" title="${x.n} révision${x.n > 1 ? 's' : ''}"><div style="height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.78rem;${x.n ? 'background:#58cc02;color:#0b2400' : 'border:2px dashed var(--border);color:var(--muted)'}">${x.n || '·'}</div><div style="font-size:.66rem;font-weight:800;color:var(--muted);margin-top:.15rem">${DN[new Date(x.t).getDay()]}</div></div>`).join('')}
    </div>
    <div style="font-size:.78rem;font-weight:800;color:var(--muted);margin-bottom:.9rem">${active} jour${active > 1 ? 's' : ''} actif${active > 1 ? 's' : ''} sur 7 · révisions par jour</div>
    <div style="display:flex;gap:.5rem;margin-bottom:1rem">
      ${d.langs.map(x => `<div style="flex:1;text-align:center;border:1.5px solid var(--border);border-radius:12px;padding:.5rem .3rem"><div style="font-size:1.2rem">${FL[x.l]}</div><div style="font-weight:900">${x.n}</div><div style="font-size:.72rem;font-weight:800;color:var(--muted)">${x.n ? Math.round(100 * x.ok / x.n) + ' % réussis' : 'rien cette semaine'}</div></div>`).join('')}
    </div>
    ${d.worst.length ? `<div style="font-weight:900;margin-bottom:.4rem">Tes mots les plus ratés</div>
      ${d.worst.map((x, i) => `<div class="gw">${CRS_META[x.lang] && CRS_META[x.lang].tts ? `<button class="spk" onclick="crsSpeak('${x.lang}', bilanData().worst[${i}].word)">🔊</button>` : ''}<div style="flex:1"><div class="gw-w">${FL[x.lang] || ''} ${crsEsc(x.word)}</div><div class="gw-f">${crsEsc(x.fr)}</div></div><div style="font-weight:900;white-space:nowrap">${x.n}× raté</div>${ficheHas(x.lang, x.word) ? `<button class="spk" title="Fiche" onclick="openFiche('${x.lang}', bilanData().worst[${i}].word, openBilan)">＋</button>` : ''}</div>`).join('')}` : (d.w.n ? '<div class="tipbox">Aucune carte ratée cette semaine 👏</div>' : '')}
    ${week && week.notes && week.notes.length ? `<div style="font-weight:900;margin:1rem 0 .4rem">Le mot de Claude <span style="font-weight:700;color:var(--muted);font-size:.78rem">· ${crsEsc(week.date)}</span></div><div class="tipbox">${week.notes.map(n => '• ' + crsEsc(n)).join('<br>')}</div>` : ''}
    <button class="gbtn ghost" onclick="crsCloseModal()">Fermer</button>`);
  uxCountUp(document.getElementById('crs-modal-box'));
}
function bilanRenderCard() {
  const el = document.getElementById('bilan-card'); if(!el) return;
  const d = bilanData();
  el.innerHTML = `<button onclick="openBilan()" style="width:100%;margin:.2rem 0 .8rem;padding:.75rem 1rem;border:1.5px solid var(--border);border-radius:14px;cursor:pointer;background:rgba(255,255,255,.04);color:var(--text);font-weight:800;font-size:.88rem;display:flex;justify-content:space-between;align-items:center;gap:.6rem;text-align:left"><span>📈 Bilan de la semaine</span><span style="color:var(--muted);font-size:.8rem;white-space:nowrap">${d.w.n ? d.w.n + ' révisions · ' + d.pct + ' %' : 'rien encore'} ›</span></button>`;
}

/* ── Rappel du vendredi : un bouton pour envoyer la sauvegarde à Claude avec « génère » ── */
function genereWeekKey(d) {
  // clé = date du vendredi de la semaine en cours (la semaine « génère » va du vendredi au jeudi)
  const x = new Date(d || Date.now()); x.setHours(12, 0, 0, 0);
  x.setDate(x.getDate() - ((x.getDay() + 2) % 7));
  return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
}
function genereMarkSent() { try { localStorage.setItem('genere_sent', genereWeekKey()); } catch(e) {} genereRenderBanner(); }
function genereRenderBanner() {
  const el = document.getElementById('genere-banner'); if(!el) return;
  const day = new Date().getDay(); // 5 = vendredi, 6 = samedi, 0 = dimanche
  let sent = ''; try { sent = localStorage.getItem('genere_sent') || ''; } catch(e) {}
  const show = (day === 5 || day === 6 || day === 0) && sent !== genereWeekKey();
  el.innerHTML = show ? `<button onclick="exportProgress(true)" style="width:100%;margin:.2rem 0 .8rem;padding:.9rem 1rem;border:none;border-radius:14px;cursor:pointer;background:linear-gradient(135deg,#ffc800,#ff9600);color:#1a0610;font-weight:800;font-size:.95rem;box-shadow:0 4px 14px rgba(255,150,0,.35)">📅 ${day === 5 ? "C'est vendredi" : 'Pas encore fait cette semaine'} : envoyer ma progression à Claude</button>` : '';
}

function downloadJSON(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('✅ Fichier téléchargé', 'correct-toast');
  haptic('success');
  confetti('small');
}

function importProgress(file) {
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if(!data.app || data.app !== 'aprende') {
        if(!confirm('Ce fichier ne semble pas être une sauvegarde ¡Aprende!. Continuer quand même ?')) return;
      }
      // Ask confirmation before overwriting
      const currentSrs = Object.keys(JSON.parse(localStorage.getItem('srs_data') || '{}')).length;
      const importSrs = Object.keys(data.srs_data || {}).length;
      const msg = `Restaurer cette sauvegarde ?\n\n📥 À importer : ${importSrs} cartes SRS\n📤 État actuel : ${currentSrs} cartes SRS\n\n⚠️ Tes données actuelles seront écrasées.`;
      if(!confirm(msg)) return;

      // Restore all keys
      if(data.srs_data) localStorage.setItem('srs_data', JSON.stringify(data.srs_data));
      if(data.es_xp !== undefined) localStorage.setItem('es_xp', String(data.es_xp));
      if(data.ln_xp !== undefined) localStorage.setItem('ln_xp', String(data.ln_xp));
      if(data.en_xp !== undefined) localStorage.setItem('en_xp', String(data.en_xp));
      if(data.score !== undefined) localStorage.setItem('score', String(data.score));
      if(data.streak !== undefined) localStorage.setItem('streak', String(data.streak));
      if(data.mastered) localStorage.setItem('mastered', JSON.stringify(data.mastered));
      if(data.es_mastered) localStorage.setItem('es_mastered', JSON.stringify(data.es_mastered));
      if(data.ln_mastered) localStorage.setItem('ln_mastered', JSON.stringify(data.ln_mastered));
      if(data.en_mastered) localStorage.setItem('en_mastered', JSON.stringify(data.en_mastered));
      if(data.aura_map) localStorage.setItem('aura_map', JSON.stringify(data.aura_map));
      if(data.srs_revlog) localStorage.setItem('srs_revlog', JSON.stringify(data.srs_revlog));
      if(data.srs_new_per_day !== undefined) localStorage.setItem('srs_new_per_day', String(data.srs_new_per_day));
      if(data.pron_srs) localStorage.setItem('pron_srs', JSON.stringify(data.pron_srs));
      if(data.grammar_srs) localStorage.setItem('grammar_srs', JSON.stringify(data.grammar_srs));
      if(data.crs_prog) localStorage.setItem('crs_prog', JSON.stringify(data.crs_prog));
      if(data.crs_added) localStorage.setItem('crs_added', JSON.stringify(data.crs_added));
      if(data.rpg) localStorage.setItem('rpg', JSON.stringify(data.rpg));
      if(typeof crsMergeAdded === 'function') crsMergeAdded();
      if(data.rpg && typeof rpgInit === 'function') rpgInit();
      else if(typeof rpg !== 'undefined' && rpg) { rpg.seen = rpgLangXP(); rpg.revSeen = srsRevlogLoad().length; rpgSave(); }
      srsMigrateAllToFsrs(); // une ancienne sauvegarde SM-2 est convertie automatiquement
      srsState.undo = [];

      // Reload state in memory
      if(typeof state === 'object' && state) {
        state.xp = data.score || state.xp;
        state.streak = data.streak || state.streak;
        state.mastered = data.mastered || state.mastered;
      }

      showToast(`✅ ${importSrs} cartes SRS restaurées`, 'correct-toast');
      haptic('success');
      confetti('big');
      // Refresh visible stats
      updateSRSDueBadges();
      if(typeof updateHomeStats === 'function') updateHomeStats();
    } catch(err) {
      alert('❌ Impossible de lire le fichier : ' + err.message);
    }
  };
  reader.onerror = () => alert('❌ Erreur de lecture du fichier');
  reader.readAsText(file);
  // Reset input so same file can be re-selected
  document.getElementById('import-file-input').value = '';
}
