import SEO from '../components/SEO';
import SignalChain, { CORPORATE_CHAIN } from '../components/SignalChain';

export default function Home({ setPage }: { setPage: (page: string) => void }) {
  const dark = '#020617';
  const ink = '#f8fafc';
  const muted = '#94a3b8';
  const accent = '#38bdf8';
  const card = 'rgba(15, 23, 42, 0.6)';
  const border = 'rgba(56, 189, 248, 0.18)';

  const h2: React.CSSProperties = { fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.02em', color: ink, marginBottom: '1.25rem', lineHeight: 1.15 };
  const eyebrow: React.CSSProperties = { fontWeight: 800, color: accent, letterSpacing: '0.14em', marginBottom: '1.25rem', textTransform: 'uppercase', fontSize: '0.8rem' };
  const body: React.CSSProperties = { fontSize: '1.12rem', color: muted, lineHeight: 1.7 };
  const wrap: React.CSSProperties = { maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' };
  const section: React.CSSProperties = { padding: '5.5rem 0' };

  const ctaPrimary: React.CSSProperties = {
    display: 'inline-block', background: accent, color: '#020617', padding: '1rem 2.25rem',
    borderRadius: '4px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none',
  };
  const ctaGhost: React.CSSProperties = {
    display: 'inline-block', background: 'transparent', color: ink, padding: '1rem 2.25rem',
    borderRadius: '4px', border: '1px solid rgba(248,250,252,0.35)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', textDecoration: 'none',
  };
  const cardLink: React.CSSProperties = { color: accent, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' };

  const applications = [
    {
      t: 'INTAKE & READINESS',
      d: 'Turn incoming information into clearer, more structured, decision-ready information before it moves deeper into an operational workflow.',
      page: 'liru', link: 'Explore intake readiness',
    },
    {
      t: 'REVENUE & PROSPECT INTELLIGENCE',
      d: 'Identify meaningful business signals, understand prospect context, and help prioritize where commercial attention should go.',
      page: 'piru', link: 'Explore prospect intelligence',
    },
    {
      t: 'OPERATIONAL INSPECTION & READINESS',
      d: 'Bring records, evidence, requirements, and findings into a more useful intelligence process so organizations can better understand their position and the actions that may be needed.',
      page: 'biru', link: 'Explore inspection readiness',
    },
    {
      t: 'SPECIALIZED INTELLIGENCE SYSTEMS',
      d: "When an operational problem does not fit a standard product, SMRG can evaluate a tailored intelligence deployment built around the organization's workflow and requirements.",
      page: 'custom-systems', link: 'Explore custom systems',
    },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: dark, color: ink, lineHeight: 1.6 }}>
      <SEO
        title="SMRG Consulting | Intelligence Infrastructure for Difficult Information Problems"
        description="SMRG builds specialized intelligence infrastructure that helps organizations turn fragmented information into actionable intelligence. Information is everywhere. Intelligence isn't."
      />

      {/* 1 — HERO */}
      <section style={{ ...section, textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ ...wrap, maxWidth: '900px' }}>
          <div style={eyebrow}>New York-Origin Intelligence Infrastructure</div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, marginBottom: '1.5rem' }}>
            INFORMATION IS EVERYWHERE.<br />INTELLIGENCE ISN'T.
          </h1>
          <p style={{ ...body, fontSize: '1.25rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            SMRG builds specialized intelligence infrastructure that helps organizations turn fragmented information into actionable intelligence.
          </p>
          <p style={{ ...body, fontSize: '1.12rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            We identify where information is being lost, misunderstood, or underused—and determine how it can be structured to support better decisions and more effective action.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Discuss Your Intelligence Opportunity</button>
            <a href="#how-it-works" style={ctaGhost}>How SMRG Works</a>
          </div>
          <SignalChain stages={CORPORATE_CHAIN} />
        </div>
      </section>

      {/* 2 — THE PROBLEM */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={{ ...wrap, maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={h2}>THE HARD PART ISN'T COLLECTING INFORMATION.<br />IT'S KNOWING WHAT IT MEANS.</h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Information arrives from everywhere: forms, emails, phone calls, applications, documents, spreadsheets, referrals, records, and existing systems.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            But information does not become intelligence simply because it has been collected.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Important details remain scattered. Signals go unnoticed. Contradictions go unresolved. People spend time reconstructing what they should already be able to understand.
          </p>
          <p style={body}>
            SMRG addresses the gap between information arriving and people understanding what matters.
          </p>
        </div>
      </section>

      {/* 3B — AI ADOPTION INSIGHT */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={{ ...wrap, maxWidth: '800px', textAlign: 'center' }}>
          <div style={eyebrow}>A supporting insight</div>
          <h2 style={h2}>AI ADOPTION ISN'T THE SAME AS BUSINESS IMPROVEMENT.</h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Your team may already have access to AI. Your business may still be losing time, missing opportunities, and carrying administrative work that gets in the way of growth.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            That's because working faster and working better as a business are not the same thing.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            SMRG helps service-based businesses turn information, existing tools, and workflows into practical systems that improve how work gets done.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            We look at what happens between the inquiry and the outcome: how information moves, where follow-ups break down, what consumes your team's time, and where opportunities get lost.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Then we help put a better operating system around that work — connecting the right information, processes, and actions without asking you to become your own software developer or automation manager.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            The goal isn't more technology.
          </p>
          <p style={{ ...body, marginBottom: '2.5rem' }}>
            It's fewer missed opportunities. Better follow-through. Less administrative friction. More visibility into what's happening in your business.
          </p>
          <p style={{ ...body, fontWeight: 700, color: ink, marginBottom: '2.5rem' }}>
            You run your business. We help make the systems behind it work better.
          </p>
          <button onClick={() => setPage('contact')} style={ctaPrimary}>Let's identify where your business is losing time, opportunities, or operational visibility</button>
        </div>
      </section>

      {/* 3 — HOW SMRG WORKS */}
      <section id="how-it-works" style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={h2}>FROM INFORMATION TO INTELLIGENCE TO ACTION.</h2>
            <p style={{ ...body, marginBottom: '1.5rem' }}>
              SMRG designs specialized intelligence infrastructure around the problem that needs to be solved.
            </p>
            <p style={{ ...body, marginBottom: '1.5rem' }}>
              Depending on the application, that infrastructure can structure incoming information, identify relevant signals, cross-reference evidence, expose gaps, classify findings, and prioritize what deserves attention.
            </p>
            <p style={body}>
              The result is not merely more information. It is a clearer basis for action.
            </p>
          </div>
          <SignalChain stages={CORPORATE_CHAIN} />
        </div>
      </section>

      {/* 4 — APPLICATIONS */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={h2}>DIFFERENT OPERATIONAL PROBLEMS.<br />ONE INTELLIGENCE APPROACH.</h2>
            <p style={body}>
              Every organization has points where information arrives faster than it can be understood—or where important decisions depend on details scattered across people, documents, and systems.
            </p>
            <p style={{ ...body, marginTop: '1.5rem' }}>
              SMRG applies its intelligence approach to distinct operational challenges.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {applications.map((a) => (
              <div key={a.t} style={{ background: card, border: `1px solid ${border}`, borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: ink, letterSpacing: '0.02em', marginBottom: '1rem' }}>{a.t}</div>
                <p style={{ ...body, fontSize: '0.98rem', flex: 1 }}>{a.d}</p>
                <button onClick={() => setPage(a.page)} style={{ ...cardLink, background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', marginTop: '1rem' }}>
                  {a.link} →
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Explore an Intelligence Opportunity</button>
          </div>
        </div>
      </section>

      {/* 5 — WHY SMRG */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={{ ...wrap, maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={h2}>BUILT FROM THE PROBLEM, NOT THE PITCH.</h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            SMRG's approach is grounded in firsthand experience with the places where information problems become real operational problems.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Across areas including healthcare, insurance, legal intake, housing-related challenges, service operations, and business development, the recurring issue is not simply a lack of information. It is the difficulty of turning complicated, incomplete, or fragmented information into something useful.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            That experience informs how SMRG approaches its work: start with the real problem, understand the information involved, and build toward a practical outcome.
          </p>
          <p style={{ ...body, fontWeight: 700, color: ink, margin: 0 }}>
            New York-origin. Problem-led. Intelligence-focused.
          </p>
        </div>
      </section>

      {/* 6 — HUMAN JUDGMENT */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={{ ...wrap, maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ ...h2, marginBottom: '1.5rem' }}>AI PROCESSES INFORMATION.<br />INTELLIGENCE SURFACES MEANING.<br /><span style={{ color: accent }}>PROFESSIONALS MAKE DECISIONS.</span></h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Technology can help organize information, identify patterns, and surface findings that deserve attention.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            But consequential decisions require context, accountability, and appropriate human judgment.
          </p>
          <p style={body}>
            SMRG designs intelligence workflows to help people understand what matters and act with greater clarity—not to pretend that every complex decision can be automated.
          </p>
        </div>
      </section>

      {/* 7 — CUSTOM INTELLIGENCE */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <h2 style={h2}>YOUR PROBLEM DOESN'T HAVE TO FIT A PRODUCT.</h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Some operational challenges can be addressed by an existing SMRG utility. Others require several capabilities to work together. Some call for a purpose-built deployment.
          </p>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            SMRG begins by understanding the problem, the information involved, and the outcome you need.
          </p>
          <p style={{ ...body, marginBottom: '2.5rem' }}>
            From there, we determine whether an existing solution, a combined approach, or a custom intelligence system makes the most sense.
          </p>
          <button onClick={() => setPage('contact')} style={ctaPrimary}>Discuss Your Intelligence Opportunity</button>
        </div>
      </section>

      {/* 8 — FINAL CTA */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: ink, marginBottom: '1.5rem' }}>
            TELL US WHERE INFORMATION IS BEING LOST.
          </h2>
          <p style={{ ...body, marginBottom: '1.5rem' }}>
            Where are important details getting missed? Where are people spending time piecing information together? Where would clearer intelligence improve the way your organization operates?
          </p>
          <p style={{ ...body, marginBottom: '2.5rem' }}>
            Tell us what you are trying to solve. SMRG will evaluate the opportunity and determine whether we can help.
          </p>
          <button onClick={() => setPage('contact')} style={{ ...ctaPrimary, marginBottom: '3rem' }}>Start a Conversation</button>
          <p style={{ ...body, fontSize: '0.95rem', color: muted, margin: 0 }}>
            SMRG Consulting. New York-origin intelligence. Specialized infrastructure. Actionable information.
          </p>
        </div>
      </section>
    </div>
  );
}
