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
      // Use the new color names directly
      sky: colors.sky,       // lightBlue renamed to sky
      stone: colors.stone,   // warmGray renamed to stone
      neutral: colors.neutral, // trueGray renamed to neutral
      gray: colors.gray,     // coolGray renamed to gray
      slate: colors.slate,   // blueGray renamed to slate
    },
  },
  plugins: [],
};
