/**
 * Tina CMS Content Helpers
 * Functions to load and parse Tina CMS content for each section
 */

import fs from 'fs';
import path from 'path';

/**
 * Get the content directory path
 */
function getContentPath() {
  return path.join(process.cwd(), 'content');
}

/**
 * Generic function to load section content
 */
function loadSection<T>(sectionName: string): T | null {
  const filePath = path.join(getContentPath(), 'sections', `${sectionName}.json`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error loading ${sectionName} content:`, error);
    return null;
  }
}

/**
 * Load hero section content
 */
export function getHeroContent() {
  return loadSection<HeroContent>('hero');
}

/**
 * Load services section content
 */
export function getServicesContent() {
  return loadSection<ServicesContent>('services');
}

/**
 * Load about section content
 */
export function getAboutContent() {
  return loadSection<AboutContent>('about');
}

/**
 * Load what we do section content
 */
export function getWhatWeDoContent() {
  return loadSection<WhatWeDoContent>('whatwedo');
}

/**
 * Load team section content
 */
export function getTeamContent() {
  return loadSection<TeamContent>('team');
}

/**
 * Load gallery section content
 */
export function getGalleryContent() {
  return loadSection<GalleryContent>('gallery');
}

/**
 * Load reviews section content
 */
export function getReviewsContent() {
  return loadSection<ReviewsContent>('reviews');
}

/**
 * Load contact section content
 */
export function getContactContent() {
  return loadSection<ContactContent>('contact');
}

/**
 * Load site settings from Tina
 */
export function getSiteSettings() {
  const filePath = path.join(getContentPath(), 'settings', 'site.json');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent) as SiteSettings;
  } catch (error) {
    console.error('Error loading site settings:', error);
    return null;
  }
}

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  services: Service[];
}

export interface AboutContent {
  label: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface WhatWeDoContent {
  title: string;
  residential: {
    title: string;
    description: string;
    features: string[];
  };
  commercial: {
    title: string;
    description: string;
    additionalDescription: string;
    features: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface TeamContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface GalleryContent {
  label: string;
  title: string;
  residential: GalleryImage[];
  commercial: GalleryImage[];
}

export interface Review {
  text: string;
  author: string;
  image: string;
  imageAlt: string;
}

export interface ReviewsContent {
  title: string;
  reviews: Review[];
  googleReviewsLink: string;
}

export interface ContactContent {
  label: string;
  title: string;
  heading: string;
  description: string;
  phone: string;
  email: string;
  location: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export interface SiteSettings {
  companyInfo: CompanyInfo;
}
