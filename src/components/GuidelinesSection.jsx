import React from 'react';
import { 
  ShieldCheck, Laptop, Clock, UserCheck, 
  AlertCircle, FileText, CheckCircle2 
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export function GuidelinesSection() {
  const iconMap = [
    Clock,
    UserCheck,
    Laptop,
    AlertCircle,
    FileText,
    ShieldCheck
  ];

  return (
    <section id="guidelines" className="guidelines-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>OFFICIAL RULEBOOK</span>
          </div>
          <h2 className="section-title">
            GENERAL GUIDELINES & PROTOCOL
          </h2>
          <p className="section-desc">
            To ensure fair competition and smooth execution, all participants are requested to strictly adhere to the following rules.
          </p>
        </div>

        <div className="guidelines-grid">
          {EVENT_DATA.guidelines.map((rule, idx) => {
            const IconComponent = iconMap[idx % iconMap.length];
            return (
              <div key={idx} className="guideline-card cyber-cut">
                <div className="guideline-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      color: 'var(--neon-cyan)',
                      background: 'rgba(0, 240, 255, 0.1)',
                      padding: '8px',
                      borderRadius: '6px'
                    }}>
                      <IconComponent size={18} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      RULE #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="guideline-badge">
                    {rule.badge}
                  </span>
                </div>

                <h3 className="guideline-title">
                  {rule.title}
                </h3>
                <p className="guideline-desc">
                  {rule.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Offline Venue Callout */}
        <div className="guidelines-offline-notice">
          <div className="offline-notice-icon">
            <AlertCircle size={28} />
          </div>
          <div className="offline-notice-content">
            <h4 className="offline-notice-title">
              OFFLINE COLLEGE CAMPUS EVENT NOTICE
            </h4>
            <p className="offline-notice-desc">
              Competition is strictly held in <strong>Offline mode</strong> at Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune campus. Please ensure timely physical arrival with college ID and required laptop gear.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
