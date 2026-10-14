import React from 'react';
import { 
  Bug, Gamepad2, Clock, ShieldAlert, 
  Sparkles, CheckCircle2, XCircle, ArrowRight,
  Terminal, Cpu, Award, Zap
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function RoundsSection({ onOpenRegister }) {
  const round1 = EVENT_DATA.rounds[0];
  const round2 = EVENT_DATA.rounds[1];

  return (
    <section id="rounds" className="rounds-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Zap size={14} />
            <span>THE TWO-STAGE SHOWDOWN</span>
          </div>
          <h2 className="section-title">
            DUAL-STAGE BATTLE ARENA
          </h2>
          <p className="section-desc">
            Survive the high-pressure manual debugging labyrinth in Stage 1, then harness cutting-edge AI agents to construct an original browser game in Stage 2.
          </p>
        </div>

        <div className="rounds-grid">
          {/* ROUND 1: CODE EXORCIST */}
          <div className="round-card cyber-glass-cyan cyber-cut-lg">
            <div className="round-card-header">
              <span className="round-number-badge cyan">
                ROUND 01
              </span>
              <div className="round-duration-chip">
                <Clock size={14} color="var(--neon-cyan)" />
                <span>45 MINUTES</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid var(--neon-cyan)',
                padding: '10px',
                borderRadius: '8px',
                color: 'var(--neon-cyan)'
              }}>
                <Bug size={26} />
              </div>
              <div>
                <h3 className="round-title">{round1.name}</h3>
                <div className="round-subtitle cyan">{round1.theme}</div>
              </div>
            </div>

            {/* Strict Policy Alert */}
            <div className="round-policy-alert cyan">
              <ShieldAlert size={18} color="#ff3344" />
              <span>STRICT NO-AI POLICY // HUMAN MINDS ONLY</span>
            </div>

            <p className="round-desc-text">
              {round1.summary}
            </p>

            <div className="round-rules-list">
              {round1.keyRules.map((rule, idx) => (
                <div key={idx} className="round-rule-item cyan">
                  <div style={{ color: 'var(--neon-cyan)', marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4>{rule.title}</h4>
                    <p>{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Allowed vs Forbidden */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '8px',
              padding: '14px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-green)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                <CheckCircle2 size={14} />
                <span>ALLOWED: Chrome/Firefox DevTools, VS Code, Sublime, Notepad++</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--neon-pink)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                <XCircle size={14} />
                <span>PROHIBITED: ChatGPT, Claude, GitHub Copilot, Cursor, AI Plugins</span>
              </div>
            </div>

            <div className="round-tools-tags">
              <span className="tool-tag">Layout Bug Analysis</span>
              <span className="tool-tag">DOM Manipulation</span>
              <span className="tool-tag">CSS Flex/Grid Glitches</span>
              <span className="tool-tag">Runtime Exceptions</span>
            </div>
          </div>

          {/* ROUND 2: GAME DEV DASH */}
          <div className="round-card cyber-glass-pink cyber-cut-lg">
            <div className="round-card-header">
              <span className="round-number-badge pink">
                ROUND 02
              </span>
              <div className="round-duration-chip">
                <Clock size={14} color="var(--neon-pink)" />
                <span>90 MINS DEV + 5 MINS DEMO</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{
                background: 'rgba(255, 0, 127, 0.15)',
                border: '1px solid var(--neon-pink)',
                padding: '10px',
                borderRadius: '8px',
                color: 'var(--neon-pink)'
              }}>
                <Gamepad2 size={26} />
              </div>
              <div>
                <h3 className="round-title">{round2.name}</h3>
                <div className="round-subtitle pink">{round2.theme}</div>
              </div>
            </div>

            {/* AI Policy Alert */}
            <div className="round-policy-alert pink">
              <Sparkles size={18} color="#00ff88" />
              <span>AI TOOLS ALLOWED & ENCOURAGED // ACCELERATE CREATIVITY</span>
            </div>

            <p className="round-desc-text">
              {round2.summary}
            </p>

            <div className="round-rules-list">
              {round2.keyRules.map((rule, idx) => (
                <div key={idx} className="round-rule-item pink">
                  <div style={{ color: 'var(--neon-pink)', marginTop: '2px' }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4>{rule.title}</h4>
                    <p>{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Judging Criteria */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 0, 127, 0.2)',
              borderRadius: '8px',
              padding: '14px',
              marginBottom: '20px'
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--neon-pink)', marginBottom: '8px' }}>
                JURY SCORING MATRIX:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8rem', color: '#e2e8f0' }}>
                <div>• Playability & Feel (35%)</div>
                <div>• Theme Constraint (30%)</div>
                <div>• Visual & UI Polish (20%)</div>
                <div>• Live Pitch & Q&A (15%)</div>
              </div>
            </div>

            <div className="round-tools-tags">
              <span className="tool-tag">ChatGPT / Claude / Copilot</span>
              <span className="tool-tag">HTML5 Canvas / WebGL</span>
              <span className="tool-tag">Phaser.js / Kaboom.js</span>
              <span className="tool-tag">Vanilla JS / React</span>
            </div>
          </div>
        </div>

        {/* Qualification Pipeline Banner */}
        <div style={{
          marginTop: '40px',
          background: 'rgba(10, 16, 30, 0.9)',
          border: '1px solid var(--border-cyan)',
          borderRadius: '12px',
          padding: '24px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.1em' }}>
              CHAMPIONSHIP ADVANCEMENT
            </div>
            <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>
              Top Scorers of Round 1 directly qualify for Round 2 and battle for the ₹15,000 Prize Pool!
            </div>
          </div>

          <button 
            className="btn-cyber-primary"
            onClick={() => {
              soundFx.playLaser();
              window.open(EVENT_DATA.googleFormUrl, '_blank', 'noopener,noreferrer');
              onOpenRegister();
            }}
          >
            <span>Register & Reserve Slot</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
