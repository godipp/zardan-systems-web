import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { NAVIGATION_ITEMS } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { getLocalizedPath } = useLocalizedPath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isMobile = useIsMobile();

  // Map navigation paths to translation keys
  const getNavLabel = (path: string) => {
    const labelMap: Record<string, string> = {
      '/': 'nav.home',
      '/product': 'nav.product',
      '/services': 'nav.services',
      '/case-studies': 'nav.caseStudies',
      '/about': 'nav.about',
      '/process': 'nav.process',
      '/contact': 'nav.contact',
    };
    return t(labelMap[path] || 'nav.home');
  };

  const isActive = (path: string) => {
    const currentPath = location.pathname;
    const localizedPath = getLocalizedPath(path);
    
    // Exact match
    if (currentPath === localizedPath) return true;
    
    // For root path, only match exactly
    if (path === '/') return false;
    
    // For other paths, check if current path starts with the localized path + '/'
    // This handles cases like /en/services matching /en/services/system-integration
    return currentPath.startsWith(localizedPath + '/');
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const openMobileMenu = () => {
    setIsClosing(false);
    setMobileMenuOpen(true);
  };

  // Scroll to top when route changes
  useScrollToTop({ behavior: 'smooth' });

  // Close mobile menu when route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
  }, [location.pathname]);

  // Close mobile menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      closeMobileMenu();
    }
  }, [isMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen && !isClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, isClosing]);

  return (
    <>
      <nav className="border-b border-border bg-card relative">
        <Container padding="md">
          <div className="flex justify-between items-center h-16 gap-2 min-w-0">
            {/* Logo + Company Name */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#0D1E40] tracking-tight min-w-0 flex-shrink"
              onClick={closeMobileMenu}
            >
              <img
                src="/assets/logo.svg"
                alt={t('ui.navigation.logoAlt')}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain flex-shrink-0"
                loading="eager"
                width="56"
                height="56"
              />
              <span className="text-[#0D1E40] whitespace-nowrap hidden sm:inline">{t('ui.navigation.companyName')}</span>
            </Link>

            {/* Desktop Navigation - Only render on desktop */}
            {!isMobile && (
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
                {NAVIGATION_ITEMS.map((link) => (
                  <Link
                    key={link.path}
                    to={getLocalizedPath(link.path)}
                    className={cn(
                      'text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap',
                      isActive(link.path)
                        ? 'text-[#1E3A8A] font-medium'
                        : 'text-[#6B7280] hover:text-[#0D1E40]'
                    )}
                  >
                    {getNavLabel(link.path)}
                  </Link>
                ))}
                <LanguageSwitcher />
              </div>
            )}

            {/* Mobile Menu Button - Only render on mobile */}
            {isMobile && (
              <button
                className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
                onClick={() => mobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
                aria-label={t('ui.navigation.toggleMenu')}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={cn(
                      'absolute inset-0 transition-all duration-300',
                      mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    )}
                  />
                  <X
                    size={24}
                    className={cn(
                      'absolute inset-0 transition-all duration-300',
                      mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    )}
                  />
                </div>
              </button>
            )}

          </div>
        </Container>
      </nav>

      {/* Mobile Navigation Overlay - Only render on mobile */}
      {isMobile && (
        <>
          {/* Backdrop */}
          <div
            className={cn(
              'fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ease-out',
              mobileMenuOpen && !isClosing ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed top-0 left-0 max-w-[100vw] right-0 bg-card border-b border-border shadow-lg z-40 transition-all duration-300 ease-out',
              mobileMenuOpen && !isClosing
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
            )}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4 pb-2">
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
                aria-label={t('ui.navigation.toggleMenu')}
              >
                <X size={24} className="text-[#6B7280]" />
              </button>
            </div>
            
            <div className="px-4 pt-2 pb-6 space-y-2 w-full">
              {NAVIGATION_ITEMS.map((link, index) => (
                <Link
                  key={link.path}
                  to={getLocalizedPath(link.path)}
                  className={cn(
                    'block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200',
                    'transform hover:scale-105 hover:shadow-md mobile-menu-item-enter',
                    isActive(link.path)
                      ? 'text-[#1E3A8A] bg-[#1E3A8A]/10 border-l-4 border-[#1E3A8A]'
                      : 'text-[#6B7280] hover:text-[#0D1E40] hover:bg-muted/50'
                  )}
                  onClick={closeMobileMenu}
                  style={{
                    animationDelay: mobileMenuOpen && !isClosing ? `${index * 50}ms` : '0ms',
                    opacity: mobileMenuOpen && !isClosing ? 1 : 0,
                    transform: mobileMenuOpen && !isClosing
                      ? 'scale(1) translateY(0)'
                      : 'scale(0.95) translateY(-10px)',
                    transition: 'all 0.2s ease-out',
                    pointerEvents: mobileMenuOpen && !isClosing ? 'auto' : 'none',
                  }}
                >
                  {getNavLabel(link.path)}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Navigation };
export default Navigation;
