/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hanken Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: {
          950: '#060A13',
          900: '#0B1120',
          850: '#0F172A',
          800: '#151F38',
          750: '#1B2642',
          700: '#1E293B',
          600: '#334155',
        },
        nirvana: {
          purple: '#7C3AED',
          deepPurple: '#581C87',
          lightPurple: '#A855F7',
          blue: '#2563EB',
          cyan: '#06B6D4',
          slate: '#0F172A',
          dark: '#070B14',
        },
        emergency: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      maxWidth: {
        'screen-3xl': '1840px',
      }
    },
  },
  plugins: [],
}
