import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Terminal } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsData = [
    {
      id: 'research',
      icon: '🤖',
      year: '2026',
      name: 'Autonomous Research Agent',
      desc: 'Multi-step LLM agent that autonomously browses, reads academic papers, and compiles exhaustive literature reviews with inline citations.',
      tags: ['Python', 'LangGraph', 'Claude', 'VectorStore'],
      logs: [
        'INIT: Recursive Web-Research Loop started...',
        'CRAWLING: Querying EuropePMC & arXiv for target terms.',
        'ANALYZING: Parsing PDF text chunks with Semantic Splitter...',
        'SYNTHESIS: Generating Markdown report + BibTeX citation links.',
        'DONE: Output compiled successfully in 0.84 seconds.'
      ],
      interactiveType: 'flowchart'
    },
    {
      id: 'concierge',
      icon: '✈️',
      year: '2025',
      name: 'Telegram AI Concierge',
      desc: 'An intelligent multi-lingual chatbot designed to book resources, schedule meetings, and answer queries in English, Korean, and Uzbek via a tool-calling execution loop.',
      tags: ['Node.js', 'Telegram API', 'OpenAI API', 'Tools-Loop'],
      logs: [
        'Inbound web-socket message received (user: @client_09)',
        'Language detected: Korean (한국어)',
        'Evaluating function criteria... match found: get_available_slots()',
        'Executing database query... slots loaded.',
        'Response delivered. Appointment booked successfully. ✅'
      ],
      interactiveType: 'chat'
    },
    {
      id: 'explorer',
      icon: '📊',
      year: '2025',
      name: 'Big Data Visual Explorer',
      desc: 'An analytical dashboard that aggregates, slices, and visualizes massive datasets with up to 10M+ rows into smooth, legible graphs.',
      tags: ['Next.js', 'D3.js', 'DuckDB', 'Parquet'],
      logs: [
        'Mounting Big Data Visualizer component...',
        'Reading analytical Parquet files (Size: 1.2 GB)...',
        'Ingesting DuckDB local query buffer: SELECT count(*), avg(metric) GROUP BY bin',
        'DuckDB query completed. Result rows: 10,240,488. Time: 12ms!',
        'Drawing vector paths using D3 scale maps.'
      ],
      interactiveType: 'chart'
    },
    {
      id: 'chinook',
      icon: '🗃️',
      year: '2025',
      name: 'Chinook SQL Revenue Analysis',
      desc: '10 exhaustive SQL queries run against a PostgreSQL digital music database to isolate growth trends, artist efficiency, and outline a +5.6% CAGR trajectory.',
      tags: ['PostgreSQL', 'SQL', 'Data Analytics', 'pgAdmin 4'],
      logs: [
        'Connection established with "postgres_chinook_db" pool.',
        'Running sales correlation query...',
        'Uncovering Top Customer Cohorts in EU region.',
        'Unlocking CAGR percentage: +5.6% growth vector detected.',
        'Exporting reports to excel/csv outputs.'
      ],
      interactiveType: 'sql',
      link: '/chinook.html'
    },
    {
      id: 'coding',
      icon: '🎨',
      year: 'ongoing',
      name: 'Creative Coding Studio',
      desc: 'A growing experimental repository of math-driven generative art, canvas shaders, WebGL scenes, and interactive micro-sites.',
      tags: ['WebGL', 'Three.js', 'GLSL Shaders', 'HTML5 Canvas'],
      logs: [
        'Compiling vertex and fragment shaders...',
        'Linking program: generative_fluid_simulation.glsl',
        'Uniform variables resolved: u_time, u_resolution, u_mouse',
        'Canvas animation loop running smoothly at 60.0 FPS. 🔥'
      ],
      interactiveType: 'shader'
    }
  ];

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  const renderInteractiveBlock = (project) => {
    switch (project.interactiveType) {
      case 'flowchart':
        return (
          <div className="module-interactive-block">
            <div className="flow-title">Agent Workflow Nodes</div>
            <div className="flow-steps">
              <div className="flow-node gold">
                <span className="node-num">1</span>
                <span className="node-txt">Scrape Target</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node emerald">
                <span className="node-num">2</span>
                <span className="node-txt">Semantic Vector Index</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node white">
                <span className="node-num">3</span>
                <span className="node-txt">Compile Citations</span>
              </div>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="module-interactive-block">
            <div className="flow-title">Simulated Concierge Dialogue</div>
            <div className="chat-simulation">
              <div className="chat-bubble user">
                안녕하세요! 금요일 오후 3시 예약 가능한가요?
              </div>
              <div className="chat-bubble agent">
                <div className="bubble-meta">[Agent] Slot Checked</div>
                네, 예약이 비어 있습니다. 금요일 오후 3시 예약을 확정하겠습니다.
              </div>
            </div>
          </div>
        );
      case 'sql':
        return (
          <div className="module-interactive-block">
            <div className="flow-title">Active pgAdmin Query Preview</div>
            <div className="sql-box">
              <pre>{`SELECT 
  a.Name AS Artist, 
  SUM(il.UnitPrice * il.Quantity) AS Revenue,
  COUNT(il.InvoiceLineId) AS TracksSold
FROM InvoiceLine il
JOIN Track t ON il.TrackId = t.TrackId
JOIN Album al ON t.AlbumId = al.AlbumId
JOIN Artist a ON al.ArtistId = a.ArtistId
GROUP BY a.ArtistId, a.Name
ORDER BY Revenue DESC 
LIMIT 1;`}</pre>
              <div className="sql-result">
                <span>Result:</span> Iron Maiden - $138.60 (Revenue) | 140 Tracks Sold
              </div>
            </div>
          </div>
        );
      case 'chart':
        return (
          <div className="module-interactive-block">
            <div className="flow-title">Data Ingestion Profile</div>
            <div className="chart-preview">
              <div className="bar-wrapper">
                <span className="bar-label">Raw Parquet</span>
                <div className="bar-track"><div className="bar-fill" style={{width: '90%', background: 'var(--seoul-gold)'}}></div></div>
                <span className="bar-val">1.2 GB</span>
              </div>
              <div className="bar-wrapper">
                <span className="bar-label">DuckDB Query</span>
                <div className="bar-track"><div className="bar-fill" style={{width: '35%', background: 'var(--emerald)'}}></div></div>
                <span className="bar-val">12ms</span>
              </div>
            </div>
          </div>
        );
      case 'shader':
        return (
          <div className="module-interactive-block">
            <div className="flow-title">Shader fragment uniform loop</div>
            <div className="shader-preview">
              <div className="shader-orb-preview"></div>
              <div className="shader-spec-text">
                vec3 color = vec3(0.5 + 0.5*cos(u_time + uv.xyx + vec3(0,2,4)));
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-meta fade-in visible">03 — Portfolio</div>
        <h2 className="section-title fade-in visible">Active <span>System Modules</span></h2>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div 
                key={project.id} 
                className={`project-card glass-panel ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Card Top: Header */}
                <div className="project-top-row">
                  <div className="proj-icon-wrapper">
                    <span className="proj-icon">{project.icon}</span>
                    <span className={`proj-status-dot ${project.year === 'ongoing' ? 'pulse' : ''}`}></span>
                  </div>
                  <span className="proj-year-badge">{project.year}</span>
                </div>

                {/* Info */}
                <h3 className="proj-name-text">{project.name}</h3>
                <p className="proj-desc-text">{project.desc}</p>

                {/* Tech Tags */}
                <div className="proj-tags-list">
                  {project.tags.map(tag => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>

                {/* Expanding Trigger */}
                <div className="proj-action-bar">
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="btn-inspect"
                  >
                    {isExpanded ? (
                      <>Collapse Module Specs <ChevronUp size={14} /></>
                    ) : (
                      <>Inspect Module Specs <ChevronDown size={14} /></>
                    )}
                  </button>

                  {project.link && (
                    <a 
                      href={project.link} 
                      className="proj-case-link" 
                      target="_blank" 
                      rel="noreferrer"
                      title="Inspect case code"
                    >
                      Case Code <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="proj-details-drawer">
                    <div className="drawer-divider"></div>
                    
                    {/* Log Terminal */}
                    <div className="drawer-terminal">
                      <div className="terminal-bar-top">
                        <Terminal size={12} /> console_log.txt
                      </div>
                      <div className="terminal-log-screen">
                        {project.logs.map((log, lidx) => (
                          <div key={lidx} className="log-line">
                            <span className="log-arrow">&gt;</span> {log}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Block */}
                    {renderInteractiveBlock(project)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 120px 0;
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .project-card {
          padding: 32px;
          background: rgba(var(--bg-slate-rgb), 0.5);
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          transform: translateY(-2px);
          background: rgba(var(--bg-slate-rgb), 0.7);
        }

        .project-card.expanded {
          grid-column: span 2;
          background: rgba(var(--bg-slate-rgb), 0.85);
          border-color: var(--border-glass-hover);
        }

        @media (max-width: 900px) {
          .project-card.expanded {
            grid-column: span 1;
          }
        }

        .project-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proj-icon-wrapper {
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          font-size: 20px;
        }

        .proj-status-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--text-muted);
        }

        .proj-status-dot.pulse {
          background-color: var(--emerald);
          box-shadow: 0 0 0 0 rgba(31, 214, 122, 0.5);
          animation: pulse 1.6s infinite;
        }

        .proj-year-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
        }

        .proj-name-text {
          font-size: 22px;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .proj-desc-text {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .proj-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .proj-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .project-card:hover .proj-tag {
          border-color: var(--border-glass-hover);
          color: var(--text-primary);
        }

        .proj-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-glass);
          padding-top: 20px;
          margin-top: 10px;
        }

        .btn-inspect {
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          color: var(--seoul-gold);
          transition: transform 0.2s ease;
        }

        .btn-inspect:hover {
          transform: translateX(2px);
        }

        .proj-case-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .proj-case-link:hover {
          color: var(--text-primary);
        }

        /* Expandable Specs Drawer CSS */
        .proj-details-drawer {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .drawer-divider {
          width: 100%;
          height: 1px;
          background: var(--border-glass);
        }

        .drawer-terminal {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .terminal-bar-top {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.6);
          padding: 8px 16px;
          border-bottom: 1px solid var(--border-glass);
          color: var(--text-secondary);
        }

        .terminal-log-screen {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: var(--text-secondary);
        }

        .log-line {
          line-height: 1.5;
        }

        .log-arrow {
          color: var(--emerald);
          font-weight: 700;
        }

        /* Interactive Drawer Blocks */
        .module-interactive-block {
          background: rgba(255, 255, 255, 0.01);
          border: 1px dashed var(--border-glass-hover);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .flow-title {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Flowchart */
        .flow-steps {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .flow-node {
          padding: 8px 14px;
          border-radius: 6px;
          border: 1px solid var(--border-glass);
          background: rgba(var(--bg-slate-rgb), 0.6);
          font-size: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .flow-node.gold { border-color: var(--seoul-gold); color: var(--seoul-gold); }
        .flow-node.emerald { border-color: var(--emerald); color: var(--emerald); }
        .flow-node.white { border-color: var(--text-primary); color: var(--text-primary); }

        .node-num {
          font-family: var(--font-mono);
          font-size: 10px;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
        }

        .flow-arrow {
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* Chat Sim */
        .chat-simulation {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-bubble {
          padding: 10px 14px;
          border-radius: 12px;
          max-width: 85%;
          font-size: 13px;
          line-height: 1.5;
        }

        .chat-bubble.user {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          border-bottom-left-radius: 2px;
        }

        .chat-bubble.agent {
          align-self: flex-end;
          background: rgba(31, 214, 122, 0.05);
          border: 1px solid rgba(31, 214, 122, 0.2);
          color: var(--emerald);
          border-bottom-right-radius: 2px;
        }

        .bubble-meta {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--emerald);
          opacity: 0.8;
          margin-bottom: 4px;
        }

        /* SQL box */
        .sql-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sql-box pre {
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 14px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          color: var(--text-gray-light);
          overflow-x: auto;
          line-height: 1.5;
        }

        .sql-result {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--emerald);
        }

        .sql-result span {
          color: var(--text-muted);
        }

        /* Ingestion chart */
        .chart-preview {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .bar-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bar-label {
          font-family: var(--font-mono);
          font-size: 11px;
          width: 80px;
          color: var(--text-secondary);
        }

        .bar-track {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 99px;
          overflow: hidden;
          border: 1px solid var(--border-glass);
        }

        .bar-fill {
          height: 100%;
          border-radius: 99px;
        }

        .bar-val {
          font-family: var(--font-mono);
          font-size: 11px;
          width: 50px;
          text-align: right;
          color: var(--text-primary);
        }

        /* Shader spec */
        .shader-preview {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .shader-orb-preview {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, var(--seoul-gold), var(--emerald));
          box-shadow: 0 0 16px rgba(31, 214, 122, 0.3);
          animation: float 3s ease-in-out infinite;
        }

        .shader-spec-text {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
