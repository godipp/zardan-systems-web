import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import logo from '/assets/logo.svg';

export const HomeHeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-[#EEF1F6] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background/95"></div>

      <Container className="relative" padding="lg">
        <div
          className={`flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 transform transition-all duration-1000 ease-out ${
            showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left block — text */}
          <div className="max-w-3xl text-center md:text-left lg:text-left">
            <AnimatedSection animationType="slide" direction="up" delay={200} duration={500}>
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-6 tracking-tight text-[#0D1E40] leading-tight">
                {t('ui.homeHero.title')}
              </h1>
            </AnimatedSection>
            <AnimatedSection animationType="slide" direction="up" delay={400} duration={500}>
              <p className="text-sm sm:text-sm md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-8 text-foreground/90 leading-relaxed">
                {t('ui.homeHero.subtitle')}
              </p>
            </AnimatedSection>
            <AnimatedSection animationType="scale" delay={600} duration={500}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  {t('ui.homeHero.ctaButton')}
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          {/* Right block — logo */}
          <AnimatedSection animationType="scale" delay={300} duration={500}>
            <div className="flex flex-col items-center justify-center -mt-1 sm:-mt-2 md:-mt-4 lg:-mt-6 space-y-2 sm:space-y-3 md:space-y-6 lg:space-y-8">
              <img
                src={logo}
                alt={t('ui.homeHero.logoAlt')}
                className="w-[120px] sm:w-[180px] md:min-w-[250px] lg:min-w-[300px] h-auto object-contain transform transition-transform duration-300"
              />
              <span className="w-56 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1E40] tracking-wide leading-none">
                {t('ui.navigation.companyName')}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
    </section>
  );
};

