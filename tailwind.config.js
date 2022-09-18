/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainBg: "#F7F9FB",
        iconGreen: "#D1FFDC",
        iconGreen2: "#28A745",
        iconRed: "#FFE9E9",
        iconRed2: "#D90000",
        primary: '#003ECB',
        dark1: "#444444",
      },
      width: {
        medium: "600px",
      },
    },
  },
  plugins: [],
};