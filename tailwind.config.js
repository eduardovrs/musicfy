/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A00FF',
        'primary-200': '#a64aff',
        'primary-300': '#ffb1ff',
        secondary: '#00E5FF',
        'secondary-200': '#00829b',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
