<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="top-text">{{ $t('home.hero.title') }} <span class="cursive">{{ $t('home.hero.subtitle') }}</span></h1>
      <div class="image-wrapper">
        <NuxtImg
          src="/images/background.webp"
          alt="Hero"
          class="hero-image"
          loading="eager"
        />
      </div>
      <h2 class="bottom-text">{{ $t('home.hero.title2') }} <span class="cursive">{{ $t('home.hero.subtitle2') }}</span></h2>
      <div class="scroll-indicator">
        <div class="scroll-circle"></div>
        <div class="scroll-line"></div>
      </div>
    </div>
  </div>

  <section class="features-section">
    <div class="features-content">
      <div class="features-layout">
        <div class="image-top-left desktop-img" ref="featureTopLeft" :class="{ 'reveal-active': isFeatureVisible }">
          <NuxtImg src="/images/Fachada.webp" alt="Luxury Lounge" class="feature-image" />
        </div>
        <div class="image-bottom-left desktop-img" ref="featureBottomLeft" :class="{ 'reveal-active': isFeatureVisible }">
          <NuxtImg src="/images/3.webp" alt="Exquisite Dining" class="feature-image" />
        </div>
        <div class="features-text" ref="featureText" :class="{ 'reveal-active': isFeatureVisible }">
          <h2>{{ t('home.features.description') }}</h2>
          <NuxtLink to="/rooms" class="view-rooms-btn desktop-only">
            {{ t('home.features.button') }}
          </NuxtLink>
        </div>
        <div class="image-top-right desktop-img" ref="featureTopRight" :class="{ 'reveal-active': isFeatureVisible }">
          <NuxtImg src="/images/9.webp" alt="Luxury Room" class="feature-image" />
        </div>
        <div class="image-bottom-right desktop-img" ref="featureBottomRight" :class="{ 'reveal-active': isFeatureVisible }">
          <NuxtImg src="/images/amenites3.webp" alt="Pool View" class="feature-image" />
        </div>

        <div class="mobile-gallery mobile-only" :class="{ 'reveal-active': isFeatureVisible }">
          <NuxtImg src="/images/Fachada.webp" alt="Luxury Lounge" class="gallery-img" />
          <NuxtImg src="/images/3.webp" alt="Exquisite Dining" class="gallery-img" />
          <NuxtImg src="/images/9.webp" alt="Luxury Room" class="gallery-img" />
          <NuxtImg src="/images/amenites3.webp" alt="Pool View" class="gallery-img" />
        </div>
      </div>
      <NuxtLink to="/rooms" class="view-rooms-btn mobile-only">
        {{ t('home.features.button') }}
      </NuxtLink>
    </div>
  </section>

  <section class="services-preview-section">
    <div class="services-preview-content">
      <div class="services-text" ref="servicesText" :class="{ 'reveal-active': isServicesVisible }">
        <h2>{{ t('home.services.title') }}</h2>
        <p>{{ t('home.services.description') }}</p>
        <NuxtLink to="/services" class="explore-button desktop-only">
          {{ t('home.services.button') }}
        </NuxtLink>
      </div>
      <div class="services-image" ref="servicesImage" :class="{ 'reveal-active': isServicesVisible }">
        <NuxtImg 
          src="/images/6.webp" 
          alt="Spacious Room"
          class="main-image"
          loading="lazy"
        />
      </div>
      <!-- Botón móvil debajo de la imagen -->
      <NuxtLink to="/services" class="explore-button mobile-only">
        {{ t('home.services.button') }}
      </NuxtLink>
    </div>
  </section>

  <section class="testimonials-section" ref="testimonialSection">
    <div class="testimonials-content" :class="{ 'reveal-active': isVisible }">
      <h2 class="testimonials-title">{{ t('home.testimonials.title') }}</h2>
      
      <div class="testimonials-container">
        <div class="testimonials-slider" 
             :style="{ transform: `translateX(-${position}px)` }"
             :class="{ 'no-transition': resetPosition }">
          <div class="testimonial-card" 
               v-for="(testimonial, index) in localTestimonials" 
               :key="index"
               :style="{ 
                 transitionDelay: `${index * 0.2}s`,
                 opacity: isVisible ? 1 : 0,
                 transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
               }">
            <h3>{{ testimonial.title }}</h3>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">{{ testimonial.author }}</div>
            <div class="testimonial-subtitle">{{ t('home.testimonials.subtitle') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()
const testimonialSection = ref(null)
const isVisible = ref(false)
const position = ref(0)
const resetPosition = ref(false)

const featureTopLeft = ref(null)
const featureBottomLeft = ref(null)
const featureText = ref(null)
const featureTopRight = ref(null)
const featureBottomRight = ref(null)
const servicesText = ref(null)
const servicesImage = ref(null)

const isFeatureVisible = ref(false)
const isServicesVisible = ref(false)

const baseTestimonials = [
  {
    title: "Exceptional Experience!",
    text: "Fantastic stay! The staff was welcoming, the rooms were spotless, and the food was amazing. Highly recommend for a luxurious visit.",
    author: "— Sara, USA",
  },
  {
    title: "Perfect Getaway!",
    text: "Beautiful hotel with excellent service and a relaxing vibe. Loved the rooftop views and delicious breakfast. Will be back!",
    author: "— Ali, UAE",
  },
  {
    title: "Unforgettable Stay",
    text: "Impeccable service and stunning décor. The local touches made it extra special. Highly recommended for anyone visiting the region.",
    author: "— Esmeralda, Australia",
  },
  {
    title: "A True Gem!",
    text: "Warm staff, luxurious rooms, and top-notch amenities. The breakfast was a highlight. A must-visit destination!",
    author: "— Yousef, Saudi Arabia",
  },
  {
    title: "Incredible Experience",
    text: "The attention to detail was remarkable. From the welcome drink to the farewell, everything was perfect. Can't wait to return!",
    author: "— Maria, Spain",
  },
  {
    title: "Outstanding Service",
    text: "The staff went above and beyond to make our stay special. The room was beautiful and the location is perfect.",
    author: "— John, UK",
  },
  {
    title: "Paradise Found!",
    text: "An oasis of tranquility. The design is stunning and the service impeccable. A perfect blend of luxury and comfort.",
    author: "— Sophie, France",
  },
  {
    title: "Exceeded Expectations",
    text: "Every detail was thoughtfully considered. The rooms are spacious and the staff is incredibly attentive. Will definitely return!",
    author: "— Carlos, Mexico",
  }
]

const spanishTestimonials = [
  {
    title: "¡Experiencia Excepcional!",
    text: "¡Estancia fantástica! El personal fue acogedor, las habitaciones estaban impecables y la comida fue increíble. Altamente recomendado para una visita de lujo.",
    author: "— Sara, EE.UU.",
  },
  {
    title: "¡Escape Perfecto!",
    text: "Hermoso hotel con excelente servicio y un ambiente relajante. Me encantaron las vistas desde la terraza y el delicioso desayuno. ¡Volveré!",
    author: "— Ali, EAU",
  },
  {
    title: "Estancia Inolvidable",
    text: "Servicio impecable y decoración impresionante. Los toques locales lo hicieron extra especial. Muy recomendado para cualquiera que visite la región.",
    author: "— Esmeralda, Australia",
  },
  {
    title: "¡Una Verdadera Joya!",
    text: "Personal cálido, habitaciones lujosas y servicios de primera clase. El desayuno fue un punto destacado. ¡Un destino imprescindible!",
    author: "— Yousef, Arabia Saudita",
  },
  {
    title: "Experiencia Increíble",
    text: "La atención al detalle fue notable. Desde la bebida de bienvenida hasta la despedida, todo fue perfecto. ¡No puedo esperar para volver!",
    author: "— María, España",
  },
  {
    title: "Servicio Sobresaliente",
    text: "El personal se esforzó al máximo para hacer nuestra estancia especial. La habitación era hermosa y la ubicación es perfecta.",
    author: "— John, Reino Unido",
  },
  {
    title: "¡Paraíso Encontrado!",
    text: "Un oasis de tranquilidad. El diseño es impresionante y el servicio impecable. Una perfecta mezcla de lujo y comodidad.",
    author: "— Sophie, Francia",
  },
  {
    title: "Superó las Expectativas",
    text: "Cada detalle fue considerado cuidadosamente. Las habitaciones son espaciosas y el personal es increíblemente atento. ¡Definitivamente volveré!",
    author: "— Carlos, México",
  }
]

const localTestimonials = computed(() => {
  const testimonials = locale.value === 'es' ? spanishTestimonials : baseTestimonials
  return [...testimonials, ...testimonials].map((item, index) => ({
    ...item,
    id: index + 1
  }))
})

onMounted(() => {
  observeSection()
  startContinuousSlide()
  observeFeatures()
  observeServices()
})

const startContinuousSlide = () => {
  const speed = 0.5
  let lastTime = performance.now()
  
  const animate = (currentTime) => {
    const deltaTime = currentTime - lastTime
    lastTime = currentTime
    
    position.value += speed * deltaTime / 16
    
    if (position.value >= ((localTestimonials.value.length / 2) * 300)) {
      resetPosition.value = true
      position.value = 0
      
      setTimeout(() => {
        resetPosition.value = false
      }, 50)
    }
    
    requestAnimationFrame(animate)
  }
  
  requestAnimationFrame(animate)
}

const observeSection = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2
  })

  if (testimonialSection.value) {
    observer.observe(testimonialSection.value)
  }
}

