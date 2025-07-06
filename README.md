# Pulaco Tatto - Estudio de Tatuajes Profesional

Una página web moderna, elegante y completamente responsive para el estudio de tatuajes Pulaco Tatto.

## 🎨 Características

### Diseño
- **Esquema de colores**: Oscuro y elegante con toques de rojo (#dc2626) y blanco
- **Tipografía**: Fuentes urbanas y fuertes (Oswald + Roboto)
- **Estilo**: Moderno, minimalista y profesional

### Funcionalidades
- ✅ Navegación fija con efecto de scroll
- ✅ Menú hamburguesa para móviles
- ✅ Animaciones suaves al hacer scroll (scroll reveal)
- ✅ Galería filtrable por categorías
- ✅ Formulario de reservas con validación
- ✅ Efectos hover en botones e imágenes
- ✅ Animaciones de escritura del eslogan
- ✅ Contador animado en estadísticas
- ✅ Efectos parallax sutiles
- ✅ Sistema de notificaciones
- ✅ Completamente responsive (móvil, tablet, escritorio)

### Secciones
1. **Inicio** - Hero con eslogan animado
2. **Galería** - Trabajos organizados por categorías
3. **Sobre Mí** - Historia del artista con estadísticas
4. **Servicios** - Listado de precios por categorías
5. **Reservas** - Formulario de contacto completo
6. **Contacto** - Información de contacto y redes sociales

## 🚀 Cómo usar

### Instalación
1. Descarga todos los archivos en una carpeta
2. Asegúrate de tener los archivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`

### Abrir la página
1. Simplemente abre `index.html` en tu navegador web
2. No se requiere servidor web para funcionar localmente

### Personalización

#### Cambiar imágenes
Las imágenes actuales son de Unsplash. Para cambiarlas:
1. Reemplaza las URLs en `index.html`
2. Mantén las dimensiones recomendadas para mejor rendimiento

#### Modificar información
- **Nombre del estudio**: Busca "PULACO TATTO" en `index.html`
- **Eslogan**: Línea 37 en `index.html`
- **Información de contacto**: Sección de contacto en `index.html`
- **Precios**: Sección de servicios en `index.html`
- **Redes sociales**: Enlaces en la sección de contacto

#### Colores personalizados
En `style.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #dc2626;        /* Color principal (rojo) */
    --background-dark: #0a0a0a;      /* Fondo oscuro */
    --background-light: #1a1a1a;     /* Fondo claro */
    --text-light: #ffffff;           /* Texto claro */
    --text-gray: #b0b0b0;           /* Texto gris */
}
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Optimizaciones móviles
- Menú hamburguesa
- Galerías en una sola columna
- Formularios adaptados
- Botones más grandes
- Espaciado optimizado

## 🔧 Funcionalidades JavaScript

### Galería filtrable
```javascript
// Los botones de filtro permiten mostrar trabajos por categoría
// Categorías: todos, color, blanco y negro, blackout, tribal, realismo
```

### Formulario de reservas
- Validación en tiempo real
- Campos obligatorios marcados
- Validación de email
- Mensajes de confirmación

### Efectos visuales
- Scroll reveal para elementos
- Animaciones de contador
- Efectos parallax
- Partículas animadas

## 🎯 SEO y Rendimiento

### Optimizaciones incluidas
- Meta tags apropiados
- Carga lazy de imágenes
- Compresión de CSS
- Debounce en eventos de scroll
- Optimización de animaciones

### Métricas de rendimiento
- Tiempo de carga rápido
- Smooth scrolling
- Animaciones a 60fps
- Imágenes optimizadas

## 🌐 Compatibilidad

### Navegadores soportados
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

### Características modernas utilizadas
- CSS Grid y Flexbox
- Intersection Observer API
- CSS Custom Properties
- ES6+ JavaScript

## 📞 Información de contacto predeterminada

**Teléfono**: +1 (555) 123-4567  
**Email**: info@pulacotatto.com  
**Dirección**: Calle Principal 123, Centro, Ciudad  
**Horarios**: Lun-Vie: 10:00-20:00, Sáb: 10:00-18:00

**Redes sociales**:
- Instagram: @pulacotatto
- WhatsApp: +1 (555) 123-4567
- Facebook: facebook.com/pulacotatto
- TikTok: @pulacotatto

## 🔒 Seguridad

### Consideraciones
- Formularios no envían datos reales (solo simulación)
- Para uso en producción, conectar con backend
- Validación adicional en servidor recomendada

## 🚀 Despliegue

### Hosting recomendado
- GitHub Pages (gratuito)
- Netlify (gratuito)
- Vercel (gratuito)
- Cualquier hosting web estático

### Pasos para subir
1. Sube todos los archivos a tu hosting
2. Configura el dominio
3. Activa HTTPS
4. Configura formulario con servicio backend

## 🎨 Créditos

### Fuentes
- **Oswald**: Google Fonts
- **Roboto**: Google Fonts

### Íconos
- **Font Awesome**: v6.0.0

### Imágenes
- **Unsplash**: Imágenes de muestra

## 📄 Licencia

Este proyecto es de código abierto y puede ser utilizado libremente para proyectos comerciales y personales.

## 🔄 Actualizaciones

### Versión actual: 1.0.0
- Lanzamiento inicial
- Todas las funcionalidades implementadas
- Completamente responsive

### Próximas mejoras sugeridas
- Integración con Google Maps
- Galería con lightbox
- Blog/noticias
- Sistema de citas online
- Chatbot
- PWA (Progressive Web App)

## 📞 Soporte

Para dudas o personalizaciones, puedes contactar al desarrollador o consultar la documentación en línea.

**¡Disfruta tu nueva página web profesional! 🎨**