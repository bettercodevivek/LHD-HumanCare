import React, { useState, useEffect } from 'react';

const Page3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Updated totalSlides to match the number of carouselItems

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
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

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-12 lg:h-dvh">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Products</h1>
      
      <div className="relative overflow-hidden rounded-lg shadow-lg ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${100 * currentSlide}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 p-4 md:p-8 flex justify-center items-center"
            >
              <div className="bg-white rounded-xl  p-6 text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h2 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-indigo-600 hover:text-indigo-700 text-sm md:text-base"
                >
                  See Products
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2 relative top-16">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full cursor-pointer ${currentSlide === index ? 'bg-blue-600' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
