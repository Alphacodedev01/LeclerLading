/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#C8B560',
        'darkwood': '#111111',
        'slate': '#64748b',
        'base': '#f5f5f1',
        'primary': '#C8B560',
        'text': '#111111',
        'room': {
          'dalia': '#E6D5D5',
          'lavande': '#E6E6FA',
          'rose': '#FFE4E1',
          'jasmin': '#FFF5E1',
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'display-italic': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Títulos principales
        'heading-1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-2': ['3rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-3': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        // Subtítulos
        'subtitle-large': ['2rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'subtitle': ['1.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        // Texto del cuerpo
        'body-large': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        // Elementos destacados
        'display-large': ['4rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'display-medium': ['3rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 