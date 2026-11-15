// ¡Aprende! — js/sessions.js : Session rapide (mélange) et révision par jour
// ═══════════════════════════════════════════════
// SESSION RAPIDE (SHUFFLE)
// ═══════════════════════════════════════════════
let shufState = { lang:'es', count:15, mode:'flashcard', deck:[], idx:0, score:0, flipped:false };

const SHUF_FLAGS = { es:'🇪🇸 Espagnol', ln:'🇨🇩 Lingala', en:'🇬🇧 Anglais' };
const SHUF_COLORS = { es:'var(--accent)', ln:'var(--success)', en:'#4cc9f0' };

function openShuffle(lang) {
  shufState.lang = lang;
  currentLang = lang;
  shufState.count = 15;
  shufState.mode = 'flashcard';
  const titles = { es:'🔀 Session rapide — 🇪🇸', ln:'🔀 Session rapide — 🇨🇩', en:'🔀 Session rapide — 🇬🇧' };
  document.getElementById('shuffle-title').textContent = titles[lang];
  document.getElementById('shuffle-subtitle').textContent = `Entraîne-toi sur un sous-deck aléatoire en ${SHUF_FLAGS[lang]}.`;

  // Reset buttons
  document.querySelectorAll('[id^="shuf-n"]').forEach(b=>b.classList.remove('active'));
  document.getElementById('shuf-n15').classList.add('active');
  document.querySelectorAll('[id^="shuf-m"]').forEach(b=>b.classList.remove('active'));
  document.getElementById('shuf-mfc').classList.add('active');

  updateShufInfo();
  document.getElementById('shuffle-setup').style.display='block';
  document.getElementById('shuffle-fc').style.display='none';
  document.getElementById('shuffle-qcm').style.display='none';
  document.getElementById('shuffle-frappe').style.display='none';
  document.getElementById('shuffle-survie').style.display='none';
  document.getElementById('shuffle-vitesse').style.display='none';
  document.getElementById('shuffle-score').textContent='0 pts';
  showScreen('screen-shuffle');
}

function getDeckForLang(lang) {
  if(lang==='es') return DATA;
  if(lang==='ln') return LINGALA;
  if(lang==='en') return ENGLISH;
  return DATA;
}

function updateShufInfo() {
  const total = getDeckForLang(shufState.lang).length;
  const n = shufState.count === 0 ? total : Math.min(shufState.count, total);
  document.getElementById('shuffle-deck-info').textContent = `${n} mots sur ${total} au total`;
}

