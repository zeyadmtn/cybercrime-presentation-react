/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['LeagueSpartan', 'sans-serif'],
        norwester: ['Norwester', 'sans-serif']
      },
    },
  },
  plugins: [],
}