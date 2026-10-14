import React, { useState, useEffect } from 'react';
import { 
  Terminal, Sparkles, ExternalLink, Menu, X, 
  Image as ImageIcon, Volume2, VolumeX, Eye, 
  Swords, Gamepad2, Calendar, Trophy, 
  FileText, Users, HelpCircle, CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function CyberNavbar({ 
  scanlinesEnabled, 
  setScanlinesEnabled, 
  audioEnabled, 
  setAudioEnabled,
  onOpenRegister,
  onOpenPoster
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('rounds');

  // Track scroll position for navbar glass elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['rounds', 'playground', 'timeline', 'prizes', 'guidelines', 'coordinators', 'faq'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background jumping
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleAudioToggle = () => {
    const nextState = !audioEnabled;
    setAudioEnabled(nextState);
    soundFx.toggle(nextState);
  };

  const navClick = (sectionId) => {
    soundFx.playClick();
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    soundFx.playLaser();
    window.open(EVENT_DATA.googleFormUrl, '_blank', 'noopener,noreferrer');
    if (onOpenRegister) onOpenRegister();
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'rounds', label: 'Rounds', icon: Swords },
    { id: 'playground', label: 'Play Zone', icon: Gamepad2 },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'prizes', label: 'Prizes', icon: Trophy },
    { id: 'guidelines', label: 'Rules', icon: FileText },
    { id: 'coordinators', label: 'Coordinators', icon: Users },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <header className={`cyber-header-modern ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo Section */}
        <a 
          href="#" 
          className="navbar-brand" 
          onClick={() => { soundFx.playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          aria-label="Browser Mania Home"
        >
          <div className="brand-logo-gem">
            <Terminal size={19} className="brand-icon-anim" />
            <div className="brand-gem-glow" />
          </div>
          <div className="brand-info">
            <div className="brand-fest-tag">
              <span>MMCOE IT // DEXTERITY</span>
              <span className="live-status-pill">
                <span className="live-status-dot" />
                <span>LIVE</span>
              </span>
            </div>
            <div className="brand-main-name">
              <span>BROWSER MANIA</span>
              <span className="year-highlight">2026</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with animated active pill */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          <ul className="nav-items-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={() => navClick(item.id)}
                  >
                    <Icon size={14} className="nav-icon" />
                    <span>{item.label}</span>
                    {isActive && <div className="active-glow-bar" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Action Controls Group */}
        <div className="navbar-actions-group">
          {/* Audio SFX Toggle (Desktop) */}
          <button 
            className={`navbar-tool-btn desktop-only-tool ${audioEnabled ? 'active-green' : ''}`}
            onClick={handleAudioToggle}
            title={audioEnabled ? "Disable Retro Sound FX" : "Enable Retro Sound FX"}
            aria-label="Toggle Sound Effects"
          >
            {audioEnabled ? <Volume2 size={15} color="var(--neon-green)" /> : <VolumeX size={15} />}
            <span className="tool-btn-label">{audioEnabled ? 'SFX ON' : 'SFX'}</span>
          </button>

          {/* CRT Scanline Toggle (Desktop) */}
          <button 
            className={`navbar-tool-btn desktop-only-tool ${scanlinesEnabled ? 'active-cyan' : ''}`}
            onClick={() => {
              setScanlinesEnabled(!scanlinesEnabled);
              soundFx.playClick();
            }}
            title="Toggle CRT Retro Scanlines Filter"
            aria-label="Toggle CRT Scanlines"
          >
            <Eye size={15} />
            <span className="tool-btn-label">CRT</span>
          </button>

          {/* Event Poster Button (Desktop) */}
          <button 
            className="navbar-poster-btn desktop-only-tool"
            onClick={() => {
              soundFx.playClick();
              onOpenPoster();
            }}
            title="View Official Browser Mania Poster"
          >
            <ImageIcon size={15} />
            <span>Poster</span>
          </button>

          {/* High-Impact Primary Register Button */}
          <button 
            className="navbar-register-cta"
            onClick={handleRegisterClick}
            title="Register for Browser Mania on Google Form"
          >
            <Sparkles size={15} className="btn-sparkle-anim" />
            <span className="cta-full-text">Register Now</span>
            <span className="cta-short-text">Register</span>
            <ExternalLink size={13} />
            <div className="btn-ambient-pulse" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button 
            className={`mobile-hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Animated Full-Screen / Floating Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-drawer-inner">
            {/* Mobile Header Quick Tools */}
            <div className="mobile-tools-bar">
              <button 
                className={`mobile-tool-chip ${audioEnabled ? 'active-green' : ''}`}
                onClick={handleAudioToggle}
              >
                {audioEnabled ? <Volume2 size={14} color="var(--neon-green)" /> : <VolumeX size={14} />}
                <span>{audioEnabled ? 'SFX Audio: ON' : 'SFX Audio: OFF'}</span>
              </button>

              <button 
                className={`mobile-tool-chip ${scanlinesEnabled ? 'active-cyan' : ''}`}
                onClick={() => {
                  setScanlinesEnabled(!scanlinesEnabled);
                  soundFx.playClick();
                }}
              >
                <Eye size={14} />
                <span>{scanlinesEnabled ? 'CRT: ON' : 'CRT Filter'}</span>
              </button>
            </div>

            {/* Navigation links grid */}
            <div className="mobile-links-grid">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`mobile-nav-card ${isActive ? 'active' : ''}`}
                    onClick={() => navClick(item.id)}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="mobile-drawer-actions">
              <button 
                className="btn-cyber-primary"
                style={{ width: '100%', padding: '13px', fontSize: '0.98rem' }}
                onClick={handleRegisterClick}
              >
                <Sparkles size={17} />
                <span>Register on Google Form</span>
                <ExternalLink size={15} />
              </button>

              <button 
                className="btn-cyber-outline"
                style={{ width: '100%', padding: '11px', fontSize: '0.9rem' }}
                onClick={() => {
                  soundFx.playClick();
                  onOpenPoster();
                  setMobileMenuOpen(false);
                }}
              >
                <ImageIcon size={15} />
                <span>View Event Poster</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
