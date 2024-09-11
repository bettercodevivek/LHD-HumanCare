import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className=" animate-fadeIn transition duration-1000 ease-in-out rounded-full h-32 w-32">
        <img className="logo" src="https://i.postimg.cc/5yzJFyrz/LHD-Human-Care-Logo-1-removebg-preview.png" alt="Loading Logo" />
      </div>
    </div>
  );
};

export default Preloader;
