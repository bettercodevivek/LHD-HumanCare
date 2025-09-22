import React, { useState, useEffect, useRef } from 'react';

const Hospital = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      id: 1,
      image: 'https://i.postimg.cc/TYyk65ZT/logo-icon.png',
      name: 'Nutema Hospital',
      location: 'Meerut',
      partnership: 'Since 2019'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/rpWXFY3F/logo-medanta.jpg',
      name: 'Medanta Hospital',
      location: 'New Delhi',
      partnership: 'Since 2018'
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/FznNJkZ9/fortis-logo.gif',
      name: 'Fortis Healthcare',
      location: 'Delhi',
      partnership: 'Since 2017'
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/Hsf0c8B4/Vardhman_Mahavir_Medical_College_logo.svg.webp',
      name: 'VMMC Safdarjung',
      location: 'Delhi',
      partnership: 'Since 2020'
    },
    {
      id: 5,
      image: 'https://i.postimg.cc/vTz5GH9r/oncocare-hospital-1.jpg',
      name: 'OncoCare Hospital',
      location: 'Delhi NCR',
      partnership: 'Since 2021'
    },
    {
      id: 6,
      image: 'https://i.postimg.cc/fLBHwczR/healers101.png',
      name: 'Healers Hospital',
      location: 'Bijnor',
      partnership: 'Since 2019'
    },
    {
      id: 7,
      image: 'https://i.postimg.cc/WpnN6J7N/hope-care.webp',
      name: 'Hope Hospital',
      location: 'Haridwar',
      partnership: 'Since 2020'
    },
    {
      id: 8,
      image: 'https://i.postimg.cc/DfpCHPpC/optima.jpg',
      name: 'Optima Hospital',
      location: 'Meerut',
      partnership: 'Since 2018'
    },
    {
      id: 9,
      image: 'https://i.postimg.cc/kGHfS7tr/rml.jpg',
      name: 'RML Hospital',
      location: 'New Delhi',
      partnership: 'Since 2017'
    }
  ];

  // Split partners for featured and marquee sections
  const featuredPartners = partners.slice(0, 6);
  const marqueePartners = [...partners, ...partners]; // Duplicate for seamless loop

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-b from-white to-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-amber-600 tracking-wider uppercase">
              Healthcare Network
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent mt-2"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Healthcare Partners
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading medical institutions across India to deliver 
            exceptional pharmaceutical solutions and patient care.
          </p>
        </div>

        {/* Featured Partners Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Premier Healthcare Institutions
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPartners.map((partner, index) => (
              <div
                key={partner.id}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-200 p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: '500ms',
                  transitionProperty: 'transform, opacity, border-color, box-shadow'
                }}
              >
                {/* Logo Container */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:border-amber-100 group-hover:bg-amber-50/30 transition-all duration-300">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {partner.location}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                    {partner.partnership}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Marquee */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Extended Healthcare Network
          </h3>
          
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl py-8">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-50 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling content */}
            <div className="flex animate-scroll">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center space-x-4 bg-white rounded-xl px-6 py-4 shadow-sm border border-white"
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {partner.name}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {partner.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Healthcare Partners</p>
              <p className="text-gray-500 text-sm mt-1">Across North India</p>
            </div>
            
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2">
                7+
              </div>
              <p className="text-gray-600 font-medium">Years Partnership</p>
              <p className="text-gray-500 text-sm mt-1">Average duration</p>
            </div>
            
            <div className="group">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                15+
              </div>
              <p className="text-gray-600 font-medium">Cities Covered</p>
              <p className="text-gray-500 text-sm mt-1">Pan-India presence</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Hospital;