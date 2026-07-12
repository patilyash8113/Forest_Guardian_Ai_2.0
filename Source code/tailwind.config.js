/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — deep canopy greens, bark, moss, paper.
        canopy: {
          50: '#eef5ee',
          100: '#d6e8d8',
          200: '#aed0b3',
          300: '#7fb389',
          400: '#4f8f5d',
          500: '#2d6a4f', // primary brand green
          600: '#1f5540',
          700: '#173f30',
          800: '#122f24',
          900: '#0b1f18',
          950: '#081712',
        },
        moss: {
          400: '#8fa887',
          500: '#74a57f',
          600: '#5c8a67',
        },
        bark: {
          500: '#6b4226',
          600: '#543219',
        },
        paper: '#f7f5ef',
        amber: {
          400: '#e9c46a',
          500: '#dda93f',
          600: '#c98a1f',
        },
        rust: {
          500: '#bc5b39',
          600: '#a1462a',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'canopy-gradient': 'linear-gradient(160deg, #0b1f18 0%, #173f30 45%, #2d6a4f 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(11, 31, 24, 0.18)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        riseIn: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        riseIn: 'riseIn 0.7s ease-out both',
        drawLine: 'drawLine 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
