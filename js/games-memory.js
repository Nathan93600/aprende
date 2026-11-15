// ¡Aprende! — js/games-memory.js : Jeux de mémoire visuelle : palette, mind map, lettres colorées, aura, image mentale, calendrier
// ═══════════════════════════════════════════════
// SYNESTHESIA COLOR MAP (graphème → couleur fixe)
// ═══════════════════════════════════════════════
const LETTER_COLORS = {
  a:'#ef4444',b:'#f97316',c:'#eab308',d:'#84cc16',e:'#22c55e',
  f:'#14b8a6',g:'#06b6d4',h:'#3b82f6',i:'#6366f1',j:'#8b5cf6',
  k:'#a855f7',l:'#ec4899',m:'#f43f5e',n:'#fb923c',o:'#facc15',
  p:'#4ade80',q:'#2dd4bf',r:'#38bdf8',s:'#818cf8',t:'#c084fc',
  u:'#f472b6',v:'#fb7185',w:'#fde047',x:'#86efac',y:'#67e8f9',
  z:'#a5b4fc',
  á:'#ef4444',é:'#22c55e',í:'#6366f1',ó:'#facc15',ú:'#f472b6',
  ñ:'#fb923c',ü:'#f472b6'
};

function colorWord(word) {
  return word.split('').map(ch => {
    const c = LETTER_COLORS[ch.toLowerCase()];
    return c ? `<span style="color:${c}">${ch}</span>` : `<span style="color:var(--muted)">${ch}</span>`;
  }).join('');
}

// Word → dominant color (average of first 3 consonants/vowels)
function wordToColor(word) {
  const palette = ['#ef4444','#f97316','#eab308','#84cc16','#22c55e',
                   '#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6',
                   '#a855f7','#ec4899','#f43f5e','#fb923c','#facc15'];
  let hash = 0;
  for(let i=0; i<word.length; i++) hash = (hash*31 + word.charCodeAt(i)) & 0xfffffff;
  return palette[hash % palette.length];
}

// ═══════════════════════════════════════════════
// PALETTE SYNESTHÉSIQUE
// ═══════════════════════════════════════════════
let palState = { cards:[], count:5, phase:'setup', quizIdx:0, score:0 };

function initPalette() {
  palState.count = 5;
  palState.score = 0;
  showScreen('screen-palette');
  document.getElementById('pal-setup').style.display='block';
  document.getElementById('pal-memorize').style.display='none';
  document.getElementById('pal-quiz').style.display='none';
}

