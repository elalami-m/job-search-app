/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    
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
=======
    extend: {
      colors: {
        primary: {
          50: "#e0cad5",
          100: "#cfb1c5",
          200: "#a883ac",
          300: "#775d8c",
          400: "#4c406e",
          500: "#2d2a55",
          600: "#1b1c40",
          700: "#10122f",
          800: "#090a21",
          900: "#060515",
        },
      },
>>>>>>> 48dc07db96a329138d3c7c93f24ce30ab53e61eb
    },
  },
  plugins: [],
};
