module.exports = {
  purge: ['./index.html', './src/**/*.vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito'],
        Roboto: ['Roboto'],
        Lato: ['Lato']
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',

      '4xl': '2360px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}