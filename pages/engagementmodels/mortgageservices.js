
import { FaUserShield, FaChartLine, FaCogs, FaHandshake, FaClipboardCheck, FaRobot } from 'react-icons/fa'; // React icons

const MortgageServices = () => {
  // What We Offer data
  const services = [
    {
      icon: <FaUserShield className="text-4xl text-blue-900" />,
      title: "Live Underwriting Services",
      description: "Evaluate insurance applications in real-time using digital platforms.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-900" />,
      title: "Post Closing Underwriting",
      description: "Mitigate risks by identifying and addressing issues post-closing.",
    },
    {
      icon: <FaCogs className="text-4xl text-blue-900" />,
      title: "Loan Origination & Servicing",
      description: "Manage the lifecycle of loans from origination to servicing.",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-900" />,
      title: "Administrative Support",
      description: "Provide administrative services throughout the mortgage process.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-blue-900" />,
      title: "Lead Generation",
      description: "Identify and attract potential borrowers for mortgage loans.",
    },
    {
      icon: <FaRobot className="text-4xl text-blue-900" />,
      title: "Process Automation",
      description: "Streamline and optimize the mortgage loan lifecycle with technology.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Mortgage Services for Your Business</h1>
          <p className="text-lg">
            Delivering comprehensive, technology-driven solutions for mortgage servicing and offshore services.
          </p>
        </div>
      </header>

      {/* Committed to Client Success Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Committed to Client Success</h2>
              <p className="text-gray-700 mb-4">
                We are a business process transformation enterprise delivering comprehensive solutions driven by technology for mortgage servicing and offshore services. We offer cost-effective, quick turnaround, and quality-driven solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Our team comprises industry experts with in-depth knowledge and experience working with top-tier origination and servicing companies. Our management team is certified by the Mortgage Bankers Association’s education arm in servicing and origination.
              </p>
              <p className="text-gray-700">
                We understand compliance with regulatory requirements is crucial, so we perform quality checks throughout the various processes to ensure our work improves the quality of the loans we service.
              </p>
            </div>
            <div>
              {/* Replace with new Mortgage image */}
              <img 
                src="https://avantis-technologies.com/assets/images/service/mortgage1.jpg" 
                alt="Pilot Services" 
                className="rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Mortgage Services</h2>
          <p className="text-gray-700 text-center mb-8">
            We offer end-to-end mortgage servicing solutions, including Pre-Underwriting, Post-Underwriting, Post-Closing QC, Loan Onboarding, Escrow Set Up, Tax Research, Lien Release, Skip Tracing, Property Preservation, Appraisal Services, Loss Mitigation, and REO Services.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What We Offer</h2>
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

export default MortgageServices;
