import React from 'react';
import { FaCogs, FaSyncAlt, FaTools, FaHeadset } from 'react-icons/fa'; // Icons for services
import { GiFactory, GiReceiveMoney, GiHumanPyramid, GiProgression } from 'react-icons/gi'; // Icons for processes

const OracleImplementation = () => {
  const services = [
    { name: 'Implementation & Consulting', icon: <FaCogs size={40} className="text-blue-600" /> },
    { name: 'Integration', icon: <FaSyncAlt size={40} className="text-blue-600" /> },
    { name: 'Upgrade and Migration', icon: <FaTools size={40} className="text-blue-600" /> },
    { name: 'Application Care/ Support', icon: <FaHeadset size={40} className="text-blue-600" /> },
  ];

  const processes = [
    { name: 'Asset Lifecycle Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Customer Relationship Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Enterprise Resource Planning', icon: <GiReceiveMoney size={24} className="text-blue-600 mr-3" /> },
    { name: 'Financial Management', icon: <GiReceiveMoney size={24} className="text-blue-600 mr-3" /> },
    { name: 'Human Capital Management', icon: <GiHumanPyramid size={24} className="text-blue-600 mr-3" /> },
    { name: 'Project Management', icon: <GiProgression size={24} className="text-blue-600 mr-3" /> },
    { name: 'Procurement', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Product Lifecycle Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Supply Chain Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Supply Chain Planning', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Logistics & Transportation Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Order Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Price Management', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
    { name: 'Manufacturing', icon: <GiFactory size={24} className="text-blue-600 mr-3" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 px-4 min-h-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMHRlYW18ZW58MHx8MHx8fDA%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl text-white-700 font-bold text-center">ORACLE IMPLEMENTATION</h1>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processes Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Automated Business Processes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {processes.map((process, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
                <div className="flex items-center">
                  {process.icon}
                  <span className="text-gray-700">{process.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Let our Oracle experts guide you through digital transformation</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default OracleImplementation;