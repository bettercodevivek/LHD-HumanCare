import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productCategories = {
  Neurology: [
    { id: 1, title: 'Paxtin-Plus', imageUrl: 'https://i.postimg.cc/hPYJ20d8/IMGL9766.jpg' },
    { id: 2, title: 'Welpose-TF', imageUrl: 'https://i.postimg.cc/pXrhQSpX/IMGL9842.jpg' },
    { id: 3, title: 'Valpolit CR-500', imageUrl: 'https://i.postimg.cc/j2gW0Hkb/IMGL9854.jpg' },
    { id: 4, title: 'Penotin-GB', imageUrl: 'https://i.postimg.cc/NGp2HtGz/IMGL9864.jpg' },
    { id: 5, title: 'Ceribro', imageUrl: 'https://i.postimg.cc/Z5yW2y8G/IMGL9910.jpg' },
    { id: 6, title: 'Sarval-500', imageUrl: 'https://i.postimg.cc/CKTRgLJz/IMGL9979.jpg' },
    // Add more products as needed
  ],
  Orthopaedics: [
    { id: 7, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/CLZDpKbV/IMGL9736.jpg' },
    { id: 8, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/Qd1TVn64/IMGL9875.jpg' },
    { id: 9, title: 'Sylibon-Gold', imageUrl: 'https://i.postimg.cc/sfHSLWQc/IMGL9922.jpg' },
    { id: 10, title: 'Penomol-P Syrup', imageUrl: 'https://i.postimg.cc/VvhCbyQT/IMGL9926.jpg' },
    { id: 11, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/DzhbGdH2/IMGL9970.jpg' },
    // Add more products as needed
  ],
  Gastroenterology: [
    { id: 12, title: 'Novel', imageUrl: 'https://via.placeholder.com/300' },
    { id: 13, title: 'Biography', imageUrl: 'https://via.placeholder.com/300' },
    // Add more products as needed
  ],
  // Add more categories and products as needed
};

const Products = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center mb-4 text-amber-500">Our Products</h1>

      {Object.entries(productCategories).map(([category, products]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-amber-500">{category}</h2>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-48 object-cover object-center" src={product.imageUrl} alt={product.title} />
                  <div className="p-4">
                    <p className="text-amber-500 text-lg font-semibold">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Products;
