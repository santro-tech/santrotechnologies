import React from 'react';
import { FaCoins, FaCogs, FaChartLine, FaSyncAlt, FaUserCheck, FaDatabase, FaUsers, FaHandshake, FaTools, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const ErpImplementation = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXJwJTIwaW1wbGVtZW50YXRpb258ZW58MHx8MHx8fDA%3D"
          alt="ERP Implementation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            ERP Implementation
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Streamline Your Business Processes with Expert ERP Solutions
          </p>
        </div>
      </div>

      {/* About ERP Implementation Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Transform Your Business with ERP Implementation
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Organizational processes fall into three levels – strategic planning, management control, and operational control. ERP implementation facilitates operational coordination and control across functional departments; it also benefits strategic planning and management control directly or indirectly.
          </p>
          <p className="text-gray-600 text-lg">
          Santrotech Software Technologies does not let you feel the associated challenges like support, upgrades, and integration with other systems. Whether it is the choice of ‘mixing and matching’ software modules or a complete ERP system, we ensure that the solution improves operations and overall financials.
          </p>
        </div>
      </div>

      {/* ERP Benefits Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Benefits of ERP Implementation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCoins className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Reduction in Operating Costs</h3>
              <p className="text-gray-600">
                Streamline processes and reduce operational expenses with ERP solutions.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCogs className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Facilitation of Day-to-Day Management</h3>
              <p className="text-gray-600">
                Simplify daily operations and improve efficiency with ERP systems.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaChartLine className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Support in Strategic Planning</h3>
              <p className="text-gray-600">
                Leverage ERP for better decision-making and long-term planning.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaSyncAlt className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">Streamlining Processes</h3>
              <p className="text-gray-600">
                Automate and optimize business processes for improved productivity.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaUserCheck className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-2">Optimization of Revenue Systems</h3>
              <p className="text-gray-600">
                Enhance revenue systems with integrated ERP solutions.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaDatabase className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Improved Customer Satisfaction</h3>
              <p className="text-gray-600">
                Deliver faster response times and better customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Our Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaTools className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">ERP Implementations</h3>
              <p className="text-gray-600">
                Oracle E-Business Suite and SAP Business One.
              </p>
            </div>

            {/* Expertise 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaUsers className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">CRM Implementation</h3>
              <p className="text-gray-600">
                Siebel CRM and SAP B1 CRM.
              </p>
            </div>

            {/* Expertise 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaHandshake className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">ERP Consulting</h3>
              <p className="text-gray-600">
                Expert guidance for ERP strategy and implementation.
              </p>
            </div>

            {/* Expertise 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaShieldAlt className="text-orange-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-orange-600 mb-2">Integration</h3>
              <p className="text-gray-600">
                Seamless integration of ERP with existing systems.
              </p>
            </div>

            {/* Expertise 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaSyncAlt className="text-red-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-2">Upgrade and Migration</h3>
              <p className="text-gray-600">
                Smooth upgrades and migrations to newer ERP versions.
              </p>
            </div>

            {/* Expertise 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaLightbulb className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Application Care/Support</h3>
              <p className="text-gray-600">
                Ongoing support and maintenance for ERP systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Why Choose Santrotech Software Technologies?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaChartLine className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our ERP solutions grow with your business and adapt to your needs.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaCogs className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-600 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                We ensure seamless integration with your existing systems.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <FaUsers className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-600 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experts delivers high-quality ERP implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpImplementation;