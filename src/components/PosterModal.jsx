import React from 'react';
import { X, Download, ExternalLink, QrCode } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card cyber-cut-lg" 
        style={{ maxWidth: '640px', background: 'rgba(6, 10, 20, 0.98)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <QrCode size={18} color="var(--neon-cyan)" />
            <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>
              OFFICIAL BROWSER MANIA POSTER
            </h3>
          </div>
          <button 
            className="browser-btn"
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ textAlign: 'center', padding: '16px' }}>
          <div style={{ maxHeight: '70vh', overflowY: 'auto', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)', marginBottom: '16px' }}>
            <img 
              src={EVENT_DATA.posterUrl} 
              alt="Browser Mania Official Poster" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href={EVENT_DATA.posterUrl} 
              download="Browser_Mania_2026_Poster.jpeg"
              className="btn-cyber-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              onClick={() => soundFx.playLaser()}
            >
              <Download size={14} />
              <span>Download Poster</span>
            </a>

            <button 
              className="btn-cyber-outline"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              onClick={onClose}
            >
              <span>Close Lightbox</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
