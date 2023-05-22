/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spec-green': '#4eb570'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

