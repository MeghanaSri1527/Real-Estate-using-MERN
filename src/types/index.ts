export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  type: 'rent' | 'buy' | 'commercial';
  size: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  isNew?: boolean;
  addedDate?: string;
}

export interface Review {
  id: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  text: string;
  date: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  image: string;
  priceRange: {
    min: number;
    max: number;
  };
  description: string;
}

export interface PriceEstimate {
  minPrice: number;
  maxPrice: number;
  confidence: number;
}
