// OurVision.js

import React from 'react';

const Vision = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Our Vision</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Founder's Message</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero 
                        ac nisl gravida, sit amet fermentum libero convallis. Nulla facilisi. Sed lacinia 
                        vestibulum metus, quis aliquam nisi pellentesque eu. Mauris eget dolor vel libero 
                        scelerisque tempor eget at sapien.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Phasellus non tellus vitae dui fermentum ultrices. Integer interdum velit ut purus 
                        laoreet, vitae placerat ex tristique. Aliquam erat volutpat. Donec ut augue vitae 
                        dui tincidunt rutrum.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2">Integrity</li>
                        <li className="mb-2">Innovation</li>
                        <li className="mb-2">Quality</li>
                        <li className="mb-2">Customer-centric</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Founder's Team</h3>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 md:pr-4 mb-4">
                            <img src="/founder1.jpg" alt="Founder 1" className="rounded-lg shadow-md w-full" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-4">
                            <img src="/founder2.jpg" alt="Founder 2" className="rounded-lg shadow-md w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
