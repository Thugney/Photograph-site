// Image configuration for BunnyCDN
export const IMAGE_CONFIG = {
  // BunnyCDN base URL - fotostudio.b-cdn.net
  cdnUrl: process.env.NEXT_PUBLIC_BUNNY_CDN_URL || 'https://fotostudio.b-cdn.net',
  // Storage zone path: storage-clint/Photography
  cdnPath: process.env.NEXT_PUBLIC_BUNNY_CDN_PATH || '/storage-clint/Photography',

  // Helper function to get full image URL
  getImageUrl: (filename: string) => {
    const cdnUrl = process.env.NEXT_PUBLIC_BUNNY_CDN_URL || 'https://fotostudio.b-cdn.net';
    const cdnPath = process.env.NEXT_PUBLIC_BUNNY_CDN_PATH || '/storage-clint/Photography';
    return `${cdnUrl}${cdnPath}/${filename}`;
  },
};

// Gallery images - organized by category
// All images are stored in BunnyCDN: https://fotostudio.b-cdn.net/storage-clint/Photography/
export const GALLERY_IMAGES = [
  // Baptism category - images from the Photography directory
  { id: 1, category: 'Baptism', title: 'Baptism Ceremony', filename: 'baptism/ceremony-1.jpg' },
  { id: 2, category: 'Baptism', title: 'Family Blessing', filename: 'baptism/family-1.jpg' },
  { id: 3, category: 'Baptism', title: 'Church Moment', filename: 'baptism/church-1.jpg' },
  { id: 4, category: 'Baptism', title: 'Baby Portrait', filename: 'baptism/baby-1.jpg' },

  // Weddings category
  { id: 5, category: 'Weddings', title: 'Wedding Ceremony', filename: 'wedding/ceremony-1.jpg' },
  { id: 6, category: 'Weddings', title: 'Bride & Groom', filename: 'wedding/couple-1.jpg' },
  { id: 7, category: 'Weddings', title: 'Reception', filename: 'wedding/reception-1.jpg' },
  { id: 8, category: 'Weddings', title: 'First Dance', filename: 'wedding/dance-1.jpg' },

  // Portraits category
  { id: 9, category: 'Portraits', title: 'Studio Portrait', filename: 'portraits/studio-1.jpg' },
  { id: 10, category: 'Portraits', title: 'Outdoor Portrait', filename: 'portraits/outdoor-1.jpg' },
  { id: 11, category: 'Portraits', title: 'Professional Headshot', filename: 'portraits/headshot-1.jpg' },
  { id: 12, category: 'Portraits', title: 'Lifestyle Portrait', filename: 'portraits/lifestyle-1.jpg' },

  // Family category
  { id: 13, category: 'Family', title: 'Family Session', filename: 'family/session-1.jpg' },
  { id: 14, category: 'Family', title: 'Outdoor Family', filename: 'family/outdoor-1.jpg' },
  { id: 15, category: 'Family', title: 'Studio Family', filename: 'family/studio-1.jpg' },
  { id: 16, category: 'Family', title: 'Candid Moment', filename: 'family/candid-1.jpg' },

  // Events category
  { id: 17, category: 'Events', title: 'Corporate Event', filename: 'events/corporate-1.jpg' },
  { id: 18, category: 'Events', title: 'Birthday Party', filename: 'events/birthday-1.jpg' },
  { id: 19, category: 'Events', title: 'Conference', filename: 'events/conference-1.jpg' },
  { id: 20, category: 'Events', title: 'Celebration', filename: 'events/celebration-1.jpg' },
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
    { name: 'Photographer 1', filename: 'team/photographer-1.jpg' },
    { name: 'Photographer 2', filename: 'team/photographer-2.jpg' },
    { name: 'Photographer 3', filename: 'team/photographer-3.jpg' },
  ],
};

// Note: All image paths are relative to the cdnPath configured above
// Full URL example: https://fotostudio.b-cdn.net/storage-clint/Photography/baptism/ceremony-1.jpg
