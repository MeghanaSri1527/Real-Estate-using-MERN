import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PropertyCard } from './PropertyCard';
import { Property } from '../types';

// Placeholder image URL
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/400x300?text=No+Image';


export const initialFeaturedProperties: Property[] = [
  {
    id: '1',
    name: 'Luxury Beachfront Villa',
    location: 'Mumbai',
    price: 5000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'broken-image-url' //Test broken image
    ],
    type: 'buy',
    size: 5000,
    bedrooms: 5,
    bathrooms: 6,
    amenities: ['Pool', 'Beach Access', 'Garden']
  },
  {
    id: '2',
    name: 'Modern Downtown Loft',
    location: 'Delhi',
    price: 8500000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598528644866-3215eb3e9771?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'rent',
    size: 1200,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['Gym', 'Parking', 'Doorman']
  },
  {
    id: '3',
    name: 'Cozy Studio Apartment',
    location: 'Bangalore',
    price: 2800000,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'rent',
    size: 500,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Furnished', 'City View', 'Security']
  },
  {
    id: '4',
    name: 'Retail Space in Mall',
    location: 'Chennai',
    price: 12000000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'commercial',
    size: 2000,
    bedrooms: 0,
    bathrooms: 2,
    amenities: ['High Traffic', 'Storage', 'HVAC']
  },
  {
    id: '5',
    name: 'Suburban Family Home',
    location: 'Hyderabad',
    price: 7500000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'buy',
    size: 3200,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Garden', 'Garage', 'Patio']
  },
  {
    id: '6',
    name: 'Mountain View Cabin',
    location: 'Kolkata',
    price: 4500000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    type: 'buy',
    size: 1800,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Fireplace', 'Mountain View', 'Deck']
  }
];

export const FeaturedProperties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState<Property[]>(initialFeaturedProperties);

  const handleViewAll = () => {
    // Load additional properties (replace with actual data fetching logic)
    const additionalProperties: Property[] = [
      {
        id: '7',
        name: 'Seaside Apartment',
        location: 'Goa',
        price: 6000000,
        rating: 4.7,
        images: [
          'https://images.unsplash.com/photo-1507585495597-8c25294ca079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1560185030-baef496efdca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'broken-image-url' //Test broken image
        ],
        type: 'buy',
        size: 2500,
        bedrooms: 3,
        bathrooms: 3,
        amenities: ['Sea View', 'Balcony', 'Parking']
      },
      {
        id: '8',
        name: 'Luxury Penthouse',
        location: 'Mumbai',
        price: 9500000,
        rating: 4.9,
        images: [
          'https://images.unsplash.com/photo-1541474037394-9889ba631df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        type: 'buy',
        size: 4000,
        bedrooms: 4,
        bathrooms: 4,
        amenities: ['Terrace', 'Private Elevator', 'Gym']
      }
    ];

    setProperties([...properties, ...additionalProperties]);
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Featured Properties</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={{
                ...property,
                price: property.price,
                location: property.location,
                images: property.images.map(img => img === 'broken-image-url' ? undefined : img) // Map broken URLs to undefined for placeholder to take over
              }}
            />
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <button 
            onClick={handleViewAll}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};
