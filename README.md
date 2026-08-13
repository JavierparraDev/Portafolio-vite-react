# Portafolio Personal — Javier Parra

Portafolio moderno y responsive desarrollado con **React, TypeScript, Vite y Tailwind CSS**, con estética "AI Engineering" (fondo de red neuronal animada, terminal, modo claro/oscuro).

## Características

- 🎨 **Diseño AI Engineering**: fondo de red neuronal animado en canvas, grid de ingeniería, orbes aurora y granulado sutil (Framer Motion).
- 🌙 **Modo Oscuro**: tema claro/oscuro persistente en `localStorage`.
- 🌐 **Bilingüe**: Español/Inglés con detección de idioma del navegador.
- ⚡ **Rendimiento**: code-splitting de rutas (`React.lazy`), imágenes WebP optimizadas, bundle chunked.
- 🔍 **SEO**: meta tags, Open Graph, JSON-LD (`Person`), `sitemap.xml`, `robots.txt`, canonical.
- ♿ **Accesibilidad**: skip link, `aria-current`, focus visible, `prefers-reduced-motion`.
- 📊 **Analytics**: Vercel Analytics + Speed Insights.
- 🎭 **Animaciones**: transiciones fluidas con Framer Motion.

## Tecnologías

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Enrutamiento**: React Router DOM (con lazy loading)
- **SEO**: react-helmet-async
- **Build Tool**: Vite
- **Tests**: Vitest + React Testing Library

## Instalación

```bash
git clone https://github.com/JavierparraDev/Portafolio-vite-react.git
cd Portafolio-vite-react
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Type-check + build de producción |
| `npm run preview` | Vista previa de la build |
| `npm run lint` | ESLint |
| `npm run type-check` | Verificación de tipos |
| `npm run test` | Tests (Vitest) |
| `npm run optimize:images` | Optimiza imágenes con sharp |

## Estructura

```
src/
├── components/
│   ├── background/         # Fondo de red neuronal (canvas) + orbes
│   ├── layout/             # Header, Footer, LanguageSwitcher
│   ├── Seo.tsx             # Meta tags por página (helmet-async)
│   ├── PageLoader.tsx      # Fallback de Suspense
│   ├── ScrollToTop.tsx     # Restauración de scroll
│   └── WhatsAppButton.tsx
├── pages/                  # Home, About, Projects, Experience, Contact, NotFound
├── lib/site.ts             # Config central (URL, redes, autor)
├── i18n/                   # Configuración de i18next
├── locales/                # en.json, es.json
├── test/                   # Setup y tests
├── App.tsx
└── index.css
```

## Personalización

- **URL de producción**: edita `SITE_URL` y los datos en `src/lib/site.ts` (canonical, sitemap y Open Graph dependen de ella).
- **Colores**: en `tailwind.config.js`.
- **Contenido**: en `src/locales/es.json` y `en.json`.
- **Imágenes**: reemplaza los originales en `scripts/sources/` (`javier-parra.png` y `logo.png`) y ejecuta `npm run optimize:images` para regenerar los optimizados en `public/`.

## Página 404

- **Cómo probarla**: visita cualquier ruta inexistente, p. ej. `https://tusitio.vercel.app/lo-que-sea` (en dev, `http://localhost:5173/foo`).
- **Redirecciones inteligentes**: aliases en inglés (y typos comunes) redirigen a la ruta canónica: `/about` → `/sobre-mi`, `/projects` → `/proyectos`, etc. Los `/` finales se normalizan (`/sobre-mi/` → `/sobre-mi`).
- **Auto-redirect**: tras 8 segundos redirige a Inicio (se desactiva con `prefers-reduced-motion: reduce`).
- La página está marcada `noindex` para no indexarse en buscadores.

## Despliegue (Vercel)

1. Conecta el repositorio a Vercel (detecta Vite automáticamente).
2. `vercel.json` ya configura los rewrites SPA (`/(.*)` → `/index.html`) y headers de seguridad.
3. Activa en el dashboard: **Analytics** y **Speed Insights**.
4. Recuerda actualizar `SITE_URL` si usas un dominio propio.

## Tests y CI

- Tests con Vitest + Testing Library: `npm run test`.
- CI en GitHub Actions: lint + type-check + test + build en cada push/PR.

## Licencia

MIT — ver [LICENSE](LICENSE).

## Contacto

- **Email**: javier00parra@gmail.com
- **LinkedIn**: [Javier M Parra](https://www.linkedin.com/in/javierparradev/)
- **GitHub**: [@JavierparraDev](https://github.com/JavierparraDev)
