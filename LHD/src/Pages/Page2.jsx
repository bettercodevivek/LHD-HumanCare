import React, { useEffect, useRef } from 'react';

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
      { threshold: 0.1 }
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
      description: 'With over 28 years of expertise, our robust API portfolio stands as a testament to our commitment to quality and innovation. Trusted by healthcare providers and pharmaceutical companies worldwide, we deliver consistent, high-quality Active Pharmaceutical Ingredients that form the foundation of effective and reliable medications. Explore our legacy of excellence and discover why we are a leader in the pharmaceutical Field.'
    },
    {
      image: 'https://i.postimg.cc/h4sVPd5k/vision-svgrepo-com.png',
      title: 'Our Vision',
      description: 'Our vision is to revolutionize healthcare by placing you at the heart of everything we do. We are dedicated to developing cutting-edge medications that meet your unique needs, ensuring better health outcomes and improved quality of life. With a commitment to excellence, accessibility, and trust, we aim to be your partner in health, providing innovative solutions that enhance your well-being and bring peace of mind to you and your loved ones.'
    },
    {
      image: 'https://i.postimg.cc/mDG7hNRs/holding-hands-in-a-circle-svgrepo-com.png',
      title: '"Health for All" Initiative',
      description: 'Through our "Health for All" initiative, we are committed to making healthcare accessible to underserved communities. We conduct free medical checkup camps where our dedicated team of doctors provides comprehensive health assessments. During these camps, we also distribute our medicines at no cost, ensuring that those in need receive the essential care and treatments they deserve.'
    },
    {
      image: 'https://i.postimg.cc/8Cvh1X24/experience-svgrepo-com.png',
      title: 'Experience',
      description: 'With 28 years of unwavering dedication, we have established ourselves as a trusted leader in the pharmaceutical Field. Our extensive experience is marked by a steadfast commitment to quality, innovation, and patient care. Over the decades, we have continuously advanced our expertise to develop effective and safe medications, earning the trust of millions worldwide. Our journey reflects a legacy of excellence.'
    },
  ];

  return (
    <div className="relative top-16">
      <h1 className="relative text-2xl md:text-3xl text-amber-500 lg:text-4xl text-center font-extrabold mb-8">
        Why choose LHD Human Care?
      </h1>
      <div className="min-h-screen flex items-center justify-center px-8 md:px-24 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col p-4 bg-white text-black rounded-3xl shadow-lg hover:bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 opacity-0"
            >
              <div className="flex items-center space-x-4">
                <img src={card.image} alt={card.title} className="w-20 h-20 sm:w-24 sm:h-24 border-solid border-2 border-white rounded-full" />
                <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
              </div>
              <p className="mt-4 text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
