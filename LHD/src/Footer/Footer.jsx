import React from 'react';

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-blue-900 text-gray-200 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
                    <div>
                        <img src="pharma-logo.png" alt="Company Logo" className="w-20 mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Address</h3>
                        <p>123 Pharma Street</p>
                        <p>Pharma City, PC 12345</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@pharmawebsite.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Products</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <div className="text-sm">&copy; 2024 Pharma Website. All rights reserved.</div>
                    <div className="text-sm">Developed with ❤️ by Your Name</div>
                    <button onClick={goToTop} className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">Back to Top</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

