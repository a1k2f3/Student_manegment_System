import React, { useState } from 'react';
import useLoginStore from './Zustand';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const { email, password, setEmail, setPassword } = useLoginStore();
const [error,setErrorMessage]=useState('')
  const navigate=useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault(); 
  setErrorMessage('');                
  if (!email || !password) {  
      setErrorMessage("Please fill all the fields");
      return;
  }
  const values = { email, password };
  try {
      const response = await axios.post("http://localhost:3000/login", values);
      console.log("Response Data:",response.data);
      // Check if login was successful based on response structure
      if (response.data) { // Assuming response has a success property
          console.log("Navigating to home...");
          navigate('/display'); // Navigate to the home page
      } else {
          setErrorMessage(response.data.message || "Invalid credentials, please try again."); // Use message from response
      }
  } catch (error) {
      console.error("Error during login:", error); // Log the error
      setErrorMessage("An error occurred. Please try again."); // Set error message for the user
  }

  // Clear input fields
  setEmail("");
  setPassword("");
};
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
   
   >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
