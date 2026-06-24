export interface NavLink {
  label: string;
  to: string;
}

export type ServiceCategory = 'photography' | 'videography' | 'design';

export type Subcategory =
  | 'portrait'
  | 'wedding'
  | 'event'
  | 'product'
  | 'wedding-film'
  | 'brand-video'
  | 'social-edit'
  | 'flyer-poster'
  | 'branding'
  | 'social-template';

export interface CatalogItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  categories: ServiceCategory[];
  subcategories: Subcategory[];
}

export interface ServiceSummary {
  id: ServiceCategory;
  exifLabel: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface BookingFormState {
  services: ServiceCategory[];
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  message: string;
}

export interface TeamMember {
  id: string;
  role: string;
  department: 'Photography' | 'Videography' | 'Design' | 'Studio';
  bio: string;
  image: string;
}

export interface ValuePillar {
  tag: string;
  title: string;
  text: string;
}
