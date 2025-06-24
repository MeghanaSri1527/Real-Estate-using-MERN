import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';
import type { PriceEstimate } from '../types';
import { IndianRupee } from 'lucide-react';

const propertyTypes = [
  'Apartment',
  'House',
  'Villa',
  'Condo',
  'Studio',
  'Penthouse',
];

export const PricePredictionTool = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [estimate, setEstimate] = useState<PriceEstimate | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy data for demonstration
    setEstimate({
      minPrice: 250000,
      maxPrice: 350000,
      confidence: 85,
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold dark:text-white">Price Prediction Tool</h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                >
                  <option value="">Select type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Get Price Estimate
            </button>
          </form>

          <AnimatePresence>
            {estimate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-4 dark:text-white">
                  Estimated Price Range
                </h3>
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatPrice(estimate.minPrice)} - {formatPrice(estimate.maxPrice)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {estimate.confidence}% confidence
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
