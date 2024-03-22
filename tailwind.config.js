/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM sans", "sans-serif"],
      },
      colors: {
        "primary-100": "#FFFFFF",
        "primary-text": "#141414",
        "secondary-300": "#0065FE",
        "background-blue": "#1E3448",
      },
    },
  },
  plugins: [],
};

