import React from 'react';
import { FaCogs, FaSyncAlt, FaShieldAlt, FaUsers, FaChartLine, FaTools } from 'react-icons/fa'; // React icons

const Devops = () => {
  // DevOps As A Service data
  const services = [
    {
      icon: <FaCogs className="text-4xl text-blue-900" />,
      title: "Strategy & Roadmap",
      description: "Set expectations, evaluate existing systems, and strategize a roadmap.",
    },
    {
      icon: <FaSyncAlt className="text-4xl text-blue-900" />,
      title: "Collaboration",
      description: "Ensure close collaboration between development and operations teams.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-900" />,
      title: "Security",
      description: "Integrate security into the DevOps pipeline for robust protection.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-900" />,
      title: "Culture",
      description: "Foster a culture of shared responsibility and continuous improvement.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-900" />,
      title: "Automation",
      description: "Automate processes to reduce errors and accelerate delivery.",
    },
    {
      icon: <FaTools className="text-4xl text-blue-900" />,
      title: "Testing",
      description: "Identify and test potential risks through automated testing.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">DevOps Services for Your Business</h1>
          <p className="text-lg">
            Accelerate time-to-market, increase efficiency, and add value with our state-of-the-art DevOps solutions.
          </p>
        </div>
      </header>

      {/* DevOps Consulting & DevOps as a Service Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">DevOps Consulting & DevOps as a Service</h2>
              <p className="text-gray-700 mb-4">
              Santrotech Software Technologies offers state-of-the-art DevOps services to assist organizations in adopting DevOps using the right approach. Our DevOps offerings include end-to-end, automated practices that bridge the gap between development and operations.
              </p>
              <p className="text-gray-700">
                As a DevOps service provider, we aim to accelerate time-to-market, increase efficiency, and add value to your organization by following standard practices.
              </p>
            </div>
            <div>
              {/* Replace with the provided DevSecOps image */}
              <img 
                src="https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2b3BzfGVufDB8fDB8fHww" 
                alt="DevSecOps Services" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overcome Legacy Systems Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Overcome The Challenges of Legacy Systems</h2>
          <p className="text-gray-700 mb-4">
            DevOps is an approach to overcome the challenges of today’s business. Organizations must leverage these concepts to eliminate long app development cycles and legacy processes to gain a competitive edge.
          </p>
        </div>
      </section>

      {/* What Is DevOps? Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">What Is DevOps? Why Do Enterprises Need To Adopt It?</h2>
          <p className="text-gray-700 mb-4">
            DevOps is an approach to bridge the gap between ‘Development’ and ‘Operations’. It is an engineering culture that aims to combine software development and operations, strengthening better collaboration and communication among teams.
          </p>
        </div>
      </section>

      {/* DevOps As A Service Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">DevOps As A Service: 5 Cs To Streamline IT Processes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Devops;
