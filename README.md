# Leclerc Hotel Boutique Website

Sitio web elegante y moderno para Leclerc Hotel Boutique, desarrollado con Nuxt 3 y desplegado en Vercel.

## Tecnologías Utilizadas

- **Framework**: Nuxt 3 (Vue 3 + Composition API)
- **Runtime**: Bun
- **Estilos**: Tailwind CSS con JIT
- **Despliegue**: Vercel
- **Fuentes**: Playfair Display y Open Sans (Google Fonts)

## Requisitos Previos

- Node.js 18.x o superior
- Bun (último release)
- Git

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/leclerc-hotel.git
cd leclerc-hotel
```

2. Instalar dependencias:
```bash
bun install
```

3. Crear archivo `.env` (opcional):
```bash
cp .env.example .env
```

## Desarrollo Local

Para iniciar el servidor de desarrollo:

```bash
bun run dev
```

El sitio estará disponible en `http://localhost:3000`

## Construcción para Producción

```bash
bun run build
```

Para previsualizar la versión de producción:

```bash
bun run preview
```

## Estructura del Proyecto

```
├── components/       # Componentes Vue reutilizables
├── layouts/         # Layouts de la aplicación
├── pages/           # Rutas y páginas
├── public/          # Archivos estáticos
├── assets/          # Assets que requieren procesamiento
├── composables/     # Composables de Vue
└── server/          # API y middleware del servidor
```

## Despliegue en Vercel

1. Crear una cuenta en Vercel si aún no tienes una
2. Instalar Vercel CLI:
```bash
npm i -g vercel
```

3. Desplegar:
```bash
vercel
```

O simplemente conecta tu repositorio de GitHub con Vercel para despliegues automáticos.

## Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.js`:

```js
colors: {
  base: "#F5F2EC",
  white: "#FFFFFF",
  darkwood: "#4A2F1B",
  gold: "#CBA135",
  blush: "#E9B7AC",
  foliage: "#6A8F43",
  slate: "#39393D"
}
```

### Imágenes
- Coloca las imágenes del hotel en `/public/images/`
- Para la galería, usa `/public/images/gallery/`
- Optimiza las imágenes antes de subirlas

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o soporte, por favor contacta a:
- Email: info@leclerchotel.com
- Website: https://leclerchotel.com
