<template>
  <div class="min-h-screen bg-base">
    <!-- Hero Section -->
    <section class="relative h-[40vh] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
        alt="Galería Hotel Leclerc"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div class="relative flex h-full items-center justify-center text-center">
        <div class="px-4">
          <p class="font-cursive text-3xl text-gold mb-2">Descubre</p>
          <h1 class="font-playfair text-5xl text-white md:text-6xl">Nuestra Galería</h1>
          <p class="mt-4 text-xl text-white/90">Elegancia en cada detalle</p>
        </div>
      </div>
    </section>

    <!-- Galería Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Filtros -->
        <div class="mb-12 flex flex-wrap justify-center gap-4">
          <p class="w-full text-center font-cursive text-3xl text-gold mb-6">Explora nuestros espacios</p>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              activeCategory === category 
                ? 'bg-gold text-white' 
                : 'bg-darkwood/5 text-darkwood hover:bg-darkwood/10'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Componente Gallery -->
        <Gallery :images="filteredImages" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Habitaciones', 'Restaurante', 'Spa', 'Instalaciones']
const activeCategory = ref('Todos')

const images = ref([
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    full: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    alt: 'Suite Presidencial',
    title: 'Suite Presidencial',
    description: 'Nuestra suite más exclusiva con vistas panorámicas',
    category: 'Habitaciones'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    full: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Restaurante Gourmet',
    title: 'Restaurante Le Jardin',
    description: 'Experiencia culinaria excepcional',
    category: 'Restaurante'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    full: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80',
    alt: 'Spa Wellness',
    title: 'Spa & Wellness',
    description: 'Un oasis de relajación y bienestar',
    category: 'Spa'
  }
])

const filteredImages = computed(() => {
  if (activeCategory.value === 'Todos') return images.value
  return images.value.filter(img => img.category === activeCategory.value)
})
</script> 