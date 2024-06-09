import React from 'react';

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <div className="flex items-center mb-4">
                            <img src="pharma-logo.png" alt="Pharma Logo" className="w-12" />
                            <div className="ml-2">
                                <p className="text-gray-800">123 Pharma Street</p>
                                <p className="text-gray-800">Pharma City, PC 12345</p>
                                <p className="text-gray-800">Phone: 123-456-7890</p>
                                <p className="text-gray-800">Email: info@pharmawebsite.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="text-gray-800">
                            <li className="mb-2"><a href="#" className="hover:text-blue-600">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-600">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-600">Products</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-600">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <button onClick={goToTop} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Back to Top</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
