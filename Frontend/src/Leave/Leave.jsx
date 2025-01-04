import React, { useState } from 'react';
import Navbar from '../Main/Navbar';
// import axios from 'axios';
const Leave = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleSubject = (e) => {
        setSubject(e.target.value);
    };

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
               try{

               }
               catch(error){
console.log(error)
               }
        console.log({ email, subject, text });

    };

    return (
<>
<Navbar/>
<div className=" mt-5 flex justify-center items-center flex-col h-screen bg-slate-100">
            <div className="bg-white p-5 border rounded-lg shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="Enter Your email"
                            className="w-80 p-2 my-2 border-2 border-black rounded-lg text-xl"
                            />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={subject}
                            onChange={handleSubject}
                            placeholder="Enter the application Subject"
                            className="w-80 p-2 border-2 border-black rounded-lg my-4 text-xl"
                            />
                    </div>
                    <div>
                        <textarea
                            value={text}
                            onChange={handleText}
                            placeholder="Enter your message"
                            className="w-72 h-80 p-2 border-2 border-black rounded-lg my-4 text-xl"
                            ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-60 p-2 bg-green-500 text-white hover:bg-green-300 rounded-lg text-2xl font-medium"
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
