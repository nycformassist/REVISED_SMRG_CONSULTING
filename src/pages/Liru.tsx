export default function Liru({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>LIRU™</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 500 }}>Legal Intake Readiness Utility</h2>
        </div>
      </section>
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            AI-powered legal intake infrastructure designed to structure, validate, and organize client information before it reaches your legal team.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Exclusively configured for law firms. LIRU™ removes operational blindspots from initial client vetting, establishing clean case parameters automatically and stopping documentation leaks before they strain your practice resources.
          </p>
          <button onClick={() => setPage('contact')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Schedule a LIRU™ Demonstration</button>
        </div>
      </section>
    </>
  );
}