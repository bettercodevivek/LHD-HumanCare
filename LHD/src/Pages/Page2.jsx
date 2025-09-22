import React, { useEffect, useRef, useState } from 'react';

const Page2 = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              LHD Human Care?
            </span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-200 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '500ms',
                transitionProperty: 'transform, opacity, border-color, box-shadow'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:from-amber-100 group-hover:to-orange-100 transition-all duration-300">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="flex justify-center mt-6">
                <div 
                  className="h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500"
                  style={{
                    width: visibleCards.includes(index) ? '40px' : '0px',
                    transitionDelay: `${index * 100 + 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page2;