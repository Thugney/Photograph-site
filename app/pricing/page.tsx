'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCalculator } from 'react-icons/fa';

type PackageType = 'basic' | 'standard' | 'premium' | 'custom';

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('standard');
  const [hours, setHours] = useState(2);
  const [locations, setLocations] = useState(1);
  const [prints, setPrints] = useState(0);
  const [album, setAlbum] = useState(false);
  const [editing, setEditing] = useState('basic');
  const [totalPrice, setTotalPrice] = useState(0);

  const basePackages = {
    basic: { price: 299, hours: 1, photos: 20 },
    standard: { price: 599, hours: 2, photos: 50 },
    premium: { price: 999, hours: 4, photos: 100 },
    custom: { price: 0, hours: 0, photos: 0 },
  };

  const addOns = {
    extraHour: 150,
    extraLocation: 100,
    print: 15,
    album: 250,
    advancedEditing: 100,
    rushDelivery: 200,
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

    // Add prints
    price += prints * addOns.print;

    // Add album
    if (album) price += addOns.album;

    // Add advanced editing
    if (editing === 'advanced') price += addOns.advancedEditing;

    setTotalPrice(price);
  }, [selectedPackage, hours, locations, prints, album, editing]);

  const packages = [
    {
      name: 'Basic',
      type: 'basic' as PackageType,
      price: 299,
      features: [
        '1 hour session',
        '1 location',
        '20 edited photos',
        'Basic retouching',
        'Online gallery',
        'Digital download',
      ],
    },
    {
      name: 'Standard',
      type: 'standard' as PackageType,
      price: 599,
      features: [
        '2 hour session',
        '1-2 locations',
        '50 edited photos',
        'Advanced retouching',
        'Online gallery',
        'Digital download',
        'Print release',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      type: 'premium' as PackageType,
      price: 999,
      features: [
        '4 hour session',
        'Multiple locations',
        '100+ edited photos',
        'Advanced retouching',
        'Online gallery',
        'Digital download',
        'Print release',
        'Premium album',
      ],
    },
  ];

  return (
    <div className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4">
            Pricing & Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a package that fits your needs or customize your own
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.type}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                selectedPackage === pkg.type ? 'ring-4 ring-purple-600 scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedPackage(pkg.type)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {pkg.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-purple-600">${pkg.price}</span>
                <span className="text-gray-600 ml-2">starting</span>
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
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedPackage === pkg.type ? 'Selected' : 'Select Package'}
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
            <FaCalculator className="text-4xl text-purple-600 mr-3" />
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              Price Calculator
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Options */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Session Duration (hours)
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
                  <span className="text-2xl font-bold text-purple-600 w-12">{hours}h</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Locations
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
                  <span className="text-2xl font-bold text-purple-600 w-12">{locations}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Physical Prints (${addOns.print} each)
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
                  <span className="text-2xl font-bold text-purple-600 w-12">{prints}</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Editing Level
                </label>
                <select
                  value={editing}
                  onChange={(e) => setEditing(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="basic">Basic Editing (Included)</option>
                  <option value="advanced">Advanced Editing (+${addOns.advancedEditing})</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="album"
                  checked={album}
                  onChange={(e) => setAlbum(e.target.checked)}
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <label htmlFor="album" className="ml-3 text-gray-700 font-semibold">
                  Add Premium Album (+${addOns.album})
                </label>
              </div>
            </div>

            {/* Right Column - Price Summary */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Price Estimate
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between pb-2 border-b border-purple-400">
                  <span>Base Package</span>
                  <span className="font-semibold">
                    ${basePackages[selectedPackage].price}
                  </span>
                </div>

                {selectedPackage !== 'custom' && hours > basePackages[selectedPackage].hours && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Extra Hours ({hours - basePackages[selectedPackage].hours})</span>
                    <span className="font-semibold">
                      ${(hours - basePackages[selectedPackage].hours) * addOns.extraHour}
                    </span>
                  </div>
                )}

                {selectedPackage === 'custom' && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Session Hours ({hours})</span>
                    <span className="font-semibold">
                      ${hours * addOns.extraHour}
                    </span>
                  </div>
                )}

                {locations > 1 && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Extra Locations ({locations - 1})</span>
                    <span className="font-semibold">
                      ${(locations - 1) * addOns.extraLocation}
                    </span>
                  </div>
                )}

                {prints > 0 && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Prints ({prints})</span>
                    <span className="font-semibold">${prints * addOns.print}</span>
                  </div>
                )}

                {album && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Premium Album</span>
                    <span className="font-semibold">${addOns.album}</span>
                  </div>
                )}

                {editing === 'advanced' && (
                  <div className="flex justify-between pb-2 border-b border-purple-400">
                    <span>Advanced Editing</span>
                    <span className="font-semibold">${addOns.advancedEditing}</span>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-white pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold">Total Estimate</span>
                  <span className="text-4xl font-bold">${totalPrice}</span>
                </div>
              </div>

              <p className="text-sm text-purple-200 mt-4">
                * This is an estimate. Final pricing may vary based on specific requirements.
              </p>

              <button className="w-full bg-white text-purple-600 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mt-6">
                Request Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
