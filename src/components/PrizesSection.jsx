import React from 'react';
import { 
  Trophy, Award, Gift, Star, CheckCircle, 
  Crown, Medal, Sparkles, ShieldCheck 
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export function PrizesSection() {
  const prizeBreakdown = EVENT_DATA.prizeBreakdown || [
    {
      place: "1st Prize",
      title: "Champion / Winner",
      amount: "₹ 6,000",
      accent: "gold",
      tag: "WINNER",
      desc: "Top combined score across Round 1 Debugging & Round 2 Game Dev Dash.",
      perks: [
        "₹6,000 Direct Cash Prize",
        "Certificate of Excellence",
        "Champion Tech Honor"
      ]
    },
    {
      place: "2nd Prize",
      title: "1st Runner-Up",
      amount: "₹ 5,000",
      accent: "cyan",
      tag: "1ST RUNNER UP",
      desc: "Second highest combined score with outstanding game mechanics & debugging speed.",
      perks: [
        "₹5,000 Direct Cash Prize",
        "Certificate of Excellence",
        "Jury Commendation"
      ]
    },
    {
      place: "3rd Prize",
      title: "2nd Runner-Up",
      amount: "₹ 4,000",
      accent: "pink",
      tag: "2ND RUNNER UP",
      desc: "Third highest combined score with innovative constraint implementation & code clean-up.",
      perks: [
        "₹4,000 Direct Cash Prize",
        "Certificate of Excellence",
        "Jury Commendation"
      ]
    }
  ];

  const getPrizeIcon = (accent) => {
    switch (accent) {
      case 'gold':
        return <Crown size={32} color="var(--neon-gold)" />;
      case 'cyan':
        return <Award size={30} color="var(--neon-cyan)" />;
      default:
        return <Medal size={30} color="var(--neon-pink)" />;
    }
  };

  return (
    <section id="prizes" className="prizes-section">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center">
          <div className="section-tag green">
            <Trophy size={14} />
            <span>REWARDS & RECOGNITION</span>
          </div>
          <h2 className="section-title">
            PRIZE POOL & CASH BREAKDOWN
          </h2>
          <p className="section-desc">
            Compete for a grand ₹15,000 cash pool distributed across the top 3 solo champions, alongside physical trophies and verifiable certificates.
          </p>
        </div>

        {/* Big Total Prize Pool Banner with Equation Pill */}
        <div className="prize-showcase-box cyber-cut-lg">
          <div className="prize-header-pill">
            <Star size={14} color="var(--neon-gold)" />
            <span>TOTAL EVENT PRIZE POOL</span>
          </div>

          <div className="prize-big-number">
            ₹ 15,000
          </div>

          {/* Mathematical breakdown equation banner */}
          <div className="prize-equation-strip">
            <span className="equation-badge gold">1st: ₹6,000</span>
            <span className="equation-op">+</span>
            <span className="equation-badge cyan">2nd: ₹5,000</span>
            <span className="equation-op">+</span>
            <span className="equation-badge pink">3rd: ₹4,000</span>
            <span className="equation-op">=</span>
            <span className="equation-total">₹15,000 CASH POOL</span>
          </div>

          <p className="prize-pool-note">
            Awarded strictly based on merit: verified manual bugs fixed in Round 1 + game playability and jury Q&A in Round 2.
          </p>
        </div>

        {/* 3-Tier Podium Prize Breakdown Cards */}
        <div className="prize-podium-grid">
          {prizeBreakdown.map((prize, idx) => (
            <div 
              key={idx} 
              className={`prize-rank-card ${prize.accent} ${prize.accent === 'gold' ? 'featured-winner' : ''}`}
            >
              {/* Card Rank Header */}
              <div className="prize-rank-header">
                <div className={`prize-rank-badge ${prize.accent}`}>
                  {prize.tag}
                </div>
                <div className="prize-icon-circle">
                  {getPrizeIcon(prize.accent)}
                </div>
              </div>

              {/* Title & Amount */}
              <div className="prize-tier-name">{prize.place}</div>
              <h3 className="prize-tier-title">{prize.title}</h3>

              <div className={`prize-amount-display ${prize.accent}`}>
                {prize.amount}
              </div>

              <p className="prize-tier-desc">{prize.desc}</p>

              {/* Perks List */}
              <div className="prize-perks-divider" />
              <ul className="prize-perks-list">
                {prize.perks.map((perk, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle size={15} className={`perk-check-icon ${prize.accent}`} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3 General Event Perks / Certificate Badges */}
        <div className="perk-cards-grid" style={{ marginTop: '36px' }}>
          {/* Certificate */}
          <div className="perk-card cyber-cut">
            <div className="perk-icon-wrap">
              <Award size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '6px' }}>
                Participation Certificates
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
                Every valid attendee receives an official verifiable Certificate of Participation from MMCOE IT Dept upon feedback submission.
              </p>
            </div>
          </div>

          {/* Trophies & Medals */}
          <div className="perk-card cyber-cut">
            <div className="perk-icon-wrap" style={{ borderColor: 'var(--neon-pink)', background: 'rgba(255, 0, 127, 0.12)', color: 'var(--neon-pink)' }}>
              <Trophy size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '6px' }}>
                Physical Trophies & Awards
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
                Physical winner trophies and cash awards ceremony conducted immediately after Round 2 live jury evaluation.
              </p>
            </div>
          </div>

          {/* Portfolio & Jury Review */}
          <div className="perk-card cyber-cut">
            <div className="perk-icon-wrap" style={{ borderColor: 'var(--neon-cyan)', background: 'rgba(0, 240, 255, 0.12)', color: 'var(--neon-cyan)' }}>
              <Gift size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '6px' }}>
                Industry & Jury Defense
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
                Present your AI game directly to experienced evaluators and receive 1-on-1 architectural and code feedback.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
