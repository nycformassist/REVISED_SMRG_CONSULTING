import SEO from '../components/SEO';

export default function About({ setPage }: { setPage?: (page: string) => void }) {
  // Enterprise styling variables matching the SMRG brand architecture
  const colors = {
    primary: '#111827', // Deep charcoal
    secondary: '#374151', // Lighter slate
    accent: '#2563EB', // Professional blue
    background: '#FFFFFF',
    surface: '#F9FAFB', // Off-white
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
    marginTop: '2rem'
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO 
        title="About Our Philosophy & Operational Architecture" 
        description="Learn how SMRG Consulting audits workflows, eliminates administrative friction, and engineers intelligent intake systems for modern enterprises."
      />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Our Philosophy
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            We start with the workflow.<br />Not the technology.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, maxWidth: '750px', margin: '0 auto' }}>
            Most AI consultants look for a place to inject technology. We audit the operation, identify the leaks, and build intelligent utilities that structure the workflow.
          </p>
        </div>
      </section>

      {/* SECTION 2 - THE OPERATIONAL FOUNDATION */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>The Architecture of Operational Intelligence</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              For over two decades, our leadership has engineered systems, mapped customer journeys, and plugged operational gaps for demanding professionals and business owners across New York City. 
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              Working in high-stakes environments revealed a fundamental truth: organizations rarely fail because of a lack of talent. They stall because their intake is messy, their institutional knowledge is scattered, and their staff is burdened by unnecessary administrative layers.
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary }}>
              When information lives exclusively in employee memory, paper files, or disconnected emails, organizations become fragile. SMRG Consulting was founded to solve this exact problem.
            </p>
          </div>
          <div style={{ background: colors.background, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>The SMRG Mandate</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ paddingBottom: '1.5rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>1. Eliminate Friction</strong>
                <span style={{ color: colors.secondary }}>We ruthlessly cut administrative bloat and unnecessary layers that do not serve the client or the organization.</span>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>2. Structure the Mess</strong>
                <span style={{ color: colors.secondary }}>We transform unstructured human conversations and raw inquiries into decision-ready data.</span>
              </li>
              <li>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>3. Protect the Bottom Line</strong>
                <span style={{ color: colors.secondary }}>By streamlining qualification and intake, we ensure your team only spends time on opportunities that matter.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY SPECIALIZED UTILITIES? */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Why We Build Specialized Utilities</h2>
          <p style={{ fontSize: '1.25rem', color: '#D1D5DB', marginBottom: '1.5rem', textAlign: 'left' }}>
            We do not sell generic AI chatbots. We design institutional-grade operational utilities.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '1.5rem', textAlign: 'left' }}>
            Different industries face different intake challenges, but the core issue is identical: information enters the organization inefficiently. Rather than forcing a real estate brokerage, a legal firm, and a community nonprofit to use the same generic tool, SMRG develops vertical-specific applications built on our core capture-and-structure methodology.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'left', borderLeft: `4px solid ${colors.accent}`, paddingLeft: '1.5rem', marginTop: '2rem' }}>
            <strong>"We don't sell AI. We design operational systems that happen to use AI."</strong>
          </p>
        </div>
      </section>

      {/* SECTION 4 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to optimize your workflow?</h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2rem' }}>
            Let's audit your current operational systems and explore how an SMRG utility can bring structure to your organization.
          </p>
          {setPage && (
            <button 
              onClick={() => setPage('contact')} 
              style={ctaPrimary}
              onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
              onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
            >
              Request a Demonstration
            </button>
          )}
        </div>
      </section>

    </div>
  );
}