import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
  MapPin
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
      transition: { duration: 0.5 }
    }
  };

  const skills = [
    {
      key: 'frontend',
      icon: <Code className="w-6 h-6" />,
      technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      key: 'backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "REST APIs", "PHP", "Laravel"],
      color: "from-green-500 to-emerald-500"
    },
    {
      key: 'database',
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      key: 'tools',
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ["Git", "Docker", "Figma", "Postman", "VS Code"],
      color: "from-orange-500 to-red-500"
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
    <div className="min-h-screen bg-gray-950">
      <Helmet>
        <title>{t('home.aboutTitle')} | Javier Parra - {t('hero.role')}</title>
        <meta name="description" content={t('home.aboutSubtitle')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('home.aboutTitle')}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('home.aboutSubtitle')}
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                    <img
                      src="/javier-perfil.svg"
                      alt="Javier Parra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {t('hero.title')}
                </h2>
                <p className="text-xl text-blue-400 font-medium mb-4">
                  {t('hero.role')}
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {t('home.aboutDescription')}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-gray-500">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {t('home.location')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t('home.availableForWork')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('skills.title')}
            </h2>
            <p className="text-gray-400">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.key}
                className="p-5 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t(`skills.${skill.key}`)}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md"
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

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('approach.title')}
            </h2>
            <p className="text-gray-400">
              {t('approach.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value) => (
              <motion.div
                key={value.key}
                className="p-5 bg-gray-800/30 border border-gray-800 rounded-xl hover:border-blue-500/30 transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`approach.${value.key}`)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(`approach.${value.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('contact.letsConnect')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('contact.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {t('contact.title')}
              </a>
              <a
                href="/proyectos"
                className="px-8 py-3.5 bg-gray-800 border border-gray-700 hover:border-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {t('projects.title')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
