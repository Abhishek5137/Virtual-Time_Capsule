
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';


const Navbar = ({ toggleAuthModal, auth }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundStyle = {


  };

  return (
    <nav style={backgroundStyle}
      className={` z-20 scrolled     bg-slate-800 ${isScrolled ? 'fixed top-0 w-full shadow-lg transition delay-500 duration-1000 ease-in-out bg-slate-900 transform scale-105' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=' rounded-lg hover:shadow-lg hover:bg-slate-700' >

          <Link to="/" >
            <img
              src="\src\assets\myvtc-logo.png"
              className="h-14 w-32 m-0 p-1 rounded-lg   "
              alt="logo"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li className="hover:bg-gray-700 p-2 font-bold rounded-md">
            <Link to="/" className="text-white">Virtual Time Capsule</Link>
          </li>
         
          <li className="hover:bg-gray-700 p-2 rounded-md font-bold " >
            <Link to="/memorypage" className="text-white">Memories</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md font-bold ">
            <Link to="/time-capsules" className="text-white">About</Link>
          </li>
        </ul>

        {/* User Menu */}
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={toggleAuthModal}
          >
            {auth}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
