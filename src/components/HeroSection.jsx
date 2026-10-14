import React, { useState, useEffect } from 'react';
import { 
  Trophy, User, Ticket, Award, 
  Calendar, MapPin, ExternalLink, Play, 
  AlertTriangle, Sparkles, ChevronRight, Image as ImageIcon
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function HeroSection({ onOpenRegister, onOpenPoster }) {
  // Live Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATA.dateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Ambient Floating Code Snippets */}
      <div className="floating-code-snippet snippet-left">
        {`const game = ai.build();\ngame.start();\nwhile(1) { huntBugs(); }`}
      </div>
      <div className="floating-code-snippet snippet-right">
        {`# ERROR_404_NOT_FOUND\n# LEVEL_2_UNLOCKED\n# PRIZE_POOL: ₹15,000`}
      </div>

      <div className="container">
        {/* Department & Fest Branding Top Banner */}
        <div className="hero-subhead-banner">
          <div className="hero-dexterity-flag">
            DEXTERITY 2026
          </div>
          <div className="hero-college-dept">
            MMCOE // DEPARTMENT OF INFORMATION TECHNOLOGY PRESENTS
          </div>
        </div>

        {/* Big Glitch Title */}
        <h1 className="hero-main-title">
          BROWSER MANIA
        </h1>

        {/* Punchline Tagline */}
        <div className="hero-tagline-punch">
          <span>DEBUG.</span> <span>BUILD.</span> <span className="pink">DOMINATE.</span>
        </div>

        <p className="hero-desc">
          {EVENT_DATA.heroPunchline}
        </p>

        {/* Primary Action Buttons */}
        <div className="hero-cta-group">
          <button 
            className="btn-cyber-primary"
            onClick={() => {
              soundFx.playLaser();
              window.open(EVENT_DATA.googleFormUrl, '_blank', 'noopener,noreferrer');
              onOpenRegister();
            }}
          >
            <Sparkles size={18} />
            <span>Register for Competition</span>
            <ExternalLink size={16} />
          </button>

          <button 
            className="btn-cyber-pink"
            onClick={() => {
              soundFx.playClick();
              onOpenPoster();
            }}
          >
            <ImageIcon size={18} />
            <span>View Official Poster</span>
          </button>

          <a 
            href="#rounds" 
            className="btn-cyber-outline"
            onClick={() => soundFx.playClick()}
          >
            <Play size={16} />
            <span>Round Details</span>
          </a>
        </div>

        {/* Event Meta Badges: Date & Venue */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            <Calendar size={16} />
            <span><strong>DATE:</strong> {EVENT_DATA.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-green)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            <MapPin size={16} />
            <span><strong>VENUE:</strong> {EVENT_DATA.venue} (Offline Campus)</span>
          </div>
        </div>

        {/* Live Countdown Box */}
        <div className="countdown-box">
          <div className="countdown-label">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-cyan)' }}></span>
            <span>SYSTEM LAUNCH COUNTDOWN // OCTOBER 29, 2026</span>
          </div>

          <div className="countdown-units">
            <div className="countdown-unit">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-name">Days</span>
            </div>
            <span className="countdown-separator">:</span>

            <div className="countdown-unit">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-name">Hours</span>
            </div>
            <span className="countdown-separator">:</span>

            <div className="countdown-unit">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-name">Minutes</span>
            </div>
            <span className="countdown-separator">:</span>

            <div className="countdown-unit">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-name">Seconds</span>
            </div>
          </div>
        </div>

        {/* 4 Poster Highlight Cards */}
        <div className="hero-stats-grid">
          {/* Solo Competition */}
          <div className="stat-card cyber-glass cyber-cut">
            <div className="stat-card-icon cyan">
              <User size={24} />
            </div>
            <div className="stat-card-content">
              <h3>SOLO</h3>
              <p>Individual participation only</p>
            </div>
          </div>

          {/* Prize Pool */}
          <div className="stat-card cyber-glass cyber-cut">
            <div className="stat-card-icon pink">
              <Trophy size={24} />
            </div>
            <div className="stat-card-content">
              <h3 style={{ color: 'var(--neon-pink)' }}>₹ 15,000</h3>
              <p>Total Prize Pool</p>
            </div>
          </div>

          {/* Registration Fee */}
          <div className="stat-card cyber-glass cyber-cut">
            <div className="stat-card-icon cyan">
              <Ticket size={24} />
            </div>
            <div className="stat-card-content">
              <h3>ENTRY ₹60</h3>
              <p>Registration fee from ₹60</p>
            </div>
          </div>

          {/* Certificate */}
          <div className="stat-card cyber-glass cyber-cut">
            <div className="stat-card-icon green">
              <Award size={24} />
            </div>
            <div className="stat-card-content">
              <h3 style={{ color: 'var(--neon-green)' }}>CERTIFICATE</h3>
              <p>For all valid participants</p>
            </div>
          </div>
        </div>

        {/* Visual Poster Banner Showcase */}
        <div style={{
          background: 'rgba(8, 14, 28, 0.75)',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 0, 127, 0.15)',
              border: '1px solid var(--neon-pink)',
              padding: '12px',
              borderRadius: '8px',
              color: 'var(--neon-pink)'
            }}>
              <AlertTriangle size={24} />
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                ERROR 404: BUGS DETECTED // LEVEL 2 UNLOCKED
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Fix raw source code in Round 1 & unlock AI game engines in Round 2.
              </div>
            </div>
          </div>

          <button 
            className="btn-cyber-outline"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            onClick={() => {
              soundFx.playClick();
              onOpenPoster();
            }}
          >
            <span>Inspect Poster</span>
            <ChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
