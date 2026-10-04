import SEO from '../components/SEO';

export default function Home({ setPage }: { setPage: (page: string) => void }) {
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

  const ctaSecondary = {
    background: 'transparent',
    color: colors.primary,
    padding: '1rem 2rem',
    borderRadius: '4px',
    border: `2px solid ${colors.primary}`,
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO 
        title="SMRG Consulting | Operational Intelligence & Intake Systems" 
        description="SMRG builds specialized AI-powered capture and readiness systems from firsthand operational experience—turning messy inbound information into structured intelligence for professional review."
      />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '7rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            New York-Origin Intelligence • Licensable Infrastructure
          </div>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Turn Prospect Inquiries Into<br />Structured Intelligence.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
            SMRG builds specialized AI-powered capture and readiness systems from firsthand operational experience—turning messy inbound information into structured intelligence for professional review.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Book a Live Demonstration</button>
            <button onClick={() => setPage('rru')} style={ctaSecondary}>Explore the Platform</button>
          </div>
        </div>
      </section>

      {/* SECTION 1.5 — BUILT FROM THE PROBLEM (PROVENANCE) */}
      <section style={{ padding: '5rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ padding: '3rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontWeight: 800, color: colors.accent, fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Operational Provenance
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Built From Firsthand Operational Experience
            </h3>
            <p style={{ fontSize: '1.1rem', color: colors.secondary, marginBottom: '1.5rem', lineHeight: '1.7' }}>
              SMRG's systems did not begin as abstract AI experiments. They emerged from more than two decades of frontline operational experience across high-volume environments—witnessing firsthand how much time, money, and professional attention are lost when inbound inquiries arrive incomplete, inconsistent, duplicated, or poorly structured.
            </p>
            <p style={{ fontSize: '1.1rem', color: colors.secondary, marginBottom: '2rem', lineHeight: '1.7' }}>
              The response was not another generic lead generator. It was to build deployable intelligence infrastructure that bridges the gap between raw human inquiry and professional action.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.03em', background: colors.primary, color: '#FFFFFF', padding: '1.25rem', borderRadius: '6px', marginBottom: '1.5rem' }}>
              <div style={{ color: '#FFFFFF' }}>Capture</div>
              <div style={{ color: '#60A5FA' }}>→</div>
              <div style={{ color: '#FFFFFF' }}>Structure</div>
              <div style={{ color: '#60A5FA' }}>→</div>
              <div style={{ color: '#34D399' }}>Intelligence</div>
              <div style={{ color: '#60A5FA' }}>→</div>
              <div style={{ color: '#FFFFFF' }}>Human Review</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: `1px solid ${colors.border}`, paddingTop: '1.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.95rem', color: colors.secondary, maxWidth: '550px' }}>
                <strong>Not sure where AI fits?</strong> We can identify the highest-value intake or workflow opportunity in your operation.
              </p>
              <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                Identify Your Intake Opportunity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - RRU SECTION */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™ — Real Estate Readiness Utility</h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary, marginBottom: '1.5rem' }}>
            Intelligent prospect capture for rental, buyer and seller workflows.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            RRU captures renters, buyers and sellers directly at the point of inquiry, structures the information they provide, and produces a workflow-specific Intelligence Brief for the appropriate real-estate professional.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em', background: colors.primary, color: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '4rem' }}>
            <div style={{ color: '#FFFFFF' }}>Prospect</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#60A5FA' }}>RRU Capture</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#FFFFFF' }}>AI Analysis & Structuring</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#34D399' }}>Intelligence Brief</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#FFFFFF' }}>Human Professional</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: '#2563EB', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>RENTAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU Rental™</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Renter prospect capture + Rental Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: '#2563EB', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>BUY</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™ Buyer</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Buyer prospect capture + Buyer Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: '#2563EB', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>SELL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™ Seller</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Seller prospect capture + Seller Intelligence Brief
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - RRU PROFESSIONAL DUAL (COMMERCIAL 1) */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™ Professional Dual</h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '1.5rem' }}>
            RRU + RRU Rental for professional real-estate organizations.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '2.5rem' }}>
            Deploy Buyer, Seller and Rental prospect-capture workflows through one professional real-estate intelligence system.
          </p>
          <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#34D399', marginBottom: '2.5rem' }}>
            $2,500 Setup + $1,500 / month
          </div>
          <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, background: colors.accent, color: '#fff' }}>Book a Live Demonstration</button>
        </div>
      </section>

      {/* SECTION 4 - PARTNER SUITE (COMMERCIAL 2) */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>SMRG™ Lead Intelligence Partner Suite</h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#93C5FD', marginBottom: '1.5rem' }}>
            One intelligence infrastructure for Legal + Rental + Real Estate.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '3rem', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            Designed for organizations that generate, manage, qualify, distribute or route professional-service prospects across multiple workflows.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em', background: '#1E293B', color: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '4rem' }}>
            <div style={{ color: '#FFFFFF' }}>Capture</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#FFFFFF' }}>Understand</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#FFFFFF' }}>Triage</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#FFFFFF' }}>Structure</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#34D399' }}>Classify</div>
            <div style={{ color: '#60A5FA' }}>→</div>
            <div style={{ color: '#34D399' }}>Connect</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '4rem' }}>
            <div style={{ padding: '2.5rem', background: '#1E293B', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ fontWeight: 800, color: '#60A5FA', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>LEGAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>LIRU™</h3>
              <p style={{ color: '#94A3B8', margin: 0 }}>
                Legal prospect capture + structured legal-intake intelligence
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#1E293B', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ fontWeight: 800, color: '#60A5FA', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>RENTAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>RRU Rental™</h3>
              <p style={{ color: '#94A3B8', margin: 0 }}>
                Renter capture + Rental Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#1E293B', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ fontWeight: 800, color: '#60A5FA', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>REAL ESTATE</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>RRU™</h3>
              <p style={{ color: '#94A3B8', margin: 0 }}>
                Buyer + Seller capture + Intelligence Briefs
              </p>
            </div>
          </div>

          <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#34D399', marginBottom: '1rem' }}>
            $10,000 Implementation + $5,000 / month
          </div>
          <p style={{ fontSize: '1rem', color: '#94A3B8', marginBottom: '2.5rem' }}>
            Higher-volume API, white-label, reseller, multi-client and OEM deployments are separately licensed.
          </p>
          <button onClick={() => setPage('partner-suite')} style={{ ...ctaSecondary, color: '#fff', borderColor: '#fff' }}>Discuss a Partner Deployment</button>
        </div>
      </section>

      {/* SECTION 4B - PIRU COMMERCIAL (DIRECT PURCHASE) */}
      <section style={{ padding: '6rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Now Available — Direct Purchase
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>PIRU™ — Prospect Intelligence & Revenue Readiness</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Turn a prospect list into actionable business intelligence before sales time is spent. Researched, verified prospects with decision-maker intelligence and why-now signals — not a contact list.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <div style={{ padding: '1.75rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Prospect Intelligence Snapshot</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: colors.accent }}>$495</div>
              <div style={{ fontSize: '0.85rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>one-time</div>
              <a href="https://buy.stripe.com/eVqbJ28Job5yf12bkf3ZK09" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '1.75rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>PIRU 10-Pack</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: colors.accent }}>$750</div>
              <div style={{ fontSize: '0.85rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>one-time · 10 researched prospects</div>
              <a href="https://buy.stripe.com/5kQ5kE5xc0qUaKMbkf3ZK0a" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '1.75rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>PIRU 25-Pack</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: colors.accent }}>$1,500</div>
              <div style={{ fontSize: '0.85rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>one-time · 25 researched prospects</div>
              <a href="https://buy.stripe.com/5kQ5kE3p47Tm0689c73ZK0b" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '1.75rem', background: colors.background, borderRadius: '8px', border: `2px solid ${colors.primary}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>PIRU Intelligence Program</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: colors.accent }}>$1,500</div>
              <div style={{ fontSize: '0.85rem', color: colors.secondary, marginBottom: '1rem', fontWeight: 600 }}>per month · recurring pipeline</div>
              <a href="https://buy.stripe.com/4gMbJ23p42z27yAdsn3ZK0c" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Get Started</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('piru')} style={ctaSecondary}>Full PIRU™ Details</button>
            <button onClick={() => setPage('piru-advance')} style={ctaSecondary}>PIRU Advance™ Market Intelligence</button>
          </div>
        </div>
      </section>

      {/* SECTION 4C - INSPECTOR AI COMMERCIAL (DIRECT PURCHASE) */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, color: '#93C5FD', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Now Available — Direct Purchase
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>Inspector AI™ — Operational Information Intelligence</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            AI-assisted review of your operational records: cross-referenced findings, potential gaps identified, regulatory citations, and ordered remediation priorities. Know what your records say before an inspection does.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Single Review</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399' }}>$299</div>
              <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1rem', fontWeight: 600 }}>one-time</div>
              <a href="https://buy.stripe.com/eVq4gAbVA7Tm5qs0FB3ZK0f" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: colors.accent, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Buy Now</a>
            </div>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Professional</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399' }}>$749</div>
              <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1rem', fontWeight: 600 }}>per month · up to 5 reviews/month</div>
              <a href="https://buy.stripe.com/4gM14o8Jo5Le2eg73Z3ZK0g" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: colors.accent, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Get Started</a>
            </div>
            <div style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Center</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399' }}>$1,499</div>
              <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1rem', fontWeight: 600 }}>per month · up to 15 reviews/month</div>
              <a href="https://buy.stripe.com/5kQfZi8Jo8Xq1acdsn3ZK0h" target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, background: colors.accent, textAlign: 'center', marginTop: 'auto', textDecoration: 'none' }}>Get Started</a>
            </div>
          </div>
          <button onClick={() => setPage('inspector-ai')} style={{ ...ctaSecondary, color: '#fff', borderColor: '#fff' }}>Full Inspector AI™ Details</button>
        </div>
      </section>

      {/* SECTION 5 - SMRG POSITIONING & TRUST */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            New York-origin intelligence. Specialized professional intake. Licensable infrastructure.
          </h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '1rem', maxWidth: '700px', margin: '0 auto 1rem auto' }}>
            Built from decades of frontline operational experience across healthcare, insurance, legal intake and service environments, SMRG applies that experience to modern AI-powered workflow systems.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            SMRG develops specialized intake, readiness and intelligence systems for high-friction professional workflows.
          </p>

          <div style={{ background: colors.surface, padding: '3rem', borderRadius: '8px', border: `1px solid ${colors.border}`, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Human Review & Professional Judgment</h3>
              <p style={{ color: colors.secondary, margin: 0, fontSize: '1.05rem' }}>
                SMRG systems organize and analyze information supplied by the prospect. They support professional review and do not replace the independent judgment of attorneys, real-estate professionals or other qualified professionals.
              </p>
            </div>
            <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Fair Housing & Human Review</h3>
              <p style={{ color: colors.secondary, margin: 0, fontSize: '1.05rem' }}>
                RRU Rental does not approve or deny applicants. It captures and structures prospect information for human professional review.
              </p>
            </div>
          </div>
          
          {/* Maintained separation of IRU */}
          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: colors.secondary }}>Also available for Community & Nonprofit:</h3>
            <p style={{ color: colors.secondary, fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <strong>IRU™ (Immigration Readiness Utility)</strong> — <button onClick={() => setPage('iru')} style={{ background: 'none', border: 'none', color: colors.accent, fontWeight: 700, cursor: 'pointer', padding: 0 }}>View specific IRU solutions →</button>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, borderTop: `1px solid ${colors.border}`, textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            Ready to upgrade your intake workflow?
          </h2>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            SMRG builds specialized AI-powered systems that capture, structure and transform complex incoming information into professional-ready intelligence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Book a Live Demonstration</button>
          </div>
        </div>
      </section>

    </div>
  );
}
