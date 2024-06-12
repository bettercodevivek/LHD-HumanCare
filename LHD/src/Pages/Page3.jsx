import React, { useState, useEffect } from 'react';

const Page3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

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
      title: 'Diabetology',
      description: 'This is a description for item 2.',
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
      title: 'GastroEnterology',
      description: 'Your partner in digestive health, providing expert care for a healthy gut.',
      link: '#'
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/yxd9BQYp/standing-human-body-silhouette-svgrepo-com.png',
      title: 'Vitaminology',
      description: 'Unlock the power of vitamins for optimal health and wellness.',
      link: '#'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden  h-dvh top-28 px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Our Products</h1>

      <div className="relative overflow-hiddens w-full mt-16 mb-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / (totalSlides < 3 ? totalSlides : 3)) * currentSlide}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] flex-shrink-0 box-border p-4"
            >
              <div className="p-6 rounded-3xl w-full flex flex-col items-center text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover aspect-square rounded-full mb-4"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg md:w-3/4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-indigo-500 hover:text-indigo-600 mt-2 sm:mt-4"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {carouselItems.map((_, index) => (
          <span
            key={index}
            className={`indicator w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 aspect-square bg-gray-400 rounded-full mx-1 cursor-pointer ${
              currentSlide === index ? 'bg-gray-800' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Page3;
