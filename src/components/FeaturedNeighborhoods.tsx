import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Neighborhood } from '../types';

const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: '1',
    name: 'Downtown Manhattan',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    priceRange: {
      min: 500000,
      max: 2000000
    },
    description: 'Vibrant urban living in the heart of NYC'
  },
  {
    id: '2',
    name: 'Beverly Hills',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    priceRange: {
      min: 2000000,
      max: 5000000
    },
    description: "Luxury living in Los Angeles's most prestigious area"
  },
  {
    id: '3',
    name: 'South Beach',
    image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    priceRange: {
      min: 300000,
      max: 1500000
    },
    description: 'Beachfront paradise in Miami'
  },
  {
    id: '4',
    name: 'Pacific Heights',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    priceRange: {
      min: 1500000,
      max: 4000000
    },
    description: "San Francisco's most elegant neighborhood"
  }
];

export const FeaturedNeighborhoods = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <MapPin className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold dark:text-white">Featured Neighborhoods</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEIGHBORHOODS.map((neighborhood) => (
            <motion.div
              key={neighborhood.id}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{neighborhood.name}</h3>
                  <p className="text-sm mb-2">{neighborhood.description}</p>
                  <p className="text-sm font-medium">
                    ${neighborhood.priceRange.min.toLocaleString()} - ${neighborhood.priceRange.max.toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
