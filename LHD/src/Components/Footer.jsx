import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative top-16 md:top-0 lg:top-0 bg-gradient-to-r from-orange-400 via-amber-500 to-amber-600 text-white py-8 mt-0">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src='https://i.postimg.cc/1tt2wSYZ/LHD-Human-Care-Logo-1.webp'
                        alt="Pharma Company Logo"
                        className="h-12 sm:h-16 shadow-xl hover:cursor-pointer rounded-lg mb-4 transform hover:scale-110 transition-transform duration-300"
                    />
                    <p className="text-sm sm:text-base text-black font-semibold text-center md:text-left">
                        Crafting Health, Shaping Future
                    </p>
                </div>

                {/* Contact Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient">Contact Us</h3>
                    <ul className="space-y-2 text-white">
                        <li>Email: <a href="mailto:lhdhumancare@gmail.com" className="hover:underline">lhdhumancare@gmail.com</a></li>
                        <li>Phone: <a href="tel:+917454800540" className="hover:underline">+91 7454800540</a></li>
                        <li>Phone: <a href="tel:+919068389292" className="hover:underline">+91 9068389292 </a></li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-gradient">Quick Links</h3>
                    <ul className="space-y-2 text-white">
                        <li><a href="/home" className="hover:underline">Home</a></li>
                        <li><a href="/vision" className="hover:underline">About Us</a></li>
                        <li><a href="/products" className="hover:underline">Our Products</a></li>
                        <li><a href="/profile" className="hover:underline">Corporate Profile</a></li>
                    </ul>
                </div>

                {/* Developer Credits Section */}
                <div className="text-center font-semibold md:text-left">
                    <p className="text-sm text-black">&copy; 2025 LHD Human Care. All rights reserved.</p>
                    <p className="text-sm text-black">
                        Designed & Developed by <a target='_blank' href="https://www.vevywebsolutions.online/" className="text-white hover:underline">Vevy Web Solutions</a>
                    </p>
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="text-center mt-12">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full transform hover:scale-105 transition-transform duration-300"
                >
                    Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
