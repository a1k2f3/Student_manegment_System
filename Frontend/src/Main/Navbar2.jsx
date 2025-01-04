import React from 'react';
import { Link } from 'react-router-dom';
const Navbar2 = () => {
  return (
    <div>
      <nav className='w-full bg-sky-300  p-4 space-y-2'>
        <ul className='flex   text-1xl   grow-1 items-center justify-center  sm:space-y-0'>
          <li>
            <Link to="/" className='block text-center py-2 px-4 text-white hover:bg-red-500 rounded'>Home</Link>
          </li>
          <li>
            <Link to="/login" className='block text-center py-2 px-4 text-white hover:bg-red-500 rounded'>Login</Link>
          </li>
          
          <li>
            <Link to="/signup" className='block text-center py-2 px-4 text-white hover:bg-red-500 rounded'>Signup</Link>
          </li>
          
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar2;
