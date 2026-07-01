import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Liru from './pages/Liru';
import Iru from './pages/Iru';
import Childcare from './pages/Childcare';
import Partner from './pages/Partner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services setPage={setCurrentPage} />;
      case 'liru': return <Liru setPage={setCurrentPage} />;
      case 'iru': return <Iru setPage={setCurrentPage} />;
      case 'childcare': return <Childcare setPage={setCurrentPage} />;
      case 'partner': return <Partner />;
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