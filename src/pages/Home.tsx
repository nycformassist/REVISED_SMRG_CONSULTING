$HomeCode = @'
export default function Home({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1>Operational Intelligence for Organizations Ready to Scale.</h1>
            <h3 style={{ color: 'var(--text-light)', fontWeight: 400, marginTop: '0.5rem' }}>
              Operational systems designed around the people who use them.
            </h3>
            <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
              SMRG Consulting helps organizations capture knowledge, streamline operations, and implement practical AI that improves consistency, reduces risk, and supports better decision-making.
            </p>
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
            <p style={{ marginTop: '1rem' }}><strong>Technology doesn't solve operational problems. Processes do.</strong></p>
          </div>
          <div>
            <p>With more than twenty years of experience in operations, practice management, systems design, and organizational leadership, SMRG Consulting bridges the gap between business operations and modern artificial intelligence.</p>
            <p style={{ marginTop: '1rem' }}><strong>We don't sell AI. We design operational systems that happen to use AI.</strong></p>
          </div>
        </div>
      </section>
    </>
  );
}
'@
[System.IO.File]::WriteAllText("$pwd\src\pages\Home.tsx", $HomeCode)
