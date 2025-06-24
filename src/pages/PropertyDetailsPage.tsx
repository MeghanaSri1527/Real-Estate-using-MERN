import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import {
  MapPin,
  Share2,
  Heart,
  Square,
  Calendar,
  Car,
  PlayCircle,
  Train,
  Building,
} from 'lucide-react';

// Placeholder image URL
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/600x400?text=No+Image';


export const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [areaType, setAreaType] = useState<'builtUp' | 'carpet'>('builtUp'); // 'builtUp' or 'carpet'
  const [imageError, setImageError] = useState(false);


  // Mock property data (replace with actual data fetching)
  const property = {
    id,
    name: "Luxury Apartment in Bandra West",
    location: "Bandra West, Mumbai",
    price: 25000000, // ₹2.5 Crore
    builtUpArea: 1500,
    carpetArea: 1200,
    yearBuilt: 2020,
    type: "Apartment",
    description: "Premium 3 BHK apartment with modern amenities, offering stunning sea views and contemporary living spaces. Located in the heart of Bandra West, close to all major attractions.",
    images: [
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      // Add a broken image URL for testing error handling
      "broken-image-url"
    ],
    amenities: {
      parking: true,
      pool: true,
      playground: true,
      metroDistance: "0.5 km",
      floors: 20
    },
    rating: 4.8,
    reviews: [
      {
        user: "Rahul Sharma",
        rating: 5,
        comment: "Excellent property with great amenities"
      },
      {
        user: "Priya Patel",
        rating: 4,
        comment: "Good location but slightly overpriced"
      }
    ]
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const calculatePricePerSqft = () => {
    const area = areaType === 'builtUp' ? property.builtUpArea : property.carpetArea;
    if (area && property.price) {
      return formatPrice(property.price / area);
    }
    return 'N/A';
  };

  const handleImageError = () => {
    setImageError(true);
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Property Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {property.name}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsShortlisted(!isShortlisted)}
                className={`p-2 rounded-full ${
                  isShortlisted
                    ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                } hover:bg-gray-200 dark:hover:bg-gray-600`}
              >
                <Heart className={`w-5 h-5 ${isShortlisted ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Square className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {areaType === 'builtUp' ? property.builtUpArea : property.carpetArea} sq.ft ({areaType === 'builtUp' ? 'Built-up Area' : 'Carpet Area'})
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  Built in {property.yearBuilt}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Building className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {property.type}
                </span>
              </div>
              {/* Area Type Toggle */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-bold">Area Type:</span>
                <select
                  value={areaType}
                  onChange={(e) => setAreaType(e.target.value as 'builtUp' | 'carpet')}
                  className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline text-sm"
                >
                  <option value="builtUp">Built-up Area</option>
                  <option value="carpet">Carpet Area</option>
                </select>
              </div>
              {/* Price per sqft */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 text-sm font-bold">Price per sqft:</span>
                <span className="text-gray-600 dark:text-gray-400">{calculatePricePerSqft()}/sqft</span>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {formatPrice(property.price)}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Contact Seller
              </motion.button>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            {property.description}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Property Photos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property ${index + 1}`}
                className="rounded-lg object-cover h-48 w-full"
                onError={handleImageError}
                // Fallback to placeholder if image fails to load again after error
                onError={() => setImageError(true)}
                // Fallback to placeholder if image fails to load again after error
                onError={() => {
                  if (!imageError) {
                    setImageError(true);
                  }
                }}
              />
            ))}
             {imageError && property.images.map((_, index) => (
              <img
                key={index}
                src={PLACEHOLDER_IMAGE_URL}
                alt={`Placeholder ${index + 1}`}
                className="rounded-lg object-cover h-48 w-full"
              />
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {property.amenities.parking && (
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">Parking Available</span>
              </div>
            )}
            {property.amenities.pool && (
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-400">Swimming Pool</span>
              </div>
            )}
            {property.amenities.playground && (
              <div className="flex items-center space-x-2">
                <PlayCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">Playground</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Train className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600 dark:text-gray-400">
                Metro: {property.amenities.metroDistance}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Seller
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your message to the seller"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};
