"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
    
    // Log additional context for WebGL errors
    if (error.message.includes('WebGL') || error.message.includes('three') || error.message.includes('globe')) {
      console.error('WebGL/Three.js Error Details:', {
        message: error.message,
        stack: error.stack,
        userAgent: navigator.userAgent,
        webGLSupport: checkWebGLSupport(),
      });
    }
  }, [error]);

  // Check WebGL support for debugging
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
      return {
        supported: !!gl,
        vendor: gl?.getParameter(gl.VENDOR),
        renderer: gl?.getParameter(gl.RENDERER),
        version: gl?.getParameter(gl.VERSION),
      };
    } catch (e) {
      return { supported: false, error: e };
    }
  };

  // Check if this is a WebGL-related error
  const isWebGLError = error.message.includes('WebGL') || 
                      error.message.includes('three') || 
                      error.message.includes('globe') ||
                      error.message.includes('canvas');

  if (isWebGLError) {
    return (
      <html>
        <body>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 text-white p-4">
            <div className="text-center max-w-md">
              <div className="text-6xl mb-6">🌍</div>
              <h1 className="text-2xl font-bold mb-4">Interactive Globe Unavailable</h1>
              <p className="text-gray-300 mb-6">
                We&apos;re experiencing issues with the 3D globe visualization. This might be due to:
              </p>
              <ul className="text-left text-sm text-gray-400 mb-6 space-y-2">
                <li>• WebGL not supported in your browser</li>
                <li>• Hardware acceleration disabled</li>
                <li>• Outdated graphics drivers</li>
                <li>• Browser compatibility issues</li>
              </ul>
              <div className="space-y-3">
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Try Again
                </button>
                <div className="text-xs text-gray-500">
                  <p>You can still explore the rest of the portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}