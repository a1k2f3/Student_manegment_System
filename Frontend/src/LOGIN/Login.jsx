import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Main/Navbar2';
import axios from 'axios';
import useLoginStore from '../Context/Usercontext';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { email, password, setEmail, setPassword } = useLoginStore();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setErrorMessage('');                
        if (!email || !password) {  
            setErrorMessage("Please fill all the fields");
            return;
        }

        const values = { email, password };
        try {
            const response = await axios.post("http://localhost:3000/api/login", values);
            console.log("Response:", response.data); // Log the full response for inspection
            const { token } = response.data;
        
            if (token) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('email',email)
                navigate('/home');
            } else {
                setErrorMessage(response.data.message || "Invalid credentials, please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
        

        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Navbar2 />
            <div className="flex justify-center items-center h-screen">
                <div className="w-76 p-8 flex flex-col justify-center items-center shadow-lg rounded-xl">
                    <h1 className="text-3xl font-bold mb-6">Log in</h1>
                    {errorMessage && (
                        <p className="text-red-600 mb-4">{errorMessage}</p>
                    )}

                    <form>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Enter your Email" 
                                className="w-60 p-2 border-2 border-black rounded-lg invalid:border-rose-600 invalid:bg-red-100 my-4" 
                                value={email} 
                                onChange={handleEmail} 
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                placeholder="Enter your Password" 
                                className="w-60 p-2 border-2 border-black rounded-lg my-4" 
                                value={password} 
                                onChange={handlePassword} 
                                required
                            />
                        </div>
                        <button 
                            className="max-w-96 px-10 py-2 bg-green-600 rounded-lg hover:bg-green-300 text-xl text-white"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
