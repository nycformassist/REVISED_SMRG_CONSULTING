export default function About() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-dark" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1rem' }}>20 Years of Operational Leadership</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '800px' }}>
            Most AI consultants begin with technology. I began with operations.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-white" style={{ padding: '4rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Trap of Scattered Knowledge</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              For more than two decades, I've worked inside organizations improving workflows, building systems, leading teams, reducing operational friction, and solving complex business problems.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Throughout my career I've learned one lesson: **The greatest operational asset inside any organization isn't software. It's institutional knowledge.**
            </p>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              When that knowledge exists only in people's heads, organizations become fragile. Employees leave. Processes break. Customers experience inconsistency.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', fontWeight: 'bold', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
              Artificial intelligence changes what's possible—but only when it's built on well-designed operational systems. That's where SMRG Consulting focuses.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
              We help organizations capture operational knowledge and transform it into scalable systems that improve consistency, documentation, and decision-making. Technology supports people. It doesn't replace them.
            </p>
          </div>
        </div>
      </section>

      {/* YOUR STORY SECTION */}
      <section className="bg-light" style={{ padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Why I Built SMRG Consulting</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            After spending more than twenty years improving operations across multiple industries, I noticed the same pattern everywhere. Organizations weren't struggling because people lacked talent. They were struggling because critical knowledge was scattered across conversations, paper files, sticky notes, emails, and employee memory.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Artificial intelligence offered an opportunity to change that—but only if it was implemented thoughtfully. SMRG Consulting was created to help organizations preserve institutional knowledge, reduce operational friction, and build practical AI systems that support the people doing the work every day.
          </p>
        </div>
      </section>
    </>
  );
}