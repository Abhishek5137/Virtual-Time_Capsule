// Signup.jsx
import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Validate data if needed
    onSignup({ username, email, password });
  };

  return (
    <div className="container m-0 flex items-center border p-0 rounded-xl justify-center">
      {/* Card Section */}
      <div className="bg-white p-0 m-0 rounded-md flex items-center">
        {/* Image Section as Background */}
        <div
          className="mr-8 min-w-72 min-h-96 flex justify-center items-center"
          style={{
            backgroundImage: `url('/images/signupvtc.jpg')`, // Replace with the actual path to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px', // Adjust the width as needed
            borderRadius: '0.375rem 0 0 0.375rem', // Adjust the border-radius to match the form
          }}
        />

        {/* Form Section */}
        <div className="min-w-72 min-h-96 flex items-center justify-center p-6">
          <form onSubmit={handleSignup} className="w-full">
            <h2 className="text-2xl font-bold mb-4">Fill Your Credentials</h2>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username:</label>
              <input
                type="text"
                id="username"
                className="w-full border rounded px-3 py-2 transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-3 py-2 transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                className="w-full border rounded px-3 py-2 transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
