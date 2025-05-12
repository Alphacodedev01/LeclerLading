<template>
  <div class="min-h-screen section-background vertical-borders">
    <div class="side-pattern pattern-left"></div>
    <div class="side-pattern pattern-right"></div>
    
    <div class="py-24 container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center mb-16 main-section-decoration decoration-bottom">
        <h1 class="font-['Pinyon_Script'] text-5xl md:text-6xl lg:text-7xl text-[#4A4A4A] mb-4">Contacto</h1>
        <div class="h-px w-24 mx-auto bg-[#CBA135]"></div>
        <p class="mt-6 text-lg text-[#4A4A4A]/80 max-w-2xl mx-auto">
          Estamos a su disposición para responder a cualquier consulta sobre Leclerc Hotel Boutique. Contáctenos y le responderemos a la brevedad.
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Información de contacto -->
        <div class="lg:w-1/2">
          <div class="bg-white p-8 rounded-sm shadow-sm">
            <h2 class="font-['Pinyon_Script'] text-3xl md:text-4xl text-[#4A4A4A] mb-6">Información de Contacto</h2>
            
            <div class="space-y-6">
              <!-- Dirección -->
              <div class="flex items-start">
                <div class="mt-1 text-[#CBA135] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#4A4A4A]">Dirección</h3>
                  <p class="text-[#4A4A4A]/80 mt-1">Calle 15 Norte #9N-62, Granada</p>
                  <p class="text-[#4A4A4A]/80">Cali, Valle del Cauca, Colombia</p>
                </div>
              </div>
              
              <!-- Teléfono -->
              <div class="flex items-start">
                <div class="mt-1 text-[#CBA135] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#4A4A4A]">Teléfono</h3>
                  <p class="text-[#4A4A4A]/80 mt-1">+57 2 489 7000</p>
                  <p class="text-[#4A4A4A]/80">+57 315 574 6900</p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start">
                <div class="mt-1 text-[#CBA135] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#4A4A4A]">Email</h3>
                  <p class="text-[#4A4A4A]/80 mt-1">info@leclerchotel.com</p>
                  <p class="text-[#4A4A4A]/80">reservas@leclerchotel.com</p>
                </div>
              </div>
              
              <!-- Horario -->
              <div class="flex items-start">
                <div class="mt-1 text-[#CBA135] mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-[#4A4A4A]">Horario de Recepción</h3>
                  <p class="text-[#4A4A4A]/80 mt-1">24 horas, 7 días a la semana</p>
                </div>
              </div>
            </div>
            
            <!-- Redes Sociales -->
            <div class="mt-10">
              <h3 class="text-lg font-medium text-[#4A4A4A] mb-4">Síguenos</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-[#4A4A4A]/60 hover:text-[#CBA135] transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="text-[#4A4A4A]/60 hover:text-[#CBA135] transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="text-[#4A4A4A]/60 hover:text-[#CBA135] transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Formulario de contacto -->
        <div class="lg:w-1/2">
          <div class="bg-white p-8 rounded-sm shadow-sm">
            <h2 class="font-['Pinyon_Script'] text-3xl md:text-4xl text-[#4A4A4A] mb-6">Envíenos un Mensaje</h2>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-[#4A4A4A] mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#CBA135]" 
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-[#4A4A4A] mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#CBA135]" 
                    placeholder="Su email"
                  />
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-[#4A4A4A] mb-1">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#CBA135]" 
                  placeholder="Asunto de su mensaje"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-[#4A4A4A] mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  class="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#CBA135]" 
                  placeholder="Su mensaje"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  class="w-full bg-[#CBA135] text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-colors duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div class="mt-16 main-section-decoration decoration-top py-16">
        <h2 class="text-center font-['Pinyon_Script'] text-4xl text-[#4A4A4A] mb-8">Ubicación</h2>
        <div class="h-[400px] w-full rounded-sm overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6446536039264!2d-76.52679838573992!3d3.4722592516846873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66c0336a765%3A0x9c03a85f5b987f3c!2sCl.%2015%20Nte.%20%239N-62%2C%20Cali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses!2sco!4v1653488612068!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para contacto */
</style> 