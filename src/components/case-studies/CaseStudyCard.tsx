import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';
import { CaseStudyRightColumn } from '@/components/case-studies/CaseStudyRightColumn';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface CaseStudyCardProps {
  caseStudy: {
    industry: string;
    marker: string;
    title: string;
    problem: string;
    solution: string;
    results: string[];
    logo?: string;
    trustTextKey?: string;
    flag: string;
    link?: string;
    diagram?: string;
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

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();
  const productPath = getLocalizedPath('/product');

  return (
    <Card className={`shadow-none border-none ${caseStudy.marker} transition-all duration-300`}>
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="min-w-0 col-span-3">
            <CardHeader className="p-0 mb-4 sm:mb-5 md:mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4">
                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 sm:gap-2 border-[#1E3A8A]/40 text-[#1E3A8A] text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 py-1"
                  >
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    {caseStudy.industry}
                  </Badge>

                  <div className="w-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-[18px] text-[#0D1E40] font-semibold">
                    <span>
                      {caseStudy.trustTextKey
                        ? t(caseStudy.trustTextKey)
                        : (caseStudy as any).trustText || ''}
                    </span>
                    <img
                      src={caseStudy.flag}
                      alt={t('ui.altText.countryFlag')}
                      className="w-8 max-w-fit border-gray-300 h-5 border sm:w-10 sm:h-6 md:w-12 md:h-7 rounded-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-[#0D1E40]">
                {makeZICClickable(caseStudy.title, productPath)}
              </CardTitle>
            </CardHeader>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                  {t('caseStudies.problem')}
                </h3>
                <p className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">
                  {makeZICClickable(caseStudy.problem, productPath)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                  {t('caseStudies.solution')}
                </h3>
                <p className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">
                  {makeZICClickable(caseStudy.solution, productPath)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base md:text-lg text-[#0D1E40]">
                  {t('caseStudies.results')}
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#1E3A8A] mr-1.5 sm:mr-2 text-sm sm:text-sm">•</span>
                      <span className="text-sm sm:text-sm md:text-base text-[#475569] leading-relaxed">
                        {makeZICClickable(result, productPath)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <CaseStudyRightColumn caseStudy={caseStudy} />
        </div>
      </CardContent>
    </Card>
  );
};

