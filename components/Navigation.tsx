'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { FaCamera, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { CONTACT_INFO } from '@/config/contact';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/gallery`, label: t('gallery') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/pricing`, label: t('pricing') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/booking`, label: t('booking') },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'no' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <FaCamera
              className={`text-3xl transition-colors ${
                isScrolled ? 'text-primary-500' : 'text-primary-500'
              }`}
            />
            <span
              className={`text-2xl font-serif font-bold transition-colors ${
                isScrolled ? 'text-secondary-500' : 'text-secondary-500'
              }`}
            >
              {CONTACT_INFO.businessName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-gray-900 hover:text-primary-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                    pathname === link.href ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'
              }`}
              aria-label="Toggle language"
            >
              <FaGlobe />
              <span className="uppercase">{locale === 'en' ? 'NO' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-6 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                <FaGlobe />
                <span>{locale === 'en' ? 'Norsk' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
