import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 shadow-lg z-50'>
      <div className='flex items-center space-x-4'>
        <img className='h-12 w-12' src='/assets/LHD Human Care Logo.png' alt='LHD Human Care Logo' />
        <div className='hidden sm:flex flex-col'>
          <span className='text-2xl'>LHD Human Care</span>
          <span className='text-base'>Crafting Health, Shaping Future</span>
        </div>
      </div>
      <div className='hidden sm:flex space-x-8 text-lg'>
        <Link to='/vision' className='hover:text-blue-500 transition-colors duration-300'>Our Vision</Link>
        <Link to='/profile' className='hover:text-blue-500 transition-colors duration-300'>Corporate Profile</Link>
        <Link to='/products' className='hover:text-blue-500 transition-colors duration-300'>Our Products</Link>
        <Link to='/network' className='hover:text-blue-500 transition-colors duration-300'>Our Network</Link>
        <Link to='/contact' className='hover:text-blue-500 transition-colors duration-300'>Contact Us</Link>
      </div>
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-2xl text-black'>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-lg sm:hidden'>
          <div className='flex flex-col items-center'>
            <Link to='/vision' className='w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300' onClick={toggleMenu}>Our Vision</Link>
            <Link to='/profile' className='w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300' onClick={toggleMenu}>Corporate Profile</Link>
            <Link to='/products' className='w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300' onClick={toggleMenu}>Our Products</Link>
            <Link to='/network' className='w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300' onClick={toggleMenu}>Our Network</Link>
            <Link to='/contact' className='w-full text-center py-2 hover:bg-gray-200 transition-colors duration-300' onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
