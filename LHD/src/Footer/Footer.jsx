import React from 'react';

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-blue-900 text-gray-200 py-12 relative mt-12">
            <div className="container mx-auto px-4">
               
                <div className="flex flex-row flex-1 justify-around md:grid-cols-3 gap-y-8">
                     <img src="src/assets/LHD Human Care Logo.png" alt="Company Logo" className="h-20 mb-4 aspect-square rounded-full shadow-2xl" />
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Address</h3>
                        <p>123 Pharma Street</p>
                        <p>Pharma City, PC 12345</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <div className='flex flex-row items-center'>
                            <img className='h-8 pr-4' src='src/assets/phone-call-svgrepo-com.svg'></img>
                            +91 8299239297</div>
                            <div className='flex flex-row items-center'>
                            <img className='h-8 pr-4' src='src/assets/mail-svgrepo-com.svg'></img>
                            <a href='mailto:lhdhumancare@gmail.com'>lhdhumancare@gmail.com</a></div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Products</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Corporate Profile</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center relative top-24 ">
                    <div className="text-lg">&copy; 2024 LHD Human Care. All rights reserved.</div>
                    <div className="text-lg">Designed and Developed by <a className='text-black font-bold underline' target='_blank' href='https://www.linkedin.com/in/vivek-singh-77849329a/'>BetterCodeVivek</a></div>
                </div>
                <button onClick={goToTop} className="bg-blue-600 text-white py-3 px-6 aspect-square rounded-full hover:bg-blue-700">
                <img className='h-8' src='src/assets/arrow-sm-up-svgrepo-com.svg'></img></button>
            </div>
        </footer>
    );
};

export default Footer;

