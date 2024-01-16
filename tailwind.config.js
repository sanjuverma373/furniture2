/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize:
        { 'size': '100% 100%' },
      fontFamily: {
        "ff-roboto": "Roboto, sans-serif",
        "ff-poppins": "Poppins, sans-serif"
      }
    },
  },
  plugins: [],
}

