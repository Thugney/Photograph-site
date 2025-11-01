'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FaCamera, FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaComments } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/config/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <footer className="bg-secondary-500 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCamera className="text-3xl text-primary-500" />
              <span className="text-2xl font-serif font-bold">{tCommon('businessName')}</span>
            </div>
            <p className="text-gray-400 mb-6">
              {tCommon('tagline')}
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors text-xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors text-xl"
                aria-label="Twitter/X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('quickLinks')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('quickLinks')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('quickLinks')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('quickLinks')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">{t('servicesList.wedding')}</li>
              <li className="text-gray-400">{t('servicesList.portrait')}</li>
              <li className="text-gray-400">{t('servicesList.baptism')}</li>
              <li className="text-gray-400">{t('servicesList.family')}</li>
              <li className="text-gray-400">{t('servicesList.event')}</li>
              <li className="text-gray-400">{t('servicesList.commercial')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1" />
                <span className="text-gray-400">
                  {CONTACT_INFO.address.city}<br />
                  {CONTACT_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-500" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-primary-500" />
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaComments className="text-primary-500" />
                <a href={CONTACT_INFO.chat} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} {tCommon('businessName')}. {t('rightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
}
