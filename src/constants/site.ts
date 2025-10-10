/**
 * Constantes del sitio
 * Información de la empresa y configuración general
 */

import type { CompanyInfo, NavItem } from '@/types';

// ============================================
// INFORMACIÓN DE LA EMPRESA
// ============================================

export const COMPANY_INFO: CompanyInfo = {
  name: 'Elite Painting Services',
  tagline: 'Transformamos Espacios Con Elegancia',
  description:
    'Servicios profesionales de pintura que elevan la estética de su hogar con precisión y dedicación artesanal',
  email: 'contacto@elitepainting.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Main Street',
    city: 'Ciudad',
    state: 'Estado',
    zipCode: '12345',
    country: 'País',
  },
  socialMedia: {
    facebook: 'https://facebook.com/elitepainting',
    instagram: 'https://instagram.com/elitepainting',
    linkedin: 'https://linkedin.com/company/elitepainting',
  },
};

// ============================================
// NAVEGACIÓN
// ============================================

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
];

// ============================================
// SEO DEFAULTS
// ============================================

export const DEFAULT_SEO = {
  title: 'Elite Painting Services - Pintura Profesional',
  description:
    'Servicios de pintura profesional para residencias y comercios. Acabados impecables, atención al detalle y años de experiencia.',
  keywords: [
    'pintura',
    'pintura profesional',
    'servicios de pintura',
    'pintura residencial',
    'pintura comercial',
    'pintores profesionales',
    'renovación',
    'acabados de calidad',
  ],
  ogType: 'website',
  twitterCard: 'summary_large_image' as const,
};

// ============================================
// CONFIGURACIÓN DE SITIO
// ============================================

export const SITE_CONFIG = {
  locale: 'es-ES',
  dateFormat: 'DD/MM/YYYY',
  currency: 'USD',
  timezone: 'America/New_York',
} as const;

// ============================================
// FEATURES & LIMITS
// ============================================

export const FEATURES = {
  gallery: {
    maxImages: 50,
    supportedFormats: ['jpg', 'jpeg', 'png', 'webp'],
    thumbnailSize: { width: 400, height: 400 },
  },
  contact: {
    maxMessageLength: 1000,
    requiredFields: ['name', 'email', 'message'],
  },
} as const;
