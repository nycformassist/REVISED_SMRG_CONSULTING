import SEO from '../components/SEO';

const LINKS = {
  single: 'https://buy.stripe.com/eVq4gAbVA7Tm5qs0FB3ZK0f',
  professional: 'https://buy.stripe.com/4gM14o8Jo5Le2eg73Z3ZK0g',
  center: 'https://buy.stripe.com/5kQfZi8Jo8Xq1acdsn3ZK0h',
};

export default function Diru({ setPage }: { setPage: (page: string) => void }) {
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

  const tiers = [
    {
      name: 'DIRU — Single Review',
      price: '$299',
      billing: 'one-time',
      desc: 'A one-time readiness review of your submitted daycare operational records: cross-referenced findings, documentation gaps identified, regulatory citations, and ordered remediation priorities.',
      link: LINKS.single,
      cta: 'Buy Now',
    },
    {
      name: 'DIRU Professional',
      price: '$749',
      billing: 'per month · up to 5 reviews/month',
      desc: 'Ongoing readiness intelligence for a single program: up to 5 reviews per month with trend tracking across reviews, recurring regulatory alignment checks, and priority support.',
      link: LINKS.professional,
      cta: 'Get Started',
    },
    {
      name: 'DIRU Center',
      price: '$1,499',
      billing: 'per month · up to 15 reviews/month',
      desc: 'For centers and growing organizations: up to 15 reviews per month, multi-program comparison, organization-level findings, and dedicated onboarding.',
      link: LINKS.center,
      cta: 'Get Started',
    },
  ];

  const categories = [
    { t: 'Staff documentation', d: 'Personnel records, roles, hire dates, and qualification evidence — checked for completeness and consistency.' },
    { t: 'Training documentation', d: 'Training hours, certificates, and completion dates — verified against required thresholds and timelines.' },
    { t: 'CPR & first-aid records', d: 'Certifications tracked for validity and expiry, so coverage never lapses unnoticed.' },
    { t: 'Fire-drill documentation', d: 'Drill logs checked for required cadence and completeness.' },
    { t: 'Health & immunization records', d: 'Health documentation reviewed for presence and currency.' },
    { t: 'Background clearances', d: 'Clearance documentation checked for presence and validity.' },
    { t: 'Attendance & rosters', d: 'Rosters and sign-in records cross-referenced against staffing and enrollment.' },
    { t: 'Policies & emergency plans', d: 'Required plans and policies checked for presence and review currency.' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="DIRU™ | Daycare Inspection Readiness Utility | SMRG"
        description="DIRU helps daycare operators see what their records reveal before inspection day. Purpose-built readiness intelligence for daycare operations — not a generic document scanner."
      />

      {/* HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            DIRU™ — Daycare Inspection Readiness Utility
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Know where your daycare records stand before inspection day.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            DIRU™ is purpose-built for daycare operations. It examines your operational records — staffing, training, drills, health documentation, policies — cross-references them, connects findings to applicable regulatory requirements, and shows you where readiness breaks down before an inspector does.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Request a Demonstration</button>
            <a href="#pricing" style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>See Pricing</a>
          </div>
        </div>
      </section>

      {/* WHY DAYCARE-SPECIFIC */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            Daycare operations don't fail inspections on one document. They fail on the connections between them.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            A training certificate looks fine on its own. So does a roster, a drill log, and a staff file. But when a hire date postdates a training certificate, when a CPR card expired last month, when drill cadence slipped — those are the findings inspections are built to surface.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '0', maxWidth: '800px', margin: '0 auto' }}>
            DIRU™ reads across your documentation the way an inspection does — and reports back while there is still time to act.
          </p>
        </div>
      </section>

      {/* INTELLIGENCE CATEGORIES */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>What DIRU examines.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '750px', margin: '0 auto 4rem' }}>
            Daycare-specific intelligence categories — each checked for presence, currency, consistency, and regulatory alignment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {categories.map((c) => (
              <div key={c.t} style={{ padding: '1.75rem', background: colors.surface, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem' }}>{c.t}</h3>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.95rem' }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
            From records to readiness.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Findings cite applicable regulatory requirements — including 18 NYCRR Part 418-1 and NYC Health Code Article 47 — so you see the basis behind every issue.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { t: 'SUBMIT', d: 'Provide your existing operational records.' },
              { t: 'STRUCTURE', d: 'Records are organized and key facts extracted.' },
              { t: 'CROSS-REFERENCE', d: 'Information is compared across documents.' },
              { t: 'FINDINGS', d: 'Gaps, expirations, and conflicts identified with evidence.' },
              { t: 'PRIORITIES', d: 'An ordered remediation report — what to fix first.' },
            ].map((s, i) => (
              <div key={s.t} style={{ padding: '1.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, textAlign: 'center' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: colors.accent, marginBottom: '0.5rem' }}>0{i + 1}</div>
                <div style={{ fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{s.t}</div>
                <p style={{ color: colors.secondary, margin: 0, fontSize: '0.9rem' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>DIRU™ Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            Start with a single review, or keep continuous readiness on a monthly plan.
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
            Multi-location organizations: <button onClick={() => setPage('contact')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline' }}>Request a Demonstration</button>
          </p>
        </div>
      </section>

      {/* SAFETY / PRIVACY */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built around your records' sensitivity.</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1rem' }}>
            Personal information in your records is pseudonymized before analysis. Records are processed and discarded — DIRU™ is not a document-storage platform and is not an approval or denial engine.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important:</strong> DIRU™ is readiness intelligence, not a compliance guarantee. It does not grant regulatory approval, provide legal advice, or replace inspectors and qualified professionals. It shows you what your records reveal — so you can act before inspection day.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>See what your records reveal before inspection day.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Request a demonstration on your own records — or start with a single review today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: colors.accent }}>Request a Demonstration</button>
            <a href={LINKS.single} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: 'transparent', border: '2px solid #fff' }}>Buy a Single Review — $299</a>
          </div>
        </div>
      </section>
    </div>
  );
}
