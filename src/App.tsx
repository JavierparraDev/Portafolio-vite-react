import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
        <div className="min-h-screen bg-gray-950 text-white">
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
