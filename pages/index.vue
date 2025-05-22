<template>
  <div class="hero-section">
    <div class="hero-content">
      <div class="text-container">
        <div class="text-image-wrapper">
          <h1 ref="topText" class="top-text">Experience <span class="cursive">Luxury</span></h1>
          <div class="image-container">
            <div class="image-wrapper">
              <div ref="imageRevealBox" class="image-reveal-box"></div>
              <NuxtImg
                src="/images/background.webp"
                alt="Hero"
                class="hero-image"
                loading="eager"
              />
            </div>
          </div>
          <h2 ref="bottomText" class="bottom-text">Unforgettable <span class="cursive">Memories</span></h2>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-circle"></div>
      <div class="scroll-line"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const imageRevealBox = ref(null)
const topText = ref(null)
const bottomText = ref(null)

onMounted(() => {
  // Estado inicial: ocultar todo
  gsap.set([topText.value, bottomText.value], { 
    opacity: 0,
    y: 20
  })
  gsap.set('.image-wrapper', { opacity: 0 })
  gsap.set(imageRevealBox.value, { scale: 0 })
  gsap.set('.hero-image', { opacity: 0 })

  // Timeline principal
  const tl = gsap.timeline()

  // 1. Textos aparecen con animación
  tl.to([topText.value, bottomText.value], {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.2
  })

  // 2. Aparece contenedor de imagen (sin pausa)
  .to('.image-wrapper', {
    opacity: 1,
    duration: 0
  })

  // 3. Rectángulo pequeño aparece
  .to(imageRevealBox.value, {
    scale: 0.02,
    duration: 0,
    ease: "power2.out"
  })

  // 4. Expansión del rectángulo Y movimiento de textos simultáneo
  .to(imageRevealBox.value, {
    scale: 1,
    duration: 1,
    ease: "power2.inOut"
  })
  .to(topText.value, {
    y: -110,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=1.5")
  .to(bottomText.value, {
    y: 80,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=1.5")

  // 5. Imagen se revela
  .to('.hero-image', {
    opacity: 1,
    duration: 0.8
  })
  .to(imageRevealBox.value, {
    opacity: 0,
    duration: 0.8
  }, "-=0.8")
})
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

.hero-content {
  width: 100%;
  position: relative;
  padding: 2rem;
}

.text-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  width: 90%;
}

.text-image-wrapper {
  position: relative;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.top-text, .bottom-text {
  font-family: 'Playfair Display', serif;
  color: #E9DCC9;
  margin: 0;
  width: 100%;
  position: relative;
  z-index: 10;
}

.top-text {
  font-size: 5rem;
  text-align: left;
  margin-bottom: 12rem;
}

.bottom-text {
  font-size: 4rem;
  text-align: right;
  margin-top: -10rem;
}

.cursive {
  font-style: italic;
  font-weight: 500;
}

.image-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  width: 100%;
  height: 35vh;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-reveal-box {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #E9DCC9;
  z-index: 3;
  transform-origin: center center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.hero-image img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
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

@media (max-width: 768px) {
  .text-container {
    width: 95%;
  }

  .top-text {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .bottom-text {
    font-size: 2.5rem;
    margin-top: 0.5rem;
  }

  .image-wrapper {
    width: 95%;
    height: 30vh;
    border-radius: 20px;
  }

  .text-image-wrapper {
    padding: 2rem 0;
  }

  .scroll-indicator {
    bottom: -1px;
  }

  .scroll-line {
    height: 25px;
  }
}
</style>
