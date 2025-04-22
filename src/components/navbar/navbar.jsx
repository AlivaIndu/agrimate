import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap py-5 px-10 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">

        <img src="src\assets\images\leaf.png" alt="" className="w-[40px] h-auto"/><span className="ml-1 text-xl">KrishiSaarthi</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="" onClick={() => {
            navigate("/home");
          }}>Home</a>
          <a className="mr-5 hover:text-gray-900" href="#">About us</a>
          <a className="mr-5 hover:text-gray-900" href="#">Services</a>
          <a className="mr-5 hover:text-gray-900" href="#">Contact us</a>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button> */}
        <div className="flex justify-end gap-2">
          <div className="relative">
            <i className="fa-solid fa-globe text-white absolute sm:top-[13px] left-[4px] top-[9px]"></i>
            <select name="" id="" className="sm:p-[7px_30px] p-[4px_17px] bg-[rgba(0,0,0,0.2)] text-white border-[1px] border-[white] rounded-[6px]">
              <option value="">English</option>
              <option value="">Bengali</option>
              <option value="">Hindi</option>
            </select>
          </div>
          <button
              className="w-30 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out py-2 px-6 rounded-full text-lg font-semibold"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
