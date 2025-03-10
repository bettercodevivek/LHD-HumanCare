import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaBone, FaBrain, FaCapsules, FaDownload, FaFemale, FaList, FaLungs, FaStethoscope, FaTabletAlt, FaHamburger, FaTablets } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productCategories = {
  Neurology: {icon:<FaBrain></FaBrain>,products:[
    { id: 1, title: 'Paxtin-Plus', imageUrl: 'https://i.postimg.cc/d1cC7Wpv/IMGL9766-min.webp' },
    { id: 2, title: 'Welpose-TF', imageUrl: 'https://i.postimg.cc/FRbL0yXS/IMGL9842-min.webp'},
    { id: 3, title: 'Valpolit CR-500', imageUrl: 'https://i.postimg.cc/QdP1DNqF/IMGL9854-min.webp' },
    { id: 4, title: 'Penotin-GB', imageUrl: 'https://i.postimg.cc/25ZvSpH2/IMGL9864-min.webp' },
    { id: 5, title: 'Ceribro', imageUrl: 'https://i.postimg.cc/BbMPVJ6Q/IMGL9910-min.webp' },
  ]},
  Orthopaedics:{icon:<FaBone></FaBone>,products: [
    { id: 9, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/hPNtPXHR/IMGL9736-min.webp' },
    { id: 10, title: 'Sylibon-D3', imageUrl: 'https://i.postimg.cc/ZqSYp1bf/IMGL9875-min.webp' },
    { id: 11, title: 'Sylibon-Gold', imageUrl: 'https://i.postimg.cc/fTVbNcqv/IMGL9922-min.webp' },
    // { id: 12, title: 'Penomol-P Syrup', imageUrl: 'https://i.postimg.cc/XYF7ZVbG/IMGL9926-min.webp' },
    { id: 13, title: 'Penomol-P Tablets', imageUrl: 'https://i.postimg.cc/VNWfRD5z/IMGL9970-min.webp' },
  ]},
  Gastroenterology: {icon:<FaCapsules></FaCapsules>,products:[
    { id: 17, title: 'Penlit-D', imageUrl: 'https://i.postimg.cc/j2JB8Svy/IMGL9791-min.webp' },
    { id: 18, title: 'Zolit-RD', imageUrl: 'https://i.postimg.cc/FR62gLb9/IMGL9906-min.webp' },
    { id: 19, title: 'Penlit-DSR', imageUrl: 'https://i.postimg.cc/WtLCxcfC/IMGL9973-min.webp' },
    { id: 20, title: 'Sathicon-140', imageUrl: 'https://i.postimg.cc/43WCyMmH/IMGL0005-min.webp' },
    { id: 21, title: 'Rentadin-300', imageUrl: 'https://i.postimg.cc/4dyD959L/IMGL0043-min.webp' },
    { id: 50, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
  ]},
  AntiBiotics:{icon:<FaTablets></FaTablets>,products:[
    { id: 22, title: 'G-XL-250', imageUrl: 'https://i.postimg.cc/cCw0vhqq/IMGL0112-min.webp' },
    { id: 23, title: 'Sinaxim-AZ', imageUrl: 'https://i.postimg.cc/k4k7MZpF/IMGL0034-min.webp' },
    { id: 24, title: 'Sinaxim-O', imageUrl: 'https://i.postimg.cc/LXqHpRN8/IMGL0068-min.webp' },
    { id: 25, title: 'Licsef-500', imageUrl: 'https://i.postimg.cc/ZqsT20PQ/IMGL0106-min.webp' },
    { id: 26, title: 'Emoxclav-625', imageUrl: 'https://i.postimg.cc/s2gjT5WS/IMGL0110-min.webp' },
  ]},
  Hepatology: {icon:<FaCapsules></FaCapsules>,products:[
    { id: 31, title: 'Livrofit-DS Syrup', imageUrl: 'https://i.postimg.cc/7PgFTfGy/IMGL9868-min.webp' },
    { id: 32, title: 'Lacotil Syrup', imageUrl: 'https://i.postimg.cc/PJz0GRsq/IMGL9943-min.webp' },
    { id: 33, title: 'Zodoliv-300', imageUrl: 'https://i.postimg.cc/zv14c1QM/IMGL9985-min.webp' },
    { id: 34, title: 'Livofit-DS', imageUrl: 'https://i.postimg.cc/DyntQnL4/IMGL0016-min.webp' },
  ]},
  Gynaecology: {icon:<FaFemale></FaFemale>,products:[
    { id: 42, title: 'Cliptocin Capsules', imageUrl: 'https://i.postimg.cc/nzL7jfps/IMGL9800-min.webp' },
    { id: 43, title: 'Clotec-MF', imageUrl: 'https://i.postimg.cc/rpjxwwXX/IMGL9946-min.webp' },
    { id: 44, title: 'Pasmotil', imageUrl: 'https://i.postimg.cc/C5Bq7CZS/IMGL9949-min.webp' },
    { id: 45, title: 'Fiufol-XT Suspension', imageUrl: 'https://i.postimg.cc/85nvLXzZ/IMGL9957-min.webp' },
  ]},
  Respiratory:{icon:<FaLungs></FaLungs>,products:[
    { id: 46, title: 'Amofex-Plus', imageUrl: 'https://i.postimg.cc/65VBY47v/IMGL0088-min.webp' },
    { id: 47, title: 'Litra-M', imageUrl: 'https://i.postimg.cc/J4C1N5h8/IMGL9896-min.webp' },
    { id: 48, title: 'Euspore-200', imageUrl: 'https://i.postimg.cc/139sTR6Y/IMGL9914-min.webp' },
    { id: 49, title: 'Mucobest', imageUrl: 'https://i.postimg.cc/vZ3bdRt8/IMGL9833-min.webp' },
  ]},
  Injections:{icon:<FaStethoscope></FaStethoscope>,products:[
    { id: 35, title: 'Sonpred-40', imageUrl: 'https://i.postimg.cc/dQLXCX82/IMGL0025.webp' },
    { id: 36, title: 'Zedpenem-SB', imageUrl: 'https://i.postimg.cc/MHQf0dG6/IMGL0060.webp' },
    { id: 37, title: 'Zactaz-4.5', imageUrl: 'https://i.postimg.cc/44q0Q55r/IMGL0072.webp' },
    { id: 38, title: 'Sonpred-125', imageUrl: 'https://i.postimg.cc/Z0zBwp9r/IMGL0101.webp' },
    { id: 39, title: 'Cefakon-S', imageUrl: 'https://i.postimg.cc/y8XrBzHH/IMGL9757.webp' },
    { id: 40, title: 'L-ORTIL', imageUrl: 'https://i.postimg.cc/65ZmjvbT/IMGL9819.webp' },
    { id: 41, title: 'Zedpenem-1', imageUrl: 'https://i.postimg.cc/DwKYtwR6/IMGL9892.webp' },
  ]},
};

const productListImages = [
  'https://i.postimg.cc/pTNSCzvz/LHD-New-new-page-0001.webp',
  'https://i.postimg.cc/4dzSSy4M/LHD-New-new-page-0002.webp',
  'https://i.postimg.cc/yxsb4KkN/LHD-New-new-page-0003.webp',
  'https://i.postimg.cc/L5D0mW13/LHD-New-new-page-0004.webp',
];

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get('category');
  const productListRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || Object.keys(productCategories)[0]);

  useEffect(() => {
    if (categoryFromURL && productCategories[categoryFromURL]) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const downloadProductList = () => {
    const link = document.createElement('a');
    link.href = '/LHD-Products.pdf';
    link.download = 'Product_List.pdf';
    link.click();
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-orange-50 to-amber-100 text-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-amber-600">Explore Our Products</h1>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <button
            onClick={downloadProductList}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg flex items-center space-x-2 hover:bg-amber-600 transition"
          >
            <FaDownload /> <span className='text-sm'>Download List</span>
          </button>
          <button
            onClick={() => productListRef.current.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
          >
            <FaList /> <span  className='text-sm'>View Product List</span>
          </button>
        </div>
      </div>
      {isMobile ? (
        <div className="relative mb-4">
          <button
            className="w-full p-2 rounded-lg border flex justify-between items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className='mx-2'>{productCategories[selectedCategory].icon}</span> <span>{selectedCategory}</span>
            <FaChevronDown className="ml-auto" />
          </button>
          {dropdownOpen && (
            <div className="absolute w-full mt-1 bg-white shadow-lg rounded-lg z-10">
              {Object.keys(productCategories).map((category) => (
                <div
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setDropdownOpen(false);
                  }}
                  className="p-2 flex items-center space-x-2 hover:bg-gray-200 cursor-pointer"
                >
                  <span className='mx-2'>{productCategories[category].icon}</span>
                  <span>{category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex overflow-x-auto space-x-4 p-4 bg-white shadow-md rounded-lg mb-6 scrollbar-hide">
          {Object.keys(productCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-semibold text-lg rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-md ${
                selectedCategory === category ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`}
            >
              {productCategories[category].icon}
              <span>{category}</span>
            </button>
          ))}
        </div>
      )}


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productCategories[selectedCategory].products.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-48 object-cover cursor-pointer rounded-lg"
              src={product.imageUrl}
              alt={product.title}
            />
            <p className="text-lg font-semibold mt-2">{product.title}</p>
          </motion.div>
        ))}
      </div>

      <div ref={productListRef} className="mt-12 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">LHD Human Care Product List</h2>
        <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={3000}>
          {productListImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img src={image} alt={`Product List ${index + 1}`} className="max-h-96 w-auto object-contain rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