function setPalCount(n, btn) {
  palState.count = n;
  document.querySelectorAll('[id^="pal-m"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startPalette() {
  const words = shuffle(DATA).slice(0, palState.count);
  palState.cards = words.map(w => ({ ...w, color: wordToColor(w.es) }));
  document.getElementById('pal-setup').style.display='none';
  document.getElementById('pal-memorize').style.display='block';

  const grid = document.getElementById('pal-cards-grid');
  grid.innerHTML = palState.cards.map((c,i) => `
    <div style="background:${c.color}22;border:2px solid ${c.color};border-radius:12px;padding:1rem .8rem;text-align:center;cursor:default">
      <div style="width:40px;height:40px;border-radius:50%;background:${c.color};margin:0 auto .6rem;box-shadow:0 0 15px ${c.color}88"></div>
      <div style="font-weight:700;font-size:.95rem;color:var(--text)">${c.es}</div>
      <div style="font-size:.75rem;color:var(--muted);margin-top:.2rem">${c.fr}</div>
    </div>`).join('');
}

function startPaletteQuiz() {
  palState.quizIdx = 0;
  document.getElementById('pal-memorize').style.display='none';
  document.getElementById('pal-quiz').style.display='block';
  renderPaletteQuiz();
}

function renderPaletteQuiz() {
  const card = palState.cards[palState.quizIdx];
  document.getElementById('pal-quiz-word').textContent = card.es;
  document.getElementById('pal-quiz-fr').textContent = card.fr;
  setProgress('pal-progress', palState.quizIdx, palState.cards.length);
  document.getElementById('pal-score').textContent = palState.score + ' pts';
  document.getElementById('pal-feedback').innerHTML = '';

  // Build color options: correct + 4 distractors
  const allColors = palState.cards.map(c => c.color);
  const extraColors = ['#ef4444','#22c55e','#3b82f6','#a855f7','#fb923c','#facc15','#ec4899','#14b8a6'];
  const pool = shuffle([...new Set([...allColors, ...extraColors])].filter(c => c !== card.color)).slice(0,4);
  const opts = shuffle([card.color, ...pool]).slice(0,5);

  const cont = document.getElementById('pal-color-opts');
  cont.innerHTML = opts.map(col => `
    <div onclick="checkPaletteColor('${col}','${card.color}')"
      style="width:60px;height:60px;border-radius:50%;background:${col};cursor:pointer;
             border:3px solid transparent;transition:all .2s;box-shadow:0 0 12px ${col}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');
}

function checkPaletteColor(chosen, correct) {
  const fb = document.getElementById('pal-feedback');
  const circles = document.querySelectorAll('#pal-color-opts div');
  circles.forEach(c => c.onclick = null);

  if(chosen === correct) {
    palState.score += 15;
    addXP(15);
    fb.innerHTML = `<span style="color:var(--success)">✅ Bonne couleur ! +15 pts</span>`;
    showToast('✅ +15 pts','correct-toast');
  } else {
    fb.innerHTML = `<span style="color:var(--error)">❌ C'était <span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('❌','wrong-toast');
  }
  palState.quizIdx++;
  setTimeout(() => {
    if(palState.quizIdx >= palState.cards.length) {
      showResults('palette', palState.score, palState.cards.length*15, []);
    } else renderPaletteQuiz();
  }, 1200);
}

// ═══════════════════════════════════════════════
// MIND MAP
// ═══════════════════════════════════════════════
const MM_THEMES = {
  'Actions':['caminar','luchar','pelear','robar','disfrutar','apoyar','charlar','subir','bajar','levantarse','moverse','borrar','cerrar','esperar','seguir','tocar','sudar','montar','girarse','agacharse'],
  'Émotions':['enamorar','enfadado','harto','aburrido','acojonar'],
  'Lieux & Objets':['vecindario','camino','cancha','pelota','jabón','hielo','ventanilla','escudo'],
  'Qualités':['pesado','ambicioso','guapo','oscuro','cierto','parecido','propio'],
  'Expressions':['aún','así','ya','aunque','pues','luego de','tras','de acuerdo','claro que','por cierto','y punto','vaya','hasta','tanto'],
  'Quotidien':['cenar','quedar','Mano','Tierra','cita','tarea','rato','lado','ahora','minuto','durante','poco','vez','memoria'],
};

function initMindMap() {
  showScreen('screen-mindmap');
  setTimeout(drawMindMap, 100);
}

function drawMindMap() {
  const canvas = document.getElementById('mm-canvas');
  const container = canvas.parentElement;
  const W = container.clientWidth;
  const H = Math.max(500, window.innerHeight * 0.6);
  canvas.width = W * devicePixelRatio;
  canvas.height = H * devicePixelRatio;
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const themes = Object.entries(MM_THEMES);
  const themeColors = ['#ef4444','#f97316','#22c55e','#3b82f6','#a855f7','#ec4899'];
  const cx = W/2, cy = H/2;
  const nodes = [];

  // Center node
  nodes.push({x:cx,y:cy,r:32,label:'Vocab',color:'var(--accent)',isCenter:true,word:null,fr:null});

  // Theme nodes
  themes.forEach(([theme, words], ti) => {
    const angle = (ti / themes.length) * Math.PI * 2 - Math.PI/2;
    const dist = Math.min(W,H) * 0.28;
    const tx = cx + Math.cos(angle)*dist;
    const ty = cy + Math.sin(angle)*dist;
    const tc = themeColors[ti % themeColors.length];
    nodes.push({x:tx,y:ty,r:22,label:theme,color:tc,isTheme:true,word:null,fr:null});

    // Word nodes
    const visible = words.slice(0,6);
    visible.forEach((w, wi) => {
      const spread = (wi/(visible.length-1||1) - 0.5) * 1.2;
      const wAngle = angle + spread * 0.7;
      const wDist = Math.min(W,H) * 0.14;
      const wx = tx + Math.cos(wAngle)*wDist;
      const wy = ty + Math.sin(wAngle)*wDist;
      const vocabEntry = DATA.find(d => d.es.toLowerCase() === w.toLowerCase());
      nodes.push({x:wx,y:wy,r:14,label:w,color:tc+'aa',isWord:true,
                  word:w,fr:vocabEntry?.fr||'',themeColor:tc});
    });
  });

  // Draw edges
  ctx.lineWidth = 1.5;
  nodes.forEach(n => {
    if(n.isTheme) {
      ctx.strokeStyle = n.color+'66';
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(n.x,n.y); ctx.stroke();
    }
    if(n.isWord) {
      const parent = nodes.find(p => p.isTheme && p.color.startsWith(n.themeColor.slice(0,7)));
      if(parent) {
        ctx.strokeStyle = n.themeColor+'44';
        ctx.beginPath(); ctx.moveTo(parent.x,parent.y); ctx.lineTo(n.x,n.y); ctx.stroke();
      }
    }
  });

  // Draw nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
    ctx.fillStyle = n.isCenter ? '#ff4d6d' : n.isTheme ? n.color : n.color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff22';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = `${n.isCenter?'bold ':n.isTheme?'600 ':''}${n.isCenter?13:n.isTheme?11:9}px DM Sans, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const maxW = n.r*1.8;
    if(ctx.measureText(n.label).width > maxW && n.label.length > 8) {
      ctx.font = `${n.isTheme?'600 ':''}8px DM Sans, sans-serif`;
    }
    ctx.fillText(n.label, n.x, n.y);
  });

  // Legend
  const legend = document.getElementById('mm-legend');
  legend.innerHTML = themes.map(([t],i) =>
    `<span style="background:${themeColors[i]}22;color:${themeColors[i]};border:1px solid ${themeColors[i]}44;border-radius:999px;padding:.2rem .6rem;font-size:.7rem">${t}</span>`
  ).join('');

  // Tooltip on click
  const tooltip = document.getElementById('mm-tooltip');
  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left);
    const my = (e.clientY - rect.top);
    const hit = nodes.find(n => Math.hypot(n.x-mx,n.y-my) < n.r+8);
    if(hit && hit.isWord && hit.fr) {
      tooltip.style.display='block';
      tooltip.style.left = (e.clientX+12)+'px';
      tooltip.style.top = (e.clientY-10)+'px';
      tooltip.innerHTML = `<strong style="color:${hit.themeColor}">${hit.word}</strong><br><span style="color:var(--muted)">${hit.fr}</span>`;
      setTimeout(()=>tooltip.style.display='none', 2500);
    } else { tooltip.style.display='none'; }
  };
}

