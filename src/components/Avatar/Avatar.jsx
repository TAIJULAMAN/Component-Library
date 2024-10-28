import React from "react";

const Avatar = ({ src, alt, variant }) => {
  const baseClasses = "w-16 h-16 rounded-full object-cover transition-all duration-300";
  const variants = {
    default: "border border-gray-200",
    bordered: "border-4 border-blue-500",
    gradient: "border-4 border-gradient-to-r from-purple-500 to-blue-500",
    shadowed: "shadow-md",
    hoverZoom: "hover:scale-110",
    animatedRotate: "hover:rotate-6",
    glowing: "shadow-lg shadow-blue-400",
    outline: "border-2 border-blue-500",
    roundedSquare: "rounded-lg",
    glass: "bg-white/20 backdrop-blur-md border border-white",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]}`}>
      <img src={src || "https://via.placeholder.com/150"} alt={alt} className="w-full h-full rounded-full" />
    </div>
  );
};

export default Avatar;
