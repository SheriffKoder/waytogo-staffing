/** @type {import('tailwindcss').Config} */

// const colors = require("./constants.jsx");

// to use neon:
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",

  theme: {
    screens: {
      'vp1': '360px',
      // => @media (min-width: 640px) { ... }

      'vp2': '470px',
      // => @media (min-width: 768px) { ... }

      'vp3': '570px',
      // => @media (min-width: 768px) { ... }

      'vp4': '850px',
      
      'vp5': '1024px',
      // => @media (min-width: 1024px) { ... }

      'vp6': '1120px',
      // => @media (min-width: 1024px) { ... }

      'vp7': '1280px',
      // => @media (min-width: 1280px) { ... }

      'vp8': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // colors,
    extend: {
      fontFamily: {
        pier: ['var(--font-pier)']
      }
    },

  },
}