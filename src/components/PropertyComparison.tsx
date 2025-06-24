import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Property } from '../types';
import { useNavigate } from 'react-router-dom';

interface PropertyComparisonProps {
  properties: Property[];
}

export const PropertyComparison = ({ properties }: PropertyComparisonProps) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleProperty = (propertyId: string) => {
    setSelectedProperties(prev => {
      if (prev.includes(propertyId)) {
        return prev.filter(id => id !== propertyId);
      }
      if (prev.length < 4) {
        return [...prev, propertyId];
      }
      return prev;
    });
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const handleCompare = () => {
    if (selectedProperties.length >= 2) {
      const queryParams = selectedProperties.map(id => `propertyIds=${id}`).join('&');
      navigate(`/compare?${queryParams}`);
    }
  };


  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 dark:text-white">Compare Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.slice(0, 8).map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ y: -5 }}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer
                ${selectedProperties.includes(property.id) ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => toggleProperty(property.id)}
            >
              <div className="relative h-48">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                {selectedProperties.includes(property.id) && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 dark:text-white">{property.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{property.location}</p>
                <p className="font-bold text-lg text-blue-600">
                  {formatPrice(property.price)}
                  {property.type === 'rent' && <span className="text-sm font-normal">/month</span>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <button
              className={`px-8 py-3 rounded-lg transition duration-200 ${
                selectedProperties.length > 1
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={selectedProperties.length <= 1}
              onClick={handleCompare}
            >
              Compare {selectedProperties.length} Properties
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
