<template>
  <div class="floating-menu" :class="{ 'is-visible': isVisible, 'is-open': isOpen }">
    <div class="menu-items" v-show="isOpen">
      <NuxtLink to="/rooms" class="menu-item">
        <span class="menu-text">{{ $t('nav.rooms') }}</span>
      </NuxtLink>
      <NuxtLink to="/services" class="menu-item">
        <span class="menu-text">{{ $t('nav.services') }}</span>
      </NuxtLink>
      <NuxtLink to="/rooftop" class="menu-item">
        <span class="menu-text">{{ $t('nav.rooftop') }}</span>
      </NuxtLink>
      <NuxtLink to="/contacts" class="menu-item">
        <span class="menu-text">{{ $t('nav.contact') }}</span>
      </NuxtLink>
    </div>
    <button class="menu-toggle" @click="toggleMenu" :class="{ 'is-open': isOpen }">
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isVisible = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const checkScroll = () => {
  const heroSection = document.querySelector('.hero-section')
  if (!heroSection) return
  
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
  isVisible.value = window.scrollY >= heroBottom
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.floating-menu {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.floating-menu.is-visible {
  opacity: 1;
  visibility: visible;
}

.menu-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #054637;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.menu-toggle:hover {
  transform: scale(1.05);
}

.toggle-line {
  width: 24px;
  height: 2px;
  background-color: #F8F7F3;
  transition: all 0.3s ease;
}

.menu-toggle.is-open {
  background-color: #E9DCC9;
}

.menu-toggle.is-open .toggle-line {
  background-color: #054637;
}

.menu-toggle.is-open .toggle-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle.is-open .toggle-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-open .toggle-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.menu-items {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.floating-menu.is-open .menu-items {
  opacity: 1;
  transform: translateY(0);
}

.menu-item {
  text-decoration: none;
  background-color: #054637;
  color: #F8F7F3;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.menu-item:hover {
  background-color: #E9DCC9;
  color: #054637;
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .floating-menu {
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .menu-toggle {
    width: 50px;
    height: 50px;
  }

  .menu-item {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}
</style> 