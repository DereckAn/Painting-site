/**
 * Contenido del sitio
 * Textos, servicios, testimonios y demás contenido estático
 */

import type { ServiceItem, Testimonial } from '@/types';

// ============================================
// CONTENIDO DEL HERO
// ============================================

export const HERO_CONTENT = {
  title: 'Transformamos espacios con elegancia',
  subtitle: 'Servicios profesionales de pintura que elevan la estética de su hogar con precisión y dedicación artesanal',
  ctaText: 'See our work',
  ctaLink: '#contact',
} as const;

// ============================================
// SERVICIOS
// ============================================

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Pintura Residencial',
    description: 'Transformamos tu hogar con acabados impecables y atención al detalle.',
    features: [
      'Pintura interior y exterior',
      'Preparación de superficies',
      'Asesoría en selección de colores',
      'Garantía de satisfacción',
    ],
  },
  {
    id: 'commercial',
    title: 'Pintura Comercial',
    description: 'Soluciones profesionales para espacios comerciales y corporativos.',
    features: [
      'Proyectos de gran escala',
      'Horarios flexibles',
      'Mínima interrupción de operaciones',
      'Acabados duraderos',
    ],
  },
  {
    id: 'specialty',
    title: 'Acabados Especiales',
    description: 'Técnicas decorativas y acabados personalizados para espacios únicos.',
    features: [
      'Texturas decorativas',
      'Efectos especiales',
      'Restauración de superficies',
      'Diseños personalizados',
    ],
  },
];

// ============================================
// TESTIMONIOS
// ============================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Propietaria',
    content: 'Excelente trabajo y atención al detalle. Transformaron completamente nuestra casa.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    role: 'Gerente de Proyectos',
    content: 'Profesionales, puntuales y con resultados excepcionales. Altamente recomendados.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Diseñadora de Interiores',
    content: 'Trabajo impecable. La calidad de los acabados superó nuestras expectativas.',
    rating: 5,
  },
];
