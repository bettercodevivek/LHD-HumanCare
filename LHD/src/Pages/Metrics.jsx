import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaBox, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Metrics = () => {
  return (
    <div className="flex flex-col mt-12 items-center justify-center min-h-screen bg-white text-white p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
      >
        Our Achievements
      </motion.h1>
      
      <div className="relative w-full max-w-md sm:max-w-4xl flex flex-wrap justify-center gap-6">
        {[ 
          { icon: <FaClock size={40} />, value: 17, label: "Years of Experience" },
          { icon: <FaUsers size={40} />, value: 10000, label: "Active Clients" },
          { icon: <FaBox size={40} />, value: 150, label: "Products" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="relative bg-gray-800 p-6 rounded-2xl shadow-2xl text-center flex flex-col items-center space-y-4 transform hover:scale-105 transition duration-300 w-72"
          >
            <div className="text-amber-500 animate-pulse">{item.icon}</div>
            <span className="text-4xl font-bold">
              <CountUp end={item.value} delay={1} />+
            </span>
            <p className="text-gray-300 text-lg">{item.label}</p>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-ping"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
