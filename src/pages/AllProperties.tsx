import React, { useState, useEffect } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { FeaturedProperties, initialFeaturedProperties } from '../components/FeaturedProperties';
import { Property } from '../types';

// Placeholder image URL
const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/400x300?text=No+Image';


// Exporting properties data to avoid import issues
export const ALL_PROPERTIES = [
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
    propertyType: 'villa',
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
    propertyType: 'loft',
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
    propertyType: 'apartment',
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
    propertyType: 'retail',
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
    propertyType: 'house',
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
    propertyType: 'cabin',
    size: 1800,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Fireplace', 'Mountain View', 'Deck']
  },
  {
    id: '7',
    name: 'Charming Townhouse',
    location: 'Pune',
    price: 3800000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1615874959474-d6099fc22fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1568605114967-8dd365f31a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'townhouse',
    size: 2200,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Balcony', 'Parking', 'Kids Area']
  },
  {
    id: '8',
    name: 'Spacious Bungalow',
    location: 'Jaipur',
    price: 9200000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1570163598344-ec798f3107bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWVzfGVufDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1600047559805-a92b69949c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'bungalow',
    size: 4500,
    bedrooms: 6,
    bathrooms: 5,
    amenities: ['Swimming Pool', 'Balcony', 'Private Garage']
  },
  {
    id: '9',
    name: 'Penthouse with City View',
    location: 'Ahmedabad',
    price: 15000000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1616588582958-0345d30fa49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'rent',
    propertyType: 'penthouse',
    size: 2800,
    bedrooms: 3,
    bathrooms: 4,
    amenities: ['Roof Terrace', '24/7 Security', 'Concierge']
  },
  {
    id: '10',
    name: 'Farmhouse with Acreage',
    location: 'Chandigarh',
    price: 6800000,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a1c937e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnlzaWRlfGVufDB8fHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1571785394844-c6107b9370e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnlfaG91c2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'farmhouse',
    size: 7000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Large Garden', 'Guest House', 'Rural Setting']
  },
  {
    id: '11',
    name: 'Office Space in Business Hub',
    location: 'Gurgaon',
    price: 25000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e5341eb2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1592414959597-4b76d24f49fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'office',
    size: 10000,
    bedrooms: 0,
    bathrooms: 5,
    amenities: ['Reception', 'Conference Rooms', 'Cafeteria']
  },
  {
    id: '12',
    name: 'Industrial Warehouse',
    location: 'Ludhiana',
    price: 18000000,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1541480694-5e9974544169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551522870-9398149a7449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'warehouse',
    size: 25000,
    bedrooms: 0,
    bathrooms: 2,
    amenities: ['Loading Docks', 'High Ceiling', 'Security System']
  },
  {
    id: '13',
    name: 'Luxury Apartment',
    location: 'Mumbai',
    price: 6000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad6d1822b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1523217582562-09d3630b5afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'apartment',
    size: 1500,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Pool', 'Gym', 'Parking']
  },
  {
    id: '14',
    name: 'Beach House',
    location: 'Goa',
    price: 12000000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1568495286023-8b94f33ef448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1599420951867-548b54214980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'house',
    size: 3500,
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['Beachfront', 'Balcony', 'Garden']
  },
  {
    id: '15',
    name: 'City Center Condo',
    location: 'Delhi',
    price: 9500000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1519677384807-524255514b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbmRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1563983448-465729c7941b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmRvfGVufDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'rent',
    propertyType: 'condo',
    size: 1800,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['City View', 'Gym', 'Parking']
  },
  {
    id: '16',
    name: 'Luxury Villa with Pool',
    location: 'Bangalore',
    price: 18000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1618224440834-4f7a921a6d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1616588582958-0345d30fa49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGx1eHVyeSUyMHZpbGxhfGVufDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'villa',
    size: 6000,
    bedrooms: 6,
    bathrooms: 7,
    amenities: ['Pool', 'Private Garden', 'Garage']
  },
  {
    id: '17',
    name: 'Commercial Office Space',
    location: 'Chennai',
    price: 30000000,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1519389958574-2ecf8b64bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbW1lcmNpYWwlMjBvZmZpY2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1591824438886-9c3898c2023b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbW1lcmNpYWwlMjBvZmZpY2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'office',
    size: 12000,
    bedrooms: 0,
    bathrooms: 6,
    amenities: ['Reception', 'Conference Rooms', 'Parking']
  },
  {
    id: '18',
    name: 'Industrial Building',
    location: 'Hyderabad',
    price: 22000000,
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1567006589913-a9ffb14299d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8f industrialJTIwYnVpbGRpbmdfZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551522870-9398149a7449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'industrial',
    size: 30000,
    bedrooms: 0,
    bathrooms: 3,
    amenities: ['Loading Docks', 'Heavy Power', 'Security']
  },
  {
    id: '19',
    name: 'Luxury Penthouse Apartment',
    location: 'Kolkata',
    price: 16500000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1615874959474-d6099fc22fc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1568605114967-8dd365f31a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'rent',
    propertyType: 'penthouse',
    size: 3200,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ['Private Terrace', 'City Views', 'Concierge']
  },
  {
    id: '20',
    name: 'Countryside Farmhouse',
    location: 'Pune',
    price: 8200000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1570163598344-ec798f3107bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWVzfGVufDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1600047559805-a92b69949c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'farmhouse',
    size: 8000,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ['Large Land', 'Stables', 'Pond']
  },
  {
    id: '21',
    name: 'Modern Duplex Apartment',
    location: 'Jaipur',
    price: 7800000,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1616588582958-0345d30fa49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'rent',
    propertyType: 'duplex',
    size: 2500,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['Modern Kitchen', 'Balcony', 'Parking']
  },
  {
    id: '22',
    name: 'Spacious Townhouse',
    location: 'Ahmedabad',
    price: 5500000,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a1c937e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnlzaWRlfGVufDB8fHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1571785394844-c6107b9370e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdW50cnlfaG91c2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'buy',
    propertyType: 'townhouse',
    size: 2800,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Garden', 'Play Area', 'Garage']
  },
  {
    id: '23',
    name: 'Warehouse with Office',
    location: 'Chandigarh',
    price: 20000000,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1542744173-8e7e5341eb2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1592414959597-4b76d24f49fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'warehouse',
    size: 35000,
    bedrooms: 0,
    bathrooms: 4,
    amenities: ['Office Space', 'Loading Bay', 'Security']
  },
  {
    id: '24',
    name: 'Retail Shop Space',
    location: 'Gurgaon',
    price: 15000000,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1541480694-5e9974544169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1551522870-9398149a7449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    ],
    type: 'commercial',
    propertyType: 'retail',
    size: 800,
    bedrooms: 0,
    bathrooms: 1,
    amenities: ['Street Front', 'Display Window', 'Storage']
  }
];


