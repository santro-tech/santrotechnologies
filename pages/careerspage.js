import  { useState } from 'react';

const CareersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowPopup(true);
  };

  const jobOpenings = [
    {
      title: 'DevOps Engineer',
      description: `We are looking for a skilled DevOps Engineer with 4+ years of experience to join our engineering team.

**Roles and Responsibilities:**
- Design, implement, and manage CI/CD pipelines and infrastructure.
- Collaborate with development teams to ensure application scalability and availability.
- Monitor system performance and troubleshoot issues proactively.
- Automate repetitive tasks using scripts and configuration management tools.

**Required Skills:**
- Experience with AWS, Docker, Kubernetes, Jenkins, Git.
- Strong knowledge of Linux/Unix systems and shell scripting.
- Familiarity with monitoring tools (e.g., Prometheus, Grafana).
- Excellent problem-solving and communication skills.`,
      type: 'Full-Time',
      location: 'Bengaluru',
    },
    {
      title: 'Java Developer',
      description: `We are hiring a seasoned Java Developer with 6+ years of experience to build scalable backend applications.

**Roles and Responsibilities:**
- Design, develop, and maintain enterprise-grade Java applications.
- Build RESTful APIs and microservices architecture.
- Perform code reviews, debugging, and performance tuning.
- Collaborate with cross-functional teams to deliver business outcomes.

**Required Skills:**
- Proficiency in Core Java, Spring Boot, Hibernate, and REST APIs.
- Experience with databases like MySQL, PostgreSQL.
- Familiarity with tools like Maven, Git, and Jenkins.
- Solid understanding of software development lifecycle (SDLC).`,
      type: 'Full-Time',
      location: 'Hyderabad',
    },
    {
      title: 'Frontend Developer',
      description: `We are looking for a Frontend Developer with 4+ years of experience in building responsive and dynamic web interfaces.

**Roles and Responsibilities:**
- Develop new user-facing features using modern frontend frameworks.
- Optimize components for maximum performance across devices.
- Collaborate with designers and backend developers for smooth UX/UI integration.
- Maintain and improve existing front-end codebases.

**Required Skills:**
- Strong proficiency in HTML, CSS, JavaScript.
- Hands-on experience with React.js (Angular or Vue.js is a plus).
- Understanding of responsive design and browser compatibility.
- Familiarity with version control tools like Git.`,
      type: 'Full-Time',
      location: 'Bengaluru',
    },
    {
      title: 'Scrum Master',
      description: `We are seeking a certified Scrum Master with 8+ years of agile project experience to lead agile teams effectively.

**Roles and Responsibilities:**
- Guide agile teams to follow Scrum practices and values.
- Facilitate all Scrum ceremonies (stand-ups, sprint planning, reviews, retrospectives).
- Remove impediments and shield the team from external distractions.
- Work closely with product owners to groom and prioritize the backlog.

**Required Skills:**
- Strong understanding of Agile/Scrum methodologies.
- Excellent facilitation and coaching skills.
- Experience using tools like Jira, Confluence.
- Certified Scrum Master (CSM) or equivalent certification preferred.`,
      type: 'Full-Time',
      location: 'Bengaluru',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Job Openings Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"> JOB OPENINGS</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4" style={{ whiteSpace: 'pre-line' }}>{job.description}</p>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
                <span className="text-gray-600">{job.location}</span>
              </div>
              <button
                onClick={() => handleApplyClick(job.title)}
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Apply for {selectedJob}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Upload Resume</label>
                <input
                  type="file"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Thank You for Applying!</h3>
            <p className="text-gray-600 mb-4">
              We have received your application and will get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
