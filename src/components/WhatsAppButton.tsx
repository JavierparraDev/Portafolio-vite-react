import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const openChat = () => {
    const message = encodeURIComponent('Hola, me gustaría comunicarme con el desarrollador.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative max-w-xs rounded-2xl rounded-br-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg px-4 py-3 text-sm"
          >
            <button
              onClick={openChat}
              className="text-left"
            >
              Si clickeas te enviaremos a comunicarte con el desarrollador.
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 text-xs text-gray-600 dark:text-gray-200 hover:bg-gray-300"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
