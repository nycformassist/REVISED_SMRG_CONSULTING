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
        title="About Our Philosophy & Operational Origin Story" 
        description="Discover how SMRG Consulting grew from front-line operational experience in NYC to engineering specialized intake intelligence utilities across immigration, legal, and real estate."
      />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            New York-Origin Operational Intelligence
          </div>
          <h1 style={{ fontSize: '3.25rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Built on the Operational Front Lines of NYC
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, maxWidth: '780px', margin: '0 auto' }}>
            From navigating New York’s shelter system firsthand to 20 years optimizing operations for shrewd business leaders across Manhattan and the Bronx—how SMRG turned real-world friction into decision-ready intelligence.
          </p>
        </div>
      </section>

      {/* SECTION 2 - ACT I & ACT II: THE LIVED REALITY & THE BOTTLENECK */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>The Lived Reality & The Bottleneck</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              SMRG’s technology didn't begin in a Silicon Valley incubator or behind a desk in a tech lab. It was forged on the operational front lines of New York City across healthcare administration, insurance, medical facilities, and legal environments.
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              As a lifelong New Yorker who navigated the city’s shelter system firsthand and spent over two decades optimizing operations and plugging profit leaks for business owners, one undeniable reality became clear: <strong>New Yorkers don’t experience systems as software. They experience them as people trying to get somewhere.</strong>
            </p>
            <div style={{ background: colors.background, borderLeft: `4px solid ${colors.accent}`, padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0', marginTop: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', color: colors.primary, fontWeight: 600, margin: 0, fontStyle: 'italic' }}>
                "The person has information. The professional needs structured intelligence. The bottleneck is getting from one to the other."
              </p>
            </div>
          </div>

          <div style={{ background: colors.background, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>The SMRG Mandate</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ paddingBottom: '1.5rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>1. Eliminate Administrative Friction</strong>
                <span style={{ color: colors.secondary }}>We cut unnecessary administrative bloat and repetitive intake layers that slow down decision-makers.</span>
              </li>
              <li style={{ paddingBottom: '1.5rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>2. Structure Unformatted Data</strong>
                <span style={{ color: colors.secondary }}>We convert scattered human conversations, emails, and voicemail inquiries into decision-ready briefings.</span>
              </li>
              <li>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem' }}>3. Protect Speed-to-Revenue</strong>
                <span style={{ color: colors.secondary }}>By automating 24/7 bilingual qualification, your human staff only spends time closing structured opportunities.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ACT III: EVOLUTIONARY LINEAGE */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>The Evolutionary Lineage</h2>
          <p style={{ fontSize: '1.2rem', color: '#D1D5DB', marginBottom: '3rem', textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            One common intelligence capture methodology adapted across adjacent, high-friction professional workflows.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#1F2937', padding: '2rem', borderRadius: '8px', border: '1px solid #374151' }}>
              <div style={{ color: colors.accent, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Origin Point</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>IRU™</h3>
              <p style={{ fontSize: '0.95rem', color: '#9CA3AF', margin: 0 }}>
                <strong>Immigration Readiness Utility:</strong> Created first to help individuals communicate complex stories without bureaucratic jargon, delivering structured briefs for legal aid and missions.
              </p>
            </div>

            <div style={{ background: '#1F2937', padding: '2rem', borderRadius: '8px', border: '1px solid #374151' }}>
              <div style={{ color: colors.accent, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Legal Expansion</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>LIRU™</h3>
              <p style={{ fontSize: '0.95rem', color: '#9CA3AF', margin: 0 }}>
                <strong>Legal Intake Readiness Utility:</strong> Adapted for law firms to structure prospective client intake, evaluate case-readiness, and cross-check documentation before reaching an attorney's desk.
              </p>
            </div>

            <div style={{ background: '#1F2937', padding: '2rem', borderRadius: '8px', border: '1px solid #374151' }}>
              <div style={{ color: colors.accent, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Real Estate & Housing</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>RRU™ & RRU Rental</h3>
              <p style={{ fontSize: '0.95rem', color: '#9CA3AF', margin: 0 }}>
                <strong>Real Estate Readiness Utility:</strong> Expanded into residential real estate—delivering 24/7 bilingual capture, voucher-mindful scoring, and decision-ready briefs for buyers, sellers, and renters.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.25rem', color: '#D1D5DB', textAlign: 'center', borderLeft: `4px solid ${colors.accent}`, paddingLeft: '1.5rem', marginTop: '3.5rem' }}>
            <strong>"We don't sell AI. We design operational systems that happen to use AI."</strong>
          </p>
        </div>
      </section>

      {/* SECTION 4 - ACT IV: CORE OPERATING PHILOSOPHY */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Our Core Operating Philosophy</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: colors.primary }}>Localized Operational Grit</h3>
              <p style={{ fontSize: '1rem', color: colors.secondary, margin: 0 }}>
                High-end digital precision rooted in direct exposure to New York’s real-world administrative bottlenecks across healthcare, legal, and housing.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: colors.primary }}>Human-Centered & Compliant</h3>
              <p style={{ fontSize: '1rem', color: colors.secondary, margin: 0 }}>
                Technology structures and scores information. Authorized human professionals always make the final business, legal, and leasing decisions.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: colors.primary }}>Inclusive Architecture</h3>
              <p style={{ fontSize: '1rem', color: colors.secondary, margin: 0 }}>
                Native English and Spanish processing with explicit voucher verification mechanics built into housing workflows so foundation-level New Yorkers are never excluded.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: colors.primary }}>Process Over Technology</h3>
              <p style={{ fontSize: '1rem', color: colors.secondary, margin: 0 }}>
                We don't sell technology for technology's sake. We build operational systems that solve measurable workflow problems and plug revenue leaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
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