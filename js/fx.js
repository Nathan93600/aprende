// ¡Aprende! — js/fx.js : Retours visuels : vibration, confettis, compteurs
// ═══════════════════════════════════════════════
// DYNAMIC INTERACTIONS — haptic, confetti, counters
// ═══════════════════════════════════════════════

// Haptic feedback (mobile, web)
function haptic(intensity = 'light') {
  if(!navigator.vibrate) return;
  const patterns = {
    light: 10,
    medium: 25,
    strong: [10, 30, 10],
    success: [15, 40, 25],
    error: [50, 80, 50]
  };
  try { navigator.vibrate(patterns[intensity] || 10); } catch(e) {}
}

// Confetti burst
function confetti(intensity = 'normal') {
  const layer = document.getElementById('confetti-layer');
  if(!layer) return;
  const counts = { small: 18, normal: 40, big: 80 };
  const colors = ['#ff2d75','#00f5d4','#b561ff','#ffe23d','#00ff9d','#4d8bff','#ff8c42'];
  const n = counts[intensity] || 40;
  const startX = window.innerWidth / 2;
  for(let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const angle = (Math.random() - 0.5) * Math.PI * 1.2;
    const dist = 80 + Math.random() * 280;
    p.style.left = startX + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.setProperty('--cx', (Math.sin(angle) * dist) + 'px');
    p.style.setProperty('--dur', (1.2 + Math.random() * 1.4) + 's');
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    p.style.width = (6 + Math.random()*8) + 'px';
    p.style.height = (10 + Math.random()*8) + 'px';
    layer.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}

// Animate a counter from 0 to target
function animateCounter(el, target, duration = 800) {
  if(!el) return;
  const start = parseInt(el.textContent.replace(/\D/g,'')) || 0;
  const startTime = performance.now();
  const step = (t) => {
    const progress = Math.min((t - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(start + (target - start) * eased);
    el.textContent = val + (el.dataset.suffix || '');
    if(progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Bump a score chip
function bumpScore(elId) {
  const el = document.getElementById(elId);
  if(!el) return;
  el.classList.remove('bump');
  void el.offsetWidth; // restart animation
  el.classList.add('bump');
}

// Wrap addXP to add haptic + bump
const _addXP_orig = addXP;
addXP = function(n) {
  _addXP_orig(n);
  haptic(n >= 20 ? 'success' : 'light');
};

// Wrap showToast to add haptic
const _showToast_orig = showToast;
showToast = function(msg, type = '') {
  _showToast_orig(msg, type);
  if(type === 'correct-toast') haptic('light');
  else if(type === 'wrong-toast') haptic('error');
};

// Trigger confetti on big wins
function celebrate(scorePct) {
  if(scorePct === 100) { confetti('big'); haptic('success'); }
  else if(scorePct >= 80) { confetti('normal'); haptic('success'); }
  else if(scorePct >= 50) { confetti('small'); haptic('medium'); }
}

// Course data loaded from courses/*.js
const COURSES = { es: COURSE_ES, ln: COURSE_LN, en: COURSE_EN };
