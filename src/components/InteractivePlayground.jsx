import React, { useState } from 'react';
import { 
  Terminal, Sparkles, RefreshCw, CheckCircle2, 
  AlertOctagon, Play, Dice6, Code2, Trophy,
  Cpu, Zap
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState('round1'); // 'round1' or 'round2'

  // Round 1 Bug Mini-Challenge state
  const [bugs, setBugs] = useState({
    bug1: false, // HTML typo
    bug2: false, // CSS property error
    bug3: false, // JS assignment bug
  });

  const toggleBug = (key) => {
    soundFx.playBeep(640, 0.08, 'triangle');
    setBugs(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      const allFixed = updated.bug1 && updated.bug2 && updated.bug3;
      if (allFixed) {
        soundFx.playSuccess();
      }
      return updated;
    });
  };

  const fixedCount = Object.values(bugs).filter(Boolean).length;

  // Round 2 Chit Generator State
  const [currentChitIdx, setCurrentChitIdx] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const rollNewChit = () => {
    soundFx.playLaser();
    setIsRolling(true);
    setTimeout(() => {
      const nextIdx = (currentChitIdx + 1) % EVENT_DATA.practiceChits.length;
      setCurrentChitIdx(nextIdx);
      setIsRolling(false);
      soundFx.playBeep(880, 0.1, 'sine');
    }, 400);
  };

  const currentChit = EVENT_DATA.practiceChits[currentChitIdx];

  return (
    <section id="playground" className="playground-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag pink">
            <Sparkles size={14} />
            <span>INTERACTIVE TEST ARENA</span>
          </div>
          <h2 className="section-title">
            WARM UP YOUR SKILLS
          </h2>
          <p className="section-desc">
            Test your manual debugging instinct for Round 1, or simulate drawing a randomized theme chit for Round 2.
          </p>

          {/* Arena Switcher Tabs */}
          <div className="playground-tabs">
            <button 
              className={`tab-btn ${activeTab === 'round1' ? 'active' : ''}`}
              onClick={() => {
                soundFx.playClick();
                setActiveTab('round1');
              }}
            >
              <Terminal size={18} />
              <span>Round 1: Bug Exorcist Simulator</span>
            </button>

            <button 
              className={`tab-btn ${activeTab === 'round2' ? 'active' : ''}`}
              onClick={() => {
                soundFx.playClick();
                setActiveTab('round2');
              }}
            >
              <Dice6 size={18} />
              <span>Round 2: Theme Chit Roller</span>
            </button>
          </div>
        </div>

        {/* Console Box */}
        <div className="playground-console">
          <div className="console-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={14} />
              <span>
                {activeTab === 'round1' 
                  ? 'TERMINAL // CODE_EXORCIST_SANDBOX.js' 
                  : 'CHIT_GENERATOR // AI_GAME_DYNAMICS.sys'}
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              LIVE BROWSER ENVIRONMENT
            </span>
          </div>

          <div className="console-body">
            {activeTab === 'round1' ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>
                      Hunt the 3 Glitches in the Code Below!
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.85rem' }}>
                      Click on highlighted broken lines to patch them manually. (No AI allowed!)
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: fixedCount === 3 ? 'rgba(0, 255, 102, 0.2)' : 'rgba(0, 240, 255, 0.1)',
                      border: `1px solid ${fixedCount === 3 ? 'var(--neon-green)' : 'var(--neon-cyan)'}`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: fixedCount === 3 ? 'var(--neon-green)' : 'var(--neon-cyan)',
                    }}>
                      Bugs Fixed: {fixedCount} / 3
                    </div>

                    <button 
                      className="btn-pill-sm"
                      onClick={() => {
                        soundFx.playClick();
                        setBugs({ bug1: false, bug2: false, bug3: false });
                      }}
                      title="Reset Bugs"
                    >
                      <RefreshCw size={12} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="bug-challenge-box">
                  {/* Interactive Code Editor Sim */}
                  <div className="code-editor-sim">
                    <div style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.75rem' }}>
                      // SOURCE: broken_game_canvas.js
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">01</span>
                      <span>const canvas = document.querySelector('#gameView');</span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">02</span>
                      <span>const ctx = canvas.getContext('2d');</span>
                    </div>

                    {/* Bug 1: CSS typo */}
                    <div 
                      className={`code-line clickable ${bugs.bug1 ? 'fixed' : 'has-bug'}`}
                      onClick={() => toggleBug('bug1')}
                      title="Click to fix CSS property glitch"
                    >
                      <span className="code-line-num">03</span>
                      <span>
                        {bugs.bug1 ? (
                          <span style={{ color: 'var(--neon-green)' }}>
                            canvas.style.display = 'flex'; // [FIXED]
                          </span>
                        ) : (
                          <span style={{ color: 'var(--neon-pink)' }}>
                            canvas.style.displayy = 'flx'; // [CLICK TO FIX BUG #1]
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">04</span>
                      <span>let score = 0; let playerSpeed = 5;</span>
                    </div>

                    {/* Bug 2: Syntax typo in function call */}
                    <div 
                      className={`code-line clickable ${bugs.bug2 ? 'fixed' : 'has-bug'}`}
                      onClick={() => toggleBug('bug2')}
                      title="Click to fix method spelling"
                    >
                      <span className="code-line-num">05</span>
                      <span>
                        {bugs.bug2 ? (
                          <span style={{ color: 'var(--neon-green)' }}>
                            window.addEventListener('keydown', handleJump); // [FIXED]
                          </span>
                        ) : (
                          <span style={{ color: 'var(--neon-pink)' }}>
                            window.addEventListner('kydown', hndleJump); // [CLICK TO FIX BUG #2]
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">06</span>
                      <span>function checkScore(currentScore) &#123;</span>
                    </div>

                    {/* Bug 3: Assignment in conditional */}
                    <div 
                      className={`code-line clickable ${bugs.bug3 ? 'fixed' : 'has-bug'}`}
                      onClick={() => toggleBug('bug3')}
                      title="Click to fix condition assignment"
                    >
                      <span className="code-line-num">07</span>
                      <span>
                        {bugs.bug3 ? (
                          <span style={{ color: 'var(--neon-green)' }}>
                            &nbsp;&nbsp;if (currentScore &gt;= 100) unlockLevelTwo(); // [FIXED]
                          </span>
                        ) : (
                          <span style={{ color: 'var(--neon-pink)' }}>
                            &nbsp;&nbsp;if (currentScore = 100) unlockLevelTwo(); // [CLICK TO FIX BUG #3]
                          </span>
                        )}
                      </span>
                    </div>

                    <div className="code-line">
                      <span className="code-line-num">08</span>
                      <span>&#125;</span>
                    </div>
                  </div>

                  {/* Realtime Result Preview Sim */}
                  <div className="preview-sim">
                    {fixedCount === 3 ? (
                      <div>
                        <div style={{ color: 'var(--neon-green)', marginBottom: '12px' }}>
                          <CheckCircle2 size={48} style={{ margin: '0 auto' }} />
                        </div>
                        <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '8px' }}>
                          ALL 3 BUGS EXORCISED!
                        </h4>
                        <p style={{ fontSize: '0.88rem', color: '#cbd5e1', maxWidth: '320px', margin: '0 auto 16px auto' }}>
                          Structural integrity restored! In Round 1, accuracy and speed will determine your ticket to Round 2.
                        </p>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--neon-green)', background: 'rgba(0, 255, 102, 0.1)', padding: '6px 12px', borderRadius: '4px' }}>
                          READY FOR ROUND 2: GAME DEV DASH
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div style={{ color: 'var(--neon-pink)', marginBottom: '12px' }}>
                          <AlertOctagon size={48} style={{ margin: '0 auto' }} />
                        </div>
                        <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '8px' }}>
                          RUNTIME CRASH: {3 - fixedCount} BUG(S) REMAINING
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '300px', margin: '0 auto' }}>
                          Click the highlighted red code lines on the left to repair the browser application.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Round 2 Chit Draw Simulator */
              <div className="chit-display-card">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(255, 0, 127, 0.15)', border: '1px solid var(--neon-pink)', borderRadius: '20px', color: 'var(--neon-pink)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '20px' }}>
                  <Dice6 size={14} />
                  <span>SIMULATED CHIT DRAW #{currentChitIdx + 1}</span>
                </div>

                <h3 className="chit-title">
                  {currentChit.title}
                </h3>

                <div className="chit-constraint">
                  <strong>CHIT CONSTRAINT:</strong> {currentChit.constraint}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '30px', flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '6px 14px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--neon-cyan)' }}>
                    Visual Aesthetic: {currentChit.theme}
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '6px 14px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--neon-green)' }}>
                    AI Tooling: Allowed & Encouraged
                  </div>
                </div>

                <button 
                  className="btn-cyber-pink"
                  onClick={rollNewChit}
                  disabled={isRolling}
                >
                  <Dice6 size={18} />
                  <span>{isRolling ? "Drawing Chit..." : "Draw Next Practice Chit"}</span>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
