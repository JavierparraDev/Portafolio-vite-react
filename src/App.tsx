import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Aquí puedes agregar más rutas cuando crees las otras páginas */}
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/proyectos" element={<Projects />} />

              <Route path="/contacto" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Página Contacto - En desarrollo</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
