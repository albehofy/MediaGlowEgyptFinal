module.exports = {
  content: [
    './src/**/*.{html,ts,scss}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px', 
        'xsm': '370px'
      },
      boxShadow: {
        'custom-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
      borderWidth: {
        'custom': '11px', // Custom border width
      },
      borderColor: {
        'custom-color': 'salmon', // Custom border color
      },
      borderStyle: {
        'custom-style': 'inset', // Custom border style
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
