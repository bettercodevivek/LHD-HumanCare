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
    { title: 'Welcome to LHD HumanCare', sub: 'Pioneering Pharma Excellence Since 2008' },
    { title: 'Your Partner in Healthcare', sub: 'Delivering Reliable & Effective Healthcare Solutions!' },
    { title: 'Quality & Trust', sub: 'Trust. Quality. Care – The Pillars of Our Success!' },
    { title: 'Excellence in Every Step', sub: 'Dedicated to improving lives through superior care' }
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
      <div className="relative mx-auto top-16 z-0 opacity-90 rounded-2xl h-64 sm:h-3/4 aspect-video w-11/12 drop-shadow-2xl overflow-hidden">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-2xl px-4">
              <h2 className="text-white text-2xl sm:text-4xl font-thin drop-shadow-md">{headings[index].title}</h2>
              <p className="text-white font-normal text-sm sm:text-lg mt-2 opacity-90">{headings[index].sub}</p>
              <Link to="/products">
                <button className="mt-4 px-6 py-3 bg-amber-600 text-sm sm:text-lg text-white rounded-lg shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a href="tel:+919068389292" className="bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-110">
          <FaPhoneAlt size={24} />
        </a>
        <a href="https://wa.me/919068389292" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
