import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font bg-[url(assets\images\e.jpg)] bg-center bg-cover h-[75vh]">
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hello, Farmer! Ready to grow smarter today?
            <br className="hidden lg:inline-block" />
            This is your digital guide to smart farming
          </h1>
          <p className="mb-8 leading-relaxed">
            One-stop solution for the farmers to grow their agricultural segment.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button
              className="w-48 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out py-2 px-6 rounded-full text-lg font-semibold"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </button>
            <button
              className="w-48 text-indigo-600 bg-white border-2 border-indigo-500 hover:bg-indigo-50 shadow-md transform hover:scale-105 transition duration-300 ease-in-out py-2 px-6 rounded-full text-lg font-semibold"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Signup
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
