import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileApplicationDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Image at the top of the page */}
      <div className="relative bg-white flex items-center justify-center min-h-screen">
        {/* Image with Text Overlay */}
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Office Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for darkening */}
        <div className="relative z-10 text-center text-white p-8" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            MOBILE APPLICATION DEVELOPMENT
          </h1>
        </div>
      </div>

      {/* Page content */}
      <div className="bg-white text-gray-800">
        <div className="max-w-4xl mx-auto p-4">
          <div className="relative">
            <img
              alt="A person working on a laptop with various programming language icons around"
              className="w-full h-auto"
              height="400"
              src="https://avantis-technologies.com/assets/images/service/mob.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex flex-wrap justify-center space-x-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    REACT NATIVE
                  </span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    FLUTTER
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    JAVA
                  </span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    KOTLIN
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    SWIFT
                  </span>
                  <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm" data-aos="zoom-in">
                    IONIC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content below the image */}
          <div className="mt-8" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Web Application Development</h1>
            <p className="mt-4 text-gray-700">
              Our App developers in India have expertise in developing apps for iPhone & Android. We are dedicated to providing
              development services at their best and proud to have a huge base of offshore clients along with some of the top domestic brands.
              <br />
              Our ability to meet your needs stems from our team of experts, who have years of experience in global app solution services.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8" data-aos="fade-up">
            App Development
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Responsive Designs */}
            <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-500" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <i className="fas fa-mobile-alt text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 📱StartUps</h2>
              </div>
              <p>We create mobile apps tailored for startups, helping bring ideas to life</p>
            </div>

            {/* Elegant / Unique Design */}
            <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-500" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <i className="fas fa-paint-brush text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 👍Enterprises</h2>
              </div>
              <p>We develop mobile apps for enterprises, enhancing business solutions and efficiency..</p>
            </div>

            {/* Payment Gateway */}
            <div className="bg-white shadow-md p-6 rounded-lg" data-aos="fade-up">
              <div className="flex items-center mb-4">
                <i className="fas fa-credit-card text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 💳 Payment Gateway</h2>
              </div>
              <p>We develop mobile apps for enterprises and startups, with seamless payment gateway integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Development Services Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mobile App Development Services</h1>
          <p className="text-gray-600 mb-12">
            Being one of the pioneering cross-platform mobile app development companies, we help transform ideas into
            applications that run across multiple platforms using the best tools available.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="mb-4">
              <img
                alt="Icon representing Android Apps"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/U8_gHF7Q7GuIo3h3_bhrckL8nDPaYsbcuDqeQQhzwyM.jpg"
                width="100"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">ANDROID APPS</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="mb-4">
              <img
                alt="Icon representing iOS Apps"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/K9VX_oqtbhWInQgTS1rl1ivh1RVXL6YlDjaLkNXEllU.jpg"
                width="100"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">IOS APPS</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="mb-4">
              <img
                alt="Icon representing Hybrid Apps"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/hBu39LpmU9AEq-6C4vQaZAld62oUblePJPjthUcf2ys.jpg"
                width="100"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">HYBRID APPS</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="mb-4">
              <img
                alt="Icon representing Xamarin Apps"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/cRHecvJNQ8bBSWNUCVMvnBp30Tt2_ofoL1H-01nGKaY.jpg"
                width="100"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">XAMARIN APPS</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApplicationDevelopment;
