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
    },
  },
  plugins: [],
}

