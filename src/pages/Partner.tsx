import SEO from '../components/SEO';

export default function Partner({ setPage }: { setPage?: (page: string) => void }) {
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

  const checkoutLink = 'https://buy.stripe.com/aFa28scZE8Xq7yA0FB3ZK07';

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="SMRG Lead Intelligence Partner Suite | SMRG"
        description="Your market produces information. SMRG turns it into a prioritized revenue intelligence system. A CRM stores what you know; SMRG intelligence tells you what the information means and what to do next."
      />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            SMRG Lead Intelligence Partner Suite
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Your market produces information.<br />SMRG turns it into a prioritized revenue intelligence system.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto' }}>
            The Partner Suite is a higher-level intelligence relationship — not another software subscription. SMRG deploys and configures intelligence workflows across your operation's verticals, turning the information your market generates into a prioritized revenue intelligence system your team acts on every month.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textDecoration: 'none', display: 'inline-block' }}>Buy Partner Suite</a>
            {setPage && (
              <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` }}>Request a Demonstration</button>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2 - THE INTELLIGENCE RELATIONSHIP */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>A relationship, not a subscription.</h2>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              The Partner Suite deploys RRU, RRU Rental, and LIRU intelligence workflows across multiple verticals of your operation — inbound inquiry, rental qualification, and intake — and keeps them running as one prioritized revenue intelligence system.
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1.5rem' }}>
              This is not reseller recruitment and not another ordinary software subscription. It is an ongoing intelligence relationship: your market keeps producing information, and SMRG keeps turning it into what to pursue, why, and what to do next.
            </p>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary, marginTop: '2rem', padding: '1.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              "A CRM stores what you know. SMRG intelligence tells you what the information means and what to do next."
            </p>
          </div>

          <div style={{ background: colors.background, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>What the Suite Includes</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Multi-Vertical Intelligence Deployment</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>RRU, RRU Rental, and LIRU intelligence workflows deployed and configured across your operation.</span>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Continuous Prioritization</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>The information your market produces keeps flowing through qualification, classification, and prioritization.</span>
              </li>
              <li style={{ paddingBottom: '1rem', borderBottom: `1px solid ${colors.border}`, marginBottom: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Human-Directed Routing</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>Prioritized intelligence is routed to the right humans on your team — revenue judgment stays with your people.</span>
              </li>
              <li>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: colors.primary }}>Ongoing Infrastructure Support</strong>
                <span style={{ color: colors.secondary, fontSize: '0.95rem' }}>Monthly platform access with maintenance, monitoring, and operational support for active workflows.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Partner Suite Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '3rem' }}>
            One implementation. One monthly relationship. A prioritized revenue intelligence system, kept running.
          </p>
          <div style={{ padding: '3rem', border: `2px solid ${colors.primary}`, borderRadius: '8px', background: colors.surface, maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>$10,000</div>
            <div style={{ fontSize: '1.05rem', color: colors.secondary, marginBottom: '1.5rem' }}>one-time implementation</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>$5,000<span style={{ fontSize: '1.25rem', fontWeight: 700 }}>/month</span></div>
            <div style={{ fontSize: '1.05rem', color: colors.secondary, marginBottom: '2rem' }}>ongoing intelligence relationship</div>
            <p style={{ fontSize: '0.95rem', color: colors.secondary, marginBottom: '2rem' }}>
              One checkout covers the implementation plus the first month of the ongoing relationship: multi-vertical deployment and configuration of RRU, RRU Rental, and LIRU intelligence workflows, with continuous prioritization and routing.
            </p>
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textDecoration: 'none', fontSize: '1.15rem', padding: '1.25rem 3rem' }}>Buy Partner Suite</a>
          </div>
        </div>
      </section>

      {/* SECTION 4 - LIMITS / DISTINCTION */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>What the Suite Is Not</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important distinction:</strong> The Partner Suite is an intelligence relationship, not a CRM — and it does not replace human revenue judgment. It tells you what the information means and what to do next; your people make the decisions.
          </p>
        </div>
      </section>

      {/* SECTION 5 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Turn your market's information into a revenue system.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Buy the Suite now, or request a demonstration and we'll walk you through how the multi-vertical intelligence relationship works.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={checkoutLink} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: '#fff', color: colors.primary, padding: '1.25rem 3rem', fontSize: '1.15rem', textDecoration: 'none', display: 'inline-block' }}>
              BUY PARTNER SUITE
            </a>
            {setPage && (
              <button
                onClick={() => setPage('contact')}
                style={{ ...ctaPrimary, background: 'transparent', color: '#fff', border: '2px solid #fff', padding: '1.25rem 3rem', fontSize: '1.15rem' }}
              >
                REQUEST A DEMONSTRATION
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
