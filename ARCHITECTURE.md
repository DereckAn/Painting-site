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

## Mejores Prácticas

1. **Performance**
   - Optimización de imágenes
   - Lazy loading donde sea apropiado
   - Minimizar JavaScript en el cliente

2. **Accesibilidad**
   - ARIA labels apropiados
   - Contraste de colores WCAG AA
   - Navegación por teclado

3. **SEO**
   - Meta tags apropiados
   - Estructura HTML semántica
   - Sitemap y robots.txt

4. **Mantenibilidad**
   - Documentación de código
   - Comentarios descriptivos
   - Código auto-explicativo
