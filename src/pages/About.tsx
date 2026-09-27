import SEO from '../components/SEO';

export default function About({ setPage }: { setPage: (page: string) => void }) {
  const colors = {
    primary: '#111827',
    secondary: '#374151',
    accent: '#2563EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6, background: colors.background }}>
      <SEO 
        title="About SMRG Consulting | Founder Provenance & Architecture" 
        description="Built from decades of firsthand operational experience in New York professional environments. Meet the founder and explore SMRG's intelligence infrastructure."
      />

      <section style={{ padding: '7rem 1rem', borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Founder Provenance • Operational Roots
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Built From Operational Scars, Not Abstract Experimentation.
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: colors.secondary, marginBottom: '1.5rem', lineHeight: '1.8' }}>
            SMRG Consulting was founded by Valentine Saint Martin, drawing on more than two decades of frontline operational experience across healthcare administration, insurance triage, legal intake environments, and high-volume service workflows in New York and Manhattan.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem', lineHeight: '1.8' }}>
            The utilities behind SMRG—including RRU™, LIRU™, and IRU™—did not originate in a software incubator looking for a market. They were forged to solve real operational failures experienced firsthand: incomplete prospect data, repetitive qualification calls, inconsistent intake formatting, and professionals forced to spend valuable hours cleaning up inbound friction rather than executing expert decisions.
          </p>

          <div style={{ background: colors.surface, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>The SMRG Operating Philosophy</h3>
            <ul style={{ paddingLeft: '1.25rem', color: colors.secondary, fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0 }}>
              <li><strong>Capture at the Source:</strong> Inquiries are intercepted immediately where they enter the organization.</li>
              <li><strong>Structure Unstructured Data:</strong> Raw human input is organized into standardized, actionable signals.</li>
              <li><strong>Deliver Intelligence, Not Noise:</strong> Workflow-specific briefs provide professionals with instant clarity.</li>
              <li><strong>Human in Control:</strong> Software assists and organizes; qualified professionals retain absolute decision-making authority.</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
            <button 
              onClick={() => setPage('contact')} 
              style={{ background: colors.primary, color: '#fff', padding: '1rem 2.5rem', borderRadius: '4px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}
            >
              Request a Live Demonstration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
