/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#000000",
              foreground: "#ECEDEE",
            },
            secondary: {
              DEFAULT: "blue"
            },
          },
        }
      }
    }),
  ],
}