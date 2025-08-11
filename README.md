# My Web Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Three.js.

## Features

- **Interactive 3D Globe**: Powered by Three.js and three-globe
- **Responsive Design**: Works on all devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion
- **WebGL Error Handling**: Graceful fallbacks for unsupported browsers

## WebGL Support

The interactive globe requires WebGL support. If WebGL is not available, the application will:

1. **Detect WebGL availability** on component mount
2. **Show a loading state** while checking
3. **Display a fallback UI** if WebGL is not supported
4. **Provide helpful guidance** for enabling WebGL

### Troubleshooting WebGL Issues

If you see the fallback globe instead of the interactive one:

1. **Update your browser** to the latest version
2. **Enable hardware acceleration** in your browser settings
3. **Update graphics drivers** on your system
4. **Try a different browser** (Chrome, Firefox, Safari, Edge)

### Browser Compatibility

- ✅ Chrome 51+
- ✅ Firefox 51+
- ✅ Safari 10+
- ✅ Edge 79+

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **three-globe** - Globe visualization
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - Three.js React integration

## Project Structure

```
my-web-portfolio/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Globe.tsx          # Main globe component
│   │   │   └── GridGlobe.tsx      # Grid wrapper with error handling
│   │   └── ...
│   ├── global-error.tsx           # Global error boundary
│   └── ...
└── ...
```

## Recent Improvements

### WebGL Error Handling (Latest)

- ✅ Added WebGL detection and fallback UI
- ✅ Improved error boundaries for Three.js components
- ✅ Added loading states and user feedback
- ✅ Performance optimizations with React.memo
- ✅ Better debugging and error logging

## License

MIT License - see LICENSE file for details.
