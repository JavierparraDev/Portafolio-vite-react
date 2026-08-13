import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageBackground from './components/background/PageBackground';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import './i18n/config';
import './App.css';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
            <PageBackground />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2.5 focus:text-white"
            >
              Saltar al contenido
            </a>
            <div className="relative z-10">
              <Header />
              <main id="main-content" className="pt-16">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre-mi" element={<About />} />
                    <Route path="/experiencia" element={<Experience />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </div>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
