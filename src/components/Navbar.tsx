export default function Navbar({ setPage }: { setPage: (page: string) => void }) {
  return (
    <header>
      <div className="nav-container">
        <button onClick={() => setPage('home')} className="logo">SMRG CONSULTING</button>
        <ul className="nav-links">
          <li><button onClick={() => setPage('home')}>HOME</button></li>
          <li><button onClick={() => setPage('about')}>ABOUT</button></li>
          <li><button onClick={() => setPage('services')}>SERVICES</button></li>
          <li><button onClick={() => setPage('contact')}>CONTACT</button></li>
        </ul>
      </div>
    </header>
  );
}
