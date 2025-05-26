<template>
  <nav class="navbar">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <NuxtImg
          src="/images/Logo2.webp"
          alt="Hotel Logo"
          class="logo-image"
          width="120"
          height="auto"
        />
      </NuxtLink>
      
      <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <NuxtLink to="/rooms" class="nav-link" @click="closeMenu">{{ t('nav.rooms') }}</NuxtLink>
        <NuxtLink to="/services" class="nav-link" @click="closeMenu">{{ t('nav.services') }}</NuxtLink>
        <NuxtLink to="/rooftop" class="nav-link" @click="closeMenu">{{ t('nav.rooftop') }}</NuxtLink>
        <NuxtLink to="/contacts" class="nav-link" @click="closeMenu">{{ t('nav.contact') }}</NuxtLink>
        <button class="reserve-btn">{{ t('nav.book') }}</button>
        <LanguageSwitcher />
      </div>

      <button class="hamburger" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
const { t } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.5rem;
  background-color: transparent;
  transition: all 0.3s ease;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-image {
  height: 100px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: height 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #F8F7F3;
  font-weight: 400;
  transition: color 0.3s ease;
  font-size: 1rem;
  text-transform: capitalize;
  font-family: 'Playfair Display', serif;
}

.nav-link:hover {
  color: #E9DCC9;
}

.reserve-btn {
  background-color: #E9DCC9;
  color: #1E3D36;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
}

.reserve-btn:hover {
  background-color: #F8F7F3;
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: #F8F7F3;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100%;
    background-color: #054637;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .nav-links.nav-active {
    right: 0;
  }

  .hamburger {
    display: flex;
    position: relative;
    z-index: 1100;
  }

  .hamburger.is-active .hamburger-line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .hamburger.is-active .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-active .hamburger-line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .nav-link {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  .reserve-btn {
    margin: 1rem 0;
  }

  .navbar {
    padding: 0.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .logo-image {
    height: 80px;
    position: relative;
    z-index: 1100;
  }
}

@media (max-width: 480px) {
  .logo-image {
    height: 70px;
  }
}
</style>

