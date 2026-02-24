import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        // Zelly Brand Colors (Using CSS variables from globals.css)
        zelly: {
          bg: {
            primary: 'var(--color-bg-primary)',
            secondary: 'var(--color-bg-secondary)',
          },
          text: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            tertiary: 'var(--color-text-tertiary)',
            placeholder: 'var(--color-text-placeholder)',
          },
          border: 'var(--color-border)',
          pink: 'var(--color-accent-pink)',
          pinkHover: 'var(--color-button-hover)',
          yellow: 'var(--color-accent-yellow)',
          green: 'var(--color-accent-green)',
        },
        primary: {
          DEFAULT: 'var(--color-accent-pink)',
          light: '#FF79B0', // Keep some fallbacks or add new ones if needed
          dark: 'var(--color-button-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-text-secondary)',
          50: 'var(--color-bg-primary)',
          100: 'var(--color-border)',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: 'var(--color-text-tertiary)',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: 'var(--color-text-primary)',
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
