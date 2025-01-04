import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className=' w-full  bg-sky-300   p-4 sm:w-full md:w-full   
      rounded-4  '>
        <ul className='flex  justify-center grid-cols-12'>
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                `block text-center py-2 px-4 text-white rounded ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
              } 
              aria-label="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block text-center py-2 px-4 text-white rounded ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
              } 
              aria-label="Logout"
            >
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `block text-center py-2 px-4 text-white rounded ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
              } 
              aria-label="Profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
