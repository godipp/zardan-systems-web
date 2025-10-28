import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  animationType?: 'fade' | 'slide' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  duration = 800,
  threshold = 0.1,
  animationType = 'fade',
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    // Use a more appropriate duration mapping for Tailwind
    const getDurationClass = (ms: number) => {
      if (ms <= 150) return 'duration-150';
      if (ms <= 200) return 'duration-200';
      if (ms <= 300) return 'duration-300';
      if (ms <= 500) return 'duration-500';
      if (ms <= 700) return 'duration-700';
      return 'duration-1000';
    };
    const durationClass = getDurationClass(duration);
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'slide':
          switch (direction) {
            case 'up':
              return `${baseClasses} ${durationClass} opacity-0 translate-y-6`;
            case 'down':
              return `${baseClasses} ${durationClass} opacity-0 -translate-y-6`;
            case 'left':
              return `${baseClasses} ${durationClass} opacity-0 translate-x-6`;
            case 'right':
              return `${baseClasses} ${durationClass} opacity-0 -translate-x-6`;
            default:
              return `${baseClasses} ${durationClass} opacity-0 translate-y-6`;
          }
        case 'scale':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-6`;
      }
    } else {
      return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
    >
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  baseDelay?: number;
  animationType?: 'fade' | 'slide' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className,
  baseDelay = 150,
  animationType = 'fade',
  direction = 'up',
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedSection
          key={index}
          delay={baseDelay * (index + 1)}
          animationType={animationType}
          direction={direction}
          className="transition-all duration-300"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};
