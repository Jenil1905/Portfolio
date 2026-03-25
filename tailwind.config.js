/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0e0e0e",
        secondary: "#888888",
        tertiary: "#1a1a1a",
        accent: "#d4af37",
        light: "#f4f4f5",
      },
      screens: {
        xs: "450px",
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
}