// ═══════════════════════════════════════════════
// STORY MODE (IA)
// ═══════════════════════════════════════════════
let storyState = { words:[], storyText:'', score:0 };

function initStory() {
  storyState.score = 0;
  showScreen('screen-story');
  document.getElementById('story-setup').style.display='block';
  document.getElementById('story-read').style.display='none';
  document.getElementById('story-quiz').style.display='none';
  document.getElementById('story-loading').style.display='none';
  document.getElementById('story-score').textContent='0 pts';
}

async function generateStory() {
  const words = shuffle(DATA).slice(0,5);
  storyState.words = words;
  document.getElementById('story-setup').querySelector('.btn').style.display='none';
  document.getElementById('story-loading').style.display='block';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        messages:[{role:'user',content:`Écris une histoire courte et vivante en espagnol (8-10 phrases) qui utilise naturellement ces 5 mots espagnols : ${words.map(w=>w.es).join(', ')}. 
L'histoire doit être mémorable, légèrement drôle ou surprenante pour faciliter la mémorisation. 
Mets chacun des 5 mots EN MAJUSCULES dans le texte.
Après l'histoire, ajoute une ligne "TRADUCTION: " avec la traduction française complète.
Réponds uniquement avec l'histoire + la traduction, sans titre ni commentaire.`}]
      })
    });
    const data = await res.json();
    const full = data.content[0].text;
    const parts = full.split('TRADUCTION:');
    storyState.storyText = parts[0].trim();
    storyState.storyTranslation = parts[1]?.trim() || '';

    document.getElementById('story-loading').style.display='none';
    document.getElementById('story-setup').style.display='none';
    document.getElementById('story-read').style.display='block';

    // Highlight words in story
    let highlighted = storyState.storyText;
    words.forEach(w => {
      const color = wordToColor(w.es);
      highlighted = highlighted.replace(new RegExp(w.es.toUpperCase(),'g'),
        `<strong style="color:${color};background:${color}22;padding:0 3px;border-radius:4px">${w.es.toUpperCase()}</strong>`);
    });
    document.getElementById('story-text').innerHTML = highlighted +
      (storyState.storyTranslation ? `<div style="margin-top:1rem;padding-top:.8rem;border-top:1px solid var(--border);color:var(--muted);font-size:.85rem;font-style:italic">${storyState.storyTranslation}</div>` : '');

    // Word chips
    document.getElementById('story-words-display').innerHTML = words.map(w =>
      `<span style="background:${wordToColor(w.es)}22;color:${wordToColor(w.es)};border:1px solid ${wordToColor(w.es)}44;border-radius:999px;padding:.3rem .8rem;font-size:.82rem;font-weight:600">${w.es} <span style="opacity:.6;font-weight:400">= ${w.fr}</span></span>`
    ).join('');

  } catch(e) {
    document.getElementById('story-loading').style.display='none';
    document.getElementById('story-setup').querySelector('.btn').style.display='block';
    showToast('Erreur de génération','wrong-toast');
  }
}

