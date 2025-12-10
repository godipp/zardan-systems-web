import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const HomeTrustCTASection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <>
      {/* Divider */}
      <div className="border-t border-border my-12"></div>

      {/* Trust Signal & CTA */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="text-center relative">
          <AnimatedSection animationType="fade" delay={100}>
            <p className="text-sm sm:text-sm md:text-sm text-muted-foreground mb-3 sm:mb-4 md:mb-8">
              {t('home.trustCta.trustText')}
            </p>
          </AnimatedSection>
          <AnimatedSection animationType="slide" direction="up" delay={200}>
            <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-2 md:mb-4 text-[#0D1E40]">
              {t('home.trustCta.title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection animationType="fade" delay={300}>
            <p className="text-sm sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('home.trustCta.description')}
            </p>
          </AnimatedSection>
          <AnimatedSection animationType="scale" delay={400}>
            <Link to={getLocalizedPath('/contact')}>
              <Button
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                {t('home.trustCta.button')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

