import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { CaseStudyHeader } from '@/components/case-studies/CaseStudyHeader';
import { CaseStudyContentSection } from '@/components/case-studies/CaseStudyContentSection';

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

        <CaseStudyContentSection
          titleKey="caseStudies.nexu.challenge.title"
          introKey="caseStudies.nexu.challenge.intro"
          problemsIntroKey="caseStudies.nexu.challenge.problemsIntro"
          problemsKey="caseStudies.nexu.challenge.problems"
          background="white"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.nexu.solution.title"
          introKey="caseStudies.nexu.solution.intro"
          itemsKey="caseStudies.nexu.solution.items"
          background="gray"
        />

        <CaseStudyContentSection
          titleKey="caseStudies.nexu.results.title"
          itemsKey="caseStudies.nexu.results.items"
          background="white"
        />
      </div>
    </>
  );
};

export default Nexu;

