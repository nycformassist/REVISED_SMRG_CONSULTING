export default function Services({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <h1>AI Without Operational Strategy Creates Expensive Chaos.</h1>
        </div>
      </section>
      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>SMRG Focus Areas</h2>
            <p>We analyze workflows, identify operational bottlenecks, and craft tailored automation roadmaps that integrate seamlessly with your current structure.</p>
          </div>
          <div>
            <div className="card bg-light">
              <h3>The Operational AI Assessment</h3>
              <button onClick={() => setPage('contact')} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Book Your Assessment</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
