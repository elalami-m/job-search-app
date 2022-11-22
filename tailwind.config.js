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
    },
  },
  plugins: [],
};
