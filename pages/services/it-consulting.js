import React from 'react';
import { FaBuilding, FaChartLine, FaCogs, FaLightbulb, FaTools, FaProjectDiagram, FaRobot, FaShieldAlt } from 'react-icons/fa'; // Icons for services and offers

const ItConsulting = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww"
          alt="IT Consulting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            IT Consulting & Outsourcing
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Empowering your business with strategic IT solutions.
          </p>
        </div>
      </div>

      {/* About IT Consulting Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Transform Your Business with Expert IT Consulting
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Use the expertise and deep tech background of the best minds at Santrotech Software Technologies to create a comprehensive IT strategy for a digital and technological transformation of your organization that goes in line with your business objectives. Our strategic IT consulting will help you automate and digitalize operations, optimize the software portfolio, and implement the latest technologies.
          </p>
          <p className="text-gray-600 text-lg">
            We offer IT consulting services that will help you improve your software architecture, create a tech-driven digital strategy, and improve operations by optimizing your software portfolio. Our software engineers will finish your digital transformation journey through careful planning and effective execution of the outlined IT strategy.
          </p>
        </div>
      </div>

      {/* Services Showcase Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Our IT Consulting Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaBuilding size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Enterprise Architecture Advisory</h3>
              <p className="text-gray-600">
                We improve your software architecture, develop tech-based digital strategies, and optimize your software portfolio.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-green-100 rounded-lg">
                <FaChartLine size={60} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">IT Strategy Consulting</h3>
              <p className="text-gray-600">
                We help you implement new technologies and ensure consistent delivery of high-quality IT products and services.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-purple-100 rounded-lg">
                <FaCogs size={60} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">Digital Transformation</h3>
              <p className="text-gray-600">
                We guide your business through digital transformation with careful planning and execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaLightbulb size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Strategic IT Consulting</h3>
              <p className="text-gray-600">
                We create comprehensive IT strategies aligned with your business objectives.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaTools size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Software Portfolio Optimization</h3>
              <p className="text-gray-600">
                We optimize your software portfolio to improve efficiency and reduce costs.
              </p>
            </div>

            {/* Offer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaRobot size={40} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">Workflow Automation</h3>
              <p className="text-gray-600">
                We automate workflows to enhance productivity and reduce manual effort.
              </p>
            </div>

            {/* Offer 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaShieldAlt size={40} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Future-Proof Solutions</h3>
              <p className="text-gray-600">
                We design scalable and future-proof IT solutions for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItConsulting;