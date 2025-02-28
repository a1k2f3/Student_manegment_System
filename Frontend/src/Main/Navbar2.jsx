import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-blue-600">
          Student ERP
        </NavLink>
        <div className="flex items-center space-x-6">
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
    </nav>
  )
}

export default Navbar2

