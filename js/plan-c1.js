// ¡Aprende! — js/plan-c1.js : Programme C1 : rappels dans l'accueil
// ═══════════════════════════════════════════════
// PROGRAMME C1 (courses/plan_c1.js) — rappels dans l'accueil
// ═══════════════════════════════════════════════
function c1Day(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function c1Log() { return crsJ('c1_log', {}); }
function c1Mark(field, val) { const L = c1Log(), k = c1Day(); L[k] = L[k] || {}; L[k][field] = val; crsSetJ('c1_log', L); }
function c1WeekIndex() {
  const s = new Date(C1_PLAN.start + 'T00:00:00'), n = new Date(); n.setHours(0, 0, 0, 0);
  return Math.floor((n - s) / 864e5 / 7);          // 0 = semaine 1 ; < 0 = pas commencé
}
function c1Phase(w) { return C1_PLAN.phases.find(p => w + 1 >= p.from && w + 1 <= p.to) || C1_PLAN.phases[C1_PLAN.phases.length - 1]; }
function c1EnStats() {
  let due = 0, mature = 0;
  try {
    const d = JSON.parse(localStorage.getItem('srs_data') || '{}');
    for(const k in d) { if(!k.startsWith('en:')) continue; const c = d[k];
      if(c.reps > 0 && srsIsDue(c)) due++;
      if((c.interval || 0) >= 21) mature++; }
  } catch(e) {}
  return { due, mature, intro: (() => { try { return srsIntroducedToday('en'); } catch(e) { return 0; } })() };
}
function c1TaskState(t, st, log) {
  if(t.id === 'rev') return { ok: st.due === 0, note: st.due ? st.due + ' à revoir' : 'à jour' };
  if(t.id === 'unit') { const n = log.unit || 0; return { ok: n >= 3, note: Math.min(n, 3) + '/3 étapes' }; }
  return { ok: !!log[t.id], note: t.min + ' min' };
}
function c1DayDone(st, log) { return C1_PLAN.daily.every(t => c1TaskState(t, st, log || {}).ok); }
function c1Render() {
  if(typeof C1_PLAN === 'undefined') return;
  const slots = ['c1-widget', 'c1-widget-en'].map(id => document.getElementById(id)).filter(Boolean);
  if(!slots.length) return;
  const w = c1WeekIndex(), total = C1_PLAN.weeks.length;
  let html;
  if(w >= total) {
    html = `<div class="c1-wrap"><div class="c1-top"><span class="c1-t">🏁 Programme C1 terminé</span></div><div class="c1-focus">Bravo ! Fais le point avec ton test EF SET final.</div><button class="c1-link" onclick="c1OpenPlan()">Voir le programme</button></div>`;
  } else {
    const wi = Math.max(0, w), W = C1_PLAN.weeks[wi], P = c1Phase(wi), st = c1EnStats(), L = c1Log(), log = L[c1Day()] || {};
    if(c1DayDone(st, log) && !log.done) { c1Mark('done', true); log.done = true; }
    const tasks = C1_PLAN.daily.map(t => { const s = c1TaskState(t, st, log);
      return `<button class="c1-task${s.ok ? ' ok' : ''}" ${t.auto ? 'disabled' : `onclick="c1Toggle('${t.id}')"`}><span class="c1-box">${s.ok ? '✓' : ''}</span><span class="c1-lbl">${t.label}</span><span class="c1-note">${s.note}</span></button>`; }).join('');
    // jours réussis cette semaine
    const s0 = new Date(C1_PLAN.start + 'T00:00:00'); s0.setDate(s0.getDate() + wi * 7);
    let days = '';
    for(let i = 0; i < 7; i++) { const d = new Date(s0); d.setDate(d.getDate() + i); const k = c1Day(d), today = k === c1Day();
      days += `<i class="${(L[k] && L[k].done) ? 'ok' : ''}${today ? ' today' : ''}" title="${k}">${'LMMJVSD'[i]}</i>`; }
    const pct = Math.min(100, Math.round(100 * st.mature / W.mature));
    const npd = srsNewPerDay(), npdWarn = npd > C1_PLAN.newPerDay ? `<div class="c1-hint">Nouvelles cartes : ${npd}/jour, ${C1_PLAN.newPerDay} conseillé. <button class="c1-link" onclick="c1SetNpd()">Régler à ${C1_PLAN.newPerDay}</button></div>` : '';
    html = `<div class="c1-wrap">
      <div class="c1-top"><span class="c1-t">🇬🇧 Objectif C1 · avril 2027</span><span class="c1-w">${w < 0 ? 'Démarre lundi 16 nov.' : 'Semaine ' + (wi + 1) + '/' + total}</span></div>
      <div class="c1-phase">${P.icon} ${P.name}</div>
      <div class="c1-focus">${W.focus}</div>
      ${W.milestone ? `<div class="c1-mile">⭐ ${W.milestone}</div>` : ''}
      <div class="c1-tasks">${tasks}</div>
      <div class="c1-row"><button class="c1-btn" onclick="c1CopyPrompt()">📋 Copier le sujet de conversation</button><button class="c1-btn ghost" onclick="c1OpenPlan()">📅 Programme</button></div>
      <div class="c1-row c1-meta"><span class="c1-days">${days}</span><span class="c1-mat"><span class="c1-bar"><b style="width:${pct}%"></b></span>${st.mature}/${W.mature} mots acquis</span></div>
      ${npdWarn}
    </div>`;
  }
  slots.forEach(el => el.innerHTML = html);
}
function c1Toggle(id) { const log = c1Log()[c1Day()] || {}; c1Mark(id, !log[id]); if(!log[id]) try { showToast('✅ Bien joué !', 'correct-toast'); } catch(e) {} c1Render(); }
function c1SetNpd() { localStorage.setItem('srs_new_per_day', String(C1_PLAN.newPerDay)); try { showToast('Nouvelles cartes : ' + C1_PLAN.newPerDay + ' par jour'); } catch(e) {} c1Render(); }
function c1CopyPrompt() {
  const W = C1_PLAN.weeks[Math.min(C1_PLAN.weeks.length - 1, Math.max(0, c1WeekIndex()))];
  const txt = C1_PLAN.geminiPrompt.replace('{topic}', W.topic).replace('{focus}', W.focus);
  const done = () => { try { showToast('📋 Copié : colle-le dans ChatGPT ou Gemini'); } catch(e) {} };
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, () => prompt('Copie ce texte :', txt));
  else prompt('Copie ce texte :', txt);
}
function c1OpenPlan() {
  const w = c1WeekIndex();
  const d0 = new Date(C1_PLAN.start + 'T00:00:00');
  let h = `<div class="cm-t">🇬🇧 Programme C1 · avril 2027</div><div class="cm-s">24 semaines, environ 1 h 15 par jour : ${C1_PLAN.daily.map(t => t.min + ' min').join(' + ')}.</div>`;
  C1_PLAN.phases.forEach(P => {
    h += `<div class="c1-ph"><b>${P.icon} ${P.name}</b> · semaines ${P.from}–${P.to}<div>${P.goal}</div></div>`;
    for(let i = P.from - 1; i < P.to; i++) { const W = C1_PLAN.weeks[i], d = new Date(d0); d.setDate(d.getDate() + i * 7);
      h += `<div class="c1-wk${i === w ? ' cur' : ''}${i < w ? ' past' : ''}"><span>S${i + 1} · ${d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span><div><b>${W.focus}</b><br><i>🗣️ ${W.topic}</i>${W.milestone ? `<br>⭐ ${W.milestone}` : ''}</div></div>`; }
  });
  h += `<button class="gbtn" style="width:100%;margin-top:1rem" onclick="crsCloseModal()">Fermer</button>`;
  crsModal(h);
}
