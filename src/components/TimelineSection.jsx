import React from 'react';
import { 
  Clock, Calendar, Flag, Terminal, 
  Bug, Gamepad2, Lock, MonitorPlay, Trophy
} from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export function TimelineSection() {
  const iconMap = {
    Clock: Clock,
    Terminal: Terminal,
    Bug: Bug,
    CheckCircle: Flag,
    Gamepad2: Gamepad2,
    Lock: Lock,
    MonitorPlay: MonitorPlay,
    Trophy: Trophy,
  };

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <Calendar size={14} />
            <span>OCTOBER 29, 2026 // IT DEPT MMCOE</span>
          </div>
          <h2 className="section-title">
            EVENT DAY SCHEDULE
          </h2>
          <p className="section-desc">
            Carefully structured schedule designed for adrenaline-filled debugging and rapid game development.
            Please report strictly 30 minutes prior to competition start.
          </p>
        </div>

        <div className="timeline-track">
          {EVENT_DATA.schedule.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Clock;
            return (
              <div key={idx} className="timeline-item">
                <div className="timeline-node">
                  <IconComponent size={15} />
                </div>
                <div className="timeline-item-card cyber-glass cyber-cut">
                  <span className="timeline-time-badge">
                    {item.time}
                  </span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
