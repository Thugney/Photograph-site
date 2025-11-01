'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCamera, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import { ABOUT_IMAGES, IMAGE_CONFIG } from '@/config/images';

export default function About() {
  const stats = [
    { icon: <FaCamera />, value: '500+', label: 'Sessions Completed' },
    { icon: <FaAward />, value: '15+', label: 'Awards Won' },
    { icon: <FaHeart />, value: '100%', label: 'Client Satisfaction' },
    { icon: <FaUsers />, value: '300+', label: 'Happy Clients' },
  ];

  return (
    <div className="pt-32 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about capturing life's most precious moments
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src={IMAGE_CONFIG.getImageUrl(ABOUT_IMAGES.hero)}
                alt="Our Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Welcome to PhotoStudio, where every photograph tells a unique story.
                Founded in 2015, we've been dedicated to capturing the beauty, emotion,
                and authenticity of life's most important moments.
              </p>
              <p>
                Our journey began with a simple passion for photography and has evolved
                into a full-service studio specializing in weddings, portraits, and
                commercial photography. We believe that every client deserves images
                that they'll treasure for a lifetime.
              </p>
              <p>
                With over 8 years of experience and hundreds of satisfied clients,
                we've perfected the art of making you feel comfortable in front of
                the camera while capturing genuine, stunning moments that reflect
                your true essence.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl"
            >
              <div className="text-4xl text-purple-600 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <motion.div
          className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 md:p-16 text-white mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-8">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Authenticity</h3>
              <p className="text-purple-100">
                We capture real moments and genuine emotions, creating images
                that truly reflect who you are.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-purple-100">
                We're committed to delivering the highest quality images and
                exceptional service on every project.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connection</h3>
              <p className="text-purple-100">
                Building genuine relationships with our clients ensures
                comfortable, natural photography sessions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_IMAGES.team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square rounded-full mb-4 mx-auto w-48 h-48 overflow-hidden">
                  <Image
                    src={IMAGE_CONFIG.getImageUrl(member.filename)}
                    alt={member.name}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {member.name === 'Sarah Johnson' ? 'Lead Photographer' :
                   member.name === 'Michael Chen' ? 'Wedding Specialist' :
                   'Portrait Photographer'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
