export default function CustomSystems({ setPage }: { setPage: (page: string) => void }) {
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
            Custom Operational Systems
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Have a workflow that doesn't fit an off-the-shelf product?
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            SMRG Consulting designs, engineers, and deploys purpose-built operational utilities specifically around your organization's existing proprietary processes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>DISCUSS YOUR WORKFLOW</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM WITH GENERIC SOFTWARE */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Don't change your business to fit the software.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              Most organizations buy generic software and then spend months forcing their staff to change how they work just to accommodate the tool's limitations. 
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary }}>
              When information enters your organization—whether through specialized intake forms, complex compliance documents, or unique client conversations—generic AI tools often create more chaos than they solve. You need a system built for your exact operational reality.
            </p>
          </div>
          <div style={{ background: colors.background, padding: '2.5rem', borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: colors.primary }}>The SMRG Custom Development Path</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>01.</span>
                <span><strong>Workflow Mapping:</strong> We audit your exact operational friction points.</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>02.</span>
                <span><strong>System Design:</strong> We architect a data-capture and structuring pipeline.</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>03.</span>
                <span><strong>Utility Engineering:</strong> We build the specialized software utility.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>04.</span>
                <span><strong>Deployment:</strong> We install the system to transform your operational intelligence permanently.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE OUTCOME */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Operational Transformation
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Our custom operational systems ensure that when complex information enters your organization, it is immediately captured, structured, evaluated, and organized for your team to act upon.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div style={{ borderTop: `2px solid ${colors.accent}`, paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Precise Integration</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Systems that bridge the gap between your specific intake methods and your existing databases.</p>
            </div>
            <div style={{ borderTop: `2px solid ${colors.accent}`, paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Staff Adoption</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Because the tool is built around their existing workflow, staff resistance is virtually eliminated.</p>
            </div>
            <div style={{ borderTop: `2px solid ${colors.accent}`, paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Proprietary Control</h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>Own an institutional-grade asset that creates a massive operational moat against your competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Let's map your friction.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Schedule an architectural review with our leadership team. We will look at how information currently flows through your organization and determine if a custom utility is the right solution.
          </p>
          <button 
            onClick={() => setPage('contact')} 
            style={{...ctaPrimary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
            onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
            onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
          >
            DISCUSS YOUR WORKFLOW
          </button>
        </div>
      </section>

    </div>
  );
}