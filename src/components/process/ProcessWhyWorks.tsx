import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProcessWhyWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-muted rounded-lg p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
        {t('process.whyWorks.title')}
      </h2>
      <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
        <p>{t('process.whyWorks.p1')}</p>
        <p>{t('process.whyWorks.p2')}</p>
      </div>
    </div>
  );
};

