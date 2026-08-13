import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const Home = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
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

  const title = t('hero.title');
  const nameIndex = title.indexOf('Javier Parra');
  const namePart = nameIndex >= 0 ? title.slice(nameIndex, nameIndex + 'Javier Parra'.length) : '';
  const beforeName = nameIndex >= 0 ? title.slice(0, nameIndex) : title;

  const techStack = ['PHP', 'Python', 'JavaScript', 'SQL', 'Docker','git'];

  const skills = [
    {
      key: 'frontend',
      description: 'React, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'backend',
      description: 'PHP, Laravel, REST APIs',
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'devops',
      description: 'Docker, Git, Linux, n8n',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo title={t('seo.home.title')} description={t('seo.home.description')} path="/" />
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-center pt-16 pb-28">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3 mb-6"
            >
              <Terminal className="w-4 h-4" />
              {t('hero.eyebrow')}
            </motion.p>

            <motion.div variants={itemVariants} className="mx-auto mb-8 relative w-fit">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                <img
                  src="/javier-parra.webp"
                  alt="Javier Parra"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            >
              {beforeName}
              {namePart && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                  {namePart}
                </span>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-mono font-medium mb-6"
            >
              {t('hero.role')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-full font-mono dark:bg-gray-800/80 dark:border-gray-700 dark:text-gray-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mx-auto max-w-md w-full mb-12 text-left">
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 bg-gray-100/80 dark:bg-gray-800/60">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400">javier@portfolio: ~</span>
                </div>
                <div className="p-5 font-mono text-sm">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-blue-600 dark:text-blue-400">$</span>
                    <span className="text-gray-800 dark:text-gray-200">{t('hero.terminalCommand')}</span>
                    <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      {t('hero.terminalLive')}
                    </span>
                  </p>
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    {t('hero.terminalHint')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/proyectos"
                className="group relative px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  {t('hero.viewProjects')}
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/contacto"
                className="group px-8 py-3.5 bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-900 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:border-gray-600 dark:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t('hero.contactMe')}
              </Link>

              <a
                href="/cv-javierdev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-transparent border border-gray-300 hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:border-gray-700 dark:hover:border-gray-500 dark:text-gray-300 dark:hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('hero.downloadCV')}
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-12 font-mono text-xs text-gray-500 dark:text-gray-400"
            >
              <span>{t('home.location')}</span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span>{t('home.availableForWork')}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-8">
              <a
                href="https://github.com/JavierparraDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:border-blue-500/50 hover:bg-gray-200 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:border-blue-500/50 dark:hover:bg-gray-800 transition-all duration-300 group"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/javierparradev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:border-blue-500/50 hover:bg-gray-200 dark:bg-gray-800/80 dark:border-gray-700 dark:hover:border-blue-500/50 dark:hover:bg-gray-800 transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-gray-100 border border-gray-300 hover:border-blue-500/50 hover:bg-gray-200 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:border-blue-500/50 dark:hover:bg-gray-800 transition-all duration-300 group"
            aria-label={t('hero.scrollDown')}
          >
            <ArrowDown className="w-5 h-5 text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* About + Skills */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3 mb-6">
              <Terminal className="w-4 h-4" />
              {t('home.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t('home.aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('home.aboutDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 p-6"
              >
                <div className="absolute top-4 right-5 text-5xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg font-mono">
                    {t(`skills.${item.key}`)[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(`skills.${item.key}`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
