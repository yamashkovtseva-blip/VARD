/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background — deep, near-black with a hint of navy (matches logo's darkest blue)
        ink: {
          950: '#0A0B14',
          900: '#0F1120',
          800: '#161A2E',
          700: '#1E2440',
          600: '#2A3055',
        },
        // Logo palette
        teal: {
          DEFAULT: '#3DA89E',
          light: '#5BC4B8',
          dark: '#2E8B7D',
        },
        navy: {
          DEFAULT: '#3D4D9E',
          light: '#5667B8',
          dark: '#2B3A8B',
        },
        violet: {
          DEFAULT: '#7C6BAE',
          light: '#9B8BC4',
          dark: '#5F4F8E',
        },
        // Neutral text colors
        chalk: {
          DEFAULT: '#E8EAF2',
          dim: '#A8AECB',
          mute: '#6B7290',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'logo-gradient': 'linear-gradient(135deg, #3DA89E 0%, #3D4D9E 50%, #7C6BAE 100%)',
        'hero-glow': 'radial-gradient(60% 50% at 50% 0%, rgba(61,168,158,0.18) 0%, rgba(124,107,174,0.12) 40%, rgba(15,17,32,0) 70%)',
        'grid-faint': 'linear-gradient(rgba(168,174,203,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,174,203,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
