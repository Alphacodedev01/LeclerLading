<template>
  <div class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-playfair text-darkwood text-center mb-12">
        Nuestras Habitaciones
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="room in rooms"
          :key="room.id"
          v-bind="room"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const rooms = [
  {
    id: 1,
    image: '/images/suite-deluxe.jpg',
    title: 'Suite Deluxe',
    description: 'Nuestra suite más exclusiva con vistas panorámicas, sala de estar independiente y terraza privada.',
    link: '/rooms/suite-deluxe',
    linkText: 'Ver detalles'
  },
  {
    id: 2,
    image: '/images/junior-suite.jpg',
    title: 'Junior Suite',
    description: 'Espaciosa habitación con zona de estar integrada y todas las comodidades para una estancia perfecta.',
    link: '/rooms/junior-suite',
    linkText: 'Ver detalles'
  },
  {
    id: 3,
    image: '/images/superior-room.jpg',
    title: 'Habitación Superior',
    description: 'Elegante y confortable, con vistas al jardín y acabados de primera calidad.',
    link: '/rooms/superior-room',
    linkText: 'Ver detalles'
  },
  {
    id: 4,
    image: '/images/classic-room.jpg',
    title: 'Habitación Clásica',
    description: 'El equilibrio perfecto entre confort y elegancia para una estancia inolvidable.',
    link: '/rooms/classic-room',
    linkText: 'Ver detalles'
  },
  {
    id: 5,
    image: '/images/family-room.jpg',
    title: 'Habitación Familiar',
    description: 'Diseñada para familias, con espacio adicional y todas las comodidades necesarias.',
    link: '/rooms/family-room',
    linkText: 'Ver detalles'
  },
  {
    id: 6,
    image: '/images/garden-suite.jpg',
    title: 'Suite Jardín',
    description: 'Con acceso directo a nuestros jardines y terraza privada para disfrutar del exterior.',
    link: '/rooms/garden-suite',
    linkText: 'Ver detalles'
  }
]
</script> 