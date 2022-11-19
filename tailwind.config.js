/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
        xs: '380px',
        ...defaultTheme.screens
    },
    extend: {
      colors: {
        "hoboken-blue": "#63798c",
        "button-blue": "#007bc7",
        "button-hover-blue": "#0073ba",
        "input-label-gray": "#6f7287",
      },
    },
  },
  plugins: [],
};
