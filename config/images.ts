// Image configuration for BunnyCDN
export const IMAGE_CONFIG = {
  // BunnyCDN base URL - update this with your actual BunnyCDN URL
  cdnUrl: process.env.NEXT_PUBLIC_BUNNY_CDN_URL || 'https://your-storage-zone.b-cdn.net',
  cdnPath: process.env.NEXT_PUBLIC_BUNNY_CDN_PATH || '/photography',

  // Helper function to get full image URL
  getImageUrl: (filename: string) => {
    const cdnUrl = process.env.NEXT_PUBLIC_BUNNY_CDN_URL || 'https://your-storage-zone.b-cdn.net';
    const cdnPath = process.env.NEXT_PUBLIC_BUNNY_CDN_PATH || '/photography';
    return `${cdnUrl}${cdnPath}/${filename}`;
  },
};

// Gallery images - update these filenames to match your BunnyCDN uploads
export const GALLERY_IMAGES = [
  // Weddings
  { id: 1, category: 'Weddings', title: 'Beach Wedding', filename: 'weddings/beach-wedding.jpg' },
  { id: 2, category: 'Weddings', title: 'Garden Wedding', filename: 'weddings/garden-wedding.jpg' },
  { id: 3, category: 'Weddings', title: 'Church Wedding', filename: 'weddings/church-wedding.jpg' },
  { id: 4, category: 'Weddings', title: 'Reception', filename: 'weddings/reception.jpg' },

  // Portraits
  { id: 5, category: 'Portraits', title: 'Studio Portrait', filename: 'portraits/studio-portrait.jpg' },
  { id: 6, category: 'Portraits', title: 'Family Portrait', filename: 'portraits/family-portrait.jpg' },
  { id: 7, category: 'Portraits', title: 'Professional Headshot', filename: 'portraits/headshot.jpg' },

  // Events
  { id: 8, category: 'Events', title: 'Corporate Event', filename: 'events/corporate-event.jpg' },
  { id: 9, category: 'Events', title: 'Birthday Party', filename: 'events/birthday-party.jpg' },
  { id: 10, category: 'Events', title: 'Conference', filename: 'events/conference.jpg' },

  // Commercial
  { id: 11, category: 'Commercial', title: 'Product Shot', filename: 'commercial/product-shot.jpg' },
  { id: 12, category: 'Commercial', title: 'Architecture', filename: 'commercial/architecture.jpg' },
];

// Homepage featured images
export const FEATURED_IMAGES = [
  { id: 1, filename: 'featured/featured-1.jpg', alt: 'Featured Work 1' },
  { id: 2, filename: 'featured/featured-2.jpg', alt: 'Featured Work 2' },
  { id: 3, filename: 'featured/featured-3.jpg', alt: 'Featured Work 3' },
  { id: 4, filename: 'featured/featured-4.jpg', alt: 'Featured Work 4' },
  { id: 5, filename: 'featured/featured-5.jpg', alt: 'Featured Work 5' },
  { id: 6, filename: 'featured/featured-6.jpg', alt: 'Featured Work 6' },
];

// About page images
export const ABOUT_IMAGES = {
  hero: 'about/hero.jpg',
  team: [
    { name: 'Sarah Johnson', filename: 'team/sarah.jpg' },
    { name: 'Michael Chen', filename: 'team/michael.jpg' },
    { name: 'Emily Davis', filename: 'team/emily.jpg' },
  ],
};
