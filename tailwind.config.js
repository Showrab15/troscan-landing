/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["'General Sans'", "sans-serif"],
    },
    screens: {
      sm: "390px", // small devices / mobile
      md: "740px", // tablets
      lg: "1440px", // large screens / desktop
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
