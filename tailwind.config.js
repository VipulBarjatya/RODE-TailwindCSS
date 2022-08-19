module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/main-banner.jpeg')",
        hero2: "url('assets/main-banner.jpeg')",
      },
      screens: {
        sm: "576px",

        md: "768px",

        lg: "992px",

        xl: "1200px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      colors: {
        darkrode: "#231f20",
        beige: "#ac9870",
        beige2: "#ad9970",
        beige3: "#b79b6e",
        grayrode: "#767676",
      },
    },
  },
  plugins: [require("daisyui")],
};
