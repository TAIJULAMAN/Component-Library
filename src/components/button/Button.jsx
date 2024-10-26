import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, variant = "primary", onClick }) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    glow: "bg-blue-500 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50 animate-pulse",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    bounce:
      "bg-purple-500 text-white hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105",
    shadow:
      "bg-indigo-500 text-white hover:bg-indigo-600 shadow-md hover:shadow-lg",
    rotate:
      "bg-teal-500 text-white hover:bg-teal-600 transform hover:rotate-12 transition-all",
    gradientBlue: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    gradientGreen: "bg-gradient-to-r from-green-400 to-green-600 text-white",
    gradientPink: "bg-gradient-to-r from-pink-400 to-pink-600 text-white",
    hoverGlow:
      "bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50",
    hoverScale:
      "bg-green-500 text-white hover:scale-105 transform transition duration-200",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantClasses[variant]} transition duration-200`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "glow",
    "outline",
    "bounce",
    "shadow",
    "rotate",
    "gradientBlue",
    "gradientGreen",
    "gradientPink",
    "hoverGlow",
    "hoverScale",
  ]),
  onClick: PropTypes.func,
};

export default Button;
