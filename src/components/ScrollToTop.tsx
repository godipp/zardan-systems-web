import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50',
        'bg-white text-[#1E3A8A] border border-gray-200',
        'hover:bg-gray-50 hover:border-[#1E3A8A] hover:shadow-xl',
        'w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg',
        'flex items-center justify-center',
        'transition-all duration-300 ease-in-out',
        'hover:scale-110 active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2',
        'group scroll-to-top-enter',
        'backdrop-blur-sm touch-manipulation'
      )}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp 
        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-200 group-hover:-translate-y-0.5" 
        aria-hidden="true"
      />
    </button>
  );
};

export default ScrollToTop;
