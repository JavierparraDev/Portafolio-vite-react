import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Shield,
  HardDrive,
  CheckCircle,
  ArrowRight,
  Layers,
  Github
} from 'lucide-react';

interface CaseStudy {
  id: string;
  titleKey: string;
  subtitleKey: string;
  icon: React.ReactNode;
  iconColor: string;
  overviewKey: string;
  problemKey: string;
  solutionKey: string;
  roleKey: string;
  techStack: string[];
  impact: { metricKey: string; value: string }[];
  status: 'completed' | 'maintained';
}

const Projects = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const caseStudies: CaseStudy[] = [
    {
      id: 'web-development',
      titleKey: 'projects.caseStudies.webDevelopment.title',
      subtitleKey: 'projects.caseStudies.webDevelopment.subtitle',
      icon: <Globe className="w-7 h-7" />,
      iconColor: 'from-blue-500 to-cyan-500',
      overviewKey: 'projects.caseStudies.webDevelopment.overview',
      problemKey: 'projects.caseStudies.webDevelopment.problem',
      solutionKey: 'projects.caseStudies.webDevelopment.solution',
      roleKey: 'projects.caseStudies.webDevelopment.role',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Figma', 'Docker'],
      impact: [
        { metricKey: 'projects.caseStudies.webDevelopment.impact.pageLoadTime', value: '< 2s' },
        { metricKey: 'projects.caseStudies.webDevelopment.impact.seoScore', value: '95+' },
        { metricKey: 'projects.caseStudies.webDevelopment.impact.clientSatisfaction', value: '100%' }
      ],
      status: 'maintained'
    },
    {
      id: 'backup-automation',
      titleKey: 'projects.caseStudies.backupAutomation.title',
      subtitleKey: 'projects.caseStudies.backupAutomation.subtitle',
      icon: <HardDrive className="w-7 h-7" />,
      iconColor: 'from-green-500 to-emerald-500',
      overviewKey: 'projects.caseStudies.backupAutomation.overview',
      problemKey: 'projects.caseStudies.backupAutomation.problem',
      solutionKey: 'projects.caseStudies.backupAutomation.solution',
      roleKey: 'projects.caseStudies.backupAutomation.role',
      techStack: ['PowerShell', 'Bash', 'PostgreSQL', 'Windows Server'],
      impact: [
        { metricKey: 'projects.caseStudies.backupAutomation.impact.backupTime', value: '85% reduction' },
        { metricKey: 'projects.caseStudies.backupAutomation.impact.dataVerification', value: '100% automated' },
        { metricKey: 'projects.caseStudies.backupAutomation.impact.recoveryTime', value: '< 15 min' }
      ],
      status: 'completed'
    },
    {
      id: 'security-implementation',
      titleKey: 'projects.caseStudies.securityImplementation.title',
      subtitleKey: 'projects.caseStudies.securityImplementation.subtitle',
      icon: <Shield className="w-7 h-7" />,
      iconColor: 'from-purple-500 to-pink-500',
      overviewKey: 'projects.caseStudies.securityImplementation.overview',
      problemKey: 'projects.caseStudies.securityImplementation.problem',
      solutionKey: 'projects.caseStudies.securityImplementation.solution',
      roleKey: 'projects.caseStudies.securityImplementation.role',
      techStack: ['Network Security', 'Firewall', 'Access Control', 'Compliance'],
      impact: [
        { metricKey: 'projects.caseStudies.securityImplementation.impact.securityIncidents', value: '0 post-implementation' },
        { metricKey: 'projects.caseStudies.securityImplementation.impact.policyCompliance', value: '100%' },
        { metricKey: 'projects.caseStudies.securityImplementation.impact.employeeTraining', value: '50+ trained' }
      ],
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
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
            {t('projects.title').split(' ')[0]}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {t('projects.title').split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {caseStudies.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="w-full p-6 md:p-8 flex items-start gap-6 text-left"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.iconColor} flex items-center justify-center text-white flex-shrink-0`}>
                    {project.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {t(project.titleKey)}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status === 'completed' ? t('projects.completed') : t('projects.inProduction')}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{t(project.subtitleKey)}</p>
                    
                    <p className={`text-gray-500 text-sm leading-relaxed ${expandedId === project.id ? '' : 'line-clamp-2'}`}>
                      {t(project.overviewKey)}
                    </p>
                  </div>

                  <ArrowRight 
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 mt-2 transition-transform duration-300 ${
                      expandedId === project.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 md:px-8 pb-8 border-t border-gray-800"
                  >
                    <div className="pt-6 space-y-8">
                      {/* Problem & Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                          <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            {t('projects.theProblem')}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {t(project.problemKey)}
                          </p>
                        </div>
                        <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
                          <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            {t('projects.theSolution')}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {t(project.solutionKey)}
                          </p>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                        <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          {t('projects.myRole')}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {t(project.roleKey)}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                          <Layers className="w-4 h-4" />
                          {t('projects.techStack')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {t('projects.impact')}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {project.impact.map((item, idx) => (
                            <div 
                              key={idx}
                              className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-center"
                            >
                              <div className="text-2xl font-bold text-white mb-1">
                                {item.value}
                              </div>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">
                                {t(item.metricKey)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('projects.cta.title')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('projects.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {t('projects.cta.getInTouch')}
              </a>
              <a
                href="https://github.com/JavierparraDev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-gray-800 border border-gray-700 hover:border-gray-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                {t('projects.cta.viewGithub')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
