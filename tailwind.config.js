/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#CBA135',
        'darkwood': '#4A4A4A',
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
      backgroundImage: {
        'pattern-fleur-de-lis': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23CBA135' fill-opacity='0.4'%3E%3Cpath d='M30 20c-1 0-1.8.8-1.8 1.8 0 .5.2 1 .6 1.3-.5.3-.8.8-.8 1.5 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.3-1.2-.8-1.5.4-.3.6-.8.6-1.3 0-1-.8-1.8-1.8-1.8zm0-10c-1 0-1.8.8-1.8 1.8 0 .5.2 1 .6 1.3-.5.3-.8.8-.8 1.5 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.3-1.2-.8-1.5.4-.3.6-.8.6-1.3 0-1-.8-1.8-1.8-1.8zm0 20c-1 0-1.8.8-1.8 1.8 0 .5.2 1 .6 1.3-.5.3-.8.8-.8 1.5 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.3-1.2-.8-1.5.4-.3.6-.8.6-1.3 0-1-.8-1.8-1.8-1.8zm0 20c-1 0-1.8.8-1.8 1.8 0 .5.2 1 .6 1.3-.5.3-.8.8-.8 1.5 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.7-.3-1.2-.8-1.5.4-.3.6-.8.6-1.3 0-1-.8-1.8-1.8-1.8z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      fontFamily: {
        'sans': ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'script': ['Pinyon Script', 'cursive'],
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