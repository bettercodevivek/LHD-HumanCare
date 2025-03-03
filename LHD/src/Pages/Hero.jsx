import { useState, useEffect } from "react";
import {FaWhatsapp, FaPhoneAlt} from "react-icons/fa"
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

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
      <div className="relative mx-auto top-16 z-0 opacity-80 rounded-2xl aspect-video w-11/12 md:w-11/12 sm:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center rounded-2xl">
              <h2 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold">{headings[index]}</h2>
              <Link to="/products"> 
                <button className="mt-4 px-4 py-2 bg-amber-500 text-sm text-white rounded-lg">
                  Check Our Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-inherit backdrop-blur-lg shadow-lg flex flex-wrap items-center justify-around w-5/6 h-auto mx-auto sm:py-12 left-0 right-0 top-16 md:top-0 lg:top-0 -mt-8 rounded-3xl border-2">
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={17} delay={3} /></span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Years of Experience</span>
        </div>
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={10000} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Active Clients</span>
        </div>
        {/* <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={700} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Employees</span>
        </div> */}
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={150} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Products</span>
        </div>
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
