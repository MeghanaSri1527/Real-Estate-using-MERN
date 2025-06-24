import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Property } from '../types';
import { IndianRupee, Check } from 'lucide-react';

// Placeholder image URL
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/400x300?text=No+Image';

interface PropertyCardProps {
  property: Property;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, isSelected = false, onSelect }) => {
  const { id, name, location, price, images, type } = property;
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/property/${id}`}>
        <div className="relative">
          {images && images.length > 0 && !imageError ? (
            <img
              className="w-full h-56 object-cover"
              src={images[0]}
              alt={name}
              onError={handleImageError}
              // Fallback to placeholder if image fails to load again after error
              onError={() => setImageError(true)}
            />
          ) : (
            <img
              className="w-full h-56 object-cover"
              src={PLACEHOLDER_IMAGE_URL}
              alt="Placeholder"
            />
          )}
          <div className="absolute top-0 left-0 bg-blue-600 text-white m-2 px-3 py-1 rounded-full text-sm font-semibold">
            {type.toUpperCase()}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {name}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
            <IndianRupee className="mr-1 w-4 h-4" />
            {price.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
              maximumFractionDigits: 0,
            })}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {location}
          </p>
        </div>
      </Link>
      <div className="absolute top-2 right-2">
        <input
          type="checkbox"
          id={`compare-${id}`}
          className="opacity-0 absolute cursor-pointer h-full w-full"
          checked={isSelected}
          onChange={onSelect ? () => onSelect() : undefined}
        />
        <label htmlFor={`compare-${id}`} className="bg-gray-200 dark:bg-gray-700 rounded-full p-2 cursor-pointer">
          {isSelected ? <Check className="w-5 h-5 text-blue-600" /> : <span className="w-5 h-5 block"></span>}
        </label>
      </div>
    </motion.div>
  );
};
