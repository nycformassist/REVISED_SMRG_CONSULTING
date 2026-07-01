export default function Home({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Operational Clarity Before Automation™</h3>
            <h1 style={{ fontSize: '3rem', lineHeight: '1.2' }}>Your Business Doesn't Need More Software. It Needs Operational Clarity.</h1>
            <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: 'var(--text-light)' }}>
              Hidden inefficiencies quietly steal time, revenue, and productivity every day. Before investing in AI, automation, or new technology, discover where your business is actually losing money—and what deserves your attention first.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setPage('contact')} className="btn btn-primary">Start Your Free Business Blindspot Scan™</button>
              <button onClick={() => setPage('contact')} className="btn btn-outline">Book an Operations Pulse™</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>The Problem Isn't What You Think</h2>
            <p style={{ marginTop: '1rem' }}>Most businesses suffer from something far more expensive: <strong>Operational Blindspots.</strong></p>
            <p style={{ marginTop: '1rem' }}>These are hidden inefficiencies that quietly drain profit, create unnecessary work, frustrate employees, and prevent scaling. Because you're inside your business every day, these patterns become invisible.</p>
            <p style={{ marginTop: '1rem' }}>That's why we don't start with software or AI. We start with absolute clarity.</p>
          </div>
          <div>
            <div className="card bg-light">
              <h3>Ready to Discover Your Score?</h3>
              <p style={{ marginTop: '1rem' }}>Launch the interactive 90-second diagnostic tool to trace hidden leakage vectors across your workflow profiles instantly.</p>
              <button onClick={() => setPage('contact')} className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>Launch Interactive Blindspot Scan™</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}