import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/tu-usuario',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/tu-usuario',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/tu-usuario',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:tu-email@ejemplo.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold gradient-text">Javier Parra</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Desarrollador Full Stack apasionado por crear experiencias digitales únicas y funcionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/sobre-mi" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="/proyectos" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/habilidades" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {currentYear} Javier Parra. Todos los derechos reservados.
        </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 