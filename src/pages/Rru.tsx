import SEO from '../components/SEO';

export default function Rru({ setPage }: { setPage: (page: string) => void }) {
  // Enterprise styling variables for consistency
  const colors = {
    primary: '#111827', // Deep charcoal
    secondary: '#374151', // Lighter slate
    accent: '#2563EB', // Professional blue for subtle highlights
    background: '#FFFFFF',
    surface: '#F9FAFB', // Off-white for section contrast
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

  const rentalTiers = [
    {
      name: 'Standard',
      setup: '$499 setup',
      monthly: '$149/mo',
      desc: 'Structured rental intelligence for a single property or small portfolio — inquiry qualification, routing, and human follow-up readiness.',
      link: 'https://buy.stripe.com/00w3cwgbQddG4mo0FB3ZK00',
    },
    {
      name: 'Professional',
      setup: '$899 setup',
      monthly: '$299/mo',
      desc: 'For active leasing operations — priority routing, higher inquiry volume, and qualification intelligence configured around your team.',
      link: 'https://buy.stripe.com/9B614oe3I1uYbOQdsn3ZK01',
    },
    {
      name: 'Enterprise',
      setup: '$1,499 setup',
      monthly: '$599/mo',
      desc: 'For portfolios and multi-location operations — multi-property deployment with priority routing and dedicated onboarding.',
      link: 'https://buy.stripe.com/dRm00k0cS4Ha7yA2NJ3ZK02',
    },
    {
      name: 'Founder Pilot',
      setup: '$596 one-time',
      monthly: '3-month pilot',
      desc: 'A 3-month pilot deployment of RRU rental intelligence — structured inquiry qualification and routing for your leasing team.',
      link: 'https://buy.stripe.com/5kQ8wQ2l04Ha0685ZV3ZK08',
    },
  ];

  const extendedConfigs = [
    {
      name: 'RRU Buyer/Seller — Core',
      price: '$999 setup + $249/mo',
      link: 'https://buy.stripe.com/bJe7sM6Bga1u6uwcoj3ZK03',
    },
    {
      name: 'RRU Buyer/Seller — Professional',
      price: '$2,500 setup + $499/mo',
      link: 'https://buy.stripe.com/28EfZif7M0qUcSU5ZV3ZK04',
    },
    {
      name: 'RRU Buyer/Seller — Enterprise',
      price: '$5,000 setup + $999/mo',
      link: 'https://buy.stripe.com/7sY5kEe3I3D6f121JF3ZK05',
    },
    {
      name: 'RRU Professional Dual',
      price: '$2,500 setup + $1,500/mo',
      link: 'https://buy.stripe.com/4gM7sM8JoehKbOQcoj3ZK06',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO
        title="RRU™ | Rental Readiness Utility | SMRG"
        description="Rental inquiries arrive as fragmented information. RRU converts every inquiry into structured rental intelligence — who the prospect is, whether the inquiry is complete, what needs follow-up, and who should act."
      />

      {/* ADVANCED SPECTACULAR WEB 3.0 / AI GRAPHIC STYLING */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spectacular-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 15px rgba(56, 189, 248, 0.2);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 45px rgba(56, 189, 248, 0.7), inset 0 0 25px rgba(56, 189, 248, 0.5);
          }
        }
        @keyframes beam-travel {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .spectacular-core {
          animation: spectacular-pulse 4s infinite ease-in-out;
        }
        .beam-track {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          height: 3px;
          border-radius: 2px;
        }
        .light-beam {
          position: absolute;
          top: 0;
          left: 0;
          width: 35%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #38bdf8, #ffffff, #38bdf8, transparent);
          box-shadow: 0 0 12px #38bdf8;
          animation: beam-travel 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .light-beam-delayed {
          animation-delay: 1s;
        }
        .floating-node {
          animation: float-particle 3s infinite ease-in-out;
        }
      `}} />

      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>RRU™ — Rental Readiness Utility</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Every rental inquiry, converted into structured rental intelligence.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            Rental inquiries arrive as fragmented information. RRU converts every inquiry into structured rental intelligence — who the prospect is, what they are looking for, whether the inquiry is complete, what needs follow-up, and who should act — so human leasing staff work from qualification, not guesswork.
          </p>

          {/* SPECTACULAR AI ARCHITECTURE VISUALIZATION GRAPHIC */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.95))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '16px',
            padding: '2.5rem 1.5rem',
            margin: '0 auto 3.5rem auto',
            maxWidth: '820px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative'
          }}>
            {/* Subtle background grid pattern inside graphic */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '16px', pointerEvents: 'none',
              backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px', opacity: 0.5
            }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 2 }}>

              {/* NODE 1: Fragmented Rental Inquiry */}
              <div className="floating-node" style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '1.25rem 1rem',
                textAlign: 'left',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>STAGE 01</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>Rental Inquiries</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>Emails, Forms, QR & Calls</div>
              </div>

              {/* BEAM TRACK 1 */}
              <div className="beam-track" style={{ width: '60px' }}>
                <div className="light-beam"></div>
              </div>

              {/* NODE 2: RRU Core Engine */}
              <div className="spectacular-core" style={{
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(2, 6, 23, 0.95) 80%)',
                border: '2px solid #38bdf8',
                borderRadius: '12px',
                padding: '1.5rem 1.25rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '0.15em', marginBottom: '0.2rem' }}>INTELLIGENCE LAYER</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', textShadow: '0 0 10px rgba(56,189,248,0.8)' }}>RRU™ ENGINE</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.2rem' }}>Qualification Pipeline</div>
              </div>

              {/* BEAM TRACK 2 */}
              <div className="beam-track" style={{ width: '60px' }}>
                <div className="light-beam light-beam-delayed"></div>
              </div>

              {/* NODE 3: Structured Rental Intelligence */}
              <div className="floating-node" style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '10px',
                padding: '1.25rem 1rem',
                textAlign: 'left',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>STAGE 03</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>Structured Rental Intelligence</div>
                <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '0.25rem' }}>Ready for Human Follow-Up</div>
              </div>

            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>BOOK A LIVE DEMO</button>
            <button onClick={() => setPage('how-it-works')} style={ctaSecondary}>SEE HOW IT WORKS</button>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: colors.secondary }}>
            See RRU applied to a rental inquiry scenario — not a generic software demo.
          </p>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            A rental inquiry is not the same as a qualified prospect.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Your listing captures:</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Name</li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Email</li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Phone</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>But what about everything else?</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.5rem' }}>• Who is the prospect?</li>
                <li style={{ marginBottom: '0.5rem' }}>• Is the inquiry complete?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What are they looking for?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What relevant qualification information is present?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What requires follow-up?</li>
                <li style={{ marginBottom: '0.5rem' }}>• Who should act, and how quickly?</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 700, marginTop: '3rem' }}>
            RRU uncovers the context behind every rental inquiry.
          </p>
        </div>
      </section>

      {/* SECTION 3 - AN INTELLIGENCE LAYER, NOT A CHATBOT */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>An intelligence layer, not a chatbot.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '1.5rem' }}>
            Chatbots answer questions. RRU is an intelligence layer around rental inquiry and qualification: every fragmented inquiry is examined for identity, completeness, intent, and qualification signals, then structured into a brief a human can act on.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '4rem' }}>
            Your team stops guessing what an inquiry means — and starts from qualification.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em' }}>
            <div>INQUIRY</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>QUALIFICATION</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>STRUCTURED RENTAL INTELLIGENCE</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>HUMAN FOLLOW-UP</div>
          </div>
          <p style={{ marginTop: '4rem', fontSize: '1.5rem', fontWeight: 800 }}>That's the difference.</p>
        </div>
      </section>

      {/* SECTION 4 - WHAT YOUR TEAM RECEIVES */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>What Your Team Receives</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            Instead of another raw lead notification, RRU produces a structured rental intelligence brief.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Prospect Identity</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>Who the prospect is — structured from the fragmented details they provided.</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Inquiry Completeness</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>Whether the inquiry is complete — and exactly what information is still missing.</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Qualification Information</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>What the prospect is looking for and the relevant qualification signals present in the inquiry.</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Follow-Up Actions</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>What requires follow-up — prioritized so your team acts on what matters first.</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Routing to the Right Human</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>Which member of your team should act — routed to the appropriate human, not left in an inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - USE CASES & CUSTOMIZATION */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>One System.<br/>Multiple Use Cases.</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Rental Website Qualification:</strong> Engage rental inquirers before they become another unanswered inquiry.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Property-Level Inquiry Capture:</strong> Route inquiries from QR-enabled listings and property signage into the same structured brief.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Staff Intake:</strong> Leasing teams can use RRU while speaking directly with prospects.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Lead Follow-Up:</strong> Give leasing staff greater context before they make contact.
              </li>
              <li>
                <strong>Portfolio Qualification:</strong> Create greater consistency across multiple properties and representatives.
              </li>
            </ul>
          </div>
          <div style={{ padding: '3rem', background: colors.primary, color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>Your Portfolio.<br/>Your Market.<br/>Your Operation.</h2>
            <p style={{ color: '#D1D5DB', marginBottom: '1.5rem' }}>
              RRU is configured around the context of your operation. Rather than forcing every property organization into the same generic conversation, the qualification experience is aligned with your units, your market, and your leasing objectives.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '2rem' }}>You provide the leasing context.<br/>RRU provides the intelligence layer.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - PRICING */}
      <section id="pricing" style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>RRU Rental Pricing</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
            Each tier is one checkout covering setup and deployment plus monthly managed infrastructure. Every inquiry keeps arriving as structured rental intelligence for human follow-up.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {rentalTiers.map((t) => (
              <div key={t.name} style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t.name}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem' }}>{t.setup} + {t.monthly}</div>
                <p style={{ color: colors.secondary, fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{t.desc}</p>
                <a href={t.link} target="_blank" rel="noopener noreferrer" style={{ ...ctaPrimary, display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Buy Now</a>
              </div>
            ))}
          </div>

          {/* EXTENDED CONFIGURATIONS */}
          <div style={{ marginTop: '4rem', padding: '2.5rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Extended configurations</h3>
            <p style={{ color: colors.secondary, marginBottom: '2rem', maxWidth: '750px' }}>
              RRU Buyer/Seller and RRU Professional Dual apply the same intelligence operation — inquiry → qualification → structured intelligence → human follow-up — to buyer and seller inquiries.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {extendedConfigs.map((c) => (
                <div key={c.name} style={{ padding: '1.5rem', background: colors.background, border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
                  <div style={{ fontWeight: 800, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.9rem', color: colors.accent, fontWeight: 700, marginBottom: '1rem' }}>{c.price}</div>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Buy Now →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - LIMITS / RESPONSIBLE USE */}
      <section style={{ padding: '5rem 1rem', background: colors.background, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Responsible Use</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '0' }}>
            <strong>Important distinctions:</strong> RRU does not approve or deny renters, and it does not replace leasing staff. It produces rental intelligence that is routed to humans, who make the follow-up and leasing decisions — consistent with applicable standards including Fair Housing requirements.
          </p>
        </div>
      </section>

      {/* SECTION 8 - WHO IT IS FOR */}
      <section style={{ padding: '6rem 1rem', background: colors.surface, textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Rental Operations</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
            Property Managers • Leasing Teams • Brokerages • Owner-Operators • High-Volume Rental Operations
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2.5rem' }}>
            If your organization depends on inbound rental inquiries, RRU deserves a closer look.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>BOOK A LIVE DEMO</button>
            <a href="#pricing" style={{ ...ctaSecondary, textDecoration: 'none', display: 'inline-block' }}>SEE PRICING</a>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Stop looking at raw inquiries.<br/>Start looking at rental intelligence.
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#D1D5DB', marginBottom: '2rem' }}>
            We'll demonstrate RRU using a rental inquiry scenario and show you what the resulting intelligence brief looks like.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
              Even better: bring us your portfolio and your leasing operation. We'll show you how the qualification experience fits your team.
            </p>
          </div>
          <button
            onClick={() => setPage('contact')}
            style={{...ctaPrimary, background: '#fff', color: colors.primary, fontSize: '1.25rem', padding: '1.25rem 3rem'}}
          >
            BOOK YOUR LIVE DEMO
          </button>
        </div>
      </section>

    </div>
  );
}
