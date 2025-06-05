import React from 'react';
import { FaMicrochip, FaCode, FaCogs, FaNetworkWired, FaLinux, FaJava, FaHtml5, FaObjectGroup, FaProjectDiagram } from 'react-icons/fa';

const EmbeddedSolutions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <img 
          src="https://plus.unsplash.com/premium_photo-1714618990464-bb4ddc34c542?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1iZWRkZWQlMjBzeXN0ZW1zfGVufDB8fDB8fHww" 
          alt="Embedded Systems" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4">
            Embedded Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Resolve your OS upgrade fears and hardware porting worries with our expert embedded solutions
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-16">
        {/* Value Proposition Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Future-Proof Your Embedded Systems
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We specialize in adapting your existing products to new software OS upgrades, helping you stay ahead of competitors while leveraging feature-rich OS enhancements. Our expertise ensures faster time-to-market and development efficiency.
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { title: 'Board Support Packages', icon: <FaMicrochip className="w-8 h-8 text-blue-600" /> },
              { title: 'Operating Systems/Kernel Development', icon: <FaLinux className="w-8 h-8 text-green-600" /> },
              { title: 'Firmware/Device Drivers', icon: <FaCogs className="w-8 h-8 text-purple-600" /> },
              { title: 'Protocol Stacks', icon: <FaNetworkWired className="w-8 h-8 text-orange-600" /> },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Technical Expertise Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Embedded OS/RTOS</h3>
              <ul className="space-y-3">
                {['Embedded Linux (uClinux, rtLinux, etc)', 'VxWorks'].map((os) => (
                  <li key={os} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {os}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { lang: 'C/C++', icon: <FaCode className="w-6 h-6 text-blue-600" /> },
                  { lang: 'Assembly Languages', icon: <FaCode className="w-6 h-6 text-green-600" /> },
                  { lang: 'Java', icon: <FaJava className="w-6 h-6 text-red-600" /> },
                  { lang: 'Perl', icon: <FaCode className="w-6 h-6 text-purple-600" /> },
                  { lang: 'HTML', icon: <FaHtml5 className="w-6 h-6 text-orange-600" /> },
                ].map((item) => (
                  <div key={item.lang} className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                    {item.icon}
                    <span className="ml-2">{item.lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodologies Section */}
        <section className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Development Methodologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <FaProjectDiagram className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Structured Analysis & Design</h3>
              <p className="text-gray-600">Proven methods for complex system development</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <FaObjectGroup className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Object-Oriented Analysis & Design</h3>
              <p className="text-gray-600">Modern approaches for scalable solutions</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Experience Our Embedded Expertise</h2>
          <p className="text-xl mb-8">See the difference our kernel-level expertise makes</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Schedule Consultation
          </button>
        </section>
      </main>
    </div>
  );
};

export default EmbeddedSolutions;