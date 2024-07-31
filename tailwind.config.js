/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        '50': '#fafafa',
        '100': '#f4f4f5',
        '200': '#e4e4e7',
        '300': '#d4d4d8',
        '400': '#a1a1aa',
        '500': '#71717a',
        '600': '#52525b',
        '700': '#3f3f46',
        '800': '#27272a',
        '900': '#18181b',
        '950': '#09090b',
      },
      fontFamily: {
        sg: ['Space Grotesk', 'sans-serif'],
        cd: ['Clash Display', 'sans-serif'],
      },
    },
    fill: {
      current: 'currentColor',
    },
  },
  plugins: [],
}