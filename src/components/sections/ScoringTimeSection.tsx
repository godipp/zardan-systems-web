import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { Link } from 'react-router-dom';

export const ScoringTimeSection: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = t('home.scoringTime.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <>
      <section className="relative bg-white py-12 sm:py-16 md:py-20">
        <Container padding="lg" maxWidth="1024px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* LEFT COLUMN */}
            <div>
              <AnimatedSection animationType="fade" delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-6 leading-tight">
                  {t('home.scoringTime.title')}
                </h2>
              </AnimatedSection>

              <AnimatedSection animationType="slide" direction="up" delay={200}>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6 sm:mb-8">
                  {t('home.scoringTime.subtitle')}
                </p>
              </AnimatedSection>

              <AnimatedSection animationType="slide" direction="up" delay={300}>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6 sm:mb-8">
                  {t('home.scoringTime.intro')}
                </p>
              </AnimatedSection>

              <AnimatedSection animationType="slide" direction="up" delay={400}>
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                    {t('home.scoringTime.sectionTitle')}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[#475569]">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#1E3A8A] mr-3 mt-1">•</span>
                        <span>
                          <strong>{item.title}</strong> — {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="slide" direction="up" delay={500}>
                <p className="text-base sm:text-lg font-semibold text-[#0D1E40] mb-6 sm:mb-8">
                  {t('home.scoringTime.result')}
                </p>
              </AnimatedSection>

              <AnimatedSection animationType="scale" delay={600}>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-transparent hover:bg-transparent text-[#1E3A8A] hover:text-[#3B82F6] font-semibold text-base sm:text-lg p-0 h-auto underline-offset-4 hover:underline"
                >
                  {t('home.scoringTime.cta')}
                </Button>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN - Charts */}
            <div className="relative flex flex-col items-center justify-center group overflow-visible">
              <AnimatedSection animationType="fade" delay={700}>
                <img
                  src="/assets/product/Block 6.webp"
                  alt="Scoring time charts"
                  className="relative z-10 w-full select-none border-none shadow-none h-auto"
                  style={{ maxWidth: '100%' }}
                />
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('home.scoringTime.cta')}</DialogTitle>
            <DialogDescription>
              {t('home.adapters.modalDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <Link to={getLocalizedPath('/contact')} onClick={() => setIsModalOpen(false)}>
              <Button className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white">
                {t('home.hero.ctaTechnical')}
              </Button>
            </Link>
            <Link to={getLocalizedPath('/contact')} onClick={() => setIsModalOpen(false)}>
              <Button className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white">
                {t('home.hero.ctaPilot')}
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

