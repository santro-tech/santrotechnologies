import React from 'react';
import { FaCode, FaCogs, FaRocket, FaChartLine, FaTools, FaLayerGroup, FaDatabase, FaCheckCircle } from 'react-icons/fa'; // Icons for services and offers

const ProductDevelopment = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
          alt="Product Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Product Development
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Transforming ideas into innovative digital products.
          </p>
        </div>
      </div>

      {/* About Product Development Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-6">
            Agile, Design-Led Product Development
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We follow agile, design-led product development and a little bit of magic to create amazing digital user experiences. We build feature-rich software for external organizations or individuals in either horizontal or vertical markets. The programs we develop have precisely defined interfaces, run efficiently, and pass an exhausting series of tests in all expected combinations.
          </p>
          <p className="text-gray-600 text-lg">
            We are specialized in designing best practices for EAM, CRM, SCM, ERM, and other management systems. Our Software Product Development Company stands out from the crowd not only by promising customers unique benefits but also by keeping words and following those promises. We have experience in architecting & designing products using diverse technology stacks. We build flexible, high-performance, and scalable platforms.
          </p>
        </div>
      </div>

      {/* Services Showcase Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Our Product Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaCode size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Software Development</h3>
              <p className="text-gray-600">
                We build tailored software solutions to meet your unique business needs and goals.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaCogs size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enterprise Solutions</h3>
              <p className="text-gray-600">
                We design and develop scalable enterprise solutions for EAM, CRM, SCM, and ERM systems.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaRocket size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product Prototyping</h3>
              <p className="text-gray-600">
                We create interactive prototypes to visualize and test your product before development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Offer 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaTools size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agile Development</h3>
              <p className="text-gray-600">
                We follow agile methodologies to deliver high-quality products efficiently.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaLayerGroup size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scalable Platforms</h3>
              <p className="text-gray-600">
                We build flexible and scalable platforms to grow with your business.
              </p>
            </div>

            {/* Offer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaDatabase size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Diverse Technology Stacks</h3>
              <p className="text-gray-600">
                We use the latest technologies to architect and design innovative products.
              </p>
            </div>

            {/* Offer 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaCheckCircle size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">End-to-End Testing</h3>
              <p className="text-gray-600">
                We ensure your product passes rigorous testing for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopment;