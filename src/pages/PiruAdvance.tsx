import SEO from '../components/SEO';

const LINKS = {
  market: 'https://buy.stripe.com/dRm00kf7M3D6bOQbkf3ZK0d',
  territory: 'https://buy.stripe.com/9B628s0cS3D6dWYgEz3ZK0e',
};

export default function PiruAdvance({ setPage }: { setPage: (page: string) => void }) {
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
      name: 'PIRU Advance — Market Intelligence',
      price: '$2,500',
      billing: 'one-time',
      desc: 'A researched market intelligence engagement: 75 verified businesses with full intelligence on each, decision-maker mapping across the market, competitive and positioning analysis, and a market entry strategy brief.',
      link: LINKS.market,
      cta: 'Buy Now',
    },
    {
      name: 'PIRU Advance — Territory Intelligence',
      price: '$5,000',
      billing: 'one-time',
      desc: 'Complete territory coverage: 150 verified businesses across multiple categories, ranked prospect list with decision-maker intelligence, territory prioritization, and a territory operating playbook for your team.',
      link: LINKS.territory,
      cta: 'Buy Now',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="PIRU Advance™ | Market & Territory Intelligence"
        description="Higher-level market and territory intelligence for organizations that need verified coverage of an entire market — not just individual prospect research."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            PIRU Advance™ — Market & Territory Intelligence
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Know the whole market — not just the next lead.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            PIRU Advance™ is higher-level intelligence for organizations that need verified, researched coverage of an entire market or territory — who operates there, where the opportunity concentrates, and how to enter it with evidence instead of assumptions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" style={ctaPrimary}>See Pricing</a>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>Talk to SMRG</button>
          </div>
        </div>
      </section>

      {/* WHAT IT COVERS */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            Built for expansion decisions.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Individual prospect research answers "who should we call." PIRU Advance™ answers "where should we go, and why."
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { t: 'Market Coverage', d: 'Verified businesses across your target market or territory — researched individually, delivered as a whole picture.' },
              { t: 'Opportunity Concentration', d: 'Ranked prospects with the evidence behind each ranking, so resources go where the opportunity actually is.' },
              { t: 'Decision-Maker Mapping', d: 'Key people mapped across the market, with contact routes identified where verifiable.' },
              { t: 'Strategic Context', d: 'Market entry strategy or territory operating playbook grounded in what the research found — not generic advice.' },
            ].map((c) => (
              <div key={c.t} style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{c.t}</h3>
                <p style={{ color: colors.secondary, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>PIRU Advance™ Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            One-time engagements. Delivered by the SMRG intelligence team.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {tiers.map((t) => (
              <div key={t.name} style={{ padding: '2.5rem', background: colors.surface, borderRadius: '8px', border: `2px solid ${colors.primary}`, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: colors.accent, marginBottom: '0.25rem' }}>{t.price}</div>
                <div style={{ fontSize: '0.9rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>{t.billing}</div>
                <p style={{ color: colors.secondary, flex: 1 }}>{t.desc}</p>
                <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: '1.5rem' }}>{t.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Enter your next market with evidence.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Purchase a market or territory engagement directly, or talk to SMRG first.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={LINKS.market} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: colors.accent }}>Buy Market Intelligence — $2,500</a>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: 'transparent', border: '2px solid #fff' }}>Request a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
