import React, { useState, useEffect, useRef } from 'react';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    const handleTouchMove = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      if (Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
        if (touchStartX > touchEndX) {
          goToNext();
        } else {
          goToPrev();
        }
      }
      e.target.removeEventListener('touchmove', handleTouchMove);
    };
    e.target.addEventListener('touchmove', handleTouchMove);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="min-w-full flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden drop-shadow-xl p-0 w-80 lg:w-96 mx-4 transform transition-transform duration-500 hover:scale-105">
              <div className="flex flex-col items-center p-4">
                <div className="w-full h-40 bg-gradient-to-tr from-amber-500 via-orange-400 to-amber-600 flex justify-center items-center">
                  <img
                    className="w-32 h-32 object-cover object-center rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="font-bold text-lg text-gray-800">{testimonial.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-500 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const Hospital = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://i.postimg.cc/FznNJkZ9/fortis-logo.gif',
      name: 'Fortis Delhi',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/TYyk65ZT/logo-icon.png',
      name: 'Nutema Hospital,Meerut',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/kGGTD2GF/yashoda.jpg',
      name: 'Yashoda Hospital,Ghaziabad',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/fLBHwczR/healers101.png',
      name: 'Healers Hospital,Bijnor',
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/rpWXFY3F/logo-medanta.jpg;',
      name: 'Medanta Hospital,New Delhi',
    },
    {
        id: 6,
        image: 'https://i.postimg.cc/DfpCHPpC/optima.jpg',
        name: 'Optima Hospital,Meerut',
      },
      {
        id: 7,
        image: 'https://i.postimg.cc/kGHfS7tr/rml.jpg',
        name: 'RML Hospital,New Delhi',
      },
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-16 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-amber-500">
        Proud Partners in Healthcare
      </h2>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Hospital;
