import React from 'react';
import { Terminal, ArrowUp, Heart, Shield, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function Footer({ onOpenRegister, onOpenPoster }) {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="cyber-footer">
      <div className="container">
        <div className="footer-top">
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div className="brand-icon-box cyber-cut" style={{ width: '36px', height: '36px' }}>
                <Terminal size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                BROWSER MANIA
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Organized by <strong>{EVENT_DATA.organization.department}</strong>, {EVENT_DATA.organization.college}.
              A premier tech event under the annual technical symposium <strong>{EVENT_DATA.organization.fest}</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-cyan)', marginBottom: '10px', letterSpacing: '0.1em' }}>
                EXPLORE
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                <li><a href="#rounds">Battle Rounds</a></li>
                <li><a href="#playground">Interactive Arena</a></li>
                <li><a href="#timeline">Event Schedule</a></li>
                <li><a href="#prizes">Prizes & Perks</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-cyan)', marginBottom: '10px', letterSpacing: '0.1em' }}>
                ESSENTIALS
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
                <li><a href="#guidelines">Rulebook</a></li>
                <li><a href="#coordinators">Support Desk</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><button onClick={onOpenPoster} style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem' }}>View Poster</button></li>
              </ul>
            </div>
          </div>

          <div>
            <button 
              className="btn-cyber-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              onClick={() => {
                soundFx.playLaser();
                window.open(EVENT_DATA.googleFormUrl, '_blank', 'noopener,noreferrer');
                onOpenRegister();
              }}
            >
              <span>Register on Google Form</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 Department of Information Technology, MMCOE Pune. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Built for Browser Mania 2026
            </span>
            <button 
              className="btn-pill-sm"
              onClick={scrollToTop}
              title="Scroll to Top"
            >
              <ArrowUp size={13} />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
