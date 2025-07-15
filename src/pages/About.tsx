import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  GitBranch, 
  Palette, 
  Users, 
  Target, 
  TrendingUp,
  Zap,
  Globe,
  Smartphone,
  Server
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Laravel", "PHP", "Node.js", "Express", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Herramientas",
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "Figma", "VS Code", "Docker", "Postman"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const methodologies = [
    {
      title: "Metodologías Ágiles",
      description: "Experiencia en Scrum y Kanban, participando en sprints, daily standups y retrospectivas.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Prototipado UX/UI",
      description: "Creación de wireframes y prototipos en Figma, enfocado en la experiencia del usuario.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Control de Versiones",
      description: "Manejo avanzado de Git, colaboración en equipos y gestión de repositorios.",
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: "Desarrollo Colaborativo",
      description: "Trabajo en equipo, code reviews y comunicación efectiva con stakeholders.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const values = [
    {
      title: "Experiencia del Usuario",
      description: "Priorizo la usabilidad y accesibilidad en cada proyecto que desarrollo.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Mejora Continua",
      description: "Siempre aprendiendo nuevas tecnologías y mejores prácticas de desarrollo.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Adaptabilidad",
      description: "Capacidad para adaptarme rápidamente a nuevos desafíos tecnológicos.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Soluciones Completas",
      description: "Enfoque en construir aplicaciones robustas y escalables desde el diseño hasta el despliegue.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre <span className="gradient-text">Mí</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desarrollador Fullstack Jr. apasionado por crear soluciones digitales innovadoras 
              y experiencias de usuario excepcionales.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full shadow-lg overflow-hidden">
                  <img
                    src="/javier-perfil.svg"
                    alt="Javier Parra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Javier Parra
                </h2>
                <h3 className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                  Desarrollador Fullstack Jr.
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Con experiencia en Laravel, React, Angular y bases de datos SQL/NoSQL. 
                  He participado en proyectos reales construyendo soluciones completas, 
                  aplicando metodologías ágiles, prototipado en Figma y control de versiones con Git. 
                  Me destaco por mi enfoque en la experiencia del usuario, la mejora continua 
                  y la capacidad para adaptarme a nuevos desafíos tecnológicos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Tecnologías y Herramientas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stack tecnológico completo para el desarrollo de aplicaciones web modernas
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="card group hover:scale-105 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
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

      {/* Methodologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Metodologías y Procesos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enfoque profesional en el desarrollo de software con metodologías probadas
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {methodology.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {methodology.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {methodology.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Mi Enfoque</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Valores y principios que guían mi trabajo como desarrollador
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src="/javier-perfil.svg"
                    alt="Javier Parra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Estoy siempre abierto a nuevos proyectos y oportunidades de colaboración
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Contáctame
              </a>
              <a
                href="/proyectos"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold"
              >
                Ver Proyectos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 