import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { SERVICES } from '@/constants';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const HomeServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <section className="section-spacing">
      <Container padding="lg">
        <AnimatedSection animationType="fade" delay={200}>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-sm md:text-base">
            {t('home.services.description')}
          </p>
        </AnimatedSection>
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-stretch"
          baseDelay={100}
          animationType="slide"
          direction="up"
        >
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={getLocalizedPath(service.path)}
              className="group flex flex-col h-full text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 active:scale-95"
            >
              <div className="mx-auto inline-flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 rounded-lg bg-muted mb-2 sm:mb-3 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-lg">
                {service.icon && (
                  <service.icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-primary transition-colors duration-300 group-hover:text-primary/80" strokeWidth={1.5} />
                )}
              </div>
              <h3 className="text-sm sm:text-sm md:text-lg font-semibold mb-1 sm:mb-2 md:mb-3 text-[#0D1E40] transition-colors duration-300 group-hover:text-primary">
                {t(`services.${service.id}.title`)}
              </h3>
              <p className="text-sm sm:text-sm md:text-sm text-muted-foreground leading-relaxed flex-1 transition-colors duration-300 group-hover:text-foreground/80">
                {t(`services.${service.id}.description`)}
              </p>
            </Link>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

