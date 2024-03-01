// // Navbar.jsx
// import React, { useState } from 'react';
// import Auth from './auth/Auth';

// const Navbar = () => {
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

//   const toggleAuthModal = () => {
//     setIsAuthModalOpen((prev) => !prev);
//   };

//   return (
//     <nav className="bg-gray-800 p-1 ">
//       <div className="container mx-auto flex justify-between items-center ">
//         {/* Logo */}
        
//         <a href="/" className="text-white text-2xl font-bold">
//         <img src="\src\assets\myvtc-logo.png" className='h-14 w-32 p-0 m-0 rounded-full' alt="logo" />
//         </a>

//         {/* Navigation Links */}
//         <ul className="flex space-x-4">
//           <li><a href="/" className="text-white">Home</a></li>
//           <li><a href="/time-capsules" className="text-white">Time Capsules</a></li>
//           <li><a href="/memories" className="text-white">Memories</a></li>
//         </ul>

//         {/* User Menu */}
//         <div className="flex items-center">
//           <a href="/profile" className="text-white mr-4 hover:bg-red-200 rounded-lg p-1 ">Profile</a>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-full"
//             onClick={toggleAuthModal}
//           >
//             Login/Signup
//           </button>
//         </div>

//         {/* Auth Modal */}
//         {isAuthModalOpen && <Auth closeModal={toggleAuthModal} />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/Auth';

const Navbar = ({ toggleAuthModal,auth }) => {
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

  return (
    <nav className={` z-20 bg-slate-800 p-1 ${isScrolled ? 'fixed top-0 w-full' : ''}`}>
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
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md font-bold ">
            <Link to="/time-capsules" className="text-white">Time Capsules</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md font-bold " >
            <Link to="/memorypage" className="text-white">Memories</Link>
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
