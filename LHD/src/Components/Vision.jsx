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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={(el) => sectionRefs.current.push(el)} className="text-center opacity-0">
            <h1 className="text-3xl md:text-6xl font-light text-gray-900 tracking-tight">
              About <span className="font-normal">LHD Human Care</span>
            </h1>
            <div className="mt-6 h-1 w-24 bg-orange-200 mx-auto"></div>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering pharmaceutical excellence for over 17 years with unwavering commitment to innovation, quality, and patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-16">
        <div ref={(el) => sectionRefs.current.push(el)} className="opacity-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-2">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl  font-light text-gray-900 mb-6">
                Our <span className="font-normal">Legacy</span>
              </h2>
              <div className="h-1 w-16 bg-orange-200 mb-8"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Established in <span className="font-normal text-orange-400">2008</span> under the visionary leadership of <span className="font-semibold text-gray-900">Late Shri Lallu Singh Ji</span>, LHD Human Care has evolved into a distinguished pharmaceutical enterprise recognized for breakthrough therapeutic solutions.
                </p>
                <p className="text-lg">
                  Our journey reflects an unwavering commitment to scientific excellence, regulatory compliance, and patient-centric innovation. Through strategic investments in research and development, we have consistently delivered medicines that address critical healthcare needs across diverse therapeutic areas.
                </p>
                <p className="text-lg">
                  Guided by principles of integrity, transparency, and clinical efficacy, we maintain rigorous quality standards throughout our operations. Our state-of-the-art facilities and dedicated team of pharmaceutical professionals ensure that every product meets the highest international benchmarks.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-semibold text-orange-400">17+</div>
                  <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-orange-400">1000+</div>
                  <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-orange-400">150+</div>
                  <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Product Portfolio</div>
                </div>
              </div>
            </div>
           <div className="order-1 lg:order-2">
  <video
    src="https://res.cloudinary.com/dhqffqq46/video/upload/v1759237925/7033922-sd_426_240_25fps_brg5jo.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto rounded-xl shadow-2xl object-cover border border-orange-200"
  />
</div>

          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={(el) => sectionRefs.current.push(el)} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl font-light text-gray-900">
              Our <span className="font-normal">Leadership</span>
            </h2>
            <div className="mt-6 h-1 w-24 bg-orange-200 mx-auto"></div>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
              Visionary leaders committed to advancing pharmaceutical innovation and healthcare excellence.
            </p>
          </div>

          <div className="space-y-12">
            {/* Founder */}
            <div ref={(el) => sectionRefs.current.push(el)} className="opacity-0">
              <div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-lg mx-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2">
                    <img
                      src="https://i.postimg.cc/9XtpYKZ4/IMG-9480-1.avif"
                      alt="Late Shri Lallu Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-normal text-gray-900">Late Shri Lallu Singh</h3>
                      <p className="text-orange-500 text-sm uppercase tracking-wider mt-2 font-medium">Founder & Visionary</p>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
                      "Our mission is to bring innovative solutions that make a real difference in people's lives. We believe in the power of pharmaceutical science to transform healthcare and improve the world."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO */}
            <div ref={(el) => sectionRefs.current.push(el)} className="opacity-0">
              <div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-lg mx-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                    <div className="text-center p-12">
                      <div className="w-40 h-40 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <span className="text-6xl font-light text-orange-500">DS</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-normal text-gray-900">Shri Dalbeer Singh</h3>
                      <p className="text-orange-500 text-sm uppercase tracking-wider mt-2 font-medium">Chief Executive Officer</p>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
                      "We are committed to driving transformational change through scientific innovation and operational excellence. Every product we develop represents our dedication to improving patient outcomes worldwide."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Manager */}
            <div ref={(el) => sectionRefs.current.push(el)} className="opacity-0">
              <div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-lg mx-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  <div className="md:col-span-2">
                    <img
                      src="https://i.postimg.cc/CK4x9ZtG/IMG-20240617-120514030-BURST000-COVER-page-0001-1.webp"
                      alt="Shri Atul Mishra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-normal text-gray-900">Shri Atul Mishra</h3>
                      <p className="text-orange-500 text-sm uppercase tracking-wider mt-2 font-medium">General Manager</p>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
                      "We are dedicated to shaping the future of healthcare through strategic innovation and operational discipline. Each initiative we undertake advances our mission of delivering world-class pharmaceutical solutions."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={(el) => sectionRefs.current.push(el)} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl font-light text-gray-900">
              Our Core <span className="font-normal">Values</span>
            </h2>
            <div className="mt-6 h-1 w-24 bg-orange-500 mx-auto"></div>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
              Foundational principles that guide our operations and define our corporate culture.
            </p>
          </div>

          <div ref={(el) => sectionRefs.current.push(el)} className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0">
            <div className="bg-white rounded-sm shadow-lg p-10 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Upholding the highest ethical standards in research, manufacturing, and business practices to maintain stakeholder trust and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-sm shadow-lg p-10 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Driving continuous advancement through cutting-edge research, strategic collaborations, and investment in emerging pharmaceutical technologies.
              </p>
            </div>

            <div className="bg-white rounded-sm shadow-lg p-10 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Pursuing superior quality in every aspect of our operations, from product development to patient care, exceeding industry standards consistently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-20 border-t border-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={(el) => sectionRefs.current.push(el)} className="opacity-0">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8">
              Our <span className="font-normal">Commitment</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "To advance global healthcare through innovative pharmaceutical solutions, unwavering quality standards, and a steadfast commitment to improving patient outcomes across all therapeutic areas."
            </p>
            <div className="mt-12 inline-block px-8 py-1 border-t border-b border-orange-500">
              <p className="text-sm text-orange-600 uppercase tracking-widest font-medium">Since 2008</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Vision;