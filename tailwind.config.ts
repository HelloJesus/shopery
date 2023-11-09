import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'soft-primary': '#84D187',
        'primary': '#00B207',
        'hard-primary': '#2C742F',
        'warning': '#FF8A00',
        'danger': '#EA4B48',

        'green-900': '#002603',
        'green-800': '#173B1A',
        'green-700': '#2B572E',
        'green-600': '#406B42',
        'green-500': '#618062',
        'green-400': '#7A997C',
        'green-300': '#96B297',
        'green-200': '#B4CCB4',
        'green-100': '#DAE5DA',
        'green-50': '#EDF2EE',

        'gray-900': '#1A1A1A',
        'gray-800': '#333333',
        'gray-700': '#4D4D4D',
        'gray-600': '#666666',
        'gray-500': '#808080',
        'gray-400': '#999999',
        'gray-300': '#B3B3B3',
        'gray-200': '#CCCCCC',
        'gray-100': '#E6E6E6',
        'gray-50': '#F2F2F2',
      },
      screens: {
        'sx': '440px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1320px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    keyframes: {
      menu: {
        '0%': { top: '0' },
        '50%': { top: '50%' },
        '100%': { top: '50%', transform: 'rotate(14deg)' }
      }
    },
    animation: {
      'menu-animate': 'menu 1s ease-in-out 1 forwards',
    },
    plugins: [
      plugin(function({ addComponents }: any) {
        addComponents({
          '.menu-open': {
            color: 'red',
            transition: 'top 300ms ease-in, transform 300ms ease-in 1s'
          }
        })
        
      })
    ]
  },
  plugins: [],
}
export default config
