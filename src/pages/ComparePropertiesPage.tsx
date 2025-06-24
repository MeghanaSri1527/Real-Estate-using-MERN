import React from 'react';
import { ALL_PROPERTIES } from './AllProperties';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';

const formatPrice = (price: number) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lac`;
  }
  return `₹${price.toLocaleString()}`;
};

const propertyFeatures = [
  { key: 'price', name: 'Price', format: formatPrice },
  { key: 'location', name: 'Location' },
  { key: 'bedrooms', name: 'Bedrooms' },
  { key: 'bathrooms', name: 'Bathrooms' },
  { key: 'size', name: 'Size (sq ft)' },
  { key: 'amenities', name: 'Amenities', format: (amenities) => amenities.join(', ') },
  { key: 'type', name: 'Type', format: (type) => type.toUpperCase() },
];

const ComparePropertiesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyIds = searchParams.getAll('propertyIds');
  const propertiesToCompare = ALL_PROPERTIES.filter(property => propertyIds.includes(property.id));

  if (propertiesToCompare.length < 2) {
    return (
      <div className="container mx-auto mt-20 p-4 text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Compare Properties</h2>
        <p className="text-gray-600 dark:text-gray-400">Please select at least two properties to compare.</p>
        <Link to="/buy" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Back to Buy Properties
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">Property Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">Feature</th>
              {propertiesToCompare.map(property => (
                <th key={property.id} className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">
                  {property.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {propertyFeatures.map(feature => (
              <tr key={feature.key} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-semibold">{feature.name}</td>
                {propertiesToCompare.map(property => (
                  <td key={property.id} className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">
                    {feature.format ? feature.format(property[feature.key]) : property[feature.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <Link to="/buy" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Back to Buy Properties
        </Link>
      </div>
    </div>
  );
};

export default ComparePropertiesPage;