function startStoryQuiz() {
  document.getElementById('story-read').style.display='none';
  document.getElementById('story-quiz').style.display='block';

  // Replace words in story with blanks + inputs
  let quizText = storyState.storyText;
  storyState.words.forEach((w,i) => {
    quizText = quizText.replace(new RegExp(w.es.toUpperCase(),'g'),
      `<input class="exo-input" data-answer="${w.es}" data-idx="${i}" style="width:110px;text-transform:uppercase" placeholder="?" autocomplete="off" spellcheck="false">`);
  });
  document.getElementById('story-quiz-text').innerHTML = quizText;

  // Hints
  document.getElementById('story-inputs').innerHTML = storyState.words.map((w,i) =>
    `<div style="font-size:.8rem;color:var(--muted)">Mot ${i+1} : <strong style="color:${wordToColor(w.es)}">${w.fr}</strong></div>`
  ).join('');

  document.querySelectorAll('#story-quiz-text .exo-input').forEach(inp => {
    inp.addEventListener('keydown', e => { if(e.key==='Enter') checkStory(); });
  });
}

function checkStory() {
  const inputs = document.querySelectorAll('#story-quiz-text .exo-input');
  let correct = 0;
  inputs.forEach(inp => {
    const ans = normalize(inp.dataset.answer);
    const att = normalize(inp.value);
    if(att === ans || levenshtein(att,ans) <= 1) {
      inp.classList.add('correct'); inp.value = inp.dataset.answer.toUpperCase();
      correct++;
    } else {
      inp.classList.add('wrong'); inp.value = inp.dataset.answer.toUpperCase();
    }
  });
  const pts = correct * 20;
  storyState.score += pts;
  addXP(pts);
  document.getElementById('story-score').textContent = storyState.score + ' pts';
  const pct = Math.round(correct/inputs.length*100);
  document.getElementById('story-result').innerHTML = `
    <div style="font-family:'Unbounded',sans-serif;font-size:1.1rem">${pct===100?'🏆':pct>=60?'💪':'📚'} ${correct}/${inputs.length}</div>
    <div style="color:var(--accent2);font-size:.85rem;margin-top:.3rem">+${pts} XP</div>
    <div class="btn-row" style="margin-top:1rem">
      <button class="btn btn-secondary" onclick="initStory()">Nouvelle histoire</button>
      <button class="btn btn-ghost" onclick="goHome()">Accueil</button>
    </div>`;
}

// ═══════════════════════════════════════════════
// LETTRES COLORÉES
// ═══════════════════════════════════════════════
let clState = { cards:[], idx:0, score:0, phase:'view' };

function initColorLetters() {
  clState = { cards: shuffle(DATA), idx:0, score:0, phase:'view' };
  showScreen('screen-colorletters');

  // Show alphabet preview
  const prev = document.getElementById('cl-alphabet-preview');
  prev.innerHTML = 'abcdefghijklmnopqrstuvwxyzáéíóúñ'.split('').map(l =>
    `<span style="color:${LETTER_COLORS[l]||'var(--muted)'};font-family:'Unbounded',sans-serif;font-size:.9rem;font-weight:700">${l}</span>`
  ).join('');

  document.getElementById('cl-setup').style.display='block';
  document.getElementById('cl-game').style.display='none';
}

function startColorLetters() {
  document.getElementById('cl-setup').style.display='none';
  document.getElementById('cl-game').style.display='block';
  renderColorLetters();
}

