/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6eb',
          200: '#f7ccd8',
          300: '#efa4b9',
          400: '#e47193',
          500: '#d44772',
          600: '#bd2f5a',
          700: '#9e2247',
          800: '#831f3c',
          900: '#6f1e36',
          950: '#420b1e',
        },
        dusty: {
          50: '#faf5f6',
          100: '#f5ebed',
          200: '#ecd9de',
          300: '#dfbfc8',
          400: '#ca9ba9',
          500: '#b4798c',
          600: '#9c5f73',
          700: '#814c5e',
          800: '#6c4150',
          900: '#5c3945',
          950: '#341d26',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at center, #ffffff 30%, #fbe8ee 65%, #ecd2db 85%, #d495a8 100%)',
        'soft-maroon-radial': 'radial-gradient(ellipse at center, rgba(255,255,255,1) 35%, rgba(251,234,240,0.9) 60%, rgba(235,193,208,0.7) 80%, rgba(131,31,60,0.3) 100%)',
      }
    },
  },
  plugins: [],
}
