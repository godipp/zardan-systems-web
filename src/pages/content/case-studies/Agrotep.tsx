import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContentSection } from '@/components/case-studies/CaseStudyContentSection';

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

        <CaseStudyContentSection
          titleKey="caseStudies.agrotep.challenge.title"
          introKey="caseStudies.agrotep.challenge.intro"
          problemsIntroKey="caseStudies.agrotep.challenge.problemsIntro"
          problemsKey="caseStudies.agrotep.challenge.problems"
          background="white"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.agrotep.solution.title"
          introKey="caseStudies.agrotep.solution.intro"
          itemsKey="caseStudies.agrotep.solution.items"
          background="gray"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.agrotep.results.title"
          itemsKey="caseStudies.agrotep.results.items"
          background="white"
        />
      </div>
    </>
  );
};

export default Agrotep;

