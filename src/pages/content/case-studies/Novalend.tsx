import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContentSection } from '@/components/case-studies/CaseStudyContentSection';

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

        <CaseStudyContentSection
          titleKey="caseStudies.novalend.challenge.title"
          introKey="caseStudies.novalend.challenge.intro"
          problemsIntroKey="caseStudies.novalend.challenge.problemsIntro"
          problemsKey="caseStudies.novalend.challenge.problems"
          background="white"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.novalend.solution.title"
          introKey="caseStudies.novalend.solution.intro"
          itemsKey="caseStudies.novalend.solution.items"
          background="gray"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.novalend.results.title"
          itemsKey="caseStudies.novalend.results.items"
          background="white"
        />
      </div>
    </>
  );
};

export default Novalend;

