/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'gradient-shift': 'gradientShift 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'star-twinkle': 'starTwinkle 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        gradientShift: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(5deg)' 
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(-5deg)' 
          },
        },
        shimmer: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        glow: {
          '0%, 100%': {
            opacity: '0.4',
            filter: 'blur(60px)',
          },
          '50%': {
            opacity: '0.7',
            filter: 'blur(80px)',
          },
        },
        neonPulse: {
          '0%, 100%': {
            opacity: '0.3',
            'box-shadow': '0 0 20px rgba(168, 85, 247, 0.3)',
          },
          '50%': {
            opacity: '0.6',
            'box-shadow': '0 0 40px rgba(168, 85, 247, 0.6)',
          },
        },
        starTwinkle: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
