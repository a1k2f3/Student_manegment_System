import React, { useState, useEffect } from 'react';
import axios from 'axios';

const USERBIO = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const token = localStorage.getItem('authToken'); // Get token from localStorage

      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost:3000/student",
          {}, // No need to send email and password if token is used
          {
            headers: {
              Authorization:` Bearer ${token}`, // Pass the token in the Authorization header
            },
          }
        );

        console.log("Fetched Student Details:", res.data); // Log the fetched data
        setStudent(res.data); // Store the response data in state
      } catch (error) {
        console.error("Error fetching student details:", error); // Log the error
        setError('Error in fetching student details');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchStudentDetails();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <div>
      <h1 className="text-lg">Academics</h1>
      <hr />
      
      {student ? ( // Check if student data is available
        <div className="mt-10  flex  flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap items-center">
          <img
            src={'https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg'}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex flex-col mx-5">
            <span className="text-3xl font-medium subpixel-antialiased">
              {student.Email} {/* Display student's email */}
            </span>
          </div>
          <div className="flex flex-col mx-5">
            <span className="text-lg font-medium subpixel-antialiased">
              Academic standings: {student.Name || 'N/A'}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Grade: {student.grade || 'N/A'}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Present: {student.present || 'N/A'}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Leave: {student.leave || 'N/A'}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Absent: {student.absent || 'N/A'}
            </span>
          </div>
        </div>
      ) : (
        <div>No student data available</div> // Show this if student data is not fetched
      )}
    </div>
  );
};

export default USERBIO;