import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  Globe,
  Zap,
  ChevronDown,
  Calendar,
  MapPin,
  Award,
  Sparkles
} from 'lucide-react';

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

  // Consume translations to build experiences array
  const experiences: Experience[] = (t('experience.jobs', { returnObjects: true }) as Experience[]) || [];

  const getIcon = (role: string) => {
    if (role.toLowerCase().includes('developer') || role.toLowerCase().includes('desarrollador'))
      return <Code className="w-6 h-6" />;
    if (role.toLowerCase().includes('analyst') || role.toLowerCase().includes('analista'))
      return <Database className="w-6 h-6" />;
    if (role.toLowerCase().includes('engineer') || role.toLowerCase().includes('ingeniero'))
      return <Zap className="w-6 h-6" />;
    return <Globe className="w-6 h-6" />;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('experience.title')}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Timeline Experience Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-8">
                    <motion.div
                      className={`relative w-8 h-8 rounded-full border-4 border-gray-900 bg-gradient-to-r ${getGradientColor(idx)} flex items-center justify-center cursor-pointer`}
                      whileHover={{ scale: 1.15 }}
                      animate={activeIndex === idx ? { scale: 1.2 } : { scale: 1 }}
                    >
                      {/* Pulse Effect when Active */}
                      {activeIndex === idx && (
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${getGradientColor(idx)} opacity-50`}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      )}
                      <div className="relative w-4 h-4 rounded-full bg-gray-950"></div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-1/2' : 'md:ml-auto md:pl-12 md:w-1/2'}`}
                    whileHover={{ x: idx % 2 === 0 ? 8 : -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.button
                      onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      className={`w-full group relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                        activeIndex === idx
                          ? `bg-gradient-to-br ${getGradientColor(idx)} bg-opacity-10 border-blue-500/50 shadow-2xl shadow-blue-500/20`
                          : 'bg-gray-900/40 border-gray-800 hover:border-gray-700 hover:bg-gray-900/60'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 translate-x-full group-hover:translate-x-0 transition-all duration-1000"></div>

                      <div className="relative p-6 md:p-8">
                        {/* Featured Badge */}
                        {exp.featured && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-3 flex items-center gap-2"
                          >
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Featured
                            </span>
                          </motion.div>
                        )}

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-lg text-gray-400 mb-3">{exp.company}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>

                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getGradientColor(idx)} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            {getIcon(exp.role)}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mt-4 leading-relaxed">{exp.description}</p>

                        {/* Expand Indicator */}
                        <motion.div
                          className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium"
                          animate={{ x: activeIndex === idx ? 4 : 0 }}
                        >
                          <span>
                                {activeIndex === idx
                                    ? t('checkExperience.hideDetails')
                                    : t('checkExperience.viewDetails')}
                                </span>
                          <motion.div
                            animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Expanded Content */}
                    <AnimatePresence mode="wait">
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -20 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -20 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-800 p-6 md:p-8 space-y-6 backdrop-blur-xl">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-blue-400" />
                                Key Achievements
                              </h4>
                              <div className="space-y-3">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-colors"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="border-t border-gray-800 pt-6">
                              <h4 className="text-lg font-bold text-white mb-4">Tech Stack</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {exp.tech.map((category, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                                  >
                                    <p className="text-sm font-semibold text-gray-400 mb-2">{category.label}</p>
                                    <div className="flex flex-wrap gap-2">
                                      {category.items.map((item, j) => (
                                        <span
                                          key={j}
                                          className="px-2.5 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-gray-600 transition-colors cursor-default"
                                        >
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    

    </div>
  );
};

export default Experience;
