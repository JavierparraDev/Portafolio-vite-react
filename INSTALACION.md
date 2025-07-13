# 📋 Guía de Instalación - Portafolio Personal

## 🔧 Requisitos Previos

### 1. Instalar Node.js

**Opción A: Descarga directa (Recomendado)**
1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (Long Term Support)
3. Ejecuta el instalador y sigue las instrucciones
4. Verifica la instalación abriendo una nueva terminal:
   ```bash
   node --version
   npm --version
   ```

**Opción B: Usando Chocolatey (Windows)**
```bash
choco install nodejs
```

**Opción C: Usando Winget (Windows 10/11)**
```bash
winget install OpenJS.NodeJS
```

### 2. Verificar la instalación
Después de instalar Node.js, abre una **nueva terminal** y ejecuta:
```bash
node --version
npm --version
```

Deberías ver algo como:
```
v18.17.0
9.6.7
```

## 🚀 Configuración del Proyecto

### 1. Navegar al directorio del proyecto
```bash
cd "C:\Users\javie\Dev\Portafolio\Portafolio-vite-react"
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 4. Abrir en el navegador
El proyecto estará disponible en: `http://localhost:5173`

## 📦 Dependencias Instaladas

El proyecto incluye las siguientes dependencias principales:

### Dependencias de producción:
- **React 18**: Biblioteca de interfaz de usuario
- **React Router DOM**: Enrutamiento de la aplicación
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconos modernos
- **React Intersection Observer**: Detección de elementos visibles
- **React Helmet Async**: Gestión de meta tags

### Dependencias de desarrollo:
- **TypeScript**: Tipado estático
- **Vite**: Build tool rápido
- **Tailwind CSS**: Framework de CSS utility-first
- **ESLint**: Linter para código limpio
- **PostCSS & Autoprefixer**: Procesamiento de CSS

## 🎨 Personalización

### 1. Actualizar información personal
Edita los siguientes archivos:
- `src/components/layout/Header.tsx` - Cambia "Tu Nombre"
- `src/components/layout/Footer.tsx` - Actualiza enlaces sociales
- `src/pages/Home.tsx` - Modifica el contenido de la página principal

### 2. Cambiar colores
Edita `tailwind.config.js` para personalizar la paleta de colores.

### 3. Agregar páginas
Crea nuevos componentes en `src/pages/` y agrégalos al enrutamiento en `src/App.tsx`.

## 🐛 Solución de Problemas

### Error: "npm no se reconoce"
- Asegúrate de haber instalado Node.js correctamente
- Reinicia la terminal después de la instalación
- Verifica que Node.js esté en el PATH del sistema

### Error: "Cannot find module"
- Ejecuta `npm install` para instalar todas las dependencias
- Verifica que el archivo `package.json` esté presente

### Error: "Port already in use"
- Cambia el puerto en `vite.config.ts`:
  ```javascript
  export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000
    }
  })
  ```

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Documentación de Framer Motion](https://www.framer.com/motion/)

## 🤝 Soporte

Si tienes problemas con la instalación:
1. Verifica que Node.js esté instalado correctamente
2. Asegúrate de estar en el directorio correcto del proyecto
3. Ejecuta `npm install` antes de `npm run dev`
4. Revisa la consola para mensajes de error específicos

¡Una vez que todo esté configurado, podrás comenzar a desarrollar tu portafolio! 🎉 