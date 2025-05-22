<template>
  <button @click="toggleLanguage" class="language-btn">
    {{ locale.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<style scoped>
.language-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s ease;
}

.language-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style> 