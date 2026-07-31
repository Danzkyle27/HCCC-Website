import { useEffect } from 'react';

/**
 * Performance monitoring hook
 * Logs page load metrics and performance data
 */
export function usePerformance() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const logPerformance = () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;

      console.group('⚡ Performance Metrics');
      console.log(`Page Load Time: ${pageLoadTime}ms`);
      console.log(`Server Response Time: ${connectTime}ms`);
      console.log(`DOM Render Time: ${renderTime}ms`);
      console.groupEnd();
    };

    if (document.readyState === 'complete') {
      logPerformance();
    } else {
      window.addEventListener('load', logPerformance);
      return () => window.removeEventListener('load', logPerformance);
    }
  }, []);
}

/**
 * Preload images for better performance
 */
export function useImagePreload(images = []) {
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

/**
 * Debounce hook for performance
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
