/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      body: ['Pally', 'Comic Sans MS', 'sans-serif'],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffff",
            primary: {
              DEFAULT: "#000000",
              foreground: "#ECEDEE",
            },
            secondary: {
              DEFAULT: "#006FEE"
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#151516",
            primary: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C",
            },
            secondary: {
              DEFAULT: "#338EF7"
            },
          },
        }
      }
    }),
  ],
}