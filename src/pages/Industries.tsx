import SEO from '../components/SEO';

export default function Industries({ setPage }: { setPage: (page: string) => void }) {
  const colors = {
    primary: '#111827',
    secondary: '#374151',
    accent: '#2563EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
  };

  const cardStyle = {
    background: colors.background,
    padding: '2.5rem',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO 
        title="Industries We Serve | Enterprise Operational Utilities" 
        description="Explore SMRG Consulting's vertical-specific AI intake and operational readiness solutions for Real Estate, Legal Practices, Immigration, and Childcare."
      />
      
      {/* HERO SECTION */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Industries We Serve
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Vertical expertise. Systematic execution.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, maxWidth: '750px', margin: '0 auto' }}>
            Different sectors face distinct operational challenges, but they share a common friction point: unstructured inbound information. Here is where SMRG utilities are deployed.
          </p>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Real Estate */}
          <div style={cardStyle}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Real Estate</h3>
              <div style={{ fontWeight: 600, color: colors.accent, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Flagship Solution: RRU™</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                For brokers, investment teams, and high-volume operations that need to evaluate and prioritize prospective real estate opportunities before committing agent time.
              </p>
            </div>
            <button onClick={() => setPage('rru')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Explore RRU™ →
            </button>
          </div>

          {/* Legal */}
          <div style={cardStyle}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Legal Practices</h3>
              <div style={{ fontWeight: 600, color: colors.accent, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Specialized Solution: LIRU™</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                For law firms and intake departments looking to eliminate administrative investigator work and deliver structured, decision-ready client briefs straight to attorneys.
              </p>
            </div>
            <button onClick={() => setPage('liru')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Explore LIRU™ →
            </button>
          </div>

          {/* Immigration / Nonprofits */}
          <div style={cardStyle}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Immigration & Nonprofits</h3>
              <div style={{ fontWeight: 600, color: colors.accent, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Specialized Solution: IRU™</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                For community organizations and mission groups handling high-volume intake without overwhelming staff capacity or compromising consistency.
              </p>
            </div>
            <button onClick={() => setPage('iru')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Explore IRU™ →
            </button>
          </div>

          {/* Childcare */}
          <div style={cardStyle}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Childcare Organizations</h3>
              <div style={{ fontWeight: 600, color: colors.accent, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Specialized Solution: Childcare OCC™</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                For childcare directors and administrators who need to transform parent-provided details into accessible, consistent operational guidance for onsite staff.
              </p>
            </div>
            <button onClick={() => setPage('childcare')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Explore Childcare OCC™ →
            </button>
          </div>

          {/* Professional Services */}
          <div style={cardStyle}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Professional Services</h3>
              <div style={{ fontWeight: 600, color: colors.accent, fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Custom Development Path</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                For growing businesses and advisory firms that require bespoke operational utilities engineered precisely around proprietary workflows and client intake steps.
              </p>
            </div>
            <button onClick={() => setPage('custom-systems')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, textAlign: 'left' }}>
              Explore Custom Systems →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}