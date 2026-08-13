import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Database,
  Globe,
  Zap,
  ChevronDown,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  Terminal,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import Seo from '../components/Seo';

interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  featured?: boolean;
  description: string;
  achievements: string[];
  tech: { label: string; items: string[] }[];
}

const Experience = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const experiences: Experience[] = useMemo(
    () => (t('experience.jobs', { returnObjects: true }) as Experience[]) || [],
    [t]
  );

  const getIcon = (role: string) => {
    if (role.toLowerCase().includes('developer') || role.toLowerCase().includes('desarrollador'))
      return <Code className="w-5 h-5" />;
    if (role.toLowerCase().includes('analyst') || role.toLowerCase().includes('analista'))
      return <Database className="w-5 h-5" />;
    if (role.toLowerCase().includes('engineer') || role.toLowerCase().includes('ingeniero'))
      return <Zap className="w-5 h-5" />;
    if (role.toLowerCase().includes('teacher') || role.toLowerCase().includes('docente'))
      return <Briefcase className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  const getGradientColor = (index: number): string => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500'
    ];
    return gradients[index % gradients.length];
  };

  const stats = useMemo(() => {
    const active = experiences.filter(
      (exp) => exp.duration === 'Actualidad' || exp.duration === 'Present'
    ).length;
    const locations = new Set(experiences.map((exp) => exp.location)).size;
    return { roles: experiences.length, active, locations };
  }, [experiences]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
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

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.35, ease: 'easeInOut' as const }
    }
  };

  return (
    <div className="min-h-screen">
      <Seo title={t('seo.experience.title')} description={t('seo.experience.description')} path="/experiencia" />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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
            {t('experience.eyebrow')}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              {t('experience.title')}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
          >
            {t('experience.subtitle')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-10 gap-y-4"
          >
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-mono">
                {String(stats.roles).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono">
                {t('experience.statsRoles')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-mono">
                {String(stats.active).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono">
                {t('experience.statsActive')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-mono">
                {String(stats.locations).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-mono">
                {t('experience.statsLocations')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <motion.div key={idx} variants={itemVariants} className="relative">
                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-9 z-10">
                      <motion.div
                        className={`relative w-10 h-10 rounded-full border-4 border-gray-50 dark:border-gray-950 bg-gradient-to-r ${getGradientColor(idx)} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        animate={isOpen ? { scale: 1.1 } : { scale: 1 }}
                      >
                        {isOpen && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGradientColor(idx)} opacity-40`}
                            animate={{ scale: [1, 1.6, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                        <span className="relative text-[10px] font-bold text-white font-mono">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </motion.div>
                    </div>

                    {/* Card */}
                    <motion.div
                      className={`ml-14 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-[calc(50%-28px)]' : 'md:ml-auto md:pl-12 md:w-[calc(50%-28px)]'}`}
                      whileHover={{ x: idx % 2 === 0 ? 6 : -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    >
                      <div
                        className={`relative group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                          isOpen
                            ? 'bg-white border-blue-500/50 shadow-2xl shadow-blue-500/10 dark:bg-gray-900/80 dark:border-blue-500/50'
                            : 'bg-white/80 border-gray-200 hover:border-gray-300 dark:bg-gray-900/40 dark:border-gray-800 dark:hover:border-gray-700'
                        }`}
                      >
                        <div className={`absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-r ${getGradientColor(idx)} opacity-[0.06] rounded-full blur-3xl pointer-events-none`}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-full group-hover:translate-x-0 transition-all duration-1000 pointer-events-none"></div>

                        <div className="relative p-6 md:p-8">
                          {exp.featured && (
                            <span className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                              <Sparkles className="w-3 h-3" />
                              {t('experience.featured')}
                            </span>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 text-left">
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {exp.role}
                              </h3>
                              <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                                {exp.company}
                              </p>
                              <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 font-mono">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4" />
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getGradientColor(idx)} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              {getIcon(exp.role)}
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <button
                            onClick={() => setActiveIndex(isOpen ? null : idx)}
                            className="mt-5 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium"
                          >
                            {isOpen ? t('checkExperience.hideDetails') : t('checkExperience.viewDetails')}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                        </div>

                        <motion.div
                          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                          initial="hidden"
                          animate={isOpen ? 'visible' : 'hidden'}
                          className="overflow-hidden"
                        >
                          <motion.div
                            variants={expandVariants}
                            className="border-t border-gray-200 dark:border-gray-800 px-6 md:px-8"
                          >
                            <div className="pt-6 pb-8 space-y-6">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2 font-mono uppercase tracking-wide">
                                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  {t('experience.keyAchievements')}
                                </h4>
                                <div className="space-y-3">
                                  {exp.achievements.map((achievement, i) => (
                                    <div
                                      key={i}
                                      className="flex items-start gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-colors"
                                    >
                                      <span className="text-blue-500 font-mono text-xs mt-0.5 flex-shrink-0">
                                        {String(i + 1).padStart(2, '0')}
                                      </span>
                                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                        {achievement}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 font-mono uppercase tracking-wide">
                                  {t('experience.techStack')}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {exp.tech.map((category, i) => (
                                    <div
                                      key={i}
                                      className="p-4 bg-gray-100 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-700"
                                    >
                                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                                        {category.label}
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {category.items.map((item, j) => (
                                          <span
                                            key={j}
                                            className="px-2.5 py-1 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 hover:border-gray-300 transition-colors cursor-default dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
                                          >
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
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
                {t('experience.cta.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t('experience.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {t('experience.cta.getInTouch')}
                </Link>
                <Link
                  to="/proyectos"
                  className="px-8 py-3.5 bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t('experience.cta.viewProjects')}
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
