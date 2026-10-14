import React, { useState, useEffect, useRef } from 'react';
import { Video, VideoOff, Eye, Sliders, Zap } from 'lucide-react';

export function BackgroundVideo({ 
  videoEnabled = true, 
  onToggleVideo,
  audioEnabled = false 
}) {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(0.45);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showControls, setShowControls] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Subtle interactive parallax shift following cursor
  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 20;
      targetY = (e.clientY / innerHeight - 0.5) * 20;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ensure video plays continuously
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (videoEnabled) {
      video.play().catch(() => {
        // Autoplay policy fallback
      });
    } else {
      video.pause();
    }
  }, [videoEnabled]);

  return (
    <div className={`cyber-video-bg-container ${videoEnabled ? 'active' : 'disabled'}`}>
      {/* Dynamic Video Layer with Parallax */}
      <div 
        className="cyber-video-wrapper"
        style={{
          transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0) scale(1.06)`,
          opacity: videoEnabled ? opacity : 0,
        }}
      >
        <video
          ref={videoRef}
          className="cyber-bg-video-element"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          src="/cyber-bg.webm"
        />
      </div>

      {/* Futuristic Cyber Color Grading & Shading Overlays */}
      <div className="cyber-video-color-grade" />
      <div className="cyber-video-scanline-mesh" />
      <div className="cyber-video-vignette" />

      {/* Floating Dynamic Video Quick Toggle Pill */}
      <div className="cyber-video-quick-badge">
        <button
          className="cyber-video-pill-btn"
          onClick={() => onToggleVideo ? onToggleVideo(!videoEnabled) : null}
          title={videoEnabled ? "Turn off background video" : "Turn on background video"}
        >
          {videoEnabled ? <Video size={13} color="var(--neon-cyan)" /> : <VideoOff size={13} />}
          <span>{videoEnabled ? 'BG VIDEO: LIVE' : 'BG VIDEO: OFF'}</span>
          <span className={`live-pulse-dot ${videoEnabled ? 'pulsing' : ''}`} />
        </button>

        <button 
          className="cyber-video-ctrl-btn"
          onClick={() => setShowControls(prev => !prev)}
          title="Adjust background video intensity"
        >
          <Sliders size={12} />
        </button>

        {showControls && (
          <div className="cyber-video-slider-popup">
            <div className="slider-header">
              <span>VIDEO OPACITY</span>
              <span>{Math.round(opacity * 100)}%</span>
            </div>
            <input 
              type="range" 
              min="0.1" 
              max="0.85" 
              step="0.05"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="cyber-range-slider"
            />
            <div className="slider-presets">
              <button onClick={() => setOpacity(0.25)}>Subtle</button>
              <button onClick={() => setOpacity(0.45)}>Cyber</button>
              <button onClick={() => setOpacity(0.75)}>Vibrant</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