function setShufCount(n, btn) {
  shufState.count = n;
  document.querySelectorAll('[id^="shuf-n"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateShufInfo();
}

function setShufMode(mode, btn) {
  shufState.mode = mode;
  document.querySelectorAll('[id^="shuf-m"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function startShuffle() {
  const fullDeck = getDeckForLang(shufState.lang);
  const n = shufState.count === 0 ? fullDeck.length : Math.min(shufState.count, fullDeck.length);
  shufState.deck = shuffle([...fullDeck]).slice(0, n);
  shufState.idx = 0;
  shufState.score = 0;
  shufState.flipped = false;
  document.getElementById('shuffle-setup').style.display='none';
  document.getElementById('shuffle-score').textContent='0 pts';

  if(shufState.mode === 'blitz') {
    // Reuse blitz but with filtered deck
    blitzState = { cards: shufState.deck, idx:0, score:0, streak:0, timer:null, timeLeft:60 };
    showScreen('screen-blitz');
    document.getElementById('blitz-score').textContent='0';
    document.getElementById('blitz-streak-display').textContent='🔥 0';
    renderBlitz();
    blitzState.timer = setInterval(()=>{
      blitzState.timeLeft -= .1;
      document.getElementById('blitz-timer-fill').style.width=(blitzState.timeLeft/60*100)+'%';
      document.getElementById('blitz-timer').textContent=Math.ceil(blitzState.timeLeft);
      if(blitzState.timeLeft<=0){ clearInterval(blitzState.timer); showResults('blitz',blitzState.score,999,[]); }
    },100);
  } else if(shufState.mode === 'flashcard') {
    document.getElementById('shuffle-fc').style.display='block';
    renderShufFC();
  } else if(shufState.mode === 'qcm') {
    document.getElementById('shuffle-qcm').style.display='block';
    renderShufQCM();
  } else if(shufState.mode === 'frappe') {
    document.getElementById('shuffle-frappe').style.display='block';
    renderShufFrappe();
  } else if(shufState.mode === 'survie') {
    shufState.lives = 3; shufState.streak = 0;
    document.getElementById('shuffle-survie').style.display='block';
    renderShufSurvie();
  } else if(shufState.mode === 'vitesse') {
    shufState.viTimer = null;
    document.getElementById('shuffle-vitesse').style.display='block';
    renderShufVitesse();
  }
}

// ── Shuffle Flashcard ──
function getWord(card, lang) {
  if(lang==='es') return { front: card.es, back: card.fr };
  if(lang==='ln') return { front: card.ln, back: card.fr };
  if(lang==='en') return { front: card.en, back: card.fr };
  return { front: card.es, back: card.fr };
}

function renderShufFC() {
  shufState.flipped = false;
  const card = shufState.deck[shufState.idx];
  const { front, back } = getWord(card, shufState.lang);
  const color = SHUF_COLORS[shufState.lang];
  setProgress('shuf-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-word-front').textContent = front;
  document.getElementById('shuf-word-front').style.color = color;
  document.getElementById('shuf-word-back').textContent = back;
  document.getElementById('shuf-lang-label').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';
  document.getElementById('shuf-back-area').style.display = 'none';
  document.getElementById('shuf-tap-hint').style.display = 'block';
  document.getElementById('shuf-eval-btns').style.display = 'none';
}

function flipShufCard() {
  if(shufState.flipped) return;
  shufState.flipped = true;
  document.getElementById('shuf-back-area').style.display = 'block';
  document.getElementById('shuf-tap-hint').style.display = 'none';
  document.getElementById('shuf-eval-btns').style.display = 'flex';
}

function evalShuffle(known) {
  if(known) { shufState.score += 10; addXP(10); showToast('✓ +10 pts','correct-toast'); }
  else { showToast('✗','wrong-toast'); }
  document.getElementById('shuffle-score').textContent = shufState.score+' pts';
  shufState.idx++;
  if(shufState.idx >= shufState.deck.length) {
    showResults('shuffle', shufState.score, shufState.deck.length*10, []);
  } else renderShufFC();
}

// ── Shuffle QCM ──
function renderShufQCM() {
  const card = shufState.deck[shufState.idx];
  const { front } = getWord(card, shufState.lang);
  const color = SHUF_COLORS[shufState.lang];
  setProgress('shuf-qcm-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-qcm-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-qcm-word').textContent = front;
  document.getElementById('shuf-qcm-word').style.color = color;
  document.getElementById('shuffle-score').textContent = shufState.score+' pts';
  document.getElementById('shuf-qcm-fb').innerHTML='';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w=>{
    if(shufState.lang==='es') return w.es !== card.es;
    if(shufState.lang==='ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0,3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-qcm-opts');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn = document.createElement('button');
    btn.className='option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#shuf-qcm-opts .option-btn').forEach(b=>b.disabled=true);
      const isCorrect = shufState.lang==='es' ? opt.es===card.es : shufState.lang==='ln' ? opt.ln===card.ln : opt.en===card.en;
      if(isCorrect){
        btn.classList.add('correct');
        shufState.score+=15; addXP(15);
        showToast('✅ +15 pts','correct-toast');
      } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#shuf-qcm-opts .option-btn').forEach(b=>{ if(b.textContent===card.fr) b.classList.add('correct'); });
        showToast('❌','wrong-toast');
      }
      document.getElementById('shuffle-score').textContent=shufState.score+' pts';
      shufState.idx++;
      setTimeout(()=>{
        if(shufState.idx>=shufState.deck.length) showResults('shuffle',shufState.score,shufState.deck.length*15,[]);
        else renderShufQCM();
      },1400);
    });
    cont.appendChild(btn);
  });
}

