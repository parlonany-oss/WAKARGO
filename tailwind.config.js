/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#550637',
          dark: '#3d0428',
          light: '#7a0a52',
        },
        accent: {
          DEFAULT: '#d88b2e',
          light: '#e8a84e',
          dark: '#b8721f',
        },
        offwhite: '#fdf6f0',
        border: '#e8e0e4',
        muted: '#6b7280',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
      },
    },
  },
  plugins: [],
}