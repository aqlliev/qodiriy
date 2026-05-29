import React, { useState } from 'react';
import { Mail, Send, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState('idle'); // idle, typing, sending, success
  const [logs, setLogs] = useState([
    'Contact console ready — awaiting input.',
  ]);

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (status === 'idle') {
      setStatus('typing');
      addLog('User entering package payload details...');
    }
  };

  const addLog = (msg) => {
    setLogs(prev => [...prev, msg]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addLog('ERROR: Name, email, and message are all required.');
      return;
    }

    setStatus('sending');
    addLog('Sending your message...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      addLog("Message delivered — I'll get back to you soon. ✅");
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
    } catch (err) {
      addLog(`ERROR: ${err.message} You can also email aqlliev@outlook.com directly.`);
      setStatus('idle');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-meta fade-in visible">05 — Connection</div>
        <h2 className="section-title fade-in visible">Secure <span>Handshake Protocol</span></h2>

        <div className="contact-grid">
          {/* Left panel: Info & Social ports */}
          <div className="contact-info-panel glass-panel fade-in visible">
            <div className="panel-badge">
              <Cpu size={14} className="panel-badge-icon" /> CONNECTION PORTS
            </div>

            <h3 className="info-title">Initiate a Collaborative Deploy</h3>
            <p className="info-desc">
              Whether you want to build autonomous AI agent pipelines, run strategic big-data analytics monetization models, or talk economics strategy—my receiver is open.
            </p>

            <div className="ports-list">
              <a href="mailto:aqlliev@outlook.com" className="port-item glass-panel">
                <div className="port-icon-wrap gold">
                  <Mail size={18} />
                </div>
                <div className="port-details">
                  <span className="port-name">Direct Email</span>
                  <span className="port-value">aqlliev@outlook.com</span>
                </div>
              </a>

              <a href="https://github.com/aqlliev" target="_blank" rel="noreferrer" className="port-item glass-panel">
                <div className="port-icon-wrap emerald">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </div>
                <div className="port-details">
                  <span className="port-name">GitHub Port</span>
                  <span className="port-value">github.com/aqlliev</span>
                </div>
              </a>

              <a href="https://x.com/aqlliev" target="_blank" rel="noreferrer" className="port-item glass-panel">
                <div className="port-icon-wrap white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </div>
                <div className="port-details">
                  <span className="port-name">Strategic X</span>
                  <span className="port-value">x.com/aqlliev</span>
                </div>
              </a>
            </div>

            <div className="security-guarantee">
              <ShieldCheck size={16} className="security-icon" />
              <span>Prefer a direct line? Reach me on the channels above.</span>
            </div>
          </div>

          {/* Right panel: Terminal Form & Logs */}
          <div className="contact-form-panel glass-panel fade-in visible">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} className="terminal-icon" /> secure_message_tunnel.sh
              </div>
            </div>

            <div className="terminal-body">
              {/* Form fields */}
              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="terminal-form">
                  <div className="form-row">
                    <label htmlFor="sender_name" className="form-prompt">$ sender_name:</label>
                    <input
                      id="sender_name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Qodiriy Aqlliev..."
                      className="form-input"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-row">
                    <label htmlFor="sender_email" className="form-prompt">$ sender_email:</label>
                    <input
                      id="sender_email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="visitor@sejong.edu..."
                      className="form-input"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-row textarea-row">
                    <label htmlFor="payload_body" className="form-prompt">$ payload_body:</label>
                    <textarea
                      id="payload_body"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Type your strategic mission scope..."
                      className="form-input form-textarea"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Honeypot: hidden from humans; bots that fill it are silently dropped server-side. */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Transmitting...' : 'Transmit Payload'} 
                    <Send size={14} />
                  </button>
                </form>
              ) : (
                <div className="form-success-state">
                  <div className="success-icon-ring">
                    <ShieldCheck size={36} className="success-check" />
                  </div>
                  <h3>Payload Transmitted!</h3>
                  <p>Check the console below for confirmation coordinates.</p>
                  <button 
                    onClick={() => { setStatus('idle'); addLog('Buffer reset. Ready for new stream.'); }} 
                    className="btn btn-secondary reset-btn"
                  >
                    Open New Port
                  </button>
                </div>
              )}

              {/* Console log monitors */}
              <div className="terminal-log-monitor">
                <div className="log-header">LIVE TRANSACTION LOGS:</div>
                <div className="log-lines">
                  {logs.map((log, lidx) => (
                    <div key={lidx} className="log-entry">
                      <span className="log-bullet">&gt;&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 120px 0 160px;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        /* Left Info Panel styling */
        .contact-info-panel {
          padding: 40px;
          background: rgba(var(--bg-slate-rgb), 0.4);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .panel-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--seoul-gold);
          letter-spacing: 0.05em;
        }

        .panel-badge-icon {
          color: var(--seoul-gold);
        }

        .info-title {
          font-size: 28px;
          line-height: 1.15;
          color: var(--text-primary);
        }

        .info-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .ports-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .port-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          text-decoration: none;
          background: rgba(var(--bg-slate-rgb), 0.3);
          border-color: var(--border-glass);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .port-item:hover {
          border-color: var(--border-glass-hover);
          background: rgba(var(--bg-slate-rgb), 0.8);
          transform: translateX(4px);
        }

        .port-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .port-icon-wrap.gold {
          background: rgba(247, 185, 49, 0.08);
          color: var(--seoul-gold);
        }

        .port-icon-wrap.emerald {
          background: rgba(31, 214, 122, 0.08);
          color: var(--emerald);
        }

        .port-icon-wrap.white {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .port-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .port-name {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .port-value {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .security-guarantee {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: auto;
          border-top: 1px solid var(--border-glass);
          padding-top: 20px;
        }

        .security-icon {
          color: var(--emerald);
        }

        /* Form Terminal styling */
        .contact-form-panel {
          padding: 0;
          overflow: hidden;
          background: rgba(var(--bg-slate-rgb), 0.5);
          border-color: var(--border-glass);
          display: flex;
          flex-direction: column;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: rgba(10, 10, 15, 0.6);
          border-bottom: 1px solid var(--border-glass);
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
        }

        .terminal-buttons .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .terminal-buttons .red { background: #ef4444; }
        .terminal-buttons .yellow { background: #f59e0b; }
        .terminal-buttons .green { background: #10b981; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-icon {
          color: var(--emerald);
        }

        .terminal-body {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .terminal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px dashed var(--border-glass);
          padding-bottom: 8px;
        }

        .textarea-row {
          flex-direction: column;
          gap: 8px;
          border-bottom: none;
        }

        .form-prompt {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: var(--seoul-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .form-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 13px;
          width: 100%;
          cursor: text;
        }

        .form-textarea {
          min-height: 100px;
          padding: 12px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          resize: vertical;
          cursor: text;
        }

        .form-textarea:focus {
          border-color: var(--seoul-gold);
        }

        .form-submit-btn {
          align-self: flex-start;
          cursor: pointer;
        }

        /* Log Monitor display */
        .terminal-log-monitor {
          background: rgba(0,0,0,0.3);
          border: 1px solid var(--border-glass);
          border-radius: 6px;
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .log-header {
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 8px;
          font-size: 11px;
          letter-spacing: 0.05em;
        }

        .log-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 120px;
          overflow-y: auto;
        }

        .log-entry {
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .log-bullet {
          color: var(--emerald);
          font-weight: 700;
          margin-right: 6px;
        }

        /* Success Animation */
        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 0;
          text-align: center;
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          gap: 16px;
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .success-icon-ring {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(31, 214, 122, 0.08);
          border: 1px solid rgba(31, 214, 122, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(31, 214, 122, 0.2);
        }

        .success-check {
          color: var(--emerald);
        }

        .form-success-state h3 {
          font-size: 22px;
          color: var(--text-primary);
        }

        .form-success-state p {
          font-size: 14px;
          max-width: 320px;
        }

        .reset-btn {
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
