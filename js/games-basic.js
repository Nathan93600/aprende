// ¡Aprende! — js/games-basic.js : Jeux de base : flashcards, QCM, frappe, vitesse, survie, résultats
// ═══════════════════════════════════════════════
// FLASHCARD
// ═══════════════════════════════════════════════
function initFlashcard() {
  gameState = { cards: shuffle(DATA), idx: 0, correct: 0, flipped: false };
  showScreen('screen-flashcard');
  renderFlashcard();
}

function renderFlashcard() {
  const {cards, idx} = gameState;
  const card = cards[idx];
  document.getElementById('fc-lang-front').textContent = '🇪🇸 Espagnol';
  document.getElementById('fc-lang-back').textContent = '🇫🇷 Français';
  document.getElementById('fc-es').textContent = card.es;
  document.getElementById('fc-fr').innerHTML = card.fr + cardExampleHTML('es', card);
  document.getElementById('fc-counter').textContent = `${idx+1}/${cards.length}`;
  setProgress('fc-progress', idx, cards.length);
  document.getElementById('flip-inner').classList.remove('flipped');
  document.getElementById('fc-nav').style.display = 'none';
  document.getElementById('fc-ai-area').innerHTML = '';
  gameState.flipped = false;
}

function flipCard() {
  if(!gameState.flipped) {
    document.getElementById('flip-inner').classList.add('flipped');
    document.getElementById('fc-nav').style.display = 'flex';
    gameState.flipped = true;
  }
}

function fcRate(knew) {
  const card = gameState.cards[gameState.idx];
  if(knew) {
    gameState.correct++;
    addXP(10);
    showToast('✅ +10 XP', 'correct-toast');
    if(!state.mastered.includes(card.es)) { state.mastered.push(card.es); saveState(); }
  } else {
    showToast('😅 À retravailler', 'wrong-toast');
    getAITip(card, 'fc-ai-area');
  }
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('flashcard', gameState.correct, gameState.cards.length, []);
  } else { renderFlashcard(); }
}

// ═══════════════════════════════════════════════
// QCM
// ═══════════════════════════════════════════════
function initQCM() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, streak: 0, mistakes: [] };
  showScreen('screen-qcm');
  renderQCM();
}

function renderQCM() {
  const {cards, idx} = gameState;
  const card = cards[idx];
  document.getElementById('qcm-word').textContent = card.es;
  document.getElementById('qcm-hint').textContent = '';
  setProgress('qcm-progress', idx, cards.length);

  // Build 4 options
  const others = shuffle(DATA.filter(w => w.es !== card.es)).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('qcm-options');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkQCM(btn, opt, card, opts));
    cont.appendChild(btn);
  });
  document.getElementById('qcm-ai-area').innerHTML = '';
  document.getElementById('qcm-score').textContent = gameState.score + ' pts';
  document.getElementById('qcm-streak').textContent = gameState.streak;
}

function checkQCM(btn, chosen, correct, opts) {
  const btns = document.querySelectorAll('#qcm-options .option-btn');
  btns.forEach(b => b.disabled = true);
  if(chosen.es === correct.es) {
    btn.classList.add('correct');
    gameState.streak++;
    const bonus = Math.min(gameState.streak, 5) * 10;
    gameState.score += bonus;
    addXP(bonus);
    showToast(`✅ +${bonus} pts${gameState.streak>1?' (x'+gameState.streak+')':''}`, 'correct-toast');
    document.getElementById('qcm-score').textContent = gameState.score + ' pts';
    document.getElementById('qcm-streak').textContent = gameState.streak;
    setTimeout(nextQCM, 800);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    gameState.streak = 0;
    gameState.mistakes.push(correct);
    document.getElementById('qcm-streak').textContent = '0';
    showToast(`❌ ${correct.es} = ${correct.fr}`, 'wrong-toast');
    getAITip(correct, 'qcm-ai-area');
    setTimeout(nextQCM, 2200);
  }
}

function nextQCM() {
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('qcm', gameState.score, gameState.cards.length * 50, gameState.mistakes);
  } else { renderQCM(); }
}

// ═══════════════════════════════════════════════
// TYPING
// ═══════════════════════════════════════════════
function initTyping() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, mistakes: [] };
  showScreen('screen-typing');
  document.getElementById('type-skip-btn').onclick = typeSkip;
  document.getElementById('type-check-btn').onclick = typeCheck;
  document.getElementById('type-input').onkeydown = e => { if(e.key==='Enter') typeCheck(); };
  renderTyping();
}

