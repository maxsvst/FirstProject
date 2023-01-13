/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js, jsx}'
  ],
  theme: {
    extend: {
      margin: {
        '20.5px': '20.5px',
        '19.5px': '19.5px',
        '14.97px': '14.97px',
        '15.97px': '15.97px',
        '85px': '85px'
      },
      padding: {
        '33.06px': '33.06px'
      },
      height: {
        '64px': '64px',
        '33.06px': '33.06px'
      },
      width: {
        '35px': '35px'
      },
      fontFamily: {
        'sans': ['Montserrat'],
        'serif': ['Montserrat'],
        'mono': ['Montserrat'],
        'display': ['Montserrat'],
        'body': ['Montserrat'],
      }
    },
  },
  plugins: [],
}
