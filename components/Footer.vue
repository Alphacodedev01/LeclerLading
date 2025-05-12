<template>
  <footer class="relative py-16 bg-[#f5f5f1] border-t border-gray-200">
    <!-- Eliminando FrenchDecoration según lo solicitado -->
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo y texto -->
        <div class="md:col-span-2">
          <img 
            :src="logo" 
            alt="Leclerc Hotel" 
            class="h-28 w-auto mb-6"
          />
          <p class="text-[#4A4A4A]/80 mb-6 font-serif leading-relaxed">
            Un refugio de elegancia y tranquilidad donde cada detalle ha sido cuidadosamente pensado para ofrecerle una experiencia única en el corazón de nuestra ciudad.
          </p>
        </div>
        
        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-[#4A4A4A] text-lg font-display mb-6">Enlaces</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-[#4A4A4A]/80 hover:text-[#CBA135] transition-colors duration-200 font-serif">
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/habitaciones" class="text-[#4A4A4A]/80 hover:text-[#CBA135] transition-colors duration-200 font-serif">
                Habitaciones
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicios" class="text-[#4A4A4A]/80 hover:text-[#CBA135] transition-colors duration-200 font-serif">
                Servicios
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/galeria" class="text-[#4A4A4A]/80 hover:text-[#CBA135] transition-colors duration-200 font-serif">
                Galería
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ubicacion-contacto" class="text-[#4A4A4A]/80 hover:text-[#CBA135] transition-colors duration-200 font-serif">
                Contacto
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contacto -->
        <div>
          <h3 class="text-[#4A4A4A] text-lg font-display mb-6">Contacto</h3>
          <div class="space-y-4">
            <p class="flex items-start">
              <span class="text-[#CBA135] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span class="text-[#4A4A4A]/80 font-serif">
                Calle 3 Oeste #3-37<br>
                Barrio El Peñón<br>
                Cali, Colombia
              </span>
            </p>
            <p class="flex items-start">
              <span class="text-[#CBA135] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span class="text-[#4A4A4A]/80 font-serif">
                (+57) 602 893 0567<br>
                (+57) 315 555 8723
              </span>
            </p>
            <p class="flex items-start">
              <span class="text-[#CBA135] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span class="text-[#4A4A4A]/80 font-serif">
                info@leclerchotel.com<br>
                reservas@leclerchotel.com
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <!-- Línea decorativa -->
      <div class="h-px w-full bg-gray-200 my-10"></div>
      
      <!-- Derechos y redes sociales -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-[#4A4A4A]/70 text-sm mb-4 md:mb-0 font-serif">
          © {{ new Date().getFullYear() }} Leclerc Hotel Boutique. Todos los derechos reservados.
        </p>
        
        <div class="flex space-x-4">
          <a href="#" class="text-[#4A4A4A]/70 hover:text-[#CBA135] transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="text-[#4A4A4A]/70 hover:text-[#CBA135] transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" class="text-[#4A4A4A]/70 hover:text-[#CBA135] transition-colors duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { logo } from '~/assets/js/imageImports'
</script> 