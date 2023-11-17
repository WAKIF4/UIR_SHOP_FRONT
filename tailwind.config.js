/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      "uir": "#003667",
      "uir-l": "#D0D700",
      "uir-bg": "#F2F2F2", 
    }},
    
  },
  plugins: [],
}

