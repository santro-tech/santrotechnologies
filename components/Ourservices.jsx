import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Ourservices = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-center text-pink-500 mb-8"
          data-aos="fade-down"
        >
          OUR SERVICES
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: IT Consulting */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/desktop.png"
                alt="IT Consulting"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="https://trueintech.com/it-consulting/" className="hover:text-blue-600">
                  IT Consulting
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              IT consulting services provide tailored solutions to help businesses navigate complex technological challenges and maximize their IT investments for long-term success.
            </p>
          </div>

          {/* Service 2: IT Outsourcing */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/mobile.png"
                alt="IT Outsourcing"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="/" className="hover:text-blue-600">
                  IT Outsourcing
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              IT outsourcing involves delegating specific IT functions or tasks to external service providers, enabling businesses to focus on core activities while leveraging specialized expertise.
            </p>
          </div>

          {/* Service 3: App Development */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/ux.png"
                alt="App Development"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="/" className="hover:text-blue-600">
                  App Development
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              App development services encompass the design, creation, and deployment of mobile applications tailored to meet the unique needs and objectives of businesses and users.
            </p>
          </div>

          {/* Service 4: Cloud Services */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/qa.png"
                alt="Cloud Services"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="/" className="hover:text-blue-600">
                  Cloud Services
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              Cloud services encompass a wide range of offerings, including infrastructure, platform, and software delivered over the internet. These services enable businesses to access scalable computing resources and storage.
            </p>
          </div>

          {/* Service 5: Mortgage Services */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/stock.png"
                alt="Mortgage Services"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="/" className="hover:text-blue-600">
                  Mortgage Services
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              Mortgage services involve providing financial assistance and guidance to individuals or businesses seeking to secure loans for purchasing or refinancing real estate properties.
            </p>
          </div>

          {/* Service 6: Data Analytics & AI */}
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex items-center mb-4">
              <img
                src="https://modinatheme.com/quantech/wp-content/uploads/2023/03/web.png"
                alt="Data Analytics & AI"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-xl font-semibold">
                <a href="/" className="hover:text-blue-600">
                  Data Analytics & AI
                </a>
              </h4>
            </div>
            <p className="text-gray-600">
              Data analytics AI (Artificial Intelligence) involves leveraging advanced algorithms and machine learning techniques to analyze vast amounts of data and extract valuable insights for informed decision-making and strategic planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;