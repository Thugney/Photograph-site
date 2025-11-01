import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f3',
          100: '#d9e5e3',
          200: '#b3cbc7',
          300: '#8db1ab',
          400: '#67978f',
          500: '#638A82', // Main sage green from logo
          600: '#507068',
          700: '#3c544e',
          800: '#283834',
          900: '#141c1a',
        },
        secondary: {
          50: '#e9e8ec',
          100: '#d3d2d9',
          200: '#a7a5b3',
          300: '#7b788d',
          400: '#4f4b67',
          500: '#1B1A28', // Deep navy from logo
          600: '#161520',
          700: '#101018',
          800: '#0b0a10',
          900: '#050508',
        },
        accent: {
          50: '#fefcfb',
          100: '#fdf9f7',
          200: '#fbf3ef',
          300: '#f9ede7',
          400: '#f7e7df',
          500: '#F5E9E2', // Warm beige from logo
          600: '#c4bab5',
          700: '#938c88',
          800: '#625d5a',
          900: '#312f2d',
        },
        brown: {
          50: '#efeae7',
          100: '#dfd5cf',
          200: '#bfab9f',
          300: '#9f816f',
          400: '#7f573f',
          500: '#594938', // Warm brown from logo
          600: '#473a2d',
          700: '#352c22',
          800: '#241d16',
          900: '#120f0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