interface AllPropertiesProps {
  type?: 'buy' | 'rent' | 'commercial';
  searchTerm?: string;
}

export const AllProperties = ({ type, searchTerm }: AllPropertiesProps) => {
  const [properties, setProperties] = useState<Property[]>(ALL_PROPERTIES);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: { min: 0, max: Infinity },
    location: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    amenities: '',
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filteredProperties = ALL_PROPERTIES.filter(property => property.type === type);

      if (searchTerm) {
        const featuredPropertyIds = initialFeaturedProperties.map(featuredProperty => featuredProperty.id);
        filteredProperties = filteredProperties.filter(property =>
          !featuredPropertyIds.includes(property.id) &&
          (property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Apply advanced filters
      filteredProperties = filteredProperties.filter(property => {
        const price = property.price;
        const size = property.size;
        const bedrooms = property.bedrooms;
        const bathrooms = property.bathrooms;


        const priceFilter = price >= filters.priceRange.min && price <= filters.priceRange.max;
        const locationFilter = filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
        const propertyTypeFilter = filters.propertyType ? property.propertyType === filters.propertyType : true;
        const bedroomsFilter = filters.bedrooms ? String(property.bedrooms) === filters.bedrooms : true;
        const bathroomsFilter = filters.bathrooms ? String(property.bathrooms) === filters.bathrooms : true;
        const sizeFilter = filters.size ? property.size >= parseInt(filters.size, 10) : true;
        const amenitiesFilter = filters.amenities ? property.amenities.some(amenity => amenity.toLowerCase().includes(filters.amenities.toLowerCase())) : true;


        return priceFilter && locationFilter && propertyTypeFilter && bedroomsFilter && bathroomsFilter && sizeFilter && amenitiesFilter;
      });


      setProperties(filteredProperties.map(property => ({
        ...property,
        images: property.images.map(img => img === 'broken-image-url' ? undefined : img) // Map broken URLs to undefined for placeholder to take over
      })));
      setLoading(false);
    }, 300);
  }, [type, searchTerm, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'priceRange') {
      const [min, max] = value.split('-').map(Number);
      setFilters(prevFilters => ({
        ...prevFilters,
        priceRange: { min, max: isNaN(max) ? Infinity : max },
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE_URL;
  };


  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          {type ? `Properties for ${type}` : 'All Properties'}
        </h2>

        {/* Filters Section */}
        <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Filter Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Property Type Filter */}
            <div>
              <label htmlFor="propertyType" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Property Type:
              </label>
              <select
                id="propertyType"
                name="propertyType"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="bungalow">Bungalow</option>
                <option value="condo">Condo</option>
                <option value="penthouse">Penthouse</option>
                <option value="duplex">Duplex</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="cabin">Cabin</option>
                <option value="loft">Loft</option>
                <option value="retail">Retail</option>
                <option value="office">Office</option>
                <option value="warehouse">Warehouse</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label htmlFor="priceRange" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Price Range (INR):
              </label>
              <select
                id="priceRange"
                name="priceRange"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="0-Infinity">Any</option>
                <option value="0-5000000">Up to 50 Lakhs</option>
                <option value="5000000-10000000">50 Lakhs - 1 Crore</option>
                <option value="10000000-20000000">1 Crore - 2 Crore</option>
                <option value="20000000-Infinity">2 Crore +</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label htmlFor="location" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter city or neighborhood"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

             {/* Bedrooms Filter */}
             <div>
              <label htmlFor="bedrooms" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Bedrooms:
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Any</option>
                <option value="0">Studio+</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms Filter */}
            <div>
              <label htmlFor="bathrooms" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Bathrooms:
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Size Filter */}
            <div>
              <label htmlFor="size" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Min Size (sq ft):
              </label>
              <input
                type="number"
                id="size"
                name="size"
                placeholder="Minimum size"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

             {/* Amenities Filter */}
             <div>
              <label htmlFor="amenities" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Amenities:
              </label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                placeholder="e.g., Pool, Gym, Parking"
                onChange={handleFilterChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>


        {loading ? (
          <div className="text-center">Loading properties...</div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <PropertyCard
                key={property.id}
                property={{
                  ...property,
                  images: property.images.map(img => img === 'broken-image-url' ? undefined : img) // Map broken URLs to undefined for placeholder to take over
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No properties found matching your criteria.</div>
        )}
      </div>
    </div>
  );
};