function renderColorLetters() {
  const card = clState.cards[clState.idx];
  setProgress('cl-progress', clState.idx, clState.cards.length);
  document.getElementById('cl-score').textContent = clState.score + ' pts';
  document.getElementById('cl-word-colored').innerHTML = colorWord(card.es);
  document.getElementById('cl-word-fr').textContent = card.fr;
  document.getElementById('cl-feedback').innerHTML = '';

  // Phase: view for 2s then ask QCM
  document.getElementById('cl-options-area').innerHTML = `
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:.8rem">Mémorise les couleurs de ce mot…</div>
    <div style="font-size:1.8rem;font-family:'Unbounded',sans-serif">${colorWord(card.es)}</div>`;
  document.getElementById('cl-options').style.display='none';

  setTimeout(() => {
    document.getElementById('cl-options-area').innerHTML = `<div style="font-size:.8rem;color:var(--muted);margin-bottom:.6rem">Quelle est la couleur de la première lettre ?</div>`;
    const firstLetter = card.es[0].toLowerCase();
    const correctColor = LETTER_COLORS[firstLetter] || '#fff';
    const allC = Object.values(LETTER_COLORS);
    const distractors = shuffle(allC.filter(c=>c!==correctColor)).slice(0,3);
    const opts = shuffle([correctColor,...distractors]);

    const cont = document.getElementById('cl-options');
    cont.style.display='grid';
    cont.innerHTML = '';
    opts.forEach(col => {
      const btn = document.createElement('button');
      btn.className='option-btn';
      btn.style.background = col+'22';
      btn.style.borderColor = col+'66';
      btn.innerHTML = `<span style="display:inline-block;width:28px;height:28px;border-radius:50%;background:${col};vertical-align:middle;margin-right:.4rem"></span> <span style="color:${col};font-family:'Unbounded',sans-serif;font-size:.7rem">${col}</span>`;
      btn.addEventListener('click', ()=>checkColorLetters(btn, col, correctColor, card));
      cont.appendChild(btn);
    });
  }, 2000);
}

