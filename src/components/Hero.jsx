import { useState, useRef, useEffect } from 'react';
import { Play, Sparkles, Terminal as TerminalIcon, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'input', text: 'system_init --profile=qodiriy_aqlliev' },
    { type: 'output', text: 'Initializing Aqlliev Agent Core...' },
    { type: 'output', text: 'Status: ONLINE | specialization: [AI_AGENTS, BIG_DATA_ANALYSIS, MBA_STRATEGY]' },
    { type: 'output', text: 'Type `/help` or click the chips below to command the agent.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef(null);

  const presetCommands = [
    { cmd: '/deploy_agents()', label: 'Deploy Agent Flow', desc: 'Simulate search & research agents' },
    { cmd: '/optimize_business()', label: 'Run MBA Strategy Core', desc: 'Analyze data monetization ROI' },
    { cmd: '/about', label: 'Who is Qodiriy?', desc: 'Quick summary' },
    { cmd: '/contact', label: 'Get Contacts', desc: 'Reveal email & socials' }
  ];

  const handleCommand = (cmdText) => {
    if (!cmdText.trim()) return;

    const trimmedCmd = cmdText.trim();
    const newHistory = [...terminalHistory, { type: 'input', text: trimmedCmd }];
    setTerminalHistory(newHistory);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let responses = [];
      const lowerCmd = trimmedCmd.toLowerCase();

      if (lowerCmd === '/help') {
        responses = [
          'Available Operations:',
          '  /about               - Print Qodiriy\'s structural profile',
          '  /deploy_agents()     - Initiate recursive web scraping and literature compilation logs',
          '  /optimize_business() - Run strategic quantitative regression (MBA & Economics)',
          '  /contact             - Retrieve encrypted contact connection ports',
          '  /clear               - Wipe history buffer'
        ];
      } else if (lowerCmd === '/clear') {
        setTerminalHistory([]);
        setIsTyping(false);
        return;
      } else if (lowerCmd === '/deploy_agents()') {
        responses = [
          '[Agent Alpha] Starting crawling process: target = "latest_papers_agentic_design"',
          '[Agent Alpha] Parsing 14 academic PDFs from arXiv...',
          '[Agent Beta] Synthesizing core findings into structured markdown review...',
          '[System] Generated file: `literature_review_draft.md` (Size: 45KB)',
          '[System] Autonomous Research Agent task completed successfully in 840ms. ✅'
        ];
      } else if (lowerCmd === '/optimize_business()') {
        responses = [
          '[Optimizer] Querying database: target = "sales_volume", "marketing_spend"',
          '[Optimizer] Executing multi-variable regression model (O.L.S.)...',
          '[Optimizer] Correlation Coefficient (r) = 0.94 | R-Squared = 0.88',
          '[Insight] Shifting 15% budget to data-driven automated channels increases net margins by +8.4%.',
          '[MBA Strategy Core] Strategic roadmap loaded. CAGR projection: +5.6% 📈'
        ];
      } else if (lowerCmd === '/about') {
        responses = [
          'Profile: Qodiriy Aqlliev (23, Seoul, KR)',
          'Academic: B.S. in Economics | MBA Candidate at Sejong University (Big Data & AI)',
          'Philosophy: "Aqlli" mindset (Uzbek for smart) — ship fast, validate in public, refine based on usage.',
          'Focus: Building data pipelines, multi-agent frameworks, and connecting deep tech to real business margins.'
        ];
      } else if (lowerCmd === '/contact') {
        responses = [
          'Establishing direct tunnel...',
          '  Email: aqlliev@outlook.com',
          '  GitHub: github.com/aqlliev',
          '  X / Twitter: x.com/aqlliev',
          'Feel free to send a ping or launch a collaborative deploy!'
        ];
      } else {
        responses = [
          `Command not found: "${trimmedCmd}". Type \`/help\` to inspect valid protocols.`
        ];
      }

      setTerminalHistory(prev => [
        ...prev,
        ...responses.map(text => ({ type: 'output', text }))
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory, isTyping]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        {/* Left side: Heading */}
        <div className="hero-main-content">
          <div className="status-badge fade-in visible">
            <span className="pulse-dot"></span>
            Building in public
          </div>
          
          <h1 className="hero-title fade-in visible">
            Engineering <br />
            <span>Autonomous Synergy</span>
          </h1>
          
          <p className="hero-subtitle fade-in visible">
            I am <strong>Qodiriy Aqlliev</strong>, an Agentic Engineer and MBA Candidate at Sejong University. 
            I bridge the gap between high-performance AI agent frameworks, big data analytics, and modern business strategy.
          </p>

          <div className="hero-cta-wrapper fade-in visible">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Connect Systems
            </a>
          </div>
        </div>

        {/* Right side: Terminal UI */}
        <div className="hero-terminal-wrapper fade-in visible">
          <div className="terminal-container glass-panel">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <TerminalIcon size={14} className="terminal-icon" /> aqlliev@sejong: ~
              </div>
              <div className="terminal-status">
                <Sparkles size={12} className="sparkle-icon" /> active
              </div>
            </div>

            {/* Terminal Screen */}
            <div className="terminal-screen">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className={`terminal-line ${item.type}`}>
                  {item.type === 'input' && <span className="prompt">$</span>}
                  <span className="text">{item.text}</span>
                </div>
              ))}
              {isTyping && (
                <div className="terminal-line output typing">
                  <span className="cursor-blink">▍</span> Analyzing protocol...
                </div>
              )}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input */}
            <div className="terminal-input-bar">
              <span className="prompt-indicator">$</span>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type /help or select a chip below..."
                className="terminal-text-input"
              />
              <button 
                onClick={() => handleCommand(inputValue)}
                className="terminal-send-btn"
                title="Execute Command"
              >
                <Play size={12} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Preset Command Chips */}
          <div className="chip-container">
            {presetCommands.map((item, idx) => (
              <button 
                key={idx} 
                className="preset-chip"
                onClick={() => handleCommand(item.cmd)}
                title={item.desc}
              >
                <span className="chip-cmd">{item.cmd}</span>
                <span className="chip-label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 120px 0 60px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* Status Badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(31, 214, 122, 0.08);
          border: 1px solid rgba(31, 214, 122, 0.2);
          color: var(--emerald);
          padding: 6px 14px;
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: var(--emerald);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(31, 214, 122, 0.7);
          animation: pulse 1.6s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(31, 214, 122, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(31, 214, 122, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(31, 214, 122, 0);
          }
        }

        /* Hero Text Styles */
        .hero-title {
          font-size: clamp(40px, 6vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .hero-title span {
          color: transparent;
          background: linear-gradient(90deg, var(--seoul-gold) 0%, var(--emerald) 100%);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .hero-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 580px;
        }

        .hero-subtitle strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-cta-wrapper {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        @media (max-width: 480px) {
          .hero-cta-wrapper {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-cta-wrapper .btn {
            justify-content: center;
          }
        }

        /* Terminal CSS */
        .terminal-container {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 380px;
          border: 1px solid var(--border-glass);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(10, 10, 15, 0.6);
          border-bottom: 1px solid var(--border-glass);
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
        }

        .terminal-buttons .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--text-muted);
        }

        .terminal-buttons .red { background-color: #ef4444; }
        .terminal-buttons .yellow { background-color: #f59e0b; }
        .terminal-buttons .green { background-color: #10b981; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-icon {
          color: var(--seoul-gold);
        }

        .terminal-status {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--emerald);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .sparkle-icon {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .terminal-screen {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: var(--font-mono);
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .terminal-line {
          line-height: 1.6;
          word-break: break-all;
        }

        .terminal-line.input {
          color: var(--seoul-gold);
          display: flex;
          gap: 8px;
        }

        .terminal-line.output {
          color: var(--text-secondary);
          white-space: pre-wrap;
        }

        .terminal-line.input .prompt {
          color: var(--emerald);
          font-weight: 700;
        }

        .cursor-blink {
          color: var(--emerald);
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .terminal-input-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(10, 10, 15, 0.4);
          border-top: 1px solid var(--border-glass);
        }

        .prompt-indicator {
          color: var(--emerald);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .terminal-text-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 13px;
          cursor: text;
        }

        .terminal-send-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }

        .terminal-send-btn:hover {
          color: var(--seoul-gold);
        }

        /* Chips Section */
        .chip-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .preset-chip {
          background: rgba(var(--bg-slate-rgb), 0.5);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .preset-chip:hover {
          border-color: var(--seoul-gold);
          background: rgba(var(--bg-slate-rgb), 0.8);
          transform: translateY(-1px);
        }

        .chip-cmd {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--seoul-gold);
          font-weight: 600;
        }

        .chip-label {
          font-size: 11px;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
