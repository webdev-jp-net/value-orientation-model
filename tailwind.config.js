/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '829px', // LINE Design System breakpoint
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {
      // Container widths
      maxWidth: {
        'container': '1280px',
        'guide': '1236px',
        'guide-compressed': '996px',
        'w1200': '1200px',
      },
      // Colors
      colors: {
        primary: {
          DEFAULT: '#06c755',
          10: 'rgba(6, 199, 85, 0.1)',
          20: 'rgba(6, 199, 85, 0.2)',
          40: 'rgba(6, 199, 85, 0.4)',
          60: 'rgba(6, 199, 85, 0.6)',
          80: 'rgba(6, 199, 85, 0.8)',
        },
        secondary: {
          DEFAULT: '#4d73ff',
          10: 'rgba(77, 115, 255, 0.1)',
          20: 'rgba(77, 115, 255, 0.2)',
          40: 'rgba(77, 115, 255, 0.4)',
          60: 'rgba(77, 115, 255, 0.6)',
          80: 'rgba(77, 115, 255, 0.8)',
        },
        tertiary: {
          DEFAULT: '#f7f8f9',
          10: 'rgba(247, 248, 249, 0.1)',
          20: 'rgba(247, 248, 249, 0.2)',
          40: 'rgba(247, 248, 249, 0.4)',
          60: 'rgba(247, 248, 249, 0.6)',
          80: 'rgba(247, 248, 249, 0.8)',
        },
        dark: {
          DEFAULT: '#000000',
          10: 'rgba(0, 0, 0, 0.1)',
          20: 'rgba(0, 0, 0, 0.2)',
          40: 'rgba(0, 0, 0, 0.4)',
          60: 'rgba(0, 0, 0, 0.6)',
          80: 'rgba(0, 0, 0, 0.8)',
        },
        gray: {
          dark: '#1f1f1f',
          medium: '#2a2a2a',
          placeholder: '#949494',
          'placeholder-light': '#b7b7b7',
          caption: '#999999',
          'caption-light': '#bbbbbb',
          paragraph: '#616161',
          border: '#efefef',
          'border-medium': '#dfdfdf',
          'bg-light': '#fcfcfc',
          'bg-medium': '#f5f5f5',
          'bg-soft': '#f6f6f8',
          'bg-tertiary': '#f7f8fb',
        },
        error: '#e02000',
        link: '#2196f3',
        success: '#06c755',
      },
      // Typography
      fontSize: {
        // Display styles
        'display': ['60px', { lineHeight: '84px', fontWeight: '900' }],
        'display-mobile': ['35px', { lineHeight: '48px', fontWeight: '900' }],
        // Section titles
        'section': ['48px', { lineHeight: '60px', letterSpacing: '-1px', fontWeight: '900' }],
        'section-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-1px', fontWeight: '900' }],
        // Headings
        'h2': ['32px', { lineHeight: '38px', letterSpacing: '-1px', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'h3-mobile': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'h4': ['18px', { lineHeight: '26px', fontWeight: '700' }],
        'h4-mobile': ['16px', { lineHeight: '24px', fontWeight: '700' }],
        'h5': ['16px', { lineHeight: '21px', fontWeight: '700' }],
        'h5-mobile': ['15px', { lineHeight: '21px', fontWeight: '700' }],
        // Body text
        'body': ['15px', { lineHeight: '19px', fontWeight: '400' }],
        'paragraph': ['18px', { lineHeight: '26px', fontWeight: '400' }],
        'paragraph-mobile': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        // Small text
        'caption': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '20px', fontWeight: '400' }],
        'xs': ['10px', { lineHeight: '14px', fontWeight: '400' }],
      },
      fontFamily: {
        sans: ['LINE Seed JP', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        black: '900',
      },
      // Border radius
      borderRadius: {
        'ldsg-100': '3px',
        'ldsg-200': '5px',
        'ldsg-300': '7px',
        'ldsg-400': '12px',
        'ldsg-circle': '50%',
      },
      // Box shadows
      boxShadow: {
        'card-hover': '0 5px 12px 0 rgba(0, 0, 0, 0.07)',
      },
      // Spacing
      spacing: {
        '4.5': '11px',
        '6.5': '15px',
        '7': '16px',
        '7.5': '19px',
        '8': '20px',
        '9': '24px',
        '10': '27px',
        '10.5': '28px',
        '11': '30px',
        '12': '32px',
        '13': '33px',
        '14': '39px',
        '15': '40px',
        '17': '60px',
        '20': '80px',
        '22': '88px',
        '25': '100px',
        '27': '120px',
        '35': '140px',
        '40': '160px',
      },
      // Transition
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
