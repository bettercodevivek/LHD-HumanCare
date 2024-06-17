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
            <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-2xl overflow-hidden drop-shadow-xl p-6 w-80 lg:w-96 mx-4">
              <div className="flex flex-col items-center space-y-4">
                <img
                  className="w-24 h-24 object-cover object-center rounded-full border-4 border-white shadow-lg"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-center">
                  <div className="font-bold text-xl text-white">{testimonial.name}</div>
                  <div className="text-sm text-white opacity-80">{testimonial.designation}</div>
                </div>
              </div>
              <p className="text-white text-sm text-justify mt-4 max-h-40 overflow-hidden">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
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

const Page4 = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://i.postimg.cc/J7Dyc1qL/Dr-Vishwajeet-Bembi-Medicine1.jpg',
      name: 'Dr. Vishwajeet Bembi',
      designation: 'MD (Medicine) DIP.CARD. Physician and Critical Care Specialist, Director, Nutema Hospital, Meerut',
      description: 'I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch healthcare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/VL1cJnkX/1-1-1024x1024.png',
      name: 'Dr.Vikul Tyagi',
      designation: 'MBBS MS MCH , Neurology, Paralysis and Brain Tumour Specialist',
      description: 'In my professional journey as a healthcare provider, LHD Human Care stands out as a beacon of pharmaceutical innovation and excellence. Their steadfast commitment to groundbreaking research and meticulous quality control has consistently delivered transformative results for my patients. The potency and reliability of their therapeutic solutions are unparalleled. I unequivocally recommend them for their exceptional contribution to the advancement of global healthcare.',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/vDww57vc/IMG-20240610-WA0006.jpg',
      name: 'Dr. Rohit Kamboj',
      designation: 'Neurosurgeon',
      description: 'As a healthcare professional, I have had the opportunity to prescribe medications from LHD Human Care for several years. Their commitment to quality and patient well-being is evident in the consistent results I see in my patients. The innovative treatments and reliable efficacy of their products have significantly improved patient outcomes in my practice. I highly recommend LHD Human Care for their dedication to advancing healthcare.',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/Y9VHCBGN/IMG-20240610-WA0007.jpg',
      name: 'Dr. Avdesh Vashishtha',
      designation: 'MBBS MD DNB Critical Care Specialist',
      description: 'I have been prescribing medications from LHD Human Care for over a decade and have consistently witnessed exceptional results in my patients. Their innovative formulations and commitment to rigorous quality control make them a trusted partner in healthcare. I am confident in recommending LHD Human Care for their outstanding contributions to patient care and well-being.',
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/D0XKWpL9/IMG-20240610-WA0008.jpg',
      name: 'Dr. HK Dogra',
      designation: 'MS Ortho Fellowship in Joint Replacement Surgery(Singapore), Fellowship in Sports Medicine(Germany)',
      description: 'As an Orthopedician dedicated to providing the highest standard of care, I am consistently impressed by the exceptional quality of medications from LHD Human Care. Their unwavering commitment to pharmaceutical excellence and innovative therapeutic solutions has profoundly enriched the health outcomes of my patients. The efficacy and reliability of their products are unparalleled, making LHD Human Care a beacon of trust and excellence in the medical community.',
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/1zxVvTPD/IMG-20240615-WA0017.jpg',
      name: 'Dr. Neeraj Chaudhary',
      designation: 'MBBS MD Medicine , Consultant Physician',
      description: 'In my years of medical practice, LHD Human Care has consistently demonstrated a remarkable dedication to the highest standards of pharmaceutical excellence. Their innovative approach to drug development and unwavering commitment to patient safety have made a significant impact on my practice. The efficacy and reliability of their medications ensure optimal health outcomes for my patients, and their contribution to the medical field is truly commendable.',
    },
    {
      id: 7,
      image: 'https://i.postimg.cc/G2d8Cy42/IMG-20240615-WA0018.jpg',
      name: 'Dr. Arpit Srivastava',
      designation: 'MD(Internal Medicine), Dialysis Expert DM(Nephrology), SGPGIMS Lucknow',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
    {
      id: 8,
      image: 'https://i.postimg.cc/XvHXPz3Q/Dr-Deepti-Dogra-Gynae.jpg',
      name: 'Dr. Deepti Dogra',
      designation: 'MS MD DNB FAMS FART(Gold Medalist), Gynae Laparoscopic,Hysterscopic Surgeon and Fertility Specialist',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
    {
      id: 9,
      image: 'https://i.postimg.cc/xdTct2rX/Dr-Hariraj-Singh-Tomar-Cardio.jpg',
      name: 'Dr. Hariraj Singh',
      designation: 'Interventional Cardiologist at Nutema ( Formerly at Medanta,Delhi)',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
    {
      id: 10,
      image: '',
      name: 'Dr. Pankaj Badal',
      designation: 'MBBS MS, Consultant Eye Surgeon & Phaco Specialist',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
    {
      id: 11,
      image: 'https://i.postimg.cc/5thWjBmf/dr-abhishek-singh.png',
      name: 'Dr. Abhishek Singh',
      designation: 'MBBS DNB MCH MNAMS Orthopaedic Surgeon ',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
    {
      id: 12,
      image: '',
      name: 'Dr. Khivendra Singh',
      designation: 'Physician',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-amber-500">
        Recommended By Leading Doctors
      </h2>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Page4;
 