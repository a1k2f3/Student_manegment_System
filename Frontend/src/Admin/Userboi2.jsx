import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Count from './Count';
const Userboi2 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [student, setStudent] = useState([]);
  const location=useLocation()
  const { email } = location.state || {}
  useEffect(() => {
    console.log(email)
    const fetchStudentDetails = async () => {
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
    
      const values = { email };
      try {
        const res = await axios.post("http://localhost:3000/displayStudent", values, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        console.log("Fetched Student Details:", res.data); // Log the fetched data
        setStudent(res.data);         
      } catch (error) {
        console.error("Error fetching student details:", error); // Log the error
        setError(error.response?.data?.message || 'Error in fetching student details');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };
    
    fetchStudentDetails();
  }, [email]);
  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state
  return (
    <div>
      <h1 className="text-lg">Academics</h1>
      <hr />
      
      {student ? ( // Check if student data is available
        <div className="mt-10 flex  flex-wrap items-center">
          <img
            src={'https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg'}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex  mx-5">
            <span className="text-3xl font-medium subpixel-antialiased">
              {student.Email} 
            </span>
          </div>
          <div className="flex flex-col mx-5">
           <Count/>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Name: {student.Name|| 'N/A'}
            </span>     
            <span className="text-lg text-slate-300 subpixel-antialiased">
              dob: {student.date_of_birth || 'N/A'}
            </span>
            </div>
        </div>
      ) : (
        <div>No student data available</div> // Show this if student data is not fetched
      )}
    </div>
  );
};

export default Userboi2; 