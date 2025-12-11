import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface CaseStudyContentSectionProps {
  titleKey: string;
  introKey?: string;
  problemsIntroKey?: string;
  problemsKey?: string;
  itemsKey?: string;
  textKey?: string;
  background?: 'white' | 'gray';
}

// Function to make ZIC clickable in text
const makeZICClickable = (text: string, productPath: string) => {
  const parts = text.split(/(ZIC)/gi);
  return parts.map((part, index) => {
    if (part.toUpperCase() === 'ZIC') {
      return (
        <Link
          key={index}
          to={productPath}
          className="text-[#1E3A8A] hover:text-[#3B82F6] font-semibold underline transition-colors"
        >
          {part}
        </Link>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const CaseStudyContentSection: React.FC<CaseStudyContentSectionProps> = ({
  titleKey,
  introKey,
  problemsIntroKey,
  problemsKey,
  itemsKey,
  textKey,
  background = 'white',
}) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const productPath = getLocalizedPath('/product');

  const bgClass = background === 'gray' ? 'bg-[#F9FAFB]' : 'bg-white';

  const problems = problemsKey ? (t(problemsKey, { returnObjects: true }) as string[]) : [];
  const items = itemsKey ? (t(itemsKey, { returnObjects: true }) as string[]) : [];

  let blockIndex = 0;
  const getNextBlock = () => {
    const direction = blockIndex % 2 === 0 ? 'left' : 'right';
    const delay = 100 + blockIndex * 100;
    blockIndex++;
    return { direction, delay };
  };

  const contentBlock = getNextBlock();

  return (
    <section className={`py-12 sm:py-16 md:py-20 relative overflow-hidden ${bgClass}`}>
      <Container padding="lg">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-4">
          <div className="space-y-4">
            {/* Single Block with All Content */}
            <AnimatedSection delay={contentBlock.delay} animationType="slide" direction={contentBlock.direction}>
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                  {t(titleKey)}
                </h2>
                
                {introKey && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {makeZICClickable(t(introKey), productPath)}
                  </p>
                )}

                {problemsIntroKey && t(problemsIntroKey) && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {makeZICClickable(t(problemsIntroKey), productPath)}
                  </p>
                )}

                {problems.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5 mb-3 sm:mb-4">
                    {problems.map((problem: string, idx: number) => (
                      <li key={idx} className="leading-relaxed">
                        {makeZICClickable(problem, productPath)}
                      </li>
                    ))}
                  </ul>
                )}

                {items.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5 mb-3 sm:mb-4">
                    {items.map((item: string, idx: number) => (
                      <li key={idx} className="leading-relaxed">
                        {makeZICClickable(item, productPath)}
                      </li>
                    ))}
                  </ul>
                )}

                {textKey && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {makeZICClickable(t(textKey), productPath)}
                  </p>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

