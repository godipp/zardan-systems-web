import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContentSection } from '@/components/case-studies/CaseStudyContentSection';

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
        />

        <CaseStudyContentSection
          titleKey="caseStudies.ukraineMfi.challenge.title"
          introKey="caseStudies.ukraineMfi.challenge.intro"
          problemsIntroKey="caseStudies.ukraineMfi.challenge.problemsIntro"
          problemsKey="caseStudies.ukraineMfi.challenge.problems"
          background="white"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.ukraineMfi.solution.title"
          introKey="caseStudies.ukraineMfi.solution.intro"
          itemsKey="caseStudies.ukraineMfi.solution.items"
          background="gray"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.ukraineMfi.results.title"
          itemsKey="caseStudies.ukraineMfi.results.items"
          background="white"
        />
      </div>
    </>
  );
};

export default UkraineMfi;

