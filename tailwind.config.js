/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8202",
        text1: "#808080",
        bg1: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
