// ¡Aprende! — js/oral-reports.js : Import des rapports d'oral (Gemini sur enregistrement audio, ChatGPT en conversation)
// ═══════════════════════════════════════════════
// RAPPORTS D'ORAL
// ═══════════════════════════════════════════════
// Le rapport suit le format fixé par C1_PLAN.reportFormat (bloc « === RAPPORT APRENDE === »).
// orParse le lit ; les corrections et le vocabulaire choisis partent dans les mots en attente (pending_words),
// et le rapport est gardé dans « oral_reports » (joint à la sauvegarde du génère).
const OR_SECTIONS = { 'POINTS FORTS': 'strengths', 'ERREURS': 'errors', 'A DIRE PLUTOT': 'better', 'MOTS FRANCAIS': 'french', 'VOCABULAIRE': 'vocab', 'PRONONCIATION': 'pron', 'TEXTE CORRIGE': 'corrected', 'NON VERIFIE': 'unchecked' };
const OR_FIELDS = { DATE: 'date', THEME: 'theme', NIVEAU: 'level', PRIORITE: 'priority', DUREE: 'duration' };
let orState = null;

function orLoad() { try { const a = JSON.parse(localStorage.getItem('oral_reports') || '[]'); return Array.isArray(a) ? a : []; } catch(e) { return []; } }
function orSave(list) { try { localStorage.setItem('oral_reports', JSON.stringify(list.slice(-60))); } catch(e) { console.warn('[Aprende] rapport non sauvegardé', e); } }

