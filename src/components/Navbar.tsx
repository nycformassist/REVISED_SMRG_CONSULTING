import { useState, useEffect } from 'react';

export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Enterprise typography and styling variables (Dark Mode Theme)
  const navStyle = { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', color: '#f8fafc' };

  return (
    <>
    <header style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#020617', position: 'fixed', top: 0, left: 0, width: '100%', height: '90px', zIndex: 99999, display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>

        {/* Brand Logo - Strong, confident typography */}
        <button
          onClick={() => setPage('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', textShadow: '0 0 12px rgba(255, 255, 255, 0.3)' }}
        >
          SMRG CONSULTING
        </button>

        {/* Primary Navigation — desktop */}
        <nav className="nav-desktop">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <button onClick={() => setPage('home')} style={navStyle}>HOME</button>
            </li>

            <li>
              <button onClick={() => setPage('how-it-works')} style={navStyle}>HOW IT WORKS</button>
            </li>

            <li>
              <button onClick={() => setPage('about')} style={navStyle}>ABOUT</button>
            </li>

            {/* Primary Conversion CTA */}
            <li>
              <button
                onClick={() => setPage('contact')}
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.9), rgba(37, 99, 235, 0.9))',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '0.9rem',
                  boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 0 25px rgba(56, 189, 248, 0.6)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Discuss Your Intelligence Opportunity
              </button>
            </li>
          </ul>
        </nav>

        {/* Hamburger — mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', cursor: 'pointer', padding: '0.6rem 0.8rem', color: '#f8fafc', fontSize: '1.25rem', lineHeight: 1 }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>

      {/* Mobile menu panel — sibling of header so fixed positioning uses the viewport */}
      {mobileOpen && (
        <div className="nav-mobile-panel" style={{
          position: 'fixed', top: '90px', left: 0, right: 0, bottom: 0,
          background: 'rgba(2, 6, 23, 0.98)', backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 99998, overflowY: 'auto', WebkitOverflowScrolling: 'touch', padding: '1.5rem 2rem 3rem',
        }}>
          {[
            { t: 'HOME', page: 'home' },
            { t: 'HOW IT WORKS', page: 'how-it-works' },
            { t: 'ABOUT', page: 'about' },
          ].map((l) => (
            <button key={l.t} onClick={() => { setPage(l.page); setMobileOpen(false); }}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#f8fafc', fontWeight: 700, fontSize: '1rem', padding: '1rem 0', cursor: 'pointer', letterSpacing: '0.04em' }}>
              {l.t}
            </button>
          ))}
          <button onClick={() => { setPage('contact'); setMobileOpen(false); }}
            style={{ display: 'block', width: '100%', marginTop: '1.75rem', background: 'linear-gradient(135deg, rgba(56,189,248,0.9), rgba(37,99,235,0.9))', color: '#fff', border: 'none', borderRadius: '6px', padding: '1rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
            Discuss Your Intelligence Opportunity
          </button>
        </div>
      )}
    </>
  );
}
