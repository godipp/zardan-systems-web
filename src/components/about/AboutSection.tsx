import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutSectionProps {
  titleKey: string;
  paragraphs: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ titleKey, paragraphs }) => {
  const { t } = useTranslation();

  // Extract the base key (e.g., "about.originTransformation" from "about.originTransformation.title")
  const baseKey = titleKey.replace(/\.title$/, '');

  return (
    <section>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-slate-800">
        {t(titleKey)}
      </h2>
      {paragraphs.map((p, index) => (
        <p
          key={index}
          className={`text-sm sm:text-sm md:text-base text-slate-600 leading-relaxed ${
            index < paragraphs.length - 1 ? 'mb-2 sm:mb-3' : ''
          }`}
        >
          {t(`${baseKey}.${p}`)}
        </p>
      ))}
    </section>
  );
};

