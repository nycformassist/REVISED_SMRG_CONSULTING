import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// SMRG Operational Utility Suite
import Rru from './pages/Rru';
import Liru from './pages/Liru';
import Iru from './pages/Iru';
import Childcare from './pages/Childcare';
import CustomSystems from './pages/CustomSystems';
// Strategic Pages
import Industries from './pages/Industries';
import HowItWorks from './pages/HowItWorks';
import Partner from './pages/Partner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      // Core Pages
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'about': return <About setPage={setCurrentPage} />;
      case 'how-it-works': return <HowItWorks setPage={setCurrentPage} />;
      case 'contact': return <Contact setPage={setCurrentPage} />;
      
      // Product Portfolio
      case 'rru': return <Rru setPage={setCurrentPage} />;
      case 'liru': return <Liru setPage={setCurrentPage} />;
      case 'iru': return <Iru setPage={setCurrentPage} />;
      case 'childcare': return <Childcare setPage={setCurrentPage} />;
      case 'custom-systems': return <CustomSystems setPage={setCurrentPage} />;
      
      // Market Categories
      case 'industries': return <Industries setPage={setCurrentPage} />;
      case 'partner': return <Partner setPage={setCurrentPage} />;
      
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