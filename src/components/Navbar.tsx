import { useState } from 'react';

export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header>
      <div className="nav-container">
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="logo"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold' }}
          >
            SMRG CONSULTING <span style={{ fontSize: '0.8rem' }}>▼</span>
          </button>
          
          {dropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 1001, minWidth: '220px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <button onClick={() => { setPage('home'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Home</button>
              <button onClick={() => { setPage('about'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>About</button>
              <button onClick={() => { setPage('services'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Services</button>
              <button onClick={() => { setPage('contact'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Business Blindspot Scan™</button>
              <button onClick={() => { setPage('contact'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Operations Pulse™</button>
            </div>
          )}
        </div>
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '1rem', alignItems: 'center' }}>
          <li><button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>HOME</button></li>
          <li><button onClick={() => setPage('contact')} className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>START SCAN</button></li>
        </ul>
      </div>
    </header>
  );
}