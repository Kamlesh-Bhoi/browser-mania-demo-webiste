import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { soundFx } from '../utils/audio';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    soundFx.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>CLARIFICATIONS</span>
          </div>
          <h2 className="section-title">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="section-desc">
            Find immediate answers to common questions about competition rules, hardware, and evaluation.
          </p>
        </div>

        <div className="faq-wrap">
          {EVENT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button 
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} color="var(--neon-cyan)" />
                  ) : (
                    <ChevronDown size={18} color="var(--text-muted)" />
                  )}
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
