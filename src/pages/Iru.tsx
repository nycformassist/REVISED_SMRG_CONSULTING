export default function Iru({ setPage }: { setPage: (page: string) => void }) {
  return (
    <>
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>IRU™</h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', fontWeight: 500 }}>Immigration Readiness Utility</h2>
        </div>
      </section>
      <section className="bg-white" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Helping nonprofits and community organizations organize immigration intake while connecting individuals with appropriate legal and community resources.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Entirely nonprofit focused. IRU™ handles complex intake data mapping for mission organizations, churches, volunteer networks, sanctuary systems, and community groups without exposing administrative channels to unorganized operational friction.
          </p>
          <button onClick={() => setPage('contact')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Request IRU™ Access Information</button>
        </div>
      </section>
    </>
  );
}