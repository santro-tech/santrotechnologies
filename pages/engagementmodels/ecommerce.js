import React from 'react';
import { FaGlobe, FaClock, FaMoneyBillAlt, FaChartLine, FaShoppingCart, FaCogs, FaLaptop, FaPaintBrush, FaStore, FaCreditCard, FaSearch, FaUserCog } from 'react-icons/fa';

const ECommerce = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
          alt="E-Commerce"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Create Your E-Commerce Website
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Build Your Online Business and Expand Globally
          </p>
        </div>
      </div>

      {/* About E-Commerce Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Why E-Commerce?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We are all familiar with the term ‘E-Commerce’. It is extensively used for online shopping, fund transfers, supply chain management, internet banking, and electronic data interchange through desktops and mobile phones. An E-commerce website is the foundation brick to build an online business and expand it across the globe. Over the past decade, technology has drastically changed, and digital tools have become more advanced. In such circumstances, a complete professional and competitive e-commerce solution has become essential for every business to stay competitive and progressive.
          </p>
          <p className="text-gray-600 text-lg">
            At Oaky Web, we are professionally skilled to serve the best e-commerce solutions tailored to your needs. Whether you need a responsive e-commerce website, a custom design, or a full-fledged e-commerce store, we have you covered.
          </p>
        </div>
      </div>

      {/* E-Commerce Benefits Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Benefits of E-Commerce
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaGlobe className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Expand your business to a global audience with an e-commerce platform.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaClock className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Your online store is open 24/7, allowing customers to shop anytime.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaMoneyBillAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                Reduce operational costs with an efficient e-commerce solution.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaChartLine className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">Better Customer Insights</h3>
              <p className="text-gray-600">
                Gain valuable insights into customer behavior and preferences.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaShoppingCart className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-2">Increased Sales</h3>
              <p className="text-gray-600">
                Boost your sales with a user-friendly and engaging e-commerce platform.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCogs className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Scalability</h3>
              <p className="text-gray-600">
                Easily scale your business as it grows with a flexible e-commerce solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* E-Commerce Services Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Our E-Commerce Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaLaptop className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Responsive E-Commerce Websites</h3>
              <p className="text-gray-600">
                We build responsive e-commerce websites that work seamlessly on all devices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaPaintBrush className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Custom E-Commerce Design</h3>
              <p className="text-gray-600">
                Get a custom-designed e-commerce website tailored to your brand.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaStore className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">E-Commerce Store Development</h3>
              <p className="text-gray-600">
                We develop full-fledged e-commerce stores with all the necessary features.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCreditCard className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">Multiple Payment Modes</h3>
              <p className="text-gray-600">
                Integrate multiple payment gateways for a seamless checkout experience.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaSearch className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-2">SEO & Social Media Friendly</h3>
              <p className="text-gray-600">
                Optimize your e-commerce platform for search engines and social media.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaUserCog className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Admin & Seller Dashboards</h3>
              <p className="text-gray-600">
                Provide real-time updates with exclusive dashboards for admins and sellers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Why Choose US?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaGlobe className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experts delivers high-quality e-commerce solutions.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCogs className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                We provide tailored e-commerce solutions to meet your unique needs.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaChartLine className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                We ensure seamless integration with your existing systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;