const observeFeatures = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isFeatureVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2
  })

  if (featureText.value) {
    observer.observe(featureText.value)
  }
}

const observeServices = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isServicesVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2
  })

  if (servicesText.value) {
    observer.observe(servicesText.value)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');

.hero-section {
  min-height: 100vh;
  width: 100%;
  background-color: #054637;
  position: relative;
  margin-top: -80px;
  padding-top: 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-bottom: 3rem;
}

/* Estilos simplificados para la navbar en el hero */
:deep(.navbar) {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
}

.hero-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.top-text, .bottom-text {
  font-family: 'Playfair Display', serif;
  color: #E9DCC9;
  width: 100%;
  margin: 0;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(30px);
}

.top-text {
  font-size: 5rem;
  text-align: left;
  margin-bottom: -2rem;
  animation: slideUp 1s ease forwards;
  animation-delay: 0.5s;
}

.bottom-text {
  font-size: 4rem;
  text-align: right;
  margin-top: -1rem;
  animation: slideUp 1s ease forwards;
  animation-delay: 1.5s;
}

.cursive {
  font-style: italic;
  font-weight: 500;
}

.image-wrapper {
  width: 100%;
  height: 30vh;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  animation: scaleIn 1.2s ease forwards;
  animation-delay: 1s;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
    padding-bottom: 3rem;
  }

  .top-text {
    font-size: 2.5rem;
    margin-bottom: -1rem;
  }

  .bottom-text {
    font-size: 2rem;
    margin-top: -0.5rem;
  }

  .image-wrapper {
    height: 30vh;
    border-radius: 20px;
  }

  .features-section {
    padding: 2rem 1.5rem;
    background-color: #fff;
  }

  .features-content {
    padding: 0;
  }

  .features-layout {
    display: flex;
    flex-direction: column;
  }

  .features-text {
    order: -1;
    text-align: center;
    padding: 0;
    margin-bottom: 3rem;
  }

  .features-text h2 {
    font-size: 1.7rem !important;
    line-height: 1.25 !important;
    margin: 0 auto 1.2rem !important;
    max-width: 280px;
  }

  .view-rooms-btn {
    background-color: transparent;
    border: 1px solid #054637;
    color: #054637;
    padding: 1rem 2rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    display: inline-block;
    text-decoration: none;
    margin-top: 3rem;
  }

  /* Galería de imágenes */
  .features-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0;
  }

  .image-top-left,
  .image-bottom-left,
  .image-top-right,
  .image-bottom-right {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    margin: 0;
  }

  .feature-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Ocultar la quinta imagen */
  .image-bottom-right:last-child {
    display: none;
  }

  /* Contenedor de imágenes */
  .features-images-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
  }

  /* Ajustes específicos para el botón */
  .view-rooms-btn {
    border: 2px solid #054637;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
  }

  .services-preview-section {
    padding: 4rem 1.5rem;
  }

  .services-preview-content {
    display: block !important;
    text-align: center;
    padding: 0;
  }

  .services-text {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto 3rem auto;
    text-align: center;
    max-width: 100%;
  }

  .services-text h2 {
    font-size: 2.5rem !important;
    line-height: 1.2 !important;
    margin: 0 auto 1.5rem auto !important;
    text-align: center !important;
    width: 100%;
  }

  .services-text p {
    font-size: 1rem !important;
    line-height: 1.6 !important;
    color: #666 !important;
    margin: 0 auto !important;
    text-align: center !important;
    width: 100%;
    max-width: 100%;
  }

  .services-image {
    width: 100%;
    margin: 0 auto 3rem auto;
    display: block;
    position: relative;
  }

  .services-image .main-image {
    width: 100% !important;
    height: 300px !important;
    object-fit: cover !important;
    border-radius: 12px !important;
    display: block !important;
  }

  .mobile-only.explore-button {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .mobile-only.explore-button {
    margin-top: 0;
    padding: 1rem 2rem !important;
    font-size: 0.8rem !important;
    letter-spacing: 1.5px !important;
    border: 2px solid #054637 !important;
  }

  .desktop-only { display: none; }
  .mobile-only { display: inline-block; }

  .testimonials-section {
    padding: 3rem 1.5rem;
  }

  .testimonials-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .testimonials-slider {
    padding: 0 !important;
  }

  .testimonial-card {
    flex: 0 0 100%;
    margin-right: 1rem;
    border-width: 2px;
    padding: 2rem;
  }

  /* Quitar desvanecido extremos carrusel */
  .testimonials-container::before,
  .testimonials-container::after {
    display: none !important;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 1rem;
    gap: 1rem;
  }

  .top-text {
    font-size: 2rem;
    margin-bottom: -0.5rem;
  }

  .bottom-text {
    font-size: 1.8rem;
    margin-top: -0.5rem;
  }

  .image-wrapper {
    height: 20vh;
    border-radius: 15px;
  }

  .services-preview-section {
    padding: 3rem 1rem !important;
  }

  .services-text {
    padding: 0 0.5rem !important;
  }

  .services-text h2 {
    font-size: 2rem !important;
    text-align: center !important;
  }

  .services-text p {
    font-size: 0.95rem !important;
    text-align: center !important;
  }

  .services-image {
    height: 250px !important;
  }

  .services-image .main-image {
    height: 250px !important;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 2s;
}

.scroll-circle {
  width: 10px;
  height: 10px;
  border: 1.5px solid #E9DCC9;
  border-radius: 50%;
  margin-bottom: -1px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-circle::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #E9DCC9;
  border-radius: 50%;
}

.scroll-line {
  width: 1px;
  height: 35px;
  background-color: #E9DCC9;
}

.features-section {
  padding: 8rem 0 4rem;
  background-color: #fff;
  overflow: hidden;
}

.features-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 4rem;
  position: relative;
}

