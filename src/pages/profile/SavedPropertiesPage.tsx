import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PropertyCard } from '../../components/PropertyCard';

const SavedPropertiesPage = () => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  // Dummy data for saved properties
  const savedProperties = [
    {
      id: '1',
      name: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      price: 2500000,
      images: ['https://source.unsplash.com/400x300/?house'],
      type: 'buy',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4000,
      yearBuilt: 2018,
      amenities: ['Pool', 'Gym', 'Home Theater'],
    },
    {
      id: '2',
      name: 'Cozy Apartment',
      location: 'Downtown, NY',
      price: 1200000,
      images: ['https://source.unsplash.com/400x300/?apartment'],
      type: 'rent',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2020,
      amenities: ['Doorman', 'Roof Deck'],
    },
    {
      id: '3',
      name: 'Modern Condo',
      location: 'Miami, FL',
      price: 1800000,
      images: ['https://source.unsplash.com/400x300/?condo'],
      type: 'buy',
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2000,
      yearBuilt: 2022,
      amenities: ['Balcony', 'Ocean View'],
    },
  ];

  const togglePropertySelection = (propertyId: string) => {
    setSelectedProperties((prevSelected) =>
      prevSelected.includes(propertyId)
        ? prevSelected.filter((id) => id !== propertyId)
        : [...prevSelected, propertyId]
    );
  };

  const handleCompare = () => {
    if (selectedProperties.length >= 2) {
      // For simplicity, let's just log the selected properties for now
      console.log('Selected properties for comparison:', selectedProperties);
    } else {
      alert('Please select at least two properties to compare.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>

      <h1 className="text-2xl font-bold mb-4">Saved Properties</h1>

      {/* Property Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            isSelected={selectedProperties.includes(property.id)}
            onSelect={() => togglePropertySelection(property.id)}
          />
        ))}
      </div>

      {/* Compare Button */}
      <button
        onClick={handleCompare}
        disabled={selectedProperties.length < 2}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ${
          selectedProperties.length < 2 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Compare Properties
      </button>

      {/* Comparison Table */}
      {selectedProperties.length >= 2 && (
        <div className="mt-8 overflow-x-auto">
          <h2 className="text-xl font-bold mb-2">Property Comparison</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Feature</th>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <th key={propertyId} className="px-4 py-2 border border-gray-300 text-left">
                      {property?.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Price</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.price}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Bedrooms</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.bedrooms}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Bathrooms</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.bathrooms}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Sq. Ft.</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.sqft}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Year Built</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.yearBuilt}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Amenities</td>
                {selectedProperties.map((propertyId) => {
                  const property = savedProperties.find((p) => p.id === propertyId);
                  return (
                    <td key={propertyId} className="px-4 py-2 border border-gray-300">
                      {property?.amenities?.join(', ')}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SavedPropertiesPage;
