import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProcessHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mb-8 md:mb-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{t('process.title')}</h1>
      <p className="text-lg md:text-xl text-muted-foreground">
        {t('process.subtitle')}
      </p>
    </div>
  );
};

