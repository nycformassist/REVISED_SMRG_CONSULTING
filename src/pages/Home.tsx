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
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '7rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            SMRG Consulting
          </div>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Build the operational systems<br />your organization outgrows.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            We design intelligent operational utilities that transform messy information, repetitive workflows, and human intake into structured, actionable operational intelligence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('rru')} style={ctaPrimary}>Explore Solutions</button>
            <button onClick={() => setPage('contact')} style={ctaSecondary}>Request a Demonstration</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE OPERATIONAL PROBLEM */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>You don't have an information problem.</h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '3rem' }}>
            You have an information-processing problem. Information enters your organization constantly through forms, phone calls, emails, and conversations. But it almost always arrives incomplete, inconsistent, or difficult to act upon.
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary }}>
            That creates downstream work for your staff. We build utilities to stop it.
          </p>
        </div>
      </section>

      {/* SECTION 3 - THE SMRG METHOD */}
      <section style={{ padding: '5rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem' }}>The Intelligence Architecture</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            <div>CAPTURE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>STRUCTURE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>EVALUATE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>ORGANIZE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>ACT</div>
          </div>
          <p style={{ marginTop: '3rem', fontSize: '1.15rem', color: '#D1D5DB', maxWidth: '800px', margin: '3rem auto 0' }}>
            This is the underlying methodology behind our product family. We don't sell generic AI tools. We map your workflow and deploy specialized software utilities around it to structure your operations.
          </p>
        </div>
      </section>

      {/* SECTION 4 - FEATURED SOLUTION (RRU) */}
      <section style={{ padding: '6rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 800, color: colors.accent, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>FEATURED UTILITY</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>RRU™</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Before your team chases the opportunity, know whether it deserves the effort.
            </h3>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
              An AI-powered real estate qualification utility designed to help brokers and investment teams evaluate and organize prospective opportunities before spending excessive time pursuing them.
            </p>
            <button onClick={() => setPage('rru')} style={ctaPrimary}>Explore RRU™</button>
          </div>
          <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '3rem', textAlign: 'center' }}>
            {/* Visual Placeholder for RRU Graphic */}
            <div style={{ fontWeight: 700, color: colors.secondary }}>Real Estate Readiness Utility</div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: colors.secondary }}>
              Structured Buyer Intelligence • Opportunity Prioritization • Agent Context
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - OTHER OPERATIONAL UTILITIES */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Operational Utilities</h2>
          <p style={{ textAlign: 'center', color: colors.secondary, marginBottom: '4rem', fontSize: '1.15rem' }}>
            One operational architecture. Specialized for the workflow.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>LIRU™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Legal Intake Readiness Utility</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Stop sending attorneys into incomplete intake. Turn prospective client information into structured, decision-ready data before the handoff.
              </p>
              <button onClick={() => setPage('liru')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Explore LIRU™ →</button>
            </div>

            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>IRU™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Immigration Readiness Utility</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Handle high-volume intake with greater structure. Equip community organizations to capture consistent case information without overwhelming staff.
              </p>
              <button onClick={() => setPage('iru')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Explore IRU™ →</button>
            </div>

            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Childcare OCC™</h3>
              <div style={{ fontWeight: 600, color: colors.secondary, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Operational Command Center</div>
              <p style={{ color: colors.secondary, marginBottom: '2rem' }}>
                Organize parent-provided information and translate it into structured, accessible operational guidance to ensure staff consistency.
              </p>
              <button onClick={() => setPage('childcare')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Explore Childcare OCC™ →</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 8 - WHY SMRG & CUSTOM SYSTEMS */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>We start with the operational problem. Not the technology.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              We are not a generic AI consulting firm looking for a place to inject chatbots. We are systems architects. We map the workflow first, identify the friction, and then design the technology around it.
            </p>
            <button onClick={() => setPage('about')} style={{ background: 'none', border: 'none', color: colors.primary, fontWeight: 700, cursor: 'pointer', padding: 0, borderBottom: `2px solid ${colors.primary}` }}>Read our philosophy</button>
          </div>
          <div style={{ padding: '2.5rem', background: colors.primary, color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>Your workflow doesn't fit an off-the-shelf product?</h2>
            <p style={{ color: '#D1D5DB', marginBottom: '2rem' }}>
              We design and deploy purpose-built operational utilities specifically engineered around an organization's existing proprietary processes.
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
            Your organization already has a workflow.
          </h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            The question is whether that workflow is working for you. Let's find out.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a Demonstration</button>
            <button onClick={() => setPage('rru')} style={ctaSecondary}>Explore Solutions</button>
          </div>
        </div>
      </section>

    </div>
  );
}