function checkColorLetters(btn, chosen, correct, card) {
  document.querySelectorAll('#cl-options .option-btn').forEach(b=>b.disabled=true);
  const fb = document.getElementById('cl-feedback');
  if(chosen===correct) {
    btn.style.borderColor=correct;
    clState.score+=10; addXP(10);
    fb.innerHTML=`<span style="color:var(--success)">✅ +10 pts — <strong style="color:${correct}">${card.es[0].toUpperCase()}</strong> = <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('✅ +10 pts','correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ C'était <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('❌','wrong-toast');
  }
  document.getElementById('cl-score').textContent=clState.score+' pts';
  clState.idx++;
  setTimeout(()=>{
    if(clState.idx>=clState.cards.length) showResults('colorletters',clState.score,clState.cards.length*10,[]);
    else renderColorLetters();
  },1300);
}

// ═══════════════════════════════════════════════
// AURA PERSONNALISÉE
// ═══════════════════════════════════════════════
const AURA_COLORS = ['#ef4444','#f97316','#eab308','#84cc16','#22c55e','#14b8a6',
  '#06b6d4','#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899','#f43f5e','#fb923c'];

let auraState = { cards:[], idx:0, score:0, quizIdx:0 };

function loadAuras() { return JSON.parse(localStorage.getItem('aura_map')||'{}'); }
function saveAura(word, color) { const m=loadAuras(); m[word]=color; localStorage.setItem('aura_map',JSON.stringify(m)); }

function initAura() {
  showScreen('screen-aura');
  document.getElementById('aura-setup').style.display='block';
  document.getElementById('aura-assign').style.display='none';
  document.getElementById('aura-quiz-area').style.display='none';
  const auras = loadAuras();
  const count = Object.keys(auras).length;
  document.getElementById('aura-saved-count').textContent = count > 0 ? `✨ ${count} mots ont déjà une aura sauvegardée` : 'Aucune aura sauvegardée — commence par en assigner !';
  document.getElementById('aura-quiz-start-btn').style.display = count >= 3 ? 'inline-flex' : 'none';
  auraState.score = 0;
}

function startAuraAssign() {
  const auras = loadAuras();
  auraState.cards = shuffle(DATA).filter(w => !auras[w.es]).slice(0, 10);
  if(auraState.cards.length === 0) { auraState.cards = shuffle(DATA).slice(0,10); }
  auraState.idx = 0;
  document.getElementById('aura-setup').style.display='none';
  document.getElementById('aura-assign').style.display='block';
  renderAuraAssign();
}

let selectedAuraColor = AURA_COLORS[0];

function renderAuraAssign() {
  const card = auraState.cards[auraState.idx];
  document.getElementById('aura-word').textContent = card.es;
  document.getElementById('aura-fr').textContent = card.fr;
  setProgress('aura-progress', auraState.idx, auraState.cards.length);
  document.getElementById('aura-counter-lbl').textContent = `${auraState.idx+1} / ${auraState.cards.length}`;
  selectedAuraColor = wordToColor(card.es); // default suggestion

  const picker = document.getElementById('aura-picker');
  picker.innerHTML = AURA_COLORS.map(c => `
    <div onclick="selectAuraColor('${c}',this)"
      style="width:44px;height:44px;border-radius:50%;background:${c};cursor:pointer;
             border:3px solid ${c===selectedAuraColor?'white':'transparent'};
             transition:all .2s;box-shadow:0 0 10px ${c}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');

  document.getElementById('aura-color-input').value = selectedAuraColor;
  document.getElementById('aura-color-input').oninput = function() { selectAuraColor(this.value, null); };
}

function selectAuraColor(color, el) {
  selectedAuraColor = color;
  document.querySelectorAll('#aura-picker div').forEach(d => d.style.borderColor='transparent');
  if(el) el.style.borderColor='white';
  document.getElementById('aura-word').style.textShadow = `0 0 30px ${color}`;
  document.getElementById('aura-word').style.color = color;
}

function confirmAura() {
  const card = auraState.cards[auraState.idx];
  saveAura(card.es, selectedAuraColor);
  showToast(`✨ Aura sauvegardée`, 'correct-toast');
  document.getElementById('aura-word').style.textShadow='';
  document.getElementById('aura-word').style.color='';
  auraState.idx++;
  if(auraState.idx >= auraState.cards.length) {
    initAura();
  } else renderAuraAssign();
}

function startAuraQuiz() {
  const auras = loadAuras();
  const pairs = Object.entries(auras);
  if(pairs.length < 3) return;
  auraState.cards = shuffle(pairs).slice(0,Math.min(10,pairs.length)).map(([es,color]) => {
    const entry = DATA.find(d=>d.es===es)||{es,fr:'?'};
    return {...entry, auraColor:color};
  });
  auraState.quizIdx = 0; auraState.score = 0;
  document.getElementById('aura-setup').style.display='none';
  document.getElementById('aura-quiz-area').style.display='block';
  renderAuraQuiz();
}

function renderAuraQuiz() {
  const card = auraState.cards[auraState.quizIdx];
  document.getElementById('aura-quiz-word').textContent = card.es;
  document.getElementById('aura-quiz-word').style.color = 'var(--text)';
  document.getElementById('aura-quiz-fr').textContent = card.fr;
  document.getElementById('aura-quiz-fb').innerHTML='';
  setProgress('aura-progress', auraState.quizIdx, auraState.cards.length);
  document.getElementById('aura-score').textContent = auraState.score+' pts';

  const correct = card.auraColor;
  const pool = shuffle(AURA_COLORS.filter(c=>c!==correct)).slice(0,4);
  const opts = shuffle([correct,...pool]).slice(0,5);

  const cont = document.getElementById('aura-quiz-opts');
  cont.innerHTML = opts.map(col=>`
    <div onclick="checkAuraQuiz('${col}','${correct}')"
      style="width:56px;height:56px;border-radius:50%;background:${col};cursor:pointer;
             border:3px solid transparent;transition:all .2s;box-shadow:0 0 12px ${col}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');
}

function checkAuraQuiz(chosen, correct) {
  document.querySelectorAll('#aura-quiz-opts div').forEach(d=>d.onclick=null);
  const fb = document.getElementById('aura-quiz-fb');
  const card = auraState.cards[auraState.quizIdx];
  if(chosen===correct) {
    document.getElementById('aura-quiz-word').style.color=correct;
    document.getElementById('aura-quiz-word').style.textShadow=`0 0 20px ${correct}`;
    auraState.score+=15; addXP(15);
    fb.innerHTML=`<span style="color:var(--success)">✅ Tu as retrouvé ton aura ! +15 pts</span>`;
    showToast('✅ +15 pts','correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ Ton aura était <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
  }
  document.getElementById('aura-score').textContent=auraState.score+' pts';
  auraState.quizIdx++;
  setTimeout(()=>{
    if(auraState.quizIdx>=auraState.cards.length) showResults('aura',auraState.score,auraState.cards.length*15,[]);
    else renderAuraQuiz();
  },1400);
}

// ═══════════════════════════════════════════════
// IMAGE MENTALE (IA)
// ═══════════════════════════════════════════════
let imState = { cards:[], idx:0, score:0 };

function initImageMentale() {
  imState = { cards: shuffle(DATA), idx:0, score:0 };
  showScreen('screen-imagementale');
  renderImageMentale();
  document.getElementById('im-input').addEventListener('keydown', e=>{ if(e.key==='Enter') generateMnemonic(); });
}

function renderImageMentale() {
  const card = imState.cards[imState.idx];
  setProgress('im-progress', imState.idx, imState.cards.length);
  document.getElementById('im-score').textContent = imState.score+' pts';
  document.getElementById('im-word').textContent = card.es;
  document.getElementById('im-word').style.color = wordToColor(card.es);
  document.getElementById('im-hint').textContent = 'Ferme les yeux 3 secondes, quelle image te vient ?';
  document.getElementById('im-input').value='';
  document.getElementById('im-input').className='type-input';
  document.getElementById('im-ai-result').innerHTML='';
  document.getElementById('im-next-area').style.display='none';
  document.getElementById('im-generate-btn').style.display='block';
}

async function generateMnemonic() {
  const card = imState.cards[imState.idx];
  const img = document.getElementById('im-input').value.trim();
  if(!img) { document.getElementById('im-hint').textContent='Décris d\'abord ton image !'; return; }

  document.getElementById('im-generate-btn').style.display='none';
  document.getElementById('im-ai-result').innerHTML=`<div class="ai-loading" style="justify-content:center"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514', max_tokens:1000,
        messages:[{role:'user',content:`Le mot espagnol "${card.es}" signifie "${card.fr}".
L'apprenant a cette image mentale : "${img}".
Crée une phrase mnémotechnique COURTE et MÉMORABLE (1-2 phrases max) qui :
1. Connecte l'image mentale "${img}" au mot espagnol "${card.es}" ET à sa traduction "${card.fr}"
2. Est visuelle, surprenante ou légèrement absurde pour ancrer le lien
3. Si possible joue sur la sonorité du mot espagnol
Réponds uniquement avec la phrase mnémotechnique, rien d'autre.`}]
      })
    });
    const data = await res.json();
    const mnemonic = data.content[0].text.trim();

    document.getElementById('im-ai-result').innerHTML=`
      <div class="ai-bubble">
        <div class="ai-badge">🖼️ Mnémotechnique</div>
        <div style="margin-top:.4rem;font-size:.95rem;line-height:1.6">${mnemonic}</div>
      </div>`;

    // Show translation QCM
    const others = shuffle(DATA.filter(w=>w.es!==card.es)).slice(0,3);
    const opts = shuffle([card,...others]);
    const area = document.getElementById('im-next-area');
    area.style.display='block';
    document.getElementById('im-translation-opts').innerHTML='';
    opts.forEach(opt=>{
      const btn=document.createElement('button');
      btn.className='option-btn';
      btn.textContent=opt.fr;
      btn.addEventListener('click',()=>{
        document.querySelectorAll('#im-translation-opts .option-btn').forEach(b=>b.disabled=true);
        if(opt.es===card.es){
          btn.classList.add('correct');
          imState.score+=25; addXP(25);
          showToast('✅ +25 pts','correct-toast');
        } else {
          btn.classList.add('wrong');
          document.querySelectorAll('#im-translation-opts .option-btn').forEach(b=>{ if(b.textContent===card.fr) b.classList.add('correct'); });
        }
        document.getElementById('im-score').textContent=imState.score+' pts';
        imState.idx++;
        setTimeout(()=>{
          if(imState.idx>=imState.cards.length) showResults('imagementale',imState.score,imState.cards.length*25,[]);
          else renderImageMentale();
        },1800);
      });
      document.getElementById('im-translation-opts').appendChild(btn);
    });

  } catch(e) {
    document.getElementById('im-ai-result').innerHTML='<div style="color:var(--error)">Erreur. Réessaie.</div>';
    document.getElementById('im-generate-btn').style.display='block';
  }
}

