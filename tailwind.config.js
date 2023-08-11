/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "0px",
      md: "468px",
      lg: "766px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        background: "url('/src/images/hero.jpg')",
        background2: "url('/src/images/image1.jpg')",
      },
      colors: {
        orange: "#fff",
        black: "#000",
        grey: "#9ACD32",
        green: "#008000",
        "light-grey": "#383737",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};
