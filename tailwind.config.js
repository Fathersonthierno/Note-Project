/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleLabel:["'Inter'", "sans-serif"]

      },
      colors:{
        'slate-button': 'oklch(86.9% 0.022 252.894)',
        'gray-button': 'oklch(87.2% 0.01 258.338)',
        'slate-button1': 'oklch(55.4% 0.046 257.417)',
      } 
    },
  },
  plugins: [],
}

