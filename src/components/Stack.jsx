import React from 'react';

export default function Stack() {
  const languages = [
    { label: 'Python', icon: '🐍', desc: 'Agent loops & ml' },
    { label: 'JavaScript', icon: '🟨', desc: 'App dynamics' },
    { label: 'SQL', icon: '🗄️', desc: 'Complex relational' },
    { label: 'React', icon: '⚛️', desc: 'Interactive UI' },
    { label: 'Next.js', icon: '▲', desc: 'Server & SEO' }
  ];

  const tools = [
    { label: 'GitHub', icon: '🐙', desc: 'Version control' },
    { label: 'VSCode', icon: '💻', desc: 'Dev environment' },
    { label: 'Claude AI', icon: '🧠', desc: 'System reasoning' },
    { label: 'LangGraph', icon: '🔗', desc: 'Agent flows' },
    { label: 'PostgreSQL', icon: '🐘', desc: 'Robust storage' },
    { label: 'DuckDB', icon: '🦆', desc: 'High-speed analytical' }
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <div className="section-meta fade-in visible">02 — Skills</div>
        <h2 className="section-title fade-in visible">The <span>Tech Engine</span></h2>

        <div className="stack-grid fade-in visible">
          
          {/* Languages Group */}
          <div className="stack-group-card glass-panel">
            <div className="group-header">
              <span className="code-brackets">&lt;/&gt;</span>
              <h3>Languages & Frameworks</h3>
            </div>
            
            <div className="stack-items-grid">
              {languages.map((item, idx) => (
                <div key={idx} className="stack-item-card glass-panel">
                  <span className="item-icon">{item.icon}</span>
                  <div className="item-details">
                    <span className="item-label">{item.label}</span>
                    <span className="item-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Group */}
          <div className="stack-group-card glass-panel">
            <div className="group-header">
              <span className="code-brackets">[#]</span>
              <h3>Tools, Engines & Platforms</h3>
            </div>

            <div className="stack-items-grid">
              {tools.map((item, idx) => (
                <div key={idx} className="stack-item-card glass-panel">
                  <span className="item-icon">{item.icon}</span>
                  <div className="item-details">
                    <span className="item-label">{item.label}</span>
                    <span className="item-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .stack-section {
          padding: 120px 0;
          position: relative;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 900px) {
          .stack-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        .stack-group-card {
          padding: 36px;
          background: rgba(var(--bg-slate-rgb), 0.5);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .code-brackets {
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--emerald);
          font-size: 16px;
        }

        .group-header h3 {
          font-size: 20px;
          color: var(--text-primary);
        }

        .stack-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 480px) {
          .stack-items-grid {
            grid-template-columns: 1fr;
          }
        }

        .stack-item-card {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(var(--bg-slate-rgb), 0.3);
          border-color: var(--border-glass);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stack-item-card:hover {
          border-color: var(--seoul-gold);
          background: rgba(var(--bg-slate-rgb), 0.85);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(247, 185, 49, 0.05);
        }

        .item-icon {
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
          transition: transform 0.3s ease;
        }

        .stack-item-card:hover .item-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .item-label {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .item-desc {
          font-size: 11px;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