function orParse(text) {
  const R = { date: '', theme: '', level: '', priority: '', duration: '', strengths: [], errors: [], better: [], french: [], vocab: [], pron: [], corrected: '', unchecked: [], found: 0 };
  const up = s => s.toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
  const empty = s => /^(aucun|aucune|none|rien|ras|n\/a|\.\.\.|…|-)?\.?$/i.test(s.trim());
  let cur = null;
  for(let raw of String(text || '').split(/\r?\n/)) {
    let line = raw.replace(/[*`#]/g, '').replace(/^\s*>\s*/, '').trim();
    if(!line || /^=+/.test(line)) continue;
    const m = line.match(/^([A-Za-zÀ-ÿ ]{4,16})\s*:\s*(.*)$/), key = m ? up(m[1]) : '';
    if(m && OR_FIELDS[key]) { R[OR_FIELDS[key]] = m[2].trim(); R.found++; cur = null; continue; }
    if(m && OR_SECTIONS[key]) { cur = OR_SECTIONS[key]; R.found++; line = m[2].trim(); if(!line) continue; }
    if(!cur) continue;
    line = line.replace(/^(([-•–]|\d+[.)])\s*)+/, '').trim();
    if(empty(line)) continue;
    if(cur === 'corrected') { R.corrected += (R.corrected ? ' ' : '') + line; continue; }
    if(cur === 'strengths' || cur === 'unchecked') { R[cur].push(line); continue; }
    const bar = line.split(/\s+\|\s+/), main = bar[0], note = bar.slice(1).join(' | ').trim();
    const sep = cur === 'vocab' ? /\s+=\s+|\s*=>\s*|\s*→\s*/ : cur === 'pron' ? /\s*:\s+|\s*=>\s*|\s*→\s*/ : /\s*=>\s*|\s*→\s*|\s*->\s*/;
    const parts = main.split(sep), a = (parts[0] || '').trim().replace(/^["«“]\s*|\s*["»”]$/g, ''), b = parts.slice(1).join(' ').trim().replace(/^["«“]\s*|\s*["»”]$/g, '');
    if(!a) continue;
    R[cur].push({ a, b, n: note });
  }
  if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(R.date)) { const p = R.date.split('/'); R.date = `${p[2]}-${p[1].padStart(2, '0')}-${p[0].padStart(2, '0')}`; }
  if(!/^\d{4}-\d{2}-\d{2}$/.test(R.date)) R.date = '';
  R.ok = R.found >= 3;
  return R;
}
// Ce qui peut partir dans les mots en attente : la bonne forme à retenir, avec d'où elle vient
function orItems(R) {
  const out = [], cut = s => s.length > 150 ? s.slice(0, 147) + '…' : s;
  R.better.forEach(x => { if(x.b) out.push({ w: x.b, c: cut(`Au lieu de « ${x.a} »${x.n ? ' · ' + x.n : ''}`), kind: 'Plus naturel', on: x.b.split(/\s+/).length <= 8 }); });   // une phrase entière (relecture) n'est pas cochée d'office
  R.french.forEach(x => { if(x.b) out.push({ w: x.b, c: cut(`${x.a}${x.n ? ' · ' + x.n : ''}`), kind: 'Mot qui manquait', on: true }); });
  R.vocab.forEach(x => out.push({ w: x.a, c: cut([x.b, x.n].filter(Boolean).join(' · ')), kind: 'Vocabulaire', on: true }));
  R.errors.forEach(x => { if(x.b) out.push({ w: x.b, c: cut(`Erreur : « ${x.a} »${x.n ? ' · ' + x.n : ''}`), kind: 'Correction', on: x.b.split(/\s+/).length <= 8 }); });
  return out;
}

function orOpen() {
  orState = { step: 'paste', lang: 'en', src: '', text: '', R: null, items: [] };
  orRender();
  document.getElementById('crs-modal').classList.add('show');
}
function orSet(k, v) { const t = document.getElementById('or-text'); if(t) orState.text = t.value; orState[k] = v; orRender(); }
function orPaste() {
  if(!(navigator.clipboard && navigator.clipboard.readText)) { showToast('Colle le texte à la main dans la zone', 'wrong-toast'); return; }
  navigator.clipboard.readText().then(t => { const el = document.getElementById('or-text'); if(el) el.value = t; }).catch(() => showToast('Colle le texte à la main dans la zone', 'wrong-toast'));
}
function orAnalyse() {
  const t = document.getElementById('or-text'); orState.text = t ? t.value : orState.text;
  if(!orState.text.trim()) { if(t) t.focus(); return; }
  orState.R = orParse(orState.text);
  orState.items = orItems(orState.R);
  orState.step = 'review'; orRender();
}
function orToggle(i) { orState.items[i].on = !orState.items[i].on; }
function orImport(keepOnly) {
  const R = orState.R || orParse(orState.text), day = R.date || c1Day();
  let added = 0, dup = 0;
  if(!keepOnly) orState.items.forEach(it => { if(!it.on) return; const r = pwAdd(it.w, orState.lang, it.c); if(r.ok) added++; else if(r.dup) dup++; });
  const list = orLoad();
  list.push({ d: day, t: Date.now(), src: orState.src, lang: orState.lang, theme: R.theme, level: R.level, priority: R.priority, strengths: R.strengths.slice(0, 8), pron: R.pron.slice(0, 8),
    n: { errors: R.errors.length, better: R.better.length, french: R.french.length, vocab: R.vocab.length }, added, raw: orState.text.slice(0, 8000),
    corrected: R.corrected || '' });
  orSave(list);
  // la conversation du jour est cochée dans le programme C1
  try { if(orState.lang === 'en') { const L = c1Log(); L[day] = L[day] || {}; L[day].talk = true; crsSetJ('c1_log', L); c1Render(); } } catch(e) {}
  if(typeof badgeSoon === 'function') badgeSoon();
  orState.step = 'done'; orState.added = added; orState.dup = dup; orRender();
  try { haptic('light'); } catch(e) {}
}
function orRender() {
  const box = document.getElementById('crs-modal-box'); if(!box || !orState) return;
  const esc = crsEsc, s = orState;
  const head = `<div class="pw-head"><h3>📥 Rapport d'oral</h3><button type="button" class="pw-x" onclick="crsCloseModal()" aria-label="Fermer">✕</button></div>`;
  if(s.step === 'paste') {
    box.innerHTML = `<div class="pw-sheet">${head}
      <div class="pw-langs">${[['en', '🇬🇧 Anglais'], ['es', '🇪🇸 Espagnol']].map(([l, n]) => `<button type="button" class="${s.lang === l ? 'on' : ''}" onclick="orSet('lang','${l}')">${n}</button>`).join('')}
        ${[['gemini', '🎙️ Gemini'], ['chatgpt', '💬 ChatGPT']].map(([l, n]) => `<button type="button" class="${s.src === l ? 'on' : ''}" onclick="orSet('src','${l}')">${n}</button>`).join('')}</div>
      <textarea id="or-text" class="pw-inp or-text" placeholder="Colle ici le rapport, de « === RAPPORT APRENDE === » à « === FIN === »" spellcheck="false">${esc(s.text)}</textarea>
      <div class="xc-btns"><button type="button" class="pw-add lz-ghost" onclick="orPaste()">📋 Coller</button><button type="button" class="pw-add" onclick="orAnalyse()">Analyser</button></div>
      <p class="pw-foot">Pour obtenir ce format : dans le programme C1, « 🎙️ Gemini » copie la consigne à envoyer avec ton enregistrement, « 💬 ChatGPT » lance la conversation (écris RAPPORT à la fin).</p></div>`;
    return;
  }
  if(s.step === 'done') {
    box.innerHTML = `<div class="pw-sheet">${head}<div class="pw-msg ok">✅ Rapport enregistré. ${s.added} élément${s.added > 1 ? 's' : ''} ajouté${s.added > 1 ? 's' : ''} à tes mots en attente${s.dup ? `, ${s.dup} déjà connu${s.dup > 1 ? 's' : ''} ou déjà noté${s.dup > 1 ? 's' : ''}` : ''}.</div>
      <p class="pw-foot">Il partira avec ta sauvegarde du vendredi (bouton « génère »).</p>
      <button type="button" class="pw-add" onclick="crsCloseModal()">Fermer</button></div>`;
    return;
  }
  const R = s.R;
  if(!R.ok) {
    box.innerHTML = `<div class="pw-sheet">${head}<div class="pw-msg dup">Je ne reconnais pas le format du rapport : les titres « ERREURS: », « VOCABULAIRE: »… sont introuvables.</div>
      <p class="pw-foot">Redemande le rapport avec la consigne copiée depuis le programme C1, ou garde ce texte tel quel : il sera joint à ta sauvegarde.</p>
      <div class="xc-btns"><button type="button" class="pw-add lz-ghost" onclick="orSet('step','paste')">← Corriger</button><button type="button" class="pw-add" onclick="orImport(true)">Garder le texte</button></div></div>`;
    return;
  }
  const meta = [R.date && new Date(R.date + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }), R.theme, R.level && 'niveau ' + R.level].filter(Boolean).map(esc).join(' · ');
  box.innerHTML = `<div class="pw-sheet">${head}
    ${meta ? `<div class="or-meta">${meta}</div>` : ''}
    ${R.priority ? `<div class="pw-msg dup">🎯 Priorité : ${esc(R.priority)}</div>` : ''}
    ${R.strengths.length ? `<div class="pw-list-h"><span>Points forts</span></div><ul class="or-ul">${R.strengths.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
    ${R.pron.length ? `<div class="pw-list-h"><span>Prononciation</span></div><ul class="or-ul">${R.pron.map(x => `<li><b>${esc(x.a)}</b>${x.b ? ' : ' + esc(x.b) : ''}${x.n ? ' · ' + esc(x.n) : ''}</li>`).join('')}</ul>` : ''}
    <div class="pw-list-h"><span>À retenir · ${s.items.length}</span></div>
    ${s.items.length ? s.items.map((it, i) => `<label class="or-item"><input type="checkbox" ${it.on ? 'checked' : ''} onchange="orToggle(${i})"><div><em>${it.kind}</em><b>${esc(it.w)}</b><small>${esc(it.c)}</small></div></label>`).join('') : '<div class="pw-empty">Rien à ajouter aux mots en attente dans ce rapport.</div>'}
    <div class="xc-btns" style="margin-top:.6rem"><button type="button" class="pw-add lz-ghost" onclick="orSet('step','paste')">← Retour</button><button type="button" class="pw-add" onclick="orImport()">Enregistrer</button></div>
    <p class="pw-foot">Les éléments cochés rejoignent tes mots en attente. Le rapport entier est gardé pour le génère.</p></div>`;
  box.scrollTop = 0;
}
// Dernier rapport, pour le tableau de bord
function orLastHTML() {
  const list = orLoad().filter(r => r.lang === 'en'); if(!list.length) return '';
  const r = list[list.length - 1], d = new Date(r.d + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  return `<div class="c1d-note"><b>Dernier rapport d'oral</b> · ${d}${r.level ? ' · niveau ' + crsEsc(r.level) : ''} · ${list.length} au total${r.priority ? '<br>🎯 ' + crsEsc(r.priority) : ''}</div>`;
}
// ═══════════════════════════════════════════════
// ÉCRAN « MES TEXTES ORAUX »
// ═══════════════════════════════════════════════
function openOralTexts() {
  showScreen('screen-oral-texts');
  const box = document.getElementById('oral-texts-list'); if(!box) return;
  const list = orLoad().filter(r => r.lang === 'en').reverse();
  if(!list.length) { box.innerHTML = '<div style="text-align:center;padding:3rem 1rem;color:var(--muted)"><div style="font-size:3rem;margin-bottom:.8rem">📝</div><p>Pas encore de rapport d\'oral.<br>Enregistre-toi et envoie l\'audio à Gemini avec le prompt du programme C1.</p></div>'; return; }
  const esc = typeof crsEsc === 'function' ? crsEsc : s => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  box.innerHTML = list.map((r, i) => {
    const d = r.d ? new Date(r.d + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '?';
    const hasCorr = r.corrected && r.corrected.trim();
    const idio = r.idiomatic || (typeof ORAL_IDIOMATIC !== 'undefined' && ORAL_IDIOMATIC[(r.d || '') + '|' + (r.theme || '')]) || '';
    const hasIdio = idio && idio.trim();
    const stats = [r.level && `niveau ${esc(r.level)}`, r.n && `${r.n.errors || 0} erreurs`, r.n && `${r.n.better || 0} tournures`].filter(Boolean).join(' · ');
    return `<details class="ot-card" ${i === 0 ? 'open' : ''}>
      <summary class="ot-sum">
        <span class="ot-date">${d}</span>
        <span class="ot-theme">${r.theme ? esc(r.theme) : 'Sans thème'}</span>
        <span class="ot-stats">${stats}</span>
      </summary>
      <div class="ot-body">
        ${hasCorr ? `<div class="ot-section"><div class="ot-label">✅ Texte corrigé <small>(Gemini)</small></div><div class="ot-text">${esc(r.corrected)}</div></div>` : hasIdio ? '' : '<div class="ot-section"><div class="ot-label dim">Pas de texte corrigé dans ce rapport</div></div>'}
        ${hasIdio ? `<div class="ot-section"><div class="ot-label">💎 Version idiomatique <small>(génère)</small></div><div class="ot-text idio">${idio}</div><div class="ot-label dim">En gras : les expressions de tes cartes. Lis-le à voix haute.</div></div>` : ''}
        ${r.priority ? `<div class="ot-section"><div class="ot-label">🎯 Priorité</div><div class="ot-text small">${esc(r.priority)}</div></div>` : ''}
        ${r.strengths && r.strengths.length ? `<div class="ot-section"><div class="ot-label">💪 Points forts</div><ul class="ot-ul">${r.strengths.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
      </div>
    </details>`;
  }).join('');
}
// badge count
function oralTextsBadge() {
  const el = document.getElementById('oral-texts-badge'); if(!el) return;
  const n = orLoad().filter(r => r.lang === 'en' && ((r.corrected && r.corrected.trim()) || (typeof ORAL_IDIOMATIC !== 'undefined' && ORAL_IDIOMATIC[(r.d || '') + '|' + (r.theme || '')]))).length;
  el.textContent = n ? `${n} texte${n > 1 ? 's' : ''}` : 'Lecture';
}
