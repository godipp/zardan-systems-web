import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Layers, Network, Activity, TrendingUp } from 'lucide-react';

export const EnterpriseReadySection: React.FC = () => {
  const { t } = useTranslation();

  const items = t('home.enterpriseReady.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [Layers, Network, Activity, TrendingUp];

  return (
    <section className="relative bg-[#EEF1F6] py-12 sm:py-16 md:py-20">
      <Container padding="lg" maxWidth="1024px">
        <AnimatedSection animationType="fade" delay={100}>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base text-[#475569] mb-3 sm:mb-4 uppercase tracking-wide font-medium">
              {t('home.enterpriseReady.label')}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1E40] mb-4 sm:mb-6 leading-tight">
              {t('home.enterpriseReady.title')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            if (!Icon) return null;
            return (
              <AnimatedSection key={index} animationType="slide" direction="up" delay={200 + index * 100}>
                <div className="bg-[#F9FAFB] h-full rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-[#1E3A8A] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1E3A8A] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

