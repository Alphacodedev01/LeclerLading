<template>
  <div>
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <FloatingMenu />
    <Footer />
  </div>
</template>

<style>
.main-content {
  padding-top: 80px; /* Espacio para el navbar fijo */
  min-height: calc(100vh - 80px);
}

/* Estilos globales */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #f8f9fa;
  --text-color: #333;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

* {
  box-sizing: border-box;
}
</style>
