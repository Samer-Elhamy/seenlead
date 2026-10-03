/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Tajawal"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        en: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        canvas: '#08090a',
        panel: '#0f1011',
        surface: '#16181a',
        surfaceElevated: '#1f2124',
        accent: {
          DEFAULT: '#5e6ad2',
          hover: '#7170ff'
        },
        brandEmerald: {
          DEFAULT: '#10b981',
          hover: '#059669',
          glow: 'rgba(16, 185, 129, 0.20)'
        }
      },
      transitionTimingFunction: {
        'apple-fluid': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'apple-press': 'cubic-bezier(0.2, 0, 0, 1)',
        'apple-breathe': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)'
      },
      transitionDuration: {
        'instant': '110ms',
        'swift': '220ms',
        'smooth': '380ms',
        'deliberate': '550ms',
        'ambient': '4000ms'
      },
      scale: {
        'apple-press': '0.975',
        'apple-press-sm': '0.965',
        'apple-hover-btn': '1.015',
        'apple-hover-card': '1.008'
      }
    }
  },
  plugins: [],
}
