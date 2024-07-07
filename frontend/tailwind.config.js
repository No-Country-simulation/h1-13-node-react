/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        greyPlaceholder: "#939393",
        greyLightText: "#828282",
        greyDarkText: "#49454F",
        greyButton: "#D9D9D9",
        greyButtonHover: "#B0B0B0",
        pinkLight: "#F4A0D0",
        pinkDark: "#D22B8B",
        pinkDarkHover: "rgba(210, 43, 139, 0.8)",
      },
      backgroundImage: {
        pattern: "url('https://justina.vr4it.com/img/pattern.webp')",
        patternWithOverlay: "linear-gradient(rgba(255, 192, 203, 0.2), rgba(255, 192, 203, 0.2)), url('https://justina.vr4it.com/img/pattern.webp')",
      },
      keyframes: {
      },
      animation: {
      }
    },
  },
  plugins: [],
}

