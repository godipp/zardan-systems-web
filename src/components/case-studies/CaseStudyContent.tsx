import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface CaseStudyContentProps {
  challengeTitleKey: string;
  challengeIntroKey?: string;
  challengeProblemsIntroKey?: string;
  challengeProblemsKey?: string;
  solutionTitleKey: string;
  solutionIntroKey?: string;
  solutionItemsKey?: string;
  resultsTitleKey: string;
  resultsItemsKey?: string;
  resultsTextKey?: string;
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

export const CaseStudyContent: React.FC<CaseStudyContentProps> = ({
  challengeTitleKey,
  challengeIntroKey,
  challengeProblemsIntroKey,
  challengeProblemsKey,
  solutionTitleKey,
  solutionIntroKey,
  solutionItemsKey,
  resultsTitleKey,
  resultsItemsKey,
  resultsTextKey,
}) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const productPath = getLocalizedPath('/product');

  const challengeProblems = challengeProblemsKey ? (t(challengeProblemsKey, { returnObjects: true }) as string[]) : [];
  const solutionItems = solutionItemsKey ? (t(solutionItemsKey, { returnObjects: true }) as string[]) : [];
  const resultsItems = resultsItemsKey ? (t(resultsItemsKey, { returnObjects: true }) as string[]) : [];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white">
      <Container padding="lg">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-4">
          <div className="space-y-4">
            {/* Challenge Block */}
            <AnimatedSection delay={100} animationType="slide" direction="left">
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                  {t(challengeTitleKey)}
                </h2>
                
                {challengeIntroKey && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {makeZICClickable(t(challengeIntroKey), productPath)}
                  </p>
                )}

                {challengeProblemsIntroKey && t(challengeProblemsIntroKey) && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {makeZICClickable(t(challengeProblemsIntroKey), productPath)}
                  </p>
                )}

                {challengeProblems.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5">
                    {challengeProblems.map((problem: string, idx: number) => (
                      <li key={idx} className="leading-relaxed">
                        {makeZICClickable(problem, productPath)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>

            {/* Solution Block */}
            <AnimatedSection delay={200} animationType="slide" direction="right">
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                  {t(solutionTitleKey)}
                </h2>
                
                {solutionIntroKey && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                    {makeZICClickable(t(solutionIntroKey), productPath)}
                  </p>
                )}

                {solutionItems.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5">
                    {solutionItems.map((item: string, idx: number) => (
                      <li key={idx} className="leading-relaxed">
                        {makeZICClickable(item, productPath)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>

            {/* Results Block */}
            <AnimatedSection delay={300} animationType="slide" direction="left">
              <div className="bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-lg sm:text-xl font-semibold text-[#0D1E40] mb-3 sm:mb-4">
                  {t(resultsTitleKey)}
                </h2>

                {resultsItems.length > 0 && (
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-700 list-disc pl-4 sm:pl-5 mb-3 sm:mb-4">
                    {resultsItems.map((item: string, idx: number) => (
                      <li key={idx} className="leading-relaxed">
                        {makeZICClickable(item, productPath)}
                      </li>
                    ))}
                  </ul>
                )}

                {resultsTextKey && (
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {makeZICClickable(t(resultsTextKey), productPath)}
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

