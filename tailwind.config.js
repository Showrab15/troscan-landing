/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'General Sans'", "sans-serif"], // Use exact name from @font-face
      },
    },
  },
  plugins: [],
  darkMode: "class", // optional if you want manual toggle
};