// ── Shuffle Frappe ──
function renderShufFrappe() {
  const card = shufState.deck[shufState.idx];
  setProgress('shuf-fr-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-fr-lang').textContent = `🇫🇷 → ${SHUF_FLAGS[shufState.lang]}`;
  document.getElementById('shuf-fr-clue').textContent = card.fr;
  document.getElementById('shuf-fr-clue').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-fr-input').value = '';
  document.getElementById('shuf-fr-input').className = 'type-input';
  document.getElementById('shuf-fr-input').focus();
  document.getElementById('shuf-fr-feedback').innerHTML = '';
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';
}

function checkShufFrappe() {
  const card = shufState.deck[shufState.idx];
  const expected = shufState.lang === 'es' ? card.es : shufState.lang === 'ln' ? card.ln : card.en;
  const got = document.getElementById('shuf-fr-input').value.trim();
  const fb = document.getElementById('shuf-fr-feedback');
  const inp = document.getElementById('shuf-fr-input');
  if(normalize(got) === normalize(expected) || levenshtein(normalize(got), normalize(expected)) <= 1) {
    inp.className = 'type-input correct';
    fb.innerHTML = `<span style="color:var(--success)">✅ ${expected} ! +15 pts</span>`;
    shufState.score += 15; addXP(15);
    showToast('✅ +15 pts','correct-toast');
  } else {
    inp.className = 'type-input wrong';
    fb.innerHTML = `<span style="color:var(--error)">❌ C'était : <strong>${expected}</strong></span>`;
    showToast(`❌ ${expected}`,'wrong-toast');
  }
  shufState.idx++;
  setTimeout(()=>{
    if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*15, []);
    else renderShufFrappe();
  }, 1400);
}

// ── Shuffle Survie ──
function renderShufSurvie() {
  const card = shufState.deck[shufState.idx % shufState.deck.length];
  const { front } = getWord(card, shufState.lang);
  document.getElementById('shuf-su-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-su-word').textContent = front;
  document.getElementById('shuf-su-word').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-su-hearts').textContent = '❤️'.repeat(shufState.lives) + '🖤'.repeat(3 - shufState.lives);
  document.getElementById('shuf-su-streak').textContent = `🔥 Combo : ${shufState.streak}`;
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w => {
    if(shufState.lang === 'es') return w.es !== card.es;
    if(shufState.lang === 'ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-su-opts');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#shuf-su-opts .option-btn').forEach(b => b.disabled = true);
      const isCorrect = shufState.lang === 'es' ? opt.es === card.es : shufState.lang === 'ln' ? opt.ln === card.ln : opt.en === card.en;
      if(isCorrect) {
        btn.classList.add('correct');
        shufState.streak++;
        const pts = 10 + Math.min(shufState.streak, 10);
        shufState.score += pts; addXP(pts);
        showToast(`✅ +${pts}`,'correct-toast');
      } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#shuf-su-opts .option-btn').forEach(b => { if(b.textContent === card.fr) b.classList.add('correct'); });
        shufState.lives--;
        shufState.streak = 0;
        showToast('❌ -1 vie','wrong-toast');
      }
      shufState.idx++;
      setTimeout(() => {
        if(shufState.lives <= 0) showResults('shuffle', shufState.score, 999, []);
        else renderShufSurvie();
      }, 1000);
    });
    cont.appendChild(btn);
  });
}

