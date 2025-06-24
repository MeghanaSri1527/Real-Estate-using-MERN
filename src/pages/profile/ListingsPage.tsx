import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { PropertyCard } from '../../components/PropertyCard';
import type { Property } from '../../types';
import { Link } from 'react-router-dom';

interface ListingsPageProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
}

const MOCK_LISTINGS: Property[] = [
  {
    id: '1',
    name: 'Modern Downtown Apartment',
    location: 'San Francisco, CA',
    price: 750000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'buy',
    size: 1200,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Parking', 'Gym', 'Pool']
  },
  {
    id: '2',
    name: 'Luxury Penthouse',
    location: 'New York, NY',
    price: 12000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'rent',
    size: 2500,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Doorman', 'Terrace', 'Views']
  }
];

export const ListingsPage = ({ user }: ListingsPageProps) => {
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Please log in to view your listings
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Listings
          </h1>
          <Link
            to="/create-listing"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-5 h-5" />
              <span>Add New Listing</span>
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_LISTINGS.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {MOCK_LISTINGS.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              You haven't created any listings yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
