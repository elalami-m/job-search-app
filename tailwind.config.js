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
          0: "#0A73DB", // DEFAULT
          50: "#B6F7FC",
          100: "#85ECF9",
          200: "#4BD2F7",
          300: "#2DB8F5",
          400: "#1098F4",
          500: "#0A73DB",
          600: "#084CAF",
          700: "#062D84",
          800: "#041658",
          900: "#02072C",
        },
      },
    },
  },
  plugins: [],
};