// ── Shuffle Vitesse ──
function renderShufVitesse() {
  if(shufState.viTimer) { clearInterval(shufState.viTimer); shufState.viTimer = null; }
  const card = shufState.deck[shufState.idx];
  const { front } = getWord(card, shufState.lang);
  document.getElementById('shuf-vi-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-vi-word').textContent = front;
  document.getElementById('shuf-vi-word').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-vi-counter').textContent = `${shufState.idx+1}/${shufState.deck.length}`;
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w => {
    if(shufState.lang === 'es') return w.es !== card.es;
    if(shufState.lang === 'ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-vi-opts');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkShufVitesse(btn, opt, card));
    cont.appendChild(btn);
  });

  let time = 10;
  document.getElementById('shuf-vi-timer-fill').style.width = '100%';
  document.getElementById('shuf-vi-timer').textContent = '10s';
  shufState.viTimer = setInterval(() => {
    time -= 0.1;
    document.getElementById('shuf-vi-timer-fill').style.width = (time/10*100)+'%';
    document.getElementById('shuf-vi-timer').textContent = Math.max(0,time).toFixed(1)+'s';
    if(time <= 0) {
      clearInterval(shufState.viTimer);
      shufState.viTimer = null;
      showToast(`⏰ ${card.fr}`,'wrong-toast');
      shufState.idx++;
      setTimeout(() => {
        if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*20, []);
        else renderShufVitesse();
      }, 800);
    }
  }, 100);
}

function checkShufVitesse(btn, chosen, correct) {
  if(shufState.viTimer) { clearInterval(shufState.viTimer); shufState.viTimer = null; }
  document.querySelectorAll('#shuf-vi-opts .option-btn').forEach(b => b.disabled = true);
  const isCorrect = shufState.lang === 'es' ? chosen.es === correct.es : shufState.lang === 'ln' ? chosen.ln === correct.ln : chosen.en === correct.en;
  if(isCorrect) {
    btn.classList.add('correct');
    shufState.score += 20; addXP(20);
    showToast('✅ +20','correct-toast');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#shuf-vi-opts .option-btn').forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    showToast('❌','wrong-toast');
  }
  shufState.idx++;
  setTimeout(() => {
    if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*20, []);
    else renderShufVitesse();
  }, 800);
}

// ═══════════════════════════════════════════════
// RÉVISION PAR JOUR (réutilise les modes shuffle)
// ═══════════════════════════════════════════════
let bydayState = { lang: 'es', mode: 'flashcard', sessionIdx: -1 };

function openByDay(lang) {
  bydayState.lang = lang;
  currentLang = lang;
  bydayState.sessionIdx = -1;
  bydayState.mode = 'flashcard';
  const titles = { es: '📆 Par jour — 🇪🇸', ln: '📆 Par jour — 🇨🇩', en: '📆 Par jour — 🇬🇧' };
  document.getElementById('byday-title').textContent = titles[lang];

  // Filter sessions that have words in this language
  const sessions = JOURNAL_SESSIONS.map((s, idx) => {
    const mots = lang === 'es' ? (s.es || s.mots || [])
               : lang === 'ln' ? (s.ln || [])
               : lang === 'en' ? (s.en || [])
               : [];
    return { ...s, mots, idx };
  }).filter(s => s.mots.length > 0).reverse(); // most recent first

  const color = SHUF_COLORS[lang];
  const list = document.getElementById('byday-sessions-list');
  if(sessions.length === 0) {
    list.innerHTML = `<div style="color:var(--muted);text-align:center;padding:2rem">Aucune session avec des mots dans cette langue.</div>`;
  } else {
    list.innerHTML = sessions.map(s => `
      <button class="byday-session-btn" data-idx="${s.idx}" onclick="selectByDaySession(${s.idx})"
        style="background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01));
               border:1.5px solid rgba(255,255,255,.08);
               border-radius:14px;padding:1rem 1.2rem;cursor:pointer;
               display:flex;align-items:center;justify-content:space-between;gap:.8rem;
               transition:all .25s;text-align:left;color:var(--text);font-family:inherit;width:100%"
        onmouseover="this.style.borderColor='${color}';this.style.transform='translateX(4px)'"
        onmouseout="if(!this.classList.contains('selected')){this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateX(0)'}">
        <div>
          <div style="font-family:'Unbounded',sans-serif;font-size:.9rem;color:${color};margin-bottom:.2rem;display:flex;align-items:center;gap:.4rem">
            <span style="width:6px;height:6px;border-radius:50%;background:${color};box-shadow:0 0 8px ${color}"></span>
            ${s.date}
          </div>
          <div style="font-size:.72rem;color:var(--muted);letter-spacing:.05em">${s.label}</div>
        </div>
        <div style="background:${color};color:#fff;font-family:'Unbounded',sans-serif;font-size:.7rem;padding:.25rem .65rem;border-radius:999px;font-weight:700;flex-shrink:0">${s.mots.length} mots</div>
      </button>`).join('');
  }

  document.getElementById('byday-mode-area').style.display = 'none';
  document.getElementById('byday-score').textContent = '0 pts';
  document.getElementById('byday-setup').style.display = 'block';
  showScreen('screen-byday');
}

