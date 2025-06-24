import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Moon, Sun, ArrowUp } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyCategories } from './components/PropertyCategories';
import { PricePredictionTool } from './components/PricePredictionTool';
import { PropertyComparison } from './components/PropertyComparison';
import { LatestProperties } from './components/LatestProperties';
import { Testimonials } from './components/Testimonials';
import { AllProperties } from './pages/AllProperties';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { EmailVerificationPage } from './pages/auth/EmailVerificationPage';
import { TwoFactorSetupPage } from './pages/auth/TwoFactorSetupPage';
import { SelectAccountPage } from './pages/auth/SelectAccountPage';
import { ConfirmAccountPage } from './pages/auth/ConfirmAccountPage';
import ProfilePage from "./pages/profile/ProfilePage";
import { ListingsPage } from './pages/profile/ListingsPage';
import ComparePropertiesPage from './pages/ComparePropertiesPage';
import { PropertyCard } from './components/PropertyCard';
import AboutUsPage from './pages/AboutUsPage';
import CreateListingPage from './pages/profile/CreateListingPage';
import SavedPropertiesPage from './pages/profile/SavedPropertiesPage';
import NotificationsPage from './pages/profile/NotificationsPage';

// Import the ALL_PROPERTIES array from AllProperties page
import { ALL_PROPERTIES } from './pages/AllProperties';

const NavbarWrapper = ({ onHomeClick, isAuthenticated, user, onLogout }: { onHomeClick: () => void, isAuthenticated: boolean, user: any, onLogout: () => void }) => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/forgot-password', '/verify-email', '/setup-2fa', '/select-account', '/confirm-account', '/profile', '/listings', '/create-listing', '/saved-properties', '/notifications'];

  if (hideNavbarPaths.includes(location.pathname) ||
      location.pathname.startsWith('/select-account/') ||
      location.pathname.startsWith('/confirm-account/')) {
    return null;
  }

  return <Navbar onHomeClick={onHomeClick} isAuthenticated={isAuthenticated} user={user} onLogout={onLogout} />;
};

const FooterWrapper = () => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register', '/forgot-password', '/verify-email', '/setup-2fa', '/select-account', '/confirm-account', '/profile', '/listings', '/create-listing', '/saved-properties', '/notifications'];

  if (hideFooterPaths.includes(location.pathname) ||
      location.pathname.startsWith('/select-account/') ||
      location.pathname.startsWith('/confirm-account/')) {
    return null;
  }

  return <Footer />;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);
  const [searchResults, setSearchResults] = useState<typeof ALL_PROPERTIES>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (results: typeof ALL_PROPERTIES) => {
    setSearchResults(results);
    setShowSearchResults(true);
  };

  const handleHomeClick = () => {
    setShowSearchResults(false);
    setSearchResults([]);
  };

  const handleLogin = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
    navigate('/profile');
  };

  const handleRegister = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
    navigate('/profile');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    
      
        <div className={darkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 flex flex-col">
            <NavbarWrapper onHomeClick={handleHomeClick} isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="fixed top-20 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700" />
              )}
            </button>

            {/* Main Content */}
            <Routes>
              <Route path="/" element={
                <main className="pt-16 flex-grow">
                  <Hero onSearch={handleSearch} />
                  {showSearchResults ? (
                    <div className="container mx-auto px-4 py-8">
                      <h2 className="text-2xl font-bold mb-6 dark:text-white">Search Results</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {searchResults.map(property => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <PricePredictionTool />
                      <FeaturedProperties />
                      <PropertyComparison properties={ALL_PROPERTIES} />
                      <LatestProperties properties={ALL_PROPERTIES} />
                      <PropertyCategories />
                      <Testimonials />
                    </>
                  )}
                </main>
              } />
              <Route path="/buy" element={<AllProperties type="buy" />} />
              <Route path="/rent" element={<AllProperties type="rent" />} />
              <Route path="/property/:id" element={<PropertyDetailsPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/verify-email" element={<EmailVerificationPage />} />
              <Route path="/setup-2fa" element={<TwoFactorSetupPage />} />
              <Route path="/select-account/:provider" element={<SelectAccountPage />} />
              <Route path="/confirm-account/:provider" element={<ConfirmAccountPage />} />
              
              {/* User Dashboard Routes */}
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route path="/listings" element={<ListingsPage user={user} />} />
              <Route path="/create-listing" element={<CreateListingPage user={user} />} />
              <Route path="/saved-properties" element={<SavedPropertiesPage user={user} />} />
              <Route path="/notifications" element={<NotificationsPage user={user} />} />

              <Route path="/compare" element={<ComparePropertiesPage />} />
              <Route path="/about" element={<AboutUsPage />} />
            </Routes>

            <FooterWrapper />

            {/* Scroll-to-top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  onClick={scrollToTop}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed bottom-4 right-20 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Chatbot Widget */}
            <div className="fixed bottom-4 right-4 z-50">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatOpen(!chatOpen)}
                className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.button>

              <AnimatePresence>
                {chatOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl"
                  >
                    <div className="p-4 border-b">
                      <h3 className="font-semibold">Chat with us</h3>
                    </div>
                    <div className="h-96 p-4">
                      <p className="text-gray-500 text-center mt-4">
                        How can we help you today?
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      
    
  );
}

export default App;
