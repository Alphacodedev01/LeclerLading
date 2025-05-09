<template>
  <div class="min-h-screen bg-base">
    <!-- Hero Section -->
    <section class="relative h-[60vh] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
        alt="Desayuno Gourmet"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div class="relative flex h-full items-center justify-center text-center">
        <div class="px-4">
          <p class="font-cursive text-3xl text-gold mb-2">Disfruta de</p>
          <h1 class="font-playfair text-5xl text-white md:text-6xl">Servicios & Amenidades</h1>
          <p class="mt-4 text-xl text-white/90">Experiencias exclusivas para nuestros huéspedes</p>
        </div>
      </div>
    </section>

    <!-- Desayuno Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <p class="text-center font-cursive text-3xl text-gold mb-2">Comienza tu día</p>
        <h2 class="text-center font-playfair text-4xl text-darkwood">Desayuno Gourmet</h2>
        <p class="mx-auto mt-4 max-w-2xl text-center text-slate/80">
          Comience su día con una experiencia culinaria excepcional, donde cada plato es preparado con ingredientes frescos y locales.
        </p>

        <!-- Galería de Desayuno -->
        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <!-- Imagen 1 -->
          <div class="group relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
              alt="Desayuno Continental"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 class="font-playfair text-xl">Desayuno Continental</h3>
              <p class="text-sm text-white/80">Selección de panes y pasteles artesanales</p>
            </div>
          </div>

          <!-- Imagen 2 -->
          <div class="group relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
              alt="Frutas Frescas"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 class="font-playfair text-xl">Frutas Frescas</h3>
              <p class="text-sm text-white/80">Selección de frutas de temporada</p>
            </div>
          </div>

          <!-- Imagen 3 -->
          <div class="group relative overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1608877907149-a206d75ba011?auto=format&fit=crop&w=800&q=80"
              alt="Café Gourmet"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div class="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 class="font-playfair text-xl">Café Gourmet</h3>
              <p class="text-sm text-white/80">Café de especialidad y tés selectos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios Section -->
    <section class="bg-darkwood/5 py-20">
      <div class="container mx-auto px-4">
        <p class="text-center font-cursive text-3xl text-gold mb-2">Para tu comodidad</p>
        <h2 class="text-center font-playfair text-4xl text-darkwood">Servicios Exclusivos</h2>
        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <!-- Servicio 1 -->
          <div class="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div class="mb-4 text-gold">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="font-playfair text-xl text-darkwood">Concierge 24/7</h3>
            <p class="mt-2 text-slate/80">Asistencia personalizada para reservas y recomendaciones locales.</p>
          </div>

          <!-- Servicio 2 -->
          <div class="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div class="mb-4 text-gold">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
              </svg>
            </div>
            <h3 class="font-playfair text-xl text-darkwood">Room Service</h3>
            <p class="mt-2 text-slate/80">Menú exclusivo disponible las 24 horas del día.</p>
          </div>

          <!-- Servicio 3 -->
          <div class="rounded-xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div class="mb-4 text-gold">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <h3 class="font-playfair text-xl text-darkwood">Spa & Wellness</h3>
            <p class="mt-2 text-slate/80">Tratamientos exclusivos y masajes relajantes.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion'
</script> 