import React, { useState } from 'react';
import { 
  Sparkles, ExternalLink, QrCode, Copy, 
  Check, Ticket, User, ShieldCheck, Image as ImageIcon
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function RegistrationSection({ onOpenPoster }) {
  const [copied, setCopied] = useState(false);
  const [formLink, setFormLink] = useState(EVENT_DATA.googleFormUrl);
  const [isEditingLink, setIsEditingLink] = useState(false);

  const handleCopy = () => {
    soundFx.playBeep(700, 0.05);
    navigator.clipboard.writeText(formLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openFormInNewTab = () => {
    soundFx.playLaser();
    window.open(formLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="registration-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag pink">
            <Ticket size={14} />
            <span>SLOTS FILLING FAST</span>
          </div>
          <h2 className="section-title">
            REGISTER FOR BROWSER MANIA
          </h2>
          <p className="section-desc">
            Submit your individual participant details via the official Google Form. Early registration ensures seamless campus entry and workstation allocation.
          </p>
        </div>

        <div className="reg-card-wrap cyber-cut-lg">
          {/* Left Column: Form Details & Action */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <div style={{
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid var(--neon-cyan)',
                padding: '6px 12px',
                borderRadius: '20px',
                color: 'var(--neon-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem'
              }}>
                ENTRY FROM ₹60
              </div>
              <div style={{
                background: 'rgba(255, 0, 127, 0.15)',
                border: '1px solid var(--neon-pink)',
                padding: '6px 12px',
                borderRadius: '20px',
                color: 'var(--neon-pink)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem'
              }}>
                INDIVIDUAL ONLY
              </div>
            </div>

            <h3 style={{ fontSize: 'clamp(1.25rem, 4.5vw, 1.8rem)', color: '#fff', marginBottom: '12px', wordBreak: 'break-word' }}>
              Step-by-Step Registration Process
            </h3>

            <div className="reg-steps-list">
              <div className="reg-step-item">
                <span className="reg-step-num">01</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '2px' }}>
                    Open Google Form
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#94a3b8' }}>
                    Click the button below or scan the QR code to access the official event form.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <span className="reg-step-num">02</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '2px' }}>
                    Submit Contact & Academic Details
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#94a3b8' }}>
                    Provide individual participant contact details, college ID, and mobile number.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <span className="reg-step-num">03</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '2px' }}>
                    Complete Nominal Entry Fee
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#94a3b8' }}>
                    Complete the payment (entry from ₹60) via UPI as instructed inside the form.
                  </p>
                </div>
              </div>

              <div className="reg-step-item">
                <span className="reg-step-num">04</span>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '2px' }}>
                    Reporting & Confirmation
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: '#94a3b8' }}>
                    Receive participant badge confirmation and reach MMCOE campus 30 mins prior to start.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Big Action Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <button 
                className="btn-cyber-primary"
                style={{ fontSize: 'clamp(0.88rem, 3vw, 1.05rem)', padding: '12px 18px', width: '100%', boxSizing: 'border-box', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={openFormInNewTab}
              >
                <Sparkles size={18} />
                <span>Register on Google Form</span>
                <ExternalLink size={16} />
              </button>

              {/* Copyable Link Preview */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                borderRadius: '6px',
                padding: '6px 10px',
                maxWidth: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                  LINK:
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.76rem', 
                  color: 'var(--neon-cyan)',
                  flex: 1, 
                  minWidth: 0,
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap' 
                }}>
                  {formLink}
                </span>

                <button 
                  className="btn-pill-sm"
                  style={{ flexShrink: 0 }}
                  onClick={handleCopy}
                  title="Copy registration link to clipboard"
                >
                  {copied ? <Check size={13} color="var(--neon-green)" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                * Any submission made after the stipulated registration deadline will not be accepted.
              </div>
            </div>
          </div>

          {/* Right Column: Scan to Register QR Showcase (From Poster) */}
          <div className="qr-code-box cyber-cut">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--neon-cyan)',
              marginBottom: '14px',
              letterSpacing: '0.12em'
            }}>
              <QrCode size={16} />
              <span>SCAN TO REGISTER</span>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={EVENT_DATA.posterUrl} 
                alt="Browser Mania Event Poster & QR Code" 
                className="qr-poster-preview"
                style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block', margin: '0 auto 16px auto' }}
                onClick={() => {
                  soundFx.playClick();
                  onOpenPoster();
                }}
              />
            </div>

            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '10px 0 16px 0' }}>
              Point your smartphone camera at the poster QR or click above to inspect the high-resolution event poster.
            </p>

            <button 
              className="btn-cyber-outline"
              style={{ width: '100%', fontSize: '0.85rem', padding: '8px 14px' }}
              onClick={() => {
                soundFx.playClick();
                onOpenPoster();
              }}
            >
              <ImageIcon size={14} />
              <span>Enlarge Event Poster</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
