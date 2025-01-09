import React, { useState } from 'react';
import Navbar from '../Main/Navbar';
import axios from 'axios';
const Leave = () => {
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    
    const handleSubject = (e) => setSubject(e.target.value);
    const handleText = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem('email');
        const values = { email, subject, text };
        try {
            const response = await axios.post("http://localhost:3000/api/leave", values);
            console.log("Response:", response.data);
            alert("Leave sent successfully");
            alert("hjkh")
            navigate('/home');
            if (response.status===200) {
                alert("Leave sent successfully");
                navigate('/home');
            } else {
                setErrorMessage(response.data.message || "Invalid credentials, please try again.");
            }
        } catch (error) {
            console.log(error);
        }
        console.log({ email, subject, text });
    };

    return (
        <>
            <Navbar />
            <div className="mt-10 flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
                <div className="bg-white p-8 border rounded-xl shadow-xl w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
                        Leave Application
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-600 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={handleSubject}
                                placeholder="Enter the application subject"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-600 mb-2">
                                Message
                            </label>
                            <textarea
                                value={text}
                                onChange={handleText}
                                placeholder="Enter your message"
                                rows="6"
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Leave;
