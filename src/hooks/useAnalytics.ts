import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

// Hook to automatically track page views on route changes
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname, document.title);
  }, [location]);
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
      }

      // Track scroll depth milestones
      scrollThresholds.forEach(threshold => {
        if (scrollDepth >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
};

// Hook to track time on page
export const useTimeOnPageTracking = () => {
  useEffect(() => {
    const startTime = Date.now();
    const pagePath = window.location.pathname;

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeOnPage, pagePath);
      }
    };
  }, []);
};
