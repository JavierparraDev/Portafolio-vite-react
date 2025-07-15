import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '+573001234567'; // Número aleatorio colombiano

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/JavierparraDev',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/javierparradev/',
    color: 'hover:text-blue-600'
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
    color: 'hover:text-green-500'
  },
  {
    name: 'Email',
    icon: Mail,
    href: '', // No redirige
    color: 'hover:text-red-500',
    placeholder: 'javier00parra@gmail.com'
  }
];

const EMAIL = 'javier00parra@gmail.com';

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  const copiarCorreo = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary-600 dark:text-primary-400">Contacto</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          ¿Tienes una idea, proyecto o simplemente quieres saludar? ¡Escríbeme!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-200"
              disabled={enviado}
            >
              {enviado ? '¡Mensaje enviado!' : 'Enviar mensaje'}
            </button>
          </form>
          {/* Información de contacto */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-400">Javier Parra</h2>
              <p className="text-gray-600 dark:text-gray-300">Desarrollador Fullstack Jr.</p>
              <button
                onClick={copiarCorreo}
                className="block mt-2 text-primary-600 dark:text-primary-400 font-medium hover:underline focus:outline-none"
                title="Copiar correo al portapapeles"
              >
                {EMAIL}
              </button>
              {copiado && <span className="block text-green-600 dark:text-green-400 text-xs mt-1">¡Correo copiado!</span>}
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                social.name === 'Email' ? (
                  <button
                    key={social.name}
                    onClick={copiarCorreo}
                    className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                    title="Copiar correo al portapapeles"
                  >
                    <social.icon className="w-6 h-6" />
                  </button>
                ) : (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'WhatsApp' ? '_blank' : '_blank'}
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 