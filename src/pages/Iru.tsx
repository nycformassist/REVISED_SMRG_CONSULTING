import SEO from '../components/SEO';

export default function Iru({ setPage }: { setPage: (page: string) => void }) {
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
        title="IRU™ | Immigration Intake Readiness Utility & Non-Profit Operations" 
        description="Streamline high-volume immigration intake and surface structured petitioner intelligence for community organizations without overwhelming staff capacity."
      />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            IRU™
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Scale your intake capacity.<br/>Without overwhelming your staff.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            A specialized operational readiness utility designed to help immigration-serving nonprofits and community organizations capture, structure, and organize high-volume intake.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>REQUEST A DEMONSTRATION</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHO IT IS FOR & THE PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            The need is endless. The staff is limited.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Immigration nonprofits and community groups do not struggle to find people who need help. They struggle to process them. High intake volume combined with incomplete information creates an administrative bottleneck that burns out staff and slows down case handoffs.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#DC2626' }}>The Current Bottleneck</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Staff time consumed by gathering basic details.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Inconsistent or incomplete intake files.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Difficult handoffs to legal representatives.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Lack of operational visibility across caseloads.</li>
              </ul>
            </div>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.accent }}>The IRU™ Transformation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Automated, structured information capture.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Standardized, decision-ready intake briefs.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Clean organization for seamless legal referral.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Increased operational capacity for your team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW IT WORKS (WHAT THEY RECEIVE) */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            From raw inquiry to structured readiness.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            IRU acts as the operational frontline for your organization, ensuring that before a case manager or attorney reviews a file, the necessary foundational information is already organized.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Intake Consistency</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Every individual who contacts your organization goes through the same structured, dignified data-collection framework.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Referral Readiness</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Output clean, organized briefs that make it significantly easier to match individuals with appropriate legal or community resources.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Staff Protection</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Free your staff from repetitive administrative data entry so they can focus on high-impact advocacy, support, and case management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMPLIANCE & OBJECTION HANDLING */}
      <section style={{ padding: '5rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Operational Support, Not Legal Counsel</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important Operational Distinction:</strong> IRU™ is an administrative and organizational utility. It does not provide legal advice, make legal determinations, or guarantee immigration outcomes. It is designed strictly to support the workflow of the professionals and organizations who do.
          </p>
        </div>
      </section>

      {/* SECTION 5 - TARGET AUDIENCE & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Designed for the Frontlines</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Immigration Nonprofits • Community Organizations • Legal-Service Organizations • Sanctuary Systems • High-Volume Intake Programs
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