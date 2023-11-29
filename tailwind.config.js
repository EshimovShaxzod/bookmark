/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        'shadow':' 0px 10px 20px -5px rgba(73, 93, 207, 0.20)',
      },
      fontFamily:{
        'sans':['Rubik','sans-serif'],
      }
    },
  },
  plugins: [],
}