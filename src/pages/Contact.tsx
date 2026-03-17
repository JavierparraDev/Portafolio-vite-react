import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Send, Check, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '+573001234567';
const EMAIL = 'javier00parra@gmail.com';

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
    icon: Linkedin,
    href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
    bgColor: 'bg-gray-800 hover:bg-green-600',
    borderColor: 'border-gray-700 hover:border-green-500',
    iconColor: 'text-gray-400 hover:text-white'
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Helmet>
        <title>{t('contact.title')} | Javier Parra - {t('hero.role')}</title>
        <meta name="description" content={t('contact.description')} />
      </Helmet>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.title').split(' ')[0]}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {t('contact.title').split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-10"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {t('contact.letsConnect')}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {t('contact.description')}
                  </p>
                  
                  <div className="flex items-center gap-3 text-gray-400 mb-6">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{t('home.location')}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                    {t('contact.directContact')}
                  </h4>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{EMAIL}</span>
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <span className="text-xs text-gray-500 group-hover:text-gray-400">{t('common.clickToCopy')}</span>
                    )}
                  </button>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-4">
                    {t('contact.socialLinks')}
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg ${social.bgColor} border ${social.borderColor} transition-all duration-300`}
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
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
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
