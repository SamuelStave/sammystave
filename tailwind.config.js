
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E0E0C",
        surface: "#171614",
        surface2: "#201E1B",
        text: "#F5F3EF",
        muted: "#A8A29A",
        line: "#2A2825",
        gold: "#C9A86A",
        goldHover: "#B8975B",
      },
      fontFamily: {
        display: ["Instrument Serif","Georgia","serif"],
        sans: ["General Sans","Inter","system-ui","sans-serif"],
      }
    },
  },
  plugins: [],
}
