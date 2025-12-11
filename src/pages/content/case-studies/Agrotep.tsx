import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent';

const Agrotep: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={`${t('caseStudies.agrotep.seoTitle')} | Zardan Systems`}
        description={t('caseStudies.agrotep.seoDescription')}
      />

      <div className="min-h-screen bg-white">
        <CaseStudyHeader
          logo="/assets/agrotep.svg"
          logoAltKey="caseStudies.agrotep.logoAlt"
          titleKey="caseStudies.agrotep.title"
          subtitleKey="caseStudies.agrotep.subtitle"
          backLink="/case-studies"
          backTextKey="caseStudies.agrotep.backToCases"
        />

        <CaseStudyContent
          challengeTitleKey="caseStudies.agrotep.challenge.title"
          challengeIntroKey="caseStudies.agrotep.challenge.intro"
          challengeProblemsIntroKey="caseStudies.agrotep.challenge.problemsIntro"
          challengeProblemsKey="caseStudies.agrotep.challenge.problems"
          solutionTitleKey="caseStudies.agrotep.solution.title"
          solutionIntroKey="caseStudies.agrotep.solution.intro"
          solutionItemsKey="caseStudies.agrotep.solution.items"
          resultsTitleKey="caseStudies.agrotep.results.title"
          resultsItemsKey="caseStudies.agrotep.results.items"
        />
      </div>
    </>
  );
};

export default Agrotep;

