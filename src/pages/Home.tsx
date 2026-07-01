export default function Home({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: '3rem', lineHeight: '1.15', marginBottom: '1rem' }}>Operational Intelligence for Organizations Ready to Scale</h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 500, marginBottom: '1.5rem' }}>Operational systems designed around the people who use them.</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text-light)' }}>
              SMRG Consulting helps organizations capture knowledge, streamline operations, and implement practical AI that improves consistency, reduces risk, and supports better decision-making. Whether you're managing legal intake, childcare operations, nonprofit services, or small business workflows, we build systems that make your organization easier to run.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setPage('contact')} className="btn btn-primary">Schedule an Operational Consultation</button>
              <button onClick={() => setPage('services')} className="btn btn-outline">Explore Our Solutions</button>
            </div>
          </div>
        </div>
      </section>

      {/* 20 YEARS EXPERIENCE SECTION */}
      <section className="bg-white" style={{ padding: '4rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.25rem', lineHeight: '1.3' }}>Built on More Than Technology</h2>
            <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', color: 'var(--accent-color)' }}>Technology doesn't solve operational problems. Processes do.</h3>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              With more than twenty years of experience in operations, practice management, systems design, and organizational leadership, SMRG Consulting bridges the gap between business operations and modern artificial intelligence.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1.5rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
              We don't sell AI. We design operational systems that happen to use AI.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE SECTION */}
      <section className="bg-light" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '3rem' }}>Industries We Serve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {['Law Firms', 'Childcare Organizations', 'Nonprofits', 'Small Businesses', 'Professional Services', 'Growing Organizations'].map((industry) => (
              <div key={industry} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--white)', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{industry}</h3>
                <button onClick={() => setPage('contact')} style={{ background: 'none', border: 'none', color: 'var(--accent-color)', fontWeight: 'bold', cursor: 'pointer' }}>Get Industry Vector →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE OPERATIONAL REVENUE SYSTEMS */}
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem', textAlign: 'center' }}>Dedicated Operational Systems</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', maxWith: '600px', margin: '0 auto 3rem' }}>Instead of surface-level products, we deploy deep architectural assets configured specifically for your mission profile.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #0066cc', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3>LIRU™</h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#666' }}>Legal Intake Readiness Utility</p>
              <p style={{ margin: '1rem 0' }}>AI-powered legal intake infrastructure designed to structure, validate, and organize client information before it reaches your legal team.</p>
              <button onClick={() => setPage('services')} style={{ background: 'none', border: 'none', color: '#0066cc', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>Learn More →</button>
            </div>

            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #00cc66', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3>IRU™</h3>
              <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#666' }}>Immigration Readiness Utility</p>
              <p style={{ margin: '1rem 0' }}>Helping nonprofits and community organizations organize immigration intake while connecting individuals with appropriate legal and community resources.</p>
              <button onClick={() => setPage('services')} style={{ background: 'none', border: 'none', color: '#00cc66', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>Learn More →</button>
            </div>

            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #cc0066', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3>Childcare Operational Command Center™</h3>
              <p style={{ margin: '1rem 0' }}>Transform parent knowledge into structured operational guidance that supports consistent, child-specific care.</p>
              <button onClick={() => setPage('services')} style={{ background: 'none', border: 'none', color: '#cc0066', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>Learn More →</button>
            </div>

            <div className="card" style={{ padding: '2rem', borderTop: '4px solid #333', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3>Operational AI Consulting</h3>
              <p style={{ margin: '1rem 0' }}>Operational assessments, workflow redesign, AI implementation, and process optimization for growing organizations.</p>
              <button onClick={() => setPage('services')} style={{ background: 'none', border: 'none', color: '#333', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>Learn More →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}