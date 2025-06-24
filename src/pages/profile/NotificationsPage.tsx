import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotificationsPage = () => {
  const navigate = useNavigate();
  // Dummy data for notifications
  const notifications = [
    {
      id: 1,
      message: 'Your property at 123 Main St has a new inquiry.',
      time: '1 hour ago',
    },
    {
      id: 2,
      message: 'Price reduced for a property you saved at 456 Oak Ave.',
      time: '2 hours ago',
    },
    {
      id: 3,
      message: 'New property listed in your preferred neighborhood.',
      time: '1 day ago',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>

      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className="bg-white rounded-lg shadow-md p-4 mb-2">
            <p className="text-gray-700">{notification.message}</p>
            <p className="text-gray-500 text-sm">{notification.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
