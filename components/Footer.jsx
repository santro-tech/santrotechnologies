import React, { useState } from 'react';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold">About Us</h3>
            <p className="text-gray-400">
              We are a team of passionate developers and designers dedicated to creating innovative solutions for your business needs.
            </p>
            
            <a href="/contact-us">
              <button className="h-10 mt-5 font-bold bg-red-500 w-35 rounded-2xl">
                Get In Touch
              </button>
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8">
  <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
  <ul className="space-y-2">
    {[
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
      { name: 'Services', url: '/services/web-application-development' },
      { name: 'Contact Us', url: '/contact-us' }
    ].map((link, index) => (
      <li key={index}>
        <a href={link.url} className="text-gray-400 transition-colors hover:text-white">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Contact Information Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 Email: info@santro-tech.com</li>
              <li>📞 Phone: +91 9000497500</li>
              <li>🏠 Address:  #62/1, New No:07, 1st Cross, 2nd Main, Ganganagar, Bangalore, Karnataka 560032.</li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold">Ready to <span className="font-stretch-75% text-lime-500">WORK WITH US?</span></h3>
            <p className="mb-4 text-gray-400">
              Empowered by years of experience, our pioneering vision of reshaping businesses for the digital era is now making a mark in IT industry.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 text-white placeholder-gray-400 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 transition-colors bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            Copyright © {new Date().getFullYear()} Santrotech Software Technologies | All Rights Reserved
          </p>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg bottom-4 right-4">
          <p>Thank you for contacting us. We have successfully received your message and our team will get back to you as soon as possible.".</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;