/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      ' fullhd': '1920px',
      'max-w-max': 'max-content',
      'max-w-fit': 'fit-content',
      'max-w-prose': '65ch',
      'max-w-screen-sm': '640px',
      'max-w-screen-md': '768px',
      'max-w-screen-lg': '1024px',
      'max-w-screen-xl': '1280px',
      'max-w-screen-2xl': '1536',
    },
    extend: {},
  },
  plugins: [],
};
