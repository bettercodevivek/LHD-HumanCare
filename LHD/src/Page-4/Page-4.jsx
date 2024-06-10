import React from 'react';

const Page4 = () => {
 
  const testimonials = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Dr.Vishwajeet Bembi',
      designation:'MD(Medicine) DIP.CARD. Physician and Critical Care Specialist, Director , Nutema Hospital, Meerut',
      description: ' I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch HealthCare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Dr.Rohit Kamboj',
      designation:'',
      description: 'I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch HealthCare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Dr.Vikul Tyagi',
      designation:'',
      description: 'I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch HealthCare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Dr. HK Dogra',
      designation:'',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className='relative top-0'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Recommended By Leading Doctors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="max-w-xs bg-sky-100 mx-auto flex flex-col items-center  overflow-hidden rounded-lg shadow-xl">
              <img className="h-28 aspect-square rounded-full mt-4" src={testimonial.image} alt={testimonial.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{testimonial.name}</div>
                <div className="font-bold text-md mb-2">{testimonial.designation}</div>
                <p className="text-gray-700 text-base">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;
