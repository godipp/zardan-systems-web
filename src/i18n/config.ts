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

// Detect language based on user location/browser settings
const detectLanguageFromLocation = (): string => {
  if (typeof window === 'undefined') return 'en';
  
  // Check browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const langLower = browserLang.toLowerCase();
  
  // If browser language is Ukrainian or Russian (common in Ukraine)
  if (langLower.startsWith('uk') || langLower.startsWith('ru')) {
    // Check timezone to better determine location
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Ukraine timezones
      if (timezone.includes('Kiev') || timezone.includes('Kyiv') || timezone === 'Europe/Kiev' || timezone === 'Europe/Kyiv') {
        return 'ua';
      }
      // If browser language is Ukrainian, assume Ukraine
      if (langLower.startsWith('uk')) {
        return 'ua';
      }
    } catch (e) {
      // If timezone detection fails, use browser language
      if (langLower.startsWith('uk')) {
        return 'ua';
      }
    }
  }
  
  // Default to English
  return 'en';
};

// Get language from localStorage if available
const getLanguageFromStorage = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('i18nextLng');
  }
  return null;
};

// Initialize with URL language, localStorage, or location-based detection
const urlLang = getLanguageFromUrl();
const storedLang = getLanguageFromStorage();
const initialLanguage = urlLang || storedLang || detectLanguageFromLocation();

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

