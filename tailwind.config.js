/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        hindi: ['Tiro Devanagari Hindi', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        cream: '#FAF7F2',
        surface: '#FFFFFF',
        vermilion: {
          DEFAULT: '#C84B26',
          hover: '#AF3E1E',
        },
        saffron: {
          DEFAULT: '#D96B27',
          light: '#F48C42',
        },
        gold: '#B8860B',
      },
    },
  },
  plugins: [],
}
