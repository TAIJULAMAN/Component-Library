import React from "react";

const Card = ({ variant, title, content, imageUrl, onClick }) => {
  const baseClasses = "p-5 rounded-lg shadow-md transition-all duration-300";
  const variants = {
    default: "bg-white border border-gray-200",
    gradient: "bg-gradient-to-r from-purple-500 to-blue-500 text-white",
    hoverEffect: "hover:shadow-lg hover:scale-105",
    animated: "transition-transform transform hover:rotate-2",
    shadow: "shadow-xl",
    glow: "shadow-lg shadow-blue-400",
    outline: "border-2 border-blue-500",
    rounded: "rounded-2xl",
    flat: "border-none shadow-none",
    glass: "bg-white/20 backdrop-blur-md",
  };

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} cursor-pointer`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="card-image w-full h-40 object-cover rounded-t-lg"
        />
      ) : (
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="card-image w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <div className="card-content p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
