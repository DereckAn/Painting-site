/**
 * Sistema de tipos centralizado
 * Define todos los contratos de datos de la aplicación
 */

// ============================================
// TIPOS DE COMPONENTES UI
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

// ============================================
// TIPOS DE DATOS DE NEGOCIO
// ============================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  width?: number;
  height?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address?: Address;
  socialMedia?: SocialMediaLinks;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface SocialMediaLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

// ============================================
// TIPOS DE NAVEGACIÓN
// ============================================

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// ============================================
// TIPOS DE LAYOUT
// ============================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

export interface LayoutProps {
  title: string;
  description: string;
  seo?: Partial<SEOMetadata>;
}

// ============================================
// TIPOS DE SECCIÓN
// ============================================

export interface SectionProps {
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  paddingY?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface HeroProps extends SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

// ============================================
// UTILIDADES DE TIPOS
// ============================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// Hace todas las propiedades de un tipo requeridas
export type RequiredAll<T> = {
  [P in keyof T]-?: T[P];
};

// Hace todas las propiedades de un tipo opcionales profundamente
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
