module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  theme: {
    colors: {
      white: '#fefefe',
      gray: {
        100: '#f8f8f8',
        300: '#dddddd',
        500: '#363435',
        600: '#252324',
        800: `#131213`,
        900: '#070707',
      },
      red: {
        300: '#eb3237',
        800: '#a71318',
      },
    },
    extend: {
      fontFamily: {
        body: ['Fira'],
        brand: ['Game of Squids'],
        nav: ['Ethnocentric'],
        heading: ['Toxigenesis'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
