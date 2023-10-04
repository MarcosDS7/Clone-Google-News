/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      padding: {
        '5.5': '1.375rem',
      },
      fontSize: {
        '2xl.5': '1.375rem'
      },
      colors: {
        transparent: "transparent",
        custom: {
          dark: "#202124",
          white: "#E2E2E3",
          body: "#292A2D"
        },
      },
    },
  },
  plugins: [],
};
