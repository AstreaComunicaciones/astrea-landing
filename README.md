# Astrea Comunicaciones — Landing Page

Sitio web institucional de Astrea Comunicaciones. Construido con Vite + Tailwind CSS v4 + GSAP.

## Stack

- **Vite** — bundler y dev server
- **Tailwind CSS v4** — estilos utilitarios
- **GSAP** — animaciones
- **Formspree** — manejo del formulario de contacto (sin backend)

## Requisitos

- Node.js 18+
- npm 9+

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (localhost:5173)
npm run dev

# Build de producción → genera carpeta dist/
npm run build

# Preview del build localmente
npm run preview
```

## Despliegue

El sitio se despliega en **Netlify** con conexión directa al repositorio GitHub (`main` branch).

Netlify ejecuta `npm run build` automáticamente en cada push a `main` y publica la carpeta `dist/`.

La configuración está en `netlify.toml`.

## Formulario de contacto

Se usa **Formspree** (plan gratuito). El endpoint está definido en `src/sections/contact.js`.

Para cambiar el destinatario de los formularios, acceder a [formspree.io](https://formspree.io) con las credenciales del proyecto.

## Estructura

```
src/
├── sections/       # Secciones del sitio (Hero, Navbar, Equipo, etc.)
├── components/     # Componentes reutilizables
├── js/             # Lógica de animaciones
├── data/           # Datos estáticos (manifiesto, etc.)
├── assets/         # Imágenes y fuentes
└── style.css       # Estilos globales y tokens
```

## Ramas

- `main` — producción (conectada a Netlify)
- `dev` — desarrollo activo