.features-layout {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  gap: 2rem;
  align-items: start;
}

.image-top-left {
  grid-column: 1 / span 4;
  grid-row: 1;
  width: 100%;
  max-width: 220px;
  margin-left: 2rem;
}

.image-bottom-left {
  grid-column: 1 / span 7;
  grid-row: 2;
  width: 100%;
  max-width: 450px;
  margin-top: -4rem;
}

.features-text {
  grid-column: 8 / span 10;
  grid-row: 1 / span 2;
  text-align: center;
  align-self: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.image-top-right {
  grid-column: 19 / span 5;
  grid-row: 1;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: -4rem;
  position: relative;
  z-index: 1;
}

.image-bottom-right {
  grid-column: 19 / span 6;
  grid-row: 2;
  width: 100%;
  max-width: 450px;
  margin-top: -1rem;
  margin-left: auto;
  margin-right: -2rem;
}

.feature-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.image-top-left .feature-image {
  aspect-ratio: 1/1;
}

.image-bottom-left .feature-image {
  aspect-ratio: 4/3;
}

.image-top-right .feature-image {
  aspect-ratio: 2/3;
}

.image-bottom-right .feature-image {
  aspect-ratio: 3/2;
}

.features-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #054637;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.view-rooms-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 1px solid #054637;
  color: #054637;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.view-rooms-btn:hover {
  background-color: #054637;
  color: #fff;
}

