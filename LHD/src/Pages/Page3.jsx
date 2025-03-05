import React from 'react';
import { FaBrain, FaLungs, FaBone, FaFemale, FaPills, FaStethoscope } from 'react-icons/fa';

const Page3 = () => {
  const brands = [
    { title: 'Neurology', icon: <FaBrain size={40} />, color: 'bg-blue-100', textColor: 'text-blue-800', description: 'Advanced care for brain and nervous system disorders.', link: '/products' },
    { title: 'Hepatology', icon: <FaPills size={40} />, color: 'bg-red-100', textColor: 'text-red-800', description: 'Specialized treatments for liver health and diseases.', link: '/products' },
    { title: 'Gastroenterology', icon: <FaStethoscope size={40} />, color: 'bg-green-100', textColor: 'text-green-800', description: 'Comprehensive care for digestive system disorders.', link: '/products' },
    { title: 'Gynaecology', icon: <FaFemale size={40} />, color: 'bg-yellow-100', textColor: 'text-yellow-800', description: 'Expert solutions for women’s reproductive health.', link: '/products' },
    { title: 'Orthopaedics', icon: <FaBone size={40} />, color: 'bg-purple-100', textColor: 'text-purple-800', description: 'Innovative treatments for bone and joint care.', link: '/products' },
    { title: 'Respiratory', icon: <FaLungs size={40} />, color: 'bg-orange-100', textColor: 'text-orange-800', description: 'Advanced therapies for lung and respiratory care.', link: '/products' },
  ];

  return (
    <div className="container mx-auto py-12 px-6 mt-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Strong, Focused Portfolio of Brands Catering to
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 flex flex-col items-center text-center ${brand.color}`}
          >
            <div className={`p-4 rounded-full ${brand.textColor}`}>{brand.icon}</div>
            <h2 className={`text-2xl font-semibold mt-4 ${brand.textColor}`}>{brand.title}</h2>
            <p className="text-gray-700 mt-2 text-sm">{brand.description}</p>
            <a
              href={brand.link}
              className="mt-4 inline-block bg-amber-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-amber-600 transition"
            >
              Explore Products
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
