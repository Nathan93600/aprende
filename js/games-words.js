// ¡Aprende! — js/games-words.js : Jeux de mots : Wordle, anagramme, Qui suis-je, Blitz, chaîne de mots
// ═══════════════════════════════════════════════
// WORDLE ESPAGNOL
// ═══════════════════════════════════════════════
let wrdState = {};
const WRD_ROWS = 6;

function initWordle() {
  // Pick a word 4-8 letters, no spaces
  const pool = DATA.filter(w => w.es.length >= 4 && w.es.length <= 8 && !w.es.includes(' ') && !w.es.includes('/'));
  const target = pool[Math.floor(Math.random()*pool.length)];
  wrdState = { target: target.es.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ñ/g,'n'), targetDisplay: target.es, fr: target.fr, guesses:[], currentRow:0, currentGuess:'', done:false, score:0 };
  showScreen('screen-wordle');
  document.getElementById('wrd-fr-hint').textContent = `🇫🇷 ${target.fr}`;
  document.getElementById('wrd-score').textContent = '0 pts';
  document.getElementById('wrd-msg').textContent = '';
  buildWordleGrid();
  buildWordleKeyboard();
}

function buildWordleGrid() {
  const len = wrdState.target.length;
  const grid = document.getElementById('wrd-grid');
  grid.innerHTML = '';
  for(let r=0;r<WRD_ROWS;r++) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:.3rem';
    row.id = `wrd-row-${r}`;
    for(let c=0;c<len;c++) {
      const cell = document.createElement('div');
      cell.id = `wrd-cell-${r}-${c}`;
      cell.style.cssText = `width:${Math.min(52, Math.floor(320/len))}px;height:${Math.min(52,Math.floor(320/len))}px;border:2px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:${len>6?'1rem':'1.2rem'};font-weight:700;transition:all .2s;text-transform:uppercase`;
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function buildWordleKeyboard() {
  const rows = [['a','z','e','r','t','y','u','i','o','p'],['q','s','d','f','g','h','j','k','l','m'],['⌫','w','x','c','v','b','n','↵']];
  const kb = document.getElementById('wrd-keyboard');
  kb.innerHTML = '';
  rows.forEach(row => {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:.3rem';
    row.forEach(k => {
      const btn = document.createElement('button');
      btn.id = `wrd-key-${k}`;
      const isSpecial = k==='⌫'||k==='↵';
      btn.style.cssText = `background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:${isSpecial?'.6rem .9rem':'.6rem .7rem'};font-family:'DM Sans',sans-serif;font-size:${isSpecial?'.8rem':'.85rem'};cursor:pointer;transition:all .15s;min-width:${isSpecial?'40px':'32px'}`;
      btn.textContent = k.toUpperCase();
      btn.addEventListener('click', () => wrdInput(k));
      div.appendChild(btn);
    });
    kb.appendChild(div);
  });
}

function wrdInput(k) {
  if(wrdState.done) return;
  const len = wrdState.target.length;
  if(k==='⌫') { wrdState.currentGuess = wrdState.currentGuess.slice(0,-1); }
  else if(k==='↵') { wrdSubmit(); return; }
  else if(wrdState.currentGuess.length < len) { wrdState.currentGuess += k; }
  // Update current row display
  const row = wrdState.currentRow;
  for(let c=0;c<len;c++) {
    const cell = document.getElementById(`wrd-cell-${row}-${c}`);
    cell.textContent = (wrdState.currentGuess[c]||'').toUpperCase();
    cell.style.borderColor = wrdState.currentGuess[c] ? 'var(--accent)' : 'var(--border)';
  }
}

function wrdSubmit() {
  const guess = wrdState.currentGuess;
  const target = wrdState.target;
  if(guess.length !== target.length) { document.getElementById('wrd-msg').textContent='Mot incomplet !'; return; }
  const row = wrdState.currentRow;
  const colors = Array(target.length).fill('gray');
  const used = Array(target.length).fill(false);
  // Green pass
  for(let i=0;i<target.length;i++) if(guess[i]===target[i]) { colors[i]='green'; used[i]=true; }
  // Yellow pass
  for(let i=0;i<target.length;i++) {
    if(colors[i]==='green') continue;
    for(let j=0;j<target.length;j++) {
      if(!used[j] && guess[i]===target[j]) { colors[i]='yellow'; used[j]=true; break; }
    }
  }
  const colorMap = {green:'#22c55e',yellow:'#eab308',gray:'var(--surface2)'};
  for(let c=0;c<target.length;c++) {
    const cell = document.getElementById(`wrd-cell-${row}-${c}`);
    setTimeout(()=>{
      cell.style.background = colorMap[colors[c]];
      cell.style.borderColor = colorMap[colors[c]];
      cell.style.color = colors[c]==='gray'?'var(--muted)':'#fff';
      cell.style.transform = 'scale(1.1)';
      setTimeout(()=>cell.style.transform='scale(1)',150);
    }, c*80);
  }
  // Update keyboard
  guess.split('').forEach((l,i)=>{
    const btn = document.getElementById(`wrd-key-${l}`);
    if(!btn) return;
    const cur = btn.dataset.state;
    if(cur==='green') return;
    if(colors[i]==='green') { btn.style.background='#22c55e'; btn.style.color='#fff'; btn.dataset.state='green'; }
    else if(colors[i]==='yellow' && cur!=='green') { btn.style.background='#eab308'; btn.style.color='#fff'; btn.dataset.state='yellow'; }
    else if(!cur) { btn.style.background='#374151'; btn.style.color='#9ca3af'; btn.dataset.state='gray'; }
  });

  wrdState.guesses.push(guess);
  wrdState.currentRow++;
  wrdState.currentGuess='';

  setTimeout(()=>{
    if(guess===target) {
      const pts = (WRD_ROWS-row)*20;
      wrdState.score+=pts; addXP(pts);
      document.getElementById('wrd-score').textContent=wrdState.score+' pts';
      document.getElementById('wrd-msg').innerHTML=`<span style="color:var(--success)">🎉 ${wrdState.targetDisplay} ! +${pts} pts</span>`;
      wrdState.done=true;
      setTimeout(()=>{ if(confirm('Nouvelle partie ?')) initWordle(); else goHome(); },1500);
    } else if(wrdState.currentRow>=WRD_ROWS) {
      document.getElementById('wrd-msg').innerHTML=`<span style="color:var(--error)">❌ C'était : <strong>${wrdState.targetDisplay}</strong> (${wrdState.fr})</span>`;
      wrdState.done=true;
      setTimeout(()=>{ if(confirm('Rejouer ?')) initWordle(); else goHome(); },2000);
    }
  },target.length*80+200);
}

// ═══════════════════════════════════════════════
// ANAGRAMME TAP
// ═══════════════════════════════════════════════
let anaState = { cards:[], idx:0, score:0, answer:[], remaining:[], timeLeft:15, timer:null };

function initAnagramme() {
  const pool = DATA.filter(w=>w.es.length>=3&&w.es.length<=10&&!w.es.includes(' ')&&!w.es.includes('/'));
  anaState = { cards:shuffle(pool), idx:0, score:0, answer:[], remaining:[], timeLeft:15, timer:null };
  showScreen('screen-anagramme');
  renderAnagramme();
}

function renderAnagramme() {
  clearInterval(anaState.timer);
  const card = anaState.cards[anaState.idx % anaState.cards.length];
  const letters = shuffle(card.es.split(''));
  anaState.answer=[];
  anaState.remaining=[...letters];
  anaState.timeLeft=15;
  document.getElementById('ana-fr').textContent=card.fr;
  document.getElementById('ana-feedback').innerHTML='';
  setProgress('ana-progress',anaState.idx,anaState.cards.length);
  document.getElementById('ana-score').textContent=anaState.score+' pts';
  renderAnaTiles();
  document.getElementById('ana-timer-fill').style.width='100%';
  anaState.timer=setInterval(()=>{
    anaState.timeLeft-=.1;
    document.getElementById('ana-timer-fill').style.width=(anaState.timeLeft/15*100)+'%';
    if(anaState.timeLeft<=0) { clearInterval(anaState.timer); anaFail(); }
  },100);
}

function renderAnaTiles() {
  // Answer row
  const ansRow=document.getElementById('ana-answer-row');
  ansRow.innerHTML=anaState.answer.map((l,i)=>`
    <div onclick="anaRemove(${i})" style="width:42px;height:42px;background:var(--accent);color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all .15s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${l.toUpperCase()}</div>`).join('');
  // Remaining tiles
  const tilesEl=document.getElementById('ana-tiles');
  tilesEl.innerHTML=anaState.remaining.map((l,i)=>l?`
    <div onclick="anaTap(${i})" style="width:42px;height:42px;background:var(--surface2);color:var(--text);border:1.5px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all .15s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${l.toUpperCase()}</div>`:'<div style="width:42px;height:42px"></div>').join('');
}

function anaTap(i) {
  const l=anaState.remaining[i];
  if(!l) return;
  anaState.answer.push(l);
  anaState.remaining[i]=null;
  renderAnaTiles();
}

function anaRemove(i) {
  const l=anaState.answer.splice(i,1)[0];
  const slot=anaState.remaining.indexOf(null);
  if(slot>=0) anaState.remaining[slot]=l; else anaState.remaining.push(l);
  renderAnaTiles();
}

function anaReset() {
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  anaState.remaining=shuffle(card.es.split(''));
  anaState.answer=[];
  renderAnaTiles();
}

function anaCheck() {
  clearInterval(anaState.timer);
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  const attempt=anaState.answer.join('').toLowerCase();
  const correct=card.es.toLowerCase();
  const fb=document.getElementById('ana-feedback');
  if(normalize(attempt)===normalize(correct)||levenshtein(normalize(attempt),normalize(correct))<=1) {
    const pts=Math.round(10+anaState.timeLeft*2);
    anaState.score+=pts; addXP(pts);
    fb.innerHTML=`<span style="color:var(--success)">✅ ${card.es} ! +${pts} pts</span>`;
    showToast(`✅ +${pts} pts`,'correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ C'était : <strong>${card.es}</strong></span>`;
    showToast(`❌ ${card.es}`,'wrong-toast');
  }
  anaState.idx++;
  setTimeout(()=>{
    if(anaState.idx>=anaState.cards.length) showResults('anagramme',anaState.score,anaState.cards.length*20,[]);
    else renderAnagramme();
  },1500);
}

function anaFail() {
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  document.getElementById('ana-feedback').innerHTML=`<span style="color:var(--error)">⏰ C'était : <strong>${card.es}</strong></span>`;
  anaState.idx++;
  setTimeout(()=>{
    if(anaState.idx>=anaState.cards.length) showResults('anagramme',anaState.score,anaState.cards.length*20,[]);
    else renderAnagramme();
  },1500);
}

// ═══════════════════════════════════════════════
// QUI SUIS-JE ?
// ═══════════════════════════════════════════════
const QSJ_THEMES_MAP = {};
Object.entries(MM_THEMES).forEach(([theme,words])=>words.forEach(w=>QSJ_THEMES_MAP[w.toLowerCase()]=theme));

let qsjState={cards:[],idx:0,score:0,shownHints:0};

function initQuiSuisJe() {
  qsjState={cards:shuffle(DATA),idx:0,score:0,shownHints:0};
  showScreen('screen-quisuisje');
  renderQSJ();
}

function renderQSJ() {
  const card=qsjState.cards[qsjState.idx];
  qsjState.shownHints=1;
  setProgress('qsj-progress',qsjState.idx,qsjState.cards.length);
  document.getElementById('qsj-score').textContent=qsjState.score+' pts';
  document.getElementById('qsj-feedback').innerHTML='';

  const theme=QSJ_THEMES_MAP[card.es.toLowerCase()]||'Vocabulaire';
  const hints=[
    {label:'Catégorie',value:theme,pts:40},
    {label:'Longueur',value:`${card.es.length} lettres`,pts:30},
    {label:'Commence par',value:`"${card.es[0].toUpperCase()}…"`,pts:20},
    {label:'Traduction proche',value:card.fr.split('/')[0].trim(),pts:10},
  ];

  const ptsDisplay=document.getElementById('qsj-points-display');
  ptsDisplay.innerHTML=hints.map((h,i)=>`
    <span style="background:${i<qsjState.shownHints?'var(--accent2)':'var(--surface)'};color:${i<qsjState.shownHints?'#000':'var(--muted)'};border:1px solid ${i<qsjState.shownHints?'var(--accent2)':'var(--border)'};border-radius:999px;padding:.25rem .6rem;font-size:.7rem;font-family:'Unbounded',sans-serif">+${h.pts}</span>`).join('');

  const indicesEl=document.getElementById('qsj-indices');
  indicesEl.innerHTML=hints.slice(0,qsjState.shownHints).map(h=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:.8rem 1.2rem;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em">${h.label}</span>
      <span style="font-weight:600;color:var(--accent2)">${h.value}</span>
    </div>`).join('');

  // Options
  const others=shuffle(DATA.filter(w=>w.es!==card.es)).slice(0,3);
  const opts=shuffle([card,...others]);
  const cont=document.getElementById('qsj-options');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<strong>${opt.es}</strong><br><span style="font-size:.8rem;color:var(--muted)">${opt.fr}</span>`;
    btn.style.textAlign='left';
    btn.addEventListener('click',()=>checkQSJ(btn,opt,card,hints[qsjState.shownHints-1].pts));
    cont.appendChild(btn);
  });

  // More hints button
  if(qsjState.shownHints<hints.length) {
    const moreBtn=document.createElement('button');
    moreBtn.className='btn btn-ghost';
    moreBtn.style='width:100%;margin-top:.6rem;font-size:.8rem';
    moreBtn.textContent=`Indice suivant (-${hints[qsjState.shownHints].pts}pts max) →`;
    moreBtn.onclick=()=>{ qsjState.shownHints++; renderQSJ(); };
    document.getElementById('qsj-feedback').appendChild(moreBtn);
  }
}

function checkQSJ(btn,chosen,correct,pts) {
  document.querySelectorAll('#qsj-options .option-btn').forEach(b=>b.disabled=true);
  document.getElementById('qsj-feedback').innerHTML='';
  if(chosen.es===correct.es) {
    btn.classList.add('correct');
    qsjState.score+=pts; addXP(pts);
    showToast(`✅ +${pts} pts`,'correct-toast');
    document.getElementById('qsj-score').textContent=qsjState.score+' pts';
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#qsj-options .option-btn').forEach(b=>{if(b.querySelector('strong')?.textContent===correct.es)b.classList.add('correct');});
    showToast(`❌ ${correct.es}`,'wrong-toast');
  }
  qsjState.idx++;
  setTimeout(()=>{
    if(qsjState.idx>=qsjState.cards.length) showResults('quisuisje',qsjState.score,qsjState.cards.length*40,[]);
    else renderQSJ();
  },1600);
}

// ═══════════════════════════════════════════════
// BLITZ TAP
// ═══════════════════════════════════════════════
let blitzState={cards:[],idx:0,score:0,streak:0,timer:null,timeLeft:60};

function initBlitz() {
  blitzState={cards:shuffle(DATA),idx:0,score:0,streak:0,timer:null,timeLeft:60};
  showScreen('screen-blitz');
  document.getElementById('blitz-score').textContent='0';
  document.getElementById('blitz-streak-display').textContent='🔥 0';
  renderBlitz();
  blitzState.timer=setInterval(()=>{
    blitzState.timeLeft-=.1;
    const pct=blitzState.timeLeft/60*100;
    document.getElementById('blitz-timer-fill').style.width=pct+'%';
    document.getElementById('blitz-timer').textContent=Math.ceil(blitzState.timeLeft);
    if(blitzState.timeLeft<=0) {
      clearInterval(blitzState.timer);
      showResults('blitz',blitzState.score,999,[]);
    }
  },100);
}

function renderBlitz() {
  const card=blitzState.cards[blitzState.idx%blitzState.cards.length];
  document.getElementById('blitz-word').textContent=card.es;
  document.getElementById('blitz-word').style.color=wordToColor(card.es);
  const wrong=shuffle(DATA.filter(w=>w.es!==card.es))[0];
  const opts=shuffle([card,wrong]);
  const cont=document.getElementById('blitz-opts');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.style.cssText='background:var(--surface);border:2px solid var(--border);color:var(--text);border-radius:12px;padding:1.2rem;font-family:"DM Sans",sans-serif;font-size:1rem;cursor:pointer;transition:all .15s;text-align:center';
    btn.textContent=opt.fr;
    btn.addEventListener('click',()=>checkBlitz(btn,opt,card));
    btn.addEventListener('mouseover',()=>btn.style.transform='scale(1.03)');
    btn.addEventListener('mouseout',()=>btn.style.transform='scale(1)');
    cont.appendChild(btn);
  });
}

function checkBlitz(btn,chosen,correct) {
  document.querySelectorAll('#blitz-opts button').forEach(b=>b.onclick=null);
  if(chosen.es===correct.es) {
    btn.style.background='rgba(0,200,150,.2)'; btn.style.borderColor='var(--success)';
    blitzState.streak++; blitzState.score+=5+Math.min(blitzState.streak,5);
    addXP(5);
  } else {
    btn.style.background='rgba(255,68,68,.15)'; btn.style.borderColor='var(--error)';
    blitzState.streak=0;
  }
  document.getElementById('blitz-score').textContent=blitzState.score;
  document.getElementById('blitz-streak-display').textContent=`🔥 ${blitzState.streak}`;
  blitzState.idx++;
  setTimeout(renderBlitz,400);
}

function stopBlitz() { clearInterval(blitzState.timer); }

// ═══════════════════════════════════════════════
// CHAÎNE DE MOTS
// ═══════════════════════════════════════════════
let chainState={current:null,score:0,chain:[],usedEs:new Set()};

function initChaine() {
  chainState={current:null,score:0,chain:[],usedEs:new Set()};
  showScreen('screen-chaine');
  // Start with random word
  const start=DATA[Math.floor(Math.random()*DATA.length)];
  chainState.current=start;
  chainState.usedEs.add(start.es);
  chainState.chain=[start];
  document.getElementById('chain-score').textContent='0';
  document.getElementById('chain-trail').innerHTML='';
  renderChaine();
}

function renderChaine() {
  const cur=chainState.current;
  document.getElementById('chain-current').textContent=cur.es;
  document.getElementById('chain-current').style.color=wordToColor(cur.es);
  document.getElementById('chain-current-fr').textContent=cur.fr;
  document.getElementById('chain-score').textContent=chainState.score;
  document.getElementById('chain-feedback').innerHTML='';

  // Next letter = last letter of current FR translation (first word, cleaned)
  const frWord=cur.fr.split('/')[0].trim().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'');
  const nextLetter=frWord[frWord.length-1]?.toLowerCase()||'';
  document.getElementById('chain-next-letter').textContent=nextLetter.toUpperCase();

  // Find valid words
  const valid=DATA.filter(w=>
    !chainState.usedEs.has(w.es) &&
    w.fr.split('/')[0].trim().toLowerCase().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'')[0]===nextLetter
  );

  const cont=document.getElementById('chain-options');
  cont.innerHTML='';

  if(valid.length===0) {
    cont.innerHTML=`<div style="color:var(--muted);text-align:center;grid-column:1/-1;padding:1rem">Plus de mots disponibles ! Chaîne terminée 🎉</div>`;
    const pts=chainState.chain.length*10;
    document.getElementById('chain-feedback').innerHTML=`<strong style="color:var(--accent2)">Longueur : ${chainState.chain.length} mots · ${pts} pts</strong>`;
    addXP(pts);
    setTimeout(()=>{ if(confirm('Nouvelle chaîne ?')) initChaine(); else goHome(); },2000);
    return;
  }

  // Show 4 options: 1-2 valid + 2-3 distractors
  const validOpts=shuffle(valid).slice(0,2);
  const invalid=shuffle(DATA.filter(w=>!chainState.usedEs.has(w.es)&&!valid.includes(w))).slice(0,2);
  const opts=shuffle([...validOpts,...invalid]).slice(0,4);

  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<strong style="color:${wordToColor(opt.es)}">${opt.es}</strong><br><span style="font-size:.8rem;color:var(--muted)">${opt.fr}</span>`;
    btn.style.textAlign='left';
    btn.addEventListener('click',()=>checkChaine(opt,nextLetter));
    cont.appendChild(btn);
  });

  // Trail
  const trail=document.getElementById('chain-trail');
  trail.innerHTML=chainState.chain.slice(-8).map(w=>
    `<span style="background:${wordToColor(w.es)}22;color:${wordToColor(w.es)};border:1px solid ${wordToColor(w.es)}44;border-radius:999px;padding:.2rem .6rem;font-size:.7rem">${w.es}</span>`
  ).join('<span style="color:var(--muted);font-size:.8rem">→</span>');
}

function checkChaine(chosen,nextLetter) {
  const frWord=chosen.fr.split('/')[0].trim().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'');
  const startsOk=frWord[0]?.toLowerCase()===nextLetter;
  const fb=document.getElementById('chain-feedback');
  if(startsOk) {
    chainState.score+=10; addXP(10);
    chainState.chain.push(chosen);
    chainState.usedEs.add(chosen.es);
    chainState.current=chosen;
    document.getElementById('chain-score').textContent=chainState.score;
    showToast(`✅ +10`,'correct-toast');
    renderChaine();
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ "${chosen.fr}" ne commence pas par <strong>${nextLetter.toUpperCase()}</strong></span>`;
    showToast('❌','wrong-toast');
  }
}
