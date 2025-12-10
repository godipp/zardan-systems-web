import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '@/locales/en/translation.json';
import uaTranslations from '@/locales/ua/translation.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ua: {
    translation: uaTranslations,
  },
};

// Get language from URL if available
const getLanguageFromUrl = (): string | undefined => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const match = path.match(/^\/(en|ua)/);
    return match ? match[1] : undefined;
  }
  return undefined;
};

// Initialize with URL language or fallback
const initialLanguage = getLanguageFromUrl() || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ua'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Sync language with URL on route changes
if (typeof window !== 'undefined') {
  const syncLanguageFromUrl = () => {
    const urlLang = getLanguageFromUrl();
    if (urlLang && urlLang !== i18n.language) {
      i18n.changeLanguage(urlLang);
    }
  };
  
  // Sync on initial load
  syncLanguageFromUrl();
  
  // Sync on navigation (if using React Router)
  window.addEventListener('popstate', syncLanguageFromUrl);
}

export default i18n;

