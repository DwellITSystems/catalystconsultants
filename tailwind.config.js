/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  safelist: [
    'opacity-0', 'opacity-100',
    'translate-y-4', 'translate-y-0',
    'scale-95', 'scale-100',
    'transition-all', 'ease-in-out'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      maxHeight: {
        '0': '0',
        'screen': '100vh',
        'full': '9999px'
      },
      backgroundImage: {

      },
      colors: {
        "primary": "rgba(var(--primary-color),1)",
        "primary-foreground": "rgba(var(--primary-foreground),1)",
        "secondary-color": "rgba(var(--secondary-color),1)",
        "tertiary-color": "rgba(var(--tertiary-color),1)",
        "main-bg-color": "rgba(var(--bg-color),1)"
      },
      backgroundColor: {
        'nav-scrolled': 'rgba(255, 255, 255, 0.95)',
      },
      translate: {

      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '100%': { opacity: '1', transform: 'translateY(0)' },
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'slide-down': 'slide-down 1.4s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      fontSize: {
        '12': '12px',
        '14': '14px'
      },
      height: {

      },
      width: {

      }
    }
  },
  plugins: [],
}

