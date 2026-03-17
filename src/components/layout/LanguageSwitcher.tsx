import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';
  const langLabel = currentLang === 'en' ? 'ES' : 'EN';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{langLabel}</span>
    </button>
  );
};

export default LanguageSwitcher;
