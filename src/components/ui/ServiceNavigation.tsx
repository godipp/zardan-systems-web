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
    <nav className={cn('bg-muted/20 border-b border-border/30 py-4', className)}>
      <Container padding="lg">
        <div className="flex items-center justify-between">
          {/* Previous Service */}
          <div className="flex-1">
            {previousService ? (
              <Link
                to={previousService.path}
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground/70">Previous</div>
                  <div className="font-medium">{previousService.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          {/* Current Service */}
          <div className="flex-1 text-center">
            <div className="text-sm font-medium text-foreground">{currentService}</div>
          </div>

          {/* Next Service */}
          <div className="flex-1">
            {nextService ? (
              <Link
                to={nextService.path}
                className="group flex items-center justify-end gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground/70">Next</div>
                  <div className="font-medium">{nextService.title}</div>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default ServiceNavigation;
