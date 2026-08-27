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

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6 }}>
      <SEO 
        title="RRU™ | Real Estate Readiness & Inbound Qualification Utility" 
        description="Turn real estate inquiries into structured buyer intelligence with SMRG Consulting's AI-powered conversational readiness utility."
      />
      
      {/* GENERATIVE AI ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-engine {
          0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(56, 189, 248, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(56, 189, 248, 0.8); }
        }
        @keyframes data-flow {
          0% { left: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .rru-engine-node {
          animation: pulse-engine 3s infinite ease-in-out;
        }
        .data-stream {
          position: relative;
          overflow: hidden;
        }
        .data-packet {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          height: 2px;
          background: #38bdf8;
          box-shadow: 0 0 12px #38bdf8;
          animation: data-flow 1.5s infinite linear;
        }
        .data-packet-delayed {
          animation-delay: 0.75s;
        }
      `}} />
      
      {/* SECTION 1 - HERO */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center', background: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontWeight: 800, color: colors.accent, letterSpacing: '0.05em', marginBottom: '1rem' }}>RRU™</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Turn Real Estate Inquiries Into Buyer Intelligence.
          </h1>
          <p style={{ fontSize: '1.25rem', color: colors.secondary, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            An AI-powered conversational qualification and readiness utility designed to help real estate organizations understand, prioritize, and act on inbound opportunities.
          </p>

          {/* VISUAL DATA PIPELINE (Pure CSS Art) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3.5rem auto', gap: '1rem', maxWidth: '600px', flexWrap: 'wrap' }}>
            {/* Raw Input Node */}
            <div style={{ padding: '0.75rem 1.25rem', border: '1px dashed #475569', borderRadius: '6px', color: '#94a3b8', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Raw Inquiry
            </div>
            
            {/* Stream 1 */}
            <div className="data-stream" style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.1)' }}>
              <div className="data-packet"></div>
            </div>

            {/* Core Engine Node */}
            <div className="rru-engine-node" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #38bdf8', padding: '1rem 2rem', borderRadius: '8px', color: '#38bdf8', fontWeight: 900, textShadow: '0 0 10px rgba(56, 189, 248, 0.5)', letterSpacing: '0.05em' }}>
              RRU™ ENGINE
            </div>

            {/* Stream 2 */}
            <div className="data-stream" style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.1)' }}>
              <div className="data-packet data-packet-delayed"></div>
            </div>

            {/* Structured Output Node */}
            <div style={{ padding: '0.75rem 1.25rem', border: '1px solid #475569', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', background: 'rgba(255,255,255,0.05)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Structured Brief
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>BOOK A LIVE DEMO</button>
            <button style={ctaSecondary}>SEE HOW IT WORKS</button>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: colors.secondary }}>
            No generic chatbot demo. See RRU applied to a real estate scenario.
          </p>
        </div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            A lead is not the same as a qualified opportunity.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Your website captures:</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Name</li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Email</li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>✓</span> Phone</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>But what about everything else?</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: colors.secondary }}>
                <li style={{ marginBottom: '0.5rem' }}>• How serious are they?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What are they looking for?</li>
                <li style={{ marginBottom: '0.5rem' }}>• How soon might they act?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What information matters?</li>
                <li style={{ marginBottom: '0.5rem' }}>• What deserves immediate attention?</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 700, marginTop: '3rem' }}>
            RRU helps uncover the context behind the inquiry.
          </p>
        </div>
      </section>

      {/* SECTION 3 - MORE THAN A CHATBOT */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>More than a chatbot.</h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '3rem' }}>
            Traditional chatbots are primarily designed to answer questions.<br/>
            RRU is designed to help understand opportunities.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#D1D5DB', marginBottom: '4rem' }}>
            It uses a guided conversational experience to collect meaningful information and transform the interaction into structured buyer intelligence.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.05em' }}>
            <div>Engage</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Understand</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Analyze</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Structure</div>
            <div style={{ color: colors.accent }}>→</div>
            <div>Prioritize</div>
          </div>
          <p style={{ marginTop: '4rem', fontSize: '1.5rem', fontWeight: 800 }}>That's the difference.</p>
        </div>
      </section>

      {/* SECTION 4 - WHAT YOUR TEAM RECEIVES */}
      <section style={{ padding: '6rem 1rem', background: colors.background }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>What Your Team Receives</h2>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, textAlign: 'center', marginBottom: '4rem' }}>
            Instead of another raw lead notification, RRU produces a structured assessment.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Buyer Readiness</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>How prepared does the opportunity appear?</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Priority</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>How much attention should the opportunity receive?</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Buyer Profile</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>What does the team need to understand about the prospect?</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Key Findings</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>What information stands out immediately?</p>
            </div>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Follow-Up Context</h3>
              <p style={{ color: colors.secondary, margin: 0 }}>What should the agent know before making contact?</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6 - USE CASES & CUSTOMIZATION */}
      <section style={{ padding: '5rem 1rem', background: colors.surface }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>One System.<br/>Multiple Use Cases.</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Website Qualification:</strong> Engage visitors before they become another unanswered inquiry.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Staff Intake:</strong> Teams can use RRU while speaking directly with prospects.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Phone Qualification:</strong> Enter information during a call and generate a structured assessment.
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Lead Follow-Up:</strong> Give agents greater context before they make contact.
              </li>
              <li>
                <strong>Team Qualification:</strong> Create greater consistency across multiple representatives.
              </li>
            </ul>
          </div>
          <div style={{ padding: '3rem', background: colors.primary, color: '#fff', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem' }}>Your Business.<br/>Your Market.<br/>Your Experience.</h2>
            <p style={{ color: '#D1D5DB', marginBottom: '1.5rem' }}>
              RRU is configured around the context of your organization. Rather than forcing every real estate business into the same generic conversation, the experience is aligned with your market and operational objectives.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '2rem' }}>You provide the business context.<br/>RRU provides the intelligence layer.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8 - THE CONTRAST */}
      <section style={{ padding: '6rem 1rem', background: colors.background, textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem' }}>What if your next lead came with context?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left', marginBottom: '4rem' }}>
            <div style={{ padding: '2rem', border: `1px solid ${colors.border}`, borderRadius: '8px', background: colors.surface }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: colors.secondary, marginBottom: '1rem', textTransform: 'uppercase' }}>Instead Of:</div>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', margin: 0 }}>"New Lead — John Smith — Call: 555-1234."</p>
            </div>
            <div style={{ padding: '2rem', border: `2px solid ${colors.primary}`, borderRadius: '8px', background: colors.background }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: colors.accent, marginBottom: '1rem', textTransform: 'uppercase' }}>Imagine Receiving:</div>
              <p style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>"Here's what we learned about John before you called."</p>
            </div>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Built for Real Estate Professionals</h3>
          <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
            Independent Agents • Teams • Brokerages • ISAs • Lead Generation Companies • High-Volume Operations
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            If your organization depends on inbound opportunities, RRU deserves a closer look.
          </p>
        </div>
      </section>

      {/* SECTION 9 & 10 - DEMO & FINAL CTA */}
      <section style={{ padding: '6rem 1rem', background: colors.primary, color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Stop looking at leads.<br/>Start looking at opportunities.
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#D1D5DB', marginBottom: '2rem' }}>
            Don't take our word for it. We'll demonstrate RRU using a real estate scenario and show you what the resulting assessment looks like.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
              Even better: Bring us your website and your business model. We'll show you how the experience could fit your operation.
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