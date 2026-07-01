export default function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer style={{ background: 'var(--dark)', color: 'var(--text-light)', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <p>Helping businesses uncover hidden inefficiencies, optimize operations, and implement practical AI solutions that create measurable business value.</p>
        <p style={{ marginTop: '1rem' }}>&copy; 2026 SMRG Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}