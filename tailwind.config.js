/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      borderColor:{
        primary: 'rgb(45, 126, 126)',
        secandary:'#443184'
      },
      dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
    fontFamily :{
      'hero-font':'Kalam',
      'pro-font':'Signika'
    }
   
  },
  plugins: [],
}

