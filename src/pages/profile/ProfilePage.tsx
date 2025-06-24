import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

interface ProfilePageProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Back Button */}
      <div className="p-4">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
            <img
              src={user?.avatar || "https://via.placeholder.com/150"} // Placeholder image
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold mb-4 text-center">
            {user?.name || "Guest"}
          </h1>
          <p className="text-gray-600 text-center">
            {user?.email || "No email provided"}
          </p>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Account Details</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>
                <strong>Name:</strong> {user?.name || "N/A"}
              </li>
              <li>
                <strong>Email:</strong> {user?.email || "N/A"}
              </li>
              <li>
                <strong>Member Since:</strong> January 2023
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 flex flex-col items-stretch space-y-2">
            <Link
              to="/listings"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
            >
              My Listings
            </Link>
            <Link
              to="/saved-properties"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 text-center"
            >
              Saved Properties
            </Link>
            <Link
              to="/notifications"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-200 text-center"
            >
              Notifications
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
              onClick={() => {
                // Implement logout functionality here
                alert("Logout clicked");
              }}
            >
              Logout
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
