import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', nameKey: 'ui.languageSwitcher.english', flag: '🇬🇧' },
    { code: 'ua', nameKey: 'ui.languageSwitcher.ukrainian', flag: '🇺🇦' },
  ];

  // Sync i18n language with URL on mount and route changes
  useEffect(() => {
    const pathLang = location.pathname.match(/^\/(en|ua)/)?.[1];
    if (pathLang && pathLang !== i18n.language) {
      i18n.changeLanguage(pathLang);
    }
  }, [location.pathname, i18n]);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    
    // Update URL to include language prefix
    const currentPath = location.pathname;
    // Remove existing language prefix if present
    const pathWithoutLang = currentPath.replace(/^\/(en|ua)/, '') || '/';
    const newPath = `/${langCode}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    navigate(newPath);
  };

  // Get current language from URL or i18n
  const pathLang = location.pathname.match(/^\/(en|ua)/)?.[1];
  const currentLangCode = pathLang || i18n.language;
  const currentLang = languages.find(lang => lang.code === currentLangCode) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center justify-center gap-1.5 w-10 h-10 p-0 group",
            "rounded-md hover:bg-white !text-[#6B7280] hover:!text-blue-500"
          )}
          aria-label={t('ui.languageSwitcher.switchLanguage')}
        >
          <Globe className="w-4 h-4 text-[#6B7280] group-hover:text-blue-500 transition-colors duration-200" />
          <span className="text-sm select-none">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "cursor-pointer",
              i18n.language === lang.code && "bg-muted"
            )}
          >
            <span className="mr-2">{lang.flag}</span>
            {t(lang.nameKey)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

