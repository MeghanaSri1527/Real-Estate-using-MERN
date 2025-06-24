import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';

const mockAccounts = {
  google: [
    { email: 'john.doe@gmail.com', name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { email: 'jane.smith@gmail.com', name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  ],
  facebook: [
    { email: 'john.doe@facebook.com', name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  ],
  microsoft: [
    { email: 'john.doe@outlook.com', name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { email: 'work@outlook.com', name: 'Work Account', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  ]
};

export const SelectAccountPage = () => {
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: string }>();
  
  const accounts = provider ? mockAccounts[provider as keyof typeof mockAccounts] : [];

  const handleSelectAccount = (account: typeof accounts[0]) => {
    navigate(`/confirm-account/${provider}`, { 
      state: { account } 
    });
  };

  return (
    <AuthLayout
      title={`Select ${provider?.charAt(0).toUpperCase()}${provider?.slice(1)} Account`}
      subtitle="Choose an account to continue"
    >
      <div className="mt-8 space-y-4">
        {accounts.map((account, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectAccount(account)}
            className="w-full flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200"
          >
            <img
              src={account.avatar}
              alt={account.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 text-left">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {account.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {account.email}
              </p>
            </div>
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate(`/confirm-account/${provider}`, { 
            state: { isNewAccount: true } 
          })}
          className="w-full flex items-center justify-center p-4 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Use another account
        </motion.button>
      </div>
    </AuthLayout>
  );
};
