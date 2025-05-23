<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="top-text">Descubre<span class="cursive"> la Elegancia</span></h1>
      <div class="image-wrapper">
        <NuxtImg
          src="/images/background.webp"
          alt="Hero"
          class="hero-image"
          loading="eager"
        />
      </div>
      <h2 class="bottom-text">Disfruta de <span class="cursive">la Tranquilidad</span></h2>
      <div class="scroll-indicator">
        <div class="scroll-circle"></div>
        <div class="scroll-line"></div>
      </div>
    </div>
  </div>

  <section class="features-section">
    <div class="features-content">
      <div class="features-grid">
        <div class="features-left">
          <NuxtImg src="/images/amenites1.webp" alt="Luxury Lounge" class="feature-image" />
          <NuxtImg src="/images/restaurante.webp" alt="Exquisite Dining" class="feature-image" />
        </div>
        <div class="features-text">
          <h2>Delight in stylish rooms, relish exquisite dining, and bask in the warmth of our hospitality.</h2>
          <NuxtLink to="/rooms" class="view-rooms-btn">
            VIEW OUR ROOMS
          </NuxtLink>
        </div>
        <div class="features-right">
          <NuxtImg src="/images/8.webp" alt="Luxury Room" class="feature-image" />
          <NuxtImg src="/images/amenites2.webp" alt="Pool View" class="feature-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sin lógica adicional
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
}

.top-text, .bottom-text {
  font-family: 'Playfair Display', serif;
  color: #E9DCC9;
  width: 100%;
  margin: 0;
  line-height: 1.2;
}

.top-text {
  font-size: 5rem;
  text-align: left;
  margin-bottom: -2rem;
}

.bottom-text {
  font-size: 4rem;
  text-align: right;
  margin-top: -1rem;
}

.cursive {
  font-style: italic;
  font-weight: 500;
}

.image-wrapper {
  width: 100%;
  height: 35vh;
  border-radius: 30px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem;
    gap: 1.5rem;
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
    height: 25vh;
    border-radius: 20px;
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
  padding: 4rem 2rem;
  background-color: #fff;
}

.features-content {
  max-width: 1200px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1.5rem;
  align-items: center;
}

.feature-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0;
  margin-bottom: 1.5rem;
}

.top-left {
  grid-column: 1;
  grid-row: 1;
}

.bottom-left {
  grid-column: 1;
  grid-row: 2;
}

.features-text {
  text-align: center;
  padding: 0 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.features-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #054637;
  margin-bottom: 2rem;
  line-height: 1.3;
}

.view-rooms-btn {
  display: inline-block;
  padding: 1rem 2rem;
  border: 1px solid #054637;
  color: #054637;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.view-rooms-btn:hover {
  background-color: #054637;
  color: #fff;
}

.top-right {
  grid-column: 4;
  grid-row: 1;
}

.bottom-right {
  grid-column: 4;
  grid-row: 2;
}

.features-left, .features-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .features-left, .features-right {
    flex-direction: row;
    gap: 1rem;
  }

  .feature-image {
    margin-bottom: 0;
    width: calc(50% - 0.5rem);
  }
}

@media (max-width: 768px) {
  .features-left, .features-right {
    flex-direction: column;
  }

  .feature-image {
    width: 100%;
  }
}
</style>
