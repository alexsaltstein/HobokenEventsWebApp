/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'hoboken-blue': '#697E90',
        'button-green': '#36C37F'
      },
      scale: {
        '25': '0.25'
      },
    },
  },
  plugins: [],
}
