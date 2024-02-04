/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg : '#1F1C3F',
        main: '#3C3D50',
        secondary : '#B5E6DB'
      },
      animation: {
        'tran' : ' tran 1s linear ',
      },
      keyframes: {
        'tran' : {
          '0%' : { transform: 'translateY(-100px)',
                     opacity: '0' },
          '100%' : { transform: 'translateY(0px)',
                   opacity: '1' }
        },
      },
      fontFamily: {
        head: 'Noto Serif Myanmar'
      }
    },
  },
  plugins: [],
}

