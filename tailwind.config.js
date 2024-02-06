/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#00AFEF',
        lightBlue: '#85DEFF',
        veryLightBlue: '#BFE8FB',
        green: '#00A859',
        lightGreen: '#51F0A5',
        veryLightGreen: '#A3F5CE',
        darkGrey: '#484848',
        lightGrey: '#D9D9D9',
      }
    },
  },
  plugins: [],
};
