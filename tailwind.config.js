/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
    colors: {
      primary: "#0103ba",
      gray: "#888888",
    },
  },
  plugins: [],
};
