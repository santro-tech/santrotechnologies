'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/assets/LOGO.jpg';

// Same TopSection component as before
const TopSection = () => (
  <div className="py-2 text-white bg-blue-500">
    <div className="flex flex-wrap items-center justify-center gap-4 px-4 mx-auto max-w-7xl sm:justify-evenly">
      <span>📍Bengaluru</span>
      <span> ✉ info@santro-tech.com</span>
      <span> 📞 Phone: +91 6304403019</span>
    </div>
  </div>
);

const NavbarWithTopSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopSectionVisible, setIsTopSectionVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const servicesItems = [
    { title: 'Web Application Development', href: '/services/web-application-development' },
    { title: 'Mobile Application Development', href: '/services/mobile-application-development' },
    { title: 'UI & UX Design', href: '/services/ui-ux-design' },
    { title: 'Product Development', href: '/services/product-development' },
    { title: 'IT Consulting & Outsourcing', href: '/services/it-consulting' },
    { title: 'Maintenance & Support Services', href: '/services/maintenance-support' },
  ];

  const aboutItems = [
    { title: 'About', href: '/about' },
    { title: 'Join Our Team', href: '/join-our-team' },
  ];

  const techExpertiseItems = [
    { title: 'CRM Solutions', href: '/technologyexpertise/crm-solutions' },
    { title: 'Embedded Solutions', href: '/technologyexpertise/embedded' },
    { title: 'ERP Implementation', href: '/technologyexpertise/erpimplementation' },
    
    { title: 'Oracle Implementation', href: '/technologyexpertise/oracle-implementation' },
    
  
  ];

  const engagementModelsItems = [
    { title: 'Ecommerce', href: '/engagementmodels/ecommerce' },
    { title: 'Social Networking', href: '/engagementmodels/socialnetworking' },
  , { title: 'Artificial Intelligence', href: '/engagementmodels/artificialintelligence' },
  { title: 'Big Data Solutions', href: '/engagementmodels/big-data-solutions' },
  { title: 'ASP.NET Core Development', href: '/engagementmodels/asp' },
  { title: 'Mortgage Services', href: '/engagementmodels/mortgageservices' },
  { title:'DevSecOps Consulting & Services', href: '/engagementmodels/devops' },
    
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTopSectionVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const Dropdown = ({ title, items, basePath }) => (
    <div className="relative group">
      <button className="flex items-center text-black hover:text-blue-600">
        {title}
        <DownArrow />
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-4 min-w-[250px] z-50 space-y-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={typeof item === 'string' ? `${basePath}/${item.toLowerCase().replace(/\s+/g, '-')}` : item.href}
            className="block px-4 py-2 text-gray-700 rounded-md hover:bg-blue-500 whitespace-nowrap"
          >
            {typeof item === 'string' ? item : item.title}
          </Link>
        ))}
      </div>
    </div>
  );

  const MobileDropdown = ({ title, items, open, setOpen, basePath }) => (
    <div className="px-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600"
      >
        {title}
        <DownArrow rotate={open} />
      </button>
      {open && (
        <div className="pl-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={typeof item === 'string' ? `${basePath}/${item.toLowerCase().replace(/\s+/g, '-')}` : item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              {typeof item === 'string' ? item : item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className={`transition-transform duration-300 ${isTopSectionVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <TopSection />
      </div>

      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-40">
              <Image src={logo} alt="logo" className="mr-40 min-w-14 min-h-12" />
            </div>

            <div className="items-center hidden space-x-8 lg:flex">
              <Link href="/" className="text-black hover:text-blue-600">HOME</Link>
              <Dropdown title="ABOUT" items={aboutItems} basePath="/about" />
              <Dropdown title="SERVICES" items={servicesItems} basePath="/services" />
              <Dropdown title="TECHNOLOGY EXPERTISE" items={techExpertiseItems} basePath="/technology-expertise" />
              <Dropdown title="ENGAGEMENT MODELS" items={engagementModelsItems} basePath="/engagement-models" />
              <Link href="/contact-us" className="text-black hover:text-blue-600">CONTACT US</Link>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-blue-600">
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="py-4 lg:hidden">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Home</Link>
              <MobileDropdown title="About" items={aboutItems} open={true} setOpen={() => {}} basePath="/about" />
              <MobileDropdown title="Services" items={servicesItems} open={true} setOpen={() => {}} basePath="/services" />
              <MobileDropdown title="Technology Expertise" items={techExpertiseItems} open={true} setOpen={() => {}} basePath="/technology-expertise" />
              <MobileDropdown title="Engagement Models" items={engagementModelsItems} open={true} setOpen={() => {}} basePath="/engagement-models" />
              <Link href="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Contact Us</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const DownArrow = ({ rotate }) => (
  <svg
    className={`w-4 h-4 ml-1 transition-transform ${rotate ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default NavbarWithTopSection;
