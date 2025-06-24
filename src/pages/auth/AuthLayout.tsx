import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Go Back Button */}
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mb-4">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="px-10 py-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-4">
              {title}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-400 text-center mb-6">
              {subtitle}
            </p>
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
