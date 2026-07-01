import { useState } from 'react';

export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--white)' }}>
      <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 'bold' }}
          >
            SMRG CONSULTING <span style={{ fontSize: '0.8rem' }}>▼</span>
          </button>
          
          {dropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 1001, minWidth: '260px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <button onClick={() => { setPage('home'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Home</button>
              <button onClick={() => { setPage('about'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>About Leadership</button>
              <button onClick={() => { setPage('services'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Operational Services</button>
              <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '0.25rem 0' }} />
              <button onClick={() => { setPage('liru'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>LIRU™ (Legal Intake)</button>
              <button onClick={() => { setPage('iru'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>IRU™ (Immigration Intake)</button>
              <button onClick={() => { setPage('childcare'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Childcare Command Center™</button>
              <button onClick={() => { setPage('partner'); setDropdownOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem', width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Partner Program</button>
            </div>
          )}
        </div>
        
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', alignItems: 'center', margin: 0, padding: 0 }}>
            <li><button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>HOME</button></li>
            <li><button onClick={() => setPage('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>ABOUT</button></li>
            <li><button onClick={() => setPage('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>SERVICES</button></li>
            <li><button onClick={() => setPage('partner')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>PARTNER</button></li>
            <li><button onClick={() => setPage('contact')} className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>CONTACT</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}