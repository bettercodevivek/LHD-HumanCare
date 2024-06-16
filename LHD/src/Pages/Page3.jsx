import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000); // Slide interval set to 4 seconds
    return () => clearInterval(autoSlide);
  }, []);

  const carouselItems = [
    {
      id: 1,
      image: 'https://i.postimg.cc/s24ZWdM0/brain-upper-view-outline-svgrepo-com.png',
      title: 'Neurology',
      description: 'Advancing brain health with innovative treatments and expert neurological care.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/K8LTZgxb/hand-palm-outline-with-scratch-wound-with-blood-droplet-svgrepo-com.png',
      title: 'Pediatrics',
      description: 'Dedicated to nurturing healthy children through compassionate and comprehensive care.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/VsGn48Dx/liver-svgrepo-com.png',
      title: 'Hepatology',
      description: 'Leading the way in liver health with advanced treatments and compassionate care.',
      link: '#'
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/yYD9bbGk/stomach-svgrepo-com.png',
      title: 'Gastroenterology',
      description: 'Your partner in digestive health, providing expert care for a healthy gut.',
      link: '#'
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/yxd9BQYp/standing-human-body-silhouette-svgrepo-com.png',
      title: 'Vitaminology',
      description: 'Unlock the power of vitamins for optimal health and wellness.',
      link: '#'
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/yxd9BQYp/standing-human-body-silhouette-svgrepo-com.png',
      title: 'Orthopaedics',
      description: 'Dedicated to restoring mobility and improving quality of life through expert orthopedic care.',
      link: '#'
    },
  ];

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 top-12 relative md:top-16 lg:top-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-amber-500 text-center mb-8">Our Products</h1>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg lg:h-96 h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute w-full flex justify-center items-center"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            {carouselItems.map((item, index) => (
              index === currentSlide && (
                <div
                  key={index}
                  className="w-full p-4 md:p-8 flex justify-center items-center bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600"
                >
                  <div className="bg-white rounded-xl shadow-xl p-6 text-center transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-4 shadow-lg"
                    />
                    <h2 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      className="text-orange-500 hover:text-blue-500 text-sm md:text-base font-medium underline"
                    >
                      See Products
                    </a>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-md opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-md opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
        >
          &#10095;
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${currentSlide === index ? 'bg-amber-500' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
