"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg">
      <div className="text-center text-white">
        <div className="text-4xl mb-4 animate-pulse">🌍</div>
        <div className="text-lg font-semibold animate-pulse">Loading Globe...</div>
        <div className="mt-4">
          <div className="w-16 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white/60 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

// WebGL detection function
function isWebGLAvailable() {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

// Performance detection
function getPerformanceTier() {
  if (typeof window === 'undefined') return 'medium';
  
  const connection = (navigator as any).connection;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return 'low';
    }
    if (connection.effectiveType === '3g') {
      return 'medium';
    }
  }
  
  if (hardwareConcurrency <= 2) return 'low';
  if (hardwareConcurrency <= 4) return 'medium';
  return 'high';
}

const GridGlobe = React.memo(function GridGlobe() {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState(false);
  const [performanceTier, setPerformanceTier] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    // Check WebGL availability on client side
    const checkWebGL = () => {
      const available = isWebGLAvailable();
      setWebGLAvailable(available);
      if (!available) {
        setError(true);
      }
    };

    // Check performance tier
    const tier = getPerformanceTier();
    setPerformanceTier(tier);

    // Delay check to ensure DOM is ready
    const timer = setTimeout(checkWebGL, 100);
    return () => clearTimeout(timer);
  }, []);

  const globeConfig = {
    pointSize: performanceTier === 'low' ? 2 : 4,
    globeColor: "#062056",
    showAtmosphere: performanceTier !== 'low',
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: performanceTier === 'low' ? 1500 : 1000,
    arcLength: 0.9,
    rings: performanceTier === 'low' ? 0 : 1,
    maxRings: performanceTier === 'low' ? 0 : 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: performanceTier !== 'low',
    autoRotateSpeed: performanceTier === 'low' ? 0.2 : 0.5,
  };
  
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  
  // Reduce number of arcs based on performance tier
  const getSampleArcs = () => {
    const baseArcs = [
      {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 1,
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -1.303396,
        endLng: 36.852443,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 2,
        startLat: -15.785493,
        startLng: -47.909029,
        endLat: 36.162809,
        endLng: -115.119411,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: 21.3099,
        startLng: -157.8581,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 3,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
      {
        order: 4,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
      },
    ];

    // Return fewer arcs for lower performance devices
    if (performanceTier === 'low') {
      return baseArcs.slice(0, 4);
    } else if (performanceTier === 'medium') {
      return baseArcs.slice(0, 8);
    }
    return baseArcs;
  };

  const sampleArcs = getSampleArcs();

  // Show loading state while checking WebGL
  if (webGLAvailable === null) {
    return (
      <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full h-72 md:h-full z-10 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-4 animate-pulse">🌍</div>
              <div className="text-lg font-semibold">Initializing...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state if WebGL is not available
  if (error || webGLAvailable === false) {
    return (
      <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full h-72 md:h-full z-10 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🌍</div>
              <div className="text-lg font-semibold">Interactive Globe</div>
              <div className="text-sm opacity-75">WebGL not available</div>
              <div className="text-xs opacity-50 mt-2">Try updating your browser or enabling hardware acceleration</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
});
export default GridGlobe;