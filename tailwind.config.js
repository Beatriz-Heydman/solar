module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"], // add your preferred file extensions here
  theme: {
    colors: {
      white: "#ffffff",
      blue: "#0A437B",
      black: "#000000",
      yellow: "#F2CC37",
      light_gray: "#9AA4AC",
      medium_gray: "#4C5861",
      dark_gray: "#051A2E",
      gray_background: "#F1F3F9",
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
