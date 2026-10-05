import SEO from '../components/SEO';

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
      <SEO
        title="Custom Operational Intelligence | SMRG"
        description="Custom intelligence and operational workflow development for a validated business problem that does not fit an existing standardized SMRG product. Sales-assisted — scope defined with you before engagement."
      />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Custom Operational Intelligence
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Your information problem doesn't fit a standard product. The intelligence architecture can.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            Custom intelligence and operational workflow development for a validated business problem that does not fit an existing standardized SMRG product. Sales-assisted — scope is defined with you before any engagement begins.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>DISCUSS YOUR INTELLIGENCE PROBLEM</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM WITH GENERIC SOFTWARE */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Don't change your business to fit the software.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              Most organizations buy generic software and then spend months forcing their staff to change how they work to accommodate the tool's limitations. That is the wrong direction.
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary }}>
              When information enters your organization — through specialized intake forms, complex operational documents, or unique conversations — and none of our standardized products fit the problem, SMRG evaluates the workflow and determines whether a custom intelligence operation is the right answer. The operation comes first; the system is built around it.
            </p>
          </div>
          <div style={{ background: colors.background, padding: '2.5rem', borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: colors.primary }}>The Custom Intelligence Path</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>01.</span>
                <span><strong>Intelligence Evaluation:</strong> We examine where information is being lost or underused in your operation.</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>02.</span>
                <span><strong>Operation Design:</strong> We define the intelligence operation — what is captured, structured, cross-referenced, and surfaced for human decision.</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>03.</span>
                <span><strong>Architecture & Deployment:</strong> We build the intelligence layer around your validated problem — scoped with you before engagement.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: colors.accent, fontWeight: 'bold' }}>04.</span>
                <span><strong>Human Handoff:</strong> Intelligence flows to your team; decisions stay with your people.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - TIERS */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Two engagement levels.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center' }}>
            Every custom engagement is sales-assisted: scope is defined with you before any work begins.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Custom Operational Intelligence</h3>
              <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                Custom intelligence and operational workflow development for a validated business problem that does not fit an existing standardized SMRG product. The intelligence operation is defined first; the system is built around it.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '0' }}>
                <strong style={{ color: '#fff' }}>Sales-assisted.</strong> Scope defined with you before engagement.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: `2px solid ${colors.accent}` }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>Custom Operational Intelligence — Advanced</h3>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>Starting at $15,000</div>
              <p style={{ color: '#9CA3AF', marginBottom: '1.5rem' }}>
                For larger, more complex, regulated, multi-workflow, or enterprise engagements: custom intelligence architecture for operational problems beyond the scope of standardized products.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '0' }}>
                <strong style={{ color: '#fff' }}>Sales-assisted.</strong> Scope defined with you before engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Let's map your friction.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Schedule an intelligence evaluation with our team. We will look at how information currently flows through your organization and determine — honestly — whether a custom intelligence operation belongs there.
          </p>
          <button
            onClick={() => setPage('contact')}
            style={{...ctaPrimary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
            onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
            onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
          >
            DISCUSS YOUR INTELLIGENCE PROBLEM
          </button>
        </div>
      </section>

    </div>
  );
}
