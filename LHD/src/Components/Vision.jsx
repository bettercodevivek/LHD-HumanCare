import React, { useEffect, useRef } from 'react';

const Vision = () => {
  const sectionRefs = useRef([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div ref={(el) => sectionRefs.current.push(el)} className="text-center mb-12 opacity-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-500">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey, values, and the passionate team behind our success.
        </p>
      </div>

      {/* Overview Section */}
      <div ref={(el) => sectionRefs.current.push(el)} className="max-w-4xl mx-auto mb-12 opacity-0">
        <img
          src="https://i.postimg.cc/c1mqjDwj/Vision-img.webp"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-lg mb-8"
        />
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-amber-500">Our Story</h2>
          <p className="text-lg text-gray-700">
            At LHD Human Care, our journey began <span className="font-extrabold text-amber-500">17</span> years ago in <span className="font-extrabold text-amber-500">2008</span> through vision of our founder <span className="font-extrabold text-amber-500">Late Shri Lallu Singh Ji</span> with a steadfast commitment to revolutionizing healthcare. From our humble beginnings, we've grown into a trusted leader known for pioneering breakthrough therapies that enhance patient outcomes worldwide. Our relentless pursuit of excellence and innovation fuels our mission to address the most pressing medical challenges of our time.

            Driven by a passion for improving lives, we uphold uncompromising standards of quality and integrity in every aspect of our operations. Guided by scientific rigor and empathy, we continuously push the boundaries of pharmaceutical research and development. Our dedication to advancing healthcare extends beyond the laboratory – it's ingrained in our culture of collaboration, transparency, and community impact.

            As we look to the future, we remain dedicated to shaping a healthier world through cutting-edge medicines and transformative healthcare solutions that empower individuals and elevate global health standards.
          </p>
        </div>
      </div>

      <div ref={(el) => sectionRefs.current.push(el)} className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 opacity-0">
        {/* Founders Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-500">Our Founders</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries behind our journey and their commitment to innovation.
          </p>
        </div>

        {/* Founders Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src="https://i.postimg.cc/9XtpYKZ4/IMG-9480-1.avif"
              alt="Founder 1"
              className="w-full md:w-1/2 h-auto md:h-96 object-cover object-center"
            />
            <div className="p-6 flex flex-col justify-center md:w-1/2">
              <h2 className="text-2xl md:text-3xl text-amber-500 font-semibold mb-2">Late Shri Lallu Singh</h2>
              <p className="text-gray-600">Founder</p>
              <p className="mt-4 text-gray-700">
                "Our mission is to bring innovative solutions that make a real difference in people's lives. We believe in the power of technology to transform Pharmaceutical Field and improve the world."
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src=""
              alt="Founder 2"
              className="w-full md:w-1/2 h-auto md:h-96 object-cover object-center"
            />
            <div className="p-6 flex flex-col justify-center md:w-1/2">
              <h2 className="text-2xl md:text-3xl text-amber-500 font-semibold mb-2">Shri Dalbeer Singh</h2>
              <p className="text-gray-600">CEO</p>
              <p className="mt-4 text-gray-700">
                "We are committed to driving change through creativity and innovation. Every product we develop is a step towards a brighter, more connected future."
              </p>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img
              src="https://i.postimg.cc/CK4x9ZtG/IMG-20240617-120514030-BURST000-COVER-page-0001-1.webp"
              alt="Founder 3"
              className="w-full md:w-1/2 h-auto md:h-96 object-cover object-center"
            />
            <div className="p-6 flex flex-col justify-center md:w-1/2">
              <h2 className="text-2xl md:text-3xl text-amber-500 font-semibold mb-2">Shri Atul Mishra</h2>
              <p className="text-gray-600">General Manager</p>
              <p className="mt-4 text-gray-700">
                "We are dedicated to transforming the future through creativity and innovation. Each product we develop is a leap toward a brighter, more connected world."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div ref={(el) => sectionRefs.current.push(el)} className="mt-16 text-center opacity-0">
        <h2 className="text-3xl font-extrabold text-amber-500">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are driven by integrity, innovation, and a commitment to excellence. Our values guide our actions and shape the culture of our company.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-white">Integrity</h3>
            <p className="mt-2 text-white">
              We uphold the highest standards of integrity in all of our actions.
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-white">Innovation</h3>
            <p className="mt-2 text-white">
              We constantly pursue new ideas and embrace change to drive progress.
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-white">Excellence</h3>
            <p className="mt-2 text-white">
              We strive for excellence in everything we do, from our products to our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
