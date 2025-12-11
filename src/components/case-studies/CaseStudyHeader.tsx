import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface CaseStudyHeaderProps {
  logo: string;
  logoAltKey: string;
  titleKey: string;
  subtitleKey: string;
  backLink: string;
  backTextKey: string;
  ndaTextKey?: string;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  logo,
  logoAltKey,
  titleKey,
  subtitleKey,
  backLink,
  backTextKey,
  ndaTextKey,
}) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLocalizedPath();

  return (
    <div className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
      <Container padding="lg">
        <div className="py-12 sm:py-16 md:py-20">
          <Link
            to={getLocalizedPath(backLink)}
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0D1E40] transition-colors mb-8 sm:mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {t(backTextKey)}
          </Link>

          <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <img
              src={logo}
              alt={t(logoAltKey)}
              className="min-w-6 max-w-96 max-h-56 min-h-8 sm:min-h-10 w-auto mb-2 sm:mb-3"
            />
            {ndaTextKey && (
              <p className="text-xs sm:text-sm text-[#6B7280] italic">
                {t(ndaTextKey)}
              </p>
            )}
          </div>

          <div className="max-w-4xl mx-auto flex flex-col text-center items-center">
            <h1 className="text-2xl  sm:text-3xl md:text-3xl font-bold text-[#0D1E40] mb-6 leading-tight tracking-tight">
              {t(titleKey)}
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl">
              {t(subtitleKey)}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

