import { useState } from 'react';

export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  // Enterprise typography and styling variables
  const navStyle = { background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', color: '#374151' };
  const dropdownItemStyle = { textAlign: 'left' as const, padding: '0.75rem 1rem', width: '100%', background: '#FFFFFF', border: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '0.9rem', color: '#4B5563', borderBottom: '1px solid #F3F4F6' };

  return (
    <header style={{ borderBottom: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', position: 'sticky', top: 0, zIndex: 9999, minHeight: '80px', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Brand Logo - Strong, confident typography */}
        <button
          onClick={() => setPage('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.35rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}
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
            <li style={{ position: 'relative' }} onMouseLeave={() => setSolutionsOpen(false)}>
              <button 
                onMouseEnter={() => setSolutionsOpen(true)}
                onClick={() => setSolutionsOpen(!solutionsOpen)} 
                style={navStyle}
              >
                SOLUTIONS ▾
              </button>
              {solutionsOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 15px)', left: 0, background: '#fff', border: '1px solid #E5E7EB', borderRadius: '4px', display: 'flex', flexDirection: 'column', zIndex: 10001, minWidth: '280px', boxShadow: '0 10px 25px -3px rgba(0,0,0,0.15)' }}>
                  <button onClick={() => { setPage('rru'); setSolutionsOpen(false); }} style={{...dropdownItemStyle, fontWeight: 700, color: '#111827'}}>RRU™ (Real Estate Readiness)</button>
                  <button onClick={() => { setPage('liru'); setSolutionsOpen(false); }} style={dropdownItemStyle}>LIRU™ (Legal Intake)</button>
                  <button onClick={() => { setPage('iru'); setSolutionsOpen(false); }} style={dropdownItemStyle}>IRU™ (Immigration Intake)</button>
                  <button onClick={() => { setPage('childcare'); setSolutionsOpen(false); }} style={dropdownItemStyle}>Childcare OCC™</button>
                  <button onClick={() => { setPage('custom-systems'); setSolutionsOpen(false); }} style={{...dropdownItemStyle, borderBottom: 'none'}}>Custom Operational Systems</button>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li style={{ position: 'relative' }} onMouseLeave={() => setIndustriesOpen(false)}>
              <button 
                onMouseEnter={() => setIndustriesOpen(true)}
                onClick={() => setIndustriesOpen(!industriesOpen)} 
                style={navStyle}
              >
                INDUSTRIES ▾
              </button>
              {industriesOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 15px)', left: 0, background: '#fff', border: '1px solid #E5E7EB', borderRadius: '4px', display: 'flex', flexDirection: 'column', zIndex: 10001, minWidth: '220px', boxShadow: '0 10px 25px -3px rgba(0,0,0,0.15)' }}>
                  <button onClick={() => { setPage('industries'); setIndustriesOpen(false); }} style={dropdownItemStyle}>Real Estate</button>
                  <button onClick={() => { setPage('industries'); setIndustriesOpen(false); }} style={dropdownItemStyle}>Legal</button>
                  <button onClick={() => { setPage('industries'); setIndustriesOpen(false); }} style={dropdownItemStyle}>Immigration / Nonprofit</button>
                  <button onClick={() => { setPage('industries'); setIndustriesOpen(false); }} style={dropdownItemStyle}>Childcare</button>
                  <button onClick={() => { setPage('industries'); setIndustriesOpen(false); }} style={{...dropdownItemStyle, borderBottom: 'none'}}>Professional Services</button>
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
                style={{ background: '#111827', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, border: 'none', fontSize: '0.9rem', transition: 'background 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.background = '#374151'}
                onMouseOut={(e) => e.currentTarget.style.background = '#111827'}
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