/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
        // Replace the old color names with the new ones
        sky: colors.lightBlue, // lightBlue renamed to sky
        stone: colors.warmGray, // warmGray renamed to stone
        neutral: colors.trueGray, // trueGray renamed to neutral
        gray: colors.coolGray, // coolGray renamed to gray
        slate: colors.blueGray, // blueGray renamed to slatey
    },
  },
  plugins: [],
};
