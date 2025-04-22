import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Password = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="mb-8">
      <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={isShowPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg pr-12"
          placeholder={placeholder || "•••••••"}
        />
        <div
          className="absolute inset-y-0 right-4 flex items-center text-gray-500"
          onClick={toggleShowPassword}
        >
          {isShowPassword ? (
            <FaRegEye size={22} className="cursor-pointer" />
          ) : (
            <FaRegEyeSlash size={22} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Password;
