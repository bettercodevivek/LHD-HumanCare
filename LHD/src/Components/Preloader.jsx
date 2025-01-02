import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className=" animate-fadeIn transition duration-1000 ease-in-out rounded-full h-64 w-64">
        <img className="logo" src="https://i.postimg.cc/g0yy2fsy/HD-LHD-page-0001-removebg-preview.png" alt="Loading Logo" />
      </div>
    </div>
  );
};

export default Preloader;
