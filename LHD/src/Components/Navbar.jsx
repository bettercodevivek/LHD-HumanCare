import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id='navbar' className='fixed top-0 left-0 w-full bg-white z-10 shadow-md'>
      <div className='container mx-auto flex items-center justify-between h-20 px-6'>
        <div className='flex items-center'>
          <img className='h-16 aspect-square mx-4' src="src/assets/LHD Human Care Logo.png" alt="LHD Logo" />
          <div className='flex flex-col'>
            <div className='text-2xl font-bold'>LHD Human Care</div>
            <div className='text-base text-gray-600'>Crafting Health, Shaping Future</div>
          </div>
        </div>
        <div className='hidden md:flex space-x-8'>
          <Link to="/" className='group transition-all duration-300 ease-in-out'>
            <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Our Vision
            </span>
          </Link>
          <Link to="/profile" className='group transition-all duration-300 ease-in-out'>
            <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Corporate Profile
            </span>
          </Link>
          <Link to="/products" className='group transition-all duration-300 ease-in-out'>
            <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Our Products
            </span>
          </Link>
          <Link to="/network" className='group transition-all duration-300 ease-in-out'>
            <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Our Network
            </span>
          </Link>
          <Link to="/contact" className='group transition-all duration-300 ease-in-out'>
            <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Contact Us
            </span>
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-lg focus:outline-none'>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-white shadow-md py-4'>
          <Link to="/" onClick={toggleMenu} className='block py-2 text-lg'>
            Our Vision
          </Link>
          <Link to="/profile" onClick={toggleMenu} className='block py-2 text-lg'>
            Corporate Profile
          </Link>
          <Link to="/products" onClick={toggleMenu} className='block py-2 text-lg'>
            Our Products
          </Link>
          <Link to="/network" onClick={toggleMenu} className='block py-2 text-lg'>
            Our Network
          </Link>
          <Link to="/contact" onClick={toggleMenu} className='block py-2 text-lg'>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
