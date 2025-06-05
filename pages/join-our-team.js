import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CareersPage from './careerspage';

const Joinourteam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <div className="relative flex items-center justify-center min-h-screen bg-white">
        {/* Image with Text Overlay */}
        <img
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwaW1hZ2VzfGVufDB8fDB8fHww"
          alt="Office Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for darkening */}
        <div className="relative z-10 p-8 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold" data-aos="fade-up">JOIN OUR TEAM</h1>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        {/* Flex container for the profile image and join our team text */}
        <div className="flex flex-col items-center justify-between md:flex-row" data-aos="fade-up">
          {/* Left Section: Join Our Team */}
          <div className="mb-8 ml-10 md:w-1/2 md:mb-0" data-aos="fade-right">
            <h1 className="mb-4 text-4xl font-bold">Join Our Team</h1>
            <p className="mb-6 text-lg">
              We’re a smart, talented, and determined team. Determined to innovate and make a difference. We’re not just about results for our clients, but also results for our employees – making sure every person who joins us grows, learns, and enjoys coming into work every day.
            </p>
            <p className="mb-6 text-lg">
              We look for people who are excited to do what they do. People who aren’t afraid of changing the status quo or going against the grain. We’re building a strong, diverse team of remarkable, passionate, curious, and fearless people who also know how to have a little fun. We’re coworkers and friends. We’re innovators and creators. We like laughter, comradery, and getting things done. We believe in collaboration, facing challenges, and taking risks. But most of all, we believe in Being awesome.
            </p>
          </div>

          {/* Right Section: Profile Image */}
          <div className="flex justify-center md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <img
                alt="Three colleagues discussing a document"
                className="object-cover rounded-full w-90 h-90"
                height="300"
                src="https://storage.googleapis.com/a1aa/image/j5WfOsLUduf6RNUCL-CLwKITfM5PWLM_ODmtONWMx3I.jpg"
                width="300"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border-8 border-blue-500 rounded-full w-90 h-90"></div>
              </div>
            </div>
          </div>
        </div>

        {/* WHO WE ARE Section */}
        <div className="mb-8 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-2xl font-bold">WHO WE ARE</h2>
          <p className="mb-6 text-lg">Best For IT Solutions &amp; Outsourcing</p>
          <p className="mb-6 text-lg">
            Empowered by over the years of experience, our pioneering vision of reshaping businesses for the digital era is now making a mark in the IT industry. We provide services in cloud-based custom software development, SAAS-based products, and mobile application development. We design and deliver the best-in-class solutions and stand on our commitments by going one extra mile to meet our client needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 mb-12 ml-10 md:grid-cols-2">
          {/* Service Card 1 */}
          <div className="flex items-start" data-aos="fade-right">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/09.svg" alt="Open PTO" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">Open PTO & Paid Holidays</h6>
              <p className="text-gray-600">(Because everyone deserves a vacation)</p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="flex items-start" data-aos="fade-right" data-aos-delay="200">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/10.svg" alt="Full Benefits" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">Full Benefits</h6>
              <p className="text-gray-600">Medical, dental, vision, life, disability, etc.</p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="flex items-start" data-aos="fade-left" data-aos-delay="400">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/11.svg" alt="Wellness Reimbursement" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">Wellness Reimbursement</h6>
              <p className="text-gray-600">To live your best life</p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="flex items-start" data-aos="fade-left" data-aos-delay="600">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/11.svg" alt="Monthly Happy Hours" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">Monthly Happy Hours</h6>
              <p className="text-gray-600">Company-wide lunches and snacks provided</p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="flex items-start" data-aos="fade-right" data-aos-delay="800">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/12.svg" alt="Career Growth" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">Career Growth</h6>
              <p className="text-gray-600">We don’t like being stagnant.</p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="flex items-start" data-aos="fade-right" data-aos-delay="1000">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
              <img src="https://avantis-technologies.com/assets/images/service/icon/11.svg" alt="401k Plan with Matching" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h6 className="text-xl font-bold">401k Plan with Matching</h6>
              <p className="text-gray-600">So you can retire one day</p>
            </div>
          </div>
        </div>
      </div>
      <CareersPage />
    </div>
  );
};

export default Joinourteam;
