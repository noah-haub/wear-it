/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius:{
        button:'10px'
      },
      backgroundColor:{
        primary:'#363636',
        secondary: '#FFFAFA',
        grey:'#E1E1E1',
        lightGray: "#F1F1F1",
      },
      textColor:{
        primary: '#FFFAFA',
        secondary:'#3B3B3B'
      },
    },

  },
  plugins: [],
}

