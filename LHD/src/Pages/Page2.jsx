import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Page2 = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const cardData = [
    {
      image: 'https://i.postimg.cc/dQWZT6Hm/chemistry-svgrepo-com.png',
      title: 'Strong API Legacy',
      description: 'With over 17 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation.'
    },
    {
      image: 'https://i.postimg.cc/h4sVPd5k/vision-svgrepo-com.png',
      title: 'Our Vision',
      description: 'Our vision is to revolutionize healthcare by placing you at the heart of everything we do, ensuring better health outcomes and improved quality of life.'
    },
    {
      image: 'https://i.postimg.cc/mDG7hNRs/holding-hands-in-a-circle-svgrepo-com.png',
      title: '"Health for All" Initiative',
      description: 'We are committed to making healthcare accessible to underserved communities through free medical checkups and medicine distribution.'
    },
    {
      image: 'https://i.postimg.cc/8Cvh1X24/experience-svgrepo-com.png',
      title: 'Experience',
      description: 'With 17 years of dedication, we have established ourselves as a trusted leader in the pharmaceutical industry, ensuring safe and effective medications.'
    },
  ];

  return (
    <div className="relative top-16 bg-white text-white py-12 px-6 md:px-20 lg:px-32 min-h-screen flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600"
      >
        Why Choose LHD Human Care?
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center space-y-4"
          >
            <div className="bg-white p-4 rounded-full shadow-md">
              <img src={card.image} alt={card.title} className="w-20 h-20 rounded-full sm:w-24 sm:h-24" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-amber-400">{card.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
