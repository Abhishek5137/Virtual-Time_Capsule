// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src="\src\assets\myvtc-logo.png" // Replace with the actual path to your logo
          alt="Virtual Time Capsule Logo"
          className='h-14 w-32 p-0 m-0 rounded-xl'
        />

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p>Discover the joy of preserving memories with Virtual Time Capsule.</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Email: info@virtualtimecapsule.com</p>
          <p>Address: 123 Memory Lane, Nostalgia City</p>
          <p>Phone No: 1234567890</p>
        </div>

        
      </div>
      <p className="mt-4">&copy; 2024 Myvtc Vault. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
