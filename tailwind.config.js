/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif']
      },
      colors: {
      customtext: '#015579',
        custombg: '#015579',
      },
      margin: {
        'custom-left': '17px',
        'custom-right': '-15px',
        'custon-left1': '', // This seems to be missing a value
        'custom-right1': '-3px',
      },
      screens: {
        '3xl': { 'min': '1919px' },
        '2xl': { 'min': '1600px' },
        'xs': { 'max': '426px' },
        's': { 'max': '376px' },
        'a': { 'max': '321px' },
      },
    },
  },
  plugins: [],
}
