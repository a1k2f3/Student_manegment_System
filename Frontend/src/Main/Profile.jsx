import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import useStore from '../Context/Usercontext';

const Profile = () => {
  // const { email, password } = useStore();
  // const [studentDetail, setStudentDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [profile, setProfile] = useState({
    name: '',
    age: 28,
    email: '',
    phone: '123-456-7890',
    dob: '1995-06-15',
    image: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // console.log("useEffect triggered, email:", email, "password:", password); // Debugging

    // if (!email || !password) {
    //   setError('Email or password is missing.');
    //   setLoading(false);
    //   return;
    // }

    const fetchStudentDetails = async () => {
      console.log("Fetching student details..."); // Debugging

      // try {
      //   // const values = { email, password };
      //   const res = await axios.post('http://localhost:3000/student', values);
      //   console.log("API response:", res.data); // Debugging API response

      //   // setStudentDetail(res.data);

      // } catch (error) {
      //   console.error("Error in fetching student details:", error); // Log error
      //   setError('Error in fetching student details');
      // } finally {
      //   setLoading(false);
      // }
    };

    fetchStudentDetails();
  }, [ ]);

  const handleSubmit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      console.log("Profile changes saved:", profile); // Debug profile data
      // Here you can add API call to save changes
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfile({ ...profile, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <main>
        <div className="main w-100 h-screen flex grow justify-center items-center">
          <div className="profile mt-5 bg-blue-200 w-full h-screen left">
            <header className="bg-blue-100 p-3 flex flex-wrap">
              <img
                src={profile.image}
                alt="Profile"
                className="h-20 w-20 rounded-full"
              />
              <input
                type="file"
                accept="image/*"
                onChange={changeImage}
                className={`block w-60 h-10 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2 ${
                  !isEditing ? 'opacity-0' : 'opacity-1'
                }`}
                disabled={!isEditing}
              />
              <div className="flex flex-col mx-5">
                <span className="text-1xl font-medium subpixel-antialiased">
                  {profile.name}
                </span>
                <span className="text-lg text-slate-300 subpixel-antialiased">
                  {profile.email}
                </span>
                <span className="text-lg text-slate-300 subpixel-antialiased">
                  Student
                </span>
              </div>
            </header>
            <div className="flex justify-around flex-wrap grow-1">
              <div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="mt-1 block w-72 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    className="mt-1 block w-72 p-2 outline-none border-none rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-72 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="mt-1 block w-72 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                    className="mt-1 block w-72 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  className={`bg-sky-500 w-72 p-2 border rounded-full text-white font-medium ${
                    isEditing ? 'bg-red-600' : 'bg-green-500'
                  }`}
                  onClick={handleSubmit}
                >
                  {isEditing ? 'Save Changes' : 'Edit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
