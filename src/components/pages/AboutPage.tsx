import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { AboutScalePresence } from '@/components/about/AboutScalePresence';
import { AboutSection } from '@/components/about/AboutSection';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={`${t('about.title')} | Zardan Systems`}
        description="Founded in 2018, Zardan Systems provides enterprise integration and automation solutions trusted by European finance, logistics, and manufacturing clients."
      />

      <div className="py-12 sm:py-16 md:py-20">
        <Container padding="lg">
          <PageHeader
            title={t('about.title')}
            description={t('about.headerDescription')}
          />

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-4 sm:p-6 md:p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[6px] bg-[#1E40AF] rounded-l-3xl"></div>

            <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
              <AboutScalePresence />
              <AboutSection titleKey="about.originTransformation.title" paragraphs={['p1', 'p2', 'p3', 'p4']} />
              <AboutSection titleKey="about.capability.title" paragraphs={['p1', 'p2', 'p3']} />
              <AboutSection titleKey="about.operatingPrinciples.title" paragraphs={['p1', 'p2', 'p3']} />
              <AboutSection titleKey="about.serviceRegions.title" paragraphs={['p1', 'p2']} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

