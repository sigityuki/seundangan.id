/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#006241",
        "secondary" : "#EAC784",
        "bg-primary" : "#FFFFFF",
        "bg-secondary" : "#EBECED",
        "text-primary" : "#29384E",
        "text-secondary" : "#7f8895",
      },
    },
    fontFamily:{
      // sans:['Josefin-sans', 'sans-serif'],
      // heading:['Josefin-sans', 'sans-serif'],
    }
  },
  plugins: [],
}