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
      image: 'https://i.postimg.cc/vDww57vc/IMG-20240610-WA0006.jpg',
      name: 'Dr. Rohit Kamboj',
      designation: 'Neurosurgeon',
      description: 'I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch healthcare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/Y9VHCBGN/IMG-20240610-WA0007.jpg',
      name: 'Dr. Avdesh Vashishtha',
      designation: 'MBBS MD DNB Critical Care',
      description: 'I have been prescribing medications from LHD Human Care for several years and I am consistently impressed with their commitment to drug quality and excellence. Their rigorous testing procedures and dedication to patient safety make them a trusted partner in delivering top-notch healthcare. I highly recommend LHD Human Care for their unwavering standards and exceptional service.',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/D0XKWpL9/IMG-20240610-WA0008.jpg',
      name: 'Dr. HK Dogra',
      designation: 'Orthopedician',
      description: 'I’ve been prescribing LHD Human Care’s medications for years and have witnessed significant patient improvements. Their dedication to innovation and support is exceptional. I highly recommend LHD Human Care for its outstanding contributions to patient health.',
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/D0XKWpL9/IMG-20240610-WA0008.jpg',
      name: 'Dr. HK Dogra',
      designation: 'Orthopedician',
      description: 'I’ve been prescribing LHD Human Care’s medications for years and have witnessed significant patient improvements. Their dedication to innovation and support is exceptional. I highly recommend LHD Human Care for its outstanding contributions to patient health.',
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/D0XKWpL9/IMG-20240610-WA0008.jpg',
      name: 'Dr. HK Dogra',
      designation: 'Orthopedician',
      description: 'I’ve been prescribing LHD Human Care’s medications for years and have witnessed significant patient improvements. Their dedication to innovation and support is exceptional. I highly recommend LHD Human Care for its outstanding contributions to patient health.',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative top-24 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Recommended By Leading Doctors</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:px-48 lg:px-48">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-amber-500 rounded-3xl overflow-hidden shadow-lg flex flex-col items-center py-4">
            <img className="w-32 h-32 object-cover object-center rounded-full" src={testimonial.image} alt={testimonial.name} />
            <div className="p-6">
              <div className="font-bold text-lg mb-2 text-center">{testimonial.name}</div>
              <div className="text-sm mb-4 text-center">{testimonial.designation}</div>
              <p className="text-white text-base text-justify">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
