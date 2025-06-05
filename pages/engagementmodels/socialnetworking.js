import React from 'react';
import { GlobeAltIcon, DevicePhoneMobileIcon, BeakerIcon, MegaphoneIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const SocialNetworking = () => {
  const services = [
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-blue-600" />,
      title: "PORTAL DEVELOPMENT",
      description: "Our web portals provide you with a dynamic and engaging user experience to build your reputation while also adding value."
    },
    {
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-blue-600" />,
      title: "Mobile App Development",
      description: "Skilled iOS & Android developers with endless curiosity to create apps as per client's business requirements."
    },
    {
      icon: <BeakerIcon className="h-12 w-12 text-blue-600" />,
      title: "SOFTWARE TESTING",
      description: "Process-oriented approach with customized and automated testing procedures to offer the best quality software."
    },
    {
      icon: <MegaphoneIcon className="h-12 w-12 text-blue-600" />,
      title: "DIGITAL MARKETING",
      description: "Our team works as an extension of your business to give continuous tech support and keep solutions updated and relevant."
    },
    {
      icon: <UserGroupIcon className="h-12 w-12 text-blue-600" />,
      title: "DEDICATED TEAM",
      description: "We provide technology and business resources to supplement your in-house team, sharing core values."
    },
    {
      icon: <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600" />,
      title: "SUPPORT AND MAINTENANCE",
      description: "IT strategy for digital transformation of your organization that aligns with your business objectives."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Social Networking Solutions for the Digital Age
          </h1>
          <p className="text-xl md:text-2xl mb-8">Pioneering Tomorrow's Social Landscape Today</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all">
            Explore Services
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            About Santrotech Software Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <p className="text-lg leading-relaxed">
            Santrotech Software Technologies pvt Ltd. is built on a tradition of breakthroughs and innovative solutions. 
              What we do today will begin to map the landscape of tomorrow. Progress occurs when someone has 
              the courage and vision to break through barriers, determined to accomplish what seems impossible.
            </p>
            <p className="text-lg leading-relaxed">
              We combine the best people, processes and technology to achieve excellent results consistently. 
              Our portfolio of reusable frameworks and proven methodology ensures predictable, low-risk paths 
              to success, with a track record of delivering complex projects on or ahead of schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    
    </div>
  );
};

export default SocialNetworking;
