import React from 'react';
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
        description="SMRG builds specialized AI-powered capture and readiness systems that transform prospect-provided information into structured intelligence for professional review."
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
            SMRG builds specialized AI-powered capture and readiness systems that transform prospect-provided information into structured intelligence for professional review.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Book a Live Demonstration</button>
            <button onClick={() => setPage('rru')} style={ctaSecondary}>Explore the Platform</button>
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

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em', background: colors.background, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '4rem' }}>
            <div>Prospect</div>
            <div style={{ color: colors.accent }}>→</div>
            <div style={{ color: colors.accent }}>RRU Capture</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>AI Analysis & Structuring</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Intelligence Brief</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Human Professional</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>RENTAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU Rental™</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Renter prospect capture + Rental Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>BUY</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™ Buyer</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Buyer prospect capture + Buyer Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>SELL</div>
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
      <section style={{ padding: '6rem 1rem', background: colors.surface, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>SMRG™ Lead Intelligence Partner Suite</h2>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, color: colors.primary, marginBottom: '1.5rem' }}>
            One intelligence infrastructure for Legal + Rental + Real Estate.
          </p>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '3rem', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            Designed for organizations that generate, manage, qualify, distribute or route professional-service prospects across multiple workflows.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em', background: colors.background, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.border}`, marginBottom: '4rem' }}>
            <div>Capture</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Understand</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Triage</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Structure</div>
            <div style={{ color: colors.accent }}>→</div>
            <div style={{ color: colors.accent }}>Score</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Connect</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '4rem' }}>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>LEGAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>LIRU™</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Legal prospect capture + structured legal-intake intelligence
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>RENTAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU Rental™</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Renter capture + Rental Intelligence Brief
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: colors.background, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
              <div style={{ fontWeight: 800, color: colors.secondary, fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>REAL ESTATE</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>RRU™</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>
                Buyer + Seller capture + Intelligence Briefs
              </p>
            </div>
          </div>

          <div style={{ fontSize: '2.25rem', fontWeight: 900, color: colors.primary, marginBottom: '1rem' }}>
            $10,000 Implementation + $5,000 / month
          </div>
          <p style={{ fontSize: '1rem', color: colors.secondary, marginBottom: '2.5rem' }}>
            Higher-volume API, white-label, reseller, multi-client and OEM deployments are separately licensed.
          </p>
          <button onClick={() => setPage('partner-suite')} style={ctaSecondary}>Discuss a Partner Deployment</button>
        </div>
      </section>

      {/* SECTION 5 - SMRG POSITIONING & TRUST */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>
            New York-origin intelligence. Specialized professional intake. Licensable infrastructure.
          </h2>
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
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>Fair Housing & Application Processing</h3>
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
            Book a demonstration to see how our operational intelligence systems structure your incoming opportunities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Book a Live Demonstration</button>
          </div>
        </div>
      </section>

    </div>
  );
}