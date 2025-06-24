import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const socialButtons = [
  {
    name: 'Google',
    icon: 'https://www.svgrepo.com/show/475656/google-color.svg',
    bgColor: 'bg-white',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-300'
  },
  {
    name: 'Facebook',
    icon: 'https://www.svgrepo.com/show/475647/facebook-color.svg',
    bgColor: 'bg-white',
    textColor: 'text-[#1877F2]',
    borderColor: 'border-[#1877F2]'
  },
  {
    name: 'Microsoft',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    bgColor: 'bg-white',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-300'
  }
];

export const SocialLogin = () => {
  const navigate = useNavigate();

  const handleSocialLogin = (provider: string) => {
    navigate(`/select-account/${provider.toLowerCase()}`);
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {socialButtons.map((button) => (
          <motion.button
            key={button.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSocialLogin(button.name)}
            className={`${button.bgColor} ${button.textColor} py-2 px-4 rounded-lg border ${button.borderColor} shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center`}
          >
            <img
              src={button.icon}
              alt={`${button.name} logo`}
              className="w-5 h-5"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};
