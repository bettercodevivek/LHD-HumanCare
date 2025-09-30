import React, { useEffect, useRef } from 'react';

const Profile = () => {
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
    <div className="bg-orange-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-light text-gray-900 text-center">
            <span className="font-semibold">LHD Human Care</span>
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div 
          ref={(el) => sectionRefs.current.push(el)}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center opacity-0"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Advancing Healthcare Through <span className="font-semibold text-orange-300">Innovation</span>
          </h2>
          <div className="mt-6 h-1 w-24 bg-orange-200 mx-auto"></div>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading pharmaceutical excellence with unwavering commitment to research, quality, and patient-centered care.
          </p>
          <div className="mt-10">
            <a 
              href="#about" 
              className="inline-block px-8 py-3 bg-white border border-orange-300 rounded-full text-black font-medium tracking-wide hover:bg-orange-400 transition-colors duration-300"
            >
              EXPLORE OUR COMPANY
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div 
          ref={(el) => sectionRefs.current.push(el)}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Company <span className="font-semibold">Overview</span>
              </h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  LHD Human Care stands as a premier pharmaceutical enterprise dedicated to advancing global health through innovative medications and rigorous scientific research. Our organization combines clinical expertise with operational excellence to deliver therapeutic solutions that significantly improve patient outcomes.
                </p>
                <p className="text-lg">
                  Our mission encompasses the development and delivery of high-quality pharmaceutical products that address critical healthcare needs across diverse therapeutic areas. Through sustained investment in research and development, we continuously expand our capabilities to serve patients with innovative treatment options.
                </p>
                <p className="text-lg">
                  At the foundation of our operations lies an uncompromising commitment to ethics, integrity, and transparency. We conduct our business with accountability and respect for all stakeholders, ensuring that our decision-making processes consistently prioritize the best interests of patients, healthcare professionals, employees, and communities we serve.
                </p>
              </div>
            </div>
            <div>
              <video
    src="https://res.cloudinary.com/dhqffqq46/video/upload/v1759239771/4121322-sd_426_240_25fps_xtdjdo.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto rounded-xl shadow-2xl object-cover border border-orange-200"
  />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section
      <section className="bg-white py-20 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={(el) => sectionRefs.current.push(el)}
            className="text-center mb-16 opacity-0"
          >
            <h2 className="text-4xl font-light text-gray-900">
              Our <span className="font-semibold">Capabilities</span>
            </h2>
            <div className="mt-6 h-1 w-24 bg-orange-500 mx-auto"></div>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical services delivering excellence across the entire drug development lifecycle.
            </p>
          </div>
          
          <div 
            ref={(el) => sectionRefs.current.push(el)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0"
          >
            <div className="bg-orange-50 p-10 shadow-lg border-t-4 border-orange-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Drug Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Pioneering research and development initiatives focused on discovering and advancing novel pharmaceutical compounds to address unmet medical needs across critical therapeutic areas.
              </p>
            </div>

            <div className="bg-orange-50 p-10 shadow-lg border-t-4 border-orange-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clinical Trials</h3>
              <p className="text-gray-700 leading-relaxed">
                Conducting comprehensive clinical trial programs with rigorous methodologies to ensure product safety, efficacy, and regulatory compliance across all phases of pharmaceutical development.
              </p>
            </div>

            <div className="bg-orange-50 p-10 shadow-lg border-t-4 border-orange-600 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Patient Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Delivering comprehensive patient support programs including educational resources, adherence assistance, and healthcare professional collaboration to optimize treatment outcomes.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quality and R&D Section */}
      <section className="py-20">
        <div 
          ref={(el) => sectionRefs.current.push(el)}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900">
              Quality Assurance & <span className="font-semibold">Research Excellence</span>
            </h2>
            <div className="mt-6 h-1 w-24 bg-orange-500 mx-auto"></div>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
              Maintaining the highest standards of pharmaceutical quality through advanced facilities, rigorous testing protocols, and continuous improvement initiatives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.webp"
                alt="Global Standards Compliance"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Standards Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our pharmaceutical operations strictly adhere to international regulatory frameworks including WHO-GMP, FDA, and EMA guidelines, ensuring consistent product quality and safety across all markets.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.postimg.cc/4xXYG2S9/lucas-vasques-9vn-ACv-X2748-unsplash-1.webp"
                alt="Extensive Testing"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rigorous Testing Protocols</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each pharmaceutical product undergoes comprehensive quality control testing with over 100 analytical checks throughout the manufacturing process, validating safety, efficacy, and purity before market release.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.postimg.cc/6QmqdW5r/louis-reed-pwc-KF7-L4-no-unsplash-1.webp"
                alt="Product Excellence"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to pharmaceutical excellence has achieved a 99.8% product approval rate across regulatory agencies nationwide, demonstrating consistent quality and compliance with stringent regulatory standards.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.postimg.cc/k54D669M/crystal-kwok-XUEdfp-PIh-Xg-unsplash-1.webp"
                alt="State-of-the-Art Facilities"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Manufacturing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our manufacturing facilities maintain ISO 9001 and ISO 13485 certifications, equipped with cutting-edge pharmaceutical technologies and automated quality systems to ensure optimal production standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-white py-20 border-t border-orange-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={(el) => sectionRefs.current.push(el)}
            className="opacity-0"
          >
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Our <span className="font-semibold">Commitment to Excellence</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              LHD Human Care remains steadfast in our dedication to pharmaceutical innovation, quality assurance, and patient-centered care. Through continuous investment in research, state-of-the-art facilities, and our exceptional team of professionals, we strive to set new benchmarks in healthcare excellence and improve lives globally.
            </p>
            <div className="mt-12 inline-block px-8 py-1 border-t border-b border-orange-500">
              <p className="text-sm text-orange-600 uppercase tracking-widest font-medium">Pharmaceutical Excellence Since 2008</p>
            </div>
          </div>
        </div>
      </section>

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

export default Profile;