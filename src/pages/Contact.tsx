import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Send, Check, MapPin, Terminal } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { EMAIL, WHATSAPP_NUMBER } from '../constants';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/JavierparraDev',
    bgColor: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
    borderColor: 'border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500',
    iconColor: 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/javierparradev/',
    bgColor: 'bg-gray-100 hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-blue-600',
    borderColor: 'border-gray-300 hover:border-blue-500 dark:border-gray-700 dark:hover:border-blue-500',
    iconColor: 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
    bgColor: 'bg-gray-100 hover:bg-green-50 dark:bg-gray-800 dark:hover:bg-green-600',
    borderColor: 'border-gray-300 hover:border-green-500 dark:border-gray-700 dark:hover:border-green-500',
    iconColor: 'text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-white'
  }
];

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n---\nNombre: ${form.name}\nCorreo: ${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' as const }
    }
  };

  const titleParts = t('contact.title').split(' ');
  const gradientTitle = titleParts.length > 1 ? titleParts.slice(1).join(' ') : '';

  const inputClass =
    'w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Helmet>
        <title>{t('contact.title')} | Javier Parra - {t('hero.role')}</title>
        <meta name="description" content={t('contact.description')} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
          <div className="absolute -top-20 left-1/4 w-[480px] h-[480px] bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center gap-3 mb-6"
          >
            <Terminal className="w-4 h-4" />
            {t('contact.eyebrow')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            {titleParts[0]}
            {gradientTitle && (
              <>
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                  {gradientTitle}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Contact card */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-10"
            variants={itemVariants}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                    [ 01 ] {t('contact.letsConnect')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {t('contact.description')}
                  </p>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-6">
                    <span className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </span>
                    <span className="font-mono text-sm">{t('home.location')}</span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                    [ 02 ] {t('contact.directContact')}
                  </p>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-sm">{EMAIL}</span>
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <span className="text-xs text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                        {t('common.clickToCopy')}
                      </span>
                    )}
                  </button>
                </div>

                <div>
                  <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                    [ 03 ] {t('contact.socialLinks')}
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg ${social.bgColor} border ${social.borderColor} transition-all duration-300 hover:scale-105`}
                        aria-label={social.name}
                      >
                        <social.icon className={`w-5 h-5 ${social.iconColor}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
                  [ 04 ] // FORM
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sent}
                    className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      sent
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    }`}
                  >
                    {sent ? (
                      <>
                        <Check className="w-5 h-5" />
                        {t('contact.form.messageSent')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.sendMessage')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
