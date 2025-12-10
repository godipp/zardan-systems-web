import React from 'react';
import { ReactNode } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';

export interface RootLayoutProps {
  children: ReactNode;
  className?: string;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn(
      'min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800',
      className
    )}>
      {/* Header */}
      <header className="md:sticky md:top-0 z-50 relative">
        <Navigation />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};
