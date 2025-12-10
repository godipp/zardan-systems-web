import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
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

  return (
    <section className={`max-w-[1024px] mx-auto py-16 sm:py-20 md:py-24 ${bgClass}`}>
      <Container padding="lg">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1E40] mb-6 leading-tight">
            {t(titleKey)}
          </h2>
          <div className="prose prose-lg max-w-none text-[#475569] leading-relaxed space-y-6">
            {introKey && (
              <p className="text-lg">
                {makeZICClickable(t(introKey), productPath)}
              </p>
            )}
            {problemsIntroKey && t(problemsIntroKey) && (
              <p className="text-lg">
                {makeZICClickable(t(problemsIntroKey), productPath)}
              </p>
            )}
            {problemsKey && (
              <>
                {(t(problemsKey, { returnObjects: true }) as string[]).map((problem: string, idx: number) => (
                  <p key={idx} className="text-lg">
                    {makeZICClickable(problem, productPath)}
                  </p>
                ))}
              </>
            )}
            {itemsKey && (
              <>
                {(t(itemsKey, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <p key={idx} className="text-lg">
                    {makeZICClickable(item, productPath)}
                  </p>
                ))}
              </>
            )}
            {textKey && (
              <p className="text-lg">
                {makeZICClickable(t(textKey), productPath)}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

