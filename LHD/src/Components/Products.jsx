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
    // Add more products as needed
  ],
  Orthopaedics: [
    { id: 9, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/FHT5vtq5/IMGL9875-min.jpg' },
    { id: 10, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/C13p2j2R/IMGL9736-min.jpg' },
    { id: 11, title: 'Sylibon-Gold', imageUrl: 'https://i.postimg.cc/FHr5wFTV/IMGL9922-min.jpg' },
    { id: 12, title: 'Penomol-P Syrup', imageUrl: 'https://i.postimg.cc/VLccBWMT/IMGL9926-min.jpg' },
    { id: 13, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/15c1WVrz/IMGL9970-min.jpg' },

    // Add more products as needed
  ],
  Gastroenterology: [
    { id: 17, title: 'Penlit-D', imageUrl: 'https://i.postimg.cc/4xB5V5V6/IMGL9791.jpg' },
    { id: 18, title: 'Zolit-RD', imageUrl: 'https://i.postimg.cc/6Qqh0vfD/IMGL9906.jpg' },
    { id: 19, title: 'Penlit-DSR', imageUrl: 'https://i.postimg.cc/zGJ7yMbD/IMGL9973.jpg' },
    { id: 20, title: 'Sathicon-140', imageUrl: 'https://i.postimg.cc/g2YNGxFr/IMGL0005.jpg' },
    { id: 21, title: 'Rentadin-300', imageUrl: 'https://i.postimg.cc/4xBwyXsP/IMGL0043.jpg' },
    // Add more products as needed
  ],
  AntiBiotics: [
    { id: 22, title: 'G-XL-250', imageUrl: 'https://i.postimg.cc/02SCYpxz/IMGL0019.jpg' },
    { id: 23, title: 'G-XL-500', imageUrl: 'https://i.postimg.cc/PfPyqgRz/IMGL0034.jpg' },
    { id: 24, title: 'Sinaxim-O', imageUrl: 'https://i.postimg.cc/c12mtDqq/IMGL0068.jpg' },
    { id: 25, title: 'Licsef-500', imageUrl: 'https://i.postimg.cc/Njwkp5fp/IMGL0106.jpg' },
    { id: 26, title: 'Emoxclav-625', imageUrl: 'https://i.postimg.cc/FHggqNYm/IMGL0110.jpg' },

    // Add more products as needed
  ],
  Hepatology: [
    { id: 31, title: 'Livrofit-DS Syrup', imageUrl: 'https://i.postimg.cc/pTtvdQ2K/IMGL9868.jpg' },
    { id: 32, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/76MkJC6d/IMGL9943.jpg' },
    { id: 33, title: 'Zodoliv-300', imageUrl: 'https://i.postimg.cc/KjGyPZ3z/IMGL9985.jpg' },
    { id: 34, title: 'Livofit-DS', imageUrl: 'https://i.postimg.cc/tJBGDLFz/IMGL0016.jpg' },
    // Add more products as needed
  ],
  Injections: [
    { id: 35, title: 'Sonpred-40', imageUrl: 'https://i.postimg.cc/dQLXCX82/IMGL0025.webp' },
    { id: 36, title: 'Zedpenem-SB', imageUrl: 'https://i.postimg.cc/MHQf0dG6/IMGL0060.webp' },
    { id: 37, title: 'Zactaz-4.5', imageUrl: 'https://i.postimg.cc/44q0Q55r/IMGL0072.webp' },
    { id: 38, title: 'Sonpred-125', imageUrl: 'https://i.postimg.cc/Z0zBwp9r/IMGL0101.webp' },
    { id: 39, title: 'Cefakon-S', imageUrl: 'https://i.postimg.cc/y8XrBzHH/IMGL9757.webp' },
    { id: 40, title: 'L-ORTIL', imageUrl: 'https://i.postimg.cc/65ZmjvbT/IMGL9819.webp' },
    { id: 41, title: 'Zedpenem-1', imageUrl: 'https://i.postimg.cc/DwKYtwR6/IMGL9892.webp' },
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
