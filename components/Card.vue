<template>
  <div 
    class="group relative overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
    
    <!-- Imagen -->
    <div class="relative h-64 overflow-hidden">
      <img 
        :src="imageUrl"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>

    <!-- Contenido -->
    <div class="p-6">
      <h3 class="font-playfair text-2xl text-darkwood">{{ title }}</h3>
      
      <!-- Rating (opcional) -->
      <div v-if="showRating" class="mt-3 flex items-center text-gold">
        <span v-for="i in 5" :key="i" class="mr-1">
          <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </span>
      </div>

      <p class="mt-4 text-slate/80">{{ description }}</p>

      <!-- Características (opcional) -->
      <div v-if="features && features.length" class="mt-6 flex flex-wrap gap-3">
        <span v-for="(feature, index) in features" :key="index"
          class="rounded-full bg-base px-3 py-1 text-sm text-darkwood">
          {{ feature }}
        </span>
      </div>

      <!-- Footer (precio y botón) -->
      <div v-if="showFooter" class="mt-6 flex items-center justify-between">
        <div v-if="price">
          <span class="text-sm text-slate">Desde</span>
          <p class="text-2xl font-semibold text-darkwood">{{ price }}<span class="text-sm">/noche</span></p>
        </div>
        
        <slot name="action">
          <button 
            v-if="actionText"
            class="rounded-full bg-gold px-6 py-2 text-white transition-colors hover:bg-darkwood"
            @click="$emit('action-click')"
          >
            {{ actionText }}
          </button>
        </slot>
      </div>

      <!-- Slot para contenido personalizado -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion'

defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  },
  showRating: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  actionText: {
    type: String,
    default: ''
  }
})

defineEmits(['action-click'])
</script> 