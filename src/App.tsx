import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageBackground from './components/background/PageBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './i18n/config';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
          <PageBackground />
          <div className="relative z-10">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/experiencia" element={<Experience />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/contacto" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
