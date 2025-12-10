import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { COMPANY_INFO } from '@/constants';
import { HomeHeroSection } from '@/components/home/HomeHeroSection';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { HomeTrustCTASection } from '@/components/home/HomeTrustCTASection';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: 'https://zardan-systems.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: COMPANY_INFO.contact.email,
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEOHead
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        schema={schema}
      />

      <HomeHeroSection />
      <HomeServicesSection />
      <HomeTrustCTASection />
    </>
  );
};

export default Home;
