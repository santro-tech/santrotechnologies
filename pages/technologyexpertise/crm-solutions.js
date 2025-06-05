import React from 'react';
import { FaUsers, FaChartLine, FaHandshake, FaFileContract, FaCoins, FaSmile, FaCogs, FaUserFriends, FaSyncAlt } from 'react-icons/fa';

const CrmSolutions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
          alt="CRM Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            CRM Solutions
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Three Letters For Successful Business: “CRM”
          </p>
        </div>
      </div>

      {/* About CRM Solutions Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            What Makes Your Business Successful?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Great business minds, motivated staff, customer centricity, and all with the unique idea. This idea is CRM, and the right CRM solution for your business. Santrotech Software Technologies CRM solution is the best customer relationship management solution tailored to your needs to make you move fast on the path of success and glory.
          </p>
          <p className="text-gray-600 text-lg">
            Winning your customers is the key to massive success for your business. Healthy customer interaction determines the growth of your business. In today’s business environment, it becomes tough for businesses to prepare for escalated customer expectations. Santrotech Software Technologies CRM solutions help you take your business one step ahead. Our CRM solution enables businesses to get all the advantages of implementing customer relationship management.
          </p>
        </div>
      </div>

      {/* CRM Benefits Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Benefits of Our CRM Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaUsers className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Understand Your Customers</h3>
              <p className="text-gray-600">
                Gain deep insights into your target customers and their needs.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaChartLine className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Attract New Customers</h3>
              <p className="text-gray-600">
                Use data-driven strategies to attract new customers to your business.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaHandshake className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Retain Customers</h3>
              <p className="text-gray-600">
                Deliver exceptional customer experiences to retain your existing customers.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaFileContract className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">Win Contracts</h3>
              <p className="text-gray-600">
                Streamline your sales process to win more contracts and clients.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCoins className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-2">Reduce Costs</h3>
              <p className="text-gray-600">
                Decrease customer management costs with efficient CRM tools.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaSmile className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Increase Profitability</h3>
              <p className="text-gray-600">
                Boost your profitability by optimizing customer relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CRM Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 text-center mb-8">
            Why to Choose Santrotech Software Technologies CRM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
                alt="Tailored Solutions"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <FaCogs className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">
                Our CRM software is customized to meet your unique business needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
                alt="Customer-Centric Approach"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <FaUserFriends className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Customer-Centric Approach</h3>
              <p className="text-gray-600">
                We focus on delivering exceptional customer experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D"
                alt="Scalable and Flexible"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <FaSyncAlt className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Scalable and Flexible</h3>
              <p className="text-gray-600">
                Our CRM solutions grow with your business and adapt to your changing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmSolutions;