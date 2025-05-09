<template>
  <div class="min-h-screen flex flex-col w-full">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
</script>

<style>
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

body {
  @apply font-sans overflow-x-hidden;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-sans font-bold;
}
</style> 