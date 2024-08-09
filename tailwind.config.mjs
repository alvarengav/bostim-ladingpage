/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#010205'
        },
        muted: {
          DEFAULT: '#878C91',
          dark: '#5C5D5F'
        },
        gray: {
          light: '#F0F0F0'
        },
        bgSecondary: {
          DEFAULT: '#E4E6E7'
        },
        accent: {
          DEFAULT: '#99EA48'
        }
      },
      boxShadow: {
        deep: '0 30.08px 50.58px -6.84px rgba(0, 0, 0, 0.44)'
      }
    }
  },
  plugins: []
}
