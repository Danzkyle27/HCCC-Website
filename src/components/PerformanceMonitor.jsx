import { useEffect } from 'react';
import { prefersReducedMotion, getDevicePerformance, isSlowConnection } from '../utils/performanceOptimization';

/**
 * Performance monitoring component
 * Logs metrics and adapts UI based on device capabilities
 */
function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (import.meta.env.MODE !== 'development') return;

    const logPerformanceMetrics = () => {
      if (!window.performance) return;

      const perfData = window.performance.timing;
      const navigation = window.performance.getEntriesByType('navigation')[0];

      console.group('⚡ Performance Metrics');
      
      if (navigation) {
        console.log(`DNS Lookup: ${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`);
        console.log(`TCP Connection: ${Math.round(navigation.connectEnd - navigation.connectStart)}ms`);
        console.log(`Request Time: ${Math.round(navigation.responseEnd - navigation.requestStart)}ms`);
        console.log(`DOM Processing: ${Math.round(navigation.domComplete - navigation.domLoading)}ms`);
        console.log(`Load Complete: ${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`);
      }

      // Log device capabilities
      console.group('🖥️ Device Info');
      console.log(`Performance Tier: ${getDevicePerformance()}`);
      console.log(`Slow Connection: ${isSlowConnection()}`);
      console.log(`Reduced Motion: ${prefersReducedMotion()}`);
      console.log(`Memory: ${navigator.deviceMemory || 'unknown'}GB`);
      console.log(`CPU Cores: ${navigator.hardwareConcurrency || 'unknown'}`);
      console.groupEnd();

      // Log resource timing
      const resources = window.performance.getEntriesByType('resource');
      const totalSize = resources.reduce((acc, r) => acc + (r.transferSize || 0), 0);
      console.log(`Total Resources: ${resources.length}`);
      console.log(`Total Transfer Size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
      
      console.groupEnd();
    };

    // Wait for load event
    if (document.readyState === 'complete') {
      logPerformanceMetrics();
    } else {
      window.addEventListener('load', logPerformanceMetrics);
      return () => window.removeEventListener('load', logPerformanceMetrics);
    }
  }, []);

  // Adapt animations based on device
  useEffect(() => {
    const root = document.documentElement;
    
    if (prefersReducedMotion()) {
      root.style.setProperty('--animation-duration', '0.001s');
    }

    const performance = getDevicePerformance();
    root.setAttribute('data-performance', performance);
    
    if (performance === 'low') {
      // Reduce animation complexity on low-end devices
      root.style.setProperty('--particle-count', '20');
      root.style.setProperty('--blur-amount', '5px');
    } else if (performance === 'medium') {
      root.style.setProperty('--particle-count', '35');
      root.style.setProperty('--blur-amount', '10px');
    } else {
      root.style.setProperty('--particle-count', '50');
      root.style.setProperty('--blur-amount', '15px');
    }
  }, []);

  return null; // This component doesn't render anything
}

export default PerformanceMonitor;
