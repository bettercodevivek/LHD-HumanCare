import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12 mt-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img src='src/assets/LHD Human Care Logo.png' alt="Pharma Company Logo" className="h-16 rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm text-gray-400">
                        Pioneering healthcare solutions for a better future.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient">Contact Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Email: <a href="mailto:lhdhumancare@gmail.com" className="hover:text-white">lhdhumancare@gmail.com</a></li>
                        <li>Phone: <a href="tel:+12345678901" className="hover:text-white">+1-234-567-8901</a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient ">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Products</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Developer Credits Section */}
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-400">&copy; 2024 PharmaCo. All rights reserved.</p>
                    <p className="text-sm text-gray-400"> Designed & Developed by <a target='_blank' href="https://www.linkedin.com/in/vivek-singh-77849329a/" className="text-gradient  hover:underline">BetterCodeVivek</a></p>
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-center mt-12">
                <button
                    onClick={scrollToTop}
                    className=" hover:to-blue-500 text-white py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-300"
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
