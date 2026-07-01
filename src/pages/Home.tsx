export default function Home({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1>Operational Intelligence for Organizations Ready to Scale.</h1>
            <p style={{ fontSize: '1.25rem' }}>Operational systems designed around the people who use them.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => setPage('contact')} className="btn btn-primary">Schedule a Consultation</button>
              <button onClick={() => setPage('services')} className="btn btn-outline">Explore Solutions</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>Built on More Than Technology.</h2>
            <p><strong>Technology doesn't solve operational problems. Processes do.</strong></p>
          </div>
          <div>
            <p>SMRG Consulting bridges the gap between daily operations and practical AI implementation to improve performance and protect institutional knowledge.</p>
          </div>
        </div>
      </section>
    </>
  );
}