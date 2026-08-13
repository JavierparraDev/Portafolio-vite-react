import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Database,
  GitBranch,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Server,
  Mail,
  MapPin,
  Terminal,
  GraduationCap,
  Languages
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { t } = useTranslation();

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

  const skills = [
    {
      key: 'frontend',
      icon: <Code className="w-5 h-5" />,
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'backend',
      icon: <Server className="w-5 h-5" />,
      technologies: ['Laravel', 'PHP', 'Python', 'REST APIs', 'SQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      key: 'database',
      icon: <Database className="w-5 h-5" />,
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'tools',
      icon: <GitBranch className="w-5 h-5" />,
      technologies: ['Git', 'Docker', 'Figma', 'Postman', 'VS Code'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      key: 'userExperience',
      icon: <Zap className="w-5 h-5" />
    },
    {
      key: 'continuousLearning',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      key: 'adaptability',
      icon: <Target className="w-5 h-5" />
    },
    {
      key: 'endToEnd',
      icon: <Globe className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('home.aboutTitle')} | Javier Parra - {t('hero.role')}</title>
        <meta name="description" content={t('home.aboutSubtitle')} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center gap-3 mb-6"
          >
            <Terminal className="w-4 h-4" />
            {t('home.eyebrow')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              {t('home.aboutTitle')}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
          >
            {t('home.aboutSubtitle')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100/90 to-white/80 dark:from-gray-900/80 dark:to-gray-950/70 backdrop-blur-xl p-6 md:p-10"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                    <img
                      src="/javier-parra.png"
                      alt="Javier Parra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {t('hero.title')}
                </h2>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-mono font-medium mb-4">
                  {t('hero.role')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {t('home.aboutDescription')}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 font-mono">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {t('home.location')}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-700 dark:text-green-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {t('home.availableForWork')}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 font-mono">
                    <Mail className="w-4 h-4 text-blue-500" />
                    {t('contact.title')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3 mb-6">
              <Terminal className="w-4 h-4" />
              // STACK
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.key}
                className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 p-5"
                variants={itemVariants}
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-r ${skill.color} opacity-[0.06] rounded-full blur-2xl pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-5 text-4xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className={`relative w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {t(`skills.${skill.key}`)}
                </h3>
                <div className="relative flex flex-wrap gap-1.5">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3 mb-6">
              <Terminal className="w-4 h-4" />
              // PRINCIPIOS
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {t('approach.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('approach.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, idx) => (
              <motion.div
                key={value.key}
                className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-800/30 dark:border-gray-800 dark:hover:border-blue-500/30 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 p-5"
                variants={itemVariants}
              >
                <div className="absolute top-4 right-5 text-4xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="relative w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`approach.${value.key}`)}
                </h3>
                <p className="relative text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {t(`approach.${value.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education + Languages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="font-mono text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-3 mb-6">
              <Terminal className="w-4 h-4" />
              // PERFIL
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {t('education.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('languages.title')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 p-6"
            >
              <div className="absolute top-4 right-5 text-5xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none font-mono">
                01
              </div>
              <div className="relative mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  [ 01 ] {t('education.title')}
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {t('education.degree')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t('education.school')}
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-700 dark:text-green-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  {t('education.year')}
                </span>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 p-6"
            >
              <div className="absolute top-4 right-5 text-5xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none font-mono">
                02
              </div>
              <div className="relative mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Languages className="w-5 h-5" />
                </div>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  [ 02 ] {t('languages.title')}
                </p>
              </div>
              <div className="relative space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-500 font-mono text-xs flex-shrink-0">ES</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {t('languages.spanish')}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-500 font-mono text-xs flex-shrink-0">EN</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {t('languages.english')}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100/90 to-white/80 dark:from-gray-900/80 dark:to-gray-950/70 backdrop-blur-xl p-10 md:p-14"
          >
            <div className="absolute -top-20 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.letsConnect')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t('contact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {t('contact.title')}
                </Link>
                <Link
                  to="/proyectos"
                  className="px-8 py-3.5 bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  {t('projects.title')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
