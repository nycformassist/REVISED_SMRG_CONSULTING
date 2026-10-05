import SEO from '../components/SEO';

export default function Biru({ setPage }: { setPage: (page: string) => void }) {
  const colors = {
    primary: '#111827',
    secondary: '#374151',
    accent: '#2563EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
  };

  const ctaPrimary: React.CSSProperties = {
    display: 'inline-block',
    background: colors.primary,
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const sources = [
    'Forms', 'Certificates', 'Training records', 'Operational records',
    'Policies', 'Reports', 'Spreadsheets', 'Personnel records',
  ];

  const situations = [
    { t: 'Acquired a business?', d: 'Inherited records may contain years of assumptions — prior operators, prior entities, prior structures that no longer apply.' },
    { t: 'Changed management?', d: 'Your systems may still reflect the previous operator: names, responsible parties, and procedures that were never updated.' },
    { t: 'Expanding?', d: 'More locations, more people, more credentials — and more opportunities for inconsistency across every new record set.' },
    { t: 'Opening a new facility?', d: 'Readiness problems are cheaper to find before opening day than after an examiner finds them.' },
    { t: 'Facing an inspection or regulatory event?', d: 'Know what your records actually say before someone else does.' },
  ];

  const findings = [
    { t: 'RECORD CONFLICT', d: 'Two sources identify different responsible parties for the same facility or function.' },
    { t: 'STALE RECORD', d: 'A credential appears current in day-to-day operations, but the supporting record is expired.' },
    { t: 'ENTITY MISMATCH', d: 'An employee\u2019s location or role relationship differs between the roster and the training log.' },
    { t: 'INHERITED DATA', d: 'Acquired records still reflect the former ownership structure \u2014 names, entities, and responsible parties that no longer apply.' },
    { t: 'READINESS GAP', d: 'Required evidence cannot be reconciled to the current operating entity.' },
  ];

  const notReplacing = [
    'EHR', 'ERP', 'property-management system', 'HR system',
    'inspection platform', 'document storage', 'QMS', 'practice-management software',
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="BIRU™ | Business Inspection Readiness Utility | SMRG"
        description="When the business changes, do the records change with it? BIRU analyzes business records across sources to find the inconsistencies, gaps, and disconnected records that become costly during acquisitions, transitions, and expansion."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            BIRU™ — Business Inspection Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            When the business changes, do the records change with it?
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2rem', maxWidth: '750px', margin: '0 auto 2rem' }}>
            BIRU™ finds the inconsistencies, gaps, and disconnected records that become costly when a business is acquired, expanded, reorganized, or examined.
          </p>
          <p style={{ fontSize: '1.1rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', fontStyle: 'italic' }}>
            "Something changed in your business. We think that change may have created an information problem worth looking at."
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a BIRU Assessment</button>
            <button onClick={() => setPage('how-it-works')} style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>See How It Works</button>
          </div>
        </div>
      </section>

      {/* WHEN BIRU BELONGS */}
      <section style={{ padding: '5rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            BIRU is for the moment when understanding your records becomes worth paying for.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '1rem', maxWidth: '800px', margin: '0 auto 1rem' }}>
            BIRU is not generic inspection-management software, a compliance tracker, a document vault, an OCR system, or a checklist — and it is not a replacement for the inspection or compliance software you may already have. You may already have excellent systems. That is not the problem.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            The problem BIRU addresses is what happens when change, complexity, consequence, and timing converge:
          </p>
          <div style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.03em', marginBottom: '3.5rem', color: '#fff' }}>
            CHANGE + COMPLEXITY + CONSEQUENCE + TIMING = NEED PLACEMENT
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Acquisition or management change', d: 'New ownership inherits an information environment — records scattered across prior operators, locations, systems, and people. The business may not yet know whether those records collectively tell a complete and reliable story. An upcoming inspection creates the timing.' },
              { t: 'Rapid expansion', d: 'More people, more credentials, more training, more locations, more responsibility, more records — and more opportunities for inconsistency, missing information, stale information, or disconnected information. A coming review creates consequence and timing.' },
              { t: 'Existing system, new discrepancies', d: 'A compliance system is already in place — and recurring discrepancies keep appearing, an audit is approaching, and a new compliance director has just taken responsibility. More information to understand, not less. The question becomes what the information says across systems, records, people, locations, and responsibilities.' },
            ].map((s) => (
              <div key={s.t} style={{ padding: '2rem', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#fff' }}>{s.t}</h3>
                <p style={{ color: '#D1D5DB', margin: 0, fontSize: '0.98rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section style={{ padding: '5rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            The business changed. The records may not have.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '3.5rem', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            BIRU belongs in situations — not industries. If one of these is true, the record problem is real whether or not anyone has looked at it yet.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {situations.map((s) => (
              <div key={s.t} style={{ padding: '2rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>{s.t}</h3>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.98rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            The problem isn't possessing documents. It's knowing what they collectively say.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '1rem', maxWidth: '800px', margin: '0 auto 1rem' }}>
            Businesses hold operational information scattered across many sources. BIRU™ brings it together and examines it the way scrutiny would.
          </p>
          <p style={{ fontSize: '1rem', color: colors.secondary, textAlign: 'center', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem', fontStyle: 'italic' }}>
            BIRU surfaces conflicts and gaps with the evidence behind each one — it does not decide which record is correct. That judgment stays with your people.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '4rem' }}>
            {sources.map((s) => (
              <span key={s} style={{ border: `1px solid ${colors.border}`, background: colors.background, borderRadius: '999px', padding: '0.5rem 1.1rem', fontSize: '0.9rem', color: colors.secondary, fontWeight: 600 }}>{s}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'RECORDS', d: 'Provide your operational records — whatever your business already maintains.' },
              { t: 'UNDERSTAND', d: 'BIRU structures the information and extracts what each record asserts.' },
              { t: 'CROSS-REFERENCE', d: 'Information is compared across documents for consistency and coverage.' },
              { t: 'DETECT', d: 'Gaps, conflicts, expirations, and weaknesses are identified with evidence.' },
              { t: 'PRIORITIZE', d: 'Findings are ordered so the most consequential issues come first.' },
              { t: 'HUMAN ACTION', d: 'Your team reviews and acts — with the full picture in front of them.' },
            ].map((s, i) => (
              <div key={s.t} style={{ padding: '1.75rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>0{i + 1}</div>
                <div style={{ fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{s.t}</div>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.95rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT A RESULT REVEALS */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>What a BIRU intelligence result reveals.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
            Findings are ordered by consequence, each with the evidence behind it. Illustrative examples of what the analysis surfaces:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {findings.map((f) => (
              <div key={f.t} style={{ padding: '1.75rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: colors.accent, letterSpacing: '0.06em', marginBottom: '0.5rem' }}>{f.t}</div>
                <p style={{ color: colors.secondary, margin: '0 0 0.75rem', fontSize: '0.95rem' }}>{f.d}</p>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontStyle: 'italic' }}>Illustrative example</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT REPLACING */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>BIRU is not replacing your systems.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
            Not your:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {notReplacing.map((s) => (
              <span key={s} style={{ border: `1px solid ${colors.border}`, background: colors.background, borderRadius: '999px', padding: '0.5rem 1.1rem', fontSize: '0.9rem', color: colors.secondary, fontWeight: 600, textDecoration: 'line-through' }}>{s}</span>
            ))}
          </div>
          <p style={{ fontSize: '1.2rem', color: colors.primary, marginBottom: '0', maxWidth: '750px', margin: '0 auto', fontWeight: 600 }}>
            BIRU works across the information those systems produce to determine whether the organization's records still make sense together.
          </p>
        </div>
      </section>

      {/* WHAT IT'S NOT + TRUST */}
      <section style={{ padding: '5rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Readiness intelligence — stated plainly.</h2>
          <p style={{ fontSize: '1.1rem', color: colors.secondary, marginBottom: '1.5rem' }}>
            BIRU™ is not a document vault, a filing cabinet, generic OCR, or a checklist application — and it is not a replacement for existing inspection or compliance software. It does not grant regulatory certification, guarantee inspection outcomes, provide legal advice, or replace inspectors and qualified compliance professionals. It examines the records you have and shows you, with evidence, where readiness breaks down — so humans can fix it before scrutiny arrives.
          </p>
          <p style={{ fontSize: '1.05rem', color: colors.secondary, marginBottom: '0' }}>
            How your records are handled: BIRU analyzes without storing. Personal identifiers are pseudonymized before analysis, nothing is retained after the review, and every finding is intelligence for human review.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Know what your records say before someone else does.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Request a BIRU assessment and see what BIRU™ would find in records like yours.
          </p>
          <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: colors.accent }}>Request a BIRU Assessment</button>
        </div>
      </section>
    </div>
  );
}