@media (max-width: 1400px) {
  .features-content {
    padding: 0 2rem;
  }
  
  .image-top-left,
  .image-top-right {
    margin-right: 0;
  }

  .image-bottom-right {
    margin-right: 0;
  }
}

@media (max-width: 1200px) {
  .features-section {
    padding: 4rem 1rem;
  }

  .features-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .image-top-left,
  .image-bottom-left,
  .features-text,
  .image-top-right,
  .image-bottom-right {
    grid-column: 1;
    margin: 0 auto;
    max-width: 100%;
  }

  .features-text {
    grid-row: 1;
    padding: 0;
    margin-bottom: 2rem;
  }

  .image-top-left {
    grid-row: 2;
    max-width: 300px;
  }

  .image-bottom-left {
    grid-row: 3;
    max-width: 500px;
    margin-top: 0;
  }

  .image-top-right {
    margin-top: 0;
  }

  .image-bottom-right {
    margin-right: 0;
  }
}

.services-preview-section {
  padding: 8rem 0;
  background-color: #fff;
  overflow: hidden;
}

.services-preview-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.services-text {
  padding-right: 2rem;
}

.services-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #054637;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.services-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2.5rem;
  max-width: 90%;
}

.explore-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 1px solid #054637;
  color: #054637;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.explore-button:hover {
  background-color: #054637;
  color: #fff;
}

