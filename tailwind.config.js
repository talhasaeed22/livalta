module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    fonts: {
      'display': ['ondo-medium', 'Segoe UI', 'sans-serif'],
      'body': ['ondo-regular', 'Segoe UI', 'sans-serif'],
      'strangelove': ['strangelove', 'ondo-regular', 'Segoe UI', 'sans-serif'],
    },
    fontSize: {
      'tiny': '1rem',
      'base': '1.2rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '1xl': '1.75rem',
      '2xl': '2rem',
      '25xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '45xl': '4rem',
      '5xl': '6rem',
      '6xl': '8rem',
      '7xl': '10rem',
      '8xl': '13rem',
      '9xl': '16rem',
      '10xl': '20rem',
    },
    colors: {
      blue: {
        400: '#020536',
        300: '#040a47',
        200: '#2690ff',
        100: '#00e2d1'
      },
      purple: '#5e2f89',
      pink: '#ff7ae3',
      yellow: '#f1d32b',
      red: '#ff3366',
      black: '#000000',
      grey: {
        100: '#ababab',
        200: '#737373'
      },
      white: '#ffffff',
      orange: '#FF4700'
    },
    letterSpacing: {
      normal: '0',
      wider: '.15em',
    }
  },
  variants: {},
  plugins: [],
}
