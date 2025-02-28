import { NavLink } from "react-router-dom"
import Navbar2 from "./Navbar2"
// import Link from "next/link"

const Start = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar2 />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-blue-900">
                  Student ERP System
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Streamline your academic journey with our comprehensive student management platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <NavLink
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Get Started
                </NavLink>
                <NavLink
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Student Dashboard"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-xl"
                height="550"
                src="https://smart-school.in/assets/article-media/dashboard1.png"
                width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Everything You Need for Academic Success
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Our student ERP system integrates all aspects of your academic life into one easy-to-use platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Course Management</h3>
                <p className="text-gray-600">
                  Register for courses, access materials, and track your academic progress all in one place.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Assignments & Grades</h3>
                <p className="text-gray-600">
                  Submit assignments online, receive feedback, and view your grades in real-time.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Schedule & Calendar</h3>
                <p className="text-gray-600">
                  Keep track of classes, exams, and important academic deadlines with integrated calendars.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Student Community</h3>
                <p className="text-gray-600">
                  Connect with classmates, join study groups, and collaborate on projects.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Digital Library</h3>
                <p className="text-gray-600">
                  Access e-books, journals, and research materials from anywhere, anytime.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Secure & Private</h3>
                <p className="text-gray-600">
                  Your academic data is protected with enterprise-grade security and privacy controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Simple & Intuitive Student Experience
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Our platform is designed with students in mind, making academic management effortless.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sign Up</h3>
              <p className="text-gray-600">Create your account using your student email and set up your profile.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enroll in Courses</h3>
              <p className="text-gray-600">Browse available courses and register for your semester classes.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">Track Progress</h3>
              <p className="text-gray-600">Monitor your assignments, grades, and overall academic performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">What Students Say</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Hear from students who have transformed their academic experience with our ERP system.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">
                  "This ERP system has completely changed how I manage my courses. I can track assignments, view grades,
                  and communicate with professors all in one place."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <img
                  alt="Student Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
                  <p className="text-sm text-gray-600">Computer Science Major</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">
                  "The calendar integration is amazing! I never miss a deadline now, and I love how I can access all my
                  course materials from my phone."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <img
                  alt="Student Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Maria Rodriguez</p>
                  <p className="text-sm text-gray-600">Business Administration</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">
                  "As an international student, this system has made it so much easier to keep track of my academic
                  requirements and stay on top of my studies."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <img
                  alt="Student Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg?height=40&width=40"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">David Kim</p>
                  <p className="text-sm text-gray-600">Engineering Major</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Affordable Plans for Every Student
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Choose the plan that fits your academic needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
                <p className="text-gray-600">Essential features for individual students</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">Free</span>
                <span className="ml-1 text-gray-600">for students</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Course registration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Assignment tracking</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Basic calendar</span>
                </li>
              </ul>
              <NavLink
                to="#"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get Started
              </NavLink>
            </div>
            <div className="flex flex-col rounded-lg border-2 border-blue-600 bg-white p-6 shadow-md">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
                <p className="text-gray-600">Advanced features for serious students</p>
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Most Popular
                </div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$4.99</span>
                <span className="ml-1 text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Study group tools</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Digital library access</span>
                </li>
              </ul>
              <NavLink
                to="#"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get Started
              </NavLink>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Campus</h3>
                <p className="text-gray-600">For educational institutions</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Campus-wide deployment</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">Admin dashboard</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-600">API integrations</span>
                </li>
              </ul>
              <NavLink
                href="#"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Contact Sales
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Academic Experience?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of students who have already improved their academic journey with our ERP system.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <NavLink
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Get Started Now
              </NavLink>
              <NavLink
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Schedule a Demo
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl">
                Find answers to common questions about our student ERP system.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">How do I get started with the student ERP?</h3>
              <p className="mt-2 text-gray-600">
                Simply sign up using your student email address. Once verified, you can set up your profile and start
                exploring the platform.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Can I access the ERP on my mobile device?</h3>
              <p className="mt-2 text-gray-600">
                Yes! Our ERP system is fully responsive and works on all devices. We also offer dedicated mobile apps
                for iOS and Android.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Is my academic data secure?</h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We use industry-standard encryption and security practices to ensure your data is always
                protected.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Can my institution integrate with your system?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we offer comprehensive API access and integration services for educational institutions. Contact
                our sales team for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 mr-2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span className="text-lg font-bold">Student ERP</span>
              </div>
              <p className="text-sm text-gray-400">Empowering students with technology since 2020.</p>
              <div className="flex gap-4">
                <NavLink href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </NavLink>
                <NavLink  to="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </NavLink>
                <NavLink to="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink  to="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    API Documentation
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-gray-400 hover:text-white">
                    GDPR
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Student ERP System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Start

