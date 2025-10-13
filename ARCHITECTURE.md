# Arquitectura del Proyecto - Sitio Web de Pintura

## Estructura de Carpetas

```
src/
├── assets/              # Recursos estáticos (imágenes, fuentes)
├── components/          # Componentes Astro
│   ├── layout/         # Componentes de layout (Header, Footer, Navigation)
│   ├── sections/       # Secciones de la página (Hero, Services, Gallery, Contact)
│   └── ui/             # Componentes UI reutilizables (Button, Card, Input)
├── config/             # Configuración de la aplicación
├── constants/          # Constantes y datos estáticos
├── layouts/            # Layouts de página
├── lib/                # Lógica de negocio y utilidades complejas
├── pages/              # Páginas de Astro
├── styles/             # Estilos globales y design tokens
├── types/              # Definiciones de tipos TypeScript
└── utils/              # Funciones utilitarias puras
```

## Principios de Diseño

### 1. Separación de Responsabilidades
- **Components**: Presentación visual
- **Lib**: Lógica de negocio
- **Utils**: Funciones puras sin efectos secundarios
- **Constants**: Datos inmutables
- **Types**: Contratos de datos

### 2. Composición sobre Herencia
- Componentes pequeños y reutilizables
- Composición de componentes simples para crear interfaces complejas

### 3. Single Responsibility Principle
- Cada componente/función tiene una única responsabilidad
- Componentes enfocados en una tarea específica

### 4. DRY (Don't Repeat Yourself)
- Reutilización de componentes UI base
- Sistema de design tokens centralizado
- Constantes compartidas

### 5. KISS (Keep It Simple, Stupid)
- Código legible y mantenible
- Evitar sobre-ingeniería
- Soluciones simples a problemas complejos

## Patrones de Diseño Implementados

### 1. **Atomic Design**
- **Átomos**: Componentes UI básicos (Button, Input, Icon)
- **Moléculas**: Combinaciones simples (SearchBar, NavItem)
- **Organismos**: Componentes complejos (Header, ContactForm)
- **Secciones**: Secciones de página (Hero, Services, Gallery)
- **Páginas**: Composición final

### 2. **Container/Presentational Pattern**
- Componentes de presentación: UI pura
- Componentes contenedores: Lógica y estado

### 3. **Design Tokens**
- Sistema centralizado de variables de diseño
- Consistencia visual en toda la aplicación
- Fácil mantenimiento y cambios de tema

## Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (Button.astro, ServiceCard.astro)
- **Utilidades**: camelCase (formatDate.ts, validateEmail.ts)
- **Constantes**: UPPER_SNAKE_CASE (MAX_IMAGES, API_ENDPOINTS)
- **Types**: PascalCase (ServiceItem, ContactFormData)

### Estructura de Archivos
```
ComponentName/
├── ComponentName.astro    # Componente principal
├── types.ts              # Tipos específicos (si aplica)
└── index.ts              # Barrel export
```

### Imports
```typescript
// 1. Dependencias externas
import { defineConfig } from 'astro/config';

// 2. Aliases internos (@/)
import { Button } from '@/components/ui';

// 3. Imports relativos
import type { Props } from './types';
```

## Paleta de Colores

### Colores Principales
- **Negro**: #0A0A0A (textos, elementos principales)
- **Blanco**: #FFFFFF (fondos, textos sobre oscuro)
- **Grises**: Escala de 50-950 (jerarquía visual, fondos alternativos)

### Uso Semántico
- **Primary**: Negro - Llamadas a acción principales
- **Secondary**: Gris 700 - Elementos secundarios
- **Accent**: Gris 400 - Detalles y decoraciones
- **Background**: Blanco/Gris 50 - Fondos
- **Surface**: Gris 100/900 - Tarjetas y contenedores

## Stack Tecnológico

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **TypeScript**: Para type safety
- **Package Manager**: Bun
- **Carousel**: Embla Carousel 8.x (with autoplay plugin)
- **Fonts**: Google Fonts (Playfair Display + Inter)

## Componentes Implementados

### Secciones de Página (src/components/sections/)

#### 1. Hero.astro
- Sección de landing/hero principal
- Call-to-action buttons
- Navegación smooth scroll
- Diseño full-screen responsive

#### 2. About.astro
- Historia y valores de la empresa
- Imagen profesional con efecto grayscale-to-color
- Estadísticas clave: años de experiencia, proyectos, satisfacción
- Grid de 2 columnas (contenido + imagen)

#### 3. Services.astro
- Grid de 4 servicios principales:
  - Interior Painting
  - Exterior Painting
  - Special Finishes
  - Color Consultation
- Iconos SVG integrados
- Efectos hover con línea decorativa animada
- Grid responsivo 2x2

