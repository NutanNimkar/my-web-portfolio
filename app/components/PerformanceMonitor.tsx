"use client";
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

// Extend PerformanceEntry for first-input events
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null,
  });

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !process.env.NEXT_PUBLIC_PERF_MONITOR) {
      return;
    }

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = { ...metrics };

      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.fcp = fcpEntry.startTime;
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            newMetrics.lcp = lastEntry.startTime;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as FirstInputEntry;
              newMetrics.fid = firstInputEntry.processingStart - firstInputEntry.startTime;
              setMetrics(prev => ({ ...prev, fid: firstInputEntry.processingStart - firstInputEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cls = clsValue;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      // DOM Load Time
      if (document.readyState === 'complete') {
        const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        newMetrics.domLoad = domLoad;
        setMetrics(prev => ({ ...prev, domLoad }));
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          const domLoad = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
          newMetrics.domLoad = domLoad;
          setMetrics(prev => ({ ...prev, domLoad }));
        });
      }

      // Window Load Time
      if (document.readyState === 'complete') {
        const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newMetrics.windowLoad = windowLoad;
        setMetrics(prev => ({ ...prev, windowLoad }));
      } else {
        window.addEventListener('load', () => {
          const windowLoad = performance.timing.loadEventEnd - performance.timing.navigationStart;
          newMetrics.windowLoad = windowLoad;
          setMetrics(prev => ({ ...prev, windowLoad }));
        });
      }

      setMetrics(newMetrics);
    };

    // Wait for page to load before measuring
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measurePerformance);
    } else {
      measurePerformance();
    }

    // Log metrics after 5 seconds
    const logTimer = setTimeout(() => {
      console.log('🚀 Performance Metrics:', {
        'First Contentful Paint (FCP)': metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Not measured',
        'Largest Contentful Paint (LCP)': metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Not measured',
        'First Input Delay (FID)': metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Not measured',
        'Cumulative Layout Shift (CLS)': metrics.cls ? metrics.cls.toFixed(3) : 'Not measured',
        'Time to First Byte (TTFB)': metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Not measured',
        'DOM Load Time': metrics.domLoad ? `${Math.round(metrics.domLoad)}ms` : 'Not measured',
        'Window Load Time': metrics.windowLoad ? `${Math.round(metrics.windowLoad)}ms` : 'Not measured',
      });

      // Performance recommendations
      const recommendations = [];
      if (metrics.fcp && metrics.fcp > 1800) recommendations.push('FCP is slow (>1.8s) - optimize critical rendering path');
      if (metrics.lcp && metrics.lcp > 2500) recommendations.push('LCP is slow (>2.5s) - optimize largest content element');
      if (metrics.fid && metrics.fid > 100) recommendations.push('FID is high (>100ms) - reduce JavaScript execution time');
      if (metrics.cls && metrics.cls > 0.1) recommendations.push('CLS is high (>0.1) - prevent layout shifts');
      if (metrics.ttfb && metrics.ttfb > 600) recommendations.push('TTFB is slow (>600ms) - optimize server response time');

      if (recommendations.length > 0) {
        console.log('💡 Performance Recommendations:', recommendations);
      } else {
        console.log('✅ All performance metrics are within good ranges!');
      }
    }, 5000);

    return () => {
      clearTimeout(logTimer);
    };
  }, []);

  // Only render in development
  if (process.env.NODE_ENV !== 'development' && !process.env.NEXT_PUBLIC_PERF_MONITOR) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div className="space-y-1">
        <div>FCP: {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : '...'}</div>
        <div>LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : '...'}</div>
        <div>FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : '...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : '...'}</div>
        <div>TTFB: {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : '...'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor; 