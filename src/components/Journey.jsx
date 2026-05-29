import { useState } from 'react';
import { BookOpen, Briefcase, Bot, GraduationCap, Calendar } from 'lucide-react';

export default function Journey() {
  const [activeItem, setActiveItem] = useState(null);

  const journeyData = [
    {
      id: 'agentic',
      period: 'Feb 2026 — Present',
      title: 'Agentic Engineering & Building in Public',
      role: 'Autonomous System Builder',
      icon: <Bot size={18} />,
      badge: 'Active Deployments',
      color: 'var(--emerald)',
      desc: 'Developing specialized multi-agent systems, text-command CLI controls, and literature synthesis research agents. Validating, testing, and shipping codebases openly in the developer ecosystem to highlight operational cost reductions.',
      points: [
        'Orchestrating agent communication topologies using LangGraph.',
        'Integrating advanced tool-calling and semantic search filters.',
        'Sharing architecture logs and analytics visualizers in real-time.'
      ]
    },
    {
      id: 'mba',
      period: '2024 — Present',
      title: 'MBA in Big Data & AI candidacy',
      role: 'Sejong University, Seoul',
      icon: <GraduationCap size={18} />,
      badge: 'Academic Excellence',
      color: 'var(--seoul-gold)',
      desc: 'Merging quantitative economics with computational business frameworks. Developing regression pricing models, data-driven revenue pipelines, and research projects around automated corporate decision pipelines.',
      points: [
        'Focusing on Big Data infrastructure and predictive econometric modelling.',
        'Applying machine learning paradigms directly to organizational dynamics.',
        'Developing monetization roadmaps and algorithmic business strategy analyses.'
      ]
    },
    {
      id: 'bank',
      period: '2023 — 2024',
      title: 'Quantitative Data Specialist',
      role: 'Ipoteka Bank, Uzbekistan',
      icon: <Briefcase size={18} />,
      badge: 'Financial Operations',
      color: 'var(--emerald)',
      desc: 'Formulated statistical reporting systems, structured large database queries, and optimized internal pipeline flows. Built high-impact data models evaluating capital risk variables and business intelligence aggregates.',
      points: [
        'Streamlined query speeds by rewriting complex SQL views and table schemas.',
        'Automated monthly financial distribution pipelines reducing pipeline runtime.',
        'Partnered with technical and business stakeholders to drive strategic credit risk analysis.'
      ]
    },
    {
      id: 'economics',
      period: '2020 — 2023',
      title: 'B.S. in Economics',
      role: 'Foundational Studies',
      icon: <BookOpen size={18} />,
      badge: 'Academic Core',
      color: 'var(--seoul-gold)',
      desc: 'Rigorous academic base in macroeconomic systems, micro-market behaviors, and advanced statistical analysis. Built the econometric logic foundation that makes data optimization pipelines highly intuitive.',
      points: [
        'Mastered core theories of resource allocation, game theory, and pricing dynamics.',
        'Developed statistical scripts utilizing regression and hypothesis testing.',
        'Graduated with strong analytical marks, initiating immediate entry into financial technology.'
      ]
    }
  ];

  return (
    <section className="journey-section" id="experience">
      <div className="container">
        <div className="section-meta fade-in visible">04 — Journey</div>
        <h2 className="section-title fade-in visible">Academic & <span>System Milestones</span></h2>

        <div className="timeline-container-wrap">
          {/* Vertical Center Spine */}
          <div className="timeline-spine"></div>

          {/* Timeline Nodes */}
          <div className="timeline-nodes-list">
            {journeyData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeItem === item.id;

              return (
                <div 
                  key={item.id} 
                  className={`timeline-node-wrapper ${isEven ? 'even' : 'odd'} ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {/* Spine Icon Anchor */}
                  <div 
                    className="spine-icon-anchor glass-panel"
                    style={{ 
                      borderColor: isActive ? item.color : 'var(--border-glass)',
                      boxShadow: isActive ? `0 0 16px ${item.color}` : 'none'
                    }}
                  >
                    <span style={{ color: isActive ? item.color : 'var(--text-secondary)' }}>
                      {item.icon}
                    </span>
                  </div>

                  {/* Date Flag */}
                  <div className="timeline-date-flag">
                    <Calendar size={12} style={{ color: item.color }} />
                    <span>{item.period}</span>
                  </div>

                  {/* Content Glass Panel */}
                  <div 
                    className="timeline-content-card glass-panel"
                    style={{ 
                      borderLeft: `3px solid ${item.color}`,
                    }}
                  >
                    <div className="card-top-meta">
                      <span className="node-badge" style={{ background: `rgba(${item.color === 'var(--emerald)' ? '31, 214, 122' : '247, 185, 49'}, 0.08)`, color: item.color }}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="node-title">{item.title}</h3>
                    <h4 className="node-role">{item.role}</h4>
                    <p className="node-desc">{item.desc}</p>

                    {/* Bullet expansions */}
                    <div className={`node-expander ${isActive ? 'expanded' : ''}`}>
                      <ul className="node-points-list">
                        {item.points.map((pt, pidx) => (
                          <li key={pidx}>
                            <span className="bullet-dot" style={{ background: item.color }}></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .journey-section {
          padding: 120px 0;
          position: relative;
        }

        .timeline-container-wrap {
          position: relative;
          max-width: 1000px;
          margin: 60px auto 0;
          padding: 20px 0;
        }

        .timeline-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, 
            var(--emerald) 0%, 
            var(--seoul-gold) 35%, 
            var(--emerald) 70%, 
            var(--border-glass) 100%
          );
          transform: translateX(-50%);
          opacity: 0.15;
          pointer-events: none;
        }

        .timeline-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .timeline-node-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          gap: 60px;
        }

        .timeline-node-wrapper.even {
          text-align: right;
        }

        .timeline-node-wrapper.odd {
          text-align: left;
        }

        /* Center Spine Anchor */
        .spine-icon-anchor {
          position: absolute;
          left: 50%;
          top: 24px;
          transform: translate(-50%, 0);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-slate);
          z-index: 10;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Date Flag positioning */
        .timeline-date-flag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          align-self: flex-start;
          margin-top: 32px;
        }

        .timeline-node-wrapper.even .timeline-date-flag {
          grid-column: 2;
          justify-content: flex-start;
          padding-left: 20px;
        }

        .timeline-node-wrapper.odd .timeline-date-flag {
          grid-column: 1;
          grid-row: 1;
          justify-content: flex-end;
          padding-right: 20px;
        }

        /* Card positioning */
        .timeline-content-card {
          padding: 32px;
          background: rgba(var(--bg-slate-rgb), 0.4);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          align-self: start;
        }

        .timeline-node-wrapper.even .timeline-content-card {
          grid-column: 1;
          grid-row: 1;
        }

        .timeline-node-wrapper.odd .timeline-content-card {
          grid-column: 2;
        }

        .timeline-node-wrapper:hover .timeline-content-card {
          background: rgba(var(--bg-slate-rgb), 0.75);
          transform: translateY(-2px);
          border-color: var(--border-glass-hover);
        }

        .card-top-meta {
          display: flex;
          margin-bottom: 12px;
          justify-content: inherit;
        }

        .node-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .node-title {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .node-role {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .node-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Expander list bullet points */
        .node-expander {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        .node-expander.expanded {
          max-height: 250px;
          opacity: 1;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--border-glass);
        }

        .node-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .node-points-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .timeline-node-wrapper.even .node-points-list li {
          flex-direction: row-reverse;
          text-align: right;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        /* Responsive Mobile Layout rules */
        @media (max-width: 768px) {
          .timeline-spine {
            left: 20px;
          }

          .timeline-nodes-list {
            gap: 40px;
          }

          .timeline-node-wrapper {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: left !important;
          }

          .spine-icon-anchor {
            left: 20px;
            width: 32px;
            height: 32px;
          }

          .timeline-node-wrapper.even .timeline-date-flag,
          .timeline-node-wrapper.odd .timeline-date-flag {
            grid-column: 1;
            grid-row: 1;
            justify-content: flex-start;
            padding-left: 50px;
            margin-top: 0;
          }

          .timeline-node-wrapper.even .timeline-content-card,
          .timeline-node-wrapper.odd .timeline-content-card {
            grid-column: 1;
            grid-row: 2;
            margin-left: 50px;
          }

          .timeline-node-wrapper.even .node-points-list li {
            flex-direction: row;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
