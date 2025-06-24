import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { ArrowLeft, Check } from 'lucide-react';

export const ConfirmAccountPage = () => {
  const navigate = useNavigate();
  const { provider } = useParams<{ provider: string }>();
  const location = useLocation();
  const { account, isNewAccount } = location.state || {};

  const handleConfirm = () => {
    navigate('/setup-2fa');
  };

  return (
    <AuthLayout
      title="Confirm Account"
      subtitle={`Confirm your ${provider?.charAt(0).toUpperCase()}${provider?.slice(1)} account details`}
    >
      <div className="mt-8 space-y-6">
        {!isNewAccount && account ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <img
                src={account.avatar}
                alt={account.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {account.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {account.email}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>You'll be redirected to sign in with a new account</p>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
            className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Check className="w-5 h-5" />
            <span>Confirm and Continue</span>
          </motion.button>

          <button
            onClick={() => navigate(`/select-account/${provider}`)}
            className="flex items-center justify-center space-x-2 text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Choose different account</span>
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};
