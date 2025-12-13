import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export const CaseStudySection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20">
      <Container padding="lg" maxWidth="1024px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* LEFT COLUMN */}
          <div>
            <AnimatedSection animationType="fade" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-6 leading-tight">
                {t('home.caseStudy.title')}
              </h2>
            </AnimatedSection>

            <AnimatedSection animationType="slide" direction="up" delay={200}>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                  {t('home.caseStudy.problem.text1')} {t('home.caseStudy.problem.text2')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide" direction="up" delay={300}>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                  {t('home.caseStudy.solution.title')}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-[#475569]">
                  {(t('home.caseStudy.solution.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#1E3A8A] mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide" direction="up" delay={400}>
              <p className="text-base sm:text-lg font-semibold text-[#0D1E40] mb-6 sm:mb-8">
                {t('home.caseStudy.result')}
              </p>
            </AnimatedSection>

            <AnimatedSection animationType="scale" delay={500}>
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#3B82F6] font-semibold text-base sm:text-lg transition-colors group"
              >
                {t('home.caseStudy.cta')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="relative flex flex-col items-center justify-center group overflow-visible">
            <AnimatedSection animationType="fade" delay={600}>
              <img
                src="/assets/product/Block 4.webp"
                alt="Case study diagram"
                className="relative z-10 w-full select-none border-none shadow-none h-auto"
                style={{ maxWidth: '100%' }}
              />
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

