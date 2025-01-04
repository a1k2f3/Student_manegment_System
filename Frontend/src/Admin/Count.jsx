import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Count = () => {
  const location = useLocation();
  const { email } = location.state || {};
  // const { email } = location.state || {};
  const [count, setCount] = useState(null);
  const [absent, setAbsent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [academics, setAcademics] = useState(null);
  const totalDays = 30; // Adjust total days as needed

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start the loading state
       
      const token = localStorage.getItem('authToken'); // Get token from localStorage 
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }
    
      if (!email) {
        setError('Email not provided');
        setLoading(false);
        return;
      }
    
     
      try {
        if (!email) throw new Error('Email not provided');

        // const headers = { Authorization: `Bearer ${token}` };
        const values = { email };

        // Fetch present count
        const resPresent = await axios.post('http://localhost:3000/count', values);
        setCount(resPresent.data.count);
        // Fetch absent count
        const resAbsent = await axios.post('http://localhost:3000/absent', values);
setAbsent(resAbsent.data.count);
        // Calculate attendance percentage
        const presentPercentage = (resPresent.data * 100) / totalDays;
        setAcademics(presentPercentage.toFixed(2)); // Round to 2 decimal places
      } catch (error) {
        console.error('Error fetching attendance details:', error);
        setError(error.response?.data?.message || 'Failed to fetch attendance details. Please try again later.');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchData();
  }, [email]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return (
      <div>
        {error}
        <button onClick={() => window.location.reload()} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Retry
        </button>
      </div>
    ); // Display error message with retry option
  }

  return (
    <>
      <div className="text-lg font-medium subpixel-antialiased">
        Attendance: {count !== null ? count : 'N/A'}
      </div>
      <div className="text-lg font-medium subpixel-antialiased">
        Absent: {absent !== null ? absent : 'N/A'}
      </div>
      <div className="text-lg font-medium subpixel-antialiased">
        Academics: {academics !== null ? `${academics}%` : 'N/A'}
      </div>
    </>
  );
};

export default Count;
