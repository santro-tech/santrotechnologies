import React from 'react';
import { FaPalette, FaUserCheck, FaRocket, FaLightbulb, FaUsers, FaPencilRuler, FaMobileAlt, FaChartLine } from 'react-icons/fa'; // Icons for services and offers

const UiAndUxDesign = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D"
          alt="UI/UX Design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            UI & UX Design
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-fade-in-up">
            Crafting seamless and engaging digital experiences.
          </p>
        </div>
      </div>

      {/* About UI/UX Design Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            We Make Your UI/UX Design Project a Pleasant and Successful Experience
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            At Keyideas, we specialize in UI/UX design that helps our clients capture attention across all major platforms. Our UI/UX web design helps you reach millions of global customers. Our team believes in creating innovative UI/UX designs to help grow your business. Our designs help our clients communicate and run their business better.
          </p>
          <p className="text-gray-600 text-lg">
            The look-and-feel of a system is an equally important aspect, along with well-organized information architecture and roadmap design. Graphics emphasize the aesthetics of a system, including color and contrast, styles, fonts, images, navigation, animation, and many other design elements. In terms of websites, it is a critical element to attract as well as retain visitors and increase conversions. Our UX designers create alluring graphics as per customers’ requirements and branding.
          </p>
        </div>
      </div>

      {/* Services Showcase Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
            Our UI/UX Design Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaPalette size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">UI Design</h3>
              <p className="text-gray-600">
                We create visually stunning and user-friendly interfaces that captivate your audience and enhance user engagement.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaUserCheck size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">UX Design</h3>
              <p className="text-gray-600">
                We focus on delivering seamless and intuitive user experiences that drive customer satisfaction and business growth.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center h-48 mb-4 bg-blue-100 rounded-lg">
                <FaRocket size={60} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prototyping</h3>
              <p className="text-gray-600">
                We build interactive prototypes to visualize and test your product before development, ensuring a perfect user experience.
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
                <FaPencilRuler size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom UI Design</h3>
              <p className="text-gray-600">
                Tailored designs that align with your brand identity and business goals.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaUsers size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">User Research</h3>
              <p className="text-gray-600">
                In-depth research to understand your users and their needs.
              </p>
            </div>

            {/* Offer 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaMobileAlt size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Wireframing</h3>
              <p className="text-gray-600">
                Detailed wireframes to map out the structure and flow of your application.
              </p>
            </div>

            {/* Offer 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <FaChartLine size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Usability Testing</h3>
              <p className="text-gray-600">
                Testing and refining designs to ensure optimal user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiAndUxDesign;