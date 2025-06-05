
import { FaCode, FaCloud, FaMobileAlt, FaCogs, FaShieldAlt, FaSyncAlt } from 'react-icons/fa'; // React icons

const Asp = () => {
  // Why ASP.NET Core Development data
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-900" />,
      title: "Cross-Platform Development",
      description: "Develop and run apps on Windows, macOS, and Linux.",
    },
    {
      icon: <FaCloud className="text-4xl text-blue-900" />,
      title: "Cloud-Enabled Apps",
      description: "Build scalable and modern cloud-enabled applications.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-900" />,
      title: "Mobile Backends",
      description: "Create high-quality mobile backends with ease.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-900" />,
      title: "MVC Pattern",
      description: "Faster coding and testing with the MVC architecture.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-900" />,
      title: "Secure Validation",
      description: "Built-in client-side and server-side validation.",
    },
    {
      icon: <FaSyncAlt className="text-4xl text-blue-900" />,
      title: "Easy Migration",
      description: "Migrate from ASP.NET to .NET Core seamlessly.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-pink-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">ASP.NET Development Services</h1>
          <p className="text-lg">
            Build modern, scalable, and high-performance web applications with our expert ASP.NET Core development team.
          </p>
        </div>
      </header>

      {/* ASP.NET Core Development Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">ASP.NET Core Development</h2>
              <p className="text-gray-700 mb-4">
                We have a team of Microsoft experts who have been helping enterprises to expand their businesses using technology for almost 30 years now. Microsoft’s ASP.NET Core is a cross-platform, open-source framework for building modern, cloud-enabled, and IoT-based web apps.
              </p>
              <p className="text-gray-700 mb-4">
                By leveraging Microsoft’s dominance in creating superior web apps, our skillful professionals deliver customized .NET web development solutions using versatile, cross-platform, and modern .NET Core framework.
              </p>
              <p className="text-gray-700">
                ASP.NET Core is a unified version of ASP.NET MVC and ASP.NET Web API, making it easier to design, develop, and deploy software at high velocity and maximum efficiency.
              </p>
            </div>
            <div>
              {/* Replace with new Unsplash image */}
              <img 
                src="https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZXMlMjAubmV0fGVufDB8fDB8fHww" 
                alt="ASP.NET Development" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why ASP.NET Core Development Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Why ASP.NET Core Development?</h2>
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

      {/* Migration Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">ASP.NET To .NET Core Migration – A Necessary Switch</h2>
          <p className="text-gray-700 mb-4">
            With the more stable and advanced release of the .NET Core framework, it is the right time to migrate from ASP.NET to ASP.NET Core platform to get benefits of cross-platform and higher performance.
          </p>
          <p className="text-gray-700">
            ASP.NET Core framework is compatible with the .NET framework and offers great flexibility to choose from, but migrating to .NET Core gives extra benefits of performance, cross-platform nature, and modern deployment options.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Asp;
