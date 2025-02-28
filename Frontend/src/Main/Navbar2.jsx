import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-blue-600">
          Student ERP
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-sm text-gray-600 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/features" className="text-sm text-gray-600 hover:text-blue-600">
            Features
          </NavLink>
          <NavLink to="/pricing" className="text-sm text-gray-600 hover:text-blue-600">
            Pricing
          </NavLink>
          <NavLink to="/resources" className="text-sm text-gray-600 hover:text-blue-600">
            Resources
          </NavLink>
          <NavLink to="/login" className="text-sm text-gray-600 hover:text-blue-600">
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" className="text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/features" className="text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Features
            </NavLink>
            <NavLink to="/pricing" className="text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Pricing
            </NavLink>
            <NavLink to="/resources" className="text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Resources
            </NavLink>
            <NavLink to="/login" className="text-sm text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
