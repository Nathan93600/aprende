// ¡Aprende! — js/sfx.js : Sons et vibrations
// ═══════════════════════════════════════════════
// SOUND EFFECTS + HAPTICS (Duolingo-style feedback)
// ═══════════════════════════════════════════════
const SFX = (() => {
  let ctx;
  let unlocked = false; // track if AudioContext was unlocked by user gesture

  // ── Unlock AudioContext on first user gesture (mobile requirement) ──
  function unlockAudio() {
    if (unlocked) return;
    try {
      if (!ctx || ctx.state === 'closed') {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (ctx.state === 'suspended') {
        ctx.resume().then(() => { unlocked = true; }).catch(() => {});
      } else {
        unlocked = true;
      }
      // Play a silent buffer to fully unlock on iOS
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    } catch(e) {}
  }
  // Attach unlock to multiple user-gesture events (covers iOS Safari, Chrome, PWA)
  ['touchstart', 'touchend', 'click', 'keydown'].forEach(evt => {
    document.addEventListener(evt, unlockAudio, { once: false, passive: true });
  });

  function getCtx() {
    if (!ctx || ctx.state === 'closed') ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  // ── Vibration helper (safe cross-browser) ──
  function vibrate(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch(e) {}
  }

  // ── Correct: bright ascending two-note chime ──
  function playCorrect() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Note 1: E5
      const o1 = c.createOscillator(), g1 = c.createGain();
      o1.type = 'sine'; o1.frequency.value = 659.25;
      g1.gain.setValueAtTime(0.22, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o1.connect(g1); g1.connect(c.destination);
      o1.start(now); o1.stop(now + 0.25);
      // Note 2: C6 (major feel)
      const o2 = c.createOscillator(), g2 = c.createGain();
      o2.type = 'sine'; o2.frequency.value = 1046.50;
      g2.gain.setValueAtTime(0, now + 0.08);
      g2.gain.linearRampToValueAtTime(0.25, now + 0.1);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      o2.connect(g2); g2.connect(c.destination);
      o2.start(now + 0.08); o2.stop(now + 0.4);
      // Harmonic shimmer
      const o3 = c.createOscillator(), g3 = c.createGain();
      o3.type = 'triangle'; o3.frequency.value = 1318.51;
      g3.gain.setValueAtTime(0, now + 0.08);
      g3.gain.linearRampToValueAtTime(0.08, now + 0.12);
      g3.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o3.connect(g3); g3.connect(c.destination);
      o3.start(now + 0.08); o3.stop(now + 0.35);
    } catch(e) {}
    vibrate(40); // short success tap
  }
  // ── Wrong: low descending buzz ──
  function playWrong() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Low tone
      const o1 = c.createOscillator(), g1 = c.createGain();
      o1.type = 'square'; o1.frequency.value = 185;
      o1.frequency.linearRampToValueAtTime(140, now + 0.25);
      g1.gain.setValueAtTime(0.15, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o1.connect(g1); g1.connect(c.destination);
      o1.start(now); o1.stop(now + 0.3);
      // Second dissonant tone
      const o2 = c.createOscillator(), g2 = c.createGain();
      o2.type = 'sawtooth'; o2.frequency.value = 233;
      o2.frequency.linearRampToValueAtTime(175, now + 0.2);
      g2.gain.setValueAtTime(0.07, now);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o2.connect(g2); g2.connect(c.destination);
      o2.start(now); o2.stop(now + 0.25);
    } catch(e) {}
    vibrate([80, 40, 80]); // double-buzz error pattern
  }
  // ── Almost: mid-range wobble ──
  function playAlmost() {
    try {
      const c = getCtx(), now = c.currentTime;
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle'; o.frequency.value = 440;
      o.frequency.setValueAtTime(440, now);
      o.frequency.linearRampToValueAtTime(466, now + 0.1);
      o.frequency.linearRampToValueAtTime(440, now + 0.2);
      g.gain.setValueAtTime(0.15, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o.connect(g); g.connect(c.destination);
      o.start(now); o.stop(now + 0.3);
    } catch(e) {}
    vibrate([30, 20, 30]); // gentle double-tap
  }

  // ── Combo celebration: play when getting several correct in a row ──
  function playCombo() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Rapid ascending arpeggio C5→E5→G5→C6
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.value = freq;
        const t = now + i * 0.06;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.18, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        o.connect(g); g.connect(c.destination);
        o.start(t); o.stop(t + 0.2);
      });
    } catch(e) {}
    vibrate([30, 20, 30, 20, 60]); // celebratory pattern
  }

  // ── Sound preference (stored in localStorage) ──
  function sfxEnabled() {
    try { return localStorage.getItem('aprende_sfx') !== 'off'; } catch(e) { return true; }
  }
  function sfxSetEnabled(on) {
    try { localStorage.setItem('aprende_sfx', on ? 'on' : 'off'); } catch(e) {}
    document.getElementById('sfx-status-dot')?.style && updateSfxDot();
  }
  function updateSfxDot() {
    const dot = document.getElementById('sfx-status-dot');
    if (!dot) return;
    dot.style.display = 'block';
    dot.style.background = sfxEnabled() ? '#58cc02' : '#777';
  }

  // ── Vibration-only preference ──
  function vibeEnabled() {
    try { return localStorage.getItem('aprende_vibe') !== 'off'; } catch(e) { return true; }
  }
  function vibeSetEnabled(on) {
    try { localStorage.setItem('aprende_vibe', on ? 'on' : 'off'); } catch(e) {}
  }

  // ── Visual flash effect (green/red overlay like Duolingo) ──
  let flashEl = null;
  function flashScreen(color) {
    if (!flashEl) {
      flashEl = document.createElement('div');
      flashEl.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:0;transition:opacity .15s ease-out';
      document.body.appendChild(flashEl);
    }
    flashEl.style.background = color;
    flashEl.style.opacity = '0.18';
    setTimeout(() => { flashEl.style.opacity = '0'; }, 180);
  }

  // ── Mini confetti burst (for combos ≥ 5) ──
  function confettiBurst() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998';
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx2d = canvas.getContext('2d');
    const colors = ['#58cc02','#ffc800','#ff4b4b','#1cb0f6','#ce82ff','#ff9600'];
    const pieces = Array.from({length: 40}, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 60,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 12,
      vy: -Math.random() * 14 - 4,
      r: Math.random() * 5 + 2,
      c: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3
    }));
    let frame = 0;
    function draw() {
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.5; p.rot += p.vr;
        ctx2d.save(); ctx2d.translate(p.x, p.y); ctx2d.rotate(p.rot);
        ctx2d.fillStyle = p.c; ctx2d.fillRect(-p.r, -p.r/2, p.r*2, p.r);
        ctx2d.restore();
      });
      frame++;
      if (frame < 50) requestAnimationFrame(draw);
      else canvas.remove();
    }
    requestAnimationFrame(draw);
  }

  // ── MutationObserver: auto-detect correct/wrong classes ──
  let lastSfxTime = 0;
  let comboCount = 0;
  const DEBOUNCE = 120; // ms — avoid double-fires
  const observer = new MutationObserver(muts => {
    const now = Date.now();
    if (now - lastSfxTime < DEBOUNCE) return;
    for (const m of muts) {
      if (m.type !== 'attributes' || m.attributeName !== 'class') continue;
      const el = m.target;
      if (!el.classList) continue;
      // Skip course exercises — SFX is called directly from crsResult()
      if (el.closest && el.closest('#screen-lesson')) continue;
      if (el.classList.contains('correct') || el.classList.contains('ok')) {
        lastSfxTime = now;
        comboCount++;
        if (sfxEnabled()) {
          if (comboCount >= 5 && comboCount % 5 === 0) {
            playCombo(); confettiBurst();
          } else {
            playCorrect();
          }
        }
        if (vibeEnabled()) vibrate(40);
        flashScreen('rgba(88, 204, 2, 0.5)'); // green flash
        return;
      }
      if (el.classList.contains('wrong') || el.classList.contains('bad')) {
        lastSfxTime = now;
        comboCount = 0; // reset combo
        if (sfxEnabled()) playWrong();
        if (vibeEnabled()) vibrate([80, 40, 80]);
        flashScreen('rgba(255, 75, 75, 0.5)'); // red flash
        return;
      }
      if (el.classList.contains('almost')) {
        lastSfxTime = now;
        comboCount = 0;
        if (sfxEnabled()) playAlmost();
        if (vibeEnabled()) vibrate([30, 20, 30]);
        flashScreen('rgba(255, 200, 0, 0.5)'); // amber flash
        return;
      }
    }
  });
  observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });

  // Init dot
  setTimeout(updateSfxDot, 500);

  return { playCorrect, playWrong, playAlmost, playCombo, sfxEnabled, sfxSetEnabled,
           vibeEnabled, vibeSetEnabled, updateSfxDot, confettiBurst, vibrate };
})();

function toggleSfxBtn() {
  const on = !SFX.sfxEnabled();
  SFX.sfxSetEnabled(on);
  const btn = document.getElementById('btn-sfx');
  if (btn) btn.querySelector('span').textContent = on ? '🔊' : '🔇';
  if (on) SFX.playCorrect(); // preview sound when turning on
}
