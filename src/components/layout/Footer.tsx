import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copiado, setCopiado] = useState(false);
  const EMAIL = 'javier00parra@gmail.com';
  const WHATSAPP_NUMBER = '+573133217887'; 

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/JavierparraDev',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/javierparradev/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
      color: 'hover:text-green-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: '', // No redirige
      color: 'hover:text-red-500',
      placeholder: EMAIL
    }
  ];

  const copiarCorreo = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div className="space-y-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg shadow-md overflow-hidden">
                <img
                  src="/javier-perfil.svg"
                  alt="Javier Parra"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
                Javier Parra
              </span>
            </div>

            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              <p className="mb-1 font-semibold text-base">
                 Correo de contacto:
              </p>
              <button
                onClick={copiarCorreo}
                className="text-primary-600 dark:text-primary-400 hover:underline font-medium focus:outline-none"
                title="Copiar correo al portapapeles"
              >
                {EMAIL}
              </button>
              {copiado && (
                <span className="block text-green-600 dark:text-green-400 text-xs mt-1">
                  ¡Correo copiado!
                </span>
              )}
            </div>

            <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold mb-1">Disponible para colaborar en:</p>
              <ul className="list-disc list-inside ml-1 space-y-1">
                <li>Proyectos freelance</li>
                <li>Consultoría técnica</li>
                <li>Startups 🚀</li>
              </ul>
              <p className="mt-2 italic">
                Abierto a desafíos técnicos donde pueda aportar valor real.
              </p>
            </div>
          </motion.div>
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
                social.name === 'Email' ? (
                  <button
                    key={social.name}
                    onClick={copiarCorreo}
                    className={`p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                    title="Copiar correo al portapapeles"
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ) : (
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
                )
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
              Desarrollado con ❤️ y mucho ☕ por Javier Parra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 