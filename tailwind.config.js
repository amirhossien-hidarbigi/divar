/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      iran: ["IRANSans.ttf"],
    },
    boxShadow: {
      "3xl": " rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
    },
    height: { hh: "calc(100vh - 64px);" },
  },
  plugins: [],
};
