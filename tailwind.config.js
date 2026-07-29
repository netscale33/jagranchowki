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
        bg: '#0C0500',
        surface: '#160A02',
        card: '#1C0D04',
        saffron: {
          DEFAULT: '#D4690A',
          light: '#E87A1A',
          dark: '#A84F06',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8BE50',
          dark: '#9A7A18',
        },
        sindoor: '#8B1A1A',
        cream: '#F0E4CC',
        muted: '#B8A88A',
      },
    },
  },
  plugins: [],
}
