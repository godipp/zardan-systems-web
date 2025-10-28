import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useAnimation, useBackdropAnimation, useStaggeredAnimation } from '@/hooks/useAnimation';

interface AnimatedOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  backdropClassName?: string;
  animationDuration?: number;
  enableStaggeredItems?: boolean;
  itemCount?: number;
}

export const AnimatedOverlay: React.FC<AnimatedOverlayProps> = ({
  isOpen,
  onClose,
  children,
  className,
  backdropClassName,
  animationDuration = 300,
  enableStaggeredItems = false,
  itemCount = 0,
}) => {
  const animation = useAnimation({ duration: animationDuration });
  const backdrop = useBackdropAnimation({ duration: animationDuration });
  const staggeredAnimation = useStaggeredAnimation(itemCount, { duration: animationDuration });

  // Sync with external isOpen state
  useEffect(() => {
    if (isOpen && !animation.isOpen) {
      animation.open();
      backdrop.show();
      if (enableStaggeredItems) {
        staggeredAnimation.showItems();
      }
    } else if (!isOpen && animation.isOpen) {
      animation.close();
      backdrop.hide();
      if (enableStaggeredItems) {
        staggeredAnimation.hideItems();
      }
    }
  }, [isOpen, animation, backdrop, staggeredAnimation, enableStaggeredItems]);

  // Handle close completion
  useEffect(() => {
    if (!animation.shouldRender && isOpen) {
      onClose();
    }
  }, [animation.shouldRender, isOpen, onClose]);

  if (!animation.shouldRender) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ease-out',
          backdropClassName
        )}
        style={{ opacity: backdrop.opacity }}
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 bg-card border-b border-border shadow-lg z-40 transition-all duration-300 ease-out',
          animation.isOpen && !animation.isAnimating
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0',
          className
        )}
      >
        {enableStaggeredItems ? (
          <div className="px-3 sm:px-4 pt-14 sm:pt-16 md:pt-20 pb-4 sm:pb-6 space-y-0.5 sm:space-y-1">
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  style: {
                    ...child.props.style,
                    opacity: staggeredAnimation.visibleItems.includes(index) ? 1 : 0,
                    transform: staggeredAnimation.visibleItems.includes(index)
                      ? 'scale(1) translateY(0)'
                      : 'scale(0.95) translateY(-10px)',
                    transition: 'all 0.2s ease-out',
                  },
                });
              }
              return child;
            })}
          </div>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default AnimatedOverlay;
