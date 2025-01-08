import React, { useState, useEffect } from 'react';
import axios from 'axios';

const USERBIO = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [student, setStudent] = useState(null);
  const [attendanceStats, setAttendanceStats] = useState({
    totalCount: 0,
    presentCount: 0,
    leaveCount: 0,
    absentCount: 0,
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setError("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost:3000/student",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStudent(res.data); // Store the student data
        fetchAttendance(res.data.Email); // Call attendance API with student's email
      } catch (error) {
        console.error("Error fetching student details:", error);
        setError("Error in fetching student details");
        setLoading(false);
      }
    };

    const fetchAttendance = async (email) => {
      try {
        const token = localStorage.getItem('authToken');
        const res = await axios.post(
          'http://localhost:3000/seeAttendance',
          { email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const attendanceData = res.data;
        const totalCount = attendanceData.length;
        const presentCount = attendanceData.filter(record => record.status === 'Present').length;
        const leaveCount = attendanceData.filter(record => record.status === 'leave').length;
        const absentCount = attendanceData.filter(record => record.status === 'Absent').length;
console.log("absent",absentCount)
console.log(presentCount)
        setAttendanceStats({ totalCount, presentCount, leaveCount, absentCount });
      } catch (error) {
        console.error('Error fetching attendance:', error);
        setError('Error fetching attendance details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="text-lg">Academics</h1>
      <hr />

      {student ? (
        <div className="mt-10 flex flex-wrap items-center">
          <img
            src={'https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg'}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex flex-col mx-5">
            <span className="text-3xl font-medium subpixel-antialiased">
              {student.Email}
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
              Total Attendance: {attendanceStats.totalCount}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Present: {attendanceStats.presentCount}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Leave: {attendanceStats.leaveCount}
            </span>
            <span className="text-lg text-slate-300 subpixel-antialiased">
              Absent: {attendanceStats.absentCount}
            </span>
          </div>
        </div>
      ) : (
        <div>No student data available</div>
      )}
    </div>
  );
};

export default USERBIO;
