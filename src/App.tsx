import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services setPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };
  return (
    <>
      <Navbar setPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setCurrentPage} />
    </>
  );
}
