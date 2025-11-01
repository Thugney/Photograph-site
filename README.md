# Photography Portfolio Website

A modern, elegant photography portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful gallery, booking system, and interactive price calculator.

## Features

- **Elegant Homepage** - Hero section with smooth animations and call-to-action buttons
- **Photo Gallery** - Filterable gallery with categories and lightbox view
- **Booking System** - Easy-to-use booking form with date and time picker
- **Price Calculator** - Interactive pricing calculator for instant estimates
- **Services Pages** - Detailed information about photography services
- **About Page** - Showcase your story and team
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Framer Motion animations for a premium feel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter & Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Thugney/Photograph-site.git
cd Photograph-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Photograph-site/
├── app/
│   ├── about/          # About page
│   ├── booking/        # Booking form page
│   ├── gallery/        # Photo gallery page
│   ├── pricing/        # Pricing and calculator page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation component
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/         # Image assets
└── package.json
```

## Customization

### Adding Your Photos

1. Replace placeholder gradients in the gallery with your actual images
2. Add images to `/public/images/` directory
3. Update image URLs in `app/gallery/page.tsx`

### Updating Content

- **Contact Information**: Edit `components/Footer.tsx`
- **Services**: Update `app/services/page.tsx`
- **Pricing**: Modify prices in `app/pricing/page.tsx`
- **About**: Edit your story in `app/about/page.tsx`
- **Brand Name**: Replace "PhotoStudio" across components

### Colors

The site uses a purple theme. To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom color palette
  },
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

Build for production:
```bash
npm run build
npm start
```

## Features to Add

Consider adding these features for a complete solution:

- [ ] Backend integration for booking form
- [ ] Payment processing
- [ ] Client portal for photo delivery
- [ ] Blog section
- [ ] Instagram feed integration
- [ ] SEO optimization
- [ ] Google Analytics
- [ ] Contact form with email notifications

## License

MIT License - feel free to use this for your photography business!

## Troubleshooting

### "Could not read package.json" Error

If you encounter an `ENOENT: no such file or directory, open 'package.json'` error after cloning:

1. **Verify you're in the correct directory**:
   ```bash
   # Check your current directory
   pwd  # On Mac/Linux
   cd   # On Windows

   # You should be in the Photograph-site directory
   # If not, navigate to it:
   cd Photograph-site
   ```

2. **Check if package.json exists**:
   ```bash
   # List files to verify package.json exists
   ls -la package.json  # Mac/Linux
   dir package.json     # Windows
   ```

3. **If files are missing, re-clone the repository**:
   ```bash
   # Delete the incomplete clone
   cd ..
   rm -rf Photograph-site  # or delete the folder manually

   # Clone again
   git clone https://github.com/Thugney/Photograph-site.git
   cd Photograph-site
   ```

4. **Verify the clone was successful**:
   ```bash
   git status
   # Should show: "On branch main"
   ```

5. **Then install dependencies**:
   ```bash
   npm install
   ```

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for photographers