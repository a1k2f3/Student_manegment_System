import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Main/Navbar2';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date_of_birth, setDob] = useState('');
    const [file, setFile] = useState(null); // New state for file input

    const handleName = (e) => setName(e.target.value);
    const handleContact = (e) => setContact(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleDob = (e) => setDob(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !contact || !email || !password || !date_of_birth) {
            alert("Please fill all the fields");
            return;
        }
    
        const values = {
            name,email,contact,date_of_birth,password
        };
        try {
            const response = await axios.post("http://localhost:3000/api/register", values);
            console.log("Response:", response);
            alert("Welcome");
            navigate('/home');
        } catch (error) {
            console.log("Error storing details:", error);
            alert("An error occurred while adding the user. Please try again.");
        }
        setName("");
        setContact("");
        setEmail("");
        setPassword("");
        setDob("");
        setFile(null);
    }
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
    return (
        <>
            <Navbar2 />
            <div className="mt-10 w-96 flex flex-col justify-center items-center rounded-xl h-100 overflow mx-auto shadow-lg">
                <h1 className="text-3xl mt-0 font-bold">Sign-up</h1>
                <div>
                    <input type="text" placeholder='Enter your name' value={name} onChange={handleName} className='w-60 p-2 border-2 border-black rounded-lg my-2 ' />
                </div>
                <div>
                    <input type="email" placeholder='Enter your Email' value={email} onChange={handleEmail} className='w-60 p-2 my-2 border-2 border-black rounded-lg invalid:border-red-600 invalid:bg-red-300 ' />
                </div>
                <div>
                    <input type="number" placeholder='Enter your contact' value={contact} onChange={handleContact} className="w-60 my-2 p-2 border-2 border-black rounded-lg " />
                </div>
                <div>
                    <input type="date" placeholder='Enter your date of birth' value={date_of_birth} onChange={handleDob} className='w-60 p-2 border-2 border-black rounded-lg my-2' />
                </div>
                <div>
                    <input type="password" placeholder='Enter your password' value={password} onChange={handlePassword} className='w-60 p-2 my-2 border-2 border-black rounded-lg ' />
                </div>
                <div>
                    <input type="file" accept=".jpg,.png,.gif" onChange={handleFileChange} className="block my-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-2" />
                </div>
                <div>
                    <button className='max-w-96 px-10 py-2 bg-green-600 rounded-lg hover:bg-green-300 text-xl text-white' onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </>
    );
}
};

export default Register;
