import React from 'react';
import { 
  Phone, MessageSquare, Mail, User, 
  MapPin, Building, HelpCircle 
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function CoordinatorsSection() {
  return (
    <section id="coordinators" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>EVENT SUPPORT TEAM</span>
          </div>
          <h2 className="section-title">
            STUDENT COORDINATORS & HELP DESK
          </h2>
          <p className="section-desc">
            Have queries regarding eligibility, registration fee, or venue directions? Reach out to our student coordinators anytime.
          </p>
        </div>

        <div className="coordinators-grid">
          {EVENT_DATA.coordinators.map((coord, idx) => (
            <div key={idx} className="coordinator-card cyber-cut">
              <div className="coordinator-avatar">
                <User size={30} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-cyan)', marginBottom: '4px' }}>
                {coord.role}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '4px' }}>
                {coord.name}
              </h3>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                {coord.placeholderTag}
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                padding: '8px 12px',
                marginBottom: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: '#e2e8f0'
              }}>
                {coord.phone}
              </div>

              <div className="coord-actions">
                <a 
                  href={`tel:${coord.phone.replace(/[^0-9+]/g, '')}`} 
                  className="btn-cyber-outline"
                  style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                  onClick={() => soundFx.playClick()}
                >
                  <Phone size={14} />
                  <span>Call</span>
                </a>

                <a 
                  href={`https://wa.me/${coord.phone.replace(/[^0-9]/g, '')}?text=Hi,%20I%20have%20a%20query%20about%20Browser%20Mania%202026`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-cyber-pink"
                  style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                  onClick={() => soundFx.playClick()}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* College & Department Venue Details Card */}
        <div className="coord-venue-card">
          <div className="venue-info-wrap">
            <div className="venue-icon-box">
              <Building size={24} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '4px', wordBreak: 'break-word' }}>
                {EVENT_DATA.organization.college}
              </h4>
              <p style={{ margin: 0, fontSize: '0.86rem', color: '#94a3b8', wordBreak: 'break-word' }}>
                Department of Information Technology, Sr. No. 34/1A, Karvenagar, Pune, Maharashtra 411052
              </p>
            </div>
          </div>

          <a 
            href="https://maps.google.com/?q=MMCOE+Karvenagar+Pune" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cyber-outline venue-map-btn"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            onClick={() => soundFx.playClick()}
          >
            <MapPin size={14} />
            <span>Open in Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}
