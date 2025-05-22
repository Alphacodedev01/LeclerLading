declare module 'vue-i18n' {
  interface DefineLocaleMessage {
    welcome: string
    nav: {
      home: string
      rooms: string
      services: string
      rooftop: string
      contact: string
    }
    home: {
      hero: {
        title: string
        subtitle: string
      }
      about: {
        title: string
        description: string
      }
    }
    rooms: {
      title: string
      description: string
    }
    services: {
      title: string
      description: string
    }
    contact: {
      title: string
      form: {
        name: string
        email: string
        message: string
        submit: string
      }
    }
  }
} 