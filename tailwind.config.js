/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        ravenclaw: {
          50: "#e0bad4",
          100: "#cf92c7",
          200: "#9a52ac",
          300: "#5a268c",
          400: "#270c6e",
          500: "#080055",
          600: "#000040",
          700: "#00022f",
          800: "#000121",
          900: "#020115",
        }
      }
    },
  },
  plugins: [],
};
