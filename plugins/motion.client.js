import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Configurar el plugin de Motion con opciones explícitas
    nuxtApp.vueApp.use(MotionPlugin, {
      directives: {
        'motion': 'motion',
        'motion-pop': 'motion-pop',
        'motion-slide': 'motion-slide',
      },
      breakpoints: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }
    })
    
    console.log('🚀 VueUse Motion inicializado')
  }
}) 