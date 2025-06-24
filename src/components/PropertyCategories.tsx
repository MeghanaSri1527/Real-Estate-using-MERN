import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'buy',
    title: 'Buy',
    icon: Home,
    description: 'Find your dream home',
    path: '/buy'
  },
  {
    id: 'rent',
    title: 'Rent',
    icon: Building2,
    description: 'Quality rental properties',
    path: '/rent'
  }
];

export const PropertyCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
                onClick={() => navigate(category.path)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
