import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Terminal, Home, ArrowRight, ListOrdered } from 'lucide-react';
import Seo from '../components/Seo';

const REDIRECT_SECONDS = 8;

const ALIASES: Record<string, string> = {
  '/home': '/',
  '/about': '/sobre-mi',
  '/acerca-de': '/sobre-mi',
  '/projects': '/proyectos',
  '/portfolio': '/proyectos',
  '/trabajos': '/proyectos',
  '/experience': '/experiencia',
  '/trayectoria': '/experiencia',
  '/contact': '/contacto',
  '/contactanos': '/contacto'
};

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(REDIRECT_SECONDS);

  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const aliasTarget = ALIASES[normalized];
  const redirectNow = aliasTarget || (normalized !== pathname ? normalized + search : null);

  useEffect(() => {
    if (redirectNow) return;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          navigate('/', { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [navigate, reduceMotion, redirectNow]);

  if (redirectNow) {
    return <Navigate to={redirectNow} replace />;
  }

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/sobre-mi', label: t('nav.about') },
    { href: '/proyectos', label: t('nav.work') },
    { href: '/experiencia', label: t('nav.experience') },
    { href: '/contacto', label: t('nav.contact') }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title={t('seo.notFound.title')}
        description={t('seo.notFound.description')}
        noindex
      />

      <section className="relative flex min-h-[70vh] items-center justify-center pt-16 pb-24">
        <div className="relative z-10 mx-auto w-full max-w-xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-4 py-2.5 font-mono text-xs text-gray-500 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-400">
              <Terminal className="h-4 w-4 text-blue-500" />
              <span>$ curl -I {pathname}</span>
            </div>

            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400">
              // error 404
            </p>

            <h1 className="mb-6 text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Page not found
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-md text-lg text-gray-600 dark:text-gray-400">
              La ruta <span className="font-mono text-blue-600 dark:text-blue-400">{pathname}</span>{' '}
              no existe o fue movida.
            </p>

            <div className="mb-10 flex flex-col items-center gap-4">
              {!reduceMotion && (
                <p className="font-mono text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
                  Redirigiendo a inicio en <span className="font-bold text-blue-600 dark:text-blue-400">{count}</span>s...
                </p>
              )}
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Home className="h-4 w-4" />
                {t('nav.home')}
              </Link>
            </div>

            <div>
              <p className="mb-3 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                <ListOrdered className="h-4 w-4" />
                navegación
              </p>
              <nav aria-label="Secciones del sitio" className="flex flex-wrap justify-center gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/70 px-4 py-1.5 text-sm font-medium text-gray-600 backdrop-blur-sm transition-colors hover:border-blue-500/50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
