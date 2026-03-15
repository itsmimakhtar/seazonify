// Happy New Year Effect for Seazonify Controller
// Advanced New Year celebration with cinematic welcome portal and idle screensaver.
// Compatible with SeazonifyController.injectVisualEffect()
// Usage: SeazonifyController.injectVisualEffect(happyNewYearEffect);

const happyNewYearEffect = {
  name: "Happy New Year",
  description: "Celebrate the new year on your website with this beautiful and elegant cinematic effect. Featuring realistic sparkling fireworks, slow-falling celebration particles, champagne sparkles, and a mesmerizing countdown-style portal.",
  author: "Md Mim Akhtar",
  type: "visual",
  icon: "🎆",
  thumbnail: "https://cdn.jsdelivr.net/gh/iMiMofficial/Seazonify@main/assets/effects/visual/thumbnails/happy-new-year.webp",
  license: "https://seazonify.com/license",
  version: "1.0.4",
  created: new Date().toISOString().split('T')[0],
  category: "celebration",
  tags: ["new year", "celebration", "fireworks", "cinematic", "portal", "elegant", "particles"],

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&display=swap');

    .szfy-hny-root {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 999999;
      overflow: hidden;
      background: transparent;
      font-family: 'Montserrat', sans-serif;
    }

    /* ─── The Cinematic Portal (Entry/Screensaver) ─── */
    .szfy-hny-portal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: #000511; /* Deep midnight blue/black */
      z-index: 1000000;
      display: flex; align-items: center; justify-content: center;
      transition: opacity 2s ease-in-out, visibility 2s;
      visibility: visible;
    }
    .szfy-hny-portal-overlay.szfy-fade-out {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .szfy-hny-portal-overlay.szfy-screensaver-active {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    .szfy-hny-portal-star {
      position: absolute;
      width: 150px; height: 150px;
      background: radial-gradient(circle, #fff 0%, #fff 10%, rgba(255, 215, 0, 0.8) 30%, transparent 70%);
      border-radius: 50%;
      opacity: 0;
      animation: szfy-hny-star-bloom 5s 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards;
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    
    @keyframes szfy-hny-star-bloom {
      0% { transform: scale(0.01) translateZ(0); opacity: 0; }
      10% { opacity: 0.5; transform: scale(0.1) translateZ(0); }
      30% { transform: scale(0.2) translateZ(0); opacity: 0.6; }
      70% { transform: scale(1.5) translateZ(0); opacity: 0.4; }
      85% { transform: scale(4) translateZ(0); opacity: 0.2; }
      100% { transform: scale(15) translateZ(0); opacity: 0; }
    }

    /* ─── Elegant Clock/Mandala Graphic ─── */
    .szfy-hny-portal-clock {
      position: absolute;
      width: 50vmax; height: 50vmax;
      opacity: 0;
      transform: rotate(-90deg) scale(0) translateZ(0);
      animation: szfy-hny-clock-expand 7s 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards;
      pointer-events: none;
      will-change: transform, opacity;
    }
    
    @keyframes szfy-hny-clock-expand {
      0% { transform: rotate(-90deg) scale(0) translateZ(0); opacity: 0; }
      40% { opacity: 0.2; }
      100% { transform: rotate(180deg) scale(4.4) translateZ(0); opacity: 0; }
    }

    /* ─── City Skyline / Celebration Bottom Detail ─── */
    .szfy-hny-bottom-ground {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 30vh;
      background: linear-gradient(to top, rgba(255, 215, 0, 0.08), transparent);
      z-index: 1000000;
      pointer-events: none;
      opacity: 0;
      will-change: opacity;
      animation: szfy-hny-fade-in 3s 0s forwards;
    }

    /* ─── Impact Pulse (Midnight Strike) ─── */
    .szfy-hny-pulse {
      position: fixed;
      top: 50%; left: 50%;
      width: 100px; height: 100px;
      background: radial-gradient(circle, #fff 0%, #ffd700 30%, transparent 100%);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0) translateZ(0);
      z-index: 1000001;
      pointer-events: none;
      will-change: transform, opacity;
      opacity: 0;
    }
    .szfy-hny-pulse.szfy-active {
      animation: szfy-hny-shockwave 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
    @keyframes szfy-hny-shockwave {
      0% { transform: translate(-50%, -50%) scale(0) translateZ(0); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(30) translateZ(0); opacity: 0; }
    }

    /* ─── Gold Leaf Typography (The Proclamation) ─── */
    .szfy-hny-proclamation {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1000001;
      width: 95vw;
      max-width: 1000px;
      line-height: 1.1;
      pointer-events: none;
    }
    .szfy-hny-text-glow {
      font-family: 'Cinzel', serif;
      font-size: clamp(3rem, 10vw, 9rem);
      font-weight: 700;
      background: linear-gradient(135deg, #FFD700 0%, #FFF8DC 40%, #FFD700 60%, #FFA500 100%);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: szfy-hny-gold-shimmer 6s infinite linear, szfy-hny-fade-in 2.5s 0.5s forwards;
      text-shadow: 0 0 25px rgba(255, 215, 0, 0.4);
      letter-spacing: 0.05em;
      opacity: 0;
      margin: 0;
      padding: 0;
    }
    @keyframes szfy-hny-fade-in {
      to { opacity: 1; }
    }
    @keyframes szfy-hny-gold-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .szfy-hny-subtext {
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(1.5rem, 4vw, 3rem);
        color: #e0c080;
        font-weight: 300;
        margin-top: 15px;
        opacity: 0;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        animation: szfy-hny-text-reveal 2.5s 1.5s forwards;
        text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    }
    @keyframes szfy-hny-text-reveal {
        to { opacity: 1; transform: translateY(-5px); }
    }

    /* ─── Welcome Screen Enhancements ─── */
    .szfy-hny-rays {
      position: absolute;
      top: 50%; left: 50%;
      width: 25vmax; height: 25vmax;
      background: repeating-conic-gradient(
        from 0deg,
        rgba(255, 215, 0, 0.04) 0deg 5deg,
        transparent 5deg 15deg
      );
      -webkit-mask-image: radial-gradient(circle, black 30%, transparent 60%);
      mask-image: radial-gradient(circle, black 30%, transparent 60%);
      border-radius: 50%;
      animation: szfy-hny-spin-rays 90s linear infinite, szfy-hny-fade-in 3s 1s forwards;
      pointer-events: none;
      will-change: transform, opacity;
      opacity: 0;
    }
    @keyframes szfy-hny-spin-rays {
      0% { transform: translate(-50%, -50%) rotate(0deg) scale(6) translateZ(0); }
      100% { transform: translate(-50%, -50%) rotate(360deg) scale(6) translateZ(0); }
    }

    .szfy-hny-motes-container {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      overflow: hidden;
      pointer-events: none;
    }
    .szfy-hny-mote {
      position: absolute;
      bottom: -10%;
      background: #FFD700;
      border-radius: 50%;
      box-shadow: 0 0 8px 1px rgba(255, 215, 0, 0.8), 0 0 12px 3px rgba(255, 140, 0, 0.5);
      opacity: 0;
      animation: szfy-hny-float-up linear infinite;
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    @keyframes szfy-hny-float-up {
      0% { transform: translateY(0) scale(0.5) translateZ(0); opacity: 0; }
      20% { opacity: 0.8; }
      80% { opacity: 0.6; }
      100% { transform: translateY(-120vh) scale(1.5) translateZ(0); opacity: 0; }
    }

    /* ─── Canvas Layers (Fireworks and Stars) ─── */
    #szfy-hny-canvas-bg, #szfy-hny-canvas-fg {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      display: block;
    }
    #szfy-hny-canvas-bg { z-index: 999999; }
    #szfy-hny-canvas-fg { z-index: 1000005; }
    
    /* ─── Unobtrusive Idle Elements ─── */
    .szfy-hny-idle-wrapper {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        z-index: 1000002;
        pointer-events: none;
        opacity: 0;
        transition: opacity 2s ease-in-out;
    }
    .szfy-hny-idle-wrapper.szfy-idle-reveal {
        opacity: 1;
    }
    .szfy-hny-idle-text {
        position: absolute;
        bottom: 5vh;
        right: 5vw;
        color: rgba(255, 215, 0, 0.6);
        font-family: 'Cinzel', serif;
        font-size: 3rem;
        letter-spacing: 2px;
        text-shadow: 0 0 10px rgba(255,215,0,0.3);
    }
  `,

  html: `
    <div class="szfy-hny-root" id="szfy-hny-root">
      <div class="szfy-hny-portal-overlay" id="szfy-hny-portal-overlay">
        <div class="szfy-hny-rays"></div>
        <div class="szfy-hny-motes-container" id="szfy-hny-motes-container"></div>
        <!-- Abstract Clock / Celebration Radial -->
        <svg class="szfy-hny-portal-clock" viewBox="0 0 100 100">
           <defs>
             <linearGradient id="hnyPortalGrad" x1="0" y1="0" x2="1" y2="1">
               <stop offset="0%" stop-color="#FFD700" />
               <stop offset="100%" stop-color="#FF4500" />
             </linearGradient>
           </defs>
           <g fill="none" stroke="url(#hnyPortalGrad)" stroke-width="0.2" opacity="0.6">
             <circle cx="50" cy="50" r="48" stroke-dasharray="1 2"/>
             <circle cx="50" cy="50" r="40" stroke-width="0.5"/>
             <circle cx="50" cy="50" r="30" stroke-dasharray="0.5 4"/>
             <!-- Clock Tick Marks -->
             <path d="M50,2 L50,6 M50,94 L50,98 M2,50 L6,50 M94,50 L98,50" stroke-width="1"/>
             <path d="M16,16 L19,19 M81,81 L84,84 M16,84 L19,81 M81,16 L84,19" stroke-width="0.5"/>
             <!-- Starburst Lines -->
             <path d="M50,50 L50,15 M50,50 L85,50 M50,50 L25,25" />
           </g>
        </svg>
        <div class="szfy-hny-portal-star"></div>
        
        <div class="szfy-hny-proclamation">
          <h1 class="szfy-hny-text-glow" id="szfy-hny-greeting">Happy New Year</h1>
          <div class="szfy-hny-subtext" id="szfy-hny-subtext"></div>
        </div>
        <div class="szfy-hny-bottom-ground"></div>
      </div>

      <canvas id="szfy-hny-canvas-bg"></canvas>
      <canvas id="szfy-hny-canvas-fg"></canvas>

      <div class="szfy-hny-idle-wrapper" id="szfy-hny-idle-wrapper">
          <div class="szfy-hny-idle-text" id="szfy-hny-idle-year"></div>
      </div>
      <div class="szfy-hny-pulse" id="szfy-hny-pulse"></div>
    </div>
  `,

  js: `
    (function() {
      // Singularity Guard: Ensure only one instance runs
      const root = document.getElementById('szfy-hny-root');
      if (!root || root.getAttribute('data-szfy-init')) return;
      
      // Conflict Resolution: Clear any orphaned legacy elements
      document.querySelectorAll('.szfy-hny-root').forEach(el => {
        if (el !== root) el.remove();
      });
      
      root.setAttribute('data-szfy-init', 'true');

      const bgCanvas = document.getElementById('szfy-hny-canvas-bg');
      const fgCanvas = document.getElementById('szfy-hny-canvas-fg');
      const bgCtx = bgCanvas.getContext('2d');
      const fgCtx = fgCanvas.getContext('2d');
      const portal = document.getElementById('szfy-hny-portal-overlay');
      const idleWrapper = document.getElementById('szfy-hny-idle-wrapper');

      let width, height, animationId;
      let stars = [], fireworks = [], particles = [], champagneBubbles = [], fallingConfetti = [];
      let isRevealed = false;
      let isScreensaverActive = false;
      let isIdleRevealed = false;
      let idleTimer1m, idleTimer5m;
      // Track time of last firework launched in foreground
      let lastFireworkTime = 0;

      function getBrandName() {
        try {
          if (window.SeazonifyBrand) return window.SeazonifyBrand;
          const ogSite = document.querySelector('meta[property="og:site_name"]');
          if (ogSite && ogSite.content) return ogSite.content;
          let title = document.title || "";
          if (title) {
            title = title.split(/[|\-–—]/)[0].trim();
            if (title.length > 3 && title.length < 25) return title;
          }
          return null; 
        } catch(e) { return null; }
      }

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        bgCanvas.width = fgCanvas.width = width;
        bgCanvas.height = fgCanvas.height = height;
      }

      function initParticles() {
        stars = [];
        // Elegant, sparse starry night background (reduced from 150 to 80)
        for(let i=0; i<80; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 0.4 + 0.1, // slightly smaller
            o: Math.random()
          });
        }
        
        champagneBubbles = [];
        // Reduced from 40 to 15, slowed down
        for(let i=0; i<15; i++) { 
            champagneBubbles.push({
                x: Math.random() * width,
                y: height + Math.random() * height,
                s: Math.random() * 3 + 1, // smaller
                v: Math.random() * 0.8 + 0.2, // much slower rise
                drift: (Math.random() - 0.5) * 1.5,
                o: Math.random() * 0.4 + 0.1
            });
        }
        
        fallingConfetti = [];
        const confettiColors = ['#FFD700', '#FFF8DC', '#FFA500', '#f1f1f1', '#e8cfa1'];
        // Drastically reduced confetti count from 150 to 45, made falling much slower and gentler
        for(let i=0; i<45; i++) {
            const vy = Math.random() * 0.4 + 0.15; // Slow vertical fall
            const vx = Math.random() * 0.5 - 0.25; 
            fallingConfetti.push({
                x: Math.random() * width,
                y: Math.random() * height - height, 
                s: Math.random() * 2 + 1.5, 
                vy: vy,
                vx: vx, 
                targetVx: vx,
                driftPhase: Math.random() * Math.PI * 2, // Used for gradual drift changes
                color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
            });
        }
      }

      function launchFirework() {
          const startX = width * 0.1 + Math.random() * (width * 0.8);
          // High arc
          const targetY = height * 0.1 + Math.random() * (height * 0.4); 
          const colors = ['#FFD700', '#FFB6C1', '#87CEEB', '#98FB98', '#FFFFFF', '#FFA500'];
          const types = ['standard', 'standard', 'willow', 'ring', 'strobe', 'heart'];
          
          fireworks.push({
              x: startX,
              y: height,
              tx: startX + (Math.random() - 0.5) * 50, // Less curve, straighter shot up
              ty: targetY,
              speed: 6 + Math.random() * 2, // Ascend speed
              color: colors[Math.floor(Math.random() * colors.length)],
              type: types[Math.floor(Math.random() * types.length)],
              trail: [],
              exploded: false
          });
      }

      function explodeFirework(fw) {
          let particleCount = Math.floor(Math.random() * 120) + 150; 
          let fwGravity = 0.02;
          let fwFriction = 0.95;
          let burstSpeed = 3.5;
          let type = fw.type || 'standard';

          if (type === 'willow') {
              particleCount = 200 + Math.random() * 100;
              fwGravity = 0.04; // heavier fall
              fwFriction = 0.97; // let trailing go further
              burstSpeed = 2.5; // softer burst
          } else if (type === 'ring') {
              particleCount = 80 + Math.random() * 20;
              fwGravity = 0.01;
              fwFriction = 0.95;
              burstSpeed = 5.0 + Math.random();
          } else if (type === 'strobe') {
              particleCount = 120 + Math.random() * 40;
              burstSpeed = 4.0;
          } else if (type === 'heart') {
              particleCount = 90 + Math.random() * 30;
              fwGravity = 0.015;
              burstSpeed = 3.0;
          }
          
          for (let i = 0; i < particleCount; i++) {
              let angle = Math.random() * Math.PI * 2;
              let speed = Math.random() * burstSpeed + 0.5; 
              
              if (type === 'ring') {
                  angle = (i / particleCount) * Math.PI * 2;
                  speed = burstSpeed; // EXACT speed for perfect outline
              } else if (type === 'heart') {
                  const t = (i / particleCount) * Math.PI * 2;
                  const hx = 16 * Math.pow(Math.sin(t), 3);
                  const hy = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
                  const scale = burstSpeed * 0.04; 
                  angle = Math.atan2(hy, hx);
                  speed = Math.sqrt(hx*hx + hy*hy) * scale;
              }

              let pColor = Math.random() > 0.4 ? fw.color : (Math.random() > 0.5 ? '#FFFFFF' : '#FFD700'); 
              if (type === 'strobe') {
                  pColor = Math.random() > 0.5 ? fw.color : '#FFFFFF';
              } else if (type === 'heart') {
                  pColor = ['#FF1493', '#FF0000', '#FF69B4', fw.color][Math.floor(Math.random()*4)];
              }

              particles.push({
                  x: fw.tx,
                  y: fw.ty,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed,
                  color: pColor,
                  size: (type === 'strobe') ? (Math.random() * 2.5 + 1.0) : (Math.random() * 1.5 + 0.5), 
                  alpha: 1,
                  decay: type === 'willow' ? (Math.random() * 0.003 + 0.001) : (Math.random() * 0.01 + 0.005), 
                  gravity: fwGravity, 
                  friction: fwFriction, 
                  flickerRate: type === 'strobe' ? (Math.random() * 0.4 + 0.3) : (Math.random() * 0.2 + 0.05),
                  phase: Math.random() * Math.PI * 2
              });
          }
      }

      function draw() {
        // Clear canvases completely
        bgCtx.clearRect(0, 0, width, height);
        // Pure clear Rect to remove motion tails. No paint look!
        fgCtx.clearRect(0, 0, width, height);
        
        if (!isRevealed) {
            const grad = bgCtx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width*0.8);
            grad.addColorStop(0, '#040b1e');
            grad.addColorStop(1, '#000205');
            bgCtx.fillStyle = grad;
            bgCtx.fillRect(0, 0, width, height);
        }

        // Draw twinkling stars
        bgCtx.fillStyle = "#fff";
        stars.forEach(s => {
           s.o += 0.003; // slower twinkle
           const maxAlpha = (!isRevealed || isIdleRevealed) ? 0.6 : 0.1; // subtly darker
           bgCtx.globalAlpha = Math.min((0.1 + Math.abs(Math.sin(s.o)) * 0.5), maxAlpha);
           bgCtx.beginPath();
           bgCtx.arc(s.x, s.y, s.z * 2.2, 0, Math.PI*2);
           bgCtx.fill();
        });

        // Draw Slow-Falling Confetti with natural drift
        fallingConfetti.forEach(c => {
           // Smoothly interpolate current drift towards target drift
           c.vx += (c.targetVx - c.vx) * 0.02; 
           
           c.y += c.vy; 
           c.x += c.vx; 
           
           // Periodically assign a new target drift to simulate changing air currents
           c.driftPhase += 0.01;
           if (Math.sin(c.driftPhase) > 0.95) {
               c.targetVx = Math.random() * 1.5 - 0.75; // gentle breeze change
           }
           
           if (c.y > height + 10) { 
               c.y = -10; 
               c.x = width * Math.random();
               // reset drifts softly on loop
               c.vx = Math.random() * 0.5 - 0.25;
               c.targetVx = c.vx;
           }
           if (c.x > width + 10) c.x = -10;
           if (c.x < -10) c.x = width + 10;

           const particleAlpha = (!isRevealed || isIdleRevealed) ? 0.6 : 0.25; 
           fgCtx.globalAlpha = particleAlpha;
           fgCtx.fillStyle = c.color;
           fgCtx.beginPath();
           fgCtx.arc(c.x, c.y, c.s, 0, Math.PI*2);
           fgCtx.fill();
           
           if (particleAlpha > 0.3 && (c.color === '#FFD700' || c.color === '#f1f1f1')) {
               fgCtx.shadowBlur = 3;
               fgCtx.shadowColor = c.color;
               fgCtx.fill();
               fgCtx.shadowBlur = 0;
           }
        });

        // Draw Champagne Bubbles
        champagneBubbles.forEach(b => {
           b.y -= b.v;
           b.x += b.drift;
           if (b.y < -10) { 
               b.y = height + 10; 
               b.x = width * Math.random();
           }
           const maxAlpha = (!isRevealed || isIdleRevealed) ? b.o + 0.1 : 0.05;
           fgCtx.globalAlpha = maxAlpha;
           fgCtx.fillStyle = "#FFD700";
           fgCtx.beginPath();
           fgCtx.arc(b.x, b.y, b.s, 0, Math.PI*2);
           fgCtx.fill();
        });

        // Increase fireworks rate drastically
        if (Math.random() < 0.03) {
            const now = Date.now();
            if (now - lastFireworkTime > 1500) { // Cooldown reduced heavily for more frequent firecrackers
                launchFirework();
                lastFireworkTime = now;
            }
        }

        fgCtx.lineCap = 'round';
        
        // Render ascending rockets
        for (let i = fireworks.length - 1; i >= 0; i--) {
            const fw = fireworks[i];
            const dx = fw.tx - fw.x;
            const dy = fw.ty - fw.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < fw.speed) {
                explodeFirework(fw);
                fireworks.splice(i, 1);
            } else {
                fw.x += (dx / dist) * fw.speed;
                fw.y += (dy / dist) * fw.speed;
                
                fgCtx.globalAlpha = 1; 
                fgCtx.strokeStyle = fw.color;
                fgCtx.lineWidth = 2;
                
                fgCtx.beginPath();
                fgCtx.moveTo(fw.x, fw.y);
                fgCtx.lineTo(fw.x - (dx / dist) * 15, fw.y - (dy / dist) * 15); // short solid tail
                fgCtx.stroke();
            }
        }

        // Render explosion micro-particles (NO MOTION BLUR LINE, PURE DOTS)
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            
            p.vx *= p.friction; 
            p.vy *= p.friction; 
            p.vy += p.gravity;
            
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;
            p.phase += p.flickerRate; 
            
            if (p.alpha <= 0) {
                particles.splice(i, 1);
            } else {
                const twinkleComponent = (Math.sin(p.phase) * 0.5 + 0.5); 
                const currentAlpha = Math.max(0, p.alpha * twinkleComponent);
                
                fgCtx.globalAlpha = currentAlpha;
                fgCtx.fillStyle = p.color;
                
                fgCtx.beginPath();
                // ONLY draw precise dots to remove stringy paint/water look
                fgCtx.arc(p.x, p.y, p.size, 0, Math.PI*2);
                fgCtx.fill();
                
                if (currentAlpha > 0.4) {
                    fgCtx.shadowBlur = 3;
                    fgCtx.shadowColor = p.color;
                    fgCtx.fill();
                    fgCtx.shadowBlur = 0;
                }
            }
        }

        animationId = requestAnimationFrame(draw);
      }

      function triggerReveal() {
        isRevealed = true;
        isScreensaverActive = false;
        
        portal.classList.remove('szfy-screensaver-active');
        portal.classList.add('szfy-fade-out');
        
        const pulse = document.getElementById('szfy-hny-pulse') || createPulse();
        pulse.classList.add('szfy-active');
        
        // Massive burst of fireworks at start 
        for(let i=0; i<8; i++) {
            setTimeout(launchFirework, i * 300); 
        }
        
        setTimeout(() => {
          pulse.remove();
        }, 2500);
      }

      function createPulse() {
        const p = document.createElement('div');
        p.className = 'szfy-hny-pulse';
        p.id = 'szfy-hny-pulse';
        root.appendChild(p);
        return p;
      }

      function hideIdleState() {
        isIdleRevealed = false;
        idleWrapper.classList.remove('szfy-idle-reveal');
      }

      function showIdleState() {
        isIdleRevealed = true;
        idleWrapper.classList.add('szfy-idle-reveal');
      }

      function goScreensaver() {
        if (isScreensaverActive) return;
        isScreensaverActive = true;
        isRevealed = false; // Prepare for re-reveal
        
        portal.classList.remove('szfy-fade-out');
        portal.classList.add('szfy-screensaver-active');
        
        const star = portal.querySelector('.szfy-hny-portal-star');
        const clock = portal.querySelector('.szfy-hny-portal-clock');
        const proclamation = portal.querySelector('.szfy-hny-proclamation');
        
        [star, clock, proclamation].forEach(el => {
          if (el) {
            const clone = el.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
          }
        });
      }

      function resetIdleTimers() {
        clearTimeout(idleTimer1m);
        clearTimeout(idleTimer5m);

        if (isScreensaverActive) {
          triggerReveal();
          hideIdleState();
        } else {
          hideIdleState();
        }

        idleTimer1m = setTimeout(showIdleState, 45000); 
        idleTimer5m = setTimeout(goScreensaver, 300000); 
      }

      function initMotes() {
          const container = document.getElementById('szfy-hny-motes-container');
          if (!container) return;
          for(let i=0; i<35; i++) {
             const mote = document.createElement('div');
             mote.className = 'szfy-hny-mote';
             mote.style.left = Math.random() * 100 + '%';
             
             const dur = (Math.random() * 8 + 4);
             mote.style.animationDuration = dur + 's';
             mote.style.animationDelay = (Math.random() * 5) + 's';
             
             const size = (Math.random() * 3 + 1);
             mote.style.width = size + 'px';
             mote.style.height = size + 'px';
             
             container.appendChild(mote);
          }
      }

      function init() {
        resize();
        initParticles();
        initMotes();
        
        const currentYear = new Date().getFullYear();
        document.getElementById('szfy-hny-subtext').textContent = currentYear;
        document.getElementById('szfy-hny-idle-year').textContent = currentYear;
        
        const brand = getBrandName();
        if (brand) {
            const titleEl = document.getElementById('szfy-hny-greeting');
            titleEl.innerHTML = \`Happy New Year<br><span style="font-size: 0.5em; color: #FFF8DC;">from \${brand}</span>\`;
        }
        
        draw();

        setTimeout(() => {
          if (!isRevealed && !isScreensaverActive) {
            triggerReveal();
          }
        }, 7000); 

        window.addEventListener('resize', resize, {passive: true});
        
        const interactionEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'];
        interactionEvents.forEach(evt => {
          window.addEventListener(evt, resetIdleTimers, {passive: true});
        });
        
        resetIdleTimers();
      }

      init();
    })();
  `
};

// Auto-inject if SeazonifyController is available
if (typeof window !== 'undefined' && window.SeazonifyController) {
  window.SeazonifyController.injectVisualEffect(happyNewYearEffect);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = happyNewYearEffect;
}
