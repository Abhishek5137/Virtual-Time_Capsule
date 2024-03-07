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
  
  const handleSignup = async (signupData) => {
    // Add your logic to handle signup data (e.g., send data to the server)
    // console.log(signupData);
    try{
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
      if(response.ok){
        console.log('Signup Data:', signupData);
        // Close the modal after signup
        closeModal();
        // Redirect to the dashboard
        navigate('/dashboard');
      }
    }
    catch (error) {
      console.error('Error occured:', error);
    }
  };

  const handleLogin = async(loginData) => {
    // Add your logic to handle login
    try{ 
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
      if(response.ok){
        console.log('Login Data:', loginData);
        // Close the modal after login
        closeModal();
        // Redirect to the dashboard
        navigate('/dashboard');
      }
    }
    catch (error) {
      console.error('Error occured:', error);
    }
  };
  const handleRedirect = () => {
    closeModal();
    navigate('/');
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-slate-200 p-2 rounded-md max-w-2xl w-full">
        <div > 
        <div className='w-full flex  items-center justify-end '>
            <button onClick={handleRedirect}
              type="button"
              className=" right-0 h-6 w-6  text-red-500 bg-slate-300 hover:bg-slate-700 rounded-full"
            >
              X
            </button>

          </div>
          <div className=''>
            <span><h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login here' : 'Sign Up'}</h2></span>

          </div>

         
        </div>
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
