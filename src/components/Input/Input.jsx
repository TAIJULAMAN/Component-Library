// src/components/input/Input.jsx
import React from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, variant = "default", size = "md", ...props }) => {
  const variantClasses = {
    default: "border border-gray-300",
    primary: "border border-blue-500",
    success: "border border-green-500",
    warning: "border border-yellow-500",
    danger: "border border-red-500",
    standard: "border-gray-300",
    gradient:
      "text-white border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded",
    animatedFocus:
      "border-gray-300 transition-all duration-300 ease-in-out focus:border-blue-500 focus:shadow-lg",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <input
      {...props}
      placeholder={placeholder}
      className={`rounded ${variantClasses[variant]} ${sizeClasses[size]} focus:outline-none`}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "danger",
    "standard",
     "gradient",
      "animatedFocus"
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Input;
