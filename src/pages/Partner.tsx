export default function Partner({ setPage }: { setPage?: (page: string) => void }) {
  // Enterprise styling variables
  const colors = {
    primary: '#111827',
    secondary: '#374151',
    accent: '#2563EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
  };

  const ctaPrimary = {
    background: colors.primary,
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Partner Program
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Scale operations.<br />Build recurring revenue.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            Join the SMRG Consulting partner network. Help organizations plug their operational leaks with specialized utility software while building a scalable income stream.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {setPage && (
              <button onClick={() => setPage('contact')} style={ctaPrimary}>APPLY TO PARTNER</button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE ALLIANCE */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Designed for demanding professionals.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              We engineered this program for shrewd operators who know what it takes to identify friction, acquire clients, and scale systems in competitive markets. 
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
              Organizations are actively looking for ways to stop administrative bloat. As an SMRG partner, you do not just sell software; you deploy highly efficient systemic architecture that protects your clients' bottom lines.
            </p>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.primary }}>The Ideal SMRG Partner:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: colors.accent }}>✓</span> Business & Strategy Consultants</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: colors.accent }}>✓</span> Operations Professionals</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: colors.accent }}>✓</span> Former Practice Managers</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: colors.accent }}>✓</span> Healthcare Administrators</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: colors.accent }}>✓</span> Experienced Sales & Acquisition Professionals</li>
            </ul>
          </div>
          
          <div style={{ background: colors.background, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Partner Infrastructure</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Compounding Recurring Revenue</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>Uncapped commission structure designed for long-term growth.</span>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Operational Marketing Resources</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>Access to high-converting briefs, technical specs, and targeting materials.</span>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Dedicated Technical Support</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>We handle the demonstrations and technical implementations. You hold the relationship.</span>
              </li>
              <li>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Simplified Deal Registration</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>Direct pipeline access to ensure your introductions are securely tracked and credited.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to deploy SMRG systems?</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Submit an inquiry to speak with our leadership team about territory opportunities and partnership alignment.
          </p>
          {setPage && (
            <button 
              onClick={() => setPage('contact')} 
              style={{...ctaPrimary, background: '#fff', color: colors.primary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
              onMouseOver={(e) => e.currentTarget.style.background = '#F3F4F6'}
              onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
            >
              DISCUSS PARTNERSHIP
            </button>
          )}
        </div>
      </section>

    </div>
  );
}