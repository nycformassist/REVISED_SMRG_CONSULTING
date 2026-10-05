import SEO from '../components/SEO';

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

  const stages = [
    { t: 'Capture', d: 'Get the relevant information — from inquiries, records, documents, and operational systems, wherever it currently lives.' },
    { t: 'Structure', d: 'Turn inconsistent, fragmented information into clean, usable records — the foundation everything else depends on.' },
    { t: 'Understand', d: 'Extract meaning and context from the records — not just what was said, but what it indicates.' },
    { t: 'Cross-Reference', d: 'Compare information against relevant facts, records, rules, or signals — across documents, sources, and time.' },
    { t: 'Classify', d: 'Determine what matters — separating signal from noise with explicit, reviewable criteria.' },
    { t: 'Prioritize', d: 'Surface what deserves attention first, so professional time goes where it counts.' },
    { t: 'Intelligence', d: 'Produce a usable intelligence output — a brief, a finding set, a ranked list — with the evidence behind it.' },
    { t: 'Human Action', d: 'Put the decision back where it belongs: with the qualified professional. AI processes information; people decide.' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="The SMRG Intelligence Architecture | How It Works"
        description="Information → Intelligence → Action. Every SMRG system moves information through the same disciplined intelligence sequence."
      />

      {/* HERO SECTION */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            The SMRG Architecture
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Information → Intelligence → Action
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, maxWidth: '750px', margin: '0 auto' }}>
            Every SMRG system performs the same transformation: it takes information that is difficult to interpret, moves it through a disciplined intelligence sequence, and returns it as structured intelligence a qualified professional can act on.
          </p>
        </div>
      </section>

      {/* THE INTELLIGENCE SEQUENCE */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>The Intelligence Sequence</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {stages.map((s, i) => (
              <div key={s.t} style={{ background: colors.background, padding: '2rem', borderRadius: '8px', border: i === stages.length - 1 ? `2px solid ${colors.primary}` : `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>STAGE {String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{s.t}</h3>
                <p style={{ color: colors.secondary, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE NOTE */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>One architecture. Many applications.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            RRU, LIRU, IRU, PIRU, BIRU, and DIRU are each a specialized application of this same intelligence sequence — adapted to the operational problem, not forced onto it.
          </p>
          <button
            onClick={() => setPage('contact')}
            style={{...ctaPrimary, background: '#fff', color: colors.primary, padding: '1.25rem 3rem', fontSize: '1.15rem'}}
          >
            DISCUSS YOUR INTELLIGENCE OPPORTUNITY
          </button>
        </div>
      </section>

    </div>
  );
}
