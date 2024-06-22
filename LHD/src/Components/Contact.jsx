import React from 'react';

const Contact = () => {
  return (
    <div className=" relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed "
      style={{ backgroundImage: "url('https://i.postimg.cc/5y1VzTv5/madison-agardi-QNrjcp90t-Vc-unsplash-1.webp')" }}
    ></div>
    
    {/* Overlay to make text more readable */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    
    <div className="relative max-w-4xl w-full text-center text-white z-10 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-base md:text-lg mb-6 md:mb-8 px-2 md:px-0">We'd love to hear from you! Reach out to us using the information below.</p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-0">
        <div className="text-left">
          <h2 className="text-xl md:text-2xl text-center font-semibold mb-3 md:mb-4">Contact Information</h2>
          <ul className="space-y-2 text-center">
          <li>Email: <a href="mailto:lhdhumancare@gmail.com" className="hover:underline">lhdhumancare@gmail.com</a></li>
                        <li>Phone: <a href="tel:+919837559026" className="hover:underline">+91 9837559026</a></li>
                        <li>Phone: <a href="tel:+917310916525" className="hover:underline">+91 7310916525 </a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796785527!2d77.04417053579652!3d28.527554410196213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1718528868587!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
