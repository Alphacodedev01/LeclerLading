<template>
  <div class="min-h-screen section-background vertical-borders">
    <div class="side-pattern pattern-left"></div>
    <div class="side-pattern pattern-right"></div>
    
    <div class="py-24 container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center mb-16 main-section-decoration decoration-bottom">
        <h1 class="font-['Pinyon_Script'] text-5xl md:text-6xl lg:text-7xl text-[#4A4A4A] mb-4">Habitaciones</h1>
        <div class="h-px w-24 mx-auto bg-[#CBA135]"></div>
        <p class="mt-6 text-lg text-[#4A4A4A]/80 max-w-2xl mx-auto">
          Explore nuestras elegantes suites, cada una con un carácter único y diseñadas para ofrecer el máximo confort y sofisticación.
        </p>
      </div>

      <!-- Habitaciones en grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <!-- Suite Blanco Negro -->
        <div class="flex flex-col">
          <div class="overflow-hidden rounded-sm">
            <img 
              src="/images/FOTOS HOTEL/HABITACIONES/BLANCO NEGRO/_APR5069(1).jpg" 
              alt="Suite Blanco Negro" 
              class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="mt-6">
            <h2 class="font-['Pinyon_Script'] text-2xl md:text-3xl text-[#4A4A4A]">Suite Blanco Negro</h2>
            <div class="h-px w-16 bg-[#CBA135]/40 my-3"></div>
            <p class="text-[#4A4A4A]/80 mt-3">
              Elegancia atemporal en una combinación de blancos y negros sofisticados. Esta suite ofrece un espacio amplio con una cama king size, área de estar y un baño privado de lujo con acabados en mármol.
            </p>
            <div class="flex flex-wrap gap-4 mt-4">
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">36m²</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">King Size</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Vista al Jardín</span>
            </div>
            <a 
              href="#" 
              class="inline-block mt-6 bg-[#CBA135] text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-colors duration-300 text-sm"
            >
              Reservar Ahora
            </a>
          </div>
        </div>

        <!-- Suite Verde -->
        <div class="flex flex-col">
          <div class="overflow-hidden rounded-sm">
            <img 
              src="/images/FOTOS HOTEL/HABITACIONES/VERDE/leclercfinalshighres-2760.jpg" 
              alt="Suite Verde" 
              class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="mt-6">
            <h2 class="font-['Pinyon_Script'] text-2xl md:text-3xl text-[#4A4A4A]">Suite Verde</h2>
            <div class="h-px w-16 bg-[#CBA135]/40 my-3"></div>
            <p class="text-[#4A4A4A]/80 mt-3">
              Un oasis de tranquilidad inspirado en los jardines franceses. La suite ofrece tonos verdes relajantes, una cama queen size, escritorio y un baño privado con ducha de lluvia. Perfecta para viajeros que buscan serenidad.
            </p>
            <div class="flex flex-wrap gap-4 mt-4">
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">32m²</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Queen Size</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Balcón</span>
            </div>
            <a 
              href="#" 
              class="inline-block mt-6 bg-[#CBA135] text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-colors duration-300 text-sm"
            >
              Reservar Ahora
            </a>
          </div>
        </div>

        <!-- Suite Azul Obscuro -->
        <div class="flex flex-col">
          <div class="overflow-hidden rounded-sm">
            <img 
              src="/images/FOTOS HOTEL/HABITACIONES/AZUL OBSCURO/_APR5050(1).jpg" 
              alt="Suite Azul Obscuro" 
              class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="mt-6">
            <h2 class="font-['Pinyon_Script'] text-2xl md:text-3xl text-[#4A4A4A]">Suite Azul Obscuro</h2>
            <div class="h-px w-16 bg-[#CBA135]/40 my-3"></div>
            <p class="text-[#4A4A4A]/80 mt-3">
              Inspirada en las noches parisinas, esta suite sofisticada cuenta con tonos azules profundos, una cama king size, área de lectura y un lujoso baño con bañera de inmersión y amenidades premium.
            </p>
            <div class="flex flex-wrap gap-4 mt-4">
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">40m²</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">King Size</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Bañera de Inmersión</span>
            </div>
            <a 
              href="#" 
              class="inline-block mt-6 bg-[#CBA135] text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-colors duration-300 text-sm"
            >
              Reservar Ahora
            </a>
          </div>
        </div>

        <!-- Suite Arena -->
        <div class="flex flex-col">
          <div class="overflow-hidden rounded-sm">
            <img 
              src="/images/FOTOS HOTEL/HABITACIONES/MANDARINA/leclercfinalshighres-2778.jpg" 
              alt="Suite Arena" 
              class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div class="mt-6">
            <h2 class="font-['Pinyon_Script'] text-2xl md:text-3xl text-[#4A4A4A]">Suite Mandarina</h2>
            <div class="h-px w-16 bg-[#CBA135]/40 my-3"></div>
            <p class="text-[#4A4A4A]/80 mt-3">
              Una experiencia vibrante con tonos cálidos de mandarina que evocan los atardeceres del sur de Francia. Cuenta con una cama queen size, escritorio de trabajo y un baño con ducha de efecto lluvia.
            </p>
            <div class="flex flex-wrap gap-4 mt-4">
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">34m²</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Queen Size</span>
              <span class="inline-block px-3 py-1 text-xs text-[#4A4A4A]/70 bg-[#f5f5f1] rounded-sm">Vista a la Ciudad</span>
            </div>
            <a 
              href="#" 
              class="inline-block mt-6 bg-[#CBA135] text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-colors duration-300 text-sm"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>

      <!-- Amenidades comunes -->
      <div class="mt-24 main-section-decoration decoration-top decoration-bottom py-16">
        <h2 class="text-center font-['Pinyon_Script'] text-4xl text-[#4A4A4A] mb-8">Amenidades en todas las habitaciones</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Aire Acondicionado</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Smart TV</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">WiFi Gratuito</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Caja Fuerte</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Amenidades Premium</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Llave Digital</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Servicio Diario</h3>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <svg class="w-8 h-8 text-[#CBA135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <h3 class="mt-3 font-medium text-[#4A4A4A]">Check-out Tardío*</h3>
          </div>
        </div>
        
        <p class="text-center text-[#4A4A4A]/60 text-sm mt-10">*Sujeto a disponibilidad</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para habitaciones */
</style> 