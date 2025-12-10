import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

export const CompaniesSection: React.FC = () => {
  const { t } = useTranslation();

  const companies = [
    { logo: '/assets/novalend-logo-color.svg' },
    { logo: '/assets/nexupl.svg' },
    { logo: '/assets/prolucrum.svg' },
  ];

  return (
    <section className="relative bg-[#EEF1F6] py-12 sm:py-16 md:py-20">
      <Container padding="lg" maxWidth="1024px">
        <AnimatedSection animationType="fade" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-8 sm:mb-10 md:mb-12 text-center">
            {t('home.companies.title')}
          </h2>
        </AnimatedSection>

        <AnimatedSection animationType="slide" direction="up" delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={t('ui.altText.companyLogo')}
                  className="max-w-[150px] max-h-[75px] min-h-[53px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

