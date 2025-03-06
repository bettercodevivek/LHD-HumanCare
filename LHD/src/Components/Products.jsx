import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    // { id: 12, title: 'Penomol-P Syrup', imageUrl: 'https://i.postimg.cc/XYF7ZVbG/IMGL9926-min.webp' },
    { id: 13, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/VNWfRD5z/IMGL9970-min.webp' },
  ],
  Gastroenterology: [
    { id: 17, title: 'Penlit-D', imageUrl: 'https://i.postimg.cc/j2JB8Svy/IMGL9791-min.webp' },
    { id: 18, title: 'Zolit-RD', imageUrl: 'https://i.postimg.cc/FR62gLb9/IMGL9906-min.webp' },
    { id: 19, title: 'Penlit-DSR', imageUrl: 'https://i.postimg.cc/WtLCxcfC/IMGL9973-min.webp' },
    { id: 20, title: 'Sathicon-140', imageUrl: 'https://i.postimg.cc/43WCyMmH/IMGL0005-min.webp' },
    { id: 21, title: 'Rentadin-300', imageUrl: 'https://i.postimg.cc/4dyD959L/IMGL0043-min.webp' },
    { id: 50, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
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
  Respiratory:[
    { id: 46, title: 'Amofex-Plus', imageUrl: 'https://i.postimg.cc/65VBY47v/IMGL0088-min.webp' },
    { id: 47, title: 'Litra-M', imageUrl: 'https://i.postimg.cc/J4C1N5h8/IMGL9896-min.webp' },
    { id: 48, title: 'Euspore-200', imageUrl: 'https://i.postimg.cc/139sTR6Y/IMGL9914-min.webp' },
    { id: 49, title: 'Mucobest', imageUrl: 'https://i.postimg.cc/vZ3bdRt8/IMGL9833-min.webp' },
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get('category');
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || Object.keys(productCategories)[0]);

  useEffect(() => {
    if (categoryFromURL && productCategories[categoryFromURL]) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-orange-50 to-amber-100 text-gray-800">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-amber-600 mb-8"
      >
        Explore Our Products
      </motion.h1>
      <p className="text-center text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Browse our premium selection of pharmaceutical products tailored for various medical fields.
      </p>
      
      <div className="relative">
        <p className="text-center text-sm font-semibold text-gray-600 mb-2">Swipe left or right to browse categories</p>
        <div className="flex overflow-x-auto space-x-4 p-4 bg-white shadow-md rounded-lg mb-6 scrollbar-hide">
          {Object.keys(productCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 whitespace-nowrap font-semibold text-lg rounded-lg transition-all duration-300 shadow-md ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md opacity-75 text-gray-700 hidden sm:flex">
          <FaArrowLeft size={20} />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md opacity-75 text-gray-700 hidden sm:flex">
          <FaArrowRight size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productCategories[selectedCategory].map((product) => (
          <motion.div 
            key={product.id} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-48 object-cover cursor-pointer rounded-lg"
              src={product.imageUrl}
              alt={product.title}
              onClick={() => openModal(product.imageUrl)}
            />
            <p className="text-lg font-semibold text-gray-800 mt-2 text-center">{product.title}</p>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        overlayClassName="fixed inset-0 z-40"
      >
        <div className="bg-white p-6 rounded-lg max-w-full max-h-full flex flex-col items-center shadow-lg">
          <img src={selectedImage} alt="Product" className="max-h-[80vh] max-w-full object-contain" />
          <button onClick={closeModal} className="mt-4 px-5 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Products;
