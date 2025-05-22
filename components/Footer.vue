<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Hotel Colombia</h3>
          <p>Tu hogar en el corazón de Colombia</p>
        </div>
        <div class="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@hotelcolombia.com</p>
          <p>Tel: +57 123 456 789</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Hotel Colombia. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}
</style>
