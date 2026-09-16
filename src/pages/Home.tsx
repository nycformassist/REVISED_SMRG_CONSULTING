import SEO from '../components/SEO';

export default function Home({ setPage }: { setPage: (page: string) => void }) {
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

  const ctaSecondary = {
    background: 'transparent',
    color: colors.primary,
    padding: '1rem 2rem',
    borderRadius: '4px',
    border: `2px solid ${colors.primary}`,
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO 
        title="SMRG Consulting | Operational Intelligence & Intake Systems" 
        description="We build and deploy practical AI-powered systems that plug operational gaps, organize incoming information, and move opportunities from first contact to informed human action."
      />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '7rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            SMRG Consulting • Operational Intelligence
          </div>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Operational Intelligence for<br />Organizations Ready to Move.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            We build and deploy practical AI-powered systems that plug operational gaps, organize incoming information, and move opportunities from first contact to informed human action.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('rru')} style={ctaPrimary}>Explore Our Solutions</button>
            <button onClick={() => setPage('contact')} style={ctaSecondary}>Book an Operational Consultation</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE OPERATIONAL PROBLEM */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Your organization may not have a technology problem. It may have a gap.</h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2rem' }}>
            A missed inquiry. An unanswered email. A repetitive intake process. Information arriving in different formats. Staff spending time collecting information instead of acting on it. A valuable opportunity disappearing between first contact and human follow-up.
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary }}>
            These gaps create operational friction—and operational friction can become lost revenue, lost time, inconsistent service, and unnecessary workload.
          </p>
        </div>
      </section>

      {/* SECTION 3 - THE SMRG METHOD */}
      <section style={{ padding: '5rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Find the Gap. Plug the Gap. Move the Opportunity.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '3rem' }}>
            SMRG designs operational systems around the actual workflow—not around technology for technology's sake.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            <div>CAPTURE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>STRUCTURE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>READINESS</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>HUMAN ACTION</div>
          </div>
          <p style={{ marginTop: '3rem', fontSize: '1.15rem', color: '#D1D5DB', maxWidth: '800px', margin: '3rem auto 0' }}>
            We don't sell AI. We build operational systems that happen to use AI. Technology is the mechanism; the operational outcome is the product.
          </p>
        </div>
      </section>

      {/* SECTION 4 - FEATURED SOLUTION (RRU) */}
      <section style={{ padding: '6rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 800, color: colors.accent, marginBottom: '0.5rem', letterSpacing:'0.05em' }}>PROPRIETARY UTILITY</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>RRU™ Real Estate Intelligence</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Turn real estate inquiries into structured opportunity intelligence.
            </h3>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
              Capture prospective renters, buyers, and sellers 24/7, structure the inquiry, and deliver decision-ready intelligence briefings before your agents pick up the phone.
            </p>
            <button onClick={() => setPage('rru')} style={ctaPrimary}>Explore RRU™ Solutions</button>
          </div>
          <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius:'8px', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontWeight: 700, color: colors.secondary }}>Real Estate Readiness Utility</div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: colors.secondary }}>
              24/7 Bilingual Intake • 0–100 Readiness Score • Structured Opportunity Briefs
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - OTHER OPERATIONAL UTILITIES */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Our Operational Utilities</h2>
          <p style={{ textAlign: 'center', color: colors.secondary, marginBottom: '4rem', fontSize: '1.15rem' }}>
            Proprietary systems built for specific operational challenges.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>LIRU™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom:'1rem', textTransform: 'uppercase' }}>Legal Intake Readiness Utility</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Organize incoming client information, identify missing context, and create a structured starting point before it reaches the legal workflow.
              </p>
              <button onClick={() => setPage('liru')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Learn About LIRU →</button>
            </div>

            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>IRU™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom:'1rem', textTransform: 'uppercase' }}>Immigration Readiness Utility</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Help nonprofit and community-serving organizations structure immigration-related intake and connect individuals with appropriate resources.
              </p>
              <button onClick={() => setPage('iru')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Learn About IRU →</button>
            </div>

            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Childcare OCC™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom:'1rem', textTransform: 'uppercase' }}>Operational Command Center</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Organize parent-provided information and translate it into structured operational guidance to ensure staff consistency across childcare centers.
              </p>
              <button onClick={() => setPage('childcare')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Explore OCC →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 8 - THE SMRG DIFFERENCE */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>High-end digital precision. Localized operational grit.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              We combine modern AI and automation with real-world operational experience. The goal isn't an impressive technology demo—it's deploying systems that work inside real organizations.
            </p>
            <button onClick={() => setPage('about')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, borderBottom: `2px solid ${colors.primary}` }}>Read our philosophy</button>
          </div>
          <div style={{ padding: '2.5rem', background: colors.primary, color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>Need a custom operational workflow?</h2>
            <p style={{ color: '#D1D5DB', marginBottom: '2rem' }}>
              We design bespoke intelligence systems tailored precisely to your organization's unique operational bottlenecks and intake requirements.
            </p>
            <button 
              onClick={() => setPage('custom-systems')} 
              style={{...ctaPrimary, background: '#fff', color: colors.primary, width: '100%'}}
            >
              Discuss Your Workflow
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            Find the gap that is costing you time, opportunities, or revenue.
          </h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Let's identify your workflow problem and determine whether an operational intelligence system can solve it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Book an Operational Consultation</button>
            <button onClick={() => setPage('rru')} style={ctaSecondary}>Explore Our Solutions</button>
          </div>
        </div>
      </section>

    </div>
  );
}