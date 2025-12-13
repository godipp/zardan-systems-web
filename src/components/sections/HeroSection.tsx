import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-[#EEF1F6]">
      <Container padding="md" maxWidth="1024px">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center px-4 py-12 lg:py-20">
            <AnimatedSection animationType="fade" delay={100}>
              <p className="text-sm sm:text-base text-[#475569] mb-4 uppercase tracking-wide font-medium">
                {t('home.hero.label')}
              </p>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide" direction="up" delay={200}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#0D1E40]">
                {t('home.hero.title')}
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide" direction="up" delay={300}>
              <ul className="space-y-3 sm:space-y-4 mb-8 text-base sm:text-lg text-[#475569]">
                {(t('home.hero.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#1E3A8A] mr-3 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animationType="scale" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={getLocalizedPath('/contact')}>
                  <Button
                    size="lg"
                    className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  >
                    {t('home.hero.ctaTechnical')}
                  </Button>
                </Link>
                <Link to={getLocalizedPath('/contact')}>
                  <Button
                    size="lg"
                    className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  >
                    {t('home.hero.ctaPilot')}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT SECTION - Image */}
          <div className="flex items-center justify-center px-4 py-8 lg:py-12 relative overflow-hidden">
            <AnimatedSection animationType="fade" delay={500}>
              <img
                src="/assets/product/Block 1.webp"
                alt="ZIC Product Hero"
                className="w-full h-auto object-contain"
                style={{ maxWidth: '100%' }}
              />
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

