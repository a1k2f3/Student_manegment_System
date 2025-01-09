import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="bg-sky-300 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <NavLink to="/home">MyApp</NavLink>
          </div>

          {/* Navigation Links for larger screens */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-white py-2 px-4 rounded-lg transition-all duration-300 ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
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
                  `text-white py-2 px-4 rounded-lg transition-all duration-300 ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
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
                  `text-white py-2 px-4 rounded-lg transition-all duration-300 ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
                }
                aria-label="Profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Icon for smaller screens */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-sky-300 p-4">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `text-white py-2 px-4 rounded-lg block ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
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
                    `text-white py-2 px-4 rounded-lg block ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
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
                    `text-white py-2 px-4 rounded-lg block ${isActive ? 'bg-red-500' : 'hover:bg-red-500'}`
                  }
                  aria-label="Profile"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
