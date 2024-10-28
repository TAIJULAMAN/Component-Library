import React from "react";

const Alert = ({ message, variant, onClose }) => {
  const baseClasses = "p-4 rounded-md shadow-md text-white flex items-center justify-between";

  const variants = {
    default: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
    animated: "transition duration-300 ease-in-out transform hover:scale-105 bg-pink-500",
    outline: "border-2 border-blue-500 text-blue-500 bg-blue-300",
    glow: "bg-blue-600 shadow-lg shadow-blue-400",
    filled: "bg-indigo-600 text-white",
    pulsate: "animate-pulse bg-pink-500",
  };

  return (
    <div className={`${baseClasses} ${variants[variant] || variants.default}`}>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold hover:text-gray-200 focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
