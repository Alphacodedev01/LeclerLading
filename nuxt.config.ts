// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],
  i18n: {
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    locales: ['es', 'en'],
    vueI18n: './i18n.config.ts'
  }
})
