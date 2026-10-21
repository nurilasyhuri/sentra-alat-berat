/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#b45309',
        'primary-hover': '#92400e',
        dark: '#020617',
        muted: '#64748b',
        secondary: '#f8fafc',
        border: '#e2e8f0',
        bg: '#ffffff',
        surface: {
          canvas: '#ffffff',
          card: '#ffffff',
          subtle: '#f8fafc',
          border: '#e2e8f0',
          'border-dark': '#cbd5e1',
        },
        ink: {
          primary: '#020617',
          secondary: '#475569',
          muted: '#64748b',
          inverse: '#ffffff',
        },
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
