import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutScalePresence: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 md:mb-6 text-slate-800">
        {t('about.scalePresence.title')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">7+</div>
          <div className="text-sm sm:text-sm text-slate-600">
            {t('about.scalePresence.years')}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">10</div>
          <div className="text-sm sm:text-sm text-slate-600">{t('about.scalePresence.specialists')}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">3</div>
          <div className="text-sm sm:text-sm text-slate-600">{t('about.scalePresence.industries')}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-[#1E40AF] mb-1">15+</div>
          <div className="text-sm sm:text-sm text-slate-600">{t('about.scalePresence.projects')}</div>
        </div>
      </div>
      <p className="text-sm text-slate-500 text-center mt-4 sm:mt-5 md:mt-6">
        {t('about.scalePresence.note')}
      </p>
    </section>
  );
};

