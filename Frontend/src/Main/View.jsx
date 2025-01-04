import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Userboi2 from '../Admin/Userboi2';

const View = () => {
  const [student, setStudent] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [attendance, setAttendance] = useState('Absent'); // Default attendance
  const [attempt, setAttempt] = useState(0); // Track number of attempts
  const location = useLocation();
  const { email } = location.state || {}; // Extract email from location state

  // Fetch student attendance details on component mount or when email changes
  useEffect(() => {
    const fetchStudentDetails = async () => {
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
        const values = { email };
        const res = await axios.post('http://localhost:3000/seeAttendance', values, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
        console.log('Fetched Student Details:', res.data); // Log the fetched data
        setStudent(res.data); // Store the response data in state
      } catch (error) {
        console.error('Error fetching student details:', error); // Log the error
        setError('Error fetching student details. Please try again later.');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };
    
    fetchStudentDetails();
  }, [email]);

  // Handle attendance toggling between Present and Absent
  const markAttendance = () => {
    setAttempt((prevAttempt) => {
      const newAttempt = prevAttempt + 1;
      const newAttendance = newAttempt % 2 === 0 ? 'Present' : 'Absent';
      setAttendance(newAttendance);
      return newAttempt;
    });
  };

  // Handle attendance submission
  const handleAttendance = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken'); // Get token from localStorage

      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }
    const values = {
      email,
      attendance,
    };
    try {
      const response = await axios.post('http://localhost:3000/attendance', values,{
        headers: {
          Authorization:` Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      console.log('Attendance response:', response.data);
      setStudent(response.data)
      window.location.reload(); // Reload page after
      //  saving attendance
    } catch (error) {
      console.log('Error storing details:', error);
      alert('An error occurred while saving attendance. Please try again.');
    }
  };
  
  const deleteAttendence = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken'); // Get token from localStorage

    if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
    }

    try {
        const values = { email }; // Assuming `email` is defined in the scope
        const response = await fetch(`http://localhost:3000/deleteAttendence?email=${encodeURIComponent(values.email)}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in headers
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete attendance');
        }

        const data = await response.json(); // Parse JSON response
        console.log('Attendance response:', data);

        // Reload page after delete attendance
        window.location.reload();
    } catch (error) {
        console.log('Error deleting attendance:', error);
        alert('An error occurred while deleting attendance. Please try again.');
    }
};


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {/* Userboi2 Component */}
      <Userboi2 />

      {/* Attendance Details */}
      <div className="attendance-details">
        <h1>Attendance Details</h1>
        {student.length > 0 ? (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {student.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="border border-gray-300 p-2">{record.date}</td>
                  <td className="border border-gray-300 p-2">{record.attendence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No attendance records available.</p>
        )}
      </div>

      {/* Attendance Actions */}
      <div className="attendance-actions">
        <button
          className={`p-3 w-[250px] border rounded-md ${
            attendance === 'Present' ? 'bg-green-500' : 'bg-red-600'
          } text-white`}
          onClick={markAttendance}
        >
          {attendance}
        </button>

        <button
          onClick={handleAttendance}
          className="border rounded-md bg-green-500 p-3 w-50 mt-4 text-xl"
        >
          Save Attendance
        </button>
        <button
          onClick={deleteAttendence}
          className="border rounded-md bg-red-600 p-3 w-50 mt-4 text-xl"
        >
          deleteAttendence
        </button>

      </div>
    </>
  );
};

export default View;
