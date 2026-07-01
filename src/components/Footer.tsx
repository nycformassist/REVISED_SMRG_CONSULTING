export default function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer>
      <div className="container">
        <h3>SMRG CONSULTING</h3>
        <p>Operational Intelligence | Process Optimization | Operational Systems</p>
        <ul className="footer-nav">
          <li><button onClick={() => setPage('home')}>HOME</button></li>
          <li><button onClick={() => setPage('about')}>ABOUT</button></li>
          <li><button onClick={() => setPage('services')}>SERVICES</button></li>
          <li><button onClick={() => setPage('contact')}>CONTACT</button></li>
        </ul>
        <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>&copy; 2026 SMRG Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
