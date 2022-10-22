/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(322.24deg, #87A2FB 26.8%, #6F38C5 82.07%)",
        "glass-gradient":
          "linear-gradient(101.45deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        lg: "0px 4px 24px -1px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "321px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        gothic: ["Gothic A1", "sans-serif"],
      },
    },
  },
  plugins: [],
};
