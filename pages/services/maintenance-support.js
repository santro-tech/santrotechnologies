import { BeakerIcon, ShieldCheckIcon, ClockIcon, LifebuoyIcon } from '@heroicons/react/24/outline';

const MaintenanceSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Maintenance & Support Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Ensuring your software's peak performance with 24/7 expert support
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Proactive Maintenance</h3>
            <p className="text-gray-600">
              Average system accessibility of 99.8% with minimized downtime
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <ClockIcon className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock developer resources and user support
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <LifebuoyIcon className="h-12 w-12 text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Assistance</h3>
            <p className="text-gray-600">
              Immediate response to emerging issues and user queries
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              {/* Replaced with actual maintenance image */}
              <img
                src="https://avantis-technologies.com/assets/images/service/maintance.jpg"
                alt="Maintenance Support"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">
                Comprehensive Software Maintenance
              </h2>
              <p className="text-gray-600 mb-6">
                Our support & maintenance model ensures full-time availability and secured access, 
                allowing you to focus on core business activities while we handle:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">✓</span>
                  Legacy system enhancements & modernization
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">✓</span>
                  Critical issue resolution & troubleshooting
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">✓</span>
                  Performance optimization & cost analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Flexible Support Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: 'Basic', response: 'Next Business Day', color: 'blue' },
              { title: 'Standard', response: 'Same Day', color: 'purple' },
              { title: 'Premium', response: '24/7 Immediate', color: 'teal' },
            ].map((plan) => (
              <div key={plan.title} className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-${plan.color}-500`}>
                <h3 className={`text-2xl font-bold text-${plan.color}-600 mb-4`}>{plan.title}</h3>
                <p className="text-gray-600 mb-2">Response Time:</p>
                <p className="text-2xl font-semibold text-gray-800 mb-6">{plan.response}</p>
                <button className={`w-full py-3 bg-${plan.color}-600 text-white rounded-lg hover:bg-${plan.color}-700 transition-colors`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Stress-Free Software Maintenance?
          </h2>
          <p className="text-xl mb-8">
            Let us handle your technical support while you focus on growth
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors">
            Start Maintenance Agreement
          </button>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceSupport;
