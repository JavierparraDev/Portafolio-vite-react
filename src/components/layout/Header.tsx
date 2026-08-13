import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors duration-200 font-medium ${
    isActive
      ? 'text-blue-600 dark:text-blue-400'
      : 'text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
  }`;

const Header = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = stored !== null ? stored === 'true' : prefersDark;
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/sobre-mi' },
    { name: t('nav.work'), href: '/proyectos' },
    { name: t('nav.experience'), href: '/experiencia' },
    { name: t('nav.contact'), href: '/contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 rounded-lg overflow-hidden"
            >
              <img
                src="/javier-parra.webp"
                alt="Javier Parra"
                decoding="async"
                className="w-full h-full rounded-full object-cover"
               /> 
               
            </motion.div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Javier Parra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label={t('nav.home')} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Dark Mode Toggle & Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle dark mode"
              aria-pressed={isDark}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
          >
            <nav aria-label={t('nav.home')} className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
