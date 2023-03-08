/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "650px",
      lg: "950px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundColor: {
        "neutral-850": "#1D1D1D",
        "neutral-750": "#333333",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3.25rem",
      },
      borderWidth: {
        1: "1px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        "neutral-950": "#0e0e0e",
        "neutral-850": "#1D1D1D",
        "neutral-750": "#333333",
      },
    },
  },
  plugins: [],
};