function renderTyping() {
  const card = gameState.cards[gameState.idx];
  document.getElementById('type-word').textContent = card.fr;
  const inp = document.getElementById('type-input');
  inp.value = '';
  inp.className = 'type-input';
  inp.focus();
  setProgress('type-progress', gameState.idx, gameState.cards.length);
  document.getElementById('type-score').textContent = gameState.score + ' pts';
  document.getElementById('type-ai-area').innerHTML = '';
}

function typeCheck() {
  const card = gameState.cards[gameState.idx];
  const inp = document.getElementById('type-input');
  const val = inp.value;
  const correct = normalize(card.es);
  const attempt = normalize(val);
  if(!attempt) return;
  
  if(attempt === correct || levenshtein(attempt, correct) <= 1) {
    inp.classList.add('correct');
    gameState.score += 20;
    addXP(20);
    showToast('✅ +20 XP', 'correct-toast');
    setTimeout(nextTyping, 700);
  } else {
    inp.classList.add('wrong');
    gameState.mistakes.push(card);
    showToast(`❌ → ${card.es}`, 'wrong-toast');
    getAITip(card, 'type-ai-area');
    setTimeout(nextTyping, 2500);
  }
}

function typeSkip() {
  const card = gameState.cards[gameState.idx];
  gameState.mistakes.push(card);
  showToast(`⏭️ ${card.es}`, '');
  nextTyping();
}

function nextTyping() {
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('typing', gameState.score, gameState.cards.length * 20, gameState.mistakes);
  } else { renderTyping(); }
}

function levenshtein(a,b){
  const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

// ═══════════════════════════════════════════════
// CONJUGATION (AI-POWERED)
// ═══════════════════════════════════════════════
function initConjugation() {
  const sel = document.getElementById('conj-verb-select');
  sel.innerHTML = '';
  // All verbs + some from vocab that look like verbs
  const allVerbs = DATA.filter(w => {
    const base = w.es.toLowerCase().trim().split(' ')[0];
    return /ar$|er$|ir$/.test(base) && w.es.length < 18;
  });
  allVerbs.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.es;
    opt.textContent = v.es + ' (' + v.fr + ')';
    sel.appendChild(opt);
  });
  showScreen('screen-conjugation');
}

