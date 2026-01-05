import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  distance?: number;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    distance = 30,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally disconnect after first animation
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return {
    ref: elementRef,
    isVisible,
    style: {
      transform: isVisible
        ? 'translateY(0)'
        : `translateY(${distance}px)`,
      opacity: isVisible ? 1 : 0.7,
      transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: isVisible ? undefined : 'transform, opacity',
      transformOrigin: 'center center',
    } as React.CSSProperties,
  };
};

