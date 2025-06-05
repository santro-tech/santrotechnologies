import React from 'react';

const WebAppDevelopment = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">WEB APPLICATION DEVELOPMENT</h1>
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
              src="https://avantis-technologies.com/assets/images/service/01.jpg"
              width="800"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex flex-wrap justify-center space-x-2">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    Node JS
                  </span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    JAVA
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    JS
                  </span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    React
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    C++
                  </span>
                  <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                    PYTHON
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content below the image */}
          <div className="mt-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Web Application Development</h1>
            <p className="mt-4 text-gray-700">
              We work to make you look good online. A good web design helps duplicate your time and can increase your turnover without any extra effort. We offer you unique web designs with interactive UI that provide a better user experience, stand out to give you an edge over competitors, reduce bounce rates, lower loading time, and provide load handling features to compel your visitors to become customers.
            </p>
            <p className="mt-4 text-gray-700">
              We provide web development services across multiple platforms, integrating complex features and functionality into your websites. We take a client- and user-based approach to developing websites.
            </p>
            <p className="mt-4 text-gray-700">
              We ensure the websites we create for our clients are up to date with the constant evolution of both new hardware and operating systems. The websites we develop are technically strong with solid design, well-coded functions, and robust security features.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">Additional services that your website needs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Responsive Designs */}
            <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <i className="fas fa-mobile-alt text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 📱Responsive designs</h2>
              </div>
              <p>Designs that are compatible with all the devices, from pc to mobile phone</p>
            </div>

            {/* Elegant / Unique Design */}
            <div className="bg-white shadow-md p-6 rounded-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <i className="fas fa-paint-brush text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 👍Elegant / Unique design</h2>
              </div>
              <p>Our Designs are unique & elegant when compared to other web layouts</p>
            </div>

            {/* Security Level Check */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-shield-alt text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 🔐 Security Level Check</h2>
              </div>
              <p>Want to add extra protection for your websites? We secure your data & devices</p>
            </div>

            {/* Live Chat Integration */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-comments text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 🗪 Live Chat Integration</h2>
              </div>
              <p>Make your customers hassle-free with an end to end conversation in your website</p>
            </div>

            {/* Job / Contact Enquiry */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 💼🤝🏽 Job / Contact Enquiry</h2>
              </div>
              <p>Want to generate more leads from your website? Our contact forms are tightly</p>
            </div>

            {/* WhatsApp Integration */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-whatsapp text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 📨 Whatsapp Integration</h2>
              </div>
              <p>Let the leads come directly to your phone, with just one click</p>
            </div>

            {/* Payment Gateway */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-credit-card text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 💳 Payment Gateway</h2>
              </div>
              <p>Collect payment online to maintain versatile relationship with your client</p>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-red-500 text-2xl mr-4"></i>
                <h2 className="text-lg sm:text-xl font-semibold"> 📍🗺️ Google Maps Integration</h2>
              </div>
              <p>Reviews and Location helps your clients reach your location faster</p>
            </div>
          </div>

          {/* Technologies We Use */}
          <div className="mt-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies we use</h2>
            <p className="text-gray-700">
              We the team of Santrotech Software Technologies have been growing since 2012, to meet the needs of our customers. We take pride in providing top-notch service by using hands-on experience on various technologies. We use various tools to check the mobile responsiveness for different devices and operating systems like Android and iOS.
              <br />
              Our team handles multiple tasks as they are specialized experts in graphic and web design. We use technologies like HTML5, CSS3, Javascript, React, Angular, Node JS, Jquery, PHP, Python, Bootstrap, Wordpress, Java, Kotlin, CorelDraw, Photoshop, and Illustrator. We work on various tools like GT Metrix and Google Speed Check for optimizing pages that result in speed loading & we also use Google insights for a better score.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebAppDevelopment;
