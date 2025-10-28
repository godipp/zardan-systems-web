import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface UseScrollToTopOptions {
  behavior?: ScrollBehavior;
  delay?: number;
}

export const useScrollToTop = (options: UseScrollToTopOptions = {}) => {
  const { behavior = 'smooth', delay = 0 } = options;
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior,
      });
    };

    if (delay > 0) {
      const timer = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timer);
    } else {
      scrollToTop();
    }
  }, [location.pathname, behavior, delay]);
};
