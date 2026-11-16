// ¡Aprende! — js/pending.js : Mots notés dans l'appli (« + mot »), en attente du prochain « génère »
// ═══════════════════════════════════════════════
// MOTS EN ATTENTE
// ═══════════════════════════════════════════════
// La liste vit dans localStorage (« pending_words ») : [{ w: mot, l: 'es'|'en'|'ln'|'fr', c: contexte, t: date }].
// Elle part dans la sauvegarde (bouton « génère »), où tools/genere.js la relit. « fr » = mot français à traduire
// vers l'espagnol et l'anglais. Un mot déjà présent dans l'appli est refusé tout de suite, hors connexion.
const PW_LANGS = [['es', '🇪🇸', 'Espagnol'], ['en', '🇬🇧', 'Anglais'], ['ln', '🇨🇩', 'Lingala'], ['fr', '🇫🇷', 'Français → les deux']];
let pwLang = null, pwMsg = '';

function pwLoad() { try { const a = JSON.parse(localStorage.getItem('pending_words') || '[]'); return Array.isArray(a) ? a.filter(x => x && typeof x.w === 'string') : []; } catch(e) { return []; } }
function pwSave(list) { try { localStorage.setItem('pending_words', JSON.stringify(list)); } catch(e) { console.warn('[Aprende] mots en attente non sauvegardés', e); } pwBadge(); }
function pwNorm(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\[[^\]]*\]|\([^)]*\)/g, ' ')
    .replace(/^(to|the|a|an|el|la|los|las|un|una|ko)\s+/, '').replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();
}
// Mots déjà dans l'appli (paquet, parcours, journal, fiches), par langue
let _pwKnown = null;
function pwKnownMap(lang) {
  if(!_pwKnown) _pwKnown = {};
  if(_pwKnown[lang]) return _pwKnown[lang];
  const m = new Map(), add = w => { if(typeof w !== 'string') return; const n = pwNorm(w); if(n && !m.has(n)) m.set(n, w); };
  try { getDeckForLang(lang).forEach(c => add(c[lang])); } catch(e) {}
  try { (COURSES[lang].units || []).forEach(u => (u.w || []).forEach(w => add(w[0]))); } catch(e) {}
  try { JOURNAL_SESSIONS.forEach(s => (s[lang] || (lang === 'es' ? s.mots : null) || []).forEach(x => add(x[0]))); } catch(e) {}
  try { Object.keys((CRS_FB && CRS_FB[lang]) || {}).forEach(add); } catch(e) {}
  return (_pwKnown[lang] = m);
}
function pwKnown(lang, word) { return lang === 'fr' ? null : (pwKnownMap(lang).get(pwNorm(word)) || null); }

// Ajoute un mot. Renvoie { ok } ou { dup: 'app' | 'list', word }.
function pwAdd(word, lang, ctx) {
  const w = String(word || '').replace(/\s+/g, ' ').trim();
  if(!w) return { empty: true };
  const known = pwKnown(lang, w);
  if(known) return { dup: 'app', word: known };
  const list = pwLoad(), n = pwNorm(w);
  if(list.some(x => x.l === lang && pwNorm(x.w) === n)) return { dup: 'list', word: w };
  const item = { w, l: lang, t: Date.now() }, c = String(ctx || '').replace(/\s+/g, ' ').trim();
  if(c) item.c = c.slice(0, 200);
  list.push(item); pwSave(list);
  return { ok: true };
}
function pwRemove(t) { pwSave(pwLoad().filter(x => x.t !== t)); pwRender(); }
// Les mots arrivés dans l'appli depuis (après un « génère ») quittent la liste d'eux-mêmes
function pwClean() {
  const list = pwLoad(), keep = list.filter(x => !pwKnown(x.l, x.w));
  if(keep.length !== list.length) pwSave(keep);
  return list.length - keep.length;
}
function pwText() {
  const list = pwLoad();
  return PW_LANGS.map(([l, flag, name]) => { const it = list.filter(x => x.l === l); return it.length ? `${flag} ${name} (${it.length})\n` + it.map(x => `- ${x.w}${x.c ? ' — ' + x.c : ''}`).join('\n') : ''; }).filter(Boolean).join('\n\n');
}
function pwCopy() {
  const txt = pwText(); if(!txt) return;
  const done = () => showToast('📋 Liste copiée', 'correct-toast');
  if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done).catch(() => showToast('Copie impossible sur cet appareil', 'wrong-toast'));
  else showToast('Copie impossible sur cet appareil', 'wrong-toast');
}

