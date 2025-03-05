import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaBox, FaClock } from "react-icons/fa";

const Metrics = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Our Achievements</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaClock size={36} sm:size={48} className="text-amber-600 mb-2 sm:mb-3" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-800"><CountUp end={17} delay={1} /></span>
          <p className="text-gray-600 text-sm sm:text-lg">Years of Experience</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaUsers size={36} sm:size={48} className="text-amber-600 mb-2 sm:mb-3" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-800"><CountUp end={10000} delay={1} />+</span>
          <p className="text-gray-600 text-sm sm:text-lg">Active Clients</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaBox size={36} sm:size={48} className="text-amber-600 mb-2 sm:mb-3" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-800"><CountUp end={150} delay={1} />+</span>
          <p className="text-gray-600 text-sm sm:text-lg">Products</p>
        </div>
        {/* <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl text-center flex flex-col items-center">
          <FaBox size={36} sm:size={48} className="text-amber-600 mb-2 sm:mb-3" />
          <span className="text-2xl sm:text-3xl font-bold text-gray-800"><CountUp end={150} delay={1} />+</span>
          <p className="text-gray-600 text-sm sm:text-lg">Products</p>
        </div> */}
      </div>
    </div>
  );
};

export default Metrics;
