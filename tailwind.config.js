/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      tomato: 'hsl(4, 100%, 67%)',
      orange: 'hsl(346, 100%, 66%)',
      'dark-slate-gray': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      grey: 'hsl(231, 7%, 60%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

