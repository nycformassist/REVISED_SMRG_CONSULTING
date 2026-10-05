import SEO from '../components/SEO';

export default function Childcare({ setPage }: { setPage: (page: string) => void }) {
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
        title="Childcare OCC™ | Operational Capacity Controller"
        description="Childcare OCC™ organizes parent-provided information and translates it into structured, accessible operational guidance — daily operational visibility for your childcare staff."
      />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Childcare OCC™ — Operational Capacity Controller
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Equip your staff with the operational visibility they need.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            Childcare OCC™ is an Operational Capacity Controller: it takes parent-provided information — details, preferences, and routines — and translates it into structured, accessible operational guidance your childcare staff can act on every day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>REQUEST A DEMONSTRATION</button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE OPERATIONAL PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            How much critical information is trapped in a binder?
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '3rem' }}>
            Childcare organizations rarely lack information. They have an information-processing problem: parents provide extensive details, preferences, and routines, but that data ends up fragmented across paper files and disjointed messages — and daily operations depend on what staff happen to remember.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#DC2626' }}>The Current Workflow</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Information sits in physical paper files.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Updates are lost in disjointed emails.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Staff must rely on memory for daily routines.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Administrative gaps cause parent friction.</li>
              </ul>
            </div>
            <div style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: colors.accent }}>The OCC Intelligence Operation</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.75rem' }}>• Parent-provided information captured in one place.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Structured daily briefs for every child.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Consistent operational visibility across staff.</li>
                <li style={{ marginBottom: '0.75rem' }}>• Clearer accountability for daily routines.</li>
              </ul>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: colors.secondary, marginTop: '3rem', maxWidth: '700px', margin: '3rem auto 0' }}>
            Childcare OCC™ is about daily operational visibility for staff — what each child needs, today, in the classroom — not inspection readiness. A different information problem, solved with a different intelligence operation.
          </p>
        </div>
      </section>

      {/* SECTION 3 - HOW IT WORKS & WHAT CHANGES */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Systematize your organization's memory.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            The Childcare OCC™ turns what parents told you into what your staff needs to know: parent-provided information structured into operational guidance that supports daily care — so your team can focus on children, not administration.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Operational Consistency</h3>
              <p style={{ color: '#9CA3AF' }}>Eliminate the guesswork. Ensure every staff member has immediate access to structured operational guidance for the children in their care.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Workflow Support</h3>
              <p style={{ color: '#9CA3AF' }}>Transform complex, handwritten parent intake forms into clean, easily readable digital briefs that support daily classroom management.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Parent Confidence</h3>
              <p style={{ color: '#9CA3AF' }}>Demonstrate operational control. When your staff works from the same structured operational picture, parents experience a seamless, professional organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PILOT PARTNERSHIP & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Pilot Partnership Program</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            We are systematically selecting specific regional centers to validate customized operational instances of the Childcare OCC™. If you manage a facility and want to stabilize your operational visibility, we should talk.
          </p>
          <div style={{ padding: '2rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '2rem' }}>
             <p style={{ fontWeight: 700, margin: 0 }}>Built for Directors • Program Administrators • Childcare Providers</p>
          </div>
          <button
            onClick={() => setPage('contact')}
            style={{...ctaPrimary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
            onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
            onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
          >
            APPLY FOR PILOT PARTNERSHIP
          </button>
        </div>
      </section>

    </div>
  );
}
