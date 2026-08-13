import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Workflow,
  Store,
  Eye,
  Code,
  CheckCircle,
  ArrowRight,
  Layers,
  Github,
  ChevronDown,
  Terminal,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ImpactMetric {
  key: string;
  value: string;
}

interface CaseStudy {
  id: string;
  titleKey: string;
  subtitleKey: string;
  icon: React.ReactNode;
  gradient: string;
  glow: string;
  overviewKey: string;
  problemKey: string;
  solutionKey: string;
  roleKey: string;
  techStack: string[];
  badges?: string[];
  featured?: boolean;
  impact: ImpactMetric[];
  status: 'completed' | 'maintained';
}

const Projects = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const titleParts = t('projects.title').split(' ');
  const gradientTitle = titleParts.length > 1 ? titleParts.slice(1).join(' ') : '';

  const caseStudies: CaseStudy[] = [
    {
      id: 'ai-eye-analysis',
      titleKey: 'caseStudies.aiEyeAnalysis.title',
      subtitleKey: 'caseStudies.aiEyeAnalysis.subtitle',
      icon: <Eye className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      glow: 'from-purple-500/20 to-pink-500/20',
      overviewKey: 'caseStudies.aiEyeAnalysis.overview',
      problemKey: 'caseStudies.aiEyeAnalysis.problem',
      solutionKey: 'caseStudies.aiEyeAnalysis.solution',
      roleKey: 'caseStudies.aiEyeAnalysis.role',
      techStack: ['Python', 'YOLO', 'Deep Learning', 'Computer Vision'],
      badges: ['AI', 'Computer Vision', 'Deep Learning'],
      impact: [
        { key: 'caseStudies.aiEyeAnalysis.impact.realTimeAnalysis', value: 'Real-time' },
        { key: 'caseStudies.aiEyeAnalysis.impact.aiImplementation', value: '50K+' },
        { key: 'caseStudies.aiEyeAnalysis.impact.medicalSupport', value: 'Diagnosis' },
        { key: 'caseStudies.aiEyeAnalysis.impact.innovation', value: 'AI System' }
      ],
      status: 'completed'
    },
    {
      id: 'usco-digiturno',
      titleKey: 'caseStudies.uscoDigiturno.title',
      subtitleKey: 'caseStudies.uscoDigiturno.subtitle',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'from-blue-500/20 to-cyan-500/20',
      overviewKey: 'caseStudies.uscoDigiturno.overview',
      problemKey: 'caseStudies.uscoDigiturno.problem',
      solutionKey: 'caseStudies.uscoDigiturno.solution',
      roleKey: 'caseStudies.uscoDigiturno.role',
      techStack: ['TypeScript', 'Java', 'Spring Boot', 'MySQL', 'System Design'],
      badges: ['System Design', 'Backend'],
      impact: [
        { key: 'caseStudies.uscoDigiturno.impact.processImprovement', value: '+60%' },
        { key: 'caseStudies.uscoDigiturno.impact.dataVisibility', value: 'Real-time' },
        { key: 'caseStudies.uscoDigiturno.impact.operationalInsights', value: 'Analytics' }
      ],
      status: 'completed'
    },
    {
      id: 'business-automation',
      titleKey: 'caseStudies.businessAutomation.title',
      subtitleKey: 'caseStudies.businessAutomation.subtitle',
      icon: <Workflow className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      glow: 'from-green-500/20 to-emerald-500/20',
      overviewKey: 'caseStudies.businessAutomation.overview',
      problemKey: 'caseStudies.businessAutomation.problem',
      solutionKey: 'caseStudies.businessAutomation.solution',
      roleKey: 'caseStudies.businessAutomation.role',
      techStack: ['Laravel', 'PHP', 'REST APIs', 'n8n'],
      badges: ['Automation', 'APIs'],
      featured: true,
      impact: [
        { key: 'caseStudies.businessAutomation.impact.automation', value: 'Automated' },
        { key: 'caseStudies.businessAutomation.impact.integration', value: 'APIs REST' },
        { key: 'caseStudies.businessAutomation.impact.maintainability', value: 'Scalable' }
      ],
      status: 'maintained'
    },
    {
      id: 'shopify-management',
      titleKey: 'caseStudies.shopifyManagement.title',
      subtitleKey: 'caseStudies.shopifyManagement.subtitle',
      icon: <Store className="w-6 h-6" />,
      gradient: 'from-orange-500 to-amber-500',
      glow: 'from-orange-500/20 to-amber-500/20',
      overviewKey: 'caseStudies.shopifyManagement.overview',
      problemKey: 'caseStudies.shopifyManagement.problem',
      solutionKey: 'caseStudies.shopifyManagement.solution',
      roleKey: 'caseStudies.shopifyManagement.role',
      techStack: ['Shopify', 'WooCommerce', 'Liquid', 'SEO', 'Core Web Vitals'],
      badges: ['E-commerce', 'SEO', 'UX'],
      impact: [
        { key: 'caseStudies.shopifyManagement.impact.performance', value: 'CWV' },
        { key: 'caseStudies.shopifyManagement.impact.seo', value: 'SEO' },
        { key: 'caseStudies.shopifyManagement.impact.ecommerce', value: 'Stores' }
      ],
      status: 'completed'
    }
  ];

  const regularProjects = caseStudies.filter((p) => !p.featured);
  const featuredProject = caseStudies.find((p) => p.featured);

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

  const DetailBlocks = ({ project }: { project: CaseStudy }) => (
    <div className="pt-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-xl">
          <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            {t('projects.theProblem')}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {t(project.problemKey)}
          </p>
        </div>
        <div className="p-5 bg-green-500/5 border border-green-500/20 rounded-xl">
          <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            {t('projects.theSolution')}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {t(project.solutionKey)}
          </p>
        </div>
      </div>

      <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-xl">
        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2 font-mono">
          <Code className="w-4 h-4" />
          {t('projects.myRole')}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {t(project.roleKey)}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2 font-mono">
          <Layers className="w-4 h-4" />
          {t('projects.techStack')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2 font-mono">
          <CheckCircle className="w-4 h-4" />
          {t('projects.impact')}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.impact.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-100 border border-gray-200 rounded-xl text-center dark:bg-gray-800/50 dark:border-gray-700"
            >
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-1">
                {item.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {t(item.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
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
            {t('projects.eyebrow')}
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
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8"
          >
            {t('projects.subtitle')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-gray-500 dark:text-gray-400"
          >
            <span>
              [ {String(caseStudies.length).padStart(2, '0')} ] {t('projects.countLabel')}
            </span>
            <span>[ 01 ] {t('projects.featured')}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured project */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {featuredProject && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-100/90 to-white/80 dark:from-gray-900/80 dark:to-gray-950/70 backdrop-blur-xl"
            >
              <div className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-r ${featuredProject.glow} rounded-full blur-3xl pointer-events-none`}></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

              <div className="relative z-10 p-6 md:p-10">
                <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {t('projects.featured')}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-mono ${
                    featuredProject.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {featuredProject.status === 'completed' ? t('projects.completed') : t('projects.inProduction')}
                  </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
                  <div>
                    <motion.div variants={itemVariants} className="flex items-start gap-5 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${featuredProject.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                        {featuredProject.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {t(featuredProject.titleKey)}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {t(featuredProject.subtitleKey)}
                        </p>
                      </div>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-5">
                      {t(featuredProject.overviewKey)}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.badges?.map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-0.5 text-xs bg-gray-100 border border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 rounded-full font-mono"
                        >
                          {badge}
                        </span>
                      ))}
                    </motion.div>

                    <motion.button
                      variants={itemVariants}
                      onClick={() => setExpandedId(expandedId === featuredProject.id ? null : featuredProject.id)}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group"
                    >
                      {expandedId === featuredProject.id ? t('projects.hideCaseStudy') : t('projects.viewCaseStudy')}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${expandedId === featuredProject.id ? 'rotate-180' : ''}`}
                      />
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {featuredProject.impact.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-5 bg-white border border-gray-200 rounded-xl text-center dark:bg-gray-900/60 dark:border-gray-800"
                      >
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-1">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t(item.key)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  animate={expandedId === featuredProject.id ? 'visible' : 'hidden'}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={expandVariants}
                    className="border-t border-gray-200 dark:border-gray-800 mt-8"
                  >
                    <DetailBlocks project={featuredProject} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Regular projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {regularProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden group dark:bg-gray-900/50 dark:border-gray-800 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-r ${project.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="absolute top-4 right-5 text-6xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-blue-500/20 dark:group-hover:text-blue-500/20 transition-colors duration-500 select-none pointer-events-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium font-mono ${
                      project.status === 'completed'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status === 'completed' ? t('projects.completed') : t('projects.inProduction')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 text-[11px] bg-gray-100 border border-gray-200 text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {t(project.subtitleKey)}
                  </p>

                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium group/btn"
                  >
                    {expandedId === project.id ? t('projects.hideCaseStudy') : t('projects.viewCaseStudy')}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedId === project.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  initial="hidden"
                  animate={expandedId === project.id ? 'visible' : 'hidden'}
                  className="overflow-hidden"
                >
                  <motion.div
                    variants={expandVariants}
                    className="border-t border-gray-200 dark:border-gray-800 px-6"
                  >
                    <DetailBlocks project={project} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
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
                {t('projects.cta.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {t('projects.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {t('projects.cta.getInTouch')}
                </Link>
                <a
                  href="https://github.com/JavierparraDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  {t('projects.cta.viewGithub')}
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
