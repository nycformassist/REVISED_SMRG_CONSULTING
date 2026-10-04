import SEO from '../components/SEO';

const LINKS = {
  single: 'https://buy.stripe.com/eVq4gAbVA7Tm5qs0FB3ZK0f',
  professional: 'https://buy.stripe.com/4gM14o8Jo5Le2eg73Z3ZK0g',
  center: 'https://buy.stripe.com/5kQfZi8Jo8Xq1acdsn3ZK0h',
};

export default function InspectorAi({ setPage }: { setPage: (page: string) => void }) {
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
    transition: 'background 0.2s',
  };

  const tiers = [
    {
      name: 'Inspector AI — Single Review',
      price: '$299',
      billing: 'one-time',
      desc: 'A one-time AI-assisted review of your submitted operational records: cross-referenced findings, potential inconsistencies and gaps identified, regulatory citations, and ordered remediation priorities.',
      link: LINKS.single,
      cta: 'Buy Now',
    },
    {
      name: 'Inspector AI Professional',
      price: '$749',
      billing: 'per month · up to 5 reviews/month',
      desc: 'Ongoing operational intelligence for a single program: up to 5 reviews per month with trend tracking across reviews, recurring regulatory alignment checks, and priority support.',
      link: LINKS.professional,
      cta: 'Get Started',
    },
    {
      name: 'Inspector AI Center',
      price: '$1,499',
      billing: 'per month · up to 15 reviews/month',
      desc: 'For centers and growing organizations: up to 15 reviews per month, multi-program comparison, organization-level findings dashboard, and dedicated onboarding.',
      link: LINKS.center,
      cta: 'Get Started',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="Inspector AI™ | Childcare Operational & Compliance Intelligence"
        description="AI-assisted review of childcare operational records. Cross-referenced findings, potential gaps identified, regulatory citations, and remediation priorities — supporting human judgment, not replacing it."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Inspector AI™ — Childcare Operational Intelligence
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Know what your records say before an inspection does.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            Inspector AI™ analyzes your submitted operational records, cross-references information across documents, identifies potential inconsistencies and gaps, connects findings to applicable regulatory requirements, and produces evidence-based findings with ordered remediation priorities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" style={ctaPrimary}>See Pricing</a>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>Talk to SMRG</button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            A second set of eyes on your documentation.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Childcare programs produce enormous documentation — attendance, staffing, training, drills, policies. Inspector AI™ reads across it all and surfaces what deserves a human's attention.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { t: 'Submit Operational Records', d: 'Upload your existing operational records — rosters, training logs, drill records, policies, attendance documentation.' },
              { t: 'Cross-Referenced Analysis', d: 'The system cross-references information across documents, checking for inconsistencies, gaps, and missing required elements.' },
              { t: 'Regulatory Citations', d: 'Findings connect to applicable regulatory requirements — 18 NYCRR Part 418-1 and NYC Health Code Article 47 — so you see the basis.' },
              { t: 'Remediation Priorities', d: 'An ordered remediation report ranks what to address first, with the evidence behind every finding.' },
            ].map((c, i) => (
              <div key={c.t} style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>STEP {i + 1}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{c.t}</h3>
                <p style={{ color: colors.secondary, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>Inspector AI™ Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            Start with a single review, or keep continuous oversight on a monthly plan.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {tiers.map((t) => (
              <div key={t.name} style={{ padding: '2rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t.name}</h3>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: colors.accent, marginBottom: '0.25rem' }}>{t.price}</div>
                <div style={{ fontSize: '0.9rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>{t.billing}</div>
                <p style={{ color: colors.secondary, flex: 1 }}>{t.desc}</p>
                <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: '1.5rem' }}>{t.cta}</a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: colors.secondary, marginTop: '2.5rem' }}>
            Enterprise and multi-location organizations: <button onClick={() => setPage('contact')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline' }}>Request a Consultation</button>
          </p>
        </div>
      </section>

      {/* SAFETY / PRIVACY */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built Around Your Records' Sensitivity</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1rem' }}>
            Personal information in your records is pseudonymized before analysis. Records are processed and discarded — the system is not a document-storage platform and is not an approval or denial engine.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important:</strong> Inspector AI™ supports human professional judgment. It is not a government inspector, not legal advice, not a compliance guarantee, and not a replacement for qualified professional review.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Get a clear picture of your documentation health.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            A single review costs less than one hour of remediation scrambling.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={LINKS.single} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: colors.accent }}>Buy a Single Review — $299</a>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: 'transparent', border: '2px solid #fff' }}>Request a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
