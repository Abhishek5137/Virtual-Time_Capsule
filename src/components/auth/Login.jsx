// Login.jsx
import React, { useState } from 'react';

const Login = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    onLogin({email,password})
    // console.log('Logging in with:', email, password);
  };

  return (
    <div className="container m-0 flex items-center border p-4 rounded-xl justify-center">
      {/* Card Section */}
      <div className="bg-white p-0 rounded-md flex items-center">
        {/* Image Section as Background */}
        <div
          className="mr-8 min-w-72 min-h-96 flex justify-center items-center"
          style={{
            backgroundImage: `url('/src/assets/loginvtc.jpg')`, // Replace with the actual path to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px', // Adjust the width as needed
            borderRadius: '0.375rem 0 0 0.375rem', // Adjust the border-radius to match the form
          }}
        />

        {/* Form Section */}
        <div className="min-w-72 min-h-96 flex items-center justify-center p-2">
          <form onSubmit={handleLogin} className="w-full">
            <h2 className="text-2xl font-bold mb-4">Welcome Back </h2>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-3 py-2 transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border rounded px-3 py-2 transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
