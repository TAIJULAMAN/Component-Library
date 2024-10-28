import React from "react";

const RadioButton = ({ selected, onChange, variant }) => {
  const baseClasses = "h-5 w-5 rounded-full border-2 focus:outline-none";
  const variants = {
    default: "border-gray-300 bg-white",
    animated: "transition-transform duration-300 ease-in-out",
    hover: "hover:bg-gray-200",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
    outline: "border-blue-500",
    glow: "shadow-lg shadow-blue-400",
    shadow: "shadow-md",
    filled: "bg-blue-500",
    pulsate: "animate-pulse",
    scale: "hover:scale-110 transform transition-transform duration-300",
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        checked={selected}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`${baseClasses} ${variants[variant]} ${
          selected ? "bg-blue-500 border-blue-500" : ""
        }`}
      />
    </label>
  );
};

export default RadioButton;
