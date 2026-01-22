/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        app: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-secondary)',
          border: 'var(--border-color)',
          text: 'var(--text-primary)',
          subtext: 'var(--text-secondary)',
          accent: 'var(--accent-primary)',
          'surface-hover': 'var(--bg-tertiary)',
          'accent-hover': 'var(--accent-hover)',
        },
        arcovel: {
          blue: '#64748b', // Slate-500
          orange: '#f97316', // Orange-500
          dark: '#0f172a'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}