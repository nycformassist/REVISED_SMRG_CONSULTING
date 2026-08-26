export default function Liru({ setPage }: { setPage: (page: string) => void }) {
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
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            LIRU™
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Stop sending attorneys into incomplete intake.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            A specialized legal intake utility designed to turn prospective client inquiries into structured, organized, decision-ready information before it reaches your legal team.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>REQUEST A DEMONSTRATION</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE OPERATIONAL PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            How much time is your firm wasting on raw data?
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Law firms frequently suffer from poor information handoffs. When prospective clients provide scattered details across emails, web forms, and initial phone calls, your staff is forced to spend billable time acting as administrative investigators just to determine if a case is viable.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#DC2626' }}>The Current Workflow</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Staff time wasted chasing basic contextual details.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Inconsistent qualification standards across different channels.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Attorneys starting consultations without organized briefings.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Vital case parameters buried in disjointed notes.</li>
              </ul>
            </div>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.accent }}>The LIRU™ Transformation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Automated capture of critical preliminary context.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Highly structured, easily readable intake briefs.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Immediate attorney readiness prior to the first meeting.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Drastic reduction in repetitive administrative follow-up.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW IT WORKS & WHAT THEY RECEIVE */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Organize the information. Empower the attorney.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            LIRU™ creates a bridge between the prospect's initial inquiry and the attorney's desk. It ensures that human legal experts spend their time evaluating merits, not collecting basic data.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Intake Consistency</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Standardize how prospective information enters your firm. Ensure every inquiry goes through the same rigorous, professional structuring process.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Efficient Handoffs</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Provide your legal team with decision-ready briefs. When the handoff occurs, the receiving attorney already understands the core context.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Staff Efficiency</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Remove the burden of manual data collection from your paralegals and intake coordinators so they can focus on high-value client communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMPLIANCE / GUARDRAIL */}
      <section style={{ padding: '5rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Strictly Operational Support</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important Operational Distinction:</strong> LIRU™ is an administrative organization utility. It is not designed to provide legal advice, evaluate legal outcomes, or make legal determinations. It simply ensures that the human professionals who make those determinations receive structured, organized information.
          </p>
        </div>
      </section>

      {/* SECTION 5 - TARGET AUDIENCE & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Modern Legal Practices</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Law Firms • Legal Intake Organizations • Attorneys • Intake Departments • Legal Support Staff
          </p>
          <button 
            onClick={() => setPage('contact')} 
            style={{...ctaPrimary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
            onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
            onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
          >
            REQUEST A DEMONSTRATION
          </button>
        </div>
      </section>

    </div>
  );
}