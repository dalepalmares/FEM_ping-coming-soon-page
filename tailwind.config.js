module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)",
        },
        secondary: {
          paleBlue: "hsl(223, 100%, 88%)",
          lightRed: "hsl(354, 100%, 66%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          varyDarkBlue: "hsl(209, 33%, 12%)",
        },
      },

      fontFamily: {
        libreFranklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