async function loadConjugation() {
  const verb = document.getElementById('conj-verb-select').value;
  const tense = document.getElementById('conj-tense-select').value;
  const content = document.getElementById('conj-content');
  content.innerHTML = '<div class="ai-loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:.5rem;font-size:.9rem">Claude génère la conjugaison…</span></div>';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Conjugue le verbe espagnol "${verb}" au ${tense}. 
Réponds UNIQUEMENT en JSON valide, sans markdown, sans explication, exactement ce format :
{
  "verb": "${verb}",
  "tense": "${tense}",
  "forms": [
    {"pronoun":"yo","form":"..."},
    {"pronoun":"tú","form":"..."},
    {"pronoun":"él/ella/Ud.","form":"..."},
    {"pronoun":"nosotros","form":"..."},
    {"pronoun":"vosotros","form":"..."},
    {"pronoun":"ellos/ellas/Uds.","form":"..."}
  ],
  "note": "une note courte sur ce temps ou ce verbe (irrégularités, usage, etc.) en français"
}`
        }]
      })
    });
    const data = await res.json();
    const raw = data.content[0].text.trim().replace(/```json|```/g,'').trim();
    const conj = JSON.parse(raw);
    renderConjGame(conj);
  } catch(e) {
    content.innerHTML = '<div style="color:var(--error)">Erreur de génération. Vérifie ta connexion.</div>';
  }
}

function renderConjGame(conj) {
  const content = document.getElementById('conj-content');
  // Hide 3 random forms, user must fill them
  const hidden = shuffle([0,1,2,3,4,5]).slice(0,3);
  
  let html = `
    <div class="conj-tense-badge">${conj.tense}</div>
    <div style="font-family:'Unbounded',sans-serif;font-size:1.3rem;margin-bottom:1.2rem">${conj.verb}</div>
    <table class="conj-table">
      <thead><tr><th>Pronom</th><th>Forme</th></tr></thead>
      <tbody>
  `;
  conj.forms.forEach((f, i) => {
    if(hidden.includes(i)) {
      html += `<tr><td>${f.pronoun}</td><td><input class="conj-input" data-answer="${f.form}" data-idx="${i}" placeholder="?" autocomplete="off" spellcheck="false"></td></tr>`;
    } else {
      html += `<tr><td>${f.pronoun}</td><td style="font-weight:500;color:var(--accent3)">${f.form}</td></tr>`;
    }
  });
  html += `</tbody></table>`;
  if(conj.note) html += `<div style="font-size:.82rem;color:var(--muted);font-style:italic;margin-top:.5rem">💡 ${conj.note}</div>`;
  html += `<div class="btn-row" style="margin-top:1rem"><button class="btn btn-primary" onclick="checkConj()">Vérifier</button></div>`;
  html += `<div id="conj-feedback" style="margin-top:.8rem"></div>`;
  
  content.innerHTML = html;
  
  // Enter key support
  content.querySelectorAll('.conj-input').forEach(inp => {
    inp.addEventListener('keydown', e => { if(e.key==='Enter') checkConj(); });
  });
}

function checkConj() {
  const inputs = document.querySelectorAll('.conj-input');
  let correct = 0;
  inputs.forEach(inp => {
    const answer = normalize(inp.dataset.answer);
    const attempt = normalize(inp.value);
    if(attempt === answer || levenshtein(attempt,answer) <= 1) {
      inp.classList.remove('wrong'); inp.classList.add('correct');
      inp.value = inp.dataset.answer;
      correct++;
    } else {
      inp.classList.remove('correct'); inp.classList.add('wrong');
    }
  });
  const fb = document.getElementById('conj-feedback');
  if(correct === inputs.length) {
    addXP(30);
    fb.innerHTML = '<div style="color:var(--success);font-weight:500">🎉 Parfait ! +30 XP</div>';
    document.getElementById('conj-score').textContent = state.xp + ' XP';
  } else {
    fb.innerHTML = `<div style="color:var(--error)">${correct}/${inputs.length} corrects. Corrige les rouges !</div>`;
  }
}

// ═══════════════════════════════════════════════
// SPEED MODE
// ═══════════════════════════════════════════════
let speedTimer = null;
let speedTimeLeft = 15;

function initSpeed() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0 };
  showScreen('screen-speed');
  renderSpeed();
  document.getElementById('speed-input').addEventListener('keydown', e => { if(e.key==='Enter') speedCheck(); });
}

function renderSpeed() {
  const card = gameState.cards[gameState.idx];
  document.getElementById('speed-word').textContent = card.fr;
  const inp = document.getElementById('speed-input');
  inp.value = ''; inp.className = 'type-input'; inp.focus();
  setProgress('speed-progress', gameState.idx, gameState.cards.length);
  document.getElementById('speed-score').textContent = gameState.score + ' pts';
  startSpeedTimer();
}

function startSpeedTimer() {
  clearInterval(speedTimer);
  speedTimeLeft = 15;
  const fill = document.getElementById('speed-timer');
  fill.style.width = '100%';
  speedTimer = setInterval(() => {
    speedTimeLeft -= .1;
    fill.style.width = (speedTimeLeft / 15 * 100) + '%';
    if(speedTimeLeft <= 0) {
      clearInterval(speedTimer);
      const card = gameState.cards[gameState.idx];
      showToast(`⏰ ${card.es}`, 'wrong-toast');
      gameState.idx++;
      if(gameState.idx >= gameState.cards.length) {
        showResults('speed', gameState.score, gameState.cards.length * 30, []);
      } else { renderSpeed(); }
    }
  }, 100);
}

function speedCheck() {
  const card = gameState.cards[gameState.idx];
  const inp = document.getElementById('speed-input');
  const attempt = normalize(inp.value);
  if(!attempt) return;
  clearInterval(speedTimer);
  const correct = normalize(card.es);
  const timeBonus = Math.round(speedTimeLeft / 15 * 20);
  if(attempt === correct || levenshtein(attempt, correct) <= 1) {
    const pts = 10 + timeBonus;
    gameState.score += pts;
    addXP(pts);
    showToast(`⚡ +${pts} pts`, 'correct-toast');
  } else {
    showToast(`❌ ${card.es}`, 'wrong-toast');
  }
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('speed', gameState.score, gameState.cards.length * 30, []);
  } else { setTimeout(renderSpeed, 500); }
}

function stopSpeed() { clearInterval(speedTimer); }

// ═══════════════════════════════════════════════
// SURVIVAL
// ═══════════════════════════════════════════════
function initSurvival() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, lives: 3 };
  showScreen('screen-survival');
  renderSurvival();
}

function renderSurvival() {
  const {cards, idx, lives} = gameState;
  const card = cards[idx % cards.length];
  document.getElementById('survival-word').textContent = card.es;
  document.getElementById('survival-score').textContent = gameState.score;
  document.getElementById('survival-lives').textContent = '❤️'.repeat(lives) + '🖤'.repeat(3-lives);
  setProgress('speed-progress', idx, 30);

  const others = shuffle(DATA.filter(w => w.es !== card.es)).slice(0, 3);
  const opts = shuffle([card, ...others]);
  const cont = document.getElementById('survival-options');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkSurvival(btn, opt, card));
    cont.appendChild(btn);
  });
}

function checkSurvival(btn, chosen, correct) {
  const btns = document.querySelectorAll('#survival-options .option-btn');
  btns.forEach(b => b.disabled = true);
  if(chosen.es === correct.es) {
    btn.classList.add('correct');
    gameState.score += 10;
    addXP(10);
    showToast(`✅ +10`, 'correct-toast');
    setTimeout(() => { gameState.idx++; renderSurvival(); }, 600);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    gameState.lives--;
    document.getElementById('survival-lives').textContent = '❤️'.repeat(gameState.lives) + '🖤'.repeat(3-gameState.lives);
    showToast(`💔 ${correct.es} = ${correct.fr}`, 'wrong-toast');
    if(gameState.lives <= 0) {
      setTimeout(() => showResults('survival', gameState.score, 999, []), 1500);
    } else {
      setTimeout(() => { gameState.idx++; renderSurvival(); }, 1500);
    }
  }
}

// ═══════════════════════════════════════════════
// AI TIP
// ═══════════════════════════════════════════════
async function getAITip(card, areaId) {
  const area = document.getElementById(areaId);
  if(!area) return;
  area.innerHTML = `
    <div class="ai-bubble">
      <div class="ai-badge">✨ Claude</div>
      <div class="ai-loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:.5rem">Astuce…</span></div>
    </div>`;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Le mot espagnol "${card.es}" signifie "${card.fr}" en français. 
Donne-moi en 2-3 phrases : une astuce mnémotechnique ORIGINALE pour retenir ce mot, un exemple de phrase courte en espagnol avec sa traduction, et si c'est un verbe, sa conjugaison au présent pour yo/tú. Sois concis, utile et engageant. Réponds en français.`
        }]
      })
    });
    const data = await res.json();
    const text = data.content[0].text;
    area.innerHTML = `<div class="ai-bubble"><div class="ai-badge">✨ Claude</div>${text}</div>`;
  } catch(e) {
    area.innerHTML = '';
  }
}

// ═══════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════
function showResults(game, score, maxScore, mistakes) {
  stopSpeed();
  const pct = Math.round(Math.min(score/maxScore, 1)*100);
  const correct = Math.round(pct/100 * (mistakes.length + Math.round(pct/100*20)));
  
  document.getElementById('result-ring').style.setProperty('--pct', pct+'%');
  document.getElementById('result-pct').textContent = pct+'%';
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = mistakes.length;
  document.getElementById('res-xp').textContent = '+' + score;

  // Trigger celebration based on score
  setTimeout(() => { try { celebrate(pct); } catch(e) {} }, 300);

  const emojis = pct >= 80 ? '🏆' : pct >= 60 ? '💪' : '📚';
  const titles = pct >= 80 ? 'Excellent !' : pct >= 60 ? 'Bien joué !' : 'Continue comme ça !';
  document.getElementById('result-emoji').textContent = emojis;
  document.getElementById('result-title').textContent = titles;

  if(mistakes.length > 0) {
    const sec = document.getElementById('mistakes-section');
    sec.style.display = 'block';
    const list = document.getElementById('mistakes-list');
    list.innerHTML = mistakes.map(m => `
      <div class="mistake-row">
        <span class="mistake-es">${m.es}</span>
        <span class="mistake-fr">${m.fr}</span>
      </div>`).join('');
  } else {
    document.getElementById('mistakes-section').style.display = 'none';
  }

  document.getElementById('result-replay-btn').onclick = () => {
    if(game === 'shuffle') openShuffle(shufState.lang);
    else startGame(game);
  };
  showScreen('screen-results');
}
