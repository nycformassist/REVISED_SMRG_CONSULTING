export default function Partner() {
  return (
    <>
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>Become an SMRG Consulting Partner</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>
            Help organizations modernize operations while building recurring income.
          </p>
        </div>
      </section>
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2>Designed For Dedicated Professionals</h2>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem', lineHeight: '1.6' }}>Our 1099 partner channel is purposely structured to help industry veterans deploy highly efficient systemic software components across professional markets.</p>
            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Perfect for:</h3>
            <ul style={{ lineHeight: '2', paddingLeft: '1.25rem', fontWeight: 500 }}>
              <li>Business Consultants</li>
              <li>Operations Professionals</li>
              <li>Former Practice Managers</li>
              <li>Legal Professionals</li>
              <li>Former Directors</li>
              <li>Healthcare Administrators</li>
              <li>Experienced Sales Professionals</li>
            </ul>
          </div>
          <div>
            <div className="card bg-light" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h3>Program Infrastructure</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 2rem 0', lineHeight: '2.2', fontWeight: 600 }}>
                <li>✓ Uncapped Commission Structure</li>
                <li>✓ Comprehensive Implementation Training</li>
                <li>✓ Operational Marketing Resources</li>
                <li>✓ Direct CRM Portal Access</li>
                <li>✓ Simplified Lead Registration</li>
                <li>✓ Full Demo Technical Support</li>
                <li>✓ Compounding Recurring Revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}