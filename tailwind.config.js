/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scrollbar: {
        // scrollbar in gallery profile ukm/komunitas
        custom: {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        },
      },
      screens: {
        s: '550px',
        tanggung: '380px',
        mepet: '460px',
        nanggung: '1100px',
        '3xl': '1440px',
        xxxs: '320px',
        xxs: '375px',
        xs: '390px',
        laptopL: '1440px',
        maxWidth: '1920px',
      },
      colors: {
        goldgradientStart: '#FFE5AF',
        goldgradientEnd: '#E6A263',
      },
      fontFamily: {
        magicretro: 'var(--magic-retro)',
        mulish: 'var(--mulish)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-kuning-putih-kuning':
          'linear-gradient(90deg, #FFE5AF 2%, #FFFFFF 49%, #FFE5AF 100%)',
        'gradient-merah-ungu': 'linear-gradient(180deg, #441C42 0%, #7F152E 100%)',
        'linear-kuning-coklat': 'linear-gradient(180deg, #FFE5AF 46%, #C66C3A 88%)',
        'linear-kuning-coklat2': 'linear-gradient(90deg, #FFE5AF 46%, #E6A263 88%)',
        'gradient-ijo-1': 'linear-gradient(180deg, #39793F 0%, #22564D 100%)',
        'gradient-splash-circle-border':
          'linear-gradient(180deg, #FFE5AF 0%, #E6A263 44.71%, #F15075 100%)',
        'gradient-merah-1': 'linear-gradient(180deg, #7F152E 0%, #BB3C59 60.96%, #F15075 100%)',
        'gradient-ungu-merah-ungu':
          'linear-gradient(90deg, #441E42 -19.09%, #7F152E 39.27%, #441E42 100%)',
        'gradient-kuning-coklat-ijo':
          'linear-gradient(180deg, #FFE5AF 0%, #E6A263 51.68%, #80A252 100%)',
        'gradient-coklat': 'linear-gradient(180deg, #51252A 1%, #E6A263 51.68%, #805A37 51%)',
        'gradient-kuning-coklat-2':
          'linear-gradient(180deg, #FFE5AF 0%, #E6A263 100%, #805A37 51%)',
        'gradient-merah-list': 'linear-gradient(180deg, #E52653 25%, #7F152E 100%)',
        'gradient-kuning-pink': 'linear-gradient(180deg, #FFE1A2 32%, #E12964 100%)',
      },
      boxShadow: {
        'splash-circle-border':
          '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), inset 16px 16px 20px #E6A263',
        'splash-circle-bg': '0px 4px 8px rgba(0, 0, 0, 0.25), inset 16px 16px 10px #7F152E',
        'answer-box': '0px 6.30176px 63.0176px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        flutterButterfly: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(80deg)' },
        },
        goyangTangan: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      backgroundClip: { text: 'text' },
      textFillColor: {
        transparent: 'transparent',
      },
    },
    variants: {
      backgroundClip: ['responsive'],
      textFillColor: ['responsive'],
    },
  },
  plugins: [],
}
