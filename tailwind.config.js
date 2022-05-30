const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        "box-inner-shadow": "0 0 1px inset"
      },
      colors: {
        "primary": "#212121",
        "secondary": "#383838",
        "main": "#8b8b8b",
        "base": "#181818"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}