function selectByDaySession(idx) {
  bydayState.sessionIdx = idx;
  document.querySelectorAll('.byday-session-btn').forEach(b => {
    b.classList.remove('selected');
    b.style.borderColor = 'rgba(255,255,255,.08)';
    b.style.transform = 'translateX(0)';
  });
  const sel = document.querySelector(`.byday-session-btn[data-idx="${idx}"]`);
  if(sel) {
    const color = SHUF_COLORS[bydayState.lang];
    sel.classList.add('selected');
    sel.style.borderColor = color;
    sel.style.transform = 'translateX(4px)';
    sel.style.boxShadow = `0 0 20px -8px ${color}`;
  }
  document.getElementById('byday-mode-area').style.display = 'block';
}

function setBydayMode(mode, btn) {
  bydayState.mode = mode;
  document.querySelectorAll('[id^="bd-m"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Helper: get the deck of words for the currently selected session/language
function getBydayDeck() {
  if(bydayState.sessionIdx < 0) return null;
  const session = JOURNAL_SESSIONS[bydayState.sessionIdx];
  const lang = bydayState.lang;
  const journalMots = lang === 'es' ? (session.es || session.mots || [])
                    : lang === 'ln' ? (session.ln || [])
                    : (session.en || []);

  const fullDeck = getDeckForLang(lang);
  const deck = [];
  journalMots.forEach(([word, fr]) => {
    const cleanWord = word.split('/')[0].trim().toLowerCase();
    const found = fullDeck.find(c => {
      if(!c) return false;
      const w = (lang === 'es' ? c.es : lang === 'ln' ? c.ln : c.en);
      if(!w) return false;
      const wl = w.toLowerCase();
      return wl === cleanWord || wl.startsWith(cleanWord) || cleanWord.startsWith(wl);
    });
    if(found) deck.push(found);
    else deck.push({
      [lang]: word,
      es: lang === 'es' ? word : '',
      ln: lang === 'ln' ? word : '',
      en: lang === 'en' ? word : '',
      fr: fr
    });
  });
  return { deck, session, lang };
}

// Add all session words to the SRS store
function addByDayToSRS() {
  const info = getBydayDeck();
  if(!info) { showToast('Choisis une session','wrong-toast'); return; }
  const { deck, session, lang } = info;
  const srsData = srsLoad();
  let added = 0, alreadyIn = 0;
  deck.forEach(card => {
    const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
    if(!word) return;
    const k = srsKey(lang, word);
    if(!srsData[k]) {
      srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' };
      added++;
    } else alreadyIn++;
  });
  srsSave(srsData);
  if(added > 0) {
    showToast(`✨ +${added} carte${added>1?'s':''} ajoutée${added>1?'s':''} au SRS`, 'correct-toast');
    haptic('success');
    confetti('small');
  } else {
    showToast(`Déjà ${alreadyIn} carte${alreadyIn>1?'s':''} dans le SRS`, 'correct-toast');
  }
}

function startByday() {
  const info = getBydayDeck();
  if(!info) { showToast('Choisis une session','wrong-toast'); return; }
  const { deck, session, lang } = info;

  if(deck.length === 0) { showToast('Aucun mot trouvé pour cette session','wrong-toast'); return; }

  // ── SRS mode: filter global SRS on this session's words ──
  if(bydayState.mode === 'srs') {
    // First, ensure all session words are in the SRS store
    const srsData = srsLoad();
    let added = 0;
    const sessionKeys = new Set();
    deck.forEach(card => {
      const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
      if(!word) return;
      const k = srsKey(lang, word);
      sessionKeys.add(k);
      if(!srsData[k]) {
        srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' };
        added++;
      }
    });
    srsSave(srsData);
    // Launch SRS in session-filter mode
    srsState.lang = lang;
    currentLang = lang;
    srsState.sessionFilter = sessionKeys; // Set of allowed keys
    srsState.sessionFilterLabel = session.date;
    const titles = { es: `🧠 SRS 📆 ${session.date} — 🇪🇸`, ln: `🧠 SRS 📆 ${session.date} — 🇨🇩`, en: `🧠 SRS 📆 ${session.date} — 🇬🇧` };
    document.getElementById('srs-title').textContent = titles[lang];
    const toggle = document.getElementById('srs-sim-toggle');
    if(toggle) toggle.checked = srsState.simMode;
    if(added > 0) {
      setTimeout(() => showToast(`✨ +${added} nouvelle${added>1?'s':''} carte${added>1?'s':''}`, 'correct-toast'), 400);
    }
    showScreen('screen-srs');
    srsRefresh();
    return;
  }

  // Inject into shufState and dispatch to the right mode
  shufState.lang = lang;
  shufState.mode = bydayState.mode;
  shufState.deck = shuffle(deck);
  shufState.idx = 0;
  shufState.score = 0;
  shufState.flipped = false;
  document.getElementById('byday-setup').style.display = 'none';
  document.getElementById('shuffle-score').textContent = '0 pts';

  if(bydayState.mode === 'blitz') {
    blitzState = { cards: shufState.deck, idx: 0, score: 0, streak: 0, timer: null, timeLeft: 60 };
    showScreen('screen-blitz');
    document.getElementById('blitz-score').textContent = '0';
    document.getElementById('blitz-streak-display').textContent = '🔥 0';
    renderBlitz();
    blitzState.timer = setInterval(() => {
      blitzState.timeLeft -= .1;
      document.getElementById('blitz-timer-fill').style.width = (blitzState.timeLeft/60*100) + '%';
      document.getElementById('blitz-timer').textContent = Math.ceil(blitzState.timeLeft);
      if(blitzState.timeLeft <= 0) { clearInterval(blitzState.timer); showResults('byday', blitzState.score, 999, []); }
    }, 100);
    return;
  }

  // Reset shuffle screens and show right one
  document.getElementById('shuffle-fc').style.display = 'none';
  document.getElementById('shuffle-qcm').style.display = 'none';
  document.getElementById('shuffle-frappe').style.display = 'none';
  document.getElementById('shuffle-survie').style.display = 'none';
  document.getElementById('shuffle-vitesse').style.display = 'none';
  document.getElementById('shuffle-setup').style.display = 'none';
  showScreen('screen-shuffle');
  document.getElementById('shuffle-title').textContent = `📆 ${session.date} — ${SHUF_FLAGS[lang]}`;

  if(bydayState.mode === 'flashcard') {
    document.getElementById('shuffle-fc').style.display = 'block';
    renderShufFC();
  } else if(bydayState.mode === 'qcm') {
    document.getElementById('shuffle-qcm').style.display = 'block';
    renderShufQCM();
  } else if(bydayState.mode === 'frappe') {
    document.getElementById('shuffle-frappe').style.display = 'block';
    renderShufFrappe();
  } else if(bydayState.mode === 'survie') {
    shufState.lives = 3; shufState.streak = 0;
    document.getElementById('shuffle-survie').style.display = 'block';
    renderShufSurvie();
  } else if(bydayState.mode === 'vitesse') {
    shufState.viTimer = null;
    document.getElementById('shuffle-vitesse').style.display = 'block';
    renderShufVitesse();
  }
}
