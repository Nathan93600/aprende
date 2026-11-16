// ¡Aprende! — js/leech.js : Atelier des cartes difficiles (les plus ratées), astuce d'abord puis test
// ═══════════════════════════════════════════════
// ATELIER CARTES DIFFICILES
// ═══════════════════════════════════════════════
// Entraînement libre : il ne change pas le calendrier des cartes (ni srs_data ni l'historique).
const LZ_MIN_LAPSES = 2, LZ_SIZE = 8;
let lz = null;
// Les cartes les plus ratées d'une langue : sangsues d'abord, puis par nombre d'oublis
function lzList(lang) {
  const data = srsLoad(), out = [];
  for(const k in data) {
    if(!k.startsWith(lang + ':')) continue;
    const c = data[k]; if(!c.reps || !(c.leech || (c.lapses || 0) >= LZ_MIN_LAPSES)) continue;
    out.push({ key: k, word: k.slice(lang.length + 1), lapses: c.lapses || 0, leech: !!c.leech, fr: c.fr || '' });
  }
  return out.sort((a, b) => (b.leech - a.leech) || (b.lapses - a.lapses) || (a.word < b.word ? -1 : 1));
}
function lzUpdateBtn() {
  const b = document.getElementById('srs-leech-btn'); if(!b) return;
  const n = srsState.sessionFilter ? 0 : lzList(srsState.lang).length;
  b.style.display = n ? '' : 'none';
  if(n) b.innerHTML = `🩸 ${n} carte${n > 1 ? 's' : ''} difficile${n > 1 ? 's' : ''} · ouvrir l'atelier`;
}
function lzOpen(lang, words) {
  let items = lzList(lang);
  if(words) items = items.filter(x => words.includes(x.word));
  items = items.slice(0, LZ_SIZE).map(x => { const d = srsGetCardData(lang, x.word) || {}; return { ...x, fr: d.fr || x.fr || '?', data: d }; });
  if(!items.length) { try { showToast('Aucune carte difficile pour l\'instant 🎉', 'correct-toast'); } catch(e) {} return; }
  lz = { lang, items, i: 0, phase: 'study', ok: [], ko: [], verdict: null };
  lzRender();
  document.getElementById('crs-modal').classList.add('show');
}
function lzSpeak() { try { crsSpeak(lz.lang, lz.items[lz.i].word); } catch(e) {} }
function lzType(ch) { const i = document.getElementById('lz-inp'); if(!i) return; i.value += ch; i.focus(); }
function lzTest() { lz.phase = 'test'; lz.verdict = null; lzRender(); setTimeout(() => { const i = document.getElementById('lz-inp'); if(i) i.focus(); }, 120); }
function lzCheck(reveal) {
  const inp = document.getElementById('lz-inp'), typed = inp ? inp.value.trim() : '';
  if(!typed && !reveal) { if(inp) inp.focus(); return; }
  const it = lz.items[lz.i];
  lz.typed = typed;
  lz.verdict = typed ? xcJudgeWord(typed, it.word, lz.lang) : 'self';
  lz.phase = 'answer';
  if(lz.verdict !== 'self') (lz.verdict === 'ok' || lz.verdict === 'near' ? lz.ok : lz.ko).push(it.word);
  lzRender(); lzSpeak();
}
function lzMark(ok) { (ok ? lz.ok : lz.ko).push(lz.items[lz.i].word); lzNext(); }
function lzNext() { lz.i++; lz.phase = lz.i >= lz.items.length ? 'done' : 'study'; lz.verdict = null; lzRender(); }
function lzRender() {
  const box = document.getElementById('crs-modal-box'); if(!box || !lz) return;
  const esc = crsEsc, n = lz.items.length;
  const head = sub => `<div class="lz-top"><b>🩸 Cartes difficiles</b><span>${sub}</span><button type="button" class="pw-x" onclick="crsCloseModal()" aria-label="Fermer">✕</button></div>`;
  if(lz.phase === 'done') {
    const ko = [...new Set(lz.ko)]; lz.redo = ko;
    box.innerHTML = `<div class="lz">${head('Terminé')}
      <div class="lz-score"><div style="--c:var(--mint)"><b>${new Set(lz.ok).size}</b><span>retrouvée${new Set(lz.ok).size > 1 ? 's' : ''}</span></div><div style="--c:var(--coral)"><b>${ko.length}</b><span>à revoir</span></div></div>
      ${ko.length ? `<div class="pw-list-h"><span>À revoir</span></div>${ko.map(w => `<div class="pw-item"><div><b>${esc(w)}</b><small>${esc((lz.items.find(x => x.word === w) || {}).fr || '')}</small></div></div>`).join('')}
        <button type="button" class="gbtn" style="width:100%;margin-top:.8rem" onclick="lzOpen(lz.lang, lz.redo)">Refaire ces ${ko.length} carte${ko.length > 1 ? 's' : ''}</button>` : '<div class="pw-msg ok">Toutes retrouvées. Elles reviendront dans Réviser à leur date habituelle.</div>'}
      <button type="button" class="gbtn ghost" style="width:100%;margin-top:.5rem" onclick="crsCloseModal()">Fermer</button>
      <p class="pw-foot">Cet atelier est un entraînement libre : il ne change pas le calendrier de tes cartes.</p></div>`;
    box.scrollTop = 0; return;
  }
  const it = lz.items[lz.i], f = typeof ficheFind === 'function' ? ficheFind(lz.lang, it.word) : null, fb = (f && f.fb) || {};
  const sub = `${lz.i + 1}/${n} · ratée ${it.lapses} fois`;
  const l = typeof xcListen === 'function' ? xcListen(lz.lang, it.data) : null;
  let exText = '', exFr = '';
  if(lz.lang === 'es') { const e = (typeof ES_EXAMPLES !== 'undefined' && ES_EXAMPLES[it.word]) || null; if(e) { exText = e[0]; exFr = e[1] || ''; } }
  else if(lz.lang === 'ln') { exText = it.data.ex_ln || ''; exFr = it.data.ex_fr || ''; }
  else if(l && l.text !== it.word) exText = l.text;
  const spk = CRS_META[lz.lang] && CRS_META[lz.lang].tts ? '<button type="button" class="spk" onclick="lzSpeak()" aria-label="Écouter">🔊</button>' : '';
  const study = `<div class="lz-tip"><b>💡 Pour retenir</b>${fb.tip ? esc(fb.tip) : 'Pas encore d\'astuce pour ce mot : invente une image ou une phrase qui te parle, à voix haute.'}</div>
      <div class="lz-word">${esc(it.word)} ${spk}</div><div class="lz-fr">${esc(it.fr)}</div>
      ${exText ? `<div class="gw"><div><div class="gw-e">« ${esc(exText)} »${exFr ? '<br>' + esc(exFr) : ''}</div></div></div>` : ''}
      ${(fb.err || []).length ? `<div class="pw-list-h"><span>⚠️ Pièges</span></div>${fb.err.slice(0, 3).map(e => `<div class="gw"><div><div class="gw-w" style="text-decoration:line-through;opacity:.75">${esc(String(e[0]).replace(/^\*/, ''))}</div><div class="gw-f">${esc(e[1] || '')}</div></div></div>`).join('')}` : ''}`;
  if(lz.phase === 'study') {
    box.innerHTML = `<div class="lz">${head(sub)}${study}<button type="button" class="gbtn" style="width:100%;margin-top:.9rem" onclick="lzTest()">Je l'ai, teste-moi</button></div>`;
  } else if(lz.phase === 'test') {
    box.innerHTML = `<div class="lz">${head(sub)}<div class="xc-label">Comment dit-on…</div><div class="lz-word">${esc(it.fr)}</div>
      <input type="text" id="lz-inp" class="pw-inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Tape-le, ou dis-le à voix haute">
      ${lz.lang === 'es' ? `<div class="conj-keys" style="margin:.6rem 0">${['á', 'é', 'í', 'ó', 'ú', 'ñ'].map(ch => `<button type="button" onclick="lzType('${ch}')">${ch}</button>`).join('')}</div>` : ''}
      <div class="xc-btns" style="margin-top:.7rem"><button type="button" class="pw-add" onclick="lzCheck()">Vérifier</button><button type="button" class="pw-add lz-ghost" onclick="lzCheck(true)">Révéler</button></div></div>`;
    document.getElementById('lz-inp').addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); lzCheck(); } });
  } else {
    const v = lz.verdict, good = v === 'ok' || v === 'near';
    const msg = v === 'self' ? '' : `<div class="pw-msg ${good ? 'ok' : 'dup'}">${v === 'ok' ? '✅ Juste' : v === 'near' ? '✅ À une lettre près' : v === 'accent' ? 'Presque : l\'accent compte' : '❌ Pas tout à fait'}${v !== 'ok' ? ` · tu as écrit « ${esc(lz.typed)} »` : ''}</div>`;
    box.innerHTML = `<div class="lz">${head(sub)}${msg}${study}
      ${v === 'self' ? `<div class="xc-btns" style="margin-top:.9rem"><button type="button" class="pw-add" onclick="lzMark(true)">Je l'avais</button><button type="button" class="pw-add lz-ghost" onclick="lzMark(false)">Pas encore</button></div>`
        : `<button type="button" class="gbtn" style="width:100%;margin-top:.9rem" onclick="lzNext()">${lz.i + 1 >= n ? 'Voir le bilan' : 'Suivante'}</button>`}</div>`;
  }
  box.scrollTop = 0;
}
