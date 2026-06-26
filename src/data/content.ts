import type { NavLink, ServiceSummary, CatalogItem, ServiceCategory, Subcategory, TeamMember, ValuePillar } from '../types';


// import designOne from '../assets/design-1.jpg';
// import designTwo from '../assets/design-2.jpg';
// import designThree from '../assets/design-3.jpg';

export const heroImages = [
  "https://res.cloudinary.com/dszlo11rt/image/upload/v1782387268/Firefly_6_zdlzu1.jpg",
   "https://res.cloudinary.com/dszlo11rt/image/upload/v1782387555/Firefly_4_1_hr8rnj.jpg",
    "https://res.cloudinary.com/dszlo11rt/image/upload/v1782406719/Firefly_7_v5g9xd.jpg",
  ];

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Catalog', to: '/catalog' },
  // { label: 'Booking', to: '/booking' },
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
    exifLabel: 'CMYK/RGB',
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
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385097/BECKY-6.jpg_dd8upa.jpg",
    alt: 'Wedding couple portrait in golden field',
    title: 'Field Wedding',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
  {
    id: 'bridal-portrait',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385088/BECKY-8.jpg_iy41v0.jpg",
    alt: 'Bridal portrait in kente cloth',
    title: 'Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
  {
    id: 'extra-portrait',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385096/BECKY-7.jpg_clvryu.jpg",
    alt: 'Additional bridal portrait',
    title: 'Extra Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
  {
    id: 'extra-portrait',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385107/gcyg.jpg_bh70kn.jpg",
    alt: 'Additional bridal portrait',
    title: 'Extra Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
  {
    id: 'extra-portrait',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385094/iuhio.jpg_nxbmwr.jpg",
    alt: 'Additional bridal portrait',
    title: 'Extra Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
   {
    id: 'extra-portrait',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385105/BECKY-9.jpg_yud5db.jpg",
    alt: 'Additional bridal portrait',
    title: 'Extra Bridal Portrait',
    categories: ['photography'],
    subcategories: ['portrait'],
  },
  {
    id: 'praise-medley',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385251/design-3_i0xf1b.jpg",
    alt: 'Praise Medley church event poster',
    title: 'Praise Medley Poster',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
  {
    id: 'learn-from-scratch',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385251/design-2_lmzitj.jpg",
    alt: 'Learn From Scratch 2.0 event poster',
    title: 'Learn From Scratch 2.0',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
  {
    id: 'ignite-flyer',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782385251/design-1_j9rlhb.jpg",
    alt: 'Forty Days of Ignite event flyer',
    title: 'Ignite Flyer',
    categories: ['design'],
    subcategories: ['flyer-poster'],
  },
//   {
//     id: 'highlight-still',
//     image: heroImages[2],
//     alt: 'Bridal portrait still from highlight film',
//     title: 'Highlight Film Still',
//     categories: ['videography'],
//     subcategories: ['wedding-film'],
//   },
//   {
//     id: 'hillside-engagement',
//     image: heroImages[0],
//     alt: 'Couple in field, photography and film coverage',
//     title: 'Hillside Engagement',
//     categories: ['photography', 'videography'],
//     subcategories: ['wedding', 'wedding-film'],
// },
//   {
//     id: 'ceremony-coverage',
//     image: heroImages[1],
//     alt: 'Bridal portrait still, video coverage',
//     title: 'Ceremony Coverage',
//     categories: ['videography'],
//     subcategories: ['wedding-film'],
//   },
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
    role: 'Kenneth Afful',
    department: 'CEO & Founder',
    bio: 'Photographer and Graphic Designer. Leads photography and design projects, and manages the studio.',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782391172/Kenneth_Afful_6.jpg_ue6pcx.jpg",
  },
  {
    id: 'lead-videographer',
    role: 'Bernard Ayida',
    department: 'Management Officer',
    bio: 'Videographer, Photographer, and Editor. Leads videography projects, and manages the studio.',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782390123/IMG-20260614-WA0050_1.jpg_ym18nm.jpg",
  },
  {
    id: 'lead-designer',
    role: 'Maame Serwaa',
    department: 'Client Relations Officer',
    bio: 'Photographer, Consultant, and social media manager. Leads design projects, and manages client relations.',
    image: "https://res.cloudinary.com/dszlo11rt/image/upload/v1782391173/4._Maame_Serwaa_Bosompem.jpg_eandyp.jpg",
  },
  // {
  //   id: 'studio-coordinator',
  //   role: 'Studio Coordinator',
  //   department: 'Studio',
  //   bio: 'First point of contact — manages bookings, scheduling, and delivery.',
  //   image: weddingSq,
  // },
];

export const coreValues: ValuePillar[] = [
  {
    // tag: 'Detail',
    id: 1,
    title: 'Excellence',
    text: "We sweat the small stuff so you don’t have to. Every photo, every frame, every edit is crafted with care and attention to detail — because the little things make a big difference.",
  },
  {
    // tag: 'Honesty',
    id: 2,
    title: 'Creativity',
    text: "We don't just take pictures or make videos — we tell stories. Every frame, every edit, every design is crafted to communicate a message and evoke emotion.",
  },
  {
    // tag: 'Craft',
    id: 3,  
    title: 'Client-Centricity',
    text: 'We listen first, then create. Every project starts with a conversation about your goals, your brand, and your audience — so the final product is aligned with your vision.',
  },
];
