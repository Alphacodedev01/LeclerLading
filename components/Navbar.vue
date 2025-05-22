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
      
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink to="/rooms" class="nav-link">{{ $t('nav.rooms') }}</NuxtLink>
        <NuxtLink to="/services" class="nav-link">{{ $t('nav.services') }}</NuxtLink>
        <NuxtLink to="/rooftop" class="nav-link">{{ $t('nav.rooftop') }}</NuxtLink>
        <NuxtLink to="/contacts" class="nav-link">{{ $t('nav.contact') }}</NuxtLink>
        <button class="reserve-btn">Reservar</button>
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.25rem 2rem;
  background-color: transparent;
  transition: all 0.3s ease;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
}

.logo-image {
  height: 80px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
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

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
