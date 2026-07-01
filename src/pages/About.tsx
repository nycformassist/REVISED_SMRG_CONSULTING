$AboutCode = @'
export default function About() {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <h1>20 Years of Operational Leadership</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
            Technology supports people. It doesn't replace them.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="container grid-2">
          <div>
            <h2>Most AI consultants begin with technology. I began with operations.</h2>
            <p style={{ marginTop: '1rem' }}>For more than two decades, I've worked inside organizations improving workflows, building systems, leading teams, reducing operational friction, and solving complex business problems.</p>
            <p style={{ marginTop: '1rem' }}>Throughout my career, I've learned one defining lesson: <strong>The greatest operational asset inside any organization isn't software. It's institutional knowledge.</strong></p>
          </div>
          <div>
            <div className="card bg-light">
              <h3>Why I Built SMRG Consulting</h3>
              <p style={{ marginTop: '1rem' }}>Organizations weren't struggling because people lacked talent. They were struggling because critical knowledge was scattered across conversations, paper files, sticky notes, emails, and employee memory.</p>
              <p style={{ marginTop: '1rem' }}>SMRG Consulting was created to help organizations preserve institutional knowledge, reduce operational friction, and build practical AI systems designed around the people who use them.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
'@
[System.IO.File]::WriteAllText("$pwd\src\pages\About.tsx", $AboutCode)
