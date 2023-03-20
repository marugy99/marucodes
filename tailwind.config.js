const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1a1a1a",
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      zinc: colors.zinc,
      stone: colors.zinc,
      cyan: colors.cyan,
      rose: colors.rose,
    },
    fontFamily: {
      heading: ['"DM Serif Display", serif'],
      sans: ['"Archivo", sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
