/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'top' : '0 0 3px #ccc',
      }
    },
  },
  plugins: [],
};
