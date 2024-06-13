// ProductsPage.js

import React from 'react';

const productsList = [
  {
    id: 1,
    name: 'Product A',
    imageSrc: '/product-a.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Product B',
    imageSrc: '/product-b.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Product C',
    imageSrc: '/product-c.jpg', // Replace with actual image path
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
