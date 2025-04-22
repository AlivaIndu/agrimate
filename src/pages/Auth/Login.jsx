import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "../../components/password/password";
import { validateEmail } from "../../Utils/helper";
import axiosInstance from "../../Utils/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleLogin = async (e) => {
      e.preventDefault();
      if(!validateEmail(email)){
        seterror("Please enter a valid email address");
        return;
      }

      if(!password){
        seterror("Please enter a password");
        return;
      }

      seterror("");

      //Login API Call

      try{
        const response = await axiosInstance.post("/login",{
          email: email,
          password:password,
        });

        //handle successful login response
        if(response.data && response.data.accessToken){
          localStorage.setItem("token",response.data.accessToken);
          navigate("/home");
        }
      } catch (error) { 
        //handle login error
        if(
          error.response &&
          error.response.data && 
          error.response.data.message
        ) {
          seterror(error.response.data.message);
        } else{
          seterror("An unexpected error occured, please try again");
        }
      }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">

        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 mt-10">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Smart Farming with Intelligence & Innovation
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering farmers with real-time insights, disease detection, and market trends.
            <br />
            Join the Agri-Tech revolution today!
          </p>
        </div>
        {/* Login Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full md:w-[550px]">
          <form onSubmit={ handleLogin }>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Login to Your Account
            </h2>

            {/* email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                placeholder="you@example.com"
                value={email}
                onChange={({target})=>{
                  setEmail(target.value);
                  seterror("");
              }}
              />
            </div>

            <Password value={password}
                onChange={({target})=>{setpassword(target.value);seterror("");
              }}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 text-lg transition duration-300 rounded-full">
              Login
            </button>

            <div className="text-center text-sm text-gray-500 my-2">or</div>

            <button
              onClick={() => navigate("/signup")}
              className="w-full border border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-semibold py-3 text-lg rounded-full transition duration-300"
            >
              Create Account
            </button>

            <p className="text-sm text-center text-gray-500 mt-6">
              Join the future of farming — smart, sustainable, and connected.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Login;
