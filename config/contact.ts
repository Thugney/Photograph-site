// Contact and social media configuration
export const CONTACT_INFO = {
  businessName: 'Eriteach',
  email: 'info@eriteach.com',
  phone: '+47 455 50 381',
  whatsapp: 'https://wa.me/4745550381?text=Hei! Jeg ønsker å komme i kontakt med Eriteach',
  chat: 'https://1484.3cx.cloud/callus/#eriteach',
  address: {
    street: 'Drammen',
    city: 'Drammen',
    country: 'Norway',
  },
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/eriteach_official/',
  tiktok: 'https://www.tiktok.com/@eriteach/',
  facebook: 'https://www.facebook.com/eriteach/',
  twitter: 'https://www.x.com/eriteach',
};

// Pricing configuration
export const PRICING_CONFIG = {
  basePackage: {
    name: 'Premium Package',
    pages: 35,
    priceNOK: 1000,
    priceUSD: 250,
  },
  travelRate: {
    perKm: 5, // NOK per km outside Drammen kommune
    description: 'Travel fee for locations outside Drammen kommune to cover gas, tolls, etc.',
  },
  editing: {
    basic: {
      included: true,
      description: 'Basic editing included in all packages',
    },
    advanced: {
      included: false,
      description: 'Advanced editing available upon request - pricing discussed with client',
    },
  },
};
