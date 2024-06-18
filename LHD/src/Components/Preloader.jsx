import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Preloader;
