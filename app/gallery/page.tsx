'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Commercial'];

// Sample gallery data - replace with your actual images
const galleryImages = [
  { id: 1, category: 'Weddings', title: 'Beach Wedding', url: '/images/placeholder.jpg' },
  { id: 2, category: 'Portraits', title: 'Studio Portrait', url: '/images/placeholder.jpg' },
  { id: 3, category: 'Events', title: 'Corporate Event', url: '/images/placeholder.jpg' },
  { id: 4, category: 'Weddings', title: 'Garden Wedding', url: '/images/placeholder.jpg' },
  { id: 5, category: 'Portraits', title: 'Family Portrait', url: '/images/placeholder.jpg' },
  { id: 6, category: 'Commercial', title: 'Product Shot', url: '/images/placeholder.jpg' },
  { id: 7, category: 'Events', title: 'Birthday Party', url: '/images/placeholder.jpg' },
  { id: 8, category: 'Weddings', title: 'Church Wedding', url: '/images/placeholder.jpg' },
  { id: 9, category: 'Portraits', title: 'Professional Headshot', url: '/images/placeholder.jpg' },
  { id: 10, category: 'Commercial', title: 'Architecture', url: '/images/placeholder.jpg' },
  { id: 11, category: 'Events', title: 'Conference', url: '/images/placeholder.jpg' },
  { id: 12, category: 'Weddings', title: 'Reception', url: '/images/placeholder.jpg' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const selectedImageData = filteredImages.find(img => img.id === selectedImage);

  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning photography across various categories
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                whileHover={{ scale: 1.05 }}
                layout
              >
                {/* Placeholder gradient - replace with actual images */}
                <div className="w-full h-full bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400"></div>

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-white text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && selectedImageData && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white text-3xl hover:text-purple-400 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>

              {/* Previous Button */}
              <button
                className="absolute left-6 text-white text-4xl hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>

              {/* Image */}
              <motion.div
                className="max-w-5xl max-h-[80vh] w-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-square w-full bg-gradient-to-br from-purple-300 via-pink-300 to-purple-400 rounded-lg"></div>
                <div className="text-center mt-4 text-white">
                  <h3 className="text-2xl font-semibold">{selectedImageData.title}</h3>
                  <p className="text-gray-400">{selectedImageData.category}</p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                className="absolute right-6 text-white text-4xl hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next"
              >
                <FaChevronRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
