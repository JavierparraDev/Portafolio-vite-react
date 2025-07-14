import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Code,
  Database,
  Palette,
  Network,
  Server
} from 'lucide-react';

const Projects = () => {
  const [open, setOpen] = useState(false);
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

  // Experiencia Laboral
  const experiencia = {
    empresa: "Biomédica S.A.S",
    cargo: "Ingeniero de Software Jr.",
    periodo: "Abril 2024 – Noviembre 2024",
    tecnologias: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular", "Vue.js"] },
      { label: "Backend", items: ["PHP", "Laravel", "Node.js", "Python"] },
      { label: "Bases de Datos", items: ["MySQL", "PostgreSQL", "MongoDB"] },
      { label: "Control de versiones", items: ["Git", "GitHub"] },
      { label: "Herramientas", items: ["Postman", "Jira", "Trello", "N8n"] },
      { label: "Diseño y prototipado", items: ["Figma"] },
      { label: "Metodologías", items: ["Scrum", "Agile"] },
      { label: "DevOps básico", items: ["Automatización de tareas con scripts", "despliegue web", "backups"] }
    ],
    proyectos: [
      {
        title: "Automatización de Backups de Sistemas Contables",
        description: "Automatización de backups de sistemas contables mediante scripts personalizados.",
        icon: <Database className="w-8 h-8" />,
        features: [
          "Desarrollo de scripts personalizados para respaldos automáticos",
          "Validación y verificación de integridad de datos",
          "Programación de tareas automáticas"
        ],
        status: "Completado"
      },
      {
        title: "Infraestructura de Red Interna",
        description: "Instalación y organización de red interna con cableado estructurado.",
        icon: <Network className="w-8 h-8" />,
        features: [
          "Diseño y organización de cableado estructurado",
          "Configuración de red interna y segmentación",
          "Documentación de la infraestructura"
        ],
        status: "Completado"
      },
      {
        title: "Ciberseguridad Corporativa",
        description: "Implementación de políticas de ciberseguridad en la red corporativa.",
        icon: <Palette className="w-8 h-8" />,
        features: [
          "Definición e implementación de políticas de seguridad",
          "Configuración de firewalls y accesos",
          "Capacitación básica al personal"
        ],
        status: "Completado"
      },
      {
        title: "Sitios Web Institucionales",
        description: "Creación y mantenimiento de sitios web institucionales.",
        icon: <Code className="w-8 h-8" />,
        features: [
          "Desarrollo y mantenimiento de sitios web corporativos",
          "Optimización SEO y velocidad de carga",
          "Gestión de contenido y actualizaciones"
        ],
        status: "En Mantenimiento"
      },
      {
        title: "Prototipado y Desarrollo Web",
        description: "Diseño de prototipos interactivos en Figma y wireframes según necesidades del cliente. Desarrollo de sitios web dinámicos optimizados para SEO y velocidad de carga. Integración de APIs REST y despliegue de aplicaciones web completas.",
        icon: <Globe className="w-8 h-8" />,
        features: [
          "Prototipado en Figma y validación con el cliente",
          "Desarrollo frontend y backend integrado",
          "Despliegue y puesta en producción"
        ],
        status: "Completado"
      }
    ]
  };

  // Proyectos personales/locales
  const projects = [
    {
      id: 1,
      title: "Aplicación de Gestión de Inventario",
      category: "Desarrollo de Software",
      description: "Sistema web para gestión de inventario con interfaz intuitiva y reportes en tiempo real.",
      image: "/inventory-app.jpg", // Placeholder
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      features: [
        "Interfaz de usuario responsive y intuitiva",
        "Gestión de productos, categorías y proveedores",
        "Reportes y análisis de inventario en tiempo real"
      ],
      status: "En Desarrollo",
      type: "Proyecto Personal",
      icon: <Server className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 2,
      title: "Prototipos UX/UI en Figma",
      category: "Diseño de Experiencia",
      description: "Colección de prototipos y wireframes diseñados para diferentes tipos de aplicaciones y sitios web.",
      image: "/figma-prototypes.jpg", // Placeholder
      technologies: ["Figma", "Adobe XD", "Prototipado", "UX Research", "Wireframing"],
      features: [
        "Diseño de prototipos interactivos y wireframes",
        "Investigación de usuarios y testing de usabilidad",
        "Sistemas de diseño y guías de estilo"
      ],
      status: "En Progreso",
      type: "Proyecto Personal",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500"
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
              Mis <span className="gradient-text">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experiencia profesional y proyectos personales en desarrollo web, automatización, redes y diseño.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Experiencia Laboral (Accordion) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <button
              className="w-full flex flex-col md:flex-row md:items-center md:justify-between p-6 rounded-xl border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-800/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 mb-4 shadow-sm"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls="biomedica-details"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Experiencia Laboral</h2>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experiencia.empresa}</h3>
                <p className="text-gray-600 dark:text-gray-300">{experiencia.cargo} | {experiencia.periodo}</p>
              </div>
              <span className="mt-4 md:mt-0 text-primary-600 dark:text-primary-400 font-bold text-xl">
                {open ? '▲' : '▼'}
              </span>
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  id="biomedica-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {experiencia.tecnologias.map((tech, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{tech.label}</h4>
                        <ul className="flex flex-wrap gap-1">
                          {tech.items.map((item, i) => (
                            <li key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiencia.proyectos.map((proy, idx) => (
                      <div key={idx} className="card group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="h-16 flex items-center gap-4 mb-2">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                            {proy.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{proy.title}</h4>
                            <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 ml-1">{proy.status}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{proy.description}</p>
                        <ul className="list-disc pl-5 text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          {proy.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Proyectos personales/locales */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">Proyectos Personales y Locales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card group hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  variants={fadeInUp}
                >
                  <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/90 text-sm">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tecnologías utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                            +{project.technologies.length - 4} más
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Características principales:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completado"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : project.status === "En Desarrollo"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              ¿Te interesa alguno de mis proyectos?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Estoy disponible para colaborar en nuevos proyectos o discutir oportunidades de trabajo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Contáctame
              </a>
              <a
                href="/sobre-mi"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 text-lg font-semibold"
              >
                Conoce más sobre mí
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 