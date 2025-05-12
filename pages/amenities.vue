<template>
  <div class="min-h-screen section-background vertical-borders">
    <FrenchDecoration />
    <div class="side-pattern pattern-left"></div>
    <div class="side-pattern pattern-right"></div>
    
    <div class="py-24 container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center mb-16 main-section-decoration decoration-bottom">
        <h1 class="font-script text-5xl md:text-6xl lg:text-7xl text-[#4A4A4A] mb-4">Servicios</h1>
        <div class="h-px w-24 mx-auto bg-[#CBA135]"></div>
        <p class="mt-6 text-lg text-[#4A4A4A]/80 max-w-2xl mx-auto font-serif">
          En Leclerc Hotel Boutique, cada detalle está cuidadosamente diseñado para ofrecer una experiencia extraordinaria que combine el lujo francés con la hospitalidad colombiana.
        </p>
      </div>

      <!-- Servicios en grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Gastronomía -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">Gastronomía Exquisita</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Disfrute de nuestro restaurante con lo mejor de la cocina francesa y colombiana, con ingredientes locales y de temporada seleccionados cuidadosamente por nuestro chef.
          </p>
        </div>

        <!-- WiFi -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">WiFi de Alta Velocidad</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Manténgase conectado con nuestro servicio de internet inalámbrico de alta velocidad disponible en todas las áreas del hotel sin costo adicional.
          </p>
        </div>

        <!-- Servicio de habitaciones -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">Servicio a la Habitación</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Disfrute de nuestro menú en la comodidad de su habitación. Servicio disponible de 7:00 AM a 11:00 PM todos los días.
          </p>
        </div>

        <!-- Desayuno Incluido -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">Desayuno Gourmet</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Comience el día con nuestro desayuno gourmet incluido, con una selección de productos locales, panes artesanales y delicias francesas.
          </p>
        </div>

        <!-- Servicio de Concierge -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">Concierge Personal</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Nuestro equipo de concierge está disponible para ayudarle a planificar excursiones, reservas en restaurantes o cualquier necesidad especial durante su estancia.
          </p>
        </div>

        <!-- Traslados -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 mb-6 flex items-center justify-center">
            <svg class="w-12 h-12 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h2 class="text-2xl font-display text-[#4A4A4A] mb-3">Servicio de Traslados</h2>
          <p class="text-center text-[#4A4A4A]/80 font-serif">
            Ofrecemos servicio de traslado desde y hacia el aeropuerto y estaciones de transporte en vehículos privados de lujo (cargo adicional).
          </p>
        </div>
      </div>

      <!-- Sección Servicios Premium -->
      <div class="mt-24">
        <div class="flex flex-col md:flex-row items-center gap-10 main-section-decoration decoration-top decoration-bottom py-10">
          <div class="md:w-1/2">
            <h2 class="font-script text-4xl md:text-5xl text-[#4A4A4A] mb-6">Servicios Premium</h2>
            <p class="text-[#4A4A4A]/80 mb-6 font-serif">
              Para los huéspedes que buscan una experiencia aún más exclusiva, ofrecemos una gama de servicios premium personalizados.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#CBA135] mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="font-serif">Experiencias gastronómicas privadas</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#CBA135] mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="font-serif">Masajes y tratamientos de spa en la habitación</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#CBA135] mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="font-serif">Guías turísticos personales para excursiones</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-[#CBA135] mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                <span class="font-serif">Decoraciones especiales para celebraciones</span>
              </li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <div class="aspect-[4/3] overflow-hidden rounded-sm">
              <img 
                src="/images/FOTOS HOTEL/ALIMENTOS/leclercfinalshighres-2817.jpg" 
                alt="Servicios Premium Leclerc" 
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FrenchDecoration from '~/components/FrenchDecoration.vue'
</script>

<style scoped>
/* Estilos específicos para amenities */
</style> 