// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: [300, 400, 500, 600, 700],
        'Playfair Display': [400, 500, 600, 700],
        'Lobster': [400],
        'Great Vibes': [400],
        'Dancing Script': [400, 500, 600, 700],
        'Pinyon Script': [400],
      },
      display: 'swap',
      prefetch: true,
      preconnect: true,
    }],
    '@vueuse/motion/nuxt',
  ],
  app: {
    pageTransition: { 
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: { 
      name: 'slide',
      mode: 'out-in'
    },
    head: {
      title: 'Leclerc Hotel Boutique',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Descubre el lujo y la elegancia francesa en Leclerc Hotel Boutique. Una experiencia única de hospitalidad boutique.' 
        },
        { property: 'og:title', content: 'Leclerc Hotel Boutique' },
        { property: 'og:description', content: 'Descubre el lujo y la elegancia en Leclerc Hotel Boutique. Una experiencia única de hospitalidad.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#F5F2EC' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap'
        }
      ]
    }
  },
  css: [
    '@/assets/css/main.css',
    '~/assets/css/transitions.css',
    '~/assets/css/typography.css',
    '~/assets/css/decorative-elements.css'
  ],
  build: {
    transpile: ['gsap', '@vueuse/motion'],
  },
  vite: {
    optimizeDeps: {
      include: ['@vueuse/motion', 'gsap/ScrollTrigger']
    },
    build: {
      rollupOptions: {
        // Removemos external: ['@vueuse/motion'] para permitir que se incluya en el bundle
      }
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  routeRules: {
    '/.well-known/**': { 
      cors: true,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      static: true
    }
  },
  compatibilityDate: '2025-05-08',
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    compressPublicAssets: true,
    logLevel: 1
  }
})
