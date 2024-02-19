/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "FB":"#FBFBFB",
        "0D":"#0D0D0D",
        "DE":"#DEDEDE",
        "EB":"#EBEBEB",
        "DB":"#DBDBDB",
        "BD":"#BDBDBD",
        "F2":"#F2F2F2",
        "6B":"#6B6B6B",
        "F6":"#F6F6F6",
        "4F":"#4F4F4F",
        "D9":"#D9D9D9",
        "97":"#979797",
        "mint-green":"#04B937",
        "txt-red":"#D42323",
        "9F":"#9F9F9F",
        "93":"#939393",
        "86":"#868686",
        "facebook":"#1877f2",
        "baby-blue":"#3567E7",
        "pink":"#FEE2E2",
        "F3D":"#F3DDDD",
        "main":"#010F07",
        "star":"#FFCB11",
        "50":"#505050",
      },
      height:{
        "800":"800px",
        "900":"900px",
        "950":"950px",
        "487":"487px",
        "184":"184px",
        "17":"17px",
        "119":"119px",
      },
      width:{
        '140':'140px',
        '152':'152px',
        '225':'225px',
        '119':'119px',
        '204':'204px',
        '100':'calc(100% - 40px)',
        '200':'calc(100% - 20px)',
      },
      maxWidth:{
        '640': '640px'
      },
      fontSize:{
        "32": ["32px","41.6px"]
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '9': '9px',
        '10': '10px',
      },
      screens:{
        'tab': {'min': '460px'},
      },
      gridTemplateColumns:{
        "grid-2":"repeat(2, minmax(155px, 1fr))",
      },
      inset:{
        '3.5px': '3.5px',
      },
      keyframes:{
        search: {
          '0%, 100%': { width: '0px', height: '0px' },
          '10%': { width: '55px', height: '55px' },
          '20%': { width: '110px', height: '110px' },
          '30%': { width: '165px', height: '165px' },
          '40%': { width: '220px', height: '220px' },
          '50%': { width: '275px', height: '275px', color: '#D42323' },
          '60%': { width: '220px', height: '220px'  },
          '70%': { width: '165px', height: '165px' },
          '80%': { width: '110px', height: '110px' },
          '90%': { width: '55px', height: '55px' },
          '0%,10%,20%,30%,40%,60%,70%,80%,90%': {color: '#010F07'},
        },
        leftRight: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(50px)' },
          '75%': { transform: 'translateX(-50px)' },
        },
      },
      animation:{
        search: 'search 4s linear infinite',
        leftRight: 'leftRight 2s linear infinite',
      }
    },
  },
  plugins: [],
}

