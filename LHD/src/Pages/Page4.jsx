import React from 'react';

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
      designation: 'MBBS MS MCH , Neurology',
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
      designation: 'MBBS MD DNB Critical Care',
      description: 'I have been prescribing medications from LHD Human Care for over a decade and have consistently witnessed exceptional results in my patients. Their innovative formulations and commitment to rigorous quality control make them a trusted partner in healthcare. I am confident in recommending LHD Human Care for their outstanding contributions to patient care and well-being.',
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/D0XKWpL9/IMG-20240610-WA0008.jpg',
      name: 'Dr. HK Dogra',
      designation: 'Orthopedician',
      description: 'As an Orthopedician dedicated to providing the highest standard of care, I am consistently impressed by the exceptional quality of medications from LHD Human Care. Their unwavering commitment to pharmaceutical excellence and innovative therapeutic solutions has profoundly enriched the health outcomes of my patients. The efficacy and reliability of their products are unparalleled, making LHD Human Care a beacon of trust and excellence in the medical community.',
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/1zxVvTPD/IMG-20240615-WA0017.jpg',
      name: 'Dr. Neeraj Chaudhary',
      designation: 'MBBS MD Medicine',
      description: 'In my years of medical practice, LHD Human Care has consistently demonstrated a remarkable dedication to the highest standards of pharmaceutical excellence. Their innovative approach to drug development and unwavering commitment to patient safety have made a significant impact on my practice. The efficacy and reliability of their medications ensure optimal health outcomes for my patients, and their contribution to the medical field is truly commendable.',
    },
    {
      id: 7,
      image: 'https://i.postimg.cc/G2d8Cy42/IMG-20240615-WA0018.jpg',
      name: 'Dr. Arpit Srivastava',
      designation: 'Orthopedician',
      description: 'In my extensive medical career, I have had the privilege of prescribing treatments from LHD Human Care, a paragon of pharmaceutical excellence. Their unparalleled dedication to pioneering drug research and meticulous attention to quality assurance have profoundly elevated the standard of care for my patients. The efficacy and reliability of their medications are extraordinary, consistently delivering remarkable health outcomes.',
    },
   
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12  text-amber-500">Recommended By Leading Doctors</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-2xl overflow-hidden drop-shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-md">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 p-4">
              <img className="w-20 h-20 sm:w-24 sm:h-24 object-cover object-center rounded-full border-2 border-white shadow-md" src={testimonial.image} alt={testimonial.name} />
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg text-white">{testimonial.name}</div>
                <div className="text-xs text-white opacity-80">{testimonial.designation}</div>
              </div>
            </div>
            <p className="text-white text-sm md:text-md lg:text-md text-justify px-4 py-3">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
