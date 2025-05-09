import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Solo registra los plugins de GSAP en el cliente
  if (process.client) {
    // Registrar plugins GSAP
    gsap.registerPlugin(ScrollTrigger)
    
    // Configuración global para GSAP
    gsap.config({
      autoSleep: 60,
      force3D: true,
      nullTargetWarn: false
    })
    
    // Reiniciar ScrollTrigger en cambios de ruta
    nuxtApp.hook('page:transition:finish', () => {
      ScrollTrigger.refresh()
    })
    
    // Reiniciar ScrollTrigger cuando se carga la página
    nuxtApp.hook('app:mounted', () => {
      ScrollTrigger.refresh()
    })
    
    console.log('🚀 Animaciones GSAP inicializadas')
  }
}) 