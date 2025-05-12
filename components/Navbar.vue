<template>
  <nav class="fixed w-full z-50 top-0">
    <!-- Barra superior con logo y botones -->
    <div class="bg-[#f5f5f1] border-b border-gray-200">
      <div class="w-full md:max-w-[90%] md:mx-auto">
        <div class="flex justify-between items-center h-20 md:h-32">
          <!-- Botón de idioma (móvil) / Espacio (desktop) -->
          <div class="w-20 md:w-48 pl-4 md:pl-0">
            <button class="text-[#4A4A4A] hover:text-gold transition-colors duration-200 text-lg md:hidden font-serif">
              ES
            </button>
          </div>
          
          <!-- Logo centrado -->
          <div class="flex-1 flex justify-center">
            <NuxtLink to="/" class="block">
              <img 
                :src="profile" 
                alt="Leclerc Hotel Logo"
                class="h-14 md:h-24 w-auto"
              />
            </NuxtLink>
          </div>
          
          <!-- Botón de menú (móvil) / Botones (desktop) -->
          <div class="w-20 md:w-48 flex justify-end pr-4 md:pr-0">
            <button 
              class="text-darkwood md:hidden"
              @click="toggleMenu"
              type="button"
              aria-label="Menú"
            >
              <svg 
                v-if="!isMenuOpen"
                class="w-8 h-8" 
                fill="none" 
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg 
                v-else 
                class="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div class="hidden md:flex items-center space-x-6">
              <button class="text-[#4A4A4A] hover:text-gold transition-colors duration-200 text-xl tracking-wide font-serif">
                ES
              </button>
              <a 
                href="https://reservas.leclerchotel.com" 
                target="_blank"
                class="bg-[#8B7355] text-white px-8 py-2 hover:bg-[#6B5842] transition-colors duration-200 text-xl font-display italic tracking-wide"
              >
                Reservar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Menú móvil -->
    <div 
      v-show="isMenuOpen" 
      class="fixed inset-x-0 top-20 md:top-32 bottom-0 bg-[#f5f5f1] z-40 md:hidden overflow-y-auto transition-opacity duration-200"
      :class="isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div class="flex flex-col items-center space-y-8 py-8">
        <NuxtLink 
          v-for="(link, index) in navigationLinks" 
          :key="index"
          :to="link.to"
          class="text-[#4A4A4A] hover:text-gold transition-colors duration-200 text-2xl font-serif tracking-wide"
          @click="closeMenu"
        >
          {{ link.text }}
        </NuxtLink>
        <div class="pt-8">
          <a 
            href="https://reservas.leclerchotel.com" 
            target="_blank" 
            class="bg-[#8B7355] text-white px-10 py-4 hover:bg-[#6B5842] transition-colors duration-200 text-3xl font-display italic tracking-wide"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
    
    <!-- Barra de navegación con links (desktop) -->
    <div class="bg-white border-b border-gray-200 hidden md:block">
      <div class="max-w-[90%] mx-auto">
        <div class="flex justify-center space-x-16 py-3">
          <NuxtLink 
            v-for="(link, index) in navigationLinks" 
            :key="index"
            :to="link.to" 
            :class="[
              'text-[#4A4A4A] hover:text-gold transition-colors duration-200 text-xl font-serif tracking-wide relative group',
              { 'router-link-exact-active': !isHome && $route.path === link.to }
            ]"
          >
            {{ link.text }}
            <span class="absolute -bottom-[13px] left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '~/assets/js/imageImports'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Cerrar el menú cuando cambia el tamaño de la ventana a desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  // Asegurarse de restaurar el overflow si el componente se desmonta mientras el menú está abierto
  document.body.style.overflow = ''
})

const navigationLinks = [
  { to: '#habitaciones', text: 'Habitaciones' },
  { to: '#galeria', text: 'Galería' },
  { to: '#servicios', text: 'Servicios' },
  { to: '#contacto', text: 'Ubicación y Contacto' },
]

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<style scoped>
.bg-base {
  background-color: #f5f5f1;
}

.router-link-exact-active {
  color: #B8860B !important;
}

.router-link-exact-active span {
  transform: scaleX(1) !important;
}

@media (max-width: 767px) {
  .pointer-events-none {
    pointer-events: none;
  }
}
</style> 