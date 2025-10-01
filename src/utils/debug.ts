// Global error handler and debugging utilities
import { supabase } from '@/integrations/supabase/client';

// Global error logging
export const logError = (error: Error, context?: string) => {
  console.error(`[${context || 'App'}] Error:`, error);
  
  // Log to Supabase for production monitoring
  if (process.env.NODE_ENV === 'production') {
    supabase
      .from('error_logs')
      .insert([{
        error_message: error.message,
        error_stack: error.stack,
        context: context || 'Unknown',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        url: window.location.href
      }])
      .catch(console.error); // Don't let error logging cause more errors
  }
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`[Performance] ${name}: ${end - start}ms`);
};

// API call wrapper with error handling
export const safeApiCall = async <T>(
  apiCall: () => Promise<T>,
  context: string = 'API Call'
): Promise<T | null> => {
  try {
    const result = await apiCall();
    return result;
  } catch (error) {
    logError(error as Error, context);
    return null;
  }
};

// Route change monitoring
export const logRouteChange = (from: string, to: string) => {
  console.log(`[Navigation] ${from} → ${to}`);
  
  // Track route changes for analytics
  if (process.env.NODE_ENV === 'production') {
    supabase
      .from('route_logs')
      .insert([{
        from_route: from,
        to_route: to,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent
      }])
      .catch(console.error);
  }
};

// Component mount/unmount tracking
export const trackComponent = (componentName: string) => {
  console.log(`[Component] ${componentName} mounted`);
  
  return () => {
    console.log(`[Component] ${componentName} unmounted`);
  };
};

// Memory usage monitoring
export const logMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log('[Memory]', {
      used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`
    });
  }
};

// Network status monitoring
export const monitorNetworkStatus = () => {
  const updateNetworkStatus = () => {
    console.log(`[Network] Status: ${navigator.onLine ? 'Online' : 'Offline'}`);
  };
  
  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  
  return () => {
    window.removeEventListener('online', updateNetworkStatus);
    window.removeEventListener('offline', updateNetworkStatus);
  };
};

// Initialize global error handling
export const initializeErrorHandling = () => {
  // Global unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    logError(new Error(event.reason), 'Unhandled Promise Rejection');
  });
  
  // Global error handler
  window.addEventListener('error', (event) => {
    logError(event.error, 'Global Error');
  });
  
  // Memory monitoring (every 30 seconds)
  setInterval(logMemoryUsage, 30000);
  
  // Network monitoring
  monitorNetworkStatus();
  
  console.log('[Debug] Error handling initialized');
};
