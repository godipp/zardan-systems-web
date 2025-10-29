import React from 'react';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceNavigation } from '@/components/ui/ServiceNavigation';
import { cn } from '@/lib/utils';

export interface ServiceLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  children, 
  className 
}) => {
  const location = useLocation();
  
  // Define service pages and their navigation order
  const servicePages = [
    { path: '/services/system-integration', title: 'System Integration' },
    { path: '/services/process-automation', title: 'Process Automation' },
    { path: '/services/ai-integration', title: 'AI Integration' },
  ];
  
  const currentServiceIndex = servicePages.findIndex(service => location.pathname === service.path);
  
  const getServiceNavigation = () => {
    if (currentServiceIndex === -1) return null;
    
    const currentService = servicePages[currentServiceIndex];
    const previousService = currentServiceIndex > 0 ? servicePages[currentServiceIndex - 1] : null;
    const nextService = currentServiceIndex < servicePages.length - 1 ? servicePages[currentServiceIndex + 1] : null;
    
    return {
      currentService: currentService!.title,
      previousService: previousService ? { title: previousService.title, path: previousService.path } : undefined,
      nextService: nextService ? { title: nextService.title, path: nextService.path } : undefined,
    };
  };

  const serviceNav = getServiceNavigation();

  return (
    <div className={cn('min-h-screen flex flex-col', className)}>
      {/* Service Navigation */}
      {serviceNav && (
        <ServiceNavigation
          currentService={serviceNav.currentService}
          {...(serviceNav.previousService && { previousService: serviceNav.previousService })}
          {...(serviceNav.nextService && { nextService: serviceNav.nextService })}
        />
      )}

      {/* Service Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};
