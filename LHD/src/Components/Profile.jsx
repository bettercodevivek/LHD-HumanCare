import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-amber-500">LHD Human Care</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-amber-500 text-white text-center py-20">
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
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              LHD Human Care is a leading pharmaceutical company dedicated to improving health and
              wellness through innovative medications and cutting-edge research.
            </p>
            <p className="text-gray-700">
              Our mission is to deliver high-quality pharmaceutical products that enhance patient
              outcomes and promote overall health. We are committed to research and development to
              find new and better ways to serve our patients.
              At LHD Human Care, we uphold the highest standards of ethics and integrity. We are committed to conducting our business with transparency, accountability, and respect for all stakeholders. Our ethical framework guides our decision-making processes and ensures that we consistently act in the best interests of our patients, employees, and communities.
            </p>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/kXmhYL09/danilo-alvesd-a7-Od-G45pr-SM-unsplash-1.jpg"
              alt="LHD"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">Drug Development</h3>
              <p className="text-gray-700">
                Innovative research and development of new medications to address unmet medical
                needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">Clinical Trials</h3>
              <p className="text-gray-700">
                Conducting rigorous clinical trials to ensure the safety and efficacy of our
                products.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-amber-500 mb-2">Patient Support</h3>
              <p className="text-gray-700">
                Providing comprehensive support and resources for patients using our medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <img
                src="https://i.postimg.cc/VvBFwCBL/IMG-20240611-WA0004-1.jpg"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Mr. Dalbeer Singh</h3>
              <p className="text-white">CEO</p>
            </div>
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Mr. Uday Chaudhary</h3>
              <p className="text-white">General Manager</p>
            </div>
            <div className="p-6 bg-amber-500 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Dr.Harsh Chaudhary</h3>
              <p className="text-white">Medical Consultant</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
