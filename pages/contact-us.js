import  { useState } from 'react';

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and data appending to URL
    setShowPopup(true); // Show the popup
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 3 seconds
    }, 3000);
    
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Office Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero Text */}
        <div className="relative z-10 p-8 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl animate-fade-in">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl lg:text-2xl animate-fade-in-up">
            We're here to help. Reach out to us anytime!
          </p>
        </div>
      </div>

      {/* Contact Form and Information Section */}
      <div className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          {/* Grid Layout for Contact Form and Information */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white transition-all transform rounded-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information and Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="p-8 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center transition-colors hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    #62/1, New No:07, 1st Cross, 2nd Main, Ganganagar, Bangalore, Karnataka 560032.
                  </li>
                  <li className="flex items-center transition-colors hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@santro-tech.com
                  </li>
                  <li className="flex items-center transition-colors hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 6304403019
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="p-8 transition-transform transform bg-white rounded-lg shadow-xl hover:scale-105">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">Our Location</h2>
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    title="Google Maps Location"
                    src=""
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg bottom-4 right-4">
          <p>Thanks for contacting us! We appreciate your inquiry and will respond shortly.</p>
        </div>
      )}
    </>
  );
};

export default ContactUs;