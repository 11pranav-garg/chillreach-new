/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'morph': 'morph 20s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'morph': 'morph 20s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      colors: {
        'chillreach': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#00adb5',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'glass': {
          'white': 'rgba(255, 255, 255, 0.1)',
        },
        'glass': {
          'white': 'rgba(255, 255, 255, 0.1)',
        },
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate3d(0, 0, 0) rotateZ(0deg)'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'translate3d(0, -50px, 0) rotateZ(180deg)'
          }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.8)',
            transform: 'scale(1.05)'
          }
        },
        morph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'translate3d(0, 0, 0) rotateZ(0deg)'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'translate3d(0, -50px, 0) rotateZ(180deg)'
          }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(34, 211, 238, 0.8)',
            transform: 'scale(1.05)'
          }
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neumorphic': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'clay': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neumorphic': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'clay': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
      },
    },
  },
  plugins: [],
};