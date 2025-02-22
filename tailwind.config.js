/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    /^tw-top-\[.*\]$/,
    /^tw-left-\[.*\]$/,
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  prefix: 'tw-'
}



