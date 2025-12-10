import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const CTASection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <section className="relative bg-white">
      <Container padding="lg" maxWidth="1024px">
        <div className="py-12 sm:py-16 md:py-20 text-center">
          <AnimatedSection animationType="fade" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-6 leading-tight">
              {t('home.cta.title')}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('home.cta.description')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale" delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to={getLocalizedPath('/contact')}>
                <Button
                  size="lg"
                  className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  {t('home.cta.buttonTechnical')}
                </Button>
              </Link>
              <Link to={getLocalizedPath('/contact')}>
                <Button
                  size="lg"
                  className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  {t('home.cta.buttonPilot')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

