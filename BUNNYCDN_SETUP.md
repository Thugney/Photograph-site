# BunnyCDN Setup Guide

This guide will help you configure your BunnyCDN images for the photography website.

## Step 1: Set Up BunnyCDN URL

1. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your BunnyCDN details:
```env
NEXT_PUBLIC_BUNNY_CDN_URL=https://your-storage-zone.b-cdn.net
NEXT_PUBLIC_BUNNY_CDN_PATH=/photography
```

Replace `your-storage-zone.b-cdn.net` with your actual BunnyCDN URL.

## Step 2: Upload Images to BunnyCDN

Upload your images to BunnyCDN following this structure:

```
photography/
├── weddings/
│   ├── beach-wedding.jpg
│   ├── garden-wedding.jpg
│   ├── church-wedding.jpg
│   └── reception.jpg
├── portraits/
│   ├── studio-portrait.jpg
│   ├── family-portrait.jpg
│   └── headshot.jpg
├── events/
│   ├── corporate-event.jpg
│   ├── birthday-party.jpg
│   └── conference.jpg
├── commercial/
│   ├── product-shot.jpg
│   └── architecture.jpg
├── featured/
│   ├── featured-1.jpg
│   ├── featured-2.jpg
│   ├── featured-3.jpg
│   ├── featured-4.jpg
│   ├── featured-5.jpg
│   └── featured-6.jpg
├── about/
│   └── hero.jpg
└── team/
    ├── sarah.jpg
    ├── michael.jpg
    └── emily.jpg
```

## Step 3: Update Image Configuration

If you want to use different filenames or add more images, edit `config/images.ts`:

### Gallery Images

```typescript
export const GALLERY_IMAGES = [
  { id: 1, category: 'Weddings', title: 'Beach Wedding', filename: 'weddings/beach-wedding.jpg' },
  // Add more images...
];
```

### Featured Images (Homepage)

```typescript
export const FEATURED_IMAGES = [
  { id: 1, filename: 'featured/featured-1.jpg', alt: 'Featured Work 1' },
  // Add more images...
];
```

### About Page Images

```typescript
export const ABOUT_IMAGES = {
  hero: 'about/hero.jpg',
  team: [
    { name: 'Sarah Johnson', filename: 'team/sarah.jpg' },
    // Add more team members...
  ],
};
```

## Step 4: Test Locally

1. Install dependencies (if not already done):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Visit http://localhost:3000 and check if images load correctly

## Step 5: Deploy

Once you've verified images load correctly locally:

```bash
npm run build  # Test production build
```

Then deploy to your hosting platform (Vercel, Netlify, etc.)

## Image Optimization Tips

1. **Image Sizes**:
   - Gallery images: 1200x1200px (square)
   - Featured images: 800x800px
   - Team photos: 400x400px
   - Hero image: 1000x1000px

2. **Format**: Use WebP or JPEG for best performance

3. **Compression**: Compress images before uploading to reduce loading time

4. **Naming**: Use lowercase letters and hyphens (e.g., `beach-wedding.jpg`)

## Troubleshooting

### Images Not Loading

1. Check that your `.env.local` file exists and has correct values
2. Verify image URLs in browser console
3. Ensure BunnyCDN CORS is enabled
4. Check that filenames match exactly (case-sensitive)

### Build Errors

1. Make sure all image paths in `config/images.ts` are correct
2. Verify Next.js config allows BunnyCDN domain
3. Check that `.env.local` is not committed to git (it's in .gitignore)

## Environment Variables for Production

When deploying, make sure to set these environment variables in your hosting platform:

- `NEXT_PUBLIC_BUNNY_CDN_URL`
- `NEXT_PUBLIC_BUNNY_CDN_PATH`

### Vercel
1. Go to Project Settings → Environment Variables
2. Add both variables
3. Redeploy

### Netlify
1. Go to Site Settings → Environment Variables
2. Add both variables
3. Redeploy

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify image URLs are accessible directly
3. Ensure BunnyCDN pull zone is configured correctly
