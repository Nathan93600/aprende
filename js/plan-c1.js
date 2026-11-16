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
      <div class="c1-row"><button class="c1-btn" onclick="c1GeminiMenu()">🎙️ Gemini : vocal</button><button class="c1-btn" onclick="c1CopyPrompt('chat')">💬 ChatGPT : conversation</button></div>
      <div class="c1-row"><button class="c1-btn ghost" onclick="orOpen()">📥 Importer le rapport</button><button class="c1-btn ghost" onclick="c1OpenPlan()">📅 Programme</button></div>
      <div class="c1-row c1-meta"><span class="c1-days">${days}</span><span class="c1-mat"><span class="c1-bar"><b style="width:${pct}%"></b></span>${st.mature}/${W.mature} mots acquis</span></div>
      ${npdWarn}
    </div>`;
  }
  slots.forEach(el => el.innerHTML = html);
}
function c1Toggle(id) { const log = c1Log()[c1Day()] || {}; c1Mark(id, !log[id]); if(!log[id]) try { showToast('✅ Bien joué !', 'correct-toast'); } catch(e) {} c1Render(); }
function c1SetNpd() { localStorage.setItem('srs_new_per_day', String(C1_PLAN.newPerDay)); try { showToast('Nouvelles cartes : ' + C1_PLAN.newPerDay + ' par jour'); } catch(e) {} c1Render(); }
// Consigne à coller : 'audio' = Gemini avec un enregistrement, 'chat' = ChatGPT en conversation
function c1PromptText(mode) {
  const W = C1_PLAN.weeks[Math.min(C1_PLAN.weeks.length - 1, Math.max(0, c1WeekIndex()))];
  const key = { audio: 'audioPrompt', free: 'freePrompt', read: 'readPrompt', chat: 'chatPrompt' }[mode] || 'chatPrompt';
  return C1_PLAN[key].replace('{topic}', W.topic).replace('{focus}', W.focus).replace('{format}', C1_PLAN.reportFormat).replace('{rules}', C1_PLAN.reportRules);
}
// Gemini : trois sortes de vocal, une consigne chacune (même format de rapport)
function c1GeminiMenu() {
  const W = C1_PLAN.weeks[Math.min(C1_PLAN.weeks.length - 1, Math.max(0, c1WeekIndex()))];
  const opt = (mode, icon, title, desc) => `<button type="button" class="c1g-opt" onclick="c1CopyPrompt('${mode}')"><span>${icon}</span><div><b>${title}</b><small>${desc}</small></div></button>`;
  crsModal(`<div class="pw-sheet"><div class="pw-head"><h3>🎙️ Vocal pour Gemini</h3><button type="button" class="pw-x" onclick="crsCloseModal()" aria-label="Fermer">✕</button></div>
    <p class="pw-foot" style="margin:0">Choisis ce que tu enregistres : la consigne est copiée, envoie-la à Gemini avec ton vocal.</p>
    ${opt('audio', '🎯', 'Thème de la semaine', crsEsc(W.topic))}
    ${opt('free', '💭', 'Vocal libre', 'Tu parles de ce que tu veux')}
    ${opt('read', '📖', 'Lecture d\'un texte', 'Colle le texte à la fin de la consigne si tu l\'as')}
    <p class="pw-foot">Les trois demandent le même rapport : tu l'importes ensuite avec « 📥 Importer le rapport ».</p></div>`);
}
function c1CopyPrompt(mode) {
  const txt = c1PromptText(mode);
  try { crsCloseModal(); } catch(e) {}
  const done = () => { try { showToast(mode === 'read' ? '📋 Copié : colle le texte lu à la fin, puis envoie avec ton enregistrement' : mode !== 'chat' ? '📋 Copié : envoie-le à Gemini avec ton enregistrement' : '📋 Copié : colle-le dans ChatGPT, puis écris RAPPORT à la fin'); } catch(e) {} };
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

// ── Suivi du programme pour le tableau de bord (anglais) ──
// Renvoie les chiffres ; c1DashHTML les met en forme. Tout vient des cartes, de l'historique et de c1_log.
function c1Progress(now) {
  if(typeof C1_PLAN === 'undefined') return null;
  now = now || Date.now();
  const DAY = 864e5, weeks = C1_PLAN.weeks, total = weeks.length, start = new Date(C1_PLAN.start + 'T00:00:00').getTime();
  const end = start + total * 7 * DAY, w = Math.floor((now - start) / DAY / 7), wi = Math.min(total - 1, Math.max(0, w));
  const target = weeks[total - 1].mature, weekTarget = w < 0 ? 0 : weeks[wi].mature;
  // cartes anglaises
  let mature = 0, pipeline = 0;
  const data = srsLoad();
  for(const k in data) { if(!k.startsWith('en:')) continue; const c = data[k]; if(!c.reps) continue; if((c.interval || 0) >= 21) mature++; else pipeline++; }
  // rythme : nouvelles cartes anglaises par jour sur les 14 derniers jours (première note de chaque carte)
  const since = now - 14 * DAY, intro = new Set();
  srsRevlogLoad().forEach(r => { if(r[1] >= since && r[3] === 0 && r[0].startsWith('en:')) intro.add(r[0]); });
  const pace = intro.size / 14;
  // estimation : les cartes déjà commencées deviennent acquises en 5 semaines environ ; le reste dépend du rythme
  const RIPEN = 35, missing = Math.max(0, target - mature), afterPipeline = Math.max(0, missing - pipeline);
  let eta = null;
  if(!missing) eta = now;
  else if(!afterPipeline) eta = now + RIPEN * DAY * Math.min(1, missing / Math.max(1, pipeline)) ;
  else if(pace > 0) eta = now + (afterPipeline / pace + RIPEN) * DAY;
  const lateWeeks = eta == null ? null : Math.round((eta - end) / DAY / 7);
  // unités du parcours anglais
  const U = (COURSES.en && COURSES.en.units) || []; let unitsDone = 0;
  U.forEach((u, i) => { if(crsDone('en', i) >= CRS_NODES) unitsDone++; });
  const weeksLeft = Math.max(1, total - Math.max(0, w));
  // régularité : semaine en cours et depuis le début
  const L = c1Log(), wkStart = start + wi * 7 * DAY, week = { done: 0, talk: 0, listen: 0 };
  for(let i = 0; i < 7; i++) { const d = L[c1Day(new Date(wkStart + i * DAY))]; if(d) { if(d.done) week.done++; if(d.talk) week.talk++; if(d.listen) week.listen++; } }
  let allDone = 0, talkMin = 0, listenMin = 0;
  const tMin = (C1_PLAN.daily.find(t => t.id === 'talk') || {}).min || 0, lMin = (C1_PLAN.daily.find(t => t.id === 'listen') || {}).min || 0;
  for(const k in L) { if(L[k].done) allDone++; if(L[k].talk) talkMin += tMin; if(L[k].listen) listenMin += lMin; }
  const elapsed = w < 0 ? 0 : Math.min(total * 7, Math.floor((now - start) / DAY) + 1);
  return { w, wi, total, started: w >= 0, finished: w >= total, phase: c1Phase(wi), focus: weeks[wi].focus, mature, pipeline, target, weekTarget, pace, eta, end, lateWeeks,
    unitsDone, unitsTotal: U.length, unitsPerWeek: Math.max(0, U.length - unitsDone) / weeksLeft, week, allDone, elapsed, talkMin, listenMin };
}
function c1DashHTML() {
  const p = c1Progress(); if(!p) return '';
  const fmt = t => new Date(t).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const pct = x => Math.max(0, Math.min(100, 100 * x / p.target));
  let verdict, cls;
  if(p.mature >= p.target) { verdict = 'Objectif de vocabulaire atteint'; cls = 'ok'; }
  else if(p.eta == null) { verdict = 'Aucune nouvelle carte depuis 14 jours : pas d\'estimation possible'; cls = 'late'; }
  else if(p.lateWeeks <= 0) { verdict = `À ce rythme : ${fmt(p.eta)}, dans les temps`; cls = 'ok'; }
  else { verdict = `À ce rythme : ${fmt(p.eta)}, soit ${p.lateWeeks} semaine${p.lateWeeks > 1 ? 's' : ''} après la fin du programme`; cls = p.lateWeeks > 4 ? 'late' : 'warn'; }
  const gap = p.mature - p.weekTarget;
  const here = !p.started ? 'Le programme démarre le ' + new Date(C1_PLAN.start + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
    : gap >= 0 ? `${gap} mot${gap > 1 ? 's' : ''} d'avance sur l'objectif de la semaine` : `${-gap} mot${-gap > 1 ? 's' : ''} de retard sur l'objectif de la semaine`;
  const need = p.pace > 0 && p.lateWeeks > 0 ? Math.ceil(Math.max(0, p.target - p.mature - p.pipeline) / Math.max(1, (p.end - Date.now()) / 864e5 - 35)) : 0;
  const row = (label, val, sub) => `<div class="c1d-cell"><b>${val}</b><span>${label}</span>${sub ? `<small>${sub}</small>` : ''}</div>`;
  return `<div class="stx-card c1d">
    <div class="stx-h">🇬🇧 Objectif C1 · avril 2027 <span class="stx-hsub">${p.finished ? 'Programme terminé' : p.started ? `Semaine ${p.wi + 1} sur ${p.total} · ${p.phase.icon} ${p.phase.name}` : 'Pas encore commencé'}</span></div>
    <div class="c1d-bar" role="img" aria-label="${p.mature} mots acquis sur ${p.target}">
      <i class="c1d-pipe" style="width:${pct(p.mature + p.pipeline)}%"></i><i class="c1d-mat" style="width:${pct(p.mature)}%"></i>
      ${p.started ? `<em style="left:${pct(p.weekTarget)}%" title="Objectif de la semaine : ${p.weekTarget}"></em>` : ''}
    </div>
    <div class="c1d-legend"><span><i class="c1d-mat"></i>${p.mature} mots acquis</span><span><i class="c1d-pipe"></i>${p.pipeline} en cours</span><span><i class="c1d-tick"></i>objectif semaine ${p.weekTarget}</span><span>cible ${p.target}</span></div>
    <div class="c1d-verdict ${cls}">${verdict}</div>
    <div class="c1d-note">Estimation : une carte commencée devient acquise en 5 semaines environ. ${here}.${need ? ` Pour finir à temps : environ ${need} nouvelles cartes par jour.` : ''}</div>
    <div class="c1d-grid">
      ${row('nouvelles cartes / jour', (Math.round(p.pace * 10) / 10).toLocaleString('fr-FR'), 'sur 14 jours · conseillé ' + C1_PLAN.newPerDay)}
      ${row('unités terminées', p.unitsDone + '/' + p.unitsTotal, p.unitsDone < p.unitsTotal ? (Math.round(p.unitsPerWeek * 10) / 10).toLocaleString('fr-FR') + ' par semaine pour finir' : 'parcours terminé')}
      ${row('jours complets', p.week.done + '/7', 'cette semaine · ' + p.allDone + ' sur ' + p.elapsed + ' depuis le début')}
      ${row('oral cette semaine', p.week.talk + ' + ' + p.week.listen, 'conversations + écoutes · ' + Math.round((p.talkMin + p.listenMin) / 60 * 10) / 10 + ' h au total')}
    </div>
    ${typeof orLastHTML === 'function' ? orLastHTML() : ''}
    <button class="c1-link" onclick="c1OpenPlan()">Voir le programme complet</button>
  </div>`;
}
