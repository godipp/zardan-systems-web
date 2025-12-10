import React from 'react';
import { useTranslation } from 'react-i18next';

export const CaseStudiesHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0D1E40]">
        {t('caseStudies.title')}
      </h1>
      <p className="text-sm sm:text-base md:text-xl text-[#475569] mb-4 sm:mb-6">
        {t('caseStudies.subtitle')}
      </p>
    </div>
  );
};

