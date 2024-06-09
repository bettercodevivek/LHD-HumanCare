import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="text-sm">
            With 46 years of unwavering dedication, we have established ourselves as a trusted leader in the pharmaceutical industry. Our journey reflects a legacy of excellence and a future dedicated to enhancing health and improving lives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm">
            123 Health Street, Wellness City, 45678
          </p>
          <p className="text-sm">
            Email: <a href="mailto:info@pharma.com" className="hover:underline">info@pharma.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
          </p>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <a href="#facebook" className="mx-2 text-white hover:text-blue-400">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#twitter" className="mx-2 text-white hover:text-blue-300">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#linkedin" className="mx-2 text-white hover:text-blue-500">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm">
        <p>&copy; 2024 Pharma Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
