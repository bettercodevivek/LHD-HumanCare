import React from 'react';
import TestimonialCard from './TestimonialCard'; // Import the TestimonialCard component

const Page4 = () => {
 
  const testimonials = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Jane Doe',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Alice Smith',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Bob Johnson',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              description={testimonial.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page4;
