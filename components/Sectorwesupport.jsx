import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const SectorsWeSupport = () => {
  const sectors = [
    { name: 'Robotics', image: 'https://crimsoninnovative.com/wp-content/uploads//2023/11/Asset-50.svg' },
    { name: 'Banking and Finance', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-52.svg' },
    { name: 'IT Companies', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-51.svg' },
    { name: 'Retail & E-commerce', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-47.svg' },
    { name: 'Defense & Security', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-49.svg' },
    { name: 'Network Communications', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-48.svg' },
    { name: 'Logistics & Transportation', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-46.svg' },
    { name: 'Agriculture', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-45.svg' },
    { name: 'Health Care', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-41.svg' },
    { name: 'Oil & Gas', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-44.svg' },
    { name: 'Avionics', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-42.svg' },
    { name: 'Education', image: 'https://crimsoninnovative.com/wp-content/uploads/2023/11/Asset-43.svg' },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2
          className="text-3xl font-bold text-center mb-8 text-blue-800"
          data-aos="fade-down"
        >
          <span className="text-indigo-600">Sectors</span> We Support
        </h2>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered delay for each card
            >
              <img
                src={sector.image}
                alt={sector.name}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800">{sector.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsWeSupport;