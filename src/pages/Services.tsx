export default function Services({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <h1>AI Without Operational Strategy Creates Expensive Chaos.</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
            Every business wants AI. Few know where it actually belongs.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>SMRG Operational Focus Areas</h2>
            <p style={{ margin: '1rem 0' }}>Our Operational AI Assessment identifies the workflows creating friction, inconsistency, and wasted time—and delivers a practical roadmap for automation.</p>
            <ul style={{ listStylePosition: 'inside', lineHeight: 2, fontWeight: 500 }}>
              <li>Operational Assessment & AI Readiness Audits</li>
              <li>Workflow Mapping & Documentation Strategy</li>
              <li>Knowledge Capture & Process Optimization</li>
              <li>Automation Roadmaps & Implementation Support</li>
            </ul>
          </div>
          <div>
            <div className="card bg-light" style={{ borderTop: '4px solid var(--accent-color)' }}>
              <h3>The Operational AI Assessment</h3>
              <p style={{ marginTop: '0.5rem' }}>Stop guessing where to apply technology. Start with a clear baseline framework.</p>
              <ol style={{ margin: '1rem 0 1.5rem 1.25rem', lineHeight: 1.8 }}>
                <li>Complete Workflow Analysis</li>
                <li>Operational Risk Assessment</li>
                <li>AI Opportunity Report</li>
                <li>Step-by-Step Implementation Roadmap</li>
                <li><strong>90-Minute Executive Strategy Session</strong></li>
              </ol>
              <button onClick={() => setPage('contact')} className="btn btn-primary" style={{ width: '100%' }}>Book Your Assessment</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}