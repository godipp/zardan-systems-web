import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent';

const Novalend: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={`${t('caseStudies.novalend.seoTitle')} | Zardan Systems`}
        description={t('caseStudies.novalend.seoDescription')}
      />

      <div className="min-h-screen bg-white">
        <CaseStudyHeader
          logo="/assets/novalend-logo-color.svg"
          logoAltKey="caseStudies.novalend.logoAlt"
          titleKey="caseStudies.novalend.title"
          subtitleKey="caseStudies.novalend.subtitle"
          backLink="/case-studies"
          backTextKey="caseStudies.novalend.backToCases"
        />

        <CaseStudyContent
          challengeTitleKey="caseStudies.novalend.challenge.title"
          challengeIntroKey="caseStudies.novalend.challenge.intro"
          challengeProblemsIntroKey="caseStudies.novalend.challenge.problemsIntro"
          challengeProblemsKey="caseStudies.novalend.challenge.problems"
          solutionTitleKey="caseStudies.novalend.solution.title"
          solutionIntroKey="caseStudies.novalend.solution.intro"
          solutionItemsKey="caseStudies.novalend.solution.items"
          resultsTitleKey="caseStudies.novalend.results.title"
          resultsItemsKey="caseStudies.novalend.results.items"
        />
      </div>
    </>
  );
};

export default Novalend;

