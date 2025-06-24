import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About DreamHome
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Welcome to DreamHome, your ultimate destination for finding the perfect property. Whether you're looking to buy, rent, or invest, we provide a comprehensive platform to explore a wide range of real estate options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Extensive Property Listings
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through thousands of listings across various locations and property types. Find detailed information, high-quality images, and virtual tours to help you make informed decisions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Advanced Search Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Utilize our advanced search filters to narrow down your options based on location, price range, property type, amenities, and more. Find exactly what you’re looking for with ease.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Price Prediction Tool
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make informed investment decisions with our price prediction tool. Get estimated price ranges for properties based on current market trends and property features.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Property Comparison
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compare multiple properties side-by-side to see their features, prices, and locations at a glance. Make confident choices by evaluating your top options in detail.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Personalized User Profiles
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create your profile to save favorite properties, set up alerts for new listings, and manage your property search journey in one convenient place.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-500 mb-2">
              Expert Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our dedicated support team is here to assist you with any questions or concerns. Contact us anytime for guidance and support throughout your property search process.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Start your journey to find your dream home with DreamHome today!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
