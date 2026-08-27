/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'Inter Tight', 'Space Grotesk', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        framer: {
          bg: '#050505',
          card: '#0a0a0c',
          border: 'rgba(255, 255, 255, 0.08)',
          purple: '#0055FF',
          accent: '#A855F7',
          pink: '#EC4899',
          cyan: '#06B6D4',
        },
      },
      animation: {
        marqueeLeft: 'marqueeLeft 35s linear infinite',
        marqueeRight: 'marqueeRight 35s linear infinite',
        pulseSlow: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glowFloat: 'glowFloat 6s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glowFloat: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
