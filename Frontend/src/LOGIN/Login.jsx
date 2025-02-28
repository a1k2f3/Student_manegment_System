import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Main/Navbar2';
import axios from 'axios';
import useLoginStore from '../Context/Usercontext';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
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

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/api/login", { email, password });
            const { token } = response.data;
        
            if (token) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('email', email);
                navigate('/home');
                setEmail("");
                setPassword("");
            } else {
                setErrorMessage(response.data.message || "Invalid credentials, please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar2 />
            <div className="flex justify-center items-center min-h-screen p-4">
                <div className="w-full max-w-md p-8 bg-white flex flex-col justify-center items-center shadow-lg rounded-xl">
                    <h1 className="text-2xl font-bold mb-6 font-mono">Sign in with email</h1>
                    {errorMessage && (
                        <p className="text-red-600 mb-4">{errorMessage}</p>
                    )}

                    <form onSubmit={handleSubmit} className="w-full">
                        <div>
                            <input 
                                type="email" 
                                placeholder="Enter your Email" 
                                className="w-full p-2 border-2 border-black rounded-lg invalid:border-rose-600 invalid:bg-red-100 my-4" 
                                value={email} 
                                onChange={handleEmail} 
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                placeholder="Enter your Password" 
                                className="w-full p-2 border-2 border-black rounded-lg my-4" 
                                value={password} 
                                onChange={handlePassword} 
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full px-10 py-2 bg-blue-600 rounded-lg hover:bg-green-300 text-xl text-white"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
