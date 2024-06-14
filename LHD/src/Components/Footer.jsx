import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative top-16 md:top-0 lg:top-0 bg-gradient-to-r from-orange-600 via-amber-700 to-amber-600 text-white py-8 mt-8">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src='https://i.postimg.cc/5Nkv8M1p/LHD-Human-Care-Logo.png'
                        alt="Pharma Company Logo"
                        className="h-12 sm:h-16 rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-sm sm:text-base text-gray-400 text-center md:text-left">
                        Pioneering healthcare solutions for a better future.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient">Contact Us</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>Email: <a href="mailto:lhdhumancare@gmail.com" className="hover:text-white">lhdhumancare@gmail.com</a></li>
                        <li>Phone: <a href="tel:+917310916525" className="hover:text-white">+91 7310916525</a></li>
                        <li>Phone: <a href="tel:+919837559026" className="hover:text-white">+91 9837559026</a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Products</a></li>
                        <li><a href="#" className="hover:text-white">Corporate Profile</a></li>
                        <li><a href="#" className="hover:text-white">Career with us</a></li>
                    </ul>
                </div>

                {/* Developer Credits Section */}
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-400">&copy; 2024 LHD Human Care. All rights reserved.</p>
                    <p className="text-sm text-gray-400">
                        Designed & Developed by <a target='_blank' href="https://www.linkedin.com/in/vivek-singh-77849329a/" className="text-gradient hover:underline">BetterCodeVivek</a>
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-center mt-12">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full transform hover:scale-105 transition-transform duration-300"
                >
                    Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
