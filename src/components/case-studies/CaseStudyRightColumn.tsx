import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface CaseStudyRightColumnProps {
  caseStudy: {
    logo?: string;
    link?: string;
    diagram?: string;
    results?: string[];
    industry?: string;
    title?: string;
  };
}

// Function to make ZIC clickable in text
const makeZICClickable = (text: string, productPath: string) => {
  const parts = text.split(/(ZIC)/gi);
  return parts.map((part, index) => {
    if (part.toUpperCase() === 'ZIC') {
      return (
        <Link
          key={index}
          to={productPath}
          className="text-[#1E3A8A] hover:text-[#3B82F6] font-semibold underline transition-colors"
        >
          {part}
        </Link>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const CaseStudyRightColumn: React.FC<CaseStudyRightColumnProps> = ({ caseStudy }) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const productPath = getLocalizedPath('/product');

  if (caseStudy.logo) {
    return (
      <div className="relative col-span-2 w-full flex flex-col items-center justify-center gap-6 min-w-0">
        <div className="flex items-center w-full justify-center p-8 bg-white rounded-lg w-full">
          <img
            src={caseStudy.logo}
            alt={t('ui.altText.companyLogo')}
            className="min-h-16 w-auto object-contain max-w-full"
            style={{ maxWidth: '100%' }}
          />
        </div>

        {caseStudy.link && (
          <Link
            to={getLocalizedPath(caseStudy.link)}
            className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#3B82F6] font-semibold text-sm sm:text-base transition-colors group"
          >
            {t('caseStudies.readFullCase')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    );
  }

  if (caseStudy.link) {
    return (
      <div className="relative flex flex-col w-full items-center justify-center gap-4 min-w-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          {caseStudy.results?.slice(0, 4).map((result, idx) => {
            const parts = result.split('→');
            const before = parts[0]?.trim();
            const after = parts[1]?.trim();

            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 shadow-sm"
              >
                <div className="text-xs text-[#475569] mb-1">
                  {before && (
                    <div className="line-through text-slate-400 mb-1">{before}</div>
                  )}
                </div>
                <div className="text-sm font-semibold text-[#1E3A8A]">{makeZICClickable(after || result, productPath)}</div>
              </div>
            );
          })}
        </div>

        <Link
          to={getLocalizedPath(caseStudy.link)}
          className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#3B82F6] font-semibold text-sm sm:text-base mt-4 transition-colors group"
        >
          {t('caseStudies.readFullCase')}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center group min-w-0 w-full">
      <div
        aria-hidden
        className="absolute -inset-8 pointer-events-none z-0
                   bg-[radial-gradient(closest-side,rgba(30,58,138,0.06),transparent_70%)]"
      />

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[320px] h-[320px] animate-data-pulse absolute rounded-full bg-[rgba(30,58,138,0.05)] blur-2xl" />
        <div className="w-[200px] h-[200px] animate-data-pulse-delay absolute rounded-full bg-[rgba(30,58,138,0.04)] blur-xl" />
      </div>

      {caseStudy.diagram && (
        <img
          src={caseStudy.diagram}
          alt={`${caseStudy.title} Diagram`}
          className="relative z-10 w-full h-auto select-none border-none shadow-none
                     transition-transform duration-700 group-hover:scale-[1.015]"
          style={{ maxWidth: '100%' }}
        />
      )}

      <p
        className={`relative z-10 text-[15px] text-slate-500 italic ${
          caseStudy.industry === 'Manufacturing'
            ? 'mt-6'
            : caseStudy.industry === 'Fintech'
              ? 'mt-1'
              : 'mt-3'
        }`}
      >
        Architecture snapshot — simplified view of data synchronization layer.
      </p>
    </div>
  );
};

