import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/constants';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'System Integration and Process Automation',
    provider: {
      '@type': 'Organization',
      name: 'Zardan Systems',
    },
    areaServed: ['EU', 'UK'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Integration Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title },
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Services | Zardan Systems"
        description="System integration, process automation, and data analytics services for enterprise organizations in finance, logistics, and manufacturing."
        schema={schema}
      />

      <Container className="py-12 sm:py-16" padding="lg">
        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0D1E40]">{t('services.title')}</h1>
            <p className="text-sm sm:text-base md:text-xl text-[#475569] mb-4 sm:mb-6">
            {t('services.subtitle')}
            </p>
        </div>
        <p className="text-sm sm:text-sm md:text-base text-[#4B5563] mb-6 sm:mb-8 md:mb-12">
          {t('services.description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} animationType="slide" direction="up" delay={index * 150}>
              <Card
                className="
                  group flex flex-col h-full shadow-md rounded-xl border border-[#1E3A8A]
                  bg-[#1E3A8A] text-white transition-all duration-300 ease-out
                  hover:bg-white hover:text-[#0D1E40] hover:shadow-lg hover:-translate-y-1
                "
              >
                <CardHeader className="flex-1 p-2.5 sm:p-3 md:p-6 transition-colors duration-300">
                  <CardTitle
                    className="
                      mb-1.5 sm:mb-2 md:mb-3 text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-white
                      group-hover:text-[#0D1E40] transition-colors duration-300
                    "
                  >
                    {t(`services.${service.id}.title`)}
                  </CardTitle>
                  <CardDescription
                    className="
                      text-sm sm:text-sm md:text-base leading-relaxed text-white/90
                      group-hover:text-[#4B5563] transition-colors duration-300
                    "
                  >
                    {t(`services.${service.id}.description`)}
                  </CardDescription>
                </CardHeader>

                <div className="px-2.5 sm:px-3 md:px-6 pb-2.5 sm:pb-3 md:pb-6 mt-auto">
                  <Link to={getLocalizedPath(service.path)}>
                    <Button
                      variant="outline"
                      className="
                        w-full rounded-md border border-white text-[#1E3A8A] bg-white
                        group-hover:border-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white
                        transition-all duration-300 hover:brightness-105
                        text-sm sm:text-sm py-2 sm:py-2.5
                      "
                    >
                      {t('services.learnMore')}
                      <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Services;
