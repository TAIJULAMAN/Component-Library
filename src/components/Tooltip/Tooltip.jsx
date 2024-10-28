import React from "react";

const Tooltip = ({ content, position = "top", variant = "default" }) => {
  const baseClasses = "relative inline-block cursor-pointer group";

  const tooltipBase =
    "absolute px-4 py-4 text-xs font-medium text-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none";

  const positionStyles = {
    top: "-translate-y-full left-1/2 transform -translate-x-full",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  };

  const variants = {
    default: "bg-gray-800",
    gradient: "bg-gradient-to-r from-pink-500 to-yellow-500",
    fadeIn: "transition-opacity duration-500 ease-in bg-black",
    zoom: "transform scale-0 group-hover:scale-100 transition duration-300  bg-black",
    slide:
      "transition-all duration-300 transform translate-y-2 group-hover:translate-y-0  bg-black",
    shadow: "shadow-xl bg-black",
    outline: "border border-blue-500 bg-black text-blue-500",
    rounded: "bg-gray-800 rounded-full",
    bounce: "animate-bounce bg-black",
    glow: "bg-gray-800 shadow-lg shadow-blue-400",
  };

  return (
    <div className={baseClasses}>
      <span className="px-4 py-2 bg-blue-500 text-white rounded">Hover me</span>
      <span
        className={`${tooltipBase} ${variants[variant]} ${positionStyles[position]}`}
      >
        {content}
      </span>
    </div>
  );
};

export default Tooltip;
