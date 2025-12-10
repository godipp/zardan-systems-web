import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEOProps } from '@/types';

export const useSEO = ({ title, description, schema }: SEOProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = title;

    // Helper function to set meta tags
    const setMeta = (selector: string, attr: string, value: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (attr === 'name') {
          tag.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        } else if (attr === 'property') {
          tag.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        } else if (attr === 'http-equiv') {
          tag.setAttribute('http-equiv', selector.replace('meta[http-equiv="', '').replace('"]', ''));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    // Basic meta tags
    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[name="keywords"]', 'name', 'enterprise integration, process automation, AI integration, system integration, business automation, data analytics, ERP integration, CRM integration, UK, EU');
    setMeta('meta[name="author"]', 'name', 'Zardan Systems');
    setMeta('meta[name="robots"]', 'name', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('meta[name="googlebot"]', 'name', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('meta[name="bingbot"]', 'name', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Language and locale
    const lang = i18n.language;
    const locale = lang === 'ua' ? 'uk_UA' : 'en_GB';
    const languageName = lang === 'ua' ? 'Ukrainian' : 'English';
    
    setMeta('meta[http-equiv="content-language"]', 'http-equiv', lang);
    setMeta('meta[name="language"]', 'name', languageName);
    setMeta('meta[name="geo.region"]', 'name', 'GB');
    setMeta('meta[name="geo.country"]', 'name', 'United Kingdom');
    
    // Update html lang attribute
    document.documentElement.lang = lang;

    // Open Graph tags
    setMeta('meta[property="og:type"]', 'property', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'Zardan Systems');
    setMeta('meta[property="og:title"]', 'property', title);
    setMeta('meta[property="og:description"]', 'property', description);
    setMeta('meta[property="og:url"]', 'property', window.location.href);
    setMeta('meta[property="og:image"]', 'property', 'https://www.zardansystems.com/assets/og-banner.webp');
    setMeta('meta[property="og:image:width"]', 'property', '1200');
    setMeta('meta[property="og:image:height"]', 'property', '630');
    setMeta('meta[property="og:image:alt"]', 'property', 'Zardan Systems - Enterprise Integration & Automation');
    setMeta('meta[property="og:locale"]', 'property', locale);

    // Twitter Card tags
    setMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    setMeta('meta[name="twitter:site"]', 'name', '@ZardanSystems');
    setMeta('meta[name="twitter:creator"]', 'name', '@ZardanSystems');
    setMeta('meta[name="twitter:title"]', 'name', title);
    setMeta('meta[name="twitter:description"]', 'name', description);
    setMeta('meta[name="twitter:image"]', 'name', 'https://www.zardansystems.com/assets/og-banner.webp');
    setMeta('meta[name="twitter:image:alt"]', 'name', 'Zardan Systems - Enterprise Integration & Automation');

    // Additional SEO meta tags
    setMeta('meta[name="theme-color"]', 'name', '#0D1E40');
    setMeta('meta[name="msapplication-TileColor"]', 'name', '#0D1E40');
    setMeta('meta[name="apple-mobile-web-app-title"]', 'name', 'Zardan Systems');
    setMeta('meta[name="application-name"]', 'name', 'Zardan Systems');

    // Schema.org structured data
    if (schema) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => script.remove();
    }
    
    return undefined;
  }, [title, description, schema, i18n.language]);
};
