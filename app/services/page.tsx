'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRing, FaUser, FaCalendarAlt, FaBuilding, FaHeart, FaBaby } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaRing className="text-5xl" />,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every precious moment from preparation to reception.',
      features: [
        'Full day coverage',
        'Engagement session included',
        'Second photographer available',
        'Premium album',
        'Online gallery',
        'High-resolution files',
      ],
      price: 'From $1,999',
    },
    {
      icon: <FaUser className="text-5xl" />,
      title: 'Portrait Sessions',
      description: 'Professional portraits that showcase your personality, style, and unique character.',
      features: [
        'Individual or group portraits',
        'Professional styling advice',
        'Multiple outfit changes',
        'Studio or outdoor location',
        'Retouched images',
        'Digital downloads',
      ],
      price: 'From $299',
    },
    {
      icon: <FaCalendarAlt className="text-5xl" />,
      title: 'Event Photography',
      description: 'Comprehensive coverage of corporate events, parties, and special celebrations.',
      features: [
        'Full event coverage',
        'Candid and posed shots',
        'Fast turnaround',
        'Online gallery',
        'Group photos',
        'High-resolution files',
      ],
      price: 'From $599',
    },
    {
      icon: <FaBuilding className="text-5xl" />,
      title: 'Commercial Photography',
      description: 'Professional photography for businesses, products, and marketing materials.',
      features: [
        'Product photography',
        'Corporate headshots',
        'Brand photography',
        'Marketing materials',
        'Commercial license',
        'Fast delivery',
      ],
      price: 'Custom Quote',
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Engagement Sessions',
      description: 'Romantic photo sessions to celebrate your love story and upcoming wedding.',
      features: [
        '1-2 hour session',
        'Location of your choice',
        'Outfit changes',
        'Edited photos',
        'Save-the-date cards',
        'Digital gallery',
      ],
      price: 'From $399',
    },
    {
      icon: <FaBaby className="text-5xl" />,
      title: 'Family Photography',
      description: 'Beautiful family portraits that capture the love and connection between family members.',
      features: [
        'Indoor or outdoor session',
        'All family members included',
        'Posed and candid shots',
        'Retouched images',
        'Print options',
        'Digital downloads',
      ],
      price: 'From $349',
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-purple-600 mb-4">
                  {service.price}
                </p>
                <Link
                  href="/booking"
                  className="block w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            We understand that every project is unique. Contact us to discuss
            your specific requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/booking"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
