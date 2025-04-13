import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
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

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-black py-28">
      <div className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((t, idx) => (
          <div key={t.id} className="min-w-full flex justify-center px-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full text-white flex flex-col items-center text-center">
              <div className="relative">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md"
                />
                <div className="absolute -top-3 -left-3 text-amber-400 text-xl">
                  <FaQuoteLeft />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-wide">{t.name}</h3>
              <p className="mt-3 text-sm text-gray-300 italic">
                “We proudly collaborate with top-tier medical institutions to ensure the highest quality care.”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

const Hospital = () => {
  const testimonials = [
    {
      id: 2,
      image: 'https://i.postimg.cc/TYyk65ZT/logo-icon.png',
      name: 'Nutema Hospital, Meerut',
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/rpWXFY3F/logo-medanta.jpg',
      name: 'Medanta Hospital, New Delhi',
    },
    {
      id: 1,
      image: 'https://i.postimg.cc/FznNJkZ9/fortis-logo.gif',
      name: 'Fortis, Delhi',
    },
    {
      id: 8,
      image: 'https://i.postimg.cc/Hsf0c8B4/Vardhman_Mahavir_Medical_College_logo.svg.webp',
      name: 'VMMC Safdarjung, Delhi',
    },
    {
      id: 10,
      image: 'https://i.postimg.cc/vTz5GH9r/oncocare-hospital-1.jpg',
      name: 'OncoCare Hospital',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/fLBHwczR/healers101.png',
      name: 'Healers Hospital, Bijnor',
    },
    {
      id: 9,
      image: 'https://i.postimg.cc/WpnN6J7N/hope-care.webp',
      name: 'Hope Hospital, Haridwar',
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/DfpCHPpC/optima.jpg',
      name: 'Optima Hospital, Meerut',
    },
    {
      id: 7,
      image: 'https://i.postimg.cc/kGHfS7tr/rml.jpg',
      name: 'RML Hospital, New Delhi',
    },
  ];

  return (
    <div className="relative top-12 sm:top-8 md:top-6">
      <h2 className="text-3xl sm:text-5xl font-semibold text-center text-amber-500 mb-10">
        Our Trusted Healthcare Partners 🏥
      </h2>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Hospital;
