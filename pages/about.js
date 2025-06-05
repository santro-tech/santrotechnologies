import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhoWeAreAndAboutCompany = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Who We Are Section */}
      <div className="relative bg-white flex items-center justify-center min-h-screen">
        {/* Image with Text Overlay */}
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Office Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for darkening */}
        <div className="relative z-10 text-center text-white p-8" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-2">ABOUT US</h1>
        </div>
      </div>

      {/* Who We Are Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center" data-aos="fade-up">
          <p className="text-gray-600">Best For IT Solutions &amp; Outsourcing</p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">WHO WE ARE</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Empowered by over the years of experience, our pioneering vision of reshaping businesses for the digital era is now making a mark in IT industry. We provide services in cloud-based custom software development, SAAS-based products, and mobile application development. We design and deliver the best-in-class solutions and stand on our commitments by going one extra mile to meet our client needs.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Column - List */}
          <div className="bg-white shadow-md rounded-lg p-6 md:w-1/3 w-full" data-aos="fade-right">
            <ul className="text-left">
              <li className="py-2 border-b border-gray-200">
                <span className="font-bold">01. Our Vision</span>
              </li>
              <li className="py-2 border-b border-gray-200">
                <span className="font-bold">02. Our Mission</span>
              </li>
              <li className="py-2">
                <span className="font-bold">03. Our Expertise</span>
              </li>
            </ul>
          </div>

          {/* Middle Column - Description and Button */}
          <div className="md:w-1/3 w-full text-center md:text-left md:ml-8" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-600 mb-4">
              To emerge as a leader in the Indian “Information Technology” industry - through total customer satisfaction.
            </p>
           
           <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full"
            onClick={() => window.location.href = '/contact-us'}
           >
            
              Contact Us
             
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-6 md:mt-0" data-aos="fade-left" data-aos-delay="400">
            <div className="relative">
              <img
                alt="A group of professionals discussing a document"
                className="rounded-full w-64 h-64 object-cover"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/ZIxAG9_9VLu5bQejWgTbh_mOwgAcX7sjT4G_rx_qUxg.jpg"
                width="300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-8 border-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Company Section */}
      <div className="bg-white text-gray-800" data-aos="fade-up" data-aos-delay="500">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Column - Images */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative">
                <img
                  alt="Two business professionals discussing work"
                  className="rounded-lg shadow-lg"
                  height="500"
                  src="https://storage.googleapis.com/a1aa/image/Dv-GA0O0H30EkbO_5CRNAy8NU5OxbqQF6u2DJhVX8u4.jpg"
                  width="400"
                />
                <img
                  alt="A business professional smiling at the camera"
                  className="absolute top-80 left-120 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg border-4 border-white"
                  height="300"
                  src="https://storage.googleapis.com/a1aa/image/ZQQTN_zUxY2dC39WAWKgkQTJ9CGXPrWWTYFoBe1jsHk.jpg"
                  width="300"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
              <h2 className="text-blue-600 text-sm font-bold uppercase mb-2">
                About Company
              </h2>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                What We Do
              </h1>
              <p className="mb-4">
              Santrotech Software Technologies is a fast-growing enterprise solutions company capturing the market with its multi-tenanted cloud and mobile-based enterprise software.
              </p>
              <p className="mb-4">
              Santrotech Software Technologies offers a comprehensive range of IT services such as business process solutions, next-gen mobility solutions, consulting solutions, managed services, and E-Commerce Solutions to clients in diverse industries.
              </p>
              <p className="mb-4">
                Our clients include leading brands in Conversion, Advertising, Printing, and other industries. We have a true appreciation of the role our work plays in helping clients generate revenue.
              </p>
              <p>
                With iBookServices diverse experience and high-quality work, you can relax and concentrate on growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Feedbacks Section */}
      <div className="bg-gray-100" data-aos="fade-up" data-aos-delay="600">
        <div className="text-center py-10">
          <h2 className="text-blue-500 font-bold">FEEDBACKS</h2>
          <h1 className="text-4xl font-bold text-gray-800">Customer Feedbacks</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-6 px-4 md:px-0">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mb-6 md:mb-0" data-aos="fade-up">
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of a business expert"
                className="w-16 h-16 rounded-full"
                src="https://storage.googleapis.com/a1aa/image/rh2SDxY9w9wXTaQXHwJbT-di1MhGlZ0KIjMQpKVgO3o.jpg"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">David Smith</h3>
                <p className="text-gray-500">Business Expert</p>
              </div>
              <div className="bg-green-500 text-white rounded-full p-2">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “Parallel task user friendly convergence through supply are chains type silify reliable meta provide service visionary sources unleash tactical thinking via granular intellectual capital architect dynamic information value online business solution services”
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm" data-aos="fade-up">
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of a business expert"
                className="w-16 h-16 rounded-full"
                src="https://storage.googleapis.com/a1aa/image/8Q2aulRL2j2Wpegs0JdK0K4WvV5RyzgaWg53-eZvueU.jpg"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Lucas</h3>
                <p className="text-gray-500">Business Expert</p>
              </div>
              <div className="bg-green-500 text-white rounded-full p-2">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              “Seamless innovation-driven solutions leveraging collaborative frameworks to streamline operations, enhance strategic synergy, and deliver cutting-edge digital transformation across industries, maximizing efficiency, optimizing resource allocation, and fostering sustainable growth through scalable, future-proof technologies.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreAndAboutCompany;