function pwBadge() {
  const b = document.getElementById('pw-fab-n'); if(!b) return;
  const n = pwLoad().length; b.textContent = n; b.style.display = n ? '' : 'none';
}
function pwOpen() {
  if(!pwLang) pwLang = ['es', 'en', 'ln'].includes(currentLang) ? currentLang : 'es';
  pwMsg = '';
  try { pwClean(); } catch(e) {}
  pwRender();
  document.getElementById('crs-modal').classList.add('show');
  setTimeout(() => { const i = document.getElementById('pw-word'); if(i) i.focus(); }, 150);
}
function pwSetLang(l) { pwLang = l; const w = document.getElementById('pw-word'), c = document.getElementById('pw-ctx'), keep = [w && w.value, c && c.value]; pwMsg = ''; pwRender(); document.getElementById('pw-word').value = keep[0] || ''; document.getElementById('pw-ctx').value = keep[1] || ''; document.getElementById('pw-word').focus(); }
function pwSubmit() {
  const w = document.getElementById('pw-word'), c = document.getElementById('pw-ctx');
  const r = pwAdd(w.value, pwLang, c.value), esc = crsEsc;
  if(r.empty) { w.focus(); return; }
  if(r.ok) { pwMsg = `<div class="pw-msg ok">✅ « ${esc(w.value.trim())} » est noté.</div>`; try { haptic('light'); } catch(e) {} pwRender(); }
  else {
    const fiche = r.dup === 'app' && typeof ficheFind === 'function' && ficheFind(pwLang, r.word);
    pwMsg = r.dup === 'app'
      ? `<div class="pw-msg dup">Tu as déjà « ${esc(r.word)} » dans l'appli.${fiche ? ` <button type="button" onclick="openFiche('${pwLang}', this.dataset.w)" data-w="${esc(r.word)}">Voir la fiche</button>` : ''}</div>`
      : `<div class="pw-msg dup">« ${esc(r.word)} » est déjà dans ta liste.</div>`;
    const kept = c.value; pwRender(); document.getElementById('pw-ctx').value = kept;
  }
  const i = document.getElementById('pw-word'); if(i) i.focus();
}
function pwRender() {
  const box = document.getElementById('crs-modal-box'); if(!box) return;
  const list = pwLoad(), esc = crsEsc;
  const groups = PW_LANGS.map(([l, flag, name]) => { const it = list.filter(x => x.l === l); return it.length ? `<div class="pw-group"><div class="pw-gh">${flag} ${name} <span>${it.length}</span></div>${it.map(x => `<div class="pw-item"><div><b>${esc(x.w)}</b>${x.c ? `<small>${esc(x.c)}</small>` : ''}</div><button type="button" onclick="pwRemove(${x.t})" aria-label="Retirer ${esc(x.w)}">✕</button></div>`).join('')}</div>` : ''; }).join('');
  box.innerHTML = `<div class="pw-sheet">
    <div class="pw-head"><h3>📝 Noter un mot</h3><button type="button" class="pw-x" onclick="crsCloseModal()" aria-label="Fermer">✕</button></div>
    <div class="pw-langs">${PW_LANGS.map(([l, flag, name]) => `<button type="button" class="${pwLang === l ? 'on' : ''}" onclick="pwSetLang('${l}')" aria-pressed="${pwLang === l}">${flag} ${name}</button>`).join('')}</div>
    <input type="text" id="pw-word" class="pw-inp" placeholder="${pwLang === 'fr' ? 'Mot ou expression en français' : 'Mot ou expression'}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done">
    <input type="text" id="pw-ctx" class="pw-inp small" placeholder="Où tu l'as vu, la phrase… (facultatif)" autocomplete="off">
    <button type="button" class="pw-add" onclick="pwSubmit()">Ajouter</button>
    ${pwMsg}
    <div class="pw-list-h"><span>En attente · ${list.length}</span>${list.length ? '<button type="button" onclick="pwCopy()">📋 Copier la liste</button>' : ''}</div>
    ${groups || '<div class="pw-empty">Aucun mot noté pour l\'instant.</div>'}
    <p class="pw-foot">Ces mots partent avec ta sauvegarde du vendredi (bouton « génère »). Ils quittent la liste dès qu'ils sont dans l'appli.</p>
  </div>`;
  ['pw-word', 'pw-ctx'].forEach(id => document.getElementById(id).addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); pwSubmit(); } }));
}

// Le bouton flottant n'apparaît que sur Parcours et Jeux (ailleurs il gênerait les boutons de réponse)
const pwOrigShowScreen = showScreen;
showScreen = function(id) {
  pwOrigShowScreen(id);
  const fab = document.getElementById('pw-fab');
  if(fab) fab.classList.toggle('show', ['screen-path', 'home', 'home-en', 'home-ln'].includes(id));
};
document.addEventListener('DOMContentLoaded', () => { try { pwBadge(); } catch(e) {} });
