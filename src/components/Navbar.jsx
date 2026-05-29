import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: '01. About' },
    { id: 'stack', label: '02. Stack' },
    { id: 'projects', label: '03. Projects' },
    { id: 'experience', label: '04. Experience' },
    { id: 'contact', label: '05. Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      const sections = ['about', 'stack', 'projects', 'experience', 'contact'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Terminal size={20} className="logo-icon" />
          <span className="logo-text">qodiriy<span>.aqlliev</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-menu">
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:aqlliev@outlook.com" className="nav-cta">
              Deploy Agent
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  onClick={() => setMenuOpen(false)}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="mailto:aqlliev@outlook.com" 
                className="mobile-cta"
                onClick={() => setMenuOpen(false)}
              >
                Deploy Agent
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <style>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
        }

        .nav-header.scrolled {
          padding: 16px 0;
          background: rgba(var(--bg-slate-rgb), 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-glass);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 20px;
          }
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.01em;
        }

        .logo-icon {
          color: var(--emerald);
          transition: transform 0.3s ease;
        }

        .nav-logo:hover .logo-icon {
          transform: rotate(90deg);
        }

        .logo-text span {
          color: var(--text-secondary);
          font-weight: 400;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }

        .nav-item {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          transition: color 0.3s ease;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--seoul-gold);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--seoul-gold);
          transition: width 0.3s ease;
        }

        .nav-item.active::after {
          width: 100%;
        }

        .nav-cta {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          color: var(--bg-obsidian);
          background: var(--text-primary);
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          border: 1px solid var(--text-primary);
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          background: transparent;
          color: var(--text-primary);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
            z-index: 1001;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          height: 100vh;
          background: var(--bg-slate);
          border-left: 1px solid var(--border-glass);
          padding: 100px 40px 40px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-menu a {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          display: block;
        }

        .mobile-menu a.active, .mobile-menu a:hover {
          color: var(--seoul-gold);
        }

        .mobile-cta {
          display: block;
          text-align: center;
          font-family: var(--font-display);
          font-size: 15px !important;
          font-weight: 600;
          color: var(--bg-obsidian) !important;
          background: var(--text-primary);
          padding: 12px;
          border-radius: 6px;
          margin-top: 24px;
        }
      `}</style>
    </nav>
  );
}
