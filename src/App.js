import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { ThemeProvider } from './theme/ThemeContext.js';
import { ClimbingBoxLoader } from 'react-spinners'; // Importando o spinner


function App() {

  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Simulando um carregamento inicial
    const timer = setTimeout(() => {
      setLoading(false); // Define loading como falso após 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#1a1a1a',
        }}
      >
        <ClimbingBoxLoader color="#ff5ca1" size={15} />
      </div>
    );
  }
  return (

    <ThemeProvider>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
 </ThemeProvider>
  );
}


export default App;
