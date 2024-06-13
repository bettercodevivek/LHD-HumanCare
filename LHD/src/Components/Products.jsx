import React from 'react';

const Products = () => {
  // Sample data for products
  const sections = [
    {
      id: 1,
      title: 'Electronics',
      products: [
        { id: 1, name: 'Laptop', image: 'https://via.placeholder.com/300' },
        { id: 2, name: 'Smartphone', image: 'https://via.placeholder.com/300' },
        // Add more products as needed
      ],
    },
    {
      id: 2,
      title: 'Clothing',
      products: [
        { id: 3, name: 'T-Shirt', image: 'https://via.placeholder.com/300' },
        { id: 4, name: 'Jeans', image: 'https://via.placeholder.com/300' },
        // Add more products as needed
      ],
    },
    // Add more sections as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      {sections.map((section) => (
        <section key={section.id} className="py-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.products.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
                <p className="text-gray-800 font-semibold">{product.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
