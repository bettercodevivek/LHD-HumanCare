// import React, { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
    // useEffect(() => {
    //     const companyName = "LHD Human Care";
    //     let index = 0;
    //     const element = document.getElementById('company-name'); // Get the element where the name will appear

    //     const intervalId = setInterval(() => {
    //         element.innerText += companyName[index];
    //         index += 1;
    //         if (index === companyName.length) {
    //             clearInterval(intervalId); // Stop when the full name is typed
    //         }
    //     }, 100); // Adjust typing speed (100ms per letter)
        
    //     return () => clearInterval(intervalId); // Cleanup on unmount
    // }, []);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
            {/* Company Logo and Name with Typewriter Effect */}
            <div className="flex items-center mb-6">
                <img 
                    src="https://i.postimg.cc/1tt2wSYZ/LHD-Human-Care-Logo-1.webp" 
                    alt="Company Logo" 
                    className="w-32 h-auto mr-4 animate-bounce"
                />
                {/* <h2 id="company-name" className="text-3xl font-semibold text-gray-800"></h2> */}
            </div>
            
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Get in Touch</h1>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl">
                We're here to help. Reach out to us via email, phone, or visit our office.
            </p>
            
            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Address */}
                <div className="bg-amber-500 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
                    <p className="text-white"> New Delhi, India</p>
                </div>

                {/* Email */}
                <div className="bg-amber-500 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <FaEnvelope className="text-4xl text-green-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
                    <a href="mailto:lhdhumancare@gmail.com" className="text-white hover:underline">lhdhumancare@gmail.com</a>
                </div>

                {/* Phone */}
                <div className="bg-amber-500 p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                    <FaPhone className="text-4xl text-red-600 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
                    <a href="tel:+917454800540" className="text-white hover:underline">+917454800540</a>
                </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 bg-amber-500 p-6 rounded-xl shadow-lg flex flex-col items-center text-center max-w-md">
                <FaClock className="text-4xl text-white mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Office Hours</h2>
                <p className="text-white">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-white">Saturday - Sunday: Closed</p>
            </div>

            {/* Map */}
            <div className="mt-12 w-full max-w-4xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796785527!2d77.04417053579648!3d28.527554410196217!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719162844062!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
    );
}
