<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Imagen de fondo temporal de Unsplash -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
        alt="Hotel Leclerc Ambience" 
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
      />
    </div>

    <!-- Overlay con gradiente -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

    <!-- Contenido principal -->
    <div class="relative h-full flex items-center justify-center text-center">
      <div 
        class="max-w-4xl px-4 space-y-8"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200 } }">
        
        <!-- Logo y título -->
        <div class="mb-8 space-y-4">
          <p 
            class="font-cursive text-4xl text-gold"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 400 } }">
            Bienvenidos a
          </p>
          <div 
            class="space-y-2"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }">
            <div class="text-5xl font-playfair text-white font-bold tracking-wider">
              LECLERC
            </div>
            <div class="text-xl text-gold">HOTEL BOUTIQUE</div>
          </div>
        </div>

        <h1 
          class="space-y-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }">
          <span class="font-cursive text-4xl block text-gold">Descubre</span>
          <span class="text-5xl md:text-7xl text-white font-playfair leading-tight block">
            Una Experiencia <br>
            <span class="text-gold">Extraordinaria</span>
          </span>
        </h1>

        <p 
          class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }">
          Descubre el lujo y la elegancia en cada detalle
        </p>

        <!-- Botón de reserva con efecto hover -->
        <div 
          class="mt-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1200 } }">
          <a 
            href="#reservar"
            class="group relative inline-flex items-center px-12 py-4 overflow-hidden text-lg font-medium text-white bg-gold rounded-full hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 transition-all duration-300">
            <span class="absolute left-0 w-full h-full bg-darkwood transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            <span class="relative flex items-center">
              Reservar Ahora
              <svg class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800, delay: 1400 } }">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const isVideoLoaded = ref(false)
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Animaciones suaves */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efecto de hover para el botón */
.group:hover .group-hover\:scale-x-100 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 