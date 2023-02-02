/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#0E3658",
        primary2:"#165081",
      },
    },
    fontFamily: {
      poppins: ["Lexend", "sans-serif"],
    },
  },
  plugins: [],
};
