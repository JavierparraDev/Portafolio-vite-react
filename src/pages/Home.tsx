import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-32 h-32 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
            >
              J
            </motion.div>

            {/* Título principal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
              >
                Hola, soy{' '}
                <span className="gradient-text">Javier Parra</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Desarrollador Full Stack apasionado por crear experiencias digitales únicas y funcionales
              </motion.p>
            </div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/proyectos"
                className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg"
              >
                <span>Ver Proyectos</span>
                <ArrowDown className="w-5 h-5" />
              </Link>
              
              <button className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg">
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </button>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center space-x-6 pt-8"
            >
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Sobre mí</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Soy un desarrollador apasionado con experiencia en tecnologías modernas del desarrollo web.
              Me especializo en crear aplicaciones web escalables y mantenibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                description: 'React, TypeScript, Tailwind CSS, y más',
                icon: '🎨'
              },
              {
                title: 'Backend',
                description: 'Node.js, Express, bases de datos SQL y NoSQL',
                icon: '⚙️'
              },
              {
                title: 'DevOps',
                description: 'Docker, CI/CD, despliegue en la nube',
                icon: '🚀'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 