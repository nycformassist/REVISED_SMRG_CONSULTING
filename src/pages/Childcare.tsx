export default function Childcare({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>Childcare Operational Command Center™</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>Operational consistency, staff support, and parent confidence.</p>
        </div>
      </section>
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Transform parent knowledge into structured operational guidance that supports consistent, child-specific care.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            We specialize in engineering data-capture pipelines that translate administrative documentation requirements into explicit, clear blueprints for onsite personnel. This increases operational accountability and stabilizes compliance safety parameters.
          </p>
          <div style={{ background: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', marginTop: '2rem', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Pilot Partnership Program</h3>
            <p style={{ marginBottom: '1.5rem' }}>We are systematically selecting specific regional centers to validate customized operational instances of the command architecture.</p>
            <button onClick={() => setPage('contact')} className="btn btn-primary">Apply for Pilot Partnership</button>
          </div>
        </div>
      </section>
    </>
  );
}