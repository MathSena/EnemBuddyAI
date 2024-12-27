/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        enemDarkBlue: '#003A70',
        enemAccentBlue: '#0070A9',
        enemOrange: '#F68B1F',
        lightGray: '#F8F9FA'
      }
    }
  },
  plugins: []
}