// ═══════════════════════════════════════════════
// CALENDRIER DES MOTS
// ═══════════════════════════════════════════════
let calState = { year:2026, month:4 }; // 0-indexed, 4=mai

const MONTH_COLORS = [
  '#3b82f6','#6366f1','#8b5cf6','#a855f7',
  '#ec4899','#f43f5e','#f97316','#eab308',
  '#84cc16','#22c55e','#14b8a6','#06b6d4'
];
const MONTH_NAMES = ['Janvier','Février','Mars','Avril','Mai','Juin',
  'Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function initCalendrier() {
  showScreen('screen-calendrier');
  renderCalendrier();
}

function calNav(dir) {
  calState.month += dir;
  if(calState.month > 11) { calState.month=0; calState.year++; }
  if(calState.month < 0) { calState.month=11; calState.year--; }
  renderCalendrier();
}

function renderCalendrier() {
  const { year, month } = calState;
  document.getElementById('cal-month-label').textContent = `${MONTH_NAMES[month]} ${year}`;
  const color = MONTH_COLORS[month];

  // Build day → words from JOURNAL_SESSIONS
  const dayMap = {};
  JOURNAL_SESSIONS.forEach(s => {
    const d = parseJournalDate(s.date);
    if(!d) return;
    if(d.getFullYear()===year && d.getMonth()===month) {
      const day = d.getDate();
      dayMap[day] = { session:s, color };
    }
  });

  const totalWords = JOURNAL_SESSIONS.reduce((acc,s)=>{
    const mots = (s.es||s.mots||[]).length;
    return acc+mots;
  },0);
  document.getElementById('cal-total').textContent = `${totalWords} mots total`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const offset = (firstDay+6)%7; // Monday first

  const grid = document.getElementById('cal-grid');
  const days = ['L','M','M','J','V','S','D'];
  let html = days.map(d=>`<div style="text-align:center;font-size:.65rem;color:var(--muted);letter-spacing:.1em;padding:.2rem 0">${d}</div>`).join('');

  for(let i=0;i<offset;i++) html+=`<div></div>`;
  for(let d=1;d<=daysInMonth;d++) {
    const hasWords = dayMap[d];
    const isToday = year===2026 && month===4 && d===12;
    const wordCount = hasWords ? (hasWords.session.es||hasWords.session.mots||[]).length : 0;
    html+=`<div onclick="showCalDay(${d})"
      style="aspect-ratio:1;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;
             cursor:${hasWords?'pointer':'default'};
             background:${hasWords?color+'22':isToday?'var(--surface2)':'transparent'};
             border:${hasWords?`2px solid ${color}66`:isToday?'1px solid var(--border)':'1px solid transparent'};
             transition:all .2s"
      onmouseover="this.style.transform='${hasWords?'scale(1.08)':'none'}'"
      onmouseout="this.style.transform='scale(1)'">
      <span style="font-size:.85rem;color:${hasWords?color:isToday?'var(--text)':'var(--muted)'};font-weight:${hasWords||isToday?'700':'400'}">${d}</span>
      ${hasWords?`<span style="font-size:.55rem;color:${color};margin-top:.1rem">${wordCount}m</span>`:''}
    </div>`;
  }
  grid.innerHTML = html;
  document.getElementById('cal-day-detail').style.display='none';
}

