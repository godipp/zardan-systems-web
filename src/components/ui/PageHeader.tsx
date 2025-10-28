import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
  showDivider?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className,
  showDivider = true,
}) => {
  return (
    <section className={cn('max-w-6xl mx-auto px-6 text-center mb-16', className)}>
      <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
        {title}
      </h1>
      {showDivider && (
        <div className="w-20 h-px bg-slate-300 mx-auto mb-4"></div>
      )}
      <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
};
