import React from 'react';
import SEOHead from '@/components/SEOHead';
import { COMPANY_INFO } from '@/constants';
import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { CompaniesSection } from '@/components/sections/CompaniesSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { AdaptersSection } from '@/components/sections/AdaptersSection';
import { ScoringTimeSection } from '@/components/sections/ScoringTimeSection';
import { EnterpriseReadySection } from '@/components/sections/EnterpriseReadySection';
import { CTASection } from '@/components/sections/CTASection';

const Product: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ZIC - Zardan Integration Core',
    description: 'ZIC for MFIs. Recovers 20–35% of applications you lose due to timeouts. Reduces BKI timeouts by 30–50%. Eliminates adapter delays during peak hours.',
    brand: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
  };

  return (
    <>
      <SEOHead
        title="ZIC Product | Zardan Systems"
        description="ZIC for MFIs. Recovers 20–35% of applications you lose due to timeouts. Reduces BKI timeouts by 30–50%. Eliminates adapter delays during peak hours."
        schema={schema}
      />

      <HeroSection />
      <MetricsSection />
      <CompaniesSection />
      <CaseStudySection />
      <AdaptersSection />
      <ScoringTimeSection />
      <EnterpriseReadySection />
      <CTASection />
    </>
  );
};

export default Product;

