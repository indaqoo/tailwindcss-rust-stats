const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
	'./src/**/*.html',
	'./src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        menu: {
          main: '#2c343f',
          sub: '#272e38',
          hover: '#232932',
          hoverDark: '#384250'
        },
        background: {
          light: '#f5f5f5',
          dark: '#1d232a',
        },
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        newGray: colors.gray,
        
      },
      backgroundImage: theme => ({
        'player-stats': "url('../images/background2.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
