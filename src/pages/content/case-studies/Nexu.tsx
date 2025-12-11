import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent';

const Nexu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={`${t('caseStudies.nexu.seoTitle')} | Zardan Systems`}
        description={t('caseStudies.nexu.seoDescription')}
      />

      <div className="min-h-screen bg-white">
        <CaseStudyHeader
          logo="/assets/nexupl.svg"
          logoAltKey="caseStudies.nexu.logoAlt"
          titleKey="caseStudies.nexu.title"
          subtitleKey="caseStudies.nexu.subtitle"
          backLink="/case-studies"
          backTextKey="caseStudies.nexu.backToCases"
        />

        <CaseStudyContent
          challengeTitleKey="caseStudies.nexu.challenge.title"
          challengeIntroKey="caseStudies.nexu.challenge.intro"
          challengeProblemsIntroKey="caseStudies.nexu.challenge.problemsIntro"
          challengeProblemsKey="caseStudies.nexu.challenge.problems"
          solutionTitleKey="caseStudies.nexu.solution.title"
          solutionIntroKey="caseStudies.nexu.solution.intro"
          solutionItemsKey="caseStudies.nexu.solution.items"
          resultsTitleKey="caseStudies.nexu.results.title"
          resultsItemsKey="caseStudies.nexu.results.items"
        />
      </div>
    </>
  );
};

export default Nexu;

