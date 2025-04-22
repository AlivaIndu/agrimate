import React from "react";
import Password from "../../components/password/password";

const Signup = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-20">
        {/* Left Description */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grow with Technology 🌿
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join the smart farming movement and take control of your agricultural journey with advanced insights, tools, and support.
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full md:w-[500px]">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>

          <div className="mb-4">
            <label htmlFor="full-name" className="block text-lg text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            />
          </div>

          <Password />

          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-full text-lg transition duration-300">
            Sign Up
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
