import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  const ImageSlide = [
    'https://i.postimg.cc/131zH7Qd/robert-collins-l-P-Fb-Bk-Mn1c-unsplash-1.webp',
    'https://i.postimg.cc/DwQwYQfw/pexels-shvetsa-3683074-1.webp',
    'https://i.postimg.cc/7PchCYQw/diana-polekhina-ZBst-HWt9v-Lc-unsplash.webp',
    'https://i.postimg.cc/L61XjKrf/walter-otto-PT70-CT6m-ATQ-unsplash-1.webp'
  ];

  const headings = [
    'Welcome to LHD HumanCare',
    'Experience Innovation',
    'Quality & Trust',
    'Excellence in Every Step'
  ];

  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ImageSlide.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full -top-4">
      <div className="relative mx-auto top-16 z-0 opacity-80 rounded-2xl aspect-video w-11/12 drop-shadow-lg">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center rounded-2xl">
              <h2 className="text-white text-2xl md:text-4xl font-bold">{headings[index]}</h2>
              <Link to="/products">
                <button className="mt-4 px-4 py-2 bg-amber-600 text-sm text-white rounded-lg">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a href="tel:+919068389292" className="bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors duration-300">
          <FaPhoneAlt size={24} />
        </a>
        <a href="https://wa.me/919068389292" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
