/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px -5px 10px 20px rgba(0, 0, 0, 0.3), 0 0px 0px 0px rgba(0, 0, 0, 0.7), 4px 4px 6px -3px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}

