export default function Services({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      {/* HEADER HERO */}
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>AI Without Operational Strategy Creates Expensive Chaos.</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 500 }}>
            Every business wants AI. Few know where it actually belongs.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Operational Focus Areas</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Our systems engineering methodology digs below the tech layer to structure your human architecture first. We prepare, audit, and install permanent workflow solutions across ten precise organizational vectors.
            </p>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: '2.2', fontSize: '1.1rem', fontWeight: 500 }}>
              <li>Operational Assessment</li>
              <li>AI Readiness Audit</li>
              <li>Workflow Mapping</li>
              <li>Documentation Strategy</li>
              <li>Knowledge Capture</li>
              <li>Process Optimization</li>
              <li>Automation Roadmaps</li>
              <li>Fractional Operations Leadership</li>
              <li>Executive AI Strategy</li>
              <li>Implementation Support</li>
            </ul>
          </div>

          {/* ASSESSMENT DEEP BREAKDOWN BOX */}
          <div>
            <div className="card bg-light" style={{ padding: '2.5rem', borderRadius: '8px', borderTop: '6px solid var(--accent-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Operational AI Assessment</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Stop guessing where to apply technology. Our comprehensive diagnostic maps out exactly where inefficiencies exist and pairs them with practical solutions.
              </p>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600 }}>Deliverable System Architecture Components:</h4>
              <ol style={{ paddingLeft: '1.25rem', lineHeight: '2', fontSize: '1.05rem', marginBottom: '2rem' }}>
                <li>Complete Workflow Analysis</li>
                <li>Operational Risk Assessment</li>
                <li>AI Opportunity Report</li>
                <li>Step-by-Step Implementation Roadmap</li>
                <li><strong>90-Minute Executive Strategy Session</strong></li>
              </ol>
              <button 
                onClick={() => setPage('contact')} 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
              >
                Book Your Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}