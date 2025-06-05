import React, { useState, useEffect } from "react";
import "animate.css";
import Link from "next/link"; // ✅ Use Next.js Link

const slides = [
  {
    image: "https://modinatheme.com/quantech/wp-content/uploads/2023/03/slide1.jpg",
    heading: "// Santrotech Software Technologies",
    subHeading: "Creative Idea To Excellent Products",
    description:
      "Empower your business with cutting edge IT Solutions tailored to your needs. Elevate efficiency, security, innovation through our expert services.",
  },
  {
    image: "https://modinatheme.com/quantech/wp-content/uploads/2023/05/slider2.jpg",
    heading: "// Santrotech Software Technologies",
    subHeading: "We Provide Best IT Solutions Service For Your Business",
    description:
      "We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const animations = [
    "animate__fadeInLeft",
    "animate__fadeInUp",
    "animate__fadeInRight",
    "animate__zoomIn",
  ];

  const buttonAnimations = [
    "animate__bounceIn",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__flash",
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      ></div>

      <div className="container relative z-10 px-4 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="text-white space-y-6">
              <h4 className={`text-xl lg:text-2xl mt-20 animate__animated ${animations[currentSlide % animations.length]}`}>
                {slides[currentSlide].heading}
              </h4>
              <h1 className={`text-4xl lg:text-5xl mt-10 font-extrabold animate__animated ${animations[(currentSlide + 1) % animations.length]}`}>
                {slides[currentSlide].subHeading}
              </h1>
              <p className={`mb-4 text-sm lg:text-base mt-6 animate__animated font-medium ${animations[(currentSlide + 2) % animations.length]}`}>
                {slides[currentSlide].description}
              </p>

              <div className="flex space-x-4 mt-6">
                <Link href="/contact-us">
                  <span className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base animate__animated ${buttonAnimations[currentSlide % buttonAnimations.length]}`}>
                    Get Consultant
                  </span>
                </Link>

                <Link href="/services/web-application-development">
                  <span className={`border border-white text-white py-2 px-4 rounded-lg hover:bg-amber-300 hover:text-gray-900 transition duration-300 text-sm md:text-base animate__animated ${buttonAnimations[(currentSlide + 1) % buttonAnimations.length]}`}>
                    Our Services
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
