export default function HowItWorks({ setPage }: { setPage: (page: string) => void }) {
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
      
      {/* HERO SECTION */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Our Methodology
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            How SMRG Operational Utilities Work
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, maxWidth: '750px', margin: '0 auto' }}>
            We don't sell generic chatbots or surface-level AI tools. We engineer structured intake pipelines designed around a repeatable operational architecture.
          </p>
        </div>
      </section>

      {/* THE 5-STEP METHODOLOGY */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>The Intelligence Sequence</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>PHASE 01</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Engage</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                The utility initiates a guided, conversational experience with the prospect through your website, intake form, or staff interface—capturing interest before it becomes an unanswered inquiry.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>PHASE 02</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Understand</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Instead of collecting basic contact details (Name, Email, Phone), the utility investigates the context behind the inquiry—determining motivation, seriousness, and timelines.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>PHASE 03</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Analyze</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                The interaction is processed through your organization's customized business parameters, separating raw noise from genuine operational opportunities.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>PHASE 04</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Structure</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                The raw conversation is instantly synthesized into a clean, decision-ready assessment brief formatted specifically for your team's workflow.
              </p>
            </div>

            <div style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>PHASE 05</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Prioritize</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Your team receives clear operational context and priority rankings, allowing them to focus their time and energy where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC NOTE ON INTELLECTUAL PROPERTY */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>The Magic Stays Behind the Curtain</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            We give your prospects and team members a seamless, powerful operational experience. Your scoring methodology, investigative sequences, logic trees, and proprietary engine architecture remain strictly protected behind the curtain.
          </p>
          <button 
            onClick={() => setPage('contact')} 
            style={{...ctaPrimary, background: '#fff', color: colors.primary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
          >
            REQUEST A DEMONSTRATION
          </button>
        </div>
      </section>

    </div>
  );
}