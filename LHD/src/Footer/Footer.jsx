import React from 'react';

const Footer = () => {
  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Company Logo and Info */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0">
          <img src="/path/to/logo.png" alt="Company Logo" className="w-32 mb-4" />
          <p className="text-center md:text-left text-sm">
            Committed to improving lives through innovative pharmaceutical solutions.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <p className="text-sm">
            123 Health Street, Wellness City, 45678
          </p>
          <p className="text-sm">
            Email: <a href="mailto:info@pharma.com" className="hover:text-white transition-colors">info@pharma.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 234 567 890</a>
          </p>
        </div>
        
        {/* Developer Credit */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-lg font-semibold text-white">Website By</h2>
          <p className="text-sm">
            Designed and developed by <a href="https://developer-website.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Your Developer</a>
          </p>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="#facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#linkedin" className="text-gray-400 hover:text-blue-600 transition-colors">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      
      {/* Button to go to top */}
      <div className="mt-8 flex justify-center">
        <button 
          onClick={scrollToTop} 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Pharma Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
