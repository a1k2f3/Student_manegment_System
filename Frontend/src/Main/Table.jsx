import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Table = () => {
  const [attendance, setAttendance] = useState("Absent");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate=useNavigate()
  useEffect(() => {
      const fetchStudentDetails = async () => {
      const token = localStorage.getItem('authToken'); // Get token from localStorage
      console.log("Retrieved Token:", token); // Debugging log

      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost:3000/seeAttendance",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          }
        );

        console.log("Fetched Attendance Records:", res.data); // Log the fetched data
        setAttendanceRecords(res.data); // Store the response data in state
      } catch (error) {
        console.error("Error fetching attendance records:", error); 
        setError('Error in fetching attendance records');
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchStudentDetails();
  }, []);

  const handleViewToggle = () => {
    setView((prev) => !prev); // Toggle view state
  };

  const markAttendance = () => {
    // Logic to mark attendance
    setAttendance((prev) => (prev === "Absent" ? "Present" : "Absent"));
  };
  const navigateToLeave = () => {
    navigate('/leave');
  };

 const handleAttendence = async () => {
    const token = localStorage.getItem('authToken'); // Get the token for the attendance submission
console.log("token",token)
    try {
      const response = await axios.post("http://localhost:3000/attendance", {
        attendance 
      },{
        headers: {
          Authorization: `Bearer ${token}` // Pass token in the Authorization header
         }
      });
      console.log("Attendance Data:", attendance);
      console.log("Response:", response.data);
      // window.location.reload();
    } catch (error) {
      console.error("Error storing attendance details:", error);
      alert("An error occurred while saving attendance. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <table className="w-100 border-separate border-spacing-10 border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Mark Attendance</th>
              <th className="border border-slate-300">View</th>
              <th className="border border-slate-300">Leave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button
                  className={`p-3 w-full border rounded-md ${attendance === 'Present' ? 'bg-green-500' : 'bg-red-600'}`}
                  onClick={markAttendance}
                  disabled={attendance === 'Present'}
                >
                  {attendance}
                </button>
              </td>
              <td>
                <button
                  className="p-3 w-full bg-green-500 border rounded-md"
                  disabled={attendance === 'Present'}
                  onClick={navigateToLeave}
                >
                  Leave
                </button>
              </td>
              <td>
                <button
                  className="p-3 w-full bg-slate-100 text-sm border rounded-md"
                  onClick={handleViewToggle}
                >
                  {view ? 'Hide' : 'View'} Attendance
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {view && (
        <div>
          <h1>Attendance Details</h1>
          <ul>
            {attendanceRecords.length > 0 ? (
              attendanceRecords.map((record, index) => (
                <li key={index}>
                  <strong>Date:</strong> {record.date}, <strong>Status:</strong> {record.attendence}
                </li>
              ))
            ) : (
              <p>No attendance records available.</p>
            )}
          </ul>
        </div>
      )}
      <div className="flex justify-end item-center w-100 flex-wrap">
        <button onClick={handleAttendence} className='border rounded-md bg-green-500 p-3 w-50 mt-20 text-xl'>Save</button>
      </div>
    </>
  );
};

export default Table;