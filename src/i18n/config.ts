import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import es from '../locales/es.json';

const resources = {
  en: { translation: en },
  es: { translation: es }
};

const applyDocumentLang = (lang: string) => {
  const normalized = lang.startsWith('es') ? 'es' : lang.startsWith('en') ? 'en' : 'es';
  document.documentElement.lang = normalized;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language'
    }
  });

i18n.on('languageChanged', applyDocumentLang);
applyDocumentLang(i18n.language);

export default i18n;
