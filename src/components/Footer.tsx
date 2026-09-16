export default function Footer({ setPage }: { setPage: (page: string) => void }) {
  return (
    <footer style={{ background: '#111827', color: '#9CA3AF', padding: '2.5rem 0', textAlign: 'center', fontSize: '0.9rem', borderTop: '1px solid #374151' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <p style={{ marginBottom: '1rem', color: '#D1D5DB' }}>
          Helping organizations uncover operational gaps, structure information, and move opportunities toward informed human action.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <a href="/privacy.html" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Notice</a>
          <span style={{ color: '#4B5563' }}>•</span>
          <a href="/terms.html" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        <p>&copy; 2026 SMRG Consulting / Aten Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}