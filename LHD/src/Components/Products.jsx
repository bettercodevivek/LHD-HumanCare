import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Product data
const productCategories = {
  Neurology: [
    { id: 1, title: 'Paxtin-Plus', imageUrl: 'https://i.postimg.cc/d1cC7Wpv/IMGL9766-min.webp' },
    { id: 2, title: 'Welpose-TF', imageUrl: 'https://i.postimg.cc/FRbL0yXS/IMGL9842-min.webp' },
    { id: 3, title: 'Valpolit CR-500', imageUrl: 'https://i.postimg.cc/QdP1DNqF/IMGL9854-min.webp' },
    { id: 4, title: 'Penotin-GB', imageUrl: 'https://i.postimg.cc/25ZvSpH2/IMGL9864-min.webp' },
    { id: 5, title: 'Ceribro', imageUrl: 'https://i.postimg.cc/BbMPVJ6Q/IMGL9910-min.webp' },
  ],
  Orthopaedics: [
    { id: 9, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/hPNtPXHR/IMGL9736-min.webp' },
    { id: 10, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/ZqSYp1bf/IMGL9875-min.webp' },
    { id: 11, title: 'Sylibon-Gold', imageUrl: 'https://i.postimg.cc/fTVbNcqv/IMGL9922-min.webp' },
    { id: 12, title: 'Penomol-P Syrup', imageUrl: 'https://i.postimg.cc/XYF7ZVbG/IMGL9926-min.webp' },
    { id: 13, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/VNWfRD5z/IMGL9970-min.webp' },
  ],
  Gastroenterology: [
    { id: 17, title: 'Penlit-D', imageUrl: 'https://i.postimg.cc/j2JB8Svy/IMGL9791-min.webp' },
    { id: 18, title: 'Zolit-RD', imageUrl: 'https://i.postimg.cc/FR62gLb9/IMGL9906-min.webp' },
    { id: 19, title: 'Penlit-DSR', imageUrl: 'https://i.postimg.cc/WtLCxcfC/IMGL9973-min.webp' },
    { id: 20, title: 'Sathicon-140', imageUrl: 'https://i.postimg.cc/43WCyMmH/IMGL0005-min.webp' },
    { id: 21, title: 'Rentadin-300', imageUrl: 'https://i.postimg.cc/4dyD959L/IMGL0043-min.webp' },
  ],
  AntiBiotics: [
    { id: 22, title: 'G-XL-250', imageUrl: 'https://i.postimg.cc/cCw0vhqq/IMGL0112-min.webp' },
    { id: 23, title: 'Sinaxim-AZ', imageUrl: 'https://i.postimg.cc/k4k7MZpF/IMGL0034-min.webp' },
    { id: 24, title: 'Sinaxim-O', imageUrl: 'https://i.postimg.cc/LXqHpRN8/IMGL0068-min.webp' },
    { id: 25, title: 'Licsef-500', imageUrl: 'https://i.postimg.cc/ZqsT20PQ/IMGL0106-min.webp' },
    { id: 26, title: 'Emoxclav-625', imageUrl: 'https://i.postimg.cc/s2gjT5WS/IMGL0110-min.webp' },
  ],
  Hepatology: [
    { id: 31, title: 'Livrofit-DS Syrup', imageUrl: 'https://i.postimg.cc/7PgFTfGy/IMGL9868-min.webp' },
    { id: 32, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
    { id: 33, title: 'Zodoliv-300', imageUrl: 'https://i.postimg.cc/zv14c1QM/IMGL9985-min.webp' },
    { id: 34, title: 'Livofit-DS', imageUrl: 'https://i.postimg.cc/DyntQnL4/IMGL0016-min.webp' },
  ],
  Gynaecology: [
    { id: 42, title: 'Cliptocin Capsules', imageUrl: 'https://i.postimg.cc/nzL7jfps/IMGL9800-min.webp' },
    { id: 43, title: 'Clotec-MF', imageUrl: 'https://i.postimg.cc/rpjxwwXX/IMGL9946-min.webp' },
    { id: 44, title: 'Pasmotil', imageUrl: 'https://i.postimg.cc/C5Bq7CZS/IMGL9949-min.webp' },
    { id: 45, title: 'Fiufol-XT Suspension', imageUrl: 'https://i.postimg.cc/85nvLXzZ/IMGL9957-min.webp' },
  ],
  Injections: [
    { id: 35, title: 'Sonpred-40', imageUrl: 'https://i.postimg.cc/dQLXCX82/IMGL0025.webp' },
    { id: 36, title: 'Zedpenem-SB', imageUrl: 'https://i.postimg.cc/MHQf0dG6/IMGL0060.webp' },
    { id: 37, title: 'Zactaz-4.5', imageUrl: 'https://i.postimg.cc/44q0Q55r/IMGL0072.webp' },
    { id: 38, title: 'Sonpred-125', imageUrl: 'https://i.postimg.cc/Z0zBwp9r/IMGL0101.webp' },
    { id: 39, title: 'Cefakon-S', imageUrl: 'https://i.postimg.cc/y8XrBzHH/IMGL9757.webp' },
    { id: 40, title: 'L-ORTIL', imageUrl: 'https://i.postimg.cc/65ZmjvbT/IMGL9819.webp' },
    { id: 41, title: 'Zedpenem-1', imageUrl: 'https://i.postimg.cc/DwKYtwR6/IMGL9892.webp' },
  ],
};

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

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
      <h2 className="text-xl font-bold text-center mb-4 text-amber-500">Click on the products to view their full image</h2>

      {Object.entries(productCategories).map(([category, products]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-amber-500">{category}</h2>
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full h-48 object-cover object-center cursor-pointer"
                    src={product.imageUrl}
                    alt={product.title}
                    onClick={() => openModal(product.imageUrl)}
                  />
                  <div className="p-4">
                    <p className="text-amber-500 text-lg font-semibold">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Image"
        className="fixed inset-0 flex items-center justify-center pl-4 pr-8 bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 z-40"
      >
        <div className="bg-white p-4 rounded-lg max-w-full max-h-full overflow-auto relative flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Product"
            className="max-h-80vh max-w-full object-contain"
          />
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
