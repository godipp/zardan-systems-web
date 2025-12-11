import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const MetricsSection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  const metrics = t('home.metrics.items', { returnObjects: true }) as Array<{
    value: string;
    description: string;
    company: string;
    link: string;
  }>;

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20">
      <Container padding="lg" maxWidth="1024px">
        <AnimatedSection animationType="fade" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-8 sm:mb-10 md:mb-12 text-center">
            {t('home.metrics.title')}
          </h2>
        </AnimatedSection>

        <AnimatedSection animationType="slide" direction="up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {metrics.map((metric, index) => {
              // Split description to highlight company name
              const descriptionParts = metric.description.split(metric.company);
              const beforeCompany = descriptionParts[0];
              const afterCompany = descriptionParts[1] || '';

              const metricLink = metric.link && metric.link !== '#' ? getLocalizedPath(metric.link) : null;

              const content = (
                <>
                  <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#0D1E40] mb-2 sm:mb-3">
                    {metric.value}
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-[10px] flex flex-col xs:text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed px-1">
                      {beforeCompany}
                      <span className="text-[#1E3A8A]">
                        {metric.company}
                      </span>
                      {afterCompany}
                    </p>
                  </div>
                </>
              );

              return (
                <div key={index} className="flex flex-col items-center text-center min-w-0">
                  {metricLink ? (
                    <Link
                      to={metricLink}
                      className="flex flex-col items-center text-center min-w-0 w-full transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

