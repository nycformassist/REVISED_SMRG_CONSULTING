export default function About() {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2' }}>Built on 20+ Years of Operational Leadership.</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
            Based in NYC. Focused on measurable business value.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>Operational Clarity Before Automation™</h2>
            <p style={{ marginTop: '1rem' }}>
              With over two decades of experience in business management, workflow optimization, and AI implementation, SMRG Consulting was founded on a simple truth: <strong>technology cannot fix a broken process.</strong>
            </p>
            <p style={{ marginTop: '1rem' }}>
              Most businesses are sold software solutions to solve operational problems. We take a different approach. We find the hidden inefficiencies—the blindspots—quietly draining your profit and creating unnecessary work. 
            </p>
            <p style={{ marginTop: '1rem' }}>
              We establish absolute operational clarity first. Only then do we implement practical AI and automation solutions designed around the people who actually use them.
            </p>
          </div>
          <div>
            <div className="card bg-light" style={{ borderTop: '4px solid var(--accent-color)' }}>
              <h3>The SMRG Methodology</h3>
              <ul style={{ listStylePosition: 'inside', lineHeight: 2, marginTop: '1rem', fontWeight: 500 }}>
                <li>Identify Hidden Leakage Vectors</li>
                <li>Audit and Map Existing Workflows</li>
                <li>Establish Baseline Operational Clarity</li>
                <li>Deploy Practical AI & Automation</li>
                <li>Drive Measurable Business Value</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}