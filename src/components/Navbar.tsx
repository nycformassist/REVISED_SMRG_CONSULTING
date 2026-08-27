import { useState } from 'react';

export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // Enterprise typography and styling variables (Dark Mode Theme)
  const navStyle = { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', color: '#f8fafc' };
  const dropdownItemStyle = { 
    textAlign: 'left' as const, 
    padding: '0.85rem 1.25rem', 
    width: '100%', 
    background: 'transparent', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 500, 
    fontSize: '0.9rem', 
    color: '#94a3b8', 
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    transition: 'all 0.2s ease'
  };

  return (
    <header style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: '#020617', position: 'fixed', top: 0, left: 0, width: '100%', height: '90px', zIndex: 99999, display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Brand Logo - Strong, confident typography */}
        <button
          onClick={() => setPage('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', textShadow: '0 0 12px rgba(255, 255, 255, 0.3)' }}
        >
          SMRG CONSULTING
        </button>
        
        {/* Primary Navigation */}
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <button onClick={() => setPage('home')} style={navStyle}>HOME</button>
            </li>
            
            {/* Solutions Dropdown */}
            <li style={{ position: 'relative', paddingBottom: '15px', marginBottom: '-15px' }} onMouseLeave={() => setSolutionsOpen(false)}>
              <button 
                onMouseEnter={() => setSolutionsOpen(true)}
                onClick={() => setSolutionsOpen(!solutionsOpen)} 
                style={navStyle}
              >
                SOLUTIONS ▾
              </button>
              {solutionsOpen && (
                <div style={{ 
                  position: 'absolute', 
                  top: 'calc(100% + 5px)', 
                  left: 0, 
                  background: '#0f172a', 
                  border: '1px solid rgba(56, 189, 248, 0.2)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  zIndex: 10001, 
                  minWidth: '300px', 
                  boxShadow: '0 20px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(56, 189, 248, 0.1)',
                  backdropFilter: 'blur(16px)',
                  overflow: 'hidden',
                  paddingTop: '5px'
                }}>
                  <button 
                    onClick={() => { setPage('rru'); setSolutionsOpen(false); }} 
                    style={{...dropdownItemStyle, fontWeight: 700, color: '#ffffff'}}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
                  >
                    RRU™ (Real Estate Readiness)
                  </button>
                  <button 
                    onClick={() => { setPage('liru'); setSolutionsOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    LIRU™ (Legal Intake)
                  </button>
                  <button 
                    onClick={() => { setPage('iru'); setSolutionsOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    IRU™ (Immigration Intake)
                  </button>
                  <button 
                    onClick={() => { setPage('childcare'); setSolutionsOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Childcare OCC™
                  </button>
                  <button 
                    onClick={() => { setPage('custom-systems'); setSolutionsOpen(false); }} 
                    style={{...dropdownItemStyle, borderBottom: 'none'}}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Custom Operational Systems
                  </button>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li style={{ position: 'relative', paddingBottom: '15px', marginBottom: '-15px' }} onMouseLeave={() => setIndustriesOpen(false)}>
              <button 
                onMouseEnter={() => setIndustriesOpen(true)}
                onClick={() => setIndustriesOpen(!industriesOpen)} 
                style={navStyle}
              >
                INDUSTRIES ▾
              </button>
              {industriesOpen && (
                <div style={{ 
                  position: 'absolute', 
                  top: 'calc(100% + 5px)', 
                  left: 0, 
                  background: '#0f172a', 
                  border: '1px solid rgba(56, 189, 248, 0.2)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  zIndex: 10001, 
                  minWidth: '240px', 
                  boxShadow: '0 20px 30px -10px rgba(0,0,0,0.5), 0 0 15px rgba(56, 189, 248, 0.1)',
                  backdropFilter: 'blur(16px)',
                  overflow: 'hidden',
                  paddingTop: '5px'
                }}>
                  <button 
                    onClick={() => { setPage('industries'); setIndustriesOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Real Estate
                  </button>
                  <button 
                    onClick={() => { setPage('industries'); setIndustriesOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Legal
                  </button>
                  <button 
                    onClick={() => { setPage('industries'); setIndustriesOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Immigration / Nonprofit
                  </button>
                  <button 
                    onClick={() => { setPage('industries'); setIndustriesOpen(false); }} 
                    style={dropdownItemStyle}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Childcare
                  </button>
                  <button 
                    onClick={() => { setPage('industries'); setIndustriesOpen(false); }} 
                    style={{...dropdownItemStyle, borderBottom: 'none'}}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                  >
                    Professional Services
                  </button>
                </div>
              )}
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
                Request a Demonstration
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}