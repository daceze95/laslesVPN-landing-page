/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        laserRed: '#F53838',
        laserAsh: '#F6F6F6',
        laserMediumAsh: '#4F5665',
        laserDeepAsh: '#F8F8F8',
      },
    },
  },
  plugins: [],
};

