/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : '#0F0F0F',
        "border" : "#3F3F3F",
        "btn-hover" : '#3D3D3D',
        "btn-select" : '#F1F1F1',
        "cst-darkgray" : {
          500 : '#AAAAAA',
          600 : '#717171',
          700 : '#272727',
          800 : '#222222',
          900 : '#181818'
        },
        "input-txt" : '#121212',
        "txt" : '#FFFFFF',
      },
      minWidth: {
        '12': '48px',
      },
    },
  },
  plugins: [],
}
