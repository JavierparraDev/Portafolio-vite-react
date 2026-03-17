import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const techStack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'];

  const skills = [
    {
      key: 'frontend',
      description: 'React, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'backend',
      description: 'Node.js, APIs, PostgreSQL',
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'devops',
      description: 'Docker, CI/CD, Cloud',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Nuevo diseño con dark theme + accent */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Avatar con glow effect */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-10 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                <img
                  src="/javier-perfil.svg"
                  alt="Javier Parra"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Nombre */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              {t('hero.title')}
            </motion.h1>
            
            {/* Rol */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-400 font-medium mb-6"
            >
              {t('hero.role')}
            </motion.p>

            {/* What I do - Diferenciación */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 text-sm rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
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
                className="group px-8 py-3.5 bg-gray-800/80 border border-gray-700 hover:border-gray-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t('hero.contactMe')}
              </Link>
              
              <a
                href="/cv-personal-P.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('hero.downloadCV')}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 mt-12"
            >
              <a
                href="https://github.com/JavierparraDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/javierparradev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group"
            aria-label={t('hero.scrollDown')}
          >
            <ArrowDown className="w-5 h-5 text-gray-500 group-hover:text-blue-400 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('home.aboutTitle')}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {t(`skills.${item.key}`)[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t(`skills.${item.key}`)}
                </h3>
                <p className="text-gray-400 text-sm">
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
