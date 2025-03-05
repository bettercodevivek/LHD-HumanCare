import React from "react";
import { FaExternalLinkAlt, FaCapsules, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const OneMgPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 mt-8">
      
      <div className="w-24 h-24 md:w-48 mb-0">
        <img 
          src="https://i.postimg.cc/65RM89XS/idy-Rc-GN25-D-logos.png" 
          alt="1mg Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">Explore Our Products on TATA 1mg</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center w-full max-w-3xl">
        <p className="text-sm sm:text-lg text-gray-700 mb-4">
          Browse our wide range of high-quality pharmaceutical products on 1mg. 
          Click the button below to visit our store and order your required medicines with ease.
        </p>
        <a 
          href="https://www.1mg.com/marketer/l.h.d-human-care-91517" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Visit Our 1mg Store <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 w-full max-w-5xl">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaCapsules size={36} sm:size={48} className="text-green-500 mb-2 sm:mb-3" />
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Quality Medicines</h2>
          <p className="text-gray-600 text-sm sm:text-base">We provide certified and trusted medicines to ensure better healthcare.</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaPhoneAlt size={36} sm:size={48} className="text-blue-500 mb-2 sm:mb-3" />
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Customer Support</h2>
          <p className="text-gray-600 text-sm sm:text-base">Our team is available 24/7 to assist you with your queries.</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaMapMarkerAlt size={36} sm:size={48} className="text-amber-500 mb-2 sm:mb-3" />
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Find Us</h2>
          <p className="text-gray-600 text-sm sm:text-base">Visit our physical stores for in-person assistance and services.</p>
        </div>
      </div>
      
      {/* <div className="mt-8">
        <Link to="/" className="text-blue-600 text-sm sm:text-lg font-semibold hover:underline">
          ← Back to Home
        </Link>
      </div> */}
    </div>
  );
};

export default OneMgPage;
