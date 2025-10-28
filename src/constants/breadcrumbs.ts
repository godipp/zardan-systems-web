// Breadcrumb configuration for better route mapping
export const BREADCRUMB_ROUTES = {
  // Main navigation routes
  '/': { label: 'Home', showBreadcrumb: false },
  '/about': { label: 'About', showBreadcrumb: false },
  '/process': { label: 'Process', showBreadcrumb: false },
  '/contact': { label: 'Contact', showBreadcrumb: false },
  '/case-studies': { label: 'Case Studies', showBreadcrumb: false },
  
  // Services routes
  '/services': { label: 'Services', showBreadcrumb: true },
  '/services/system-integration': { label: 'System Integration', showBreadcrumb: true },
  '/services/process-automation': { label: 'Process Automation', showBreadcrumb: true },
  '/services/ai-integration': { label: 'AI Integration', showBreadcrumb: true },
  
  // Legal routes
  '/privacy': { label: 'Privacy Policy', showBreadcrumb: false },
  '/terms': { label: 'Terms of Service', showBreadcrumb: false },
} as const;

// Helper function to get breadcrumb config for a route
export const getBreadcrumbConfig = (path: string) => {
  return BREADCRUMB_ROUTES[path as keyof typeof BREADCRUMB_ROUTES] || null;
};

// Helper function to check if breadcrumbs should be shown for a route
export const shouldShowBreadcrumbs = (path: string): boolean => {
  const config = getBreadcrumbConfig(path);
  return config?.showBreadcrumb ?? true; // Default to true for unknown routes
};