.services-image {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.main-image:hover {
  transform: scale(1.05);
}

@media (max-width: 1200px) {
  .services-preview-content {
    gap: 3rem;
  }

  .services-text h2 {
    font-size: 3rem;
  }
}

.testimonials-section {
  padding: 2rem 0 6rem;
  background-color: #fff;
  overflow: hidden;
}

.testimonials-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.testimonials-content.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.testimonials-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #054637;
  margin-bottom: 3rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.reveal-active .testimonials-title {
  opacity: 1;
  transform: translateY(0);
}

.testimonials-container {
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
}

/* Máscaras de desvanecido */
.testimonials-container::before,
.testimonials-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 150px;
  z-index: 2;
  pointer-events: none;
}

.testimonials-container::before {
  left: 0;
  background: linear-gradient(to right, 
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.9) 20%,
    rgba(255, 255, 255, 0) 100%
  );
}

.testimonials-container::after {
  right: 0;
  background: linear-gradient(to left, 
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.9) 20%,
    rgba(255, 255, 255, 0) 100%
  );
}

.testimonials-slider {
  display: flex;
  transition: transform 0s linear;
  padding: 1rem 100px; /* Agregamos padding para que el desvanecido no corte el contenido */
}

.testimonials-slider.no-transition {
  transition: none;
}

.testimonial-card {
  flex: 0 0 300px;
  border: 3px solid #E5E5E5;
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: #fff;
  margin-right: 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.testimonial-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #054637;
  margin: 0;
  font-weight: 500;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  flex-grow: 1;
}

.testimonial-author {
  font-weight: 600;
  color: #054637;
  font-size: 1.1rem;
}

.testimonial-subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

@media (max-width: 1200px) {
  .testimonial-card {
    flex: 0 0 50%;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    flex: 0 0 100%;
  }
}

.features-layout > div {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.features-layout > div.reveal-active {
  opacity: 1;
  transform: translateY(0);
}

.image-top-left.reveal-active {
  transition-delay: 0.2s;
}

.image-bottom-left.reveal-active {
  transition-delay: 0.4s;
}

.features-text.reveal-active {
  transition-delay: 0.3s;
}

.image-top-right.reveal-active {
  transition-delay: 0.4s;
}

.image-bottom-right.reveal-active {
  transition-delay: 0.6s;
}

.services-text {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease;
}

.services-text.reveal-active {
  opacity: 1;
  transform: translateX(0);
}

.services-image {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s ease;
}

.services-image.reveal-active {
  opacity: 1;
  transform: translateX(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.desktop-img { display: block; }
.mobile-only { display: none; }

@media (max-width: 768px) {
  .desktop-img { display: none; }
  .mobile-only { display: block; }

  .mobile-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .mobile-gallery.reveal-active {
    opacity: 1;
    transform: translateY(0);
  }

  .mobile-gallery .gallery-img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Ocultar botón desktop y mostrar botón mobile */
  .desktop-only { display: none; }
  .mobile-only.view-rooms-btn { display: inline-block; margin-top: 2rem; }
}
</style>
