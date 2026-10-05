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
        title="IRU™ | Immigration Readiness Utility | SMRG"
        description="Immigration-intake readiness for frontline organizations. IRU structures intake information — completeness, missing documents, readiness for human review — without replacing qualified immigration professionals. Not a law firm."
      />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            IRU™ — Immigration Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Know an intake is ready before a human has to review it.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            Immigration-intake readiness for frontline organizations. IRU structures intake information — completeness, missing documents, readiness for human review — without replacing qualified immigration professionals. IRU is not an immigration law firm.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>REQUEST A DEMONSTRATION</button>
            <a href="#pricing" style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}`, textDecoration: 'none', display: 'inline-block' }}>See Pricing</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE INFORMATION-READINESS PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            The intake isn't the hard part. Knowing whether it's ready is.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Immigration-serving organizations do not struggle to find people who need help. They struggle to know whether each intake file is complete: which documents arrived, which are missing, which information is inconsistent, and whether the file is ready for a case manager or an attorney. IRU examines that information-readiness before a human has to — so frontline staff spend their time helping people, not auditing files.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#DC2626' }}>The Current Reality</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Intake files of uncertain completeness.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Missing documents discovered at review — or later.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Inconsistent information across intake channels.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Reviews delayed while files are reconstructed.</li>
              </ul>
            </div>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.accent }}>The IRU™ Readiness Operation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Information readiness assessed for every intake.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Intake completeness: what arrived, what is missing.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Structured information prepared for human review.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Appropriate routing to the right reviewer.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE INTELLIGENCE OPERATION */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Intake → Completeness review → Missing-information flags → Routing → Human review.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            IRU is an immigration-intake and readiness utility — an intelligence layer that prepares files for the people who make the decisions, not a replacement for them.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Information Readiness</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Every intake is assessed for readiness — so a case manager or attorney opens a file that is already prepared, not a pile of fragments.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Missing-Information Flags</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Incomplete information and missing documents are identified early — what is absent, what is inconsistent, and what needs to be gathered.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Structured Information</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>The information that does arrive is structured into a clean readiness record — organized, readable, and ready to route.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Appropriate Routing</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Ready files are routed to the right human reviewer — case managers, attorneys, or community resources — with the full readiness picture attached.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>IRU Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            From community organizations to multi-program operations — intake readiness scaled to your caseload.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Community</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>$500 setup + $149/mo</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>Immigration-intake readiness for community organizations — structured readiness record, completeness review, document and status checklists, and referral workflow support.</p>
              <a href="https://buy.stripe.com/14A28s8Joc9CcSU9c73ZK0k" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '2.5rem', border: `2px solid ${colors.primary}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Professional</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>$1,500 setup + $399/mo</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>Expanded volume across multiple intake pathways — advanced classification, routing, reporting, and configurable workflows with implementation support.</p>
              <a href="https://buy.stripe.com/5kQeVe2l0b5y9GIbkf3ZK0l" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '2.5rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Organization</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>$3,500 setup + $799/mo</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>Multi-program and multi-location capability — higher volume, multiple workflows, advanced routing, reporting, and deployment support.</p>
              <a href="https://buy.stripe.com/3cI7sM5xc4Ha068ewr3ZK0m" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - LIMITS / GUARDRAIL */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Intake Support — Not Legal Counsel</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important distinctions:</strong> IRU™ is an immigration-intake and readiness utility. It is not an immigration law firm and does not replace qualified immigration professionals. It does not provide legal advice, make legal determinations, or guarantee immigration outcomes — it prepares intake information so the qualified humans who do can review it with a complete picture.
          </p>
        </div>
      </section>

      {/* SECTION 6 - TARGET AUDIENCE & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Designed for the Frontlines</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Immigration Nonprofits • Community Organizations • Legal-Service Organizations • High-Volume Intake Programs
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setPage('contact')}
              style={{...ctaPrimary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
              onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
              onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
            >
              REQUEST A DEMONSTRATION
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
