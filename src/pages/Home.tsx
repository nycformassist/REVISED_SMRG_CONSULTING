import SEO from '../components/SEO';
import SignalChain, { MASTER_CHAIN } from '../components/SignalChain';

const BUY = {
  piruSnapshot: 'https://buy.stripe.com/eVqbJ28Job5yf12bkf3ZK09',
  piru10: 'https://buy.stripe.com/5kQ5kE5xc0qUaKMbkf3ZK0a',
  piru25: 'https://buy.stripe.com/5kQ5kE3p47Tm0689c73ZK0b',
  piruProgram: 'https://buy.stripe.com/4gMbJ23p42z27yAdsn3ZK0c',
  advMarket: 'https://buy.stripe.com/dRm00kf7M3D6bOQbkf3ZK0d',
  advTerritory: 'https://buy.stripe.com/9B628s0cS3D6dWYgEz3ZK0e',
  inspSingle: 'https://buy.stripe.com/eVq4gAbVA7Tm5qs0FB3ZK0f',
  inspPro: 'https://buy.stripe.com/4gM14o8Jo5Le2eg73Z3ZK0g',
  inspCenter: 'https://buy.stripe.com/5kQfZi8Jo8Xq1acdsn3ZK0h',
};

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
  const buyLink: React.CSSProperties = { color: accent, fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', whiteSpace: 'nowrap' };
  const miniChain: React.CSSProperties = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', color: '#64748b', marginBottom: '1rem' };

  const products = [
    {
      name: 'RRU™', sub: 'Rental Readiness Utility',
      line: 'Rental inquiries arrive as fragmented information. RRU converts every inquiry into structured rental intelligence — who the prospect is, what they are looking for, whether the inquiry is complete, what needs follow-up, and who should act.',
      chain: 'INQUIRY → QUALIFICATION → STRUCTURED RENTAL INTELLIGENCE → HUMAN FOLLOW-UP',
      page: 'rru', explore: 'Explore RRU',
      extra: 'RRU Professional Dual — $2,500 setup + $1,500/mo',
      ctas: [{ t: 'Book a Live Demonstration', page: 'contact' }],
    },
    {
      name: 'LIRU™', sub: 'Legal Intake Readiness Utility',
      line: 'Better information before professional review.',
      chain: 'INQUIRY → INTAKE → STRUCTURE → READINESS → PROFESSIONAL REVIEW',
      page: 'liru', explore: 'Explore LIRU',
      ctas: [{ t: 'Book a Live Demonstration', page: 'contact' }],
    },
    {
      name: 'IRU™', sub: 'Immigration Readiness Utility',
      line: 'Information → structure → readiness → human review.',
      chain: 'INQUIRY → INTAKE → STRUCTURE → READINESS → COMMUNITY REVIEW',
      page: 'iru', explore: 'Explore IRU',
      ctas: [{ t: 'Book a Live Demonstration', page: 'contact' }],
    },
    {
      name: 'PIRU™', sub: 'Prospect Intelligence & Revenue Readiness Utility',
      line: 'Turn a prospect list into actionable business intelligence before sales time is spent.',
      chain: 'PROSPECT → RESEARCH → VERIFY → SIGNAL DETECTION → SALES INTELLIGENCE',
      page: 'piru', explore: 'Explore PIRU',
      ctas: [{ t: 'Request a Demonstration', page: 'contact' }],
      buy: [
        { t: 'Snapshot $495', href: BUY.piruSnapshot },
        { t: '10-Pack $750', href: BUY.piru10 },
        { t: '25-Pack $1,500', href: BUY.piru25 },
        { t: 'Program $1,500/mo', href: BUY.piruProgram },
      ],
    },
    {
      name: 'PIRU Advance™', sub: 'Market Intelligence',
      line: 'Know the whole market — not just the next lead.',
      chain: 'MARKET → RESEARCH → VERIFY → OPPORTUNITY MAPPING → STRATEGY',
      page: 'piru-advance', explore: 'Explore PIRU Advance',
      ctas: [{ t: 'Request a Demonstration', page: 'contact' }],
      buy: [
        { t: 'Market $2,500', href: BUY.advMarket },
        { t: 'Territory $5,000', href: BUY.advTerritory },
      ],
    },
    {
      name: 'BIRU™', sub: 'Business Inspection Readiness Utility',
      line: 'Know what your records say before someone else does.',
      chain: 'RECORDS → UNDERSTAND → CROSS-REFERENCE → DETECT → PRIORITIZE → HUMAN ACTION',
      page: 'biru', explore: 'Explore BIRU',
      ctas: [{ t: 'Request a BIRU Assessment', page: 'contact' }],
    },
    {
      name: 'DIRU™', sub: 'Daycare Inspection Readiness Utility',
      line: 'Know where your daycare records stand before inspection day.',
      chain: 'RECORDS → REVIEW → CROSS-REFERENCE → FINDINGS → READINESS',
      page: 'diru', explore: 'Explore DIRU',
      ctas: [{ t: 'Request a Demonstration', page: 'contact' }],
      buy: [
        { t: 'Single $299', href: BUY.inspSingle },
        { t: 'Professional $749/mo', href: BUY.inspPro },
        { t: 'Center $1,499/mo', href: BUY.inspCenter },
      ],
    },
    {
      name: 'Childcare OCC™', sub: 'Operational Capacity Controller',
      line: 'Operational readiness for childcare environments.',
      chain: 'RECORDS → REVIEW → STRUCTURE → READINESS → OPERATOR',
      page: 'childcare', explore: 'Explore Childcare OCC',
      ctas: [{ t: 'Book a Live Demonstration', page: 'contact' }],
    },
    {
      name: 'Custom Operational Intelligence', sub: 'Specialized Intelligence Deployments',
      line: "When the information problem doesn't fit a standard product.",
      chain: 'WORKFLOW → EVALUATION → INTELLIGENCE LAYER → ACTION',
      page: 'custom-systems', explore: 'Explore Custom Intelligence',
      ctas: [{ t: 'Identify Your Intelligence Opportunity', page: 'contact' }],
    },
    {
      name: 'SMRG Lead Intelligence Partner Suite', sub: 'Revenue Intelligence Relationship',
      line: 'Your market produces information. SMRG turns it into a prioritized revenue intelligence system. A CRM stores what you know; SMRG intelligence tells you what the information means and what to do next.',
      chain: 'WORKFLOWS → SHARED ARCHITECTURE → INTELLIGENCE → TEAMS',
      page: 'partner', explore: 'Explore Partner Suite',
      extra: 'Partner deployments from $10,000 implementation + $5,000/mo',
      ctas: [{ t: 'Discuss a Partner Deployment', page: 'contact' }],
    },
  ];

  const industries = [
    { t: 'Real Estate & Property Operations', d: 'Prospect inquiries, rental readiness, buyer/seller intelligence, property-specific qualification.' },
    { t: 'Legal & Professional Services', d: 'Complex intake, readiness, structured information, professional review.' },
    { t: 'Healthcare & Human Services', d: 'High-friction information flows requiring structure, prioritization, and human judgment.' },
    { t: 'Childcare & Regulated Operations', d: 'Operational information, record inspection, readiness, and risk visibility.' },
    { t: 'Community & Nonprofit Organizations', d: 'Complex intake, readiness, routing, and service-oriented information flows.' },
    { t: 'Revenue & Sales Operations', d: 'Prospect intelligence, research, verification, signal detection, and revenue readiness.' },
    { t: 'Specialized Workflows', d: 'When the information problem does not fit a standard product, SMRG evaluates whether a specialized intelligence deployment is appropriate.' },
  ];

  const stages = [
    { t: 'CAPTURE', d: 'Get the relevant information — wherever it currently lives.' },
    { t: 'STRUCTURE', d: 'Turn inconsistent information into usable records.' },
    { t: 'UNDERSTAND', d: 'Extract meaning and context from the records.' },
    { t: 'CROSS-REFERENCE', d: 'Compare information against relevant facts, records, rules, or signals.' },
    { t: 'CLASSIFY', d: 'Determine what matters.' },
    { t: 'PRIORITIZE', d: 'Surface what deserves attention.' },
    { t: 'INTELLIGENCE', d: 'Produce a usable intelligence output.' },
    { t: 'HUMAN ACTION', d: 'Put the decision back where it belongs: with the qualified professional.' },
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: dark, color: ink, lineHeight: 1.6 }}>
      <SEO
        title="SMRG Consulting | Intelligence Infrastructure for Difficult Information Problems"
        description="SMRG builds specialized AI-powered intelligence infrastructure that transforms complex information into structured, actionable intelligence for human decision-making. Information is everywhere. Intelligence isn't."
      />

      {/* 1 — HERO */}
      <section style={{ ...section, textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ ...wrap, maxWidth: '900px' }}>
          <div style={eyebrow}>New York-Origin Intelligence Infrastructure</div>
          <h1 style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', color: ink, marginBottom: '1.5rem' }}>
            INFORMATION IS EVERYWHERE.<br />INTELLIGENCE ISN'T.
          </h1>
          <p style={{ ...body, fontSize: '1.25rem', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            SMRG builds specialized AI-powered intelligence infrastructure that transforms complex information into structured, actionable intelligence for human decision-making.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Discuss Your Intelligence Opportunity</button>
            <a href="#systems" style={ctaGhost}>Explore Our Systems</a>
          </div>
          <SignalChain stages={MASTER_CHAIN} />
          <p style={{ ...body, fontSize: '0.95rem', marginTop: '2.5rem', maxWidth: '640px', margin: '2.5rem auto 0' }}>
            Every SMRG system performs the same transformation: messy information in, usable intelligence out, decisions left to qualified people.
          </p>
        </div>
      </section>

      {/* 2 — WHY */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={{ ...wrap, maxWidth: '800px', textAlign: 'center' }}>
          <div style={eyebrow}>Why SMRG exists</div>
          <h2 style={h2}>WE SAW THE PROBLEM FROM THE INSIDE.</h2>
          <p style={body}>
            Organizations rarely suffer from a lack of information. They suffer from information that is difficult to interpret, compare, prioritize, and act upon. SMRG was built around that problem — systems that take information requiring significant human effort to process and transform it into structured intelligence, putting the professional back in the decision-making role.
          </p>
        </div>
      </section>

      {/* 3 — PROBLEM */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={h2}>THE HARD PART ISN'T COLLECTING INFORMATION.<br />IT'S KNOWING WHAT IT MEANS.</h2>
            <p style={{ ...body, marginBottom: '2.5rem' }}>
              Information arrives through forms, emails, phone calls, documents, applications, spreadsheets, records, prospect inquiries, referrals, internal systems, and operational files — frequently incomplete, inconsistent, duplicated, fragmented, or difficult to interpret. People spend their time figuring out what they already received. Important signals stay buried. Professionals become information processors instead of decision-makers.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
            {['Forms', 'Emails', 'Phone calls', 'Documents', 'Applications', 'Spreadsheets', 'Records', 'Prospect inquiries', 'Referrals', 'Internal systems', 'Operational files'].map((s) => (
              <span key={s} style={{ border: `1px solid ${border}`, borderRadius: '999px', padding: '0.45rem 1rem', fontSize: '0.85rem', color: muted, fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — ARCHITECTURE */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <div style={eyebrow}>The architecture</div>
            <h2 style={h2}>THE INTELLIGENCE LAYER BETWEEN INFORMATION AND ACTION.</h2>
            <p style={body}>
              SMRG builds specialized infrastructure that sits between raw information and the people responsible for acting on it. The architecture is modular — adapted to the problem, not forced onto it. Deployments can include information capture, structured extraction, qualification, classification, cross-reference, signal detection, readiness analysis, prioritization, intelligence briefs, operational inspection, routing, and professional review.
            </p>
          </div>
          <SignalChain stages={MASTER_CHAIN} />
        </div>
      </section>

      {/* 5 — HOW SMRG WORKS */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={h2}>HOW SMRG WORKS</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {stages.map((s, i) => (
              <div key={s.t} style={{ background: card, border: `1px solid ${border}`, borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: accent, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>0{i + 1}</div>
                <div style={{ fontWeight: 800, color: ink, marginBottom: '0.5rem', letterSpacing: '0.04em' }}>{s.t}</div>
                <p style={{ ...body, fontSize: '0.95rem', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PROOF */}
      <section id="systems" style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <div style={eyebrow}>Proof, not promises</div>
            <h2 style={h2}>DIFFERENT PROBLEMS.<br />SAME INTELLIGENCE ARCHITECTURE.</h2>
            <p style={body}>Each system below is a working application of the same underlying capability — intelligence infrastructure adapted to a specific operational problem.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {products.map((p) => (
              <div key={p.name} style={{ background: card, border: `1px solid ${border}`, borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: ink }}>{p.name}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: accent, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>{p.sub}</div>
                <p style={{ ...body, fontSize: '0.98rem', flex: 0 }}>{p.line}</p>
                <div style={miniChain}>{p.chain}</div>
                {p.extra && <div style={{ fontSize: '0.88rem', color: muted, fontWeight: 700, marginBottom: '1rem' }}>{p.extra}</div>}
                {p.buy && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', marginBottom: '1.25rem' }}>
                    {p.buy.map((b) => (
                      <a key={b.t} href={b.href} target="_blank" rel="noopener noreferrer" style={buyLink}>Buy · {b.t} →</a>
                    ))}
                  </div>
                )}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <button onClick={() => setPage(p.page)} style={{ ...ctaGhost, padding: '0.7rem 1.4rem', fontSize: '0.88rem' }}>{p.explore}</button>
                  {p.ctas.map((c) => (
                    <button key={c.t} onClick={() => setPage(c.page)} style={{ ...ctaGhost, padding: '0.7rem 1.4rem', fontSize: '0.88rem', borderColor: 'rgba(56,189,248,0.5)', color: accent }}>{c.t}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — INDUSTRIES */}
      <section style={{ ...section, borderTop: `1px solid ${border}` }}>
        <div style={wrap}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <div style={eyebrow}>Where it applies</div>
            <h2 style={h2}>DIFFERENT INDUSTRIES.<br />SAME PROBLEM.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {industries.map((ind) => (
              <div key={ind.t} style={{ background: card, border: `1px solid ${border}`, borderRadius: '8px', padding: '1.75rem' }}>
                <div style={{ fontWeight: 800, color: ink, marginBottom: '0.5rem' }}>{ind.t}</div>
                <p style={{ ...body, fontSize: '0.95rem', margin: 0 }}>{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CUSTOM WORKFLOW */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <h2 style={h2}>YOUR PROBLEM DOESN'T HAVE TO FIT OUR PRODUCT.</h2>
          <p style={{ ...body, marginBottom: '2.5rem' }}>
            Some information problems are too specific for an off-the-shelf system. SMRG evaluates the workflow, identifies where information is being lost or underused, and determines whether a specialized intelligence layer can create measurable operational value.
          </p>
          <button onClick={() => setPage('contact')} style={ctaPrimary}>Identify Your Intelligence Opportunity</button>
        </div>
      </section>

      {/* 9 — PROVENANCE */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <div style={eyebrow}>Operational provenance</div>
          <h2 style={h2}>BUILT FROM THE PROBLEM, NOT THE PITCH.</h2>
          <p style={body}>
            SMRG's systems emerged from firsthand operational experience across complex, high-volume environments — healthcare, insurance, legal intake, and service operations. The recurring problem was never a lack of technology. It was the gap between information arriving and people being able to understand what mattered. Built in New York. Informed by New York's complexity. Designed for real operational problems.
          </p>
        </div>
      </section>

      {/* 10 — HUMAN JUDGMENT */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <h2 style={{ ...h2, marginBottom: '1.5rem' }}>AI PROCESSES INFORMATION.<br />INTELLIGENCE SURFACES MEANING.<br /><span style={{ color: accent }}>PROFESSIONALS MAKE DECISIONS.</span></h2>
          <p style={body}>
            SMRG does not position AI as a replacement for qualified professionals. Our systems are built around human review — including Fair Housing standards in real estate, professional review in legal and immigration contexts, and qualified oversight in regulated operations.
          </p>
        </div>
      </section>

      {/* 11 — FINAL CTA */}
      <section style={{ ...section, borderTop: `1px solid ${border}`, textAlign: 'center' }}>
        <div style={{ ...wrap, maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.02em', color: ink, marginBottom: '1.5rem' }}>
            DISCUSS YOUR INTELLIGENCE OPPORTUNITY
          </h2>
          <p style={{ ...body, marginBottom: '2.5rem' }}>
            Tell us where information is being lost in your operation. We'll tell you honestly whether an intelligence layer belongs there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={ctaPrimary}>Discuss Your Intelligence Opportunity</button>
            <a href="#systems" style={ctaGhost}>Explore Our Systems</a>
          </div>
        </div>
      </section>
    </div>
  );
}
