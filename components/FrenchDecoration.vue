<template>
  <div class="french-decoration">
    <!-- Patrón clásico francés para el fondo -->
    <div class="absolute inset-0 bg-pattern opacity-[0.12] pointer-events-none"></div>
    
    <!-- Bordes decorativos sutiles -->
    <div class="absolute top-8 left-8 right-8 bottom-8 border border-[#CBA135]/15 pointer-events-none"></div>
    <div class="absolute top-10 left-10 right-10 bottom-10 border border-[#CBA135]/12 pointer-events-none"></div>
    
    <!-- Elementos de esquina más visibles -->
    <div class="absolute top-6 left-6 w-20 h-20 corner-element">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-full h-full opacity-[0.15]">
        <path fill="none" stroke="#CBA135" stroke-width="1" d="M1 1h20M1 1v20M79 1H59M79 1v20M1 79h20M1 79V59M79 79H59M79 79V59"/>
      </svg>
    </div>
    <div class="absolute top-6 right-6 w-20 h-20 corner-element">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-full h-full opacity-[0.15]">
        <path fill="none" stroke="#CBA135" stroke-width="1" d="M1 1h20M1 1v20M79 1H59M79 1v20M1 79h20M1 79V59M79 79H59M79 79V59"/>
      </svg>
    </div>
    <div class="absolute bottom-6 left-6 w-20 h-20 corner-element">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-full h-full opacity-[0.15]">
        <path fill="none" stroke="#CBA135" stroke-width="1" d="M1 1h20M1 1v20M79 1H59M79 1v20M1 79h20M1 79V59M79 79H59M79 79V59"/>
      </svg>
    </div>
    <div class="absolute bottom-6 right-6 w-20 h-20 corner-element">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" class="w-full h-full opacity-[0.15]">
        <path fill="none" stroke="#CBA135" stroke-width="1" d="M1 1h20M1 1v20M79 1H59M79 1v20M1 79h20M1 79V59M79 79H59M79 79V59"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.french-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.12; }
  50% { opacity: 0.18; }
}

.corner-element {
  animation: fadeInOut 10s infinite ease-in-out;
}

.bg-pattern {
  /* Patrón de Flor de Lis más visible */
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CBA135' fill-opacity='0.15'%3E%3Cpath d='M30 16c-1.5 0-2.5 1-2.5 2.5 0 .8.4 1.5 1 1.9-.6.4-1 1.1-1 1.9 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1-1.9.6-.4 1-1.1 1-1.9 0-1.5-1-2.5-2.5-2.5zm0 30c-1.5 0-2.5 1-2.5 2.5 0 .8.4 1.5 1 1.9-.6.4-1 1.1-1 1.9 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1-1.9.6-.4 1-1.1 1-1.9 0-1.5-1-2.5-2.5-2.5zM14 30c-1.5 0-2.5 1-2.5 2.5 0 .8.4 1.5 1 1.9-.6.4-1 1.1-1 1.9 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1-1.9.6-.4 1-1.1 1-1.9 0-1.5-1-2.5-2.5-2.5zm32 0c-1.5 0-2.5 1-2.5 2.5 0 .8.4 1.5 1 1.9-.6.4-1 1.1-1 1.9 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.8-.4-1.5-1-1.9.6-.4 1-1.1 1-1.9 0-1.5-1-2.5-2.5-2.5z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 60px 60px;
}
</style> 