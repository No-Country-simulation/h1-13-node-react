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
        red: "#d0342c",
        green: "#198754",
        yellow: "#ffd151",
        lightBlue: "#02ADDE",
        pinkLightside: "#FEEBC4",
        pinkLightsideitem: "#FFE5B0"
      },
      backgroundImage: {
        pattern: "url('https://justina.vr4it.com/img/pattern.webp')",
        patternWithOverlay: "linear-gradient(rgba(255, 192, 203, 0.2), rgba(255, 192, 203, 0.2)), url('https://justina.vr4it.com/img/pattern.webp')",
      },
      keyframes: {
        trackingInContract: {
          "0%": {
            letterSpacing: "1em;",
            opacity: "0;"
          },
          "40%": {
            opacity: "0.6;"
          },
          "100%": {
            letterSpacing: "normal;",
            opacity: "1;"
          }
        },
        slideInBottom: {
          "0%": {
            transform: "translateY(1000px);",
            opacity: "0;"
          },
          "100%": {
            transform: "translateY(0);",
            opacity: "1;"
          }
        },
      },
      animation: {
        trackingInContract: "trackingInContract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;",
        slideInBottom: "slideInBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      }
    },
  },
  plugins: [],
}

