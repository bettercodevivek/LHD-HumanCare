import React from 'react';

const Vision = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey, values, and the passionate team behind our success.
        </p>
      </div>

      {/* Founders Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Founder 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Founder 1"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">Co-Founder & CEO</p>
          <p className="mt-4 text-center text-gray-700">
            "Our mission is to bring innovative solutions that make a real difference in people's lives. We believe in the power of technology to transform industries and improve the world."
          </p>
        </div>

        {/* Founder 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Founder 2"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Jane Smith</h2>
          <p className="text-gray-600 mt-2">Co-Founder & CTO</p>
          <p className="mt-4 text-center text-gray-700">
            "We are committed to driving change through creativity and innovation. Every product we develop is a step towards a brighter, more connected future."
          </p>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are driven by integrity, innovation, and a commitment to excellence. Our values guide our actions and shape the culture of our company.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
            <p className="mt-2 text-gray-600">
              We uphold the highest standards of integrity in all of our actions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            <p className="mt-2 text-gray-600">
              We constantly pursue new ideas and embrace change to drive progress.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Excellence</h3>
            <p className="mt-2 text-gray-600">
              We strive for excellence in everything we do, from our products to our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
