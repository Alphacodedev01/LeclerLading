<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(image, index) in images" 
         :key="index"
         class="relative aspect-w-4 aspect-h-3 cursor-pointer"
         @click="openLightbox(index)">
      <img 
        :src="image.thumbnail" 
        :alt="image.alt"
        class="object-cover w-full h-full rounded-lg transition-transform duration-200 hover:scale-105"
        loading="lazy">
    </div>
  </div>

  <!-- Lightbox -->
  <div v-if="isLightboxOpen" 
       class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
       @click="closeLightbox">
    <button @click="prevImage" class="absolute left-4 text-gold hover:text-foliage transition-colors duration-200">
      <span class="sr-only">Anterior</span>
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <img 
      :src="images[currentImageIndex].full" 
      :alt="images[currentImageIndex].alt"
      class="max-h-[90vh] max-w-[90vw] object-contain"
      @click.stop>

    <button @click="nextImage" class="absolute right-4 text-gold hover:text-foliage transition-colors duration-200">
      <span class="sr-only">Siguiente</span>
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <button 
      @click="closeLightbox"
      class="absolute top-4 right-4 text-gold hover:text-foliage transition-colors duration-200">
      <span class="sr-only">Cerrar</span>
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    // Cada imagen debe tener: { thumbnail: string, full: string, alt: string }
  }
})

const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = (e) => {
  e.stopPropagation()
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

const prevImage = (e) => {
  e.stopPropagation()
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length
}

// Manejar teclas
const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  
  switch(e.key) {
    case 'ArrowRight':
      nextImage(e)
      break
    case 'ArrowLeft':
      prevImage(e)
      break
    case 'Escape':
      closeLightbox()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script> 