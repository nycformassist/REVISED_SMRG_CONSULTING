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

  const issues = [
    { t: 'Missing information', d: 'Required records that cannot be found across the documents provided.' },
    { t: 'Incomplete records', d: 'Documents that exist but are missing critical fields, dates, or signatures.' },
    { t: 'Expired records', d: 'Certifications, licenses, and credentials past their validity dates.' },
    { t: 'Expiring records', d: 'Time-sensitive documents approaching renewal — flagged before they lapse.' },
    { t: 'Stale information', d: 'Records that have not been updated within the expected cycle.' },
    { t: 'Conflicting information', d: 'The same entity, date, or fact stated differently across documents.' },
    { t: 'Entity inconsistencies', d: 'Names, roles, or identifiers that do not resolve to the same person or record.' },
    { t: 'Requirement gaps', d: 'Operational requirements with no supporting evidence found.' },
  ];

  const sources = [
    'Forms', 'Certificates', 'Training records', 'Operational records',
    'Policies', 'Reports', 'Spreadsheets', 'Personnel records',
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="BIRU™ | Business Inspection Readiness Utility | SMRG"
        description="BIRU analyzes your business operational records and surfaces readiness issues before inspection, audit, review, or scrutiny. Know what your records say before someone else does."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            BIRU™ — Business Inspection Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Know what your records say before someone else does.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            BIRU™ is a business operational-record inspection and readiness intelligence system. It analyzes your operational records and surfaces the issues an inspection, audit, review, or external examination would find — before it finds them.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a Demonstration</button>
            <button onClick={() => setPage('how-it-works')} style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>See How It Works</button>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            The problem isn't possessing documents. It's knowing what they collectively say.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Businesses hold operational information scattered across many sources. BIRU™ brings it together and examines it the way scrutiny would.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '4rem' }}>
            {sources.map((s) => (
              <span key={s} style={{ border: `1px solid ${colors.border}`, background: colors.background, borderRadius: '999px', padding: '0.5rem 1.1rem', fontSize: '0.9rem', color: colors.secondary, fontWeight: 600 }}>{s}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'DOCUMENTS', d: 'Provide your operational records — whatever your business already maintains.' },
              { t: 'UNDERSTANDING', d: 'BIRU structures the information and extracts what each record asserts.' },
              { t: 'CROSS-REFERENCE', d: 'Information is compared across documents for consistency and coverage.' },
              { t: 'FINDINGS', d: 'Gaps, conflicts, expirations, and weaknesses are identified with evidence.' },
              { t: 'PRIORITY', d: 'Findings are ordered so the most consequential issues come first.' },
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

      {/* ISSUES SURFACED */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>What BIRU surfaces.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
            Readiness issues — identified with the evidence behind each one, ordered by priority.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {issues.map((f) => (
              <div key={f.t} style={{ padding: '1.75rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>{f.t}</h3>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.95rem' }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for businesses where records matter.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
            BIRU™ serves businesses whose operations depend on inspection, audit, or documentation readiness — where an examination can expose inconsistencies or missing information, and where the cost of being unprepared is real.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            BIRU can be configured for businesses whose operations depend on inspection, audit, or documentation readiness. If your records would be examined tomorrow, BIRU tells you what the examination would find — today.
          </p>
        </div>
      </section>

      {/* WHAT IT'S NOT */}
      <section style={{ padding: '5rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Readiness intelligence — stated plainly.</h2>
          <p style={{ fontSize: '1.1rem', color: colors.secondary, marginBottom: '0' }}>
            BIRU™ is not a document vault, a filing cabinet, generic OCR, or a checklist application. It does not grant regulatory certification, guarantee inspection outcomes, provide legal advice, or replace inspectors and qualified compliance professionals. It examines the records you have and shows you, with evidence, where readiness breaks down — so humans can fix it before scrutiny arrives.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Know what your records say before someone else does.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Request a demonstration and see what BIRU™ finds in operational records like yours.
          </p>
          <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: colors.accent }}>Request a Demonstration</button>
        </div>
      </section>
    </div>
  );
}
