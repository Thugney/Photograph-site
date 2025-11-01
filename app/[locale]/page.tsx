'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { FaCamera, FaHeart, FaStar } from 'react-icons/fa';
import { FEATURED_IMAGES, IMAGE_CONFIG } from '@/config/images';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaCamera className="text-4xl text-purple-600" />,
      title: t('services.wedding.title'),
      description: t('services.wedding.description')
    },
    {
      icon: <FaHeart className="text-4xl text-purple-600" />,
      title: t('services.portrait.title'),
      description: t('services.portrait.description')
    },
    {
      icon: <FaStar className="text-4xl text-purple-600" />,
      title: t('services.event.title'),
      description: t('services.event.description')
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href={`/${locale}/gallery`}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {t('common.viewGallery')}
            </Link>
            <Link
              href={`/${locale}/booking`}
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              {t('common.bookNow')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.featured.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {FEATURED_IMAGES.map((image, index) => (
              <Link href={`/${locale}/gallery`} key={image.id}>
                <motion.div
                  className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={IMAGE_CONFIG.getImageUrl(image.filename)}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold">
                      View
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/gallery`}
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              {t('common.viewGallery')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('home.cta.title')}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('home.cta.subtitle')}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href={`/${locale}/pricing`}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('pricing.calculator.title')}
            </Link>
            <Link
              href={`/${locale}/booking`}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors shadow-lg"
            >
              {t('common.bookNow')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
