/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Plus Jakarta Sans', 'sans-serif'],
        dm: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        violet: {
          DEFAULT: '#7c3aed',
          light: '#9d5ff5',
          dark: '#5b21b6',
        },
        electric: '#2563eb',
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
        neon: '#a78bfa',
        surface: 'rgba(255,255,255,0.035)',
      },
      animation: {
        'float-slow': 'floatOrb 8s ease-in-out infinite',
        'float-medium': 'floatOrb 10s ease-in-out infinite reverse',
        'float-fast': 'floatOrb 12s ease-in-out infinite 2s',
        'pulse-dot': 'pulseDot 2s infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.4)' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
