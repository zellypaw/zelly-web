import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zelly Brand Colors
        zelly: {
          pink: '#FF1C69',
          pinkDark: '#C2185B',
          blue: '#2979FF',
          neutral: 'rgba(0, 0, 0, 0.7)',
          neutralText: 'rgba(0, 0, 0, 0.87)',
          neutralDown: 'rgba(0, 0, 0, 0.6)',
        },
        primary: {
          DEFAULT: '#FF1C69',
          light: '#FF79B0',
          dark: '#C2185B',
        },
        secondary: {
          DEFAULT: '#2979FF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        // Gradient palette colors
        purple: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#9C27B0',
        },
        pink: {
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#E91E63',
        },
        indigo: {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#3F51B5',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #F3E5F5 0%, #FCE4EC 50%, #E8EAF6 100%)',
        'gradient-2': 'linear-gradient(135deg, #FFF3E0 0%, #FFFDE7 50%, #FFEBEE 100%)',
        'gradient-3': 'linear-gradient(135deg, #E3F2FD 0%, #E0F7FA 50%, #E8EAF6 100%)',
        'gradient-4': 'linear-gradient(135deg, #E8F5E9 0%, #E0F2F1 50%, #E0F7FA 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FF1C69 0%, #FF5C8D 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
