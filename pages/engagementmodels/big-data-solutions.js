
import { FaDatabase, FaChartLine, FaCogs, FaShieldAlt, FaCloudUploadAlt, FaUsers } from 'react-icons/fa'; // React icons

const BigData= () => {
  // Features of CMS data
  const features = [
    {
      icon: <FaDatabase className="text-4xl text-blue-900" />,
      title: "Multi-channel & Collaborative",
      description: "Address both technical and business objectives with seamless integration.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-900" />,
      title: "Data-Driven Insights",
      description: "Capture, interpret, and store data to develop rewarding business strategies.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-900" />,
      title: "Integration Flexibility",
      description: "Integrate with social media, portals, e-commerce, and more.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-900" />,
      title: "Security & Access Control",
      description: "Role-based access, encryption, and granular user permissions.",
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-blue-900" />,
      title: "Content Management",
      description: "Support for video, text, blogs, podcasts, and more.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-900" />,
      title: "User Collaboration",
      description: "Enable seamless collaboration across teams and departments.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Big Data Solutions for Your Business</h1>
          <p className="text-lg">
            Transform your data into actionable insights with our cutting-edge Big Data technologies.
          </p>
        </div>
      </header>

      {/* Transform Data to Insights Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Transform Data To Insights</h2>
              <p className="text-gray-700 mb-4">
                The current business imperative is not just to make decisions more data-driven but to make them at a fast clip in response to changing marketplace dynamics. Traditional systems by themselves are inadequate to cost-effectively process the surging volumes of hybrid data and serve the complex analytics requirements of modern-day businesses.
              </p>
              <p className="text-gray-700">
                From interactive data processing and machine learning to visualization, the analytics ecosystem is fast evolving along with advances in the software ecosystem. Channel our expertise in big data to shape your technology decisions and build scalable, fault-tolerant big data solutions.
              </p>
            </div>
            <div>
              {/* Replace with Unsplash image URL */}
              <img 
                src="https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnZGF0YXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Big Data Solutions" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features of CMS Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Features Of CMS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
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

export default BigData;
