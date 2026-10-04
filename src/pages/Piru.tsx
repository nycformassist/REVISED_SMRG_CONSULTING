import SEO from '../components/SEO';

const LINKS = {
  snapshot: 'https://buy.stripe.com/eVqbJ28Job5yf12bkf3ZK09',
  pack10: 'https://buy.stripe.com/5kQ5kE5xc0qUaKMbkf3ZK0a',
  pack25: 'https://buy.stripe.com/5kQ5kE3p47Tm0689c73ZK0b',
  program: 'https://buy.stripe.com/4gMbJ23p42z27yAdsn3ZK0c',
};

export default function Piru({ setPage }: { setPage: (page: string) => void }) {
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
      name: 'PIRU Prospect Intelligence Snapshot',
      price: '$495',
      billing: 'one-time',
      desc: 'A focused, verified view of a target market or prospect set — researched prospects, business verification, decision-maker identification where verifiable, relevant signals, and priority ranking.',
      link: LINKS.snapshot,
      cta: 'Buy Now',
    },
    {
      name: 'PIRU 10-Pack',
      price: '$750',
      billing: 'one-time',
      desc: '10 deeply researched prospects with business verification, decision-maker research, why-now intelligence, contact route, and individual prospect briefs.',
      link: LINKS.pack10,
      cta: 'Buy Now',
    },
    {
      name: 'PIRU 25-Pack',
      price: '$1,500',
      billing: 'one-time',
      desc: '25 deeply researched prospects with full intelligence briefs, evidence and source references, structured data delivery, and an executive summary.',
      link: LINKS.pack25,
      cta: 'Buy Now',
    },
    {
      name: 'PIRU Intelligence Program',
      price: '$1,500',
      billing: 'per month',
      desc: 'A continuously refreshed pipeline: up to 50 fresh prospects per month, priority ranking, signal monitoring, and a monthly market intelligence summary. Cancel anytime.',
      link: LINKS.program,
      cta: 'Get Started',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="PIRU™ | Prospect Intelligence Readiness Utility"
        description="Turn a prospect list into actionable business intelligence before sales time is spent. Researched, verified prospects with decision-maker intelligence and why-now signals."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            PIRU™ — Prospect Intelligence Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Turn a prospect list into actionable business intelligence before sales time is spent.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            PIRU™ researches and verifies your target prospects — business verification, decision-maker intelligence, relevant business signals, and why-now context — so your team spends time on qualified conversations, not cold research.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a Demonstration</button>
            <a href="#pricing" style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>See Pricing</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Records alone don't tell a revenue team what to do.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Conventional prospect databases provide records. But records alone don't tell your team who matters, why they matter, what changed, what opportunity may exist, who should be contacted, or what context should inform the conversation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              'Who matters — and who is a distraction',
              'Why they matter right now',
              'What changed in their business',
              'What opportunity may exist',
              'Who should be contacted',
              'What context should inform the conversation',
            ].map((q) => (
              <div key={q} style={{ padding: '1.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, fontWeight: 600, color: colors.secondary }}>
                {q}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginTop: '3rem', marginBottom: 0 }}>
            PIRU™ exists to answer those questions — before your sales team spends its time.
          </p>
        </div>
      </section>

      {/* INTELLIGENCE LAYER */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            The intelligence layer between raw information and revenue.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
            PIRU™ moves beyond raw prospect records by organizing available information into actionable intelligence — researched, verified, structured, and ready for sales execution.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'stretch' }}>
            {[
              { t: 'RAW INFORMATION', d: 'Prospect lists, public records, business signals as found.' },
              { t: 'VERIFIED INFORMATION', d: 'Business verification. Operating status confirmed. Noise removed.' },
              { t: 'STRUCTURED INTELLIGENCE', d: 'Decision-makers, signals, fit assessment, priority — organized.' },
              { t: 'SALES-READY CONTEXT', d: 'Who to contact, why now, and what to say — with evidence.' },
            ].map((s, i) => (
              <div key={s.t} style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#93C5FD', marginBottom: '0.5rem' }}>STAGE {i + 1}</div>
                <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>{s.t}</div>
                <p style={{ color: '#9CA3AF', margin: 0, fontSize: '0.95rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PIRU PRODUCES */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            What PIRU produces.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Practical outputs your revenue team can work from — not vague AI claims.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { t: 'Prospect Intelligence', d: 'Researched briefs on each prospect — who they are, what they do, and the evidence behind it.' },
              { t: 'Verification & Readiness Status', d: 'Each prospect verified as a real, operating business, with a clear readiness grade.' },
              { t: 'Prioritization', d: 'Prospects graded A/B/C with the evidence behind each grade, so effort goes where it counts.' },
              { t: 'Contextual Signals', d: 'Relevant business signals — formation, expansion, ownership change, capacity shifts — that create timing.' },
              { t: 'Decision-Maker Information', d: 'Named decision-makers identified where verifiable, with the best available contact route.' },
              { t: 'Opportunity Context', d: 'Product-fit assessment and why-now intelligence so outreach starts from relevance, not guesswork.' },
            ].map((c) => (
              <div key={c.t} style={{ padding: '2rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{c.t}</h3>
                <p style={{ color: colors.secondary, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE WORKFLOW */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            PIRU supports the revenue process — it isn't another static database.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
            Intelligence moves with your pipeline, from first discovery through the moment your team acts.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {[
              { t: 'DISCOVER', d: 'Target markets and prospect universes identified.' },
              { t: 'VERIFY', d: 'Businesses verified; noise and dead records removed.' },
              { t: 'UNDERSTAND', d: 'Decision-makers, signals, and context researched.' },
              { t: 'PRIORITIZE', d: 'Prospects graded and ranked by evidence.' },
              { t: 'ACT', d: 'Your team engages with sales-ready context.' },
            ].map((s, i) => (
              <div key={s.t} style={{ padding: '1.5rem 1rem', background: colors.surface, borderRadius: '8px', border: `2px solid ${i === 4 ? colors.accent : colors.border}` }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: i === 4 ? colors.accent : colors.primary, marginBottom: '0.5rem' }}>{s.t}</div>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.9rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>PIRU™ Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            Buy directly. Every tier is delivered by the SMRG intelligence team.
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
            Need broader market or territory coverage? <button onClick={() => setPage('piru-advance')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline' }}>Explore PIRU Advance™</button>
          </p>
        </div>
      </section>

      {/* GUARDRAIL */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Verified Intelligence, Honestly Delivered</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            PIRU™ is researched prospect intelligence — not a scraped contact database, not generic AI research, and not a CRM. We report only what we can verify, and every finding carries its evidence.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Turn prospect information into revenue intelligence.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Request a demonstration to see PIRU™ on your market — or start with a Snapshot today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: colors.accent }}>Request a Demonstration</button>
            <a href={LINKS.snapshot} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: 'transparent', border: '2px solid #fff' }}>Start with PIRU — $495</a>
          </div>
        </div>
      </section>
    </div>
  );
}
