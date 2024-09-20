/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      float: {
        inherit: 'inherit',
      },
      screens: {
        'sm-min': '640px',
        'md-min': '768px',
        'lg-min': '1024px',
        'xl-min': '1280px',
        '2xl-min': '1536px',
        'sm-max': { 'max': '767px' },
        'md-max': { 'max': '1023px' },
        'lg-max': { 'max': '1279px' },
        'xl-max': { 'max': '1535px' },
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        fadeSlideIn: 'fadeSlideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}