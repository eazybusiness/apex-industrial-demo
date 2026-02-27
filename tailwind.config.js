/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0A1628',
          secondary: '#1E3A5F',
          light: '#2C4A6F',
        },
        gold: {
          primary: '#D4AF37',
          light: '#F4E4C1',
          dark: '#B8941F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
