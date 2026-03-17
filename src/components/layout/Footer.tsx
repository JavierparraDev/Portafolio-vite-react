import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const EMAIL = 'javier00parra@gmail.com';
  const WHATSAPP_NUMBER = '+573133217887';

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/JavierparraDev',
      bgColor: 'bg-gray-800 hover:bg-gray-700',
      borderColor: 'border-gray-700 hover:border-gray-500',
      iconColor: 'text-gray-400 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/javierparradev/',
      bgColor: 'bg-gray-800 hover:bg-blue-600',
      borderColor: 'border-gray-700 hover:border-blue-500',
      iconColor: 'text-gray-400 hover:text-white'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
      bgColor: 'bg-gray-800 hover:bg-green-600',
      borderColor: 'border-gray-700 hover:border-green-500',
      iconColor: 'text-gray-400 hover:text-white'
    }
  ];

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickLinks = [
    { key: 'about', href: '/sobre-mi' },
    { key: 'work', href: '/proyectos' },
    { key: 'contact', href: '/contacto' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Personal Info */}
          <div className="space-y-4">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                    <img
                      src="/javier-perfil.svg"
                      alt="Javier Parra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">
                  {t('hero.title')}
                </span>
              </div>

              <div className="text-gray-400 text-sm">
                <p className="mb-2 text-gray-300 font-medium">
                  {t('footer.role')}
                </p>
                <button
                  onClick={copyEmail}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  {EMAIL}
                  {copied && (
                    <span className="text-green-400 text-xs">(copied!)</span>
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.connect')}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${social.bgColor} border ${social.borderColor} transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className={`w-5 h-5 ${social.iconColor}`} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {t('hero.title')}. {t('footer.copyright')}
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              {t('footer.builtWith')} <Heart className="w-4 h-4 text-red-500" /> {t('footer.andLotsOf')} coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
