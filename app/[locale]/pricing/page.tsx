'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaCheck, FaCalculator } from 'react-icons/fa';
import { PRICING_CONFIG } from '@/config/contact';

type PackageType = 'basic' | 'standard' | 'premium' | 'custom';

export default function Pricing() {
  const t = useTranslations('pricing');
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('premium');
  const [hours, setHours] = useState(4);
  const [locations, setLocations] = useState(1);
  const [distance, setDistance] = useState(0);
  const [prints, setPrints] = useState(0);
  const [album, setAlbum] = useState(false);
  const [editing, setEditing] = useState('basic');
  const [totalPrice, setTotalPrice] = useState(0);

  const basePackages = {
    basic: { price: 299, hours: 1, photos: 20 },
    standard: { price: 599, hours: 2, photos: 50 },
    premium: { price: PRICING_CONFIG.basePackage.priceNOK, hours: 4, photos: 100, pages: PRICING_CONFIG.basePackage.pages },
    custom: { price: 0, hours: 0, photos: 0 },
  };

  const addOns = {
    extraHour: 150,
    extraLocation: 100,
    print: 15,
    album: 250,
    advancedEditing: 100,
    travelPerKm: PRICING_CONFIG.travelRate.perKm,
  };

  useEffect(() => {
    let price = basePackages[selectedPackage].price;

    if (selectedPackage !== 'custom') {
      // Add extra hours
      const extraHours = Math.max(0, hours - basePackages[selectedPackage].hours);
      price += extraHours * addOns.extraHour;
    } else {
      // Custom package
      price = hours * addOns.extraHour;
    }

    // Add extra locations
    const extraLocations = Math.max(0, locations - 1);
    price += extraLocations * addOns.extraLocation;

    // Add travel fee for distance outside Drammen kommune
    if (distance > 0) {
      price += distance * addOns.travelPerKm;
    }

    // Add prints
    price += prints * addOns.print;

    // Add album
    if (album) price += addOns.album;

    // Add advanced editing (note: pricing discussed with client, so we don't add it automatically)
    // if (editing === 'advanced') price += addOns.advancedEditing;

    setTotalPrice(price);
  }, [selectedPackage, hours, locations, distance, prints, album, editing]);

  const packages = [
    {
      name: t('packages.basic.name'),
      type: 'basic' as PackageType,
      price: 299,
      features: [
        t('packages.basic.features.duration'),
        t('packages.basic.features.location'),
        t('packages.basic.features.photos'),
        t('packages.basic.features.retouching'),
        t('packages.basic.features.gallery'),
        t('packages.basic.features.download'),
      ],
    },
    {
      name: t('packages.standard.name'),
      type: 'standard' as PackageType,
      price: 599,
      features: [
        t('packages.standard.features.duration'),
        t('packages.standard.features.location'),
        t('packages.standard.features.photos'),
        t('packages.standard.features.retouching'),
        t('packages.standard.features.gallery'),
        t('packages.standard.features.download'),
        t('packages.standard.features.release'),
      ],
      popular: true,
    },
    {
      name: t('packages.premium.name'),
      type: 'premium' as PackageType,
      price: PRICING_CONFIG.basePackage.priceNOK,
      priceUSD: PRICING_CONFIG.basePackage.priceUSD,
      pages: PRICING_CONFIG.basePackage.pages,
      features: [
        t('packages.premium.features.duration'),
        t('packages.premium.features.location'),
        `${PRICING_CONFIG.basePackage.pages} ${t('packages.premium.pages')}`,
        t('packages.premium.features.retouching'),
        t('packages.premium.features.gallery'),
        t('packages.premium.features.download'),
        t('packages.premium.features.release'),
        t('packages.premium.features.album'),
      ],
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-accent-100 to-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold text-secondary-500 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.type}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                selectedPackage === pkg.type ? 'ring-4 ring-primary-600 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedPackage(pkg.type)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t('packages.standard.popular')}
                </div>
              )}

              <h3 className="text-3xl font-serif font-bold text-secondary-500 mb-2">
                {pkg.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary-600">{pkg.price} kr</span>
                {pkg.priceUSD && <span className="text-gray-600 ml-2">/ ${pkg.priceUSD}</span>}
                <div className="text-gray-600 mt-1">{t('packages.premium.starting')}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  selectedPackage === pkg.type
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedPackage === pkg.type ? t('selected') : t('selectPackage')}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Price Calculator */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <FaCalculator className="text-4xl text-primary-600 mr-3" />
            <h2 className="text-4xl font-serif font-bold text-secondary-500">
              {t('calculator.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Options */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('calculator.sessionDuration')}
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary-600 w-12">{hours}h</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('calculator.locations')}
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={locations}
                    onChange={(e) => setLocations(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary-600 w-12">{locations}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('calculator.distance')}
                </label>
                <p className="text-sm text-gray-500 mb-2">{t('calculator.distanceNote')}</p>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary-600 w-16">{distance} km</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('calculator.prints')} ({addOns.print} kr {t('calculator.each')})
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={prints}
                    onChange={(e) => setPrints(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-primary-600 w-12">{prints}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('calculator.editingLevel')}
                </label>
                <select
                  value={editing}
                  onChange={(e) => setEditing(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="basic">{t('calculator.basicEditing')}</option>
                  <option value="advanced">{t('calculator.advancedEditing')}</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="album"
                  checked={album}
                  onChange={(e) => setAlbum(e.target.checked)}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <label htmlFor="album" className="ml-3 text-gray-700 font-semibold">
                  {t('calculator.addAlbum')} (+{addOns.album} kr)
                </label>
              </div>
            </div>

            {/* Right Column - Price Summary */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">
                {t('calculator.estimate')}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between pb-2 border-b border-primary-400">
                  <span>{t('calculator.basePackage')}</span>
                  <span className="font-semibold">
                    {basePackages[selectedPackage].price} kr
                  </span>
                </div>

                {selectedPackage !== 'custom' && hours > basePackages[selectedPackage].hours && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>{t('calculator.extraHours')} ({hours - basePackages[selectedPackage].hours})</span>
                    <span className="font-semibold">
                      {(hours - basePackages[selectedPackage].hours) * addOns.extraHour} kr
                    </span>
                  </div>
                )}

                {selectedPackage === 'custom' && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>Session Hours ({hours})</span>
                    <span className="font-semibold">
                      {hours * addOns.extraHour} kr
                    </span>
                  </div>
                )}

                {locations > 1 && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>{t('calculator.extraLocations')} ({locations - 1})</span>
                    <span className="font-semibold">
                      {(locations - 1) * addOns.extraLocation} kr
                    </span>
                  </div>
                )}

                {distance > 0 && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>{t('calculator.travelFee')} ({distance} km)</span>
                    <span className="font-semibold">
                      {distance * addOns.travelPerKm} kr
                    </span>
                  </div>
                )}

                {prints > 0 && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>Prints ({prints})</span>
                    <span className="font-semibold">{prints * addOns.print} kr</span>
                  </div>
                )}

                {album && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>{t('calculator.album')}</span>
                    <span className="font-semibold">{addOns.album} kr</span>
                  </div>
                )}

                {editing === 'advanced' && (
                  <div className="flex justify-between pb-2 border-b border-primary-400">
                    <span>{t('calculator.advancedEditingFee')}</span>
                    <span className="font-semibold">{t('calculator.advancedEditing')}</span>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-white pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold">{t('calculator.totalEstimate')}</span>
                  <span className="text-4xl font-bold">{totalPrice} kr</span>
                </div>
              </div>

              <p className="text-sm text-primary-200 mt-4">
                {t('calculator.disclaimer')}
              </p>

              <button className="w-full bg-white text-primary-600 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mt-6">
                {t('calculator.requestQuote')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
