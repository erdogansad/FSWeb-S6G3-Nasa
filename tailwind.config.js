/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "3rem",
          xl: "3rem",
          "2xl": "0",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        punch: "#dc3329",
      },
    },
  },
  plugins: [],
};
