import type { NavLink, ServiceSummary, CatalogItem, ServiceCategory, Subcategory, TeamMember, ValuePillar } from '../types';

import heroOne from '../assets/hero-1.jpg';
import heroTwo from '../assets/hero-2.jpg';
import heroThree from '../assets/hero-3.jpg';
import weddingSq from '../assets/wedding-sq.jpg';
import kentePortrait from '../assets/kente-portrait.jpg';
import designOne from '../assets/design-1.jpg';
import designTwo from '../assets/design-2.jpg';
import designThree from '../assets/design-3.jpg';

export const heroImages = [heroOne, heroTwo, heroThree];

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Booking', to: '/booking' },
];

export const services: ServiceSummary[] = [
  {
    id: 'photography',
    exifLabel: 'f/1.8',
    title: 'Photography',
    description:
      'Weddings, portraits, events and product shoots — composed with intention, delivered fast.',
    bullets: [
      'Weddings & engagements',
      'Portrait & studio sessions',
      'Events & corporate coverage',
      'Product & commercial',
    ],
  },
  {
    id: 'videography',
    exifLabel: '24fps',
    title: 'Videography',
    description:
      'Wedding films, brand documentaries, and social-first edits that hold attention to the last second.',
    bullets: [
      'Wedding & event films',
      'Brand & promo videos',
      'Music & live coverage',
      'Reels & social cutdowns',
    ],
  },
  {
    id: 'design',
    exifLabel: 'CMYK',
    title: 'Graphic Design',
    description:
      'Flyers, posters and brand systems built to actually get noticed in a feed or on a wall.',
    bullets: [
      'Event flyers & posters',
      'Brand identity & logos',
      'Social media templates',
      'Print & signage design',
    ],
  },
];

export const catalogItems: CatalogItem[] = [
  {
    id: 'field-wedding',
    image: weddingSq,
    alt: 'Wedding couple portrait in golden field',
    title: 'Field Wedding',
    categories: ['photography'],
    subcategories: ['wedding'],
  },
  {
    id: 'bridal-portrait',
    image: kentePortrait,
    alt: 'Bridal portrait in kente cloth',
    title: 'Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait', 'wedding'],
  },
  {
    id: 'praise-medley',
    image: designThree,
    alt: 'Praise Medley church event poster',
    title: 'Praise Medley Poster',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
  {
    id: 'learn-from-scratch',
    image: designTwo,
    alt: 'Learn From Scratch 2.0 event poster',
    title: 'Learn From Scratch 2.0',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
  {
    id: 'ignite-flyer',
    image: designOne,
    alt: 'Forty Days of Ignite event flyer',
    title: 'Ignite Flyer',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
  {
    id: 'highlight-still',
    image: heroThree,
    alt: 'Bridal portrait still from highlight film',
    title: 'Highlight Film Still',
    categories: ['videography'],
    subcategories: ['wedding-film'],
  },
  {
    id: 'hillside-engagement',
    image: heroOne,
    alt: 'Couple in field, photography and film coverage',
    title: 'Hillside Engagement',
    categories: ['photography', 'videography'],
    subcategories: ['wedding', 'wedding-film'],
  },
  {
    id: 'ceremony-coverage',
    image: heroTwo,
    alt: 'Bridal portrait still, video coverage',
    title: 'Ceremony Coverage',
    categories: ['videography'],
    subcategories: ['wedding-film'],
  },
];

/** Subcategories grouped by their parent service category, with labels for the UI.
 *  Only subcategories that have at least one catalog item are surfaced as filters
 *  (see getAvailableSubcategories in Catalog.tsx) so the filter never shows an
 *  empty result set. */
export const subcategoriesByCategory: Record<ServiceCategory, { id: Subcategory; label: string }[]> = {
  photography: [
    { id: 'portrait', label: 'Portrait' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'event', label: 'Event' },
    { id: 'product', label: 'Product' },
  ],
  videography: [
    { id: 'wedding-film', label: 'Wedding Films' },
    { id: 'brand-video', label: 'Brand Videos' },
    { id: 'social-edit', label: 'Social Edits' },
  ],
  design: [
    { id: 'flyer-poster', label: 'Flyers & Posters' },
    { id: 'branding', label: 'Branding' },
    { id: 'social-template', label: 'Social Templates' },
  ],
};

/** Placeholder team roster — role-based, no invented names. Swap in real
 *  names, bios, and headshots in src/assets when available. */
export const teamMembers: TeamMember[] = [
  {
    id: 'lead-photographer',
    role: 'Lead Photographer',
    department: 'Photography',
    bio: 'Leads every shoot day — weddings, portraits, and on-location coverage.',
    image: kentePortrait,
  },
  {
    id: 'lead-videographer',
    role: 'Lead Videographer',
    department: 'Videography',
    bio: 'Handles filming and color grading for highlight films and brand video.',
    image: heroThree,
  },
  {
    id: 'lead-designer',
    role: 'Lead Graphic Designer',
    department: 'Design',
    bio: 'Designs flyers, posters and brand identity work for every client.',
    image: designThree,
  },
  {
    id: 'studio-coordinator',
    role: 'Studio Coordinator',
    department: 'Studio',
    bio: 'First point of contact — manages bookings, scheduling, and delivery.',
    image: weddingSq,
  },
];

export const coreValues: ValuePillar[] = [
  {
    tag: 'Detail',
    title: 'Nothing\'s "good enough."',
    text: "A blurred frame or a rushed layout doesn't go out the door. We'd rather take longer and send work we'd put our own name on.",
  },
  {
    tag: 'Honesty',
    title: 'We tell you the real timeline.',
    text: "If a turnaround isn't realistic, we say so upfront — not after the deposit's been paid.",
  },
  {
    tag: 'Craft',
    title: 'The boring parts matter too.',
    text: 'Color grading, file naming, backups — the unglamorous work is what keeps a project from falling apart.',
  },
];
