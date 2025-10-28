import { useState, useCallback, useEffect } from 'react';

export interface AnimationState {
  isOpen: boolean;
  isAnimating: boolean;
  shouldRender: boolean;
}

export interface AnimationConfig {
  duration: number;
  onComplete?: () => void;
}

export const useAnimation = (config: AnimationConfig = { duration: 300 }) => {
  const [state, setState] = useState<AnimationState>({
    isOpen: false,
    isAnimating: false,
    shouldRender: false,
  });

  const open = useCallback(() => {
    if (state.isOpen || state.isAnimating) return;
    
    setState(prev => ({
      ...prev,
      isOpen: true,
      isAnimating: true,
      shouldRender: true,
    }));

    // Reset isAnimating after animation completes
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isAnimating: false,
      }));
    }, config.duration);
  }, [state.isOpen, state.isAnimating, config.duration]);

  const close = useCallback(() => {
    if (!state.isOpen || state.isAnimating) return;
    
    setState(prev => ({
      ...prev,
      isAnimating: true,
    }));

    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isOpen: false,
        isAnimating: false,
        shouldRender: false,
      }));
      config.onComplete?.();
    }, config.duration);
  }, [state.isOpen, state.isAnimating, config.duration, config.onComplete]);

  const toggle = useCallback(() => {
    if (state.isOpen) {
      close();
    } else {
      open();
    }
  }, [state.isOpen, open, close]);

  // Reset animation state when component unmounts
  useEffect(() => {
    return () => {
      setState({
        isOpen: false,
        isAnimating: false,
        shouldRender: false,
      });
    };
  }, []);

  return {
    ...state,
    open,
    close,
    toggle,
  };
};

// Hook for staggered animations (like menu items)
export const useStaggeredAnimation = (
  itemCount: number,
  _config: AnimationConfig = { duration: 300 }
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const showItems = useCallback(() => {
    setIsAnimating(true);
    setVisibleItems([]);
    
    // Show items with staggered delay
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * 50); // 50ms delay between items
    }

    // Mark animation as complete
    setTimeout(() => {
      setIsAnimating(false);
    }, itemCount * 50 + 100);
  }, [itemCount]);

  const hideItems = useCallback(() => {
    setIsAnimating(true);
    
    // Hide items with reverse staggered delay
    for (let i = itemCount - 1; i >= 0; i--) {
      setTimeout(() => {
        setVisibleItems(prev => prev.filter(item => item !== i));
      }, (itemCount - 1 - i) * 30); // 30ms delay between items (reverse)
    }

    // Mark animation as complete
    setTimeout(() => {
      setIsAnimating(false);
    }, itemCount * 30 + 100);
  }, [itemCount]);

  const reset = useCallback(() => {
    setVisibleItems([]);
    setIsAnimating(false);
  }, []);

  return {
    visibleItems,
    isAnimating,
    showItems,
    hideItems,
    reset,
  };
};

// Hook for backdrop animations
export const useBackdropAnimation = (config: AnimationConfig = { duration: 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const show = useCallback(() => {
    setIsVisible(true);
    // Small delay to ensure element is rendered
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }, []);

  const hide = useCallback(() => {
    setOpacity(0);
    setTimeout(() => {
      setIsVisible(false);
    }, config.duration);
  }, [config.duration]);

  return {
    isVisible,
    opacity,
    show,
    hide,
  };
};