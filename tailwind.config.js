module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
