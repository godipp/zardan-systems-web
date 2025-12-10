import { useTranslation } from 'react-i18next';

/**
 * Hook to get localized paths for navigation
 * Ensures all paths include the current language prefix
 */
export const useLocalizedPath = () => {
  const { i18n } = useTranslation();

  const getLocalizedPath = (path: string): string => {
    const lang = i18n.language;
    const basePath = path === '/' ? '' : path;
    
    // If path already has a language prefix, replace it
    const pathWithoutLang = basePath.replace(/^\/(en|ua)/, '');
    
    return `/${lang}${pathWithoutLang === '' && path === '/' ? '' : pathWithoutLang}`;
  };

  return { getLocalizedPath, currentLang: i18n.language };
};

