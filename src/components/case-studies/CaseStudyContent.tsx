import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { Shield, Gauge } from 'lucide-react';

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
  resultsSummaryKey?: string;
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
  resultsSummaryKey,
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
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D1E40] mb-6 sm:mb-8">
                  {t(resultsTitleKey)}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 sm:gap-8 items-stretch">
                  {/* Left Section - Detailed Results List */}
                  <div className="h-fit flex flex-col my-auto">
                    {resultsItems.length > 0 && (
                      <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-700">
                        {resultsItems.map((item: string, idx: number) => (
                          <li key={idx} className="leading-relaxed flex items-start">
                            <span className="text-[#1E3A8A] mr-3 mt-1 text-lg">•</span>
                            <span className="flex-1">{makeZICClickable(item, productPath)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {resultsTextKey && (
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                        {makeZICClickable(t(resultsTextKey), productPath)}
                      </p>
                    )}
                  </div>

                  {/* Right Section - Summary Cards */}
                  {resultsSummaryKey && (
                    <div className="grid grid-rows-2 gap-2 h-full min-h-0">
                      {/* Failures Reduced Card */}
                      <div className="bg-white rounded-lg p-2 border border-slate-200 shadow-sm flex flex-col min-h-0">
                        <div className="flex items-start gap-4 flex-1 min-h-0">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <h3 className="text-base sm:text-lg font-bold text-[#0D1E40] mb-1">
                              {t(`${resultsSummaryKey}.failuresReduced.title`)}
                            </h3>
                            {t(`${resultsSummaryKey}.failuresReduced.percentage`, { returnObjects: false }) !== `${resultsSummaryKey}.failuresReduced.percentage` && (
                              <div className="text-2xl sm:text-3xl font-bold text-[#0D1E40] mb-1">
                                {t(`${resultsSummaryKey}.failuresReduced.percentage`)}
                              </div>
                            )}
                            <ul className="space-y-1 text-xs sm:text-sm text-slate-600 flex-1">
                              {(t(`${resultsSummaryKey}.failuresReduced.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Performance Improved Card */}
                      <div className="bg-white rounded-lg p-2 border border-slate-200 shadow-sm flex flex-col min-h-0">
                        <div className="flex items-start gap-4 flex-1 min-h-0">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                            <Gauge className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 flex flex-col min-h-0">
                            <h3 className="text-base sm:text-lg font-bold text-[#0D1E40] mb-1">
                              {t(`${resultsSummaryKey}.performanceImproved.title`)}
                            </h3>
                            {t(`${resultsSummaryKey}.performanceImproved.percentage`, { returnObjects: false }) !== `${resultsSummaryKey}.performanceImproved.percentage` && (
                              <div className="text-2xl sm:text-3xl font-bold text-[#0D1E40] mb-1">
                                {t(`${resultsSummaryKey}.performanceImproved.percentage`)}
                              </div>
                            )}
                            <ul className="space-y-1 text-xs sm:text-sm text-slate-600 flex-1">
                              {(t(`${resultsSummaryKey}.performanceImproved.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
};

