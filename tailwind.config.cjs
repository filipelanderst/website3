/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '400px',
      sm: '640px',
      md: '768px',
      mdlg: '820px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {},
  },
  plugins: [],
};
