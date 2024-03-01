// Auth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const Auth = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleAuthForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSignup = (signupData) => {
    // Add your logic to handle signup data (e.g., send data to the server)
    console.log('Signup Data:', signupData);
    // Close the modal after signup
    closeModal();

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  const handleLogin = () => {
    // Add your logic to handle login
    // Close the modal after login
    closeModal();

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-slate-200 p-2 rounded-md max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {isLogin ? <Login onLogin={handleLogin} /> : <Signup onSignup={handleSignup} />}
        <p className="mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-blue-500 ml-1"
            onClick={() => {
              toggleAuthForm();
            }}
          >
            {isLogin ? 'Sign up here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
