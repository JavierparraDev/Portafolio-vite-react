import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
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
    { name: t('nav.contact'), href: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 rounded-lg overflow-hidden"
            >
              <img
                src="/javier-perfil.svg"
                alt="Javier Parra"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="text-xl font-bold text-white">Javier Parra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle & Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
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
            className="md:hidden py-4 border-t border-gray-800"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
