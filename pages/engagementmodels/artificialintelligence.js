
import { FaRobot, FaChartLine, FaCogs, FaUsers } from 'react-icons/fa'; // For icons

const ArtificialIntelligence = () => {
  // Advantages data
  const advantages = [
    {
      icon: <FaRobot className="text-4xl text-blue-900" />,
      title: "Improved Productivity",
      description: "Automate routine tasks to focus on strategic decisions.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-900" />,
      title: "Data-Driven Decisions",
      description: "Leverage AI to analyze data and make informed decisions.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-900" />,
      title: "Efficient Workflow",
      description: "Streamline processes for better efficiency.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-900" />,
      title: "Enhanced Customer Experience",
      description: "Use AI to improve customer interactions.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">AI & ML Solutions for Your Business</h1>
          <p className="text-lg">
            Empowering businesses with cutting-edge artificial intelligence and machine learning technologies.
          </p>
        </div>
      </header>

      {/* About AI & ML Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What Is AI And ML?</h2>
              <p className="text-gray-700 mb-4">
                Artificial intelligence (AI) and machine learning (ML) used to be terms thrown around in science fiction movies. But they aren’t science fiction anymore. They’re real functions that automate processes and can be incorporated into everyday life.
              </p>
              <p className="text-gray-700 mb-4">
                When used in a business setting, AI and ML can improve efficiencies and help you make better data-driven decisions so your business can grow and become more profitable.
              </p>
              <p className="text-gray-700">
                We are an AI company that specializes in business solutions. We simplify AI by focusing on how computers can make autonomous decisions based on data they derive from statistical models.
              </p>
            </div>
            <div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D%3D" 
                alt="AI and ML" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Advantages Of AI And ML In Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
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

export default ArtificialIntelligence;
