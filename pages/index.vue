<template>
  <div>
    <!-- Sección Hero -->
    <section class="relative h-screen section-background vertical-borders">
      <div class="absolute inset-0">
        <img 
          src="/images/hotel/leclercfinalshighres-2893.jpg"
          alt="Leclerc Hotel Boutique" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
      
      <!-- Elementos decorativos unificados -->
      <div class="side-pattern pattern-left"></div>
      <div class="side-pattern pattern-right"></div>
      <div class="corner-flourish top-left"></div>
      <div class="corner-flourish top-right"></div>
      <div class="corner-flourish bottom-left"></div>
      <div class="corner-flourish bottom-right"></div>
      
      <!-- Contenido Hero -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white space-y-6 px-4 border-decorative">
          <img 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1200 } }"
            :src="logo"
            alt="Leclerc Hotel Boutique"
            class="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto"
          />
          
        </div>
      </div>
    </section>

    <!-- Sección de Introducción -->
    <section class="relative py-20 bg-white section-background" id="bienvenida">
      <FrenchDecoration />
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center space-y-12">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="space-y-4 sm:space-y-6 text-center"
          >
            <p class="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mx-auto">
              Bienvenido
            </p>
            <div class="h-px w-16 sm:w-24 mx-auto bg-[#CBA135]"></div>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1000, delay: 300 } }"
            class="space-y-6 sm:space-y-8 px-4 sm:px-0"
          >
            <p class="font-serif text-base sm:text-lg md:text-xl text-black leading-relaxed">
              Un refugio de elegancia atemporal donde cada detalle ha sido cuidadosamente diseñado para ofrecer una experiencia extraordinaria.
            </p>
            <p class="font-serif text-base sm:text-lg md:text-xl text-black leading-relaxed">
              Descubra el arte de la hospitalidad francesa en un entorno que combina la sofisticación clásica con el confort contemporáneo.
            </p>
          </div>
          <div class="decorative-separator"></div>
        </div>
      </div>
    </section>

    <!-- Sección de Galería -->
    <section class="relative py-24 bg-white section-background">
      <FrenchDecoration />
      
      <div class="max-w-[1200px] mx-auto px-6 relative z-10">
        <!-- Versión Desktop -->
        <div class="relative h-[80vh] hidden md:block">
          <!-- Imagen Sala de Estar -->
          <div 
            class="absolute left-[5%] top-[5%] w-auto z-30"
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1000 } }"
          >
            <div class="w-[320px] h-[380px] overflow-hidden rounded-sm">
              <img 
                src="/images/hotel/20220223_124056.jpg"
                alt="Sala de Estar Leclerc" 
                class="w-full h-full object-cover object-[center_80%]"
              />
            </div>
          </div>

          <!-- Imagen Interior -->
          <div 
            class="absolute left-[28%] bottom-[30%] w-auto z-20"
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1000 } }"
          >
            <div class="relative">
              <img 
                src="/images/hotel/leclercfinalshighres-2838.jpg"
                alt="Interior Hotel" 
                class="max-w-[300px] w-auto h-auto rounded-sm shadow-md"
              />
            </div>
          </div>

          <!-- Imagen Fachada (atrás) -->
          <div 
            class="absolute right-[15%] top-[15%] w-auto z-10"
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1000 } }"
          >
            <img 
              src="/images/hotel/_APR5096(2).jpg"
              alt="Fachada Hotel" 
              class="max-w-[320px] w-auto h-auto rounded-sm shadow-md"
            />
          </div>

          <!-- Texto decorativo -->
          <div 
            class="absolute right-[5%] top-[45%] z-40 bg-[#e9e9e4] p-6 w-[220px] h-[220px] flex items-center justify-center"
            v-motion
            :initial="{ opacity: 0 }"
            :visible="{ opacity: 1, transition: { duration: 1000 } }"
          >
            <p class="font-script text-xl text-[#4A4A4A] leading-relaxed text-center">
              Leclerc<br>
              le abre sus puertas<br>
              y le recibe con los<br>
              brazos abiertos
            </p>
          </div>
        </div>

        <!-- Versión Mobile -->
        <div class="md:hidden relative">
          <!-- Primera imagen (superior izquierda) -->
          <div class="relative w-[65%] aspect-[4/5] mb-[-10%]">
            <img 
              src="/images/hotel/20220223_124056.jpg"
              alt="Sala de Estar Leclerc" 
              class="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>

          <!-- Segunda imagen (medio derecha) - Más grande -->
          <div class="relative w-[85%] aspect-[4/5] ml-auto">
            <img 
              src="/images/hotel/leclercfinalshighres-2838.jpg"
              alt="Interior Hotel" 
              class="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>

          <!-- Tercera imagen (inferior izquierda) -->
          <div class="relative w-[75%] aspect-[4/3] mt-[-30%]">
            <img 
              src="/images/hotel/_APR5096(2).jpg"
              alt="Fachada Hotel" 
              class="w-full h-full object-cover rounded-sm shadow-md"
            />
          </div>

          <!-- Contenedor para centrar el texto -->
          <div class="relative w-full mt-[-15%]">
            <!-- Texto decorativo -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-[280px]">
              <div class="bg-[#e9e9e4] p-6 rounded-sm shadow-md">
                <p class="font-script text-2xl text-[#4A4A4A] leading-relaxed text-center">
                  Leclerc<br>
                  le abre sus puertas<br>
                  y le recibe con los<br>
                  brazos abiertos
                </p>
              </div>
            </div>
          </div>
          <div class="pb-40"></div>
        </div>
      </div>
    </section>

    <!-- Sección de Habitaciones -->
    <section class="relative py-24 bg-white section-background">
      <FrenchDecoration />
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <!-- Contenido de texto de Habitaciones -->
          <div class="space-y-12 text-center md:text-left">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
              class="space-y-4 sm:space-y-6 text-center"
            >
              <p class="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mx-auto">
                Habitaciones
              </p>
              <div class="h-px w-16 sm:w-24 mx-auto bg-[#CBA135]"></div>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: { duration: 1000, delay: 300 } }"
              class="space-y-6 sm:space-y-8 px-4 sm:px-0"
            >
              <p class="font-serif text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Cada habitación es un universo de calma y elegancia. Inspiradas en la estética parisina, invitan al descanso con detalles acogedores, luz suave y un ambiente que abraza. Un espacio para desconectarse del mundo y dejarse llevar por la tranquilidad.
              </p>
            </div>
          </div>

          <!-- Imagen -->
          <div 
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
          >
            <div class="aspect-[4/3] overflow-hidden rounded-sm max-w-[280px] sm:max-w-[400px] md:max-w-full mx-auto">
              <img 
                src="/images/hotel/_APR5069(1).jpg"
                alt="Habitaciones Leclerc" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Servicios -->
    <section class="relative py-24 bg-white section-background">
      <FrenchDecoration />
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <!-- Imagen -->
          <div 
            class="relative order-2 md:order-1"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
          >
            <div class="aspect-[4/3] overflow-hidden rounded-sm max-w-[280px] sm:max-w-[400px] md:max-w-full mx-auto">
              <img 
                src="/images/hotel/leclercfinalshighres-2817.jpg"
                alt="Servicios Leclerc" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <!-- Contenido de texto de Servicios -->
          <div class="space-y-12 order-1 md:order-2 text-center md:text-left">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
              class="space-y-4 sm:space-y-6 text-center"
            >
              <p class="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black mx-auto">
                Servicios
              </p>
              <div class="h-px w-16 sm:w-24 mx-auto bg-[#CBA135]"></div>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: { duration: 1000, delay: 300 } }"
              class="space-y-6 sm:space-y-8 px-4 sm:px-0"
            >
              <p class="font-serif text-base sm:text-lg md:text-xl text-black leading-relaxed">
                En Leclerc Hotel Boutique, cada detalle está pensado para ofrecer una experiencia única. Desde la calidez de nuestro desayuno artesanal hasta la atención personalizada de nuestro equipo, buscamos que cada momento de tu estancia sea inolvidable. Disfruta de espacios diseñados para el descanso y la conexión, en un ambiente que combina la elegancia francesa con la hospitalidad caleña.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Redes Sociales sin decoración -->
    <section class="relative py-16 bg-[#ae9a89]">
      <!-- Removida la decoración FrenchDecoration de esta sección -->
      
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center space-y-12">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            class="space-y-4 sm:space-y-6"
          >
            <p class="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Redes Sociales
            </p>
            <div class="h-px w-16 sm:w-24 mx-auto bg-white/50"></div>
          </div>
          
          <div 
            class="flex justify-center items-center space-x-12"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
          >
            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              class="text-white hover:text-white/80 transition-colors duration-300">
              <svg class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              class="text-white hover:text-white/80 transition-colors duration-300">
              <svg class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" 
              class="text-white hover:text-white/80 transition-colors duration-300">
              <svg class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion'
import FrenchDecoration from '~/components/FrenchDecoration.vue'
import { logo } from '~/assets/js/imageImports'
</script> 

<style>
.btn-primary {
  @apply bg-gold text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300;
}

footer {
  @apply bg-[#f5f5f1] text-[#4A4A4A];
}

.section-background {
  @apply relative overflow-hidden;
}

.section-background::before {
  content: '';
  @apply absolute inset-0 bg-pattern-fleur-de-lis opacity-15 pointer-events-none;
}

.vertical-borders::before,
.vertical-borders::after {
  content: '';
  @apply absolute top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#CBA135]/15 to-transparent z-10 pointer-events-none;
}

.vertical-borders::before {
  @apply left-8;
}

.vertical-borders::after {
  @apply right-8;
}

.main-section-decoration::before {
  content: '';
  @apply absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-[#CBA135]/20 to-transparent;
}

.decoration-top::before {
  @apply top-5;
}

.decoration-bottom::before {
  @apply bottom-5;
}
</style> 