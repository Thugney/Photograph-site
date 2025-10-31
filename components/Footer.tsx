'use client';

import Link from 'next/link';
import { FaCamera, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCamera className="text-3xl text-purple-500" />
              <span className="text-2xl font-serif font-bold">PhotoStudio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Capturing life's precious moments with elegance and artistry.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Portrait Sessions</li>
              <li className="text-gray-400">Event Coverage</li>
              <li className="text-gray-400">Commercial Photography</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                <span className="text-gray-400">
                  123 Photography Lane<br />
                  Studio City, CA 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-purple-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-500 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500" />
                <a href="mailto:info@photostudio.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                  info@photostudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} PhotoStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