#### 4. Gallery.astro
- Portfolio de proyectos completados
- Grid de 3 columnas (1 en móvil)
- 6 imágenes con lazy loading
- Efectos: grayscale → color, zoom, overlay con descripción
- Aspect ratio cuadrado consistente

#### 5. Team.astro
- Carrusel de 5 miembros del equipo
- Autoplay (4 segundos, se pausa al hover)
- Navegación con flechas (desktop)
- Tarjetas con foto + nombre + rol + descripción
- Responsive: 1 tarjeta (móvil) → 2 (tablet) → 3 (desktop)

#### 6. Contact.astro
- Formulario de contacto con validación
- 3 métodos de contacto (teléfono, email, ubicación)
- Campos: nombre, email, teléfono, mensaje
- Validación de email regex
- Mensajes de éxito/error con auto-dismiss
- Grid 2 columnas (info + formulario)

### Componentes UI (src/components/ui/)

#### Button.astro
- Variantes: primary, secondary, outline, ghost
- Tamaños: sm, md, lg
- Soporte para enlaces (href) o botones (type)
- Estados: hover, focus, disabled

#### Input.astro
- Tipos: text, email, tel, number, password, url
- Estilos consistentes con design system
- Estados de focus y disabled
- Placeholder personalizable

#### Textarea.astro
- Campo de texto multilínea
- Rows configurables
- No redimensionable (resize-none)
- Estilos consistentes

#### Container.astro
- Contenedor máximo width con padding responsive
- Centrado automático

#### Section.astro
- Wrapper para secciones con padding vertical consistente
- Fondos configurables

### Layout (src/layouts/)

#### Layout.astro
- Layout base con estructura HTML completa
- SEO meta tags (Open Graph, Twitter Cards)
- Google Fonts preconectados
- Import de design tokens
- Sistema de props para title, description, SEO

## Tipografía

### Font Families
```css
/* Headings - Elegante y serif */
--font-display: 'Playfair Display', serif;

/* Body - Moderna y sans-serif */
--font-sans: 'Inter', sans-serif;
```

### Uso
- **Headings (h1-h6)**: Automáticamente usan `font-display`
- **Body text**: Usa `font-sans` por defecto
- **Pesos disponibles**:
  - Inter: 300, 400, 500, 600, 700
  - Playfair Display: 400, 600, 700, 900

## Deployment en Vercel

### Configuración Correcta para Producción

#### 1. Importación de CSS
```astro
---
// ✅ CORRECTO - En Layout.astro
import '@/styles/design-tokens.css';

// ❌ INCORRECTO - No funciona en producción
<link rel="stylesheet" href="/src/styles/design-tokens.css" />
---
```

#### 2. Google Fonts
```html
<!-- Preconnect para mejor performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700;900&display=swap" rel="stylesheet" />
```

#### 3. Build Settings en Vercel
- **Framework Preset**: Astro (auto-detectado)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 4. Variables de Entorno
No se requieren variables de entorno para el sitio básico.

### Problemas Comunes y Soluciones

**Problema**: Los estilos no cargan en producción
- **Solución**: Importar CSS en el frontmatter de Layout.astro, no como `<link>` tag

**Problema**: Fuentes no se cargan
- **Solución**: Agregar preconnect a Google Fonts y verificar URLs

**Problema**: Imágenes no optimizadas
- **Solución**: Usar `loading="lazy"` en todas las imágenes no críticas

## Mejores Prácticas

1. **Performance**
   - Optimización de imágenes
   - Lazy loading donde sea apropiado (`loading="lazy"`)
   - Minimizar JavaScript en el cliente
   - Preconnect para recursos externos (Google Fonts)
   - Static site generation con Astro

2. **Accesibilidad**
   - ARIA labels apropiados en botones de navegación
   - Contraste de colores WCAG AA cumplido
   - Navegación por teclado funcional
   - Atributos alt descriptivos en imágenes
   - Focus visible en elementos interactivos

3. **SEO**
   - Meta tags apropiados (title, description)
   - Open Graph tags para redes sociales
   - Twitter Card tags
   - Estructura HTML semántica
   - URLs canónicas cuando sea necesario

4. **Mantenibilidad**
   - Documentación de código completa
   - Comentarios descriptivos en componentes complejos
   - Código auto-explicativo
   - Convenciones de nomenclatura consistentes
   - Design tokens centralizados para fácil personalización

5. **Tailwind CSS v4 Específico**
   - Usar `@theme` para definir tokens de diseño
   - Aprovechar las nuevas variables CSS nativas
   - No necesitar `tailwind.config.js` (todo en CSS)
   - Usar `@apply` con moderación
