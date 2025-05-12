<template>
  <section class="relative h-screen">
    <!-- Fondo con overlay -->
    <div class="absolute inset-0">
      <img 
        src="/images/FOTOS HOTEL/FOTOS HOTEL LECLECR/leclercfinalshighres-2893.jpg"
        alt="Leclerc Hotel Boutique" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Elementos decorativos del Hero -->
    <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent opacity-50"></div>
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
    
    <!-- Bordes decorativos -->
    <div class="absolute inset-0 border-[10px] border-white/5 m-5 sm:m-8 md:m-12 pointer-events-none"></div>
    
    <!-- Elementos ornamentales en las esquinas -->
    <div class="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-white/30 pointer-events-none"></div>
    <div class="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-white/30 pointer-events-none"></div>
    <div class="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-white/30 pointer-events-none"></div>
    <div class="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-white/30 pointer-events-none"></div>
    
    <!-- Decoración francesa de fleur-de-lis estilizada -->
    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 60 60" class="fill-white/40">
        <path d="M30 20c-1.5 0-2.66 1.14-2.66 2.66 0 1.3.7 2.36 2 2.87v-1.5c-.5-.2-.89-.95-.89-1.36 0-.83.66-1.48 1.48-1.48s1.48.66 1.48 1.48c0 .4-.39 1.15-.9 1.36v1.5c1.3-.5 2-1.56 2-2.87 0-1.52-1.14-2.66-2.66-2.66zm0-10C28.6 10 24 10.53 24 15c0 2.97 2 4.35 2.8 5.24-1.4.43-2.8 1.2-2.8 3.42 0 1.45.7 2.33 1.45 2.86-.95.34-1.45.94-1.45 1.48s.5 1.13 1.45 1.47C24 30.15 22 32.1 22 35c0 .75.15 4 3 5.8 2.35 1.47 5 1.47 5 1.47s2.65 0 5-1.47c2.85-1.8 3-5.05 3-5.8 0-2.9-2-4.85-3.45-5.53.94-.34 1.45-.93 1.45-1.47s-.5-1.14-1.45-1.48c.76-.53 1.45-1.4 1.45-2.86 0-2.22-1.4-3-2.8-3.42.8-.9 2.8-2.27 2.8-5.24 0-4.47-4.6-5-6-5z" />
      </svg>
    </div>
    
    <!-- Contenido del Hero -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white space-y-6 px-4">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1200 } }"
          class="font-['Pinyon_Script'] text-7xl md:text-8xl lg:text-9xl relative"
        >
          Leclerc
          <!-- Underline decorativo -->
          <span class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#CBA135] to-transparent"></span>
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 1000, delay: 500 } }"
          class="font-sans uppercase tracking-[0.3em] text-sm md:text-base"
        >
          HOTEL BOUTIQUE
        </p>
        
        <!-- Separador decorativo -->
        <div 
          v-motion
          :initial="{ scaleX: 0 }"
          :visible="{ scaleX: 1, transition: { duration: 1000, delay: 800 } }"
          class="h-px w-16 md:w-24 mx-auto bg-gradient-to-r from-transparent via-white to-transparent"
        ></div>
        
        <!-- Frase adicional -->
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 1200 } }"
          class="font-serif italic text-sm md:text-base text-white/70 mt-2"
        >
          Elegancia parisina en el corazón de Colombia
        </p>
      </div>
    </div>
    
    <!-- Botón de scroll para móvil -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white hover:text-[#CBA135] transition-colors duration-300 cursor-pointer animate-bounce hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useMotion } from '@vueuse/motion'
</script>

<style scoped>
/* Animación de resplandor para elementos dorados */
.glow-effect {
  animation: glow 4s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 1px rgba(203, 161, 53, 0));
  }
  to {
    filter: drop-shadow(0 0 3px rgba(203, 161, 53, 0.8));
  }
}
</style> 