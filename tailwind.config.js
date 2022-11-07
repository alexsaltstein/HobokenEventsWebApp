/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
