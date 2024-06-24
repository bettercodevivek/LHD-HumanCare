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
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center text-amber-500">LHD Human Care</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="bg-amber-500 text-white text-center py-20 opacity-0"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to LHD Human Care</h2>
          <p className="text-lg mb-6">
            Leading the way in pharmaceutical innovation and patient care.
          </p>
          <a href="#about" className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-200">
            Learn More
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        id="about"
        className="bg-white py-16 opacity-0"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-4 text-center">About Us</h2>
            <p className="text-gray-700 mb-4 text-center">
              LHD Human Care is a leading pharmaceutical company dedicated to improving health and
              wellness through innovative medications and cutting-edge research.
            </p>
            <p className="text-gray-700 text-center">
              Our mission is to deliver high-quality pharmaceutical products that enhance patient
              outcomes and promote overall health. We are committed to research and development to
              find new and better ways to serve our patients. At LHD Human Care, we uphold the
              highest standards of ethics and integrity. We are committed to conducting our business
              with transparency, accountability, and respect for all stakeholders. Our ethical
              framework guides our decision-making processes and ensures that we consistently act in
              the best interests of our patients, employees, and communities.
            </p>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/TPY5VNj6/danilo-alvesd-a7-Od-G45pr-SM-unsplash-1.webp"
              alt="LHD"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="bg-white py-16 opacity-0"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Drug Development</h3>
              <p className="text-white">
                Innovative research and development of new medications to address unmet medical
                needs.
              </p>
            </div>
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Clinical Trials</h3>
              <p className="text-white">
                Conducting rigorous clinical trials to ensure the safety and efficacy of our
                products.
              </p>
            </div>
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Patient Support</h3>
              <p className="text-white">
                Providing comprehensive support and resources for patients using our medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and R&D Section */}
      <div
        ref={(el) => sectionRefs.current.push(el)}
        className="px-4 py-8 bg-white md:px-8 lg:px-16 text-white opacity-0"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Quality and R&D</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.webp"
                  alt="Global Standards Compliance"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Global Standards Compliance</h3>
                <p>We ensure our products meet stringent quality standards, adhering to regulations.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://i.postimg.cc/4xXYG2S9/lucas-vasques-9vn-ACv-X2748-unsplash-1.webp"
                  alt="Extensive Testing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Extensive Testing</h3>
                <p>
                  Each product undergoes over 100 quality control tests before release, ensuring
                  safety and efficacy.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://i.postimg.cc/6QmqdW5r/louis-reed-pwc-KF7-L4-no-unsplash-1.webp"
                  alt="Product Excellence"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Product Excellence</h3>
                <p>
                  Our commitment to quality has resulted in a 99.8% product approval rate across
                  regulatory agencies nationwide.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 rounded-3xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://i.postimg.cc/k54D669M/crystal-kwok-XUEdfp-PIh-Xg-unsplash-1.webp"
                  alt="State-of-the-Art Facilities"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
                <p>
                  Our manufacturing sites are ISO 9001 and ISO 13485 certified, equipped with
                  advanced technologies to maintain top-notch quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
