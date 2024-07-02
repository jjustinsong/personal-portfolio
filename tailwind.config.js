/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      height: {
        'screen-minus-186px': 'calc(100% - 186px)',
      },
      width: {
        '1/11': '9.09090909%',
        '2/11': '18.18181818%',
        '3/11': '27.27272727%',
        '5/11': '45.45454545%',
      },
      animation: {
        slideInFromLeft: '1s ease-in-out 0s 1 slideInFromLeft',
        slideInFromRight: '1s ease-in-out 0s 1 slideInFromRight',
        slideInFromTop: '1s ease-in-out 0s 1 slideInFromTop',
      },
      keyframes: {
        slideInFromLeft: {
          '0%, 30%': {transform: 'translateX(-10%)', opacity: '0%'},
          '100%': {transform: 'translateX(0)', opacity: '100%'}
        },
        slideInFromRight: {
          '0%, 30%': {transform: 'translateX(50%)', opacity: '0%'},
          '100%': {transform: 'translateX(0)', opacity: '100%'}
        },
        slideInFromTop: {
          '0%, 30%': {transform: 'translateY(-10%)', opacity: '0%'},
          '100%': {transform: 'translateY(0)', opacity: '100%'},
        },
      },
      boxShadow: {
        's': '0 0.5em 0.5em -0.4em var(--hover)',
      },
      colors: {
        'gray': '#939597',
        'dark': '#212121',
        'hovergray': '#9A9A9A',
        'proj': '#2c2c2c',
        'language': 'rgb(107, 72, 72)',
      },
      spacing: {
        '50px': '50px',
        '7px': '7px',
        '125px': '125px',
        '100px': '100px',
        '70px': '70px',
        '249px': '249px',
        '500px': '500px',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'worksans': ["'Work Sans'"],
    },
  },
  plugins: [],
}

