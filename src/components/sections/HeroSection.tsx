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

          {/* RIGHT SECTION - Light Background with UI Mockups */}
          <div className="flex items-center justify-center px-4 py-8 lg:py-12 relative overflow-hidden">
            {/* Overlapping UI Cards/Mockups */}
            <div className="relative w-full max-w-2xl h-full flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              {/* Card 1 - Top Left (partially visible) - Hidden on very small screens */}
              <div className="hidden sm:block absolute top-0 left-0 w-56 sm:w-64 h-72 sm:h-80 bg-white rounded-lg shadow-xl transform rotate-[-3deg] z-10 border border-gray-200 opacity-90">
                <div className="p-4 h-full flex flex-col">
                  <div className="h-8 bg-gray-100 rounded mb-3"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Center (main) */}
              <div className="relative bg-white rounded-lg shadow-2xl p-4 sm:p-6 z-20 border border-gray-200 max-w-md w-full mx-auto">
                <div className="space-y-4">
                  <div className="h-6 bg-[#1E3A8A] rounded w-3/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded"></div>
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Bottom Left - Hidden on very small screens */}
              <div className="hidden sm:block absolute bottom-0 left-4 sm:left-8 w-48 sm:w-56 h-40 sm:h-48 bg-white rounded-lg shadow-xl transform rotate-[2deg] z-10 border border-gray-200 opacity-90">
                <div className="p-4 h-full flex flex-col">
                  <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
                  <div className="flex-1 flex items-end space-x-2">
                    <div className="h-16 bg-blue-200 rounded w-1/3"></div>
                    <div className="h-20 bg-indigo-200 rounded w-1/3"></div>
                    <div className="h-12 bg-purple-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
              
              {/* Insight Bubble - Top Right */}
              <div className="absolute top-8 right-4 bg-[#1E3A8A] text-white rounded-lg p-4 shadow-lg z-30 max-w-xs hidden sm:block">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5"></div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    "Integration success rate increased by 95%"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

