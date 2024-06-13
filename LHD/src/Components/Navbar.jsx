import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    // State to manage the visibility of the sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle function to handle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-8 py-2.5">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/LHD Human Care Logo.png"
                            className="h-16"
                            alt="Logo"
                        />
                        <div className="hidden md:flex flex-col items-start ml-4">
                            <div className="text-lg font-semibold text-gray-900">LHD Human Care</div>
                            <div className="text-sm text-gray-600">Crafting Health, Shaping Future</div>
                        </div>
                    </Link>

                    {/* Toggle button for mobile view */}
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>

                    {/* Navigation links */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-6 items-center font-medium">
                            <li>
                                <NavLink to='/home'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-700`
                                    }
                                >
                                    Corporate Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/vision'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-700`
                                    }
                                >
                                    Our Vision
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/products'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-700`
                                    }
                                >
                                    Our Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-50 hover:text-blue-700`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar and Overlay */}
            <div className={`fixed inset-0 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
                <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-in-out">
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="p-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <NavLink to='/home'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-100 hover:text-blue-700`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-100 hover:text-blue-700`
                                }
                            >
                                Corporate Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/vision'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-100 hover:text-blue-700`
                                }
                            >
                                Our Vision
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/products'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-100 hover:text-blue-700`
                                }
                            >
                                Our Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `block py-2 px-4 rounded duration-200 ${isActive ? "text-blue-500" : "text-black"} hover:bg-gray-100 hover:text-blue-700`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
