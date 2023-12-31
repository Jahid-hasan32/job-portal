/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#141414",
        "secondery": "#3575E2",
        "third_color" : "#e0dede"
      },
      container:{
        center : true,
      }
    },
  },
  plugins: [],
}

