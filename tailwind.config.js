/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        text: "#FFFFFF",
        maroon: "#450000",
        maroonHover: "#2A0001",
      },
      borderRadius: {
        btn: "5px",
      },
    },
  },
  plugins: [],
};
