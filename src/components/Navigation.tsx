import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { NAVIGATION_ITEMS } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    // Exact match
    if (location.pathname === path) return true;
    
    // For root path, only match exactly
    if (path === '/') return false;
    
    // For other paths, check if current path starts with the navigation path + '/'
    // This handles cases like /services matching /services/system-integration
    // but prevents /services-other from matching /services
    return location.pathname.startsWith(path + '/');
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
      <nav className="border-b border-border bg-card sticky top-0 z-50 relative">
        <Container padding="lg">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Company Name */}
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-semibold text-[#0D1E40] tracking-tight"
              onClick={closeMobileMenu}
            >
              <img
                src="/assets/logo.svg"
                alt="Zardan Systems Logo"
                className="h-10 w-auto object-contain"
                loading="eager"
                width="40"
                height="40"
              />
              <span className="text-[#0D1E40]">Zardan Systems</span>
            </Link>

            {/* Desktop Navigation - Only render on desktop */}
            {!isMobile && (
              <div className="flex items-center gap-6">
                {NAVIGATION_ITEMS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      isActive(link.path)
                        ? 'text-[#1E3A8A] font-medium'
                        : 'text-[#6B7280] hover:text-[#0D1E40]'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Menu Button - Only render on mobile */}
            {isMobile && (
              <button
                className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
                onClick={() => mobileMenuOpen ? closeMobileMenu() : openMobileMenu()}
                aria-label="Toggle menu"
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
              'fixed top-0 left-0 right-0 bg-card border-b border-border shadow-lg z-40 transition-all duration-300 ease-out',
              mobileMenuOpen && !isClosing
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0 pointer-events-none'
            )}
          >
            <div className="px-4 pt-20 pb-6 space-y-2">
              {NAVIGATION_ITEMS.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
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
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Navigation };
export default Navigation;
