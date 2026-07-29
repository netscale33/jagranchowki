/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        hindi: ['Noto Serif Devanagari', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
