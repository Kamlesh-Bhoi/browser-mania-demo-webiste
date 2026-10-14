import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Zap, Video, Volume2, VolumeX, 
  Eye, ArrowUp, Compass, Activity, Terminal
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export function InteractiveCyberLayer({
  videoEnabled,
  setVideoEnabled,
  scanlinesEnabled,
  setScanlinesEnabled,
  audioEnabled,
  setAudioEnabled
}) {
  const canvasRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [plexusActive, setPlexusActive] = useState(true);
  const [hudMinimized, setHudMinimized] = useState(false);
  const [clickBursts, setClickBursts] = useState([]);
  const mouseCoords = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  // 1. DYNAMIC NEON MOUSE CURSOR & TRAIL LOGIC
  useEffect(() => {
    let animId;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseCoords.current.targetX = e.clientX;
      mouseCoords.current.targetY = e.clientY;
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive element
      const target = e.target;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, .round-card, .prize-card, .coordinator-card, .faq-item, .interactive-btn, [role="button"]');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      createShockwave(e.clientX, e.clientY);
      soundFx.playClick();
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const updateRing = () => {
      // Spring interpolation for smooth lagging HUD ring
      currentX += (mouseCoords.current.targetX - currentX) * 0.18;
      currentY += (mouseCoords.current.targetY - currentY) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    animId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. CLICK SHOCKWAVE BURSTS
  const createShockwave = (x, y) => {
    const id = Date.now() + Math.random();
    setClickBursts((prev) => [...prev.slice(-6), { id, x, y }]);
    setTimeout(() => {
      setClickBursts((prev) => prev.filter((b) => b.id !== id));
    }, 700);
  };

  // 3. INTERACTIVE NEURAL PARTICLE PLEXUS (CANVAS)
  useEffect(() => {
    if (!plexusActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 22000), 65);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? '#00f0ff' : '#ff007f',
      });
    }

    const drawPlexus = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseCoords.current.x;
      const my = mouseCoords.current.y;
      const maxDist = 130;
      const mouseMaxDist = 170;

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect particles dynamically to mouse cursor!
        if (mx > 0 && my > 0) {
          const dmx = p.x - mx;
          const dmy = p.y - my;
          const mouseDist = Math.hypot(dmx, dmy);

          if (mouseDist < mouseMaxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            const alpha = (1 - mouseDist / mouseMaxDist) * 0.45;
            ctx.strokeStyle = `rgba(255, 0, 127, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Gentle magnetic push/pull towards cursor
            p.x += (mx - p.x) * 0.008;
            p.y += (my - p.y) * 0.008;
          }
        }
      }

      animationFrame = requestAnimationFrame(drawPlexus);
    };

    drawPlexus();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [plexusActive]);

  // 4. INTERACTIVE 3D CARD PARALLAX TILT & SPECULAR GLOSS
  useEffect(() => {
    const handleCardTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    };

    const handleCardLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    };

    // Attach to cards across the app dynamically
    const attachCards = () => {
      const cards = document.querySelectorAll(
        '.round-card, .prize-card, .coordinator-card, .faq-item, .guideline-box, .timeline-card, .stat-badge, .interactive-tool-card'
      );
      cards.forEach((card) => {
        card.classList.add('dynamic-3d-tilt');
        card.removeEventListener('mousemove', handleCardTilt);
        card.removeEventListener('mouseleave', handleCardLeave);
        card.addEventListener('mousemove', handleCardTilt, { passive: true });
        card.addEventListener('mouseleave', handleCardLeave, { passive: true });
      });
    };

    attachCards();
    const interval = setInterval(attachCards, 2000); // Check dynamically rendered elements
    return () => clearInterval(interval);
  }, []);

  // 5. CELEBRATORY CYBER BLAST (CONFETTI + LASER)
  const fireCyberBlast = useCallback(() => {
    soundFx.playLaser();
    confetti({
      particleCount: 85,
      spread: 90,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#ff007f', '#00ff66', '#ffbe0b', '#ffffff'],
      shapes: ['square', 'circle'],
      disableForReducedMotion: true,
      scalar: 1.1,
    });
  }, []);

  // 6. KEYBOARD SHORTCUTS INTERACTION
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        fireCyberBlast();
      } else if (e.key === 'b' || e.key === 'B') {
        setVideoEnabled((prev) => !prev);
        soundFx.playBeep(580, 0.05);
      } else if (e.key === 'm' || e.key === 'M') {
        setAudioEnabled((prev) => {
          const next = !prev;
          soundFx.toggle(next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fireCyberBlast, setVideoEnabled, setAudioEnabled]);

  // Scroll to Top Smooth
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundFx.playBeep(880, 0.08);
  };

  return (
    <>
      {/* Dynamic Interactive Plexus Mesh Canvas */}
      {plexusActive && (
        <canvas ref={canvasRef} className="cyber-plexus-canvas" />
      )}

      {/* Dynamic Custom Futuristic Cyber Cursor (Desktop) */}
      <div 
        ref={cursorDotRef} 
        className={`cyber-cursor-dot ${isMouseDown ? 'pressed' : ''} ${isHovered ? 'hover' : ''}`} 
      />
      <div 
        ref={cursorRingRef} 
        className={`cyber-cursor-ring ${isHovered ? 'hover' : ''} ${isMouseDown ? 'pressed' : ''}`}
      >
        <div className="crosshair-bracket top-left" />
        <div className="crosshair-bracket top-right" />
        <div className="crosshair-bracket bottom-left" />
        <div className="crosshair-bracket bottom-right" />
      </div>

      {/* Dynamic Shockwave Click Ripples */}
      {clickBursts.map((burst) => (
        <div
          key={burst.id}
          className="cyber-shockwave-ring"
          style={{ left: burst.x, top: burst.y }}
        />
      ))}

      {/* Dynamic Floating Cyber HUD Quick Dock */}
      <aside 
        className={`cyber-floating-dock ${hudMinimized ? 'minimized' : ''}`}
        aria-label="Cyber Quick Interaction HUD"
      >
        <button 
          className="dock-toggle-btn"
          onClick={() => {
            soundFx.playClick();
            setHudMinimized(!hudMinimized);
          }}
          title={hudMinimized ? "Expand Interactive HUD" : "Minimize HUD"}
        >
          <Activity size={15} />
          {!hudMinimized && <span>CYBER DOCK</span>}
        </button>

        {!hudMinimized && (
          <div className="dock-actions-row">
            {/* Background Video Toggle */}
            <button
              className={`dock-action-btn ${videoEnabled ? 'active-cyan' : ''}`}
              onClick={() => {
                soundFx.playClick();
                setVideoEnabled(!videoEnabled);
              }}
              title="Toggle Live Background Video [Press B]"
            >
              <Video size={14} />
              <span>{videoEnabled ? 'VIDEO ON' : 'VIDEO OFF'}</span>
            </button>

            {/* Neural Plexus Toggle */}
            <button
              className={`dock-action-btn ${plexusActive ? 'active-pink' : ''}`}
              onClick={() => {
                soundFx.playClick();
                setPlexusActive(!plexusActive);
              }}
              title="Toggle Interactive Neural Particles"
            >
              <Zap size={14} />
              <span>{plexusActive ? 'PLEXUS ON' : 'PLEXUS OFF'}</span>
            </button>

            {/* Confetti Cyber Blast */}
            <button
              className="dock-action-btn blast-btn"
              onClick={fireCyberBlast}
              title="Launch Cyber Blast [Press Space]"
            >
              <Sparkles size={14} />
              <span>BURST</span>
            </button>

            {/* SFX Toggle */}
            <button
              className={`dock-action-btn ${audioEnabled ? 'active-green' : ''}`}
              onClick={() => {
                const next = !audioEnabled;
                setAudioEnabled(next);
                soundFx.toggle(next);
              }}
              title="Toggle Web Audio SFX [Press M]"
            >
              {audioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              <span>{audioEnabled ? 'SFX' : 'MUTED'}</span>
            </button>

            {/* CRT Scanlines Toggle */}
            <button
              className={`dock-action-btn ${scanlinesEnabled ? 'active-cyan' : ''}`}
              onClick={() => {
                soundFx.playClick();
                setScanlinesEnabled(!scanlinesEnabled);
              }}
              title="Toggle CRT Scanline Retro Mode"
            >
              <Eye size={14} />
              <span>CRT</span>
            </button>

            {/* Scroll to Top */}
            <button
              className="dock-action-btn top-btn"
              onClick={scrollToTop}
              title="Scroll to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
