import React, { useState } from 'react';
import { BarChart3, Bot, Compass, Brain, Code, Network } from 'lucide-react';

export default function Mindset() {
  const [activeCore, setActiveCore] = useState('both'); // 'business', 'tech', or 'both'

  const businessSkills = [
    { title: 'Econometrics & Statistics', desc: 'Predictive pricing regression models & OLS analysis.' },
    { title: 'ROI Optimization', desc: 'Maximizing returns by replacing manual ops with AI agent loops.' },
    { title: 'Operations Management', desc: 'Fusing MBA organization theories with autonomous workflows.' },
    { title: 'Strategic Communication', desc: 'Speaking the language of stakeholders, boards, and builders.' }
  ];

  const techSkills = [
    { title: 'Agent Frameworks', desc: 'Multi-agent orchestration loops via LangGraph and tool calling.' },
    { title: 'Big Data Pipeline Explorer', desc: 'Querying and rendering 10M+ row stores with DuckDB & PostgreSQL.' },
    { title: 'Machine Learning', desc: 'Feature engineering, data cleaning, and statistical training flows.' },
    { title: 'Frontend Visual Craft', desc: 'Generative layouts, custom canvases, WebGL, and Next.js.' }
  ];

  const synergies = [
    { label: 'Data Monetization', core: 'both' },
    { label: 'Autonomous ROI Optimization', core: 'both' },
    { label: 'Algorithmic Financial Operations', core: 'both' },
    { label: 'Strategic Tech Leadership', core: 'both' }
  ];

  return (
    <section className="mindset-section" id="about">
      <div className="container">
        <div className="section-meta fade-in visible">01 — Identity</div>
        <h2 className="section-title fade-in visible">The <span>Aqlli</span> Mindset</h2>

        <p className="mindset-intro fade-in visible">
          *Aqlli* literally means *smart* in Uzbek. For me, it defines the ultimate goal of engineering: 
          synthesizing deep business strategy with autonomous tech execution to ship high-impact margins.
        </p>

        {/* Dynamic Selector Panel */}
        <div className="mindset-grid fade-in visible">
          
          {/* Left Core: Business */}
          <div 
            className={`core-card business glass-panel ${activeCore === 'business' ? 'focused' : ''} ${activeCore === 'tech' ? 'dimmed' : ''}`}
            onMouseEnter={() => setActiveCore('business')}
            onMouseLeave={() => setActiveCore('both')}
          >
            <div className="core-header">
              <BarChart3 className="core-icon gold" size={24} />
              <h3>Strategic Business</h3>
              <p className="core-subtitle-text">MBA & Economics Core</p>
            </div>
            <ul className="core-skill-list">
              {businessSkills.map((skill, idx) => (
                <li key={idx}>
                  <strong>{skill.title}</strong>
                  <span>{skill.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Synergy Node */}
          <div className="synergy-column">
            <div className="synergy-connector-svg">
              <svg width="100%" height="100%" viewBox="0 0 100 200" fill="none" preserveAspectRatio="none">
                <path 
                  d="M0 50 Q 50 100 100 100" 
                  stroke="var(--seoul-gold)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  className={activeCore === 'business' || activeCore === 'both' ? 'active-path' : ''}
                />
                <path 
                  d="M100 150 Q 50 100 0 100" 
                  stroke="var(--emerald)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                  className={activeCore === 'tech' || activeCore === 'both' ? 'active-path' : ''}
                />
              </svg>
            </div>
            
            <div className="synergy-orb glass-panel">
              <Compass size={28} className="orb-icon" />
              <span className="orb-label">SYNERGY</span>
            </div>

            <div className="synergy-tags">
              {synergies.map((item, idx) => (
                <div key={idx} className="synergy-tag glass-panel">
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Core: Tech */}
          <div 
            className={`core-card tech glass-panel ${activeCore === 'tech' ? 'focused' : ''} ${activeCore === 'business' ? 'dimmed' : ''}`}
            onMouseEnter={() => setActiveCore('tech')}
            onMouseLeave={() => setActiveCore('both')}
          >
            <div className="core-header">
              <Bot className="core-icon emerald" size={24} />
              <h3>Autonomous Tech</h3>
              <p className="core-subtitle-text">AI Agent & Big Data Core</p>
            </div>
            <ul className="core-skill-list">
              {techSkills.map((skill, idx) => (
                <li key={idx}>
                  <strong>{skill.title}</strong>
                  <span>{skill.desc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <style>{`
        .mindset-section {
          padding: 120px 0;
          position: relative;
        }

        .mindset-intro {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.8;
          margin-bottom: 60px;
        }

        .mindset-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr 1fr;
          gap: 30px;
          align-items: stretch;
        }

        @media (max-width: 991px) {
          .mindset-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .synergy-column {
            padding: 20px 0;
          }
          .synergy-connector-svg {
            display: none !important;
          }
        }

        .core-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .core-card.business::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--seoul-gold);
        }

        .core-card.tech::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: var(--emerald);
        }

        .core-card.focused {
          transform: translateY(-4px);
          background-color: rgba(var(--bg-slate-rgb), 0.95);
        }

        .core-card.business.focused {
          border-color: rgba(247, 185, 49, 0.3);
          box-shadow: 0 8px 32px 0 rgba(247, 185, 49, 0.05);
        }

        .core-card.tech.focused {
          border-color: rgba(31, 214, 122, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 214, 122, 0.05);
        }

        .core-card.dimmed {
          opacity: 0.4;
          transform: scale(0.98);
        }

        .core-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .core-icon {
          padding: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          width: fit-content;
        }

        .core-icon.gold {
          color: var(--seoul-gold);
          background: rgba(247, 185, 49, 0.05);
        }

        .core-icon.emerald {
          color: var(--emerald);
          background: rgba(31, 214, 122, 0.05);
        }

        .core-header h3 {
          font-size: 24px;
          color: var(--text-primary);
        }

        .core-subtitle-text {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .core-skill-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .core-skill-list li {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .core-skill-list strong {
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 600;
        }

        .core-skill-list span {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Synergy Column Styles */
        .synergy-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          gap: 24px;
        }

        .synergy-connector-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .synergy-connector-svg path {
          opacity: 0.15;
          transition: opacity 0.3s ease, stroke-dashoffset 2s linear;
        }

        .synergy-connector-svg path.active-path {
          opacity: 0.6;
          animation: march 4s linear infinite;
        }

        @keyframes march {
          to { stroke-dashoffset: -20; }
        }

        .synergy-orb {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border-color: var(--border-glass);
          background-color: var(--bg-slate);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          animation: float 4s ease-in-out infinite;
          gap: 4px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .orb-icon {
          color: var(--seoul-gold);
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }

        .orb-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        .synergy-tags {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 240px;
        }

        .synergy-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
          padding: 10px;
          text-align: center;
          border-radius: 8px;
          background: rgba(var(--bg-slate-rgb), 0.4);
          border-color: var(--border-glass);
          transition: all 0.3s ease;
        }

        .synergy-tag:hover {
          border-color: var(--seoul-gold);
          color: var(--seoul-gold);
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
