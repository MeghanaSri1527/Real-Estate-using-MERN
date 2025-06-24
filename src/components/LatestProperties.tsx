import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Property } from '../types';

// Placeholder image URL
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/400x300?text=No+Image';


const LATEST_PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'Modern Apartment in Bandra West',
    location: 'Mumbai, Maharashtra',
    price: 25000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'broken-image-url' //Test broken image
    ],
    type: 'buy',
    size: 1500,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Pool', 'Gym', 'Security'],
    isNew: true,
    addedDate: '2024-03-15'
  },
  {
    id: '2',
    name: 'Luxury Villa in Jubilee Hills',
    location: 'Hyderabad, Telangana',
    price: 45000000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'buy',
    size: 4000,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Garden', 'Pool', 'Security'],
    isNew: true,
    addedDate: '2024-03-14'
  },
  {
    id: '3',
    name: 'Premium Flat in Indiranagar',
    location: 'Bangalore, Karnataka',
    price: 85000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'rent',
    size: 1200,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Parking', 'Gym', 'Power Backup'],
    isNew: true,
    addedDate: '2024-03-13'
  }
];

export const LatestProperties = () => {
  const formatPrice = (price: number, type: string) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE_URL;
  };


  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Clock className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold dark:text-white">Latest Properties</h2>
          </div>
          <Link to="/properties" className="text-blue-600 hover:text-blue-700 font-medium">
            View All New Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LATEST_PROPERTIES.map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Link to={`/property/${property.id}`}>
                <div className="relative h-48">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-2 py-1 rounded-full">
                    New
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">{property.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{property.location}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-lg text-blue-600">
                      {formatPrice(property.price, property.type)}
                      {property.type === 'rent' && <span className="text-sm font-normal">/month</span>}
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {property.bedrooms} beds • {property.bathrooms} baths
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