function parseJournalDate(dateStr) {
  const months = {janvier:0,février:1,mars:2,avril:3,mai:4,juin:5,
    juillet:6,août:7,septembre:8,octobre:9,novembre:10,décembre:11};
  const parts = dateStr.toLowerCase().split(' ');
  if(parts.length===3) {
    const day=parseInt(parts[0]);
    const month=months[parts[1]];
    const year=parseInt(parts[2]);
    if(!isNaN(day)&&month!==undefined&&!isNaN(year)) return new Date(year,month,day);
  }
  return null;
}

function showCalDay(day) {
  const { year, month } = calState;
  const color = MONTH_COLORS[month];
  const session = JOURNAL_SESSIONS.find(s => {
    const d = parseJournalDate(s.date);
    return d && d.getFullYear()===year && d.getMonth()===month && d.getDate()===day;
  });
  if(!session) return;
  const mots = session.es || session.mots || [];
  const detail = document.getElementById('cal-day-detail');
  detail.style.display='block';
  detail.style.borderColor=color+'44';
  document.getElementById('cal-day-title').textContent=`📅 ${session.date} — ${session.label}`;
  document.getElementById('cal-day-title').style.color=color;
  document.getElementById('cal-day-words').innerHTML=mots.map(([w,t])=>`
    <div style="background:var(--surface2);border-radius:8px;padding:.4rem .8rem;display:flex;justify-content:space-between;align-items:center;gap:.4rem;font-size:.78rem">
      <span style="color:${color};font-weight:600">${w}</span>
      <span style="color:var(--muted);font-size:.72rem">${t}</span>
    </div>`).join('');
  detail.scrollIntoView({behavior:'smooth',block:'nearest'});
}
