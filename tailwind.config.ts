import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-cormorant)', 'serif'],
        romantic: ['var(--font-dancing)', 'cursive'],
      },
      colors: {
        'wedding-red': '#FF3366',
        'wedding-red-dark': '#CC1133',
        'wedding-blue': '#3366FF',
        'wedding-blue-dark': '#1133CC',
        'wedding-purple': '#663399',
        'wedding-text': '#2D3748',
        'wedding-light': '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'star-pattern': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glimmer': 'glimmer 4s ease-in-out infinite',
        'scale-up': 'scaleUp 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'zoom-dazzle': 'zoomDazzle 2s cubic-bezier(0.4, 0, 0.2, 1)',
        'beat': 'beat 1.5s ease-in-out infinite',
        'zoom-pulse': 'zoom-pulse 2s ease-in-out infinite',
        'glow-text': 'glowText 2s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'time-highlight': 'timeHighlight 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.9)' },
        },
        glimmer: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomDazzle: {
          '0%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' },
          '100%': { transform: 'scale(1)', filter: 'brightness(1)' },
        },
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'zoom-pulse': {
          '0%, 100%': { transform: 'scale(1) translateZ(0)' },
          '50%': { transform: 'scale(1.05) translateZ(20px)' },
        },
        glowText: {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,51,102,0.5)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,51,102,0.5), 0 0 40px rgba(255,51,102,0.5)'
          }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' }
        },
        timeHighlight: {
          '0%, 100%': { 
            transform: 'scale(1)',
            textShadow: '0 0 10px rgba(255,255,255,0.5)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,51,102,0.5)'
          }
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.5)',
        'glow-red': '0 0 15px rgba(255, 51, 102, 0.3)',
        'glow-blue': '0 0 15px rgba(51, 102, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config 