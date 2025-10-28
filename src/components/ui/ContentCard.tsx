import React from 'react';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  showAccent?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const ContentCard: React.FC<ContentCardProps> = ({
  children,
  className,
  showAccent = true,
  padding = 'lg',
}) => {
  const paddingClasses = {
    sm: 'p-6',
    md: 'p-10',
    lg: 'p-10 md:p-16',
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div
        className={cn(
          'bg-white rounded-3xl shadow-lg border border-slate-200 relative overflow-hidden',
          paddingClasses[padding],
          className
        )}
      >
        {showAccent && (
          <div className="absolute top-0 left-0 h-full w-[6px] bg-[#1E40AF] rounded-l-3xl"></div>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
