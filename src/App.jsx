import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mindset from './components/Mindset';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-workspace">
      {/* Sleek fixed header */}
      <Navbar />

      {/* Decorative Grid Overlay background */}
      <div className="grid-overlay"></div>

      {/* Main command center workspace panels */}
      <main className="main-content-flow">
        {/* CLI Interactive Hero Console */}
        <Hero />

        {/* Identity & Core Mindset Analysis */}
        <Mindset />

        {/* Core Tech Stack grid engines */}
        <Stack />

        {/* Active System expandable modules */}
        <Projects />

        {/* Dynamic vertical career node timeline */}
        <Journey />

        {/* Direct secure SSH connection pipeline */}
        <Contact />
      </main>

      {/* Premium minimal footer */}
      <footer className="footer-bar">
        <div className="container footer-grid">
          <span className="copyright">© 2026 Qodiriy Aqlliev. All rights reserved.</span>
          <span className="footer-status-tag">
            <span className="status-dot"></span> Status: Available for Work
          </span>
        </div>
      </footer>

      <style>{`
        .app-workspace {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Architectural background blueprint grid overlay */
        .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center top;
          z-index: -1;
          pointer-events: none;
        }

        .main-content-flow {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        /* Minimal high-end footer */
        .footer-bar {
          background: rgba(5, 5, 8, 0.9);
          border-top: 1px solid var(--border-glass);
          padding: 30px 0;
          position: relative;
          z-index: 2;
        }

        .footer-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }

        .footer-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--emerald);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background-color: var(--emerald);
          border-radius: 50%;
        }

        @media (max-width: 480px) {
          .footer-grid {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
