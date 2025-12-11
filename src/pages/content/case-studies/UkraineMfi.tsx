import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent';

const UkraineMfi: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={`${t('caseStudies.ukraineMfi.seoTitle')} | Zardan Systems`}
        description={t('caseStudies.ukraineMfi.seoDescription')}
      />

      <div className="min-h-screen bg-white">
        <CaseStudyHeader
          logo="/assets/mfoua.svg"
          logoAltKey="caseStudies.ukraineMfi.logoAlt"
          titleKey="caseStudies.ukraineMfi.title"
          subtitleKey="caseStudies.ukraineMfi.subtitle"
          backLink="/case-studies"
          backTextKey="caseStudies.ukraineMfi.backToCases"
          ndaTextKey="caseStudies.ukraineMfi.ndaText"
        />

        <CaseStudyContent
          challengeTitleKey="caseStudies.ukraineMfi.challenge.title"
          challengeIntroKey="caseStudies.ukraineMfi.challenge.intro"
          challengeProblemsIntroKey="caseStudies.ukraineMfi.challenge.problemsIntro"
          challengeProblemsKey="caseStudies.ukraineMfi.challenge.problems"
          solutionTitleKey="caseStudies.ukraineMfi.solution.title"
          solutionIntroKey="caseStudies.ukraineMfi.solution.intro"
          solutionItemsKey="caseStudies.ukraineMfi.solution.items"
          resultsTitleKey="caseStudies.ukraineMfi.results.title"
          resultsItemsKey="caseStudies.ukraineMfi.results.items"
        />
      </div>
    </>
  );
};

export default UkraineMfi;

