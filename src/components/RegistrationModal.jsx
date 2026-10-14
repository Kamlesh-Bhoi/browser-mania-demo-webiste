import React, { useState } from 'react';
import { 
  X, ExternalLink, Sparkles, Check, 
  Copy, ShieldCheck, Ticket, User, Laptop 
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function RegistrationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [formUrl, setFormUrl] = useState(EVENT_DATA.googleFormUrl);

  const handleCopy = () => {
    soundFx.playBeep(700, 0.05);
    navigator.clipboard.writeText(formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenForm = () => {
    soundFx.playLaser();
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card cyber-cut-lg" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--neon-cyan)' }}></div>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>
              BROWSER MANIA REGISTRATION
            </h3>
          </div>
          <button 
            className="browser-btn"
            style={{ fontSize: '1.1rem', padding: '4px 8px' }}
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Quick Notice Pill */}
          <div style={{
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid var(--border-cyan)',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Ticket size={20} color="var(--neon-cyan)" />
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              <strong>Entry Fee:</strong> Starts from ₹60 per participant. Complete registration on Google Form.
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#fff', fontSize: '0.98rem', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
              // MANDATORY CHECKLIST
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#94a3b8' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="var(--neon-green)" />
                <span>Solo participation only (no teams allowed).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="var(--neon-green)" />
                <span>Offline mode at MMCOE Pune campus on 29 October 2026.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="var(--neon-green)" />
                <span>Bring your own laptop & charger (mandatory).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} color="var(--neon-green)" />
                <span>Report 30 minutes prior to scheduled start.</span>
              </li>
            </ul>
          </div>

          {/* Form Link URL & Actions */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-cyan)', marginBottom: '6px' }}>
              GOOGLE FORM REGISTRATION LINK:
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="text" 
                value={formUrl}
                onChange={(e) => setFormUrl(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem'
                }}
              />
              <button 
                className="btn-pill-sm"
                onClick={handleCopy}
                style={{ padding: '8px 14px', flexShrink: 0 }}
              >
                {copied ? <Check size={14} color="var(--neon-green)" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
              Tip: You can edit or paste your actual Google Form URL in the field above anytime!
            </span>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              className="btn-cyber-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              onClick={handleOpenForm}
            >
              <Sparkles size={18} />
              <span>Proceed to Google Form</span>
              <ExternalLink size={16} />
            </button>

            <button 
              className="btn-cyber-outline"
              style={{ width: '100%', padding: '10px', fontSize: '0.85rem' }}
              onClick={onClose}
            >
              <span>Back to Website</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
