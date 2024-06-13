import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to handle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/LHD Human Care Logo.png"
                            className="h-16"
                            alt="Logo"
                        />
                    </Link>

                    {/* Toggle button for mobile view */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-500 lg:hidden hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>

                    {/* Navigation links */}
                    <div className={`lg:flex lg:items-center lg:w-auto w-full ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to='/home'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/profile'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Corporate Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/vision'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Our Vision
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/products'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Our Products
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
