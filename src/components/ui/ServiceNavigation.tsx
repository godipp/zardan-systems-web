import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

interface ServiceNavigationProps {
  currentService: string;
  previousService?: {
    title: string;
    path: string;
  };
  nextService?: {
    title: string;
    path: string;
  };
  className?: string;
}

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  currentService,
  previousService,
  nextService,
  className,
}) => {
  return (
    <nav className={cn('bg-muted/20 border-b border-border/30 py-3 sm:py-4', className)}>
      <Container padding="lg">
        {/* Mobile Layout - Stacked */}
        <div className="block sm:hidden">
          {/* Current Service - Mobile */}
          <div className="text-center mb-3">
            <div className="text-sm font-medium text-foreground px-2 py-1 bg-background/50 rounded-md inline-block">
              {currentService}
            </div>
          </div>
          
          {/* Navigation Links - Mobile */}
          <div className="flex justify-between gap-2">
            {/* Previous Service - Mobile */}
            <div className="flex-1">
              {previousService ? (
                <Link
                  to={previousService.path}
                  className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-background/30 min-h-[44px]"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-[10px] text-muted-foreground/70 mb-0.5">Previous</div>
                    <div className="font-medium truncate">{previousService.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="min-h-[44px] flex items-center">
                  <div className="text-xs text-muted-foreground/50">First Service</div>
                </div>
              )}
            </div>

            {/* Next Service - Mobile */}
            <div className="flex-1">
              {nextService ? (
                <Link
                  to={nextService.path}
                  className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-background/30 min-h-[44px]"
                >
                  <div className="text-right min-w-0 flex-1">
                    <div className="text-[10px] text-muted-foreground/70 mb-0.5">Next</div>
                    <div className="font-medium truncate">{nextService.title}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              ) : (
                <div className="min-h-[44px] flex items-center justify-end">
                  <div className="text-xs text-muted-foreground/50">Last Service</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Previous Service - Desktop */}
          <div className="flex-1">
            {previousService ? (
              <Link
                to={previousService.path}
                className="group flex items-center gap-4 text-base text-muted-foreground hover:text-foreground transition-colors p-4 rounded-lg hover:bg-background/40 min-h-[64px] border border-transparent hover:border-border/20"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
                <div className="text-left min-w-0">
                  <div className="text-sm text-muted-foreground/70 mb-1.5 font-medium">Previous Service</div>
                  <div className="font-semibold truncate max-w-[240px] text-lg">{previousService.title}</div>
                </div>
              </Link>
            ) : (
              <div className="min-h-[64px] flex items-center p-4">
                <div className="text-base text-muted-foreground/50 font-medium">First Service</div>
              </div>
            )}
          </div>

          {/* Current Service - Desktop */}
          <div className="flex-1 text-center px-6">
            <div className="text-lg font-semibold text-foreground px-6 py-3 bg-background/60 rounded-lg inline-block border border-border/20 shadow-sm">
              {currentService}
            </div>
          </div>

          {/* Next Service - Desktop */}
          <div className="flex-1">
            {nextService ? (
              <Link
                to={nextService.path}
                className="group flex items-center justify-end gap-4 text-base text-muted-foreground hover:text-foreground transition-colors p-4 rounded-lg hover:bg-background/40 min-h-[64px] border border-transparent hover:border-border/20"
              >
                <div className="text-right min-w-0">
                  <div className="text-sm text-muted-foreground/70 mb-1.5 font-medium">Next Service</div>
                  <div className="font-semibold truncate max-w-[240px] text-lg">{nextService.title}</div>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            ) : (
              <div className="min-h-[64px] flex items-center justify-end p-4">
                <div className="text-base text-muted-foreground/50 font-medium">Last Service</div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default ServiceNavigation;
