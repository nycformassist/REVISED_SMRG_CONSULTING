import SEO from '../components/SEO';

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
      <SEO
        title="LIRU™ | Legal Intake Readiness Utility | SMRG"
        description="Get the intake right before bad information becomes an operational problem. LIRU structures legal intake at the front door — completeness, readiness classification, risk flags, and appropriate routing — protecting downstream systems."
      />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            LIRU™ — Legal Intake Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Get the intake right before bad information becomes an operational problem.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            LIRU structures legal intake at the front door — information completeness, readiness classification, risk flags, and appropriate routing — so information that arrived wrong never becomes your attorneys' problem, or your downstream systems' problem.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>REQUEST A DEMONSTRATION</button>
            <a href="#pricing" style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}`, textDecoration: 'none', display: 'inline-block' }}>See Pricing</a>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE INFORMATION-DEFENSE PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            Bad information at intake becomes bad operations downstream.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Prospective client information arrives scattered across emails, web forms, and initial phone calls — incomplete, inconsistent, and unstructured. Once it reaches your case systems and your attorneys, every gap becomes rework, delay, and risk. LIRU operates before that happens: it is an information-defense utility positioned between the prospect and everything downstream.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#DC2626' }}>The Current Workflow</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Incomplete information reaches case systems undetected.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Staff reconstructs context the prospect should have supplied.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Inconsistent qualification standards across intake channels.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Vital case parameters buried in disjointed notes.</li>
              </ul>
            </div>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.accent }}>The LIRU™ Information Defense</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Intake completeness verified before the handoff.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Readiness classification: know which matters are decision-ready.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Risk flags surfaced while there is still time to act.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Appropriate routing to the right human — every time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE INTELLIGENCE OPERATION */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Intake → Completeness review → Readiness classification → Routing → Protected downstream systems.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            LIRU examines every inquiry for completeness and structure, classifies its readiness, flags what is missing or risky, and routes it to the appropriate human — before it reaches your attorneys and your systems.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Completeness Review</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Every intake is checked for completeness — what arrived, what is missing, and what still needs to be supplied before the matter moves forward.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Readiness Classification</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Each matter is classified by readiness, so your team knows at a glance which intakes are decision-ready and which require more work.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Risk Flags</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Gaps, inconsistencies, and risk signals are surfaced at the front door — where they are cheapest to fix — not after they have entered your workflow.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Appropriate Routing</h3>
              <p style={{ color: '#9CA3AF', margin: 0 }}>Structured, decision-ready briefs reach the right human — attorneys evaluate merits, never collect basic data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>LIRU Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Start with structured intake readiness at your firm's scale, then expand as intake volume and workflows grow.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Starter</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>$499 setup + $149/mo</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>Structured legal-intake readiness for firms beginning to systematize intake — information capture, completeness review, readiness classification, and routing configuration.</p>
              <a href="https://buy.stripe.com/bJe3cwbVA0qUbOQbkf3ZK0i" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '2.5rem', border: `2px solid ${colors.primary}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Professional</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>$1,500 setup + $399/mo</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>Advanced readiness analysis across multiple intake pathways — document and status handling, priority routing, expanded volume, and reporting.</p>
              <a href="https://buy.stripe.com/00w4gAgbQb5y1ac5ZV3ZK0j" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '2.5rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>Enterprise</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>Sales-assisted</div>
              <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>For organizations with multiple workflows and higher volume: organization-specific readiness logic, integration configuration, and deployment support. Scope defined with you before engagement.</p>
              <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a Demonstration</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - LIMITS / GUARDRAIL */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Responsible Use</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important distinctions:</strong> LIRU™ is not a law firm. It does not provide legal advice, legal representation, or automated legal decision-making — it is not an automated attorney. Human legal judgment remains required at every step; LIRU ensures the humans making those judgments receive structured, complete information.
          </p>
        </div>
      </section>

      {/* SECTION 6 - TARGET AUDIENCE & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Legal Practices That Live at Intake</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Law Firms • Legal Intake Organizations • Attorneys • Intake Departments • Legal Support Staff
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
