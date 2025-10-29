import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION_ITEMS, SERVICES } from '@/constants';
import { shouldShowBreadcrumbs, getBreadcrumbConfig } from '@/constants/breadcrumbs';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Check if breadcrumbs should be shown for this route
  if (!shouldShowBreadcrumbs(pathname)) {
    return null;
  }

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Always start with Home
    breadcrumbs.push({
      label: 'Home',
      path: '/',
      isActive: false,
    });

    // Build breadcrumbs based on path segments
    let currentPath = '';
    
    for (let i = 0; i < segments.length; i++) {
      currentPath += `/${segments[i]}`;
      const isLast = i === segments.length - 1;
      
      let label = segments[i] || '';
      
      // Convert kebab-case to title case
      label = label
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Check breadcrumb configuration first
      const config = getBreadcrumbConfig(currentPath);
      if (config) {
        label = config.label;
      } else {
        // Check if this is a service sub-page
        if (segments[0] === 'services' && segments.length > 1 && i === 1) {
          const service = SERVICES.find(s => s.path === currentPath);
          if (service) {
            label = service.title;
          }
        }

        // Check if this is a main navigation item
        if (i === 0) {
          const navItem = NAVIGATION_ITEMS.find(item => item.path === currentPath);
          if (navItem) {
            label = navItem.label;
          }
        }
      }

      breadcrumbs.push({
        label,
        path: currentPath,
        isActive: isLast,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs if only one item (just Home)
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="bg-muted/20 border-b border-border/30 py-1.5 sm:py-2 md:py-3 px-4 sm:px-6 md:px-8 lg:px-12"
      aria-label="Breadcrumb"
    >
      <div className="max-w-[1024px] mx-auto">
        <ol className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 text-sm sm:text-sm md:text-sm overflow-x-auto breadcrumb-container">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center flex-shrink-0">
              {index > 0 && (
                <ChevronRight 
                  className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-muted-foreground/60 mx-0.5 sm:mx-1 md:mx-2 flex-shrink-0" 
                  aria-hidden="true"
                />
              )}

              {item.isActive ? (
                <span 
                  className="text-foreground font-medium truncate max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    'text-muted-foreground hover:text-foreground transition-colors duration-200 truncate max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-none',
                    'hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm'
                  )}
                >
                  {index === 0 && (
                    <Home className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 inline mr-0.5 sm:mr-1" aria-hidden="true" />
                  )}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
