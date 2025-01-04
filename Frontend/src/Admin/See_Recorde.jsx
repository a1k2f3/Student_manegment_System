import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SeeRecord = () => {
  const [students, setStudents] = useState(); // Array for student details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const token = localStorage.getItem('authToken'); // Get token from localStorage
      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/display', // No need to send email and password if token is used
          {
            headers: {
              Authorization:` Bearer ${token}`, // Pass the token in the Authorization header
            },
          });
        console.log('Fetched Student Details:', res.data); // Log the fetched data
        setStudents(res.data); // Store the response data in state
      } catch (error) {
        console.error('Error fetching student details:', error); // Log the error
        setError('Failed to fetch student details. Please try again later.');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchStudentDetails();
  }, []); // Empty dependency array to run the effect only once

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }
  const deleteuser = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    const token = localStorage.getItem('authToken'); // Get token from localStorage

    if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
    }

    // Ensure `students` is defined and has an `Email` property
    if (!students || !students.Email) {
        setError("No email address provided for the user.");
        setLoading(false);
        return;
    }

    const email = students.Email; // Extract the email
    console.log(email);

    try {
        const response = await fetch(`http://localhost:3000/deleteuser?email=${encodeURIComponent(email)}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in headers
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorDetails = await response.json(); // Parse error details
            throw new Error(`Failed to delete user: ${errorDetails.message || response.statusText}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log('Delete user response:', data);

        // Optionally show a success message to the user
        alert('User deleted successfully.');

        // Reload page after deleting the user
        window.location.reload();
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('An error occurred while deleting the user. Please try again.');
    } finally {
        setLoading(false); // End loading state
    }
};



  return (
    <main>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className='font-bold border border-gray-300'>Name</th>
            <th className='font-bold border border-gray-300'>Email</th>
            <th className='font-bold border border-gray-300'>Attendance</th>
            <th className='font-bold border border-gray-300'>DeleteRecord</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}> {/* Use student ID as the key */}
              <td className='border border-gray-300'>{student.Name}</td> {/* Use actual student data */}
              <td className='border border-gray-300'>{student.Email}</td>
              <td className='border border-gray-300'>
                <button
                  onClick={() => navigate(`/view`, { state: { email: student.Email } })}
                  className='bg-blue-500 text-white rounded-xl p-3'
                >
                  View
                </button>
              </td>
              <td className='border border-gray-300'>
                <button
                  onClick={deleteuser}
                  className='bg-blue-500 text-white rounded-xl p-3'
                >
                  delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default SeeRecord;
