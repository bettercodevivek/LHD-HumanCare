import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-orange-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <img 
                                src="https://i.postimg.cc/1tt2wSYZ/LHD-Human-Care-Logo-1.webp" 
                                alt="LHD Human Care" 
                                className="h-24 w-auto"
                            />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                            Contact <span className="font-semibold">Us</span>
                        </h1>
                        <div className="mt-6 h-1 w-24 bg-orange-500 mx-auto"></div>
                        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Connect with our team for inquiries, partnerships, or information about our pharmaceutical products and services.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Location */}
                    <div className="bg-white p-10 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Corporate Office</h2>
                        <p className="text-gray-600 text-center leading-relaxed">
                            New Delhi, India
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-10 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Email Address</h2>
                        <a 
                            href="mailto:lhdhumancare@gmail.com" 
                            className="text-orange-600 hover:text-orange-700 text-center block transition-colors duration-300"
                        >
                            lhdhumancare@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-10 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Phone className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">Phone Number</h2>
                        <a 
                            href="tel:+917454800540" 
                            className="text-orange-600 hover:text-orange-700 text-center block transition-colors duration-300"
                        >
                            +91 74548 00540
                        </a>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-10 shadow-lg border border-orange-100">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <Clock className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Business Hours</h2>
                        <div className="space-y-3 text-center">
                            <div className="flex justify-between items-center max-w-md mx-auto border-b border-gray-200 pb-3">
                                <span className="text-gray-700 font-medium">Monday - Friday</span>
                                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center max-w-md mx-auto">
                                <span className="text-gray-700 font-medium">Saturday - Sunday</span>
                                <span className="text-gray-600">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-white py-20 border-t border-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900">
                            Our <span className="font-semibold">Location</span>
                        </h2>
                        <div className="mt-6 h-1 w-24 bg-orange-500 mx-auto"></div>
                    </div>
                    <div className="shadow-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796785527!2d77.04417053579648!3d28.527554410196217!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1719162844062!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                            title="LHD Human Care Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-orange-50 to-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-light text-gray-900 mb-6">
                        Ready to <span className="font-semibold">Connect?</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Whether you're a healthcare professional, potential partner, or have inquiries about our pharmaceutical solutions, our team is ready to assist you with expert guidance and support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:lhdhumancare@gmail.com"
                            className="inline-block px-8 py-3 bg-orange-600 text-white font-medium tracking-wide hover:bg-orange-700 transition-colors duration-300"
                        >
                            SEND AN EMAIL
                        </a>
                        <a 
                            href="tel:+917454800540"
                            className="inline-block px-8 py-3 bg-white text-orange-600 border-2 border-orange-600 font-medium tracking-wide hover:bg-orange-50 transition-colors duration-300"
                        >
                            CALL US NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}