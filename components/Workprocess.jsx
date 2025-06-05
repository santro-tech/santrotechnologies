import React from 'react';
import 'animate.css'; // Import Animate.css

const WorkProcess = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      {/* Section Title */}
      <div className="text-center mb-12 animate__animated animate__fadeInUp">
        <span className="text-lg font-semibold text-blue-600">// Work Process</span>
        <h2 className="text-4xl font-bold mt-2">How We Work</h2>
      </div>

      {/* Work Line Image */}
      

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="relative text-center animate__animated animate__fadeInLeftmt-20">
          <div className="flex justify-center">
            <img
              src="https://trueintech.com/wp-content/uploads/2023/04/about-img.jpg"
              alt="Create A Plan"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <a
              href="#"
              className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md"
            >
              1
            </a>
          </div>
          <h4 className="text-xl font-bold mt-4">Create A Plan</h4>
          <p className="text-gray-600 mt-2">
            We develop a simple web application for managing tasks using a modern tech stack.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative text-center animate__animated animate__fadeInUp">
          <div className="flex justify-center">
            <img
              src="https://trueintech.com/wp-content/uploads/2023/03/3.jpg"
              alt="Start Working"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <a
              href="#"
              className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md"
            >
              2
            </a>
          </div>
          <h3 className="text-xl font-bold mt-4">Start Working</h3>
          <p className="text-gray-600 mt-2">
            We focus on the best practices for IT Solutions and Services.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative text-center animate__animated animate__fadeInRight">
          <div className="flex justify-center">
            <img
              src="https://trueintech.com/wp-content/uploads/2023/03/5.jpg"
              alt="Publish Business"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <a
              href="#"
              className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md"
            >
              3
            </a>
          </div>
          <h4 className="text-xl font-bold mt-4">Publish Business</h4>
          <p className="text-gray-600 mt-2">
            We help in business establishment and promote the brand, products, and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;