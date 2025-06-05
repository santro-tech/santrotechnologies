import React, { useEffect, useRef, useState } from 'react';

const ChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    team: 0,
  });
  const sectionRef = useRef(null);

  // Function to animate numbers smoothly
  const animateNumbers = (targetCounts, duration = 2000) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounts({
        clients: Math.floor(progress * targetCounts.clients),
        projects: Math.floor(progress * targetCounts.projects),
        experience: Math.floor(progress * targetCounts.experience),
        team: Math.floor(progress * targetCounts.team),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(targetCounts); // Ensure the final number is exact
      }
    };

    requestAnimationFrame(animate);
  };

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers({
            clients: 852,
            projects: 2285,
            experience: 10,
            team: 52,
          });
          observer.unobserve(sectionRef.current); // Stop observing after animation
        }
      },
      { threshold: 0.1 } // Lower threshold for mobile screens (10% visibility)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content on the left side */}
          <div className="text-center md:text-left">
            <h5 className="text-4xl font-bold text-blue-800 ml-20">Why Choose Us</h5>
            <h2 className="text-3xl font-bold mt-2 text-white">
              We Bring New IT Business Solutions And Ideas
            </h2>
            <p className="text-gray-200 mt-4 max-w-2xl mx-auto md:mx-0">
              We're at the forefront of innovation, introducing novel IT business solutions and groundbreaking ideas. Our commitment is to propel your business forward, leveraging the latest in technology for unparalleled success. Embrace a future of possibilities with our transformative approach to IT solutions.
            </p>
            <div className="mt-6">
              <a
                href="/services/product-development"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Progress Bars on the right side */}
          <div className="space-y-6">
            {/* Progress Bar 1: Managed IT Services */}
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="mb-4">
                <span className="text-lg font-semibold">Managed IT Services</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: isVisible ? '92%' : '0%',
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">92%</span>
              </div>
            </div>

            {/* Progress Bar 2: Digital Marketing */}
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="mb-4">
                <span className="text-lg font-semibold">Digital Marketing</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: isVisible ? '92%' : '0%',
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">92%</span>
              </div>
            </div>

            {/* Progress Bar 3: IT Management */}
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="mb-4">
                <span className="text-lg font-semibold">IT Management</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: isVisible ? '92%' : '0%',
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">92%</span>
              </div>
            </div>

            {/* Progress Bar 4: IT Consultancy */}
            <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
              <div className="mb-4">
                <span className="text-lg font-semibold">IT Consultancy</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: isVisible ? '92%' : '0%',
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">92%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-16 bg-blue-600/90 py-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {/* Fun Fact 1: Happy Clients */}
            <div className="p-4">
              <div className="text-4xl font-bold">{counts.clients}+</div>
              <div className="text-lg mt-2">Happy Clients</div>
            </div>

            {/* Fun Fact 2: Completed Projects */}
            <div className="p-4">
              <div className="text-4xl font-bold">{counts.projects}+</div>
              <div className="text-lg mt-2">Completed Projects</div>
            </div>

            {/* Fun Fact 3: Years of Experience */}
            <div className="p-4">
              <div className="text-4xl font-bold">{counts.experience}+</div>
              <div className="text-lg mt-2">Years of Experience</div>
            </div>

            {/* Fun Fact 4: Professional Team */}
            <div className="p-4">
              <div className="text-4xl font-bold">{counts.team}+</div>
              <div className="text-lg mt-2">Professional